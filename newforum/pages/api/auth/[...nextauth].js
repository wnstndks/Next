// next-auth 세팅
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
  secret : '1234'
};
export default NextAuth(authOptions); 