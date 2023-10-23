import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

function carrito({ eliminarProducto, productosGlobal, vaciarCarrito}) {

    const { register, formState: { errors}, handleSubmit } = useForm();

    const onSubmit = async (e) => {
        console.log(nombre)

        var prodsCart = JSON.parse(localStorage.getItem("productosGlobal"));
        console.log(prodsCart);
        var prodItems = {};

        for(var i = 0; i < prodsCart.length; i++) {
          prodItems[i] = {};
          prodItems[i].Codigo			 =  prodsCart[i].Producto.id;
          prodItems[i].Descripcion 	 =  prodsCart[i].Producto.Detalle;
          prodItems[i].Item_Number 	 =  prodsCart[i].Producto.Item_Number;
          prodItems[i].Nombre 	 	 =  prodsCart[i].Producto.Nombre;
          prodItems[i].Marca 	 		 =  prodsCart[i].Producto.Marca;
          prodItems[i].Category_L1 	 =  "SERVICIO SOLAR";
          prodItems[i].Category_L2 	 =  prodsCart[i].Producto.Category_L2;
          prodItems[i].Category_L3 	 =  prodsCart[i].Producto.Category_L3;
          prodItems[i].Unidades 	 	 =  '1';
          prodItems[i].Precio_Unitario =  prodsCart[i].Producto.Precio_Venta;
          prodItems[i].Discount 	 	 =  '0.00';
          prodItems[i].DiscountFactor  =  '0.00';
          prodItems[i].TaxID 	 		 =  '';
          prodItems[i].TaxName 	 	 =  '';
          prodItems[i].TaxFactor 	 	 =  '';
          prodItems[i].TaxValue 	 	 =  '';
          prodItems[i].Total 	 		 =  '2';	

        };	

        var data = {	
          nombreOrden:	   		e.nombre,				
          emailOrden:        		e.correo,
          telefonoOrden:  		e.telefono,
          direccionOrden: 		e.direccion,
          mensajeOrden: 			e.mensaje,
          prodItems: 				prodItems		
        };

        
        var requestOptions = {
          method: 'POST',
          body: JSON.stringify({ nombreOrden: e.nombre,
            emailOrden: e.correo,
            telefonoOrden: e.telefono,
            direccionOrden: e.direccion,
            mensajeOrden: e.mensaje,
            prodItems: prodItems
         }),
        };
    
        fetch("https://fadimet.com.pa/backendInterFuerzaFadimet/index.php/auth/addQuotes", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error)); 

          toast("Se creo su cotización, pronto lo contataremos");
          vaciarCarrito([])

          setTimeout(function(){
              window.location.href = "/";
          }, 4000);
        }

        console.log(productosGlobal)
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

        <div className="bg-gray-100 pt-20">
          
        <div className="text-center p-5">
            <h1 className="font-bold text-4xl mb-4">CARRITO</h1>
            <h1 className="text-3xl">Culmina tú cotización aquí!</h1>
            <br/>
        </div>
  
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
                
                
            {productosGlobal.map((product) => {
                return (
                    <div key={product.id} className="justify-between mb-6 rounded-lg bg-calypso-100 p-6 shadow-md sm:flex sm:justify-start">
                    
                    {!product.images[0]
                        ? <Image className="w-full rounded-lg sm:w-40" src="/images/no_image.png"    width={500} height={500} objectFit="cover" alt="Imagen de Porducto"/>
                        : <Image className="w-full rounded-lg sm:w-40" src={(product.images[0].src) ?? ""}    width={500} height={500} objectFit="cover" alt="Imagen de Porducto"/>
                    }
                    
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
                        <p className="mt-1 text-xs text-gray-700">{product.categories[0].name}</p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        
                        
                        <div className="flex items-center space-x-4">
                          {/*  <p className="text-sm">$ {product.Producto.Precio_Venta}</p>*/}
                            <button type='button'
                                    onClick={() => eliminarProducto(product.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="h-7 w-7 cursor-pointer duration-150 hover:text-red-500">
                                    <path strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>   
                            </button>    
                            
                        </div>

                        </div>
                    </div>
                    </div>
                );
            })}

            </div>
            
            <div className="mt-6 h-full rounded-lg border bg-calypso-100 p-6 shadow-md md:mt-0 md:w-2/3">
            
                <div className="py-8 px-4 mx-auto max-w-screen-md">
                  <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                      <div>
                          <label for="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">RAZÓN SOCIAL O NOMBRES</label>
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
                          <label for="telefono" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
                          <input type="text" id="telefono" {...register('telefono', {
                            required:true,
                            maxLength:50
                          })} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Tú Correo" required />
                            {errors.correo?.type === 'required' && <p className='text-sm'>El campo  es requerido</p>}
                            {errors.correo?.type === 'maxLength' && <p className='text-sm'>El correo sobrepasa la longitud permitida</p>}

                      </div>
                      <div className="sm:col-span-2">
                          <label for="direccion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Dirección</label>
                          <textarea id="direccion" rows="2" {...register('direccion', {
                            required:true,
                            maxLength:150
                          })}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Déjanos tú dirección"></textarea>
                            {errors.mensaje?.type === 'required' && <p className='text-sm'>El campo  es requerido</p>}
                            {errors.mensaje?.type === 'maxLength' && <p className='text-sm'>El correo sobrepasa la longitud permitida</p>}
                      </div>
                      <div className="sm:col-span-2">
                          <label for="mensaje" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Mensaje</label>
                          <textarea id="message" rows="4" {...register('mensaje', {
                            required:true,
                            maxLength:150
                          })}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Déjanos Tú mensaje"></textarea>
                            {errors.mensaje?.type === 'required' && <p className='text-sm'>El campo  es requerido</p>}
                            {errors.mensaje?.type === 'maxLength' && <p className='text-sm'>El correo sobrepasa la longitud permitida</p>}
                      </div>
                
                  
              
            
   
                
                <hr className="my-4" />
                
                <button type="submit" className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 bg-calypso-400  hover:bg-calypso-500 focus:ring-4 focus:outline-none focus:ring-calypso-500">Cotizar</button>
                </form>
                </div>
            </div>
            
            </div>

            <br/>
  </div>
   

   
    </>
    
  )
}

export default carrito