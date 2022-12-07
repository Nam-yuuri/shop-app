import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Products.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import NotificationItem from '~/components/layout/components/PreviewItem/NotificationItem';
import { DataProduct } from '~/Data/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from '~/actions/brandAction';

const cx = classNames.bind(styles);

function ProductItem() {
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

    const dispatch = useDispatch();

    const { loading, brands } = useSelector((state) => state.brands);
    useEffect(() => {
        dispatch(getAllBrands());
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {brands.map((product) => (
                    <div key={product._id}>
                        <div className={cx('')}>
                            <Button to={`http://localhost:3000/brand/${product._id}`} className={cx('box')} onClick={() => {}}>
                                <div className={cx('content')}>
                                    <div className={cx('box-img')}>
                                        <img src={product.logo.url} alt="" />
                                    </div>
                                    <span>{product.name}</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductItem;
