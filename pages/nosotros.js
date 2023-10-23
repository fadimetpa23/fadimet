import React from 'react'

function nosotros() {
  return (
    <>
        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
             
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">¿Quiénes somos?                
                </h1>
                <p className="mb-8 leading-relaxed">FADIMET,S.A. (Fabricaciones y Diseños Metálicos, S.A.) está orientada a la consultoría, diseño y fabricación de productos en acero inoxidable, para la industria médica, farmacéutica, laboratorios clínicos, alimentaria, restaurantes. Nuestras posibilidades son aún mayores, con nuestra capacidad de fabricar mobiliario en acero inoxidable para diferentes sectores inmobiliarios, equipos para clínicas, veterinarias y funerarios. Hemos desarrollado proyectos en entidades públicas, privadas y mixtas en Panamá, además, atendemos el sector de construcción e incluso cualquier requerimientos que nuestros clientes deseen, garantizando así una máxima calidad en el desarrollo y terminación de sus proyectos.
                    <br />  
                    Somos fabricantes directos, lo que garantiza el mejor precio en nuestra gama de productos y servicios.</p>
                </div>
               
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img className="object-cover object-center rounded" alt="hero" src="/images/acero.webp" />
                </div>

                
            </div>
        </section>
    </>
  )
}

export default nosotros