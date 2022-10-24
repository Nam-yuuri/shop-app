import React from 'react';
import classNames from 'classnames/bind';
import styles from './product.module.scss';
import Button from '~/components/Button';
import { ShipIcon } from '~/components/Icons';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '~/actions/products';
import BoxProfile from '~/pages/admin/boxProducts/boxProfiles/boxProfiles';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Product({ product, setCurrentId, setProfile, setProfileCurrentId}) {
    const dispatch = useDispatch();
    // console.log(product);

    return (
        <div className={cx('wrapper-product')}>
            <div className={cx('box-content')}>
                <div>
                    <Button className={cx('box-product')} onClick={() => {
                        setProfile(true)
                        setProfileCurrentId(product._id)
                    }}>
                        <div>
                            <div className={cx('image')}>
                                <div className={cx('box-image')}>
                                    <div>
                                        <Image
                                            src={product.img}
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
                                    <div className={cx('cost')}>{product.promotional_price}&nbsp;₫</div>
                                    <div className={cx('promotional')}>
                                        <div className={cx('promotional_price')}>
                                            {product.cost}&nbsp;₫
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
                                    <Image
                                        src={product.gift_image}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </Button>
                </div>
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
