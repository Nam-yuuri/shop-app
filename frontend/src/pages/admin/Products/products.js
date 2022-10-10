import React from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useState } from 'react';

import styles from './products.module.scss';
import Product from './Product/product';
// import Product from './Product/product';

const cx = classNames.bind(styles);

function Products({setCurrentId}) {
    const products = useSelector((state) => state.products);
    // console.log(products);

    return (
        <div>
            {!products.length ? (
                <Fragment />
            ) : (
                <div className={cx('container-products')}>
                    {products.map((product) => (
                        <div className={cx('box-products')} key={product._id}>
                            
                            <Product product={product} setCurrentId={setCurrentId}/>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Products;
