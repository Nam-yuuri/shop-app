import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
// import { ClassList } from 'react-classlist';

import Button from '~/components/Button';
import './Carousel.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBanners, getAllBannersMain } from '~/actions/bannerAction';
import { getAllCarousels } from '~/actions/carouselAction';

const cx = classNames.bind(styles);

function Carousel() {
    const [scroll, setScroll] = useState(false);

    const settings = {
        dots: true,
        Number: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };
    const dispatch = useDispatch();

    const { banners } = useSelector((state) => state.bannersMain);

    useEffect(() => {
        dispatch(getAllBannersMain());
    }, [dispatch]);

    // console.log('banner',banners)

    const { carousels } = useSelector((state) => state.carousels);
    useEffect(() => {
        dispatch(getAllCarousels());
    }, [dispatch]);

    // console.log('carousel :', carousels);

    return (
        <div className={scroll ? 'App app-scroll' : 'App'} id="app">
            <div className="carousel">
                <Slider {...settings}>
                    {carousels.map((carousel) => (
                        <div className={cx('cart')} key={carousel._id}>
                            <div className={cx('cart-top')}>
                                <img src={carousel.url} alt={carousel.title} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={cx('box')}>
                <div className={cx('box-img')}>
                    {banners.map((img) => (
                        <div className={cx('img')} key={img._id}>
                            <Button>
                                <img src={img.images[0].url} alt="" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
