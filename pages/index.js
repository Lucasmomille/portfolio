import Head from 'next/head'
import Image from 'next/image'
import Project from "../components/project"
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-nunito">
      <Head>
        <title>Lucas Moquet</title>
        <meta name="description" content="Portfolio de Lucas Moquet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <header className="w-full text-white bg-green-300 flex lg:flex-row py-3 justify-between px-8">
        <h1 className="w-6/12">Lucas Moquet - Développeur web</h1>
        <nav className="flex flex-wrap w-2/12 justify-between">
          <Link href="/">
            <a href="" className="">Contact</a>
          </Link>
          <Link href="/">
            <a href="" className="">CV</a>
          </Link>
        </nav>
      </header>
      <main className="w-11/12 items-center justify-center mx-auto flex flex-col">
        <h2>Mes projets</h2>
        <div className="grid grid-cols-3 gap-4 mt-16 mx-auto">
          <Project title="Crypto-watch - tutoriel YT" tech="NextJs & TailwindCSS"
            link="https://crypto-watch-inky.vercel.app/"
            linkImage="/images/blockchain.jpg" >
          </Project>
          <Project title="Orinoco - formation OpenClassrooms" tech="Vanilla JS & Bootstrap"
            link="/"
            linkImage="/images/blockchain.jpg" >
          </Project>
          <Project title="API REST - formation Openclassrooms " tech="NodeJS, Express, MongoDB"
            link="https://github.com/Lucasmomille/P6_API_REST"
            linkImage="/images/flame.png" >
          </Project>
          <Project title="Clone Instagram - tutoriel Free Code Camp " tech="ReactJs, Firebase & TailwindCSS"
            link="https://fcc-insta.vercel.app/"
            linkImage="/images/insta.jpg" >
          </Project>



        </div>
      </main>
    </div>
  )
}


/*
<Project title="Orinoco - formation OpenClassrooms" tech="Vanilla JS & Bootstrap" >
            <Link href="/">
              <a>
                <Image src="/images/blockchain.jpg" alt="illustration de Reservia" width={400} height={200} loading="lazy" />
              </a>
            </Link>
          </Project>
          <Project title="API REST - formation Openclassrooms " tech="NodeJS, Express, MongoDB" >
            <Link href="https://github.com/Lucasmomille/P6_API_REST">
              <a className="items-center flex justify-center">
                <Image src="/images/flame.png" alt="illustration de Reservia"
                  width={60} height={200} loading="lazy"
                  className="hover:opacity-80"
                />
              </a>

            </Link>
          </Project>
*/