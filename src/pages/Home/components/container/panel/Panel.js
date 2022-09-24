import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './Panel.module.scss';
import Button from '~/components/Button';
import { ShipIcon } from '~/components/Icons';
import './panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

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
            setProducts([
                {
                    id: 1,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/1p0K3il1LX8eN1DpDv87L3xK8yg9mTVRMi-EewK7d-TnwZu-1eaenAxjUiKnP0SsNWOXFR9bKIoE-qvG4BIc82GUppZOrcE=rw',
                },
                {
                    id: 1,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/1p0K3il1LX8eN1DpDv87L3xK8yg9mTVRMi-EewK7d-TnwZu-1eaenAxjUiKnP0SsNWOXFR9bKIoE-qvG4BIc82GUppZOrcE=rw',
                },
                {
                    id: 1,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/1p0K3il1LX8eN1DpDv87L3xK8yg9mTVRMi-EewK7d-TnwZu-1eaenAxjUiKnP0SsNWOXFR9bKIoE-qvG4BIc82GUppZOrcE=rw',
                },
                {
                    id: 1,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/1p0K3il1LX8eN1DpDv87L3xK8yg9mTVRMi-EewK7d-TnwZu-1eaenAxjUiKnP0SsNWOXFR9bKIoE-qvG4BIc82GUppZOrcE=rw',
                },
                {
                    id: 1,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/1p0K3il1LX8eN1DpDv87L3xK8yg9mTVRMi-EewK7d-TnwZu-1eaenAxjUiKnP0SsNWOXFR9bKIoE-qvG4BIc82GUppZOrcE=rw',
                },
                {
                    id: 1,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/1p0K3il1LX8eN1DpDv87L3xK8yg9mTVRMi-EewK7d-TnwZu-1eaenAxjUiKnP0SsNWOXFR9bKIoE-qvG4BIc82GUppZOrcE=rw',
                },
            ]);
        }, 0);
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('header-text')}>Laptop</div>
                    <Button to={''}>
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
