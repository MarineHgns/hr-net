import ArgentBankIcon from "../assets/argentBankLogo.png"
import { Link } from "react-router-dom"
import { selectUserLogin } from '../utils/selectors'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { logOut } from "../utils/reducers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const connected = useSelector(selectUserLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let handleLogOut = () => {
        dispatch(logOut())
        navigate("/sign-in")
    }
    console.log(connected);
    
    return (
        <nav className="main-nav">
            <Link to="/">
                <img src={ArgentBankIcon} alt='Logo Argent Bank' className='main-nav-logo'></img>
                 <h1 className="sr-only">Argent Bank</h1>
            </Link>


            {connected 
                    ?
                    <div className='logged-container'> 
                        <Link className='main-nav-item' to={"/user"}>NAME</Link>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon"/>
                        <p className='main-nav-item' onClick={handleLogOut}>Log out</p> 
                    </div>
                    : 
                    <div>
                        <FontAwesomeIcon icon={ faUserCircle } /> 
                        <Link className="main-nav-item" to={"/sign-in"}>
                        Log In
                        </Link>
                    </div>}
        </nav>
  );
}



export default  Header