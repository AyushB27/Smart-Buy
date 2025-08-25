import DealsSection from './components/deals';
import Login from './components/landing'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path='/dash' element={<DealsSection />} />
            </Routes>
        </Router>
    );
}

export default App;