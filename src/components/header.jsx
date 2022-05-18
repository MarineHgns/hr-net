import ArgentBankIcon from "../assets/argentBankLogo.png"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return (
        <nav className="main-nav">
            <Link to="/">
                <img src={ArgentBankIcon} alt='Logo Argent Bank' className='main-nav-logo'></img>
                 <h1 className="sr-only">Argent Bank</h1>
            </Link>
                
            <div>
                <Link to="/sign-in" className="main-nav-item">
                    <FontAwesomeIcon icon={faCircleUser} className="icon-sign" />
                      Sign In 
                </Link>
            </div>
        </nav>
    )
}

export default Header