import './App.css';
import Navbar from './components/UI/Navbar';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Footer from './components/UI/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Nothingfound from './components/pages/Nothingfound';
import {GithubProvider} from './context/GithubContext'
import { AlertProvider } from './context/AlertContext';
import Alert from './components/UI/Alert';
import User from './components/pages/User';


function App() {
  return (

    <GithubProvider>
      <AlertProvider>
<Router>
    <div className="flex flex-col justify-between h-screen">
    <Navbar/>



    <main className='container mx-auto px-12 pt-12 pb-12'>
      <Alert/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/user/:login' element={<User/>}/>

      <Route path='/*' element={<Nothingfound/>}/>


    </Routes>

    </main>


    <Footer/>
    </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
