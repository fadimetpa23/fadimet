import Head from 'next/head';
import { useRouter} from 'next/router';
import styles from '../styles/SingleProduct.module.css';
import { useState, useEffect, Component} from 'react'

import Link from 'next/link';


const categorias = ({categories}) => {
   console.log(categories)
   
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  };

    const router = useRouter();
   
    const [isLoad, setIsLoad] = useState(false);  
   
	const handleSubmit = (e => {
		e.preventDefault();
		agregarCarrito(prducto[0])
	})

    useEffect(() => {
        setIsLoad(true)
    }, []);
   
   // setProduct(props)
   

if (isLoad) {
    return (
		<>     
			<Head>
                <title>FADIMET | Consultorio</title>
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
			
			<section className="text-gray-700 body-font border-t border-gray-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="font-bold text-4xl mb-4">CONSULTORIOS</h1>
                </div>
               
				<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-20 gap-x-14'>
							
					{categories.map((categoria) => {
												
                    	if (categoria.name === '') {
							console.log(categoria.name)
						} else{

							return <Link key={categoria.name}  legacyBehavior href={`categorias/${categoria.name}`} className='hover:scale-105 hover:shadow-xl'>
								<a>
									<article className="overflow-hidden rounded-lg shadow-lg"> 
										<img alt="Placeholder" className="block h-auto w-full" src={ categoria.image.src  } />
										<header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-calypso-400">
											<h1 className="text-lg">
												<div className="no-underline hover:underline text-calypso-50" >
												{categoria.name}
												</div>
											</h1>
										</header>
									</article>
								</a>
							</Link>
						
						}	
						
						})}
				</div>
                    
            </div>
        </section>	
		</>
	);
  }
	
};


export const getServerSideProps= async (context) => {
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2tfMzQ1MTY4ZDVhY2UyNzliM2Y0ZGE0ZTYxYTcxZmIwYTgwN2U1ZWJiNDpjc19mZmQ5Yjk4NjQ0MmYzNDBmNTYxY2Y2NGRhYTU4NDdiMTliZTUxZjA5");
      
    var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
    
    const data = await fetch("https://fadimet.com.pa/woocoo/index.php/wp-json/wc/v3/products/categories?per_page=99&parent=52", requestOptions);
    const result = await data.json();
    console.log(result)
	return {
      props: {
            categories : result
      },
    };
    

};    

export default categorias;

