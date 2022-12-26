
import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description';
import ModelImage from './components/ModelImage';
import ProductImage from './components/ProductImage';
import Title from './components/Title';

function App() {
  const size = useWindowSize()

  return (
    
    <div>
      {
      size.width > 425 ? (
        <div className="container">
           <div className='container-left'>
            <Title/>
            <ModelImage/>
          </div>
          <div className='container-right'>
            <ProductImage/>
            <Description/>
          </div>
        </div>
       
      ):(
        <div className="mobile-container"> 
          <Title/>
          <div className='mid-section'>
          <ProductImage/>
          <ModelImage/>
          </div>
          <Description/>
        </div>
      )
    }
      
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}

export default App;
