import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './Panel.module.scss';
import Button from '~/components/Button';
import { ShipIcon } from '~/components/Icons';
import './panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { DataPanelProduct } from '~/Data/Panel/DataPanel';

const cx = classNames.bind(styles);

function Panel() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const slider = React.useRef(null);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(DataPanelProduct);
        }, 0);
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('header-text')}>Laptop</div>
                    <Button to={'/laptop'}>
                        <Button to={'laptop'}>Xem tất cả</Button>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                </div>
                <div className={cx('products')}>
                    <div className={cx('box')}>
                        <Slider ref={slider} {...settings}>
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
                        </Slider>
                        <button className={cx('btn-prev')} onClick={() => slider?.current?.slickPrev()}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button className={cx('btn-next')} onClick={() => slider?.current?.slickNext()}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;
