import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './Grid.module.scss';
import { DataGrid } from '~/Data/Grid/DataGrid';
// import Grid from '~/components/Grid';
import { ShipIcon } from '~/components/Icons';
import { useSelector, useDispatch } from 'react-redux';
import './Grid.css';
import { getAdminProduct } from '~/actions/productAction';
import formatPrice from '~/utils/formatPrice';
import Loading from '~/components/Loading/Loading';
const cx = classNames.bind(styles);

function Panel() {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setProducts(DataGrid);
    //     }, 0);
    // });

    // const {
    //     products,
    //     // loading,
    //     // error,
    //     // productsCount,
    //     // resultPerPage,
    //     // filteredProductsCount,
    // } = useSelector((state) => state.products);
    // const data = useSelector((state) => state.products);

    // console.log(products)
    // console.log(data)

    const dispatch = useDispatch();

    const { loading, products } = useSelector((state) => state.productsAdmin);
    useEffect(() => {
        dispatch(getAdminProduct());
    }, [dispatch]);

    // console.log(products);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <div className={cx('box')}>
                            <div className={cx('header')}>
                                <div className={cx('header-text')}>Laptop</div>
                            </div>
                        </div>
                        <div className={cx('wrapper')}>
                            <div className={cx('container')}>
                                <div className={cx('products')}>
                                    <div className={cx('box')}>
                                        {products ? (
                                            products.map((product) => (
                                                <div className={cx('box-content')} key={product._id}>
                                                    <Button to={`/profile/${product._id}`}>
                                                        <div className={cx('box-product')}>
                                                            <div>
                                                                <div className={cx('image')}>
                                                                    <div className={cx('box-image')}>
                                                                        <div>
                                                                            <img src={product.images[0].url} alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className={cx('promotion')}>
                                                                        <div className={cx('box-promotion')}>
                                                                            <div className={cx('promotion-text')}>
                                                                                TIẾT KIỆM
                                                                            </div>
                                                                            <div className={cx('promotion-money')}>
                                                                                {formatPrice(
                                                                                    parseFloat(
                                                                                        (
                                                                                            (product.cost *
                                                                                                product.promotional) /
                                                                                            100
                                                                                        ).toFixed(0),
                                                                                    ),
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('info')}>
                                                                    <div className={cx('box-info')}>
                                                                        <h3>
                                                                            {product.name}
                                                                            {product.description}
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                <div className={cx('price')}>
                                                                    <div className={cx('price-content')}>
                                                                        <div className={cx('cost')}>
                                                                            {formatPrice(product.cost)}
                                                                        </div>
                                                                        <div className={cx('promotional')}>
                                                                            <div className={cx('promotional_price')}>
                                                                                {formatPrice(
                                                                                    parseFloat(
                                                                                        product.cost -
                                                                                            (
                                                                                                (product.cost *
                                                                                                    product.promotional) /
                                                                                                100
                                                                                            ).toFixed(0),
                                                                                    ),
                                                                                )}
                                                                            </div>
                                                                            <div className={cx('percent')}>
                                                                                -{product.promotional}%
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className={cx('price-icon')}>
                                                                        <ShipIcon />
                                                                    </div>
                                                                </div>
                                                                <div className={cx('gift')}>
                                                                    <div className={cx('gift-text')}>QUÀ TẶNG</div>
                                                                    <div className={cx('gift-image')}>
                                                                        <img src={product.gift_images[0].url} alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Button>
                                                </div>
                                            ))
                                        ) : (
                                            <div>
                                                <p>Không có sản phẩm nào</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={cx('pagination')}>
            <nav aria-label="...">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item active">
                        <span className="page-link">
                            2<span className="sr-only">(current)</span>
                        </span>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div> */}
                </div>
            )}
        </div>
    );
}

export default Panel;
