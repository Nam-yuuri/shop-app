import React, { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination';

import { ShipIcon } from '~/components/Icons';
import Button from '~/components/Button';
import styles from './Grid.module.scss';
import { getBrandProducts } from '~/actions/productAction';
import formatPrice from '~/utils/formatPrice';

const cx = classNames.bind(styles);

function Panel() {
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    let match = useParams();

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const productId = match.id;

    const { products } = useSelector((state) => state.productsBrand);

    const { productsCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getBrandProducts(productId));
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {products.length > 0 ? (
                    <div className={cx('products')}>
                        <div className={cx('box')}>
                            {products.map((product) => (
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
                                                    <div className={cx('promotion')}>
                                                        <div className={cx('box-promotion')}>
                                                            <div className={cx('promotion-text')}>TIẾT KIỆM</div>
                                                            <div className={cx('promotion-money')}>
                                                                {formatPrice(
                                                                    parseFloat(
                                                                        (
                                                                            ((product.cost / 1000000) *
                                                                                product.promotional) /
                                                                            100
                                                                        ).toFixed(0) * 1000000,
                                                                    ),
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
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
                                                        <div className={cx('promotional')}>
                                                            <div className={cx('promotional_price')}>
                                                                {formatPrice(product.cost)}
                                                            </div>
                                                            <div className={cx('percent')}>-{product.promotional}%</div>
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
                            ))}
                        </div>
                    </div>
                ) : (
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '30px',
                            fontWeight: '500',
                            marginBottom: '0px',
                            padding: '10px',
                        }}
                    >
                        KHÔNG TÌM THẤY SẢN PHẨM PHÙ HỢP!
                    </p>
                )}
            </div>
            <div>
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
            </div>
        </div>
    );
}

export default Panel;
