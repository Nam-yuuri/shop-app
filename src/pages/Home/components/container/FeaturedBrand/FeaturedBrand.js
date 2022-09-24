import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Button from '~/components/Button';
import styles from './FeaturedBrand.module.scss';

const cx = classNames.bind(styles);

function FeaturedBrand() {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
    };

    const slider = React.useRef(null);

    const [featuredBrands, setFeaturedBrands] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setFeaturedBrands([
                {
                    id: 1,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/IqFtu_Hq7dQkOuTjKwVTjKV5Z1qK3FsuX3yX6Ab30i_yXZ2B1dFs8uQwQ9zgTt3UZts3RnuYx-ujvQW0i5Ox2UDhrqxeehI=rw-w400',
                    name: 'Asus',
                },
                {
                    id: 2,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/Y8Y_q1dMIBq4VaovFtS-eJvQ8oqyVUjIcdxZDKQBKHMBjEP7E2iU6GE10Sjq0AdLPlmTw0NGTBpnq34SlUnkFxCS3X3Nag4=rw-w400',
                    name: 'Microsoft',
                },
                {
                    id: 3,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/4YXRxEqxqmoY8EPliJtNkbcqQCUe4TPTJyAZ_MIsb8JStdwwf3PInwC0SABKuoZiHJC7dJY6Ex1JqS4bpKo=rw-w400',
                    name: 'HP',
                },
                {
                    id: 4,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/s2A1-31VtturT9H1hX0UccGw7yGufXD2NZFJkiNt-tTCx2xZO80lCt21b8oY3AYWmi3aUuMQIIySp623gbQoN22Wm_YvKvnB=rw-w400',
                    name: 'Lennovo',
                },
                {
                    id: 5,
                    to: 'laptop',
                    img: 'https://tse4.mm.bing.net/th?id=OIP.scz-yNNom2dlljyBcz02ewHaEc&pid=Api&P=0',
                    name: 'MSI',
                },
            ]);
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
