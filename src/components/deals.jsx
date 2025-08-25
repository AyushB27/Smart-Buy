import './deals.css'
import {Flame, Search,UserCircle, LogIn,Facebook, Twitter, Instagram, Linkedin} from "lucide-react"
import wmImage from './wm.jpg'
import acImage from './ac.jpg'
import refIMG from './ref.jpg' 


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <a href="/" className="logo">
                    <Flame size={28} />
                    <span>SmartBuy</span>
                </a>
                <ul className="nav-links">
                    <li><a href="/deals">Deals</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">My List</a></li>
                </ul>
            </div>

            <div className="search-bar-container">
                <Search size={20} className="search-icon" />
                <input type="text" placeholder="Search products, brands..." className="search-input" />
            </div>

            <div className="nav-right">
                <button className="nav-button login-button">
                    <LogIn size={18} />
                    <span>Login</span>
                </button>
                <button className="nav-button signup-button">
                    <UserCircle size={18} />
                    <span>Sign Up</span>
                </button>
            </div>
        </nav>
    );
}

const Footer =()=>
{
return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-logo-col">
                    <a href="/" className="footer-logo">
                        <Flame size={28} />
                        <span>SmartBuy</span>
                    </a>
                    <p>
                        Your smart solution for finding the best deals and tracking prices on your favorite products.
                    </p>
                </div>
                <div className="footer-socials-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2025 SmartBuy. All rights reserved.</p>
            </div>
        </footer>
    );

}

const DealsSection = () => {
    const deals = [
        {
            id: 1,
            prod: 'Washing Machine',
            cost: '₹5999.00',
            brand: 'Samsung',
            reviews: '★★★★☆ (99 reviews)',
            image: wmImage
        },
        {
            id: 2,
            prod: 'Air Conditioner',
            cost: '₹5500.00',
            brand: 'LG',
            reviews: '★★★★☆ (120 reviews)',
            image: acImage
        },
        {
            id: 3,
            prod: 'Refrigerator',
            cost: '₹8999.00',
            brand: 'Whirlpool',
            reviews: '★★★★★ (210 reviews)',
            image: refIMG 
        }
    ];

    return (
        <>
            <Navbar />
            <div className="deals">
                <h1>Today's Hot Deals <Flame className='Flame' size={32}/></h1>
                <div className='deals-container'>
                    {deals.map((deal) => (
                        <div className='box' key={deal.id}>
                            <img
                                alt={deal.prod}
                                className='prodImg'
                                src={deal.image}
                            />
                            <h2>{deal.prod}</h2>
                            <h4 className='brand'>{deal.brand}</h4>
                            <h2 className='price'>{deal.cost}</h2>
                            <span>{deal.reviews}</span>
                            <br></br>
                            <br></br>
                            <button className='button'>Track price</button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default DealsSection;