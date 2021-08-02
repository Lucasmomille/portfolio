import Layout from "../components/Layout"

export default function CV() {
    return (
        <Layout page="CV">
            <main className="w-11/12 items-center justify-between mx-auto flex flex-col bg-white dark:bg-black my-16 text-center">
                <article className="w-1/3 transform scale-95 border border-gray-300 rounded-md p-4">
                    <h1 className="font-bold">Compétences</h1>
                    <div className="w-full flex flex-row justify-between">
                        <ul className="w-5/12">
                            <li className="border-b border-gray-300 mx-auto inline-block mb-2">Front-end</li>
                            <li>
                                <ul>
                                    <li>ReactJS</li>
                                    <li>TailwindCSS</li>
                                    <li>HTML/CSS/JS</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="w-5/12">
                            <li className="border-b border-gray-300 mx-auto inline-block mb-2"> <span className="border-b border-gray-300">Backend</span> <br /> et Bases de données</li>
                            <li>
                                <ul>
                                    <li>NodeJS</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                    <li>MySQL / ORM Sequelize</li>
                                    <li>Firebase</li>
                                </ul>
                            </li>
                        </ul>
                        <ul></ul>
                    </div>

                </article>
                <article className="w-1/3 transform scale-95 border border-gray-300 rounded-md p-4">
                    <h1 className="font-bold">Formations</h1>
                    <ul>
                        <li>2020/2021 - Développeur web - OpenClassrooms</li>
                        <li>2020 - Prep'Apprentissage - OpenClassrooms</li>
                        <li>2017/2019 - Master 1 & 2 édition imprimée et numérique - Université Toulouse Jean Jaurès</li>
                        <li></li>
                    </ul>
                </article>
                <article className="w-1/3 transform scale-95 border border-gray-300 rounded-md p-4">
                    <h1 className="font-bold">Expériences</h1>
                    <ul>
                        <li>2021 - Alternant développeur web - agence Lewys</li>
                        <li>2019 - Assitant d'édition - éditions Sud Ouest</li>
                        <li>2014/2018 - Assistant d'édition/stages - (Le Bord de l'eau, Anacharsis, Presses universitaires de Bordeaux)</li>
                        <li></li>
                    </ul>
                </article>

            </main>


        </Layout>
    )
}