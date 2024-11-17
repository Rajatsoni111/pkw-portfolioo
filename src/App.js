import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Review from './components/review';
import Service from './components/service';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service1 from './components/service-1';
import Service3 from './components/service3';
import Service2 from './components/service2';
import Service4 from './components/service4';
import About from './components/about';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/review' element={<Review />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>

        <Routes>
          <Route path='/Logo-design' element={<Service1 />}></Route>
          <Route path='/icon-design' element={<Service4 />}></Route>
          <Route path='/art-illustration' element={<Service3 />}></Route>
          <Route path='/book-layout' element={<Service2 />}></Route>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </>
  );
}

export default App;
