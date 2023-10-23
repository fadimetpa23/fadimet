import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

function industrias() {
  return (
    <>
        <Head>
            <title>Industrias</title>
        </Head>
		
        <section className="text-gray-700 body-font border-t border-gray-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="font-bold text-4xl mb-4">Industrias</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-14'>
                    <Link legacyBehavior href="/industrias/farmaceutica" className='hover:scale-105 hover:shadow-xl'>
                        <a>
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-auto w-full" src="/images/industrias/farmaceutica.webp" />
                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <div className="no-underline hover:underline text-black" >
                                        Farmaceutica
                                        </div>
                                    </h1>
                                </header>
                            </article>
                        </a>
                    </Link>

                    <Link legacyBehavior href="/industrias/laboratorio">
                        <a>
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-auto w-full" src="/images/industrias/laboratorio.webp" />
                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <div className="no-underline hover:underline text-black" >
                                        Laboratorio
                                        </div>
                                    </h1>
                                </header>
                            </article>
                        </a>
                    </Link>

                    <Link legacyBehavior href="/industrias/alimentaria">
                        <a>
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-auto w-full" src="/images/industrias/alimentaria.webp" />
                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <div className="no-underline hover:underline text-black" >
                                        Alimentaria
                                        </div>
                                    </h1>
                                </header>
                            </article>
                        </a>
                    </Link>

                    <Link legacyBehavior href="/industrias/veterinaria">
                        <a>
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-auto w-full" src="/images/industrias/veterinaria.webp" />
                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <div className="no-underline hover:underline text-black" >
                                        Veterinaria
                                        </div>
                                    </h1>
                                </header>
                            </article>
                        </a>
                    </Link>

                    <Link legacyBehavior href="/industrias/construccion">
                        <a>
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-auto w-full" src="/images/industrias/construccion.webp" />
                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <div className="no-underline hover:underline text-black" >
                                        Construccion
                                        </div>
                                    </h1>
                                </header>
                            </article>
                        </a>
                    </Link>

                    <Link legacyBehavior href="/industrias/restaurante">
                        <a>
                            <article className="overflow-hidden rounded-lg shadow-lg">
                                <img alt="Placeholder" className="block h-auto w-full" src="/images/industrias/restaurante.webp" />
                                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                    <h1 className="text-lg">
                                        <div className="no-underline hover:underline text-black" >
                                        Restaurante
                                        </div>
                                    </h1>
                                </header>
                            </article>
                        </a>
                    </Link>
                </div>
                






            </div>
        </section>


    
    </>
  )
}

export default industrias