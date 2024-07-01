// next-auth 세팅
import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    // 로그인 방식을 provider라 함
    GithubProvider({
      clientId: 'Ov23ctccVXWVLdJ5kICX',
      clientSecret: 'c74f7f5af0cda2ae2f2029344d5d5f78af2c8183',
    }),
  ],
  secret : '1234',
  // DB adapter 세팅
  // 세션방식으로 로그인 기능- DB adapter기능 사용
  // 1. 첫로그인시 자동회원가입 (DB에 저장)
  // 2. 로그인시 DB에 세션정보 보관
  // 3. 현재 로그인된 유저정보 필요시 DB에서 조회
  adapter:MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 

