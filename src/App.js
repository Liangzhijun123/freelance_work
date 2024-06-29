
import './App.css';
import Nav from './Components/Nav.tsx';
import Title from './Components/Home page/Title.tsx';
import Product from './Components/Home page/Product.tsx';
import Feature from './Components/Home page/Feature.tsx';

function App() {
  return (
    <>
    <div className="App">
      {/* nav and footer */}
      <Nav />

      {/* Home page */}
      <Title />
      <Product />
      <Feature />
    </div>
    
    </>
  );
}

export default App;
