import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
const Layout = ({ children } ) => {
 return (
    <div>
       <Header /> 
       <Menu />
       {children}
       <Footer />
    </div>
 );
};
   

export default Layout;
