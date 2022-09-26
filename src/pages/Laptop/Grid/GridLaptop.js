import classNames from 'classnames/bind';
import { ShipIcon } from '~/components/Icons';
import React, { useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './GridLaptop.module.scss';
import { DataGrid } from '~/Data/Grid/DataGrid';

const cx = classNames.bind(styles);

function GridLaptop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(DataGrid);
        }, 0);
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('header-text')}>Laptop</div>
                    {/* <Button to={''}>
                        <Button to={'laptop'}>Xem tất cả</Button>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button> */}
                </div>
                <div className={cx('products')}>
                    <div className={cx('box')}>
                        {products.map((product) => (
                            <div className={cx('box-content')} key={product.id}>
                                <Button to={product.to}>
                                    <div className={cx('box-product')}>
                                        <div>
                                            <div className={cx('image')}>
                                                <div className={cx('box-image')}>
                                                    <div>
                                                        <img src={product.img} alt="" />
                                                    </div>
                                                </div>
                                                <div className={cx('promotion')}>
                                                    <div className={cx('box-promotion')}>
                                                        <div className={cx('promotion-text')}>TIẾT KIỆM</div>
                                                        <div className={cx('promotion-money')}>
                                                            {product.promotion_money}&nbsp;₫
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('info')}>
                                                <div className={cx('box-info')}>
                                                    <h3>{product.info}</h3>
                                                </div>
                                            </div>
                                            <div className={cx('price')}>
                                                <div className={cx('price-content')}>
                                                    <div className={cx('cost')}>{product.cost}&nbsp;₫</div>
                                                    <div className={cx('promotional')}>
                                                        <div className={cx('promotional_price')}>
                                                            {product.promotional_price}&nbsp;₫
                                                        </div>
                                                        <div className={cx('percent')}>-{product.percent}%</div>
                                                    </div>
                                                </div>
                                                <div className={cx('price-icon')}>
                                                    <ShipIcon />
                                                </div>
                                            </div>
                                            <div className={cx('gift')}>
                                                <div className={cx('gift-text')}>QUÀ TẶNG</div>
                                                <div className={cx('gift-image')}>
                                                    <img src={product.gift_image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GridLaptop;
