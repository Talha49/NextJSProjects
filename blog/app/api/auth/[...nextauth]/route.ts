import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

const authOptions : AuthOptions = {

    providers:[
        GithubProvider({
            clientId: "Iv1.83be70869108e454",
            clientSecret: "450733b03a839330a4a94105fcdb3d4b74bbe16d",
        })
    ],
    callbacks:{
        async session({session, token} : any){
            session.user.name = `${session?.user?.name}_${token?.sub}`
         
            console.log(session, token)
            return session;
        }
    },
    secret: 'default_secret_key'
}


const nextAuth = NextAuth(authOptions);

export {nextAuth as GET, nextAuth as POST};