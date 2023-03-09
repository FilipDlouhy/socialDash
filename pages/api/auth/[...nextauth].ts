import prisma from "@/prisma/prisma";
import axios from "axios";
import NextAuth, { NextAuthOptions, RequestInternal } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'text'},
        name: { type: 'text'},
        password: { type: 'password' }
      },
      async authorize(credentials: Record<"name" | "email" | "password", string> | undefined, req: Pick<RequestInternal , "body" | "query" | "headers" | "method">) {
        if (!credentials) {
          return null;
        }
      
        const { email, password, } = credentials;
        console.log(email, password);
        const user = await prisma.user.findUnique({ where: { email } });
      
        if (user) {
          const newUser = {
            id: user.id,
            email,
            name: user.id,
            password,
          };
          return newUser;
        }
      
        return null;
      } ,
    }),
  ],
  pages:{
    signIn:"/Login",
    signOut:"/Login"
  },
  secret: process.env.NEXTAUTH_SECRET,
});