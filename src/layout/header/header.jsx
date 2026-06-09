import './Header.scss';
import logo from '../../../public/images/hirehub.png';
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <img src={logo} alt="Logo"/>
            </div>
            <nav className="header__nav">
                <Link className="header__link" to="/login">Login</Link>
                <Link className="header__link" to="/register">Register</Link>
            </nav>
        </header>
    )
}
