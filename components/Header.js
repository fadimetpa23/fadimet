
import Link from 'next/link';
import React, { useState, useEffect} from 'react'
import { BsInstagram, BsWhatsapp, BsFillTelephoneFill, BsMailbox2, BsFillCartCheckFill } from "react-icons/bs";
import { IoIosMailOpen } from "react-icons/io"
import styles from '../styles/components/Header.module.css';


const Header = (props) => {
   
   const [allCategorias, setCategorias] = useState([]);
   
    useEffect(() => {
      obtenerCategorias();  
    }, []);


   const obtenerCategorias = async () => {
      const data = await fetch("https://fadimet.com.pa/backendInterFuerzaFadimet/index.php/auth/getCategories")
      const result = await data.json();
      setCategorias(result.categories)
   }
    
      const [open, setOpen] = useState(false);
      const [flyer, setFlyer] = useState(false);
      const [flyerTwo, setFlyerTwo] = useState(false);

   return (

      <div >   

         <div className={styles.bg}>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-2">
              
               <div >
                  <ol className="list-reset py-4 pl-4 rounded flex  text-grey">
                     <li className="px-2">
                        <a href="tel://+50763448362"
                           target="_blank" 
                           className="no-underline text-calypso-50"
                           aria-label="Telefono para llamar"> 
                           <BsFillTelephoneFill className='inline'/>  
                           <span className= {styles.item} > +507 6344-8362</span>
                        </a>
                     </li>
                     <li className="text-calypso-50">|</li>
                     <li className="px-2">
                        <a href="https://wa.me/50769126538" 
                           target="_blank" 
                           className="no-underline text-calypso-50"
                           aria-label="Whatsapp">
                           <BsWhatsapp className='inline'/> 
                           <span className= {styles.item} > +507 6912-6538</span>
                        </a>
                     </li>
                    
                  </ol>   
               </div>




               <div className=''> 
                  <ol className="list-reset py-4 pl-4 rounded flex  text-grey justify-end ">
                   
                   <li className="px-6">
                        <Link legacyBehavior href="/" >
                           <a className="no-underline text-calypso-50"
                              aria-label="Inicio">
                              <p className= {styles.item}>INICIO</p>  
                           </a>
                        </Link> 
                     </li>
                     <li className="text-calypso-50">
                        <p className= {styles.item}>|</p>  
                     </li>
                     <li className="px-6">
                        <Link legacyBehavior href="/nosotros">
                           <a className="no-underline text-calypso-50"
                              aria-label="Nosotros">
                              <p className= {styles.item}>NOSOTROS</p>
                           </a>
                        </Link> 
                     </li>

                     <li className="text-calypso-50">
                        <p className= {styles.item}>|</p>
                     </li>
                     <li className="px-6">
                        <Link legacyBehavior href="/contacto">
                           <a className="no-underline text-calypso-50" aria-label="Contacto">
                              <p className= {styles.item}>CONTACTO</p>
                           </a>
                        </Link>  
                     </li>
                       
                     <li className="px-2">
                        <a href="mailto:fadimet@fadimet.com.pa" target="_blank" className="no-underline text-calypso-50" aria-label="Correo">
                           <IoIosMailOpen className='inline'/> 
                           <span ></span>
                        </a>
                     </li>
                  
                  
                     <li className="px-2">
                        <a href="https://www.instagram.com/fadimet.pa/" 
                           target="_blank" 
                           className="no-underline text-calypso-50"
                           aria-label="Instagram">
                           <BsInstagram className='inline'/> 
                        </a>
                     </li>
                  </ol>
               </div>
               
         </div>



         
         
        
        
         </div>

   </div>

 );
};

export default Header;