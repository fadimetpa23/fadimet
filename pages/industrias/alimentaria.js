import React from 'react'
import { BsFillBookmarkCheckFill } from "react-icons/bs";


function alimentaria() {
  return (
    <>
        <section className="text-gray-700 body-font border-t border-gray-200">
          <div className="container px-10 py-24 ">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto">
              
              <img className="object-cover object-center rounded" alt="hero" src="/images/pages/reparaciones.webp" />

              <br />
             
              <h1 className='text-left text-lg font-bold'>
                Industria Alimenticia
              </h1>
             
              <br />

              <span className="text-justify pb-10">El acero inoxidable se ha convertido en un material imprescindible en la industria alimentaria. Es un material que ofrece grandes beneficios en la producción alimentaria, ya que es metal muy higiénico, duradero en el tiempo y resistente a la corrosión.</span>

              <br /><br />

              <span className="text-justify pb-10">
                Para ponernos en antecedentes y comprender los beneficios que tiene la utilización del acero inoxidable en la industria alimentaria, debemos saber la importancia que tiene cumplir las normas de seguridad alimentaria en los procesos de elaboración, producción, transporte, almacenamiento y conservación de los alimentos. El objetivo clave es la higiene, evitando la contaminación en la manipulación de las materias primas. Es por eso que emplear materiales adecuados en estos procesos facilitará el cumplimiento de los requisitos en mayor medida.
              </span>

              <br /><br />                

              <span className="font-bold">
                Este material se utiliza en la industria alimentaria porque es higiénico al presentar las siguientes características:
              </span>
              
              <br /><br />

              <ul className="p-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    <BsFillBookmarkCheckFill className='inline text-calypso-400'/> Material muy resistente a la corrosión, que puede ser provocada por diferentes factores.
                  </a>
                </li>
                  
                <li>
                  <a href="#" className="mb-10 text-gray-700 transition hover:opacity-75">
                    <BsFillBookmarkCheckFill className='inline text-calypso-400'/> Su superficie es compacta y poco rugosa.
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    <BsFillBookmarkCheckFill className='inline text-calypso-400'/>Elevada resistencia a las variaciones térmicas.
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    <BsFillBookmarkCheckFill className='inline text-calypso-400'/>Muy resistente a golpes y tensiones mecánicas.
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    <BsFillBookmarkCheckFill className='inline text-calypso-400'/>Se puede limpiar en profundidad sin verse alterado el material, facilitando la eliminación de bacterias.
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    <BsFillBookmarkCheckFill className='inline text-calypso-400'/>Ausencia de recubrimientos de fácil deterioro.
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    <BsFillBookmarkCheckFill className='inline text-calypso-400'/>No aporta partículas por desprendimiento.
                  </a>
                </li>

              </ul>
                            
              <br /><br />

              <span className="text-justify">¡Queremos ser parte de su proyecto! Póngase en contacto con nosotros de manera sencilla a través de WhatsApp y solicite nuestros catálogos o cualquier cotización sin ningún tipo de compromiso.
              </span>

              <br /><br />

            </div>
          </div>
        </section>
    </>
  )
}

export default alimentaria