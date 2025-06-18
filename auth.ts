import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "./lib/db";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks:{
    async session({session, token}){
      if(token.sub && session.user){
        session.user.id = token.sub;
      }
      console.log({session})
      
      return session
    },
    async jwt({token}) {
      console.log(token)
      
      return token
      
    },
  }
});
