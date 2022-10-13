import classNames from 'classnames/bind';
import styles from './boxCarousel.module.scss';
// import './admin.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import Form from './Form';
import Carousels from './Carousels/Carousels';
import { getCarousels } from '~/actions/carousels';
import Form from './Form/Form';
import Header from '../Header';

const cx = classNames.bind(styles);

function Boxcarousels() {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarousels());
    }, [dispatch]);

    const [scrollHeader, setScrollHeader] = useState(true);

    const handleScroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 45) {
            setScrollHeader(false);
        } else {
            setScrollHeader(true);
        }
    };
    console.log(scrollHeader);

    window.addEventListener('scroll', handleScroll);

    return (
        <div className={cx('admin')}>
            <div className={cx('header')}>
                <div>
                    <Header />
                </div>
                <div className={cx('content')}>
                    {scrollHeader ? (
                        <div className={cx('form')}>
                            <div style={{ top: '0' }}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </div>
                        </div>
                    ) : (
                        <div className={cx('form')}>
                            <div style={{ top: '0', position: 'fixed', width: 'calc(100% - 100px)' }}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </div>
                        </div>
                    )}
                    <div className={cx('product')}>
                        <Carousels setCurrentId={setCurrentId} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boxcarousels;
