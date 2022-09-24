import classNames from 'classnames/bind';
import { ShipIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);

function Panel() {
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
                    id: 2,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/xJ1-zUP-mkDdZeUv9y1Xmd9xMt8LMKMmFM0_ECN7vSR4ndujp8SuDLOrpFDds58mLjhjTwIynXscK9FA_uzXUCaWshTeyBW2=rw',
                },
                {
                    id: 3,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/xJ1-zUP-mkDdZeUv9y1Xmd9xMt8LMKMmFM0_ECN7vSR4ndujp8SuDLOrpFDds58mLjhjTwIynXscK9FA_uzXUCaWshTeyBW2=rw',
                },
                {
                    id: 4,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/RwPBJ7up7tUmlhSGMnY-A_mD-oAANie8iIP0Pt8KFcpFPDTsgRiyQ3IGUlWdeA2TAkfALvu5KehHdwK8Lh-RbxR7lWAAcAuq=rw',
                },
                {
                    id: 5,
                    name: 'Laptop',
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230',
                    promotion_money: '1.900.000',
                    info: 'Laptop HP 15s-fq2660TU 6K793PA (15.6" HD/Intel Core i3-1115G4/4GB/512GB SSD/Windows 11 Home/1.7kg)',
                    cost: '10.990.000',
                    promotional_price: '12.990.000',
                    percent: '14.74',
                    gift_image:
                        'https://lh3.googleusercontent.com/hYoola60_2KWUpom1Rqr5QJ-3laSN_vzI_mwEZq2UUh5qbZSWbVZcK5ZxcrNDAO1wImarNL1Vq0EdDZj1Q=rw',
                },
                {
                    id: 6,
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
                    id: 7,
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
                    id: 8,
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
                    id: 9,
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
                    id: 10,
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
                    id: 11,
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
                    id: 12,
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
                    id: 13,
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
                    id: 14,
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
                    id: 15,
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
                    id: 16,
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
                    id: 17,
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
                    id: 18,
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
                    id: 19,
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
                    id: 20,
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

export default Panel;
