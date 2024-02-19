import { Route,Routes } from 'react-router-dom';
import Navbar from './pages/navbar';
import Catalogue from "./pages/Catalogue"
import Fashion from "./pages/Fashion";
import Favourite from "./pages/Favourite";
import Lifestyle from "./pages/Lifestyle";
import Signup from "./pages/Signup";
import Hero from './components/hero';

function App() {

  return (
    <div className='h-[100vh]'>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route path='/' element={<Hero/>}/>
         <Route path='/catalogue' element={<Catalogue/>} />
         <Route path='/fashion' element={<Fashion/>} />
         <Route path='/favourite' element={<Favourite/>} />
         <Route path='/lifestyle' element={<Lifestyle/>} />
         <Route path='/signup' element={<Signup/>} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
