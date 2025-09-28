// import DealsSection from './components/deals';
import Deals from './components/deals';
import Landing from './components/landing'; 
import ProductList from './components/ProductInfoCard';
import Login from './components/login';
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login/>} />
                <Route path = "/deals" element = {<Deals/>} />
                <Route path='/list' element={<ProductList/>} />
            </Routes>
        </Router>
    );
}

export default App;