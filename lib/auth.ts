import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserAuthSchema } from "./validation/auth";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        const parsedCredentials = UserAuthSchema.safeParse(credentials);

        if (parsedCredentials.success) {
          const { password } = parsedCredentials.data;
          const user = {
            id: "1",
            name: "Durvesh Bhalekar",
            username: "durvesh_admin",
            password: "durvesh_admin",
          };
          if (user) {
            if (user.password === password) return user;
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }
      return token;
    },
    session({ token, session }) {
      session.user.username = token.username;
      return session;
    },
  },
};
