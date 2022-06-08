import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"

function Header() {
 return (
        <nav className="main-nav">
            <Link to="/" className="logo-box">
                <img src={Logo} alt='Logo' className='main-nav-logo'></img>
                 <h1 className="title-logo">Wealth Health</h1>
            </Link>
        </nav>
  );
}



export default  Header