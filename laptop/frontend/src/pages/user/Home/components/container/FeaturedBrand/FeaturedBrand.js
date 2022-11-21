import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getAllBrands } from '~/actions/brandAction';
import Button from '~/components/Button';
import { DataBrands } from '~/Data/Brands/Brands';
import styles from './FeaturedBrand.module.scss';

const cx = classNames.bind(styles);

function FeaturedBrand() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slider = React.useRef(null);

    const [featuredBrands, setFeaturedBrands] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setFeaturedBrands(DataBrands);
        });
    });

    const dispatch = useDispatch();

    const { loading, brands } = useSelector((state) => state.brands);
    useEffect(() => {
        dispatch(getAllBrands());
    }, [dispatch]);

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <div className={cx('header-text')}>Thương hiệu nổi bật</div>
            </div>
            <div className={cx('carousel')}>
                <Slider ref={slider} {...settings}>
                    {brands.map((brand) => (
                        <div className={cx('box')} key={brand._id}>
                            <div className={cx('box-img')}>
                                <div>
                                    <img src={brand.images.url} alt="" />
                                </div>
                            </div>
                            <div className={cx('box-text')}>{brand.name}</div>
                        </div>
                    ))}
                </Slider>
                <button className={cx('btn-prev')} onClick={() => slider?.current?.slickPrev()}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className={cx('btn-next')} onClick={() => slider?.current?.slickNext()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}

export default FeaturedBrand;
