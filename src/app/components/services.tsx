import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Services = () => {

    const services = [
        {
            icon: "topographie.png",
            title: "TOPOGRAPHIE",
            description: "Apprenez les techniques modernes de relevé et d'analyse de terrains, en utilisant des outils de géomatique et de cartographie numérique. Cette formation vous prépare aux métiers de la topographie avec une maîtrise complète des équipements de pointe",
            link: "topographie"
        }
        ,
        {
            icon: "reseau.png",
            title: "MAINTENANCE ET RÉSEAU INFORMATIQUE",
            description: "Devenez un expert en maintenance informatique et en gestion de réseaux. Vous apprendrez à diagnostiquer et réparer des systèmes, ainsi qu’à installer, configurer et gérer des réseaux informatiques pour des entreprises de toutes tailles.",
            link: "maintenance-et-reseau-informatique"
        },
        {
            icon: "vente.png",
            title: "VENTE ET GESTION DE CAISSE",
            description: "Acquérez les compétences nécessaires pour travailler dans la vente au détail et la gestion des opérations de caisse. Cette formation vous prépare à la gestion des transactions commerciales, des inventaires et des relations clients.",
            link: "vente-et-gestion-de-caisse"
        },
        {
            icon: "transi.png",
            title: "TRANSI DOUANE & MAGASINAGE",
            description: "Cette formation vous prépare à gérer les processus de transit douanier et de magasinage. Apprenez à assurer le suivi des marchandises, à maîtriser les procédures douanières et à organiser les flux logistiques de manière optimale.",
            link: "transi-douane-magasinage"
        },
        {
            icon: "langue.png",
            title: "LANGUES",
            description: "Améliorez vos compétences linguistiques dans des langues clés pour le commerce international et les affaires. Nous proposons des formations adaptées aux besoins professionnels, avec des cours intensifs en anglais, espagnole, français et autres langues.",
            link: "langues"
        }
    ]
    return (
        <section id="formations" className='my-10 flex flex-col items-center'>

            <div className='flex items-center '>
                <div className='h-2 w-2 bg-orange-600 m-2'></div>

                <p className='text-orange-600 uppercase font-poppins font-bold'>Services</p>
                <div className='h-2 w-2 bg-orange-600 m-2'></div>

            </div>
            <h1 className=' uppercase font-jost  font-semibold text-2xl md:text-4xl
            my-4
            '>formations</h1>


            <div className=' max flex flex-wrap justify-center gap-6'>
                {
                    services.map((element) => (
                        <motion.a
                            variants={Animations.bottomToTop({ duration: 0.3 * services.indexOf(element) + 0.2 })}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            key={element.icon} href={"/formations/" + element.link} className='p-2'> <div

                                className='hover:text-white focus:text-white 
                                w-full sm:w-96 md:h-[350px]
                                hover:bg-orange-950  focus:bg-orange-950 border-2 border-orange-300 rounded-xl  
                                space-y-2 p-6 transition-all duration-200'>
                                <img src={"/icons/" + element.icon} alt="" className='h-12' />
                                <h3 className='font-semibold font-bricolage'>{element.title}</h3>
                                <p>{element.description}</p>
                                <button className='font-bold text-orange-600 '>
                                    <div className='flex items-center'>
                                        <p>Voir plus</p>
                                        <img src="/icons/arrow-go.png" alt="" className='h-6' />
                                    </div>
                                </button>
                            </div>
                        </motion.a>
                    ))
                }
            </div>
        </section>
    )
}

export default Services