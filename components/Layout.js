import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import useDarkMode from "../hooks/useDarkMode";

export default function Layout({ children, page }) {


    return (
        <div className="bg-white font-nunito min-h-screen dark:bg-black text-dark dark:text-white">
            <Head>
                <title>Lucas Moquet, {page}</title>
                <meta name="description" content="Portfolio de Lucas Moquet" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />

            </Head>
            <header className="w-full text-white bg-primary flex lg:flex-row py-3 justify-between px-8">
                <Link href="/" className="w-6/12">
                    <a href="">
                        <h1 className="w-full font-bold text-xl">Lucas Moquet - Développeur web</h1>
                    </a>
                </Link>

                <nav className="flex flex-wrap w-2/12 justify-between">
                    <Link href="/contact">
                        <a href="" className="">Contact</a>
                    </Link>
                    <Link href="/cv">
                        <a href="" className="">CV</a>
                    </Link>


                </nav>
            </header>
            {children}
            <footer className="bg-primary w-full py-3 px-8 text-white absolute bottom-0">
                <p>Tel : 0643595532</p>
                <a href="mailto:lucas.moquet95@gmail.com">lucas.moquet95@gmail.com</a>
            </footer>
        </div>
    )
}