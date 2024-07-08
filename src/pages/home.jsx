
import '../App.css';
import Nav from '../Components/Nav.tsx';
import Title from '../Components/Home page/Title.tsx';
import Product from '../Components/Home page/Product.tsx';
import Feature from '../Components/Home page/Feature.tsx';
import Price from '../Components/Home page/Pricing.tsx';
import Footer from '../Components/Footer.tsx';

function Home() {
  return (
    <>
    <div>
     

      {/* Home page */}
      <Title />
      <Product />
      <Feature />
      <Price />

      
    </div>
    
    </>
  );
}

export default Home;