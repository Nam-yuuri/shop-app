import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Product.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import NotificationItem from '~/components/layout/components/PreviewItem/NotificationItem';
import './Product.css';
import { DataProduct } from '~/Data/Product/Product';

const cx = classNames.bind(styles);

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(DataProduct);
        }, 0);
    }, []);

    const renderNotification = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <NotificationItem />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {products.map((product) => (
                    <div key={product.id}>
                        {/* <Tippy
                            interactive
                            delay={[100, 200]}
                            offset={[0, -3]}
                            placement="right"
                            render={renderNotification}
                        > */}
                            <div className={cx('')}>
                                <Button to={product.to} className={cx('box')}>
                                    <div className={cx('content')}>
                                        <div className={cx('box-img')}>
                                            <img src={product.img} alt="" />
                                        </div>
                                        <span>{product.name}</span>
                                    </div>
                                </Button>
                            </div>
                        {/* </Tippy> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
