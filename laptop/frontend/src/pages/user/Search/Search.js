import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment, useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './Grid.module.scss';
import { DataGrid } from '~/Data/Grid/DataGrid';
// import Grid from '~/components/Grid';
import { ShipIcon } from '~/components/Icons';
import { useSelector, useDispatch } from 'react-redux';
import './Grid.css';
import { getAdminProduct, getProduct } from '~/actions/productAction';
import formatPrice from '~/utils/formatPrice';
import Loading from '~/components/Loading/Loading';
import Pagination from 'react-js-pagination';
import { useParams } from 'react-router-dom';
const cx = classNames.bind(styles);

function Search() {
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

    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('');

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const dispatch = useDispatch();
    let match = useParams();

    const keyword = match && match.keyword;

    // const { loading, products } = useSelector((state) => state.products);
    const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector(
        (state) => state.products,
    );
    useEffect(() => {
        dispatch(getProduct(currentPage, sort, keyword));
    }, [dispatch, currentPage, sort, keyword]);

    console.log("products: ",products   );


    // console.log('keyword: ', keyword);

    return (
        <div>
            {/* {loading ? (
                <Loading />
            ) : ( */}
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('box')}>
                        <div className={cx('header')}>
                            <div className={cx('header-text')}>Kết quả: {keyword}</div>
                        </div>
                    </div>
                    <div className={cx('wrapper')}>
                        <div className={cx('container')}>
                            <div className={cx('products')}>
                                <div className={cx('box')}>
                                    {products.length > 0 ? (
                                        products.map((product) => (
                                            <div className={cx('box-content')} key={product._id}>
                                                {product.Stock === 0 ? (
                                                    <div className={cx('box-content_mark')}>
                                                        <p>Hết hàng</p>
                                                    </div>
                                                ) : product.Stock <= 5 ? (
                                                    <div className={cx('box-content_marks')}>
                                                        <p>Còn {product.Stock} sản phẩm</p>
                                                    </div>
                                                ) : (
                                                    <Fragment />
                                                )}
                                                <Button to={`/profile/${product._id}`}>
                                                    <div className={cx('box-product')}>
                                                        <div>
                                                            <div className={cx('image')}>
                                                                <div className={cx('box-image')}>
                                                                    <div>
                                                                        <img src={product.images[0].url} alt="" />
                                                                    </div>
                                                                </div>
                                                                {product.Status_promotional && (
                                                                    <div className={cx('promotion')}>
                                                                        <div className={cx('box-promotion')}>
                                                                            <div className={cx('promotion-text')}>
                                                                                TIẾT KIỆM
                                                                            </div>
                                                                            <div className={cx('promotion-money')}>
                                                                                {formatPrice(
                                                                                    parseFloat(
                                                                                        (
                                                                                            ((product.cost / 1000000) *
                                                                                                product.promotional) /
                                                                                            100
                                                                                        ).toFixed(1) * 1000000,
                                                                                    ),
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className={cx('info')}>
                                                                <div className={cx('box-info')}>
                                                                    <h3>
                                                                        {product.name} {product.description}
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                            <div className={cx('price')}>
                                                                <div className={cx('price-content')}>
                                                                    <div className={cx('cost')}>
                                                                        {formatPrice(
                                                                            parseFloat(
                                                                                (product.cost / 1000000 -
                                                                                    (
                                                                                        ((product.cost / 1000000) *
                                                                                            product.promotional) /
                                                                                        100
                                                                                    ).toFixed(1)) *
                                                                                    1000000,
                                                                            ),
                                                                        )}
                                                                    </div>
                                                                    {product.Status_promotional && (
                                                                        <div className={cx('promotional')}>
                                                                            <div className={cx('promotional_price')}>
                                                                                {formatPrice(product.cost)}
                                                                            </div>
                                                                            <div className={cx('percent')}>
                                                                                -{product.promotional}%
                                                                            </div>
                                                                        </div>
                                                                    )}
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
                                        <div style={{width: '100%'}}>
                                            <p style={{textAlign: 'center', fontSize: '30px'}}>Không tìm thấy sản phẩm phù hợp</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {resultPerPage < filteredProductsCount && (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px',
                        }}
                    >
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resultPerPage}
                            totalItemsCount={productsCount}
                            onChange={setCurrentPageNo}
                            nextPageText="Trang sau"
                            prevPageText="Trang trước"
                            // firstPageText="Trang đầu"
                            // lastPageText="Trang cuối"
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                )}
                {/* <div className={cx('pagination')}>
                        <nav aria-label="...">
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <span className="page-link">Previous</span>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item ">
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
            {/* )} */}
        </div>
    );
}

export default Search;
