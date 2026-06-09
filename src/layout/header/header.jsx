import './Header.scss';
import logo from '../../../public/images/hirehub.png';

export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <img src={logo} alt="Logo"/>
            </div>
        </header>
    )
}