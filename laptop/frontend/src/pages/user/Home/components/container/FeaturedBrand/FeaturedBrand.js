import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Button from '~/components/Button';
import { DataBrands } from '~/Data/Brands/Brands';
import styles from './FeaturedBrand.module.scss';

const cx = classNames.bind(styles);

function FeaturedBrand() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
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

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <div className={cx('header-text')}>Thương hiệu nổi bật</div>
            </div>
            <div className={cx('carousel')}>
                <Slider ref={slider} {...settings}>
                    {featuredBrands.map((brand) => (
                        <div className={cx('box')} key={brand.id}>
                            <div className={cx('box-img')}>
                                <Button to={brand.to}>
                                    <img src={brand.img} alt="" />
                                </Button>
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
