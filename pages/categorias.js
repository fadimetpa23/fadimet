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
				<title>Fadimet - MOBILIARIO MÉDICO</title>
			</Head>
			
			<section className="text-gray-700 body-font border-t border-gray-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="font-bold text-4xl mb-4">MOBILIARIO MÉDICO</h1>
                </div>
               
				<div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-20 gap-x-14'>
							
					{categories.map((categoria) => {
						
						
                    	if (categoria.Category_L2 === '') {
							console.log(categoria.Category_L2)
						} else{

							return <Link key={categoria.Category_L2}  legacyBehavior href={`categorias/${categoria.Category_L2}`} className='hover:scale-105 hover:shadow-xl'>
								<a>
									<article className="overflow-hidden rounded-lg shadow-lg"> 
										<img alt="Placeholder" className="block h-auto w-full" src={"https://fadimet.com.pa/assets/categorias/" + categoria.Category_L2 + ".webp" } />
										<header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-calypso-400">
											<h1 className="text-lg">
												<div className="no-underline hover:underline text-calypso-50" >
												{categoria.Category_L2}
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
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };
    
    const data = await fetch("https://fadimet.com.pa/backendInterFuerzaFadimet/index.php/auth/getCategories", requestOptions);
    const result = await data.json();
    
    return {
      props: {
            categories : result.categories
      },
    };
};    

export default categorias;

