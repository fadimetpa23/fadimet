import React from 'react'
import { BsWhatsapp, BsFillTelephoneFill, BsMailbox2, BsFillCartCheckFill, BsFillSuitHeartFill, BsFillPinMapFill, BsFillClockFill } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosMailOpen } from "react-icons/io"

function Contacto() {
  
  const { register, formState: { errors}, handleSubmit } = useForm();
  
  const onSubmit = async (e) => {
    console.log(e)

    const form = new FormData();
      form.append("your-name", e.nombre);
      form.append("your-email",  e.correo);
      form.append("your-subject",  e.asunto);
      form.append("your-message",  e.mensaje);
    
    var requestOptions = {
      method: 'POST',
      body: form,
      redirect: 'follow'
    };

    fetch("https://fadimet.com.pa/wordpress/wp-json/contact-form-7/v1/contact-forms/73/feedback", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

      toast("Se envio su información");
      setTimeout(function(){
        window.location.href = "/";
    }, 4000);
     
   }
  
  return (
    <>

        <ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>

      <section className="bg-white dark:bg-gray-900">

      <iframe width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed/v1/place?q=Panama,+Nuevo+Arraiján,+Detrás+de+la+Plaza+Cerro+Tigre+fadimet&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" ></iframe>


          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex justify-center text-6xl rounded-xl p-6 bg-gray-100">
              
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  
                  <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-600 dark:text-white"> Ponte en contacto con nosotros</h2>
                  <span className='text-sm  leading-normal inline-flex'>
                    ¡Queremos ser parte de su proyecto! Póngase en contacto con nosotros
                    de manera sencilla a través de WhatsApp y solicite nuestros catálogos
                    o cualquier cotización sin ningún tipo de compromiso.
                  </span>

                  <span className='text-sm  leading-normal inline-flex'>
                  Panama, Nuevo Arraiján, Detrás de la Plaza Cerro Tigre
                  </span>
                  
                  <ul className="p-4 text-sm">
                      <li>
                        <a href="tel://+50763448362" target="_blank" className="text-gray-700 transition hover:opacity-75">
                        <BsFillTelephoneFill className='inline text-blue-900'/> +507 6344-8362
                        </a>
                      </li>
                        
                      <li>
                        <a href="https://wa.me/50769126538" target="_blank"  className="mb-10 text-gray-700 transition hover:opacity-75">
                        <BsWhatsapp className='inline text-blue-900'/> +507 6912-6538
                        </a>
                      </li>

                      <li>
                        <a href="mailto:fadimet@fadimet.com.pa" target="_blank" className="text-gray-700 transition hover:opacity-75">
                          <IoIosMailOpen className='inline text-blue-900'/>  fadimet@fadimet.com.pa
                        </a>
                      </li>
                      
                    </ul>
              </div>
            </div>
        
            <div className=" justify-center text-6xl rounded-xl p-6 bg-gray-100">
              
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-600 dark:text-white">Déjanos un mensaje...</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                      <div>
                          <label for="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                          <input type="text" id="nombre" {...register('nombre', {
                            required:true,
                            maxLength:50
                          })} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Tú Nombre" required />
                          {errors.nombre?.type === 'required' && <p className='text-sm'>El campo es requerido</p>}
                          {errors.nombre?.type === 'maxLength' && <p className='text-sm'>El nombre sobrepasa la longitud permitida</p>}

                      </div>
                      <div>
                          <label for="correo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo</label>
                          <input type="email" id="correo" {...register('correo', {
                            required:true,
                            maxLength:50
                          })} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Tú Correo" required />
                            {errors.correo?.type === 'required' && <p className='text-sm'>El campo  es requerido</p>}
                            {errors.correo?.type === 'maxLength' && <p className='text-sm'>El correo sobrepasa la longitud permitida</p>}

                      </div>
                      <div>
                          <label for="asunto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asunto</label>
                          <input type="text" id="asunto" {...register('asunto', {
                            required:true
                          })} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Tú Asunto" required />
                            {errors.asunto?.type === 'required' && <p className='text-sm'>El campo  es requerido</p>}
                      </div>
                      <div className="sm:col-span-2">
                          <label for="mensaje" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mensaje</label>
                          <textarea id="message" rows="6" {...register('mensaje', {
                            required:true,
                            maxLength:150
                          })}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Déjanos tu mensaje"></textarea>
                            {errors.mensaje?.type === 'required' && <p className='text-sm'>El campo  es requerido</p>}
                            {errors.mensaje?.type === 'maxLength' && <p className='text-sm'>El correo sobrepasa la longitud permitida</p>}
                      </div>
                      <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-calypso-500 sm:w-fit hover:bg-calypso-500 focus:ring-4 focus:outline-none focus:ring-calypso-500 ">Enviar</button>
                  </form>
              </div>

            </div>
          
          </div>



        
      </section>

          
    </>


  )
}

export default Contacto