import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import ErrorPage from "../../error"

const AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials;

        if (email !== "admin@knowsecret.com" || password !== "12345") {
          throw new Error("Invalid Credentials");
        };

        return {id: "1235", name: "kaushal kumar soni", email: "admin@knowsecret.com"}

      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};

export default NextAuth(AuthOptions);
