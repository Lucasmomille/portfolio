import Head from 'next/head';
import Image from 'next/image';
import Project from "../components/project";
import Link from "next/link";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import useDarkMode from '../hooks/useDarkMode';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.5
    }
  }
};

export default function Home() {
  return (
    <Layout page="Home">
      <main className="w-11/12 items-center justify-center mx-auto flex flex-col bg-white dark:bg-black my-16">
        <h2 className="text-xl text-center text-primary"> Mon portfolio (en cours de réalisation) </h2>


        <motion.div
          className="container md:grid md:grid-cols-3 gap-4 mt-16 mx-auto flex flex-col"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Project title="Groupomania frontend - formation OpenClassrooms" tech="CRA & TailwindCSS"
            link="https://p7-groupomania-frontend.vercel.app/login"
            github="https://github.com/Lucasmomille/crypto_watch"
            linkImage="/images/groupomania.png"
            description="Pour le moment vous devez installer le backend en local depuis mon GitHub `p7_groupomania_backend`"
          ></Project>

          <Project title="Crypto-watch - tutoriel YT" tech="NextJs & TailwindCSS"
            link="https://crypto-watch-inky.vercel.app/"
            github="https://github.com/Lucasmomille/crypto_watch"
            linkImage="/images/blockchain.jpg"

          >
          </Project>
          <Project title="Orinoco - formation OpenClassrooms" tech="Vanilla JS & Bootstrap"
            link="https://github.com/Lucasmomille/p5_orinoco"
            github="https://github.com/Lucasmomille/p5_orinoco"
            linkImage="/images/orinoco.png"

          >
          </Project>
          <Project title="API REST - formation Openclassrooms " tech="NodeJS, Express, MongoDB"
            link="https://github.com/Lucasmomille/P6_API_REST"
            github="https://github.com/Lucasmomille/P6_API_REST"
            linkImage="/images/flame.png"

          >
          </Project>
          <Project title="Clone Instagram - tutoriel Free Code Camp " tech="ReactJs, Firebase & TailwindCSS"
            link="https://fcc-insta.vercel.app/"
            github="https://github.com/Lucasmomille/FCC-insta"
            linkImage="/images/insta.jpg"
            description="Vous pouvez créer un compte mais je ne fais pas encore les mots de passe oubliés"
          >
          </Project>
        </motion.div>

      </main>

    </Layout>
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