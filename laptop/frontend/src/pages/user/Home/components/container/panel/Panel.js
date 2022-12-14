import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './Panel.module.scss';
import Button from '~/components/Button';
import { ShipIcon } from '~/components/Icons';
import './panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment, useEffect, useState } from 'react';
import { DataPanelProduct } from '~/Data/Panel/DataPanel';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProduct, getTopProducts } from '~/actions/productAction';
import formatPrice from '~/utils/formatPrice';
const cx = classNames.bind(styles);

const url =
    // 'https://lh3.googleusercontent.com/j6g11MMnNEM3X07636AS4A3-5Nw213c9l6B_WKIuClU3dXiPcvxb3xf8ib3iOXPzZVmXi4zFAfbSuexQA1-xFxYCPemjtrDY=w1232';
    'https://lh3.googleusercontent.com/UYYOWRnfKSEnGw2-KTK4oBjVWkTwFy4lmmptm85pxwSRLeVnhr7Lgc2Bm3gNt3kTXo5-v0w8uNXZmkvqIFa7chUq-TB_hYg=w1232';

function Panel() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 678,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slider = React.useRef(null);

    const dispatch = useDispatch();

    const { products: topProducts } = useSelector((state) => state.topProducts);
    useEffect(() => {
        dispatch(getTopProducts());
    }, [dispatch]);

    // const money = (topProducts.cost * topProducts.promotional) / 100

    // console.log('products: ', topProducts[0]);

    const [product, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(DataPanelProduct);
        }, 0);
    });
    // parseFloat((your_number).toFixed(2));
    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('container')}
                style={{
                    backgroundImage: `url(${url})`,
                }}
            >
                <div className={cx('header')}>
                    <div className={cx('header-text')}>Laptop b??n ch???y</div>
                </div>

                <div className={cx('products')}>
                    <div className={cx('box')}>
                        <Slider ref={slider} {...settings}>
                            {topProducts &&
                                topProducts.map((product) => (
                                    <div className={cx('box-content')} key={product._id}>
                                        {product.Stock === 0 ? (
                                            <div className={cx('box-content_mark')}>
                                                <p>H???t h??ng</p>
                                            </div>
                                        ) : product.Stock <= 5 ? (
                                            <div className={cx('box-content_marks')}>
                                                <p>C??n {product.Stock} s???n ph???m</p>
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
                                                                        TI???T KI???M
                                                                    </div>
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
                                                                            ).toFixed(0)) *
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
                                                        <div className={cx('gift-text')}>QU?? T???NG</div>
                                                        <div className={cx('gift-image')}>
                                                            <img src={product.gift_images[0].url} alt="" />
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
