import React from 'react';
import Brand from './brand';
import classNames from 'classnames/bind';
import styles from './brands.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Brands({setCurrentId}) {
    const brands = useSelector((state) => state.brands);
    console.log(brands);
    return (
        <div>
            {!brands.length ? (
                <h1>Chưa có thương hiệu nào trong database</h1>
            ) : (
                <div className={cx('container-brands')}>
                    {brands.map((brand) => (
                        <div className={cx('box-brands')} key={brand._id}>
                            
                            <Brand brand={brand} setCurrentId={setCurrentId}/>
                            
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Brands;
