import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        /* pseudo: {label: 'Pseudo', type: 'text', placeholder: 'Ton pseudo'},
        email: {label: 'email', type: 'email', placeholder: 'Ton email'},
        password: {label: 'Mot de passe', type: 'password', placeholder: '********'}, */
      },
      authorize(credentials, req) {
        const { pseudo, email, password } = credentials as {
          pseudo: string;
          email: string;
          password: string;
        };
        // perform login logic
        // find out user from db
        if (pseudo !== 'lutin' || email !== 'lutin@gmail.com' || password !== '1234') {
          throw new Error('Infos invalides !');
        }
        return { id: '1', pseudo: 'Lutin', email: 'lutin@gmail.com' };
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    //error: '/auth/error',
    //signOut: '/auth/signout'
  },
};

export default NextAuth(authOptions);
