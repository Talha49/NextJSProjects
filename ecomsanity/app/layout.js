import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "./_components";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
title: "TechnoTonic",
description: "Generated by create next app",
};

export default function RootLayout({ children }) {
return (
<html lang="en">
<body className={inter.className}>

    <StateContext>
<Layout>
    <Toaster/>
{children}
</Layout>
</StateContext>
</body>
</html>
);
}