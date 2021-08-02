import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import useDarkMode from "../hooks/useDarkMode";

export default function Layout({ children, page }) {

    const { theme, setTheme } = useState('dark');
    //const { count, setCount } = useState(0)
    const colorTheme = theme === "dark" ? "light" : "dark";

    const toggleTheme = () => {
        setTheme('light')
    }

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
    }, [theme, colorTheme]);

    // const [colorTheme, setTheme] = useDarkMode();

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
                    <p className="cursor-pointer" onClick={toggleTheme}>
                        {colorTheme === "light" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )
                        }
                    </p>

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