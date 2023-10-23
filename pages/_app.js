import { useState, useEffect } from 'react'
import Layout from '../components/Layout';
import '../styles/globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {

	const [productosGlobal, setProductosGlobal] = useState([]);
	const [totalProds, setTotal] = useState(0);

	const CustomToastWithLink = () => (
		<div>
		  <Link legacyBehavior href="/carrito">
			<a>Ver carrito</a>
		  </Link>
		</div>
	  );

	useEffect(() => {
		const productosGlobalLS = JSON.parse(localStorage.getItem("productosGlobal")) ?? [];
		setProductosGlobal(productosGlobalLS);
		localStorage.setItem('totalProds', productosGlobalLS.length)
		console.log(productosGlobal)
		
	}, [])

	useEffect(() => {
		localStorage.setItem('productosGlobal', JSON.stringify(productosGlobal))
		localStorage.setItem('totalProds', productosGlobal.length)		
	}, [productosGlobal])

	const agregarCarrito = (producto) =>{
		console.log(producto)
		console.log(productosGlobal)
		if(productosGlobal.some((articulo) => articulo.id === producto.id )){
			console.log("duplicado")
			toast("El producto ya esta en el carrito");
		} else {
			setProductosGlobal([...productosGlobal, producto]);
			toast(CustomToastWithLink);
		}
	}

	const vaciarCarrito = () =>{
		
			setProductosGlobal([]);
	
	}

	const eliminarProducto = (id) => {
		const productosActualizado = productosGlobal.filter((articulo) => articulo.id !== id);
		setProductosGlobal(productosActualizado);
		toast("Se elimino del Carrito");
	}

	return (
		<>
			<Layout>
				<Component 
				{...pageProps} 
					productosGlobal={productosGlobal} 
					agregarCarrito={agregarCarrito} 
					eliminarProducto={eliminarProducto}
					vaciarCarrito={vaciarCarrito}
				/>

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
			</Layout>
		</>
	);
}

export default MyApp;