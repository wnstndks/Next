// next-auth 세팅
import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// 아이디 비번으로 로그인 기능구성
import bcrypt from 'bcrypt';
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  providers: [
    // 로그인 방식을 provider라 함
    GithubProvider({
      clientId: 'Ov23ctccVXWVLdJ5kICX',
      clientSecret: 'c74f7f5af0cda2ae2f2029344d5d5f78af2c8183',
    }),

    // 아이디 비번 로그인
    CredentialsProvider({
      //1. 로그인페이지 폼 자동생성해주는 코드 
      name: "credentials",
        credentials: {
          // 로그인페이지에 들어갈 input들
          email: { label: "email", type: "text" },
          password: { label: "pw", type: "pw" },
      },

      //2. 로그인요청시 실행되는코드
      //직접 DB에서 아이디,비번 비교하고 
      //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
      async authorize(credentials) {
        let db = (await connectDB).db('nextforum');
        let user = await db.collection('user_cred').findOne({email : credentials.email})
        if (!user) {
          console.log('해당 이메일은 없음');
          return null
        }
        const pwcheck = await bcrypt.compare(credentials.password, user.pw);
        if (!pwcheck) {
          console.log('비번틀림');
          return null
        }
        return user
      }
    })
    
  ],

  //3. jwt 써놔야 잘됩니다 + jwt 만료일설정
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60 //30일_로그인 유지 기간
  },


  callbacks: {
    //4. jwt 만들 때 실행되는 코드 
    //user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        // JWT에 기입할 정보
        token.user.name = user.name
        token.user.email = user.email
      }
      return token;
    },
    //5. 유저 세션이 조회될 때 마다 실행되는 코드
    session: async ({ session, token }) => {
      // 컴포넌트안에서 보여줄 유저정보
      session.user = token.user;  
      return session;
    },
  },

  


  secret : '1234',
  // DB adapter 세팅
  // 세션방식으로 로그인 기능- DB adapter기능 사용
  // 1. 첫로그인시 자동회원가입 (DB에 저장)
  // 2. 로그인시 DB에 세션정보 보관
  // 3. 현재 로그인된 유저정보 필요시 DB에서 조회
  adapter:MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 

