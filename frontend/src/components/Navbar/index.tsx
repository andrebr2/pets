import { ReactComponent as PawIcon } from 'assets/img/wolf_paw.svg';
import './style.css'

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='pets-nav-content'>
                    <h1>Pets</h1>
                    <a href="">
                        <div className='pets-contact-container'>
                            <PawIcon />
                            <p className='pets-contact-link'>texto</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;