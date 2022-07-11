import Image from 'next/image';
import Link from 'next/link'
import { motion } from "framer-motion";


const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Project(props) {

    return (
        <motion.div variants={item} className="item md:w-full w-10/12 mx-auto flex flex-col border border-gray-300 rounded-md shadow-md p-4 transform hover:scale-105">
            <Link href={`${props.link}`}>
                <a className="mx-auto">
                    <Image src={`${props.linkImage}`} alt={`illustration de ${props.title}`} width={400} height={200} loading="lazy" className={`rounded-md ${props.class}`}></Image>
                </a>
            </Link>
            <div className="flex flex-col space-y-2 mt-1">
                <h3>{props.title}</h3>
                <p>Projet réalisé avec {props.tech}</p>
                <a className="text-primary" href={`${props.github}`}>GitHub du projet</a>
                <p>{props.description}</p>
            </div>

        </motion.div>
    )

}