import Carousel from "./Carousel/Carousel";
import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Carousels.module.scss';

const cx = classNames.bind(styles);

function Carousels({setCurrentId}) {
    const carousels = useSelector((state) => state.carousels);
    // console.log(carousels);
    return ( 
        <div>
        {!carousels.length ? (
            <h1>Chưa có ảnh nào trong database</h1>
        ) : (
            <div className={cx('container-carousels')}>
                {carousels.map((carousel) => (
                    <div className={cx('box-carousels')} key={carousel._id}>
                        
                        <Carousel carousel={carousel} setCurrentId={setCurrentId}/>
                        
                    </div>
                ))}
            </div>
        )}
    </div>
     );
}

export default Carousels;