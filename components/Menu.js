
import Link from 'next/link';
import React, { Fragment, useState, useEffect} from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { BsFillCartCheckFill } from "react-icons/bs";

import styles from '../styles/components/Header.module.css';
import Image from 'next/image';


import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/react/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
 
const Menu = () => {    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [allCategorias, setCategorias] = useState([]);
   
    
    useEffect(() => {
      obtenerCategorias();  
    }, []);


   const obtenerCategorias = async () => {
      const data = await fetch("https://fadimet.com.pa/backendInterFuerzaFadimet/index.php/auth/getCategories")
      const result = await data.json();
      setCategorias(result.categories)
   }

   return (
        < >
      
        <header className="">
      <nav className=" flex max-w-7xl items-center justify-between p-3 lg:px-0" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link legacyBehavior 
                            
              href={{
                pathname: '/'
              }}
              >
              <a  className="" aria-label="Logo">
                <span className="sr-only">Logo</span>
                <Image className="h-13 "  alt="Logo fadimet" src={"/images/logo.png"} width={250} height={130} />
              </a>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
         

          <div className="ml-36">
            <Link legacyBehavior href="/categorias" >
              <a className="text-sm font-semibold leading-6" aria-label="Mobiliario Medico">
                <p className={styles.colorTitulo}>MOBILIARIO MÉDICO</p>  
              </a>
            </Link>
          </div>
          
          <div className={styles.colorTitulo}>
            <Link legacyBehavior href="/consultorios">
              <a className="text-sm font-semibold leading-6" aria-label="Consultorios">
                CONSULTORIOS
              </a>
            </Link>
          </div>
          <div className={styles.colorTitulo}>
            <Link legacyBehavior href="/industrias/laboratorio">
              <a className="text-sm font-semibold leading-6" aria-label="Laboratorios">
              INDUSTRIA DE LABORATORIOS
              </a>
            </Link>
          </div>
          <div className={styles.colorTitulo}>
            <Link legacyBehavior href="/industrias/farmaceutica">
              <a className="text-sm font-semibold leading-6" aria-label="Farmaceutica">
                INDUSTRIA FARMACÉUTICA
              </a>
            </Link>      
          </div> 
          
          
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link legacyBehavior       
              href={`/carrito`}
              >
              <a className="text-sm font-semibold leading-6 text-gray-900" aria-label="Carrito">
                <span className={styles.colorTitulo}> 
                  <BsFillCartCheckFill  className='inline text-blue-400'/> 
                </span>    
              </a>
          </Link>
            
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden"  open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="bg-calypso-400 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-white">
          <div className="flex items-center justify-between ">
            <a href="#" className="-m-1.5 p-1.5 " aria-label="Menu">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/favicon.ico"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              aria-label="Cerrar Menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root  ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                <Link legacyBehavior href="/categorias">
                    <a
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-label="Mobiliario Medico"
                    >
                      MOBILIARIO MEDICO
                    </a>
                </Link>
                <Link legacyBehavior href="/consultorios">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-label="Consultorios"
                  >
                    CONSULTORIOS
                  </a>
                </Link>
                <Link legacyBehavior href="/industrias/laboratorio">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-label="Laboratorios"
                  >
                    INDUSTRIA DE LABORATORIOS
                  </a>
                </Link>
                <Link legacyBehavior href="/industrias/farmaceutica">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-label="Farmaceutica"
                  >
                    INDUSTRIA FARMACÉUTICA
                  </a>
                  </Link>
                 <Link legacyBehavior href="/nosotros">
                    <a
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-label="Nosotros"
                    >
                      NOSOTROS
                    </a>
                 </Link>
                 <Link legacyBehavior href="/contacto">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    aria-label="Contacto"
                  >
                    CONTACTO
                  </a>
                  </Link>  
                

              </div>
              <div className="py-6">
              <Link legacyBehavior       
                  href={`/carrito`}
                  ><a
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-label="Carrito"
                    >
                  <span className={styles.colorTitulo}> 
                  <BsFillCartCheckFill  className='-mt-1 mr-2 justify-end inline text-blue-400'/> 
                </span>  
                Carrito
                </a>
               </Link>          
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>


       
       
        </>
     );
};

export default Menu;