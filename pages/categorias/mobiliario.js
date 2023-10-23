import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect} from 'react'
import Image from 'next/image';

const singleproduct = ({categorias, categoria, agregarCarrito }) => {
  
    const [categoriasHijas, setProduct] = useState(categorias);
    const [isLoad, setIsLoad] = useState(false);  
 
    useEffect(() => {
        setIsLoad(true)
    }, []);
   
if (isLoad) {

	console.log(categoriasHijas)
	
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
				
			<div className="py-16">

			<div className="text-center p-10">
				<h1 className="font-bold text-4xl mb-4">Mobiliario Medico</h1>
				{/*
					<h1 className="text-3xl">Mobiliario Medico</h1>
				*/}
			</div>

			<section className="container px-5 py-20 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-5 mb-5">

			{productFuerza.products.map((producto) => {	
				return (
					
					<div key={producto.Producto.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
						<Link 
							legacyBehavior 
								
							href={{
								pathname: '/products/[productonombre]',
								query: { productonombre: producto.Producto.Nombre}
							  }}
						 >
					     <a>
						 {!producto.Images[0]
						    ? <Image className="h-80 w-72 object-cover rounded-t-xl" src="/images/No_image.png"    width={500} height={500} objectFit="cover" alt="Imagen de Porducto"/>
    						: <Image className="h-80 w-72 object-cover rounded-t-xl" src={(producto.Images[0].src) ?? ""}    width={500} height={500} objectFit="cover" alt="Imagen de Porducto"/>
						}
						
							 
						 </a>
                      </Link>
						<div className="px-4 py-3 w-72">
							<span className="text-gray-400 mr-3 uppercase text-xs">{categoria} </span>
							
							<p className="text-sm font-bold text-black  block capitalize">{producto.Producto.Nombre}</p>
							
							<div className="flex items-center">
							  {/*
								<p className="text-lg font-semibold text-black cursor-auto my-3">$ {producto.Producto.Precio_Venta}</p>
								<del>
								
									<p className="text-sm text-gray-600 cursor-auto ml-2">$ {producto.Producto.Precio_Venta}</p>
								
								</del>
							  */}
							<div className="ml-auto">
								
							<button
								className="btn"
								onClick={() => agregarCarrito(producto)}
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

			<div className="text-center py-20 px-10">
				<h2 className="font-bold text-2xl md:text-4xl mb-4">¡DEJA TUS PROYECTOS EN MANOS DE EXPERTOS!</h2>
			</div>

			</div>


            
		</>
	);
  }

}


export const getServerSideProps= async (context) => {
    
	var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2tfMzQ1MTY4ZDVhY2UyNzliM2Y0ZGE0ZTYxYTcxZmIwYTgwN2U1ZWJiNDpjc19mZmQ5Yjk4NjQ0MmYzNDBmNTYxY2Y2NGRhYTU4NDdiMTliZTUxZjA5");
      
    var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
    
    const data = await fetch("https://fadimet.com.pa/woocoo/index.php/wp-json/wc/v3/products/categories?per_page=99&parent=51", requestOptions);
    const result = await data.json();
    console.log(result)
	return {
      props: {
            categorias : result
      },
    };


};    

export default singleproduct;