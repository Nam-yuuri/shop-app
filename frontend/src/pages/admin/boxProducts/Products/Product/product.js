import React from 'react';
import classNames from 'classnames/bind';
import styles from './product.module.scss';
import Button from '~/components/Button';
import { ShipIcon } from '~/components/Icons';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '~/actions/products';

const cx = classNames.bind(styles);

function Product({ product, setCurrentId }) {
    const dispatch = useDispatch();
    // console.log(product);

    return (
        <div>
            <div className={cx('box-content')}>
                <Button to={''}>
                    <div className={cx('box-product')}>
                        <div>
                            <div className={cx('image')}>
                                <div className={cx('box-image')}>
                                    <div>
                                        <img
                                            src="https://lh3.googleusercontent.com/uC6sn_dwq7thX2Xg1fgZTnN7gA72dyJx9aSZTZ9Mld6c8wPOmMKrAwxre5_rU7GAXhp1k4LQaY9oFTiE5csQpNBsW500WF0e=rw-w230"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className={cx('promotion')}>
                                    <div className={cx('box-promotion')}>
                                        <div className={cx('promotion-text')}>TIẾT KIỆM</div>
                                        <div className={cx('promotion-money')}>{product.promotion_money}&nbsp;₫</div>
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
                                    <img
                                        src="https://lh3.googleusercontent.com/1p0K3il1LX8eN1DpDv87L3xK8yg9mTVRMi-EewK7d-TnwZu-1eaenAxjUiKnP0SsNWOXFR9bKIoE-qvG4BIc82GUppZOrcE=rw"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Button>
            </div>
            <div className={cx('box-control')}>
                <Button
                    primary
                    small
                    onClick={() => {
                        setCurrentId(product._id);
                    }}
                >
                    Update
                </Button>
                <Button primary small onClick={() => dispatch(deleteProduct(product._id))}>
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default Product;
