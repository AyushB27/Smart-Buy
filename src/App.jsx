// import DealsSection from './components/deals';
import Deals from './components/deals';
import Login from './components/landing'; 
import ProductList from './components/ProductInfoCard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path = "/deals" element = {<Deals/>} />
                <Route path='/list' element={<ProductList/>} />
            </Routes>
        </Router>
    );
}

export default App;