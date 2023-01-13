import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import Cart from './component/pages/Cart';
import Home from './component/pages/Home';
import Navbar from './component/pages/Navbar';
import NotFound from './component/pages/Not_found';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
     
<>
<div className="App">

<BrowserRouter>
<ToastContainer/>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/cart" element={<Cart/>}/>
    <Route path='*' element={<NotFound/>}/>
</Routes>
</BrowserRouter>
</div>

</>

    );
}

export default App;
