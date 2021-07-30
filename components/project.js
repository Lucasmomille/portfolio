import Image from 'next/image';
import Link from 'next/link'

export default function Project(props) {

    return (
        <article className="w-full flex flex-col border border-gray-300 rounded-md shadow-md p-4">
            <Link href={`${props.link}`}>
                <a>
                    <Image src={`${props.linkImage}`} alt={`illustration de ${props.title}`} width={400} height={200} loading="lazy"></Image>
                </a>
            </Link>
            <div>
                <h3>{props.title}</h3>
                <p>Projet réaliser avec {props.tech}</p>
            </div>

        </article>
    )

}