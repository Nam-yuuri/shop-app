import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { ShipIcon } from '~/components/Icons';
import styles from './boxProducts.module.scss';
import './admin.css';
import { useEffect, useState } from 'react';
import { createProduct, getProducts } from '~/actions/products';
// import Products from './src/pagesAdmin/Products/products';
import { useDispatch } from 'react-redux';
import Products from './Products';
import Form from './Form';
// import Products from './boxProducts/Products';
// import Form from './boxProducts/Form';
// import Products from './Products/products';


const cx = classNames.bind(styles);

function Boxproducts() {
    const [currentId, setCurrentId] = useState(null)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className={cx('admin')}>
            <div className={cx('header')}>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            {/* <a className="navbar-brand" href="#">
                                Navbar
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">
                                            Brands
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Panel
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Banner 1
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Representatives
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Banner 2
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Brands Representatives
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Productss
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                                            Disabled
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className={cx('content')}>
                    <div className={cx('product')}>
                        <Products setCurrentId={setCurrentId} />
                    </div>
                    <div className={cx('form')}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boxproducts;
