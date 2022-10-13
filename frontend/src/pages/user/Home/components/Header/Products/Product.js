import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Product.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import NotificationItem from '~/components/layout/components/PreviewItem/NotificationItem';
import './Product.css';
import { DataProduct } from '~/Data/Product/Product';
import { useDispatch } from 'react-redux';
import { getBrands } from '~/actions/brands';
import Brands from './brands'
// import Brands from '~/pages/admin/boxBrands/brands/brands';

const cx = classNames.bind(styles);

function Product() {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {/* <div>
                    {products.map((product) => (
                        <div key={product.id}>
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
                        </div>
                    ))}
                </div> */}
                <Brands setCurrentId={setCurrentId} />
            </div>
        </div>
    );
}

export default Product;
