import './Header.css';

// import NavLink from '~/components/NavLink';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    // const [click, setClick] = useState('Brands');
    // console.log(click)

    // var li = document.getElementById(click);
    // console.log(li);

    // console.log(li);

    // var list = li.classList;
    // console.log(list)

    // if(li === click){
    //     list.add("Click")
    // } else {
    //     list.remove("Click")
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" id="Brands">
                            <NavLink className="nav-link" aria-current="page" to="/brands">
                                Brands
                            </NavLink>
                        </li>
                        <li className="nav-item" id="Products" >
                            <NavLink className="nav-link" to="/products">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/carousels">
                                Carousels
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/boximgs">
                                Box Image
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
