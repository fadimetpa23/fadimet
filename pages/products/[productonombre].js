import Head from 'next/head';
import { useRouter} from 'next/router';
import styles from '../../styles/SingleProduct.module.css';
import { useState, useEffect, Component} from 'react'
import { BsFillFilePdfFill, BsFillCartCheckFill } from "react-icons/bs"
import Image from 'next/image';

const singleproduct = ({prducto, agregarCarrito, productosGlobal}) => {
   console.log(productosGlobal)
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  };

    const router = useRouter();
   
    const [productFuerza, setProduct] = useState([]);
    const [isLoad, setIsLoad] = useState(false);  
   
	const handleSubmit = (e => {
		e.preventDefault();
		agregarCarrito(prducto[0])
	})

    useEffect(() => {
        setProduct(prducto[0])
        setIsLoad(true)
    }, []);
   
   // setProduct(props)
   

if (isLoad) {
	console.log(productFuerza)
    return (
		<>     
			<Head>
				<title>{productFuerza.name}</title>
			</Head>
			
			<div className="py-16">
				<div className="text-center p-5">
					<h1 className="font-bold text-4xl mb-4">{productFuerza.categories[0].name}</h1>
					{/* 
						<h1 className="text-3xl">{productFuerza.Producto.Category_L1}</h1>
					*/}
				</div>
			

			
            
            <div className={styles.single_container}>
				<div className={styles.left_section}>
					<Image className={styles.left_img} src={productFuerza.images[0].src} width={500} height={500} objectFit="cover" alt="Imagen de Porducto"/>
				</div>
				<div className={styles.right_section}>
					<h1 className= "font-bold text-2xl">{productFuerza.name}</h1>
					{/*
						<p className={styles.price}>${productFuerza.Producto.Precio_Venta}</p>
					*/}
					
					<div
						className={styles.para}
						dangerouslySetInnerHTML={{
							__html: productFuerza.description
						}}
					>
						
					</div>
					
					<form onSubmit={handleSubmit}>
						
						
						<button data-item-id={productFuerza.id} className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-calypso-300 sm:w-fit hover:bg-calypso-500 focus:ring-4 focus:outline-none focus:ring-calypso-500 ">
						Agregar al Carrito <BsFillCartCheckFill className='inline'/>
						</button>
					</form>

					<br />	

					<a href={ productFuerza.downloads[0].file } 
						target="_blank" className="py-3 mt-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-calypso-600 sm:w-fit hover:bg-calypso-500 focus:ring-4 focus:outline-none focus:ring-calypso-500 ">	
						Ficha Técnica <BsFillFilePdfFill  className='inline'/>
					</a>
					
				</div>
			</div>
            </div>	
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
    
    const data = await fetch("https://fadimet.com.pa/woocoo/index.php/wp-json/wc/v3/products?search=" + context.query.productonombre + "", requestOptions);
    const result = await data.json();

	return {
      props: {
            prducto : result
      },
    };

};    

export default singleproduct;

