//import allProducts from './data/products.json';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect, Fragment} from 'react'
import Slideer from '../components/Slideer';
import styles from '../styles/SingleProduct.module.css';
import Slider from "react-slick";
import Image from 'next/image';

export default function Home({ agregarCarrito }) {

   const [allProducts, setProducts] = useState([]);
   const [showModal, setShowModal] = useState(false);
   
   var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

   function closeModal() {
      showModal(false)
   }

   useEffect(() => {
      obtenerDatos();
      
    }, []);

   const obtenerDatos = async () => {

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Basic Y2tfMzQ1MTY4ZDVhY2UyNzliM2Y0ZGE0ZTYxYTcxZmIwYTgwN2U1ZWJiNDpjc19mZmQ5Yjk4NjQ0MmYzNDBmNTYxY2Y2NGRhYTU4NDdiMTliZTUxZjA5");
        
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
     };
      
      const data = await fetch("https://fadimet.com.pa/woocoo/index.php/wp-json/wc/v3/products?category=69&per_page=50", requestOptions);
      const result = await data.json();
      console.log(result)
      setProducts(result)
    
   }

   return (
    <>
       <Head>
            <title>FADIMET | Fabricante de Mobiliario Médico</title>
            
            <meta name="description" content="FADIMET | Fabricante de Mobiliario Médico para consultorios, hospitales y clínicas. Más de 11 años de experiencia en mobiliario médico."></meta>
         
            <meta name="keywords" content="Mobiliario Médico, Acero Inoxidable, Soldadura de acero, inoxidable, Muebles Médicos, Mobiliario para hospitales, Mobiliario para Consultorios, Mobiliario para la industria de laboratorios, Mobiliario para la industria, Farmacéutica Muebles, Médicos en Aglomerado, Muebles Médicos en Hidrófugo, Mobiliario en acero inoxidable"></meta>
           
            <meta name="author" content="Irving salcedo - irvng1364@gmail.com"></meta>
            
            <meta property="og:title" content="FADIMET | Fabricante de Mobiliario Médico - Fabrica de Mobiliario Médico en Panamá - Proveedor de Mobiliario Médico en Panamá :: Panamá Fabrica"></meta>
            
            <meta property="og:type" content="website" ></meta>
            
            <meta property="og:url" content="https://www.fadimet.com.pa" ></meta>
            
            <meta property="og:image" content="https://fadimet.com.pa/assets/img/logo1.webp"></meta>
            
            <meta property="og:description" content="FADIMET | Fabricante de Mobiliario Médico para consultorios, hospitales y clínicas. Más de 11 años de experiencia en mobiliario médico."></meta>
            
            <meta name="google-site-verification" content="q69ooG1JcwygD34SVUkuttAAHhiu0-yg37u-PCXVlvs"></meta>
            
            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
       </Head>


       <Slideer />

   

       <div className="container pb-8 mx-auto">
          
       <div className="py-16 ">

         <div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4">Productos Destacados</h1>
            <h1 className="text-3xl">Seleccionados para Ti</h1>
         </div>

 
         <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

             {allProducts.map((product) => {
                return (
                  
                  <div key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
						   <Link legacyBehavior href={`products/${product.name}`}>
                     <a aria-label="Imagen Producto">
							   <Image className="h-80 w-72 object-cover rounded-t-xl" src={product.images[0].src} width={500} height={500} objectFit="cover" alt="Imagen de Porducto"/>
            		   </a>
                      </Link>
						<div className="px-4 py-3 w-72">
							
                     <p className="text-sm font-bold text-black  block capitalize">{product.name}</p>
							<div className="flex items-center">
				
							<div className="ml-auto">

                     <button aria-label="Agregar al Carrito" className={styles.boton_carrito} onClick={() => agregarCarrito(product)}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                           <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                           <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>               
                     </button>
                     
                        </div>
							</div>
						</div>
					
					</div>


                );
             })}
             </section>
          </div>
             <br /> <br /> <br />
             
       </div>
      
      {/*<div className='bg-calypso-100'>
         <div className="container pb-8 mx-auto">
            <div className="py-16 ">
            <div className="text-center p-10">
               <h1 className="font-bold text-4xl mb-4">CLIENTES</h1>
            </div>
               <Slider {...settings}>
                  <div>
                     <Image src={"/images/clientes/1.png"} width={800} height={687} objectFit="cover"/>
                  </div>
                  <div>
                     <Image src={"/images/clientes/2.png"} width={800} height={687} objectFit="cover"/>
                  </div>
                  <div>
                     <Image src={"/images/clientes/3.png"} width={800} height={687} objectFit="cover"/>
                  </div>
                  <div>
                     <Image src={"/images/clientes/4.png"} width={800} height={687} objectFit="cover"/>
                  </div>
                  <div>
                     <Image src={"/images/clientes/5.png"} width={800} height={687} objectFit="cover"/>
                  </div>
                  <div>
                     <Image src={"/images/clientes/6.png"} width={800} height={687} objectFit="cover"/>
                  </div>
               </Slider>
            </div>
         </div>
      </div>*/}
                
    </>
 );
}

