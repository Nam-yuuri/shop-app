import './Header.css'

import Button from "~/components/Button";


function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Button className="nav-link active" aria-current="page" to='/brands'>
                                Brands
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button className="nav-link" to='/products'>
                                Products
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button className="nav-link" to='/carousels'>
                                Carousels
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button className="nav-link" to='/boximgs'>
                                Box Image
                            </Button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
