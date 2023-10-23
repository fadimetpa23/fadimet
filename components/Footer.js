import Reat from "react";
import styles from '../styles/components/Footer.module.css';
import { BsInstagram, BsWhatsapp, BsFillTelephoneFill, BsMailbox2, BsFillCartCheckFill, BsFillSuitHeartFill, BsFillPinMapFill, BsFillClockFill } from "react-icons/bs";
import Image from 'next/image';
import { IoIosMailOpen } from "react-icons/io"

const FooterComponent = () => {
 return (
  <>  
    <div  className={styles.text_white}>  


  
    <footer aria-label="Site Footer" className={ styles.bg }>
      <div className="max-w-screen-xl  mx-auto space-y-4 sm:px-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">        
            <Image   alt="Logo fadimet" src={"/images/logo_blanco.png"} width={300} height={130} />
            {/* <Image className="h-5 w-auto sm:h-10"  alt="Logo fadimet" src={"/images/logo.webp"} width={400} height={230} /> */}
          </div>

          <ul className="flex justify-start gap-6 mt-8 sm:mt-0 sm:justify-end pl-5">
            <li>
              <a
                href="https://www.instagram.com/fadimet.pa/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:opacity-75"
                aria-label="Instagram"
              >
                
                <span className="sr-only">Instagram</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-8 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 lg:pt-16 p-5">
          <div className={styles.text_white}>
              <span className={styles.titulo}>
                <h1 className="font-bold text-2xl mb-4">DIRECCIÓN</h1>
              </span>  

            <nav aria-label="Footer Navigation - Services" className="mt-6">
              <ul className="space-y-4 text-lg">
                <li>
                  <a href="https://www.google.com/maps/place/Fabricaciones+y+Dise%C3%B1os+Metalicos+FADIMET/@8.9386187,-79.7092777,17z/data=!3m1!4b1!4m5!3m4!1s0x8faca239ce112b5d:0x25a96e5beb1677c7!8m2!3d8.9386787!4d-79.7071505" 
                     target="_blank" 
                     className="text-gray-700 transition hover:opacity-75"
                     aria-label="Direccion">
                   <BsFillPinMapFill className='inline text-white'/>  Panamá, Nuevo Arraiján, Detrás De La Plaza Cerro Tigre
                  </a>
                </li>

              </ul>
            </nav>
          </div>

          <div className={styles.text_white}>
              <span className={styles.titulo}>
                <h1 className="font-bold text-2xl mb-4">CONTÁCTENOS</h1>
              </span>
            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-lg">
                <li>
                  <a href="tel://+50763448362"
                     target="_blank" 
                     className="text-gray-700 transition hover:opacity-75"
                     aria-label="Telefono para llamar">
                  <BsFillTelephoneFill className='inline text-blue-900'/> +507 6344-8362
                  </a>
                </li>

                <li>
                  <a href="https://wa.me/50769126538"
                     target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                    aria-label="Whatsapp">
                  <BsWhatsapp className='inline text-blue-900'/> +507 6912-6538
                  </a>
                </li>

                <li>
                  <a  href="mailto:fadimet@fadimet.com.pa" 
                      target="_blank" 
                      className="text-gray-700 transition hover:opacity-75"
                      aria-label="Correo">
                    <IoIosMailOpen className='inline text-blue-900'/>  fadimet@fadimet.com.pa
                  </a>
                </li>
                
              </ul>
            </nav>
          </div>

          <div className={styles.text_white}>
            <span className={styles.titulo}>
                <h1 className="font-bold text-2xl mb-4">HORARIO</h1>
            </span>
            
            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-lg">
                <li>
                    <BsFillClockFill className='inline text-blue-900'/>  Lunes a Sábado 8:00 a.m. a 5:00 p.m
                </li>
              
              </ul>
            </nav>
          </div>

          
        </div>
      {/* 
      <div className={styles.text_white}>
          <p className="text-lg text-gray-500">
            &copy; Desarrollado con <BsFillSuitHeartFill className='inline text-red-800'/>  Por Parley.
          </p>
      </div>
      */}

      </div>
    </footer>



      </div>  
    </>
 );
};
export default FooterComponent;