import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Components/Pages/home/Home';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';

import Services from './Components/Pages/Services/Services';
import Product from './Components/Pages/Services/Product';
import Digital from './Components/Pages/Services/Digital';
import Technology from './Components/Pages/Services/Technology';
import Financial from './Components/Pages/Services/Financial';

import Industries from './Components/Pages/Industries/Industries';
import Aerospace from './Components/Pages/Industries/Aerospace';
import Automotive from './Components/Pages/Industries/Automotive';
import Banking from './Components/Pages/Industries/Banking';
import Capital from './Components/Pages/Industries/Capital';
import Communications from './Components/Pages/Industries/Communications';
import Consumer from './Components/Pages/Industries/Consumer';
import Healthcare from './Components/Pages/Industries/Healthcare';
import Utilities from './Components/Pages/Industries/Utilities';
import HighTech from './Components/Pages/Industries/HighTech';
import Industrial from './Components/Pages/Industries/Industrial';

import About from './Components/Pages/AboutUS/About';
import People from './Components/Pages/People/People';

import Career from './Components/Pages/Career/Career';
import Latestjobs from './Components/Pages/Career/Latestjobs'
import SingUp from './Components/Pages/Career/SingUp'
import Documents from './Components/Pages/Career/Documents';
import Candidateprofile from './Components/Pages/Career/Candidateprofile';
import ScrollToTop from './Components/ScrollToTop';
import OurVision from './Components/Pages/Our Vision/OurVision';




function App() {
 
  
  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <BrowserRouter>
        <ScrollToTop />
          <Navbar />

          <Routes>
            
            <Route path='/' element={<Home />}  />

            <Route path='/services' element={<Services />} />
            <Route path='/product' element={<Product/>} />
            <Route path='/digital' element={<Digital/>} />
            <Route path='/technology' element={<Technology/>} />
            <Route path='/financial' element={<Financial/>} />

            <Route path='/industries' element={<Industries/>} />
            <Route path='/aerospace' element={<Aerospace/>} />
            <Route path='/automotive' element={<Automotive/>} />
            <Route path='/banking' element={<Banking/>} />
            <Route path='/capital' element={<Capital/>} />
            <Route path='/communications' element={<Communications/>} />
            <Route path='/consumer' element={<Consumer/>} />
            <Route path='/healthcare' element={<Healthcare/>} />
            <Route path='/utilities' element={<Utilities/>} />
            <Route path='/highTech' element={<HighTech/>} />
            <Route path='/industrial' element={<Industrial/>} />

            <Route path='/about' element={<About/>} />
            <Route path='/people' element={<People/>} />

            <Route path='/careers' element={<Career/>} />
            <Route path='/latestjobs' element={<Latestjobs/>} />
            <Route path='/singUp' element={<SingUp/>} />
            <Route path='/documents' element={<Documents/>} />
            <Route path='/candidateprofile' element={<Candidateprofile/>} />

            <Route path='/ourvision' element={<OurVision/>} />







          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
