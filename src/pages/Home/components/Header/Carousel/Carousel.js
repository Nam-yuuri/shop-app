import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
// import { ClassList } from 'react-classlist';

import Button from '~/components/Button';
import './Carousel.css';

const cx = classNames.bind(styles);

function Carousel() {
    const [carousels, setCarousels] = useState([]);
    const [images, setImages] = useState([]);
    const [scroll, setScroll] = useState(false);

    // const app = new ClassList('container whitebg');
    const handleScroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY > 99) {
            // app.add('app-scroll');
            setScroll(true);
        } else {
            // app.remove('app-scroll');
            setScroll(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    useEffect(() => {
        setTimeout(() => {
            setCarousels([
                {
                    id: 1,
                    linkImg:
                        'https://lh3.googleusercontent.com/jFfMw6y58cqrd7zuU0fIS1f_wTFYmFF6WsAgiBzhLMmG7kO7WlFcOBOrP0cUJefn00ArIUm7VBZUP1Rqsy_ffETSmn9TI-EA=rw-w1920',
                },
                {
                    id: 2,
                    linkImg:
                        'https://lh3.googleusercontent.com/Z9EKSE-M6wIGl2iCCx9iPjmD3BI8zYRY_braf8j3SVn22HwVzNSWyCPGtKgmjW3S64iZf9fkkBfI92BKvGKTcwqe0Vpnl97C=rw-w1920',
                },
                {
                    id: 3,
                    linkImg:
                        'https://lh3.googleusercontent.com/T4faNR7WOsWykeMJ9HLvjQqJ6NOCmedAY895DIhr9AphLCEuYzNNhoj8SfUgHtDSIUMD5K39aQFS_AJIEI5OQw-ldZiNu-k=rw-w1920',
                },
                {
                    id: 4,
                    linkImg:
                        'https://lh3.googleusercontent.com/jFfMw6y58cqrd7zuU0fIS1f_wTFYmFF6WsAgiBzhLMmG7kO7WlFcOBOrP0cUJefn00ArIUm7VBZUP1Rqsy_ffETSmn9TI-EA=rw-w1920',
                },
                {
                    id: 5,
                    linkImg:
                        'https://lh3.googleusercontent.com/llRGlCgB6jJs9wq4fU4Rroz_rxn2xgfRjyXhLeeWnd7Fbpow0oo2Y2fE6YKPWjM9uDtXNtn5pDXOhXwzB79AaLBnCKfxeTOF=rw-w1920',
                },
                {
                    id: 6,
                    linkImg:
                        'https://lh3.googleusercontent.com/q4Knj3SkeQJeR8dyfilKzqMfuQyIkbRg8_y4ayyco5lNvYki_oSB8PCycwSj8Fqifcm8NpGJiEd48boGfLl5TGZaKqEYVTvb8g=rw-w1920',
                },
            ]);
        }, 0);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setImages([
                {
                    id: 1,
                    linkImg:
                        'https://lh3.googleusercontent.com/BghauwlVB9fR2li_CKrRgUPx775Bs8sUoGRhd_9JIx6G_rfoQplDWHtvf4IBaLoq1fmHdomhdZlaUnCrRwUaA2_W_3gypCabEg=rw-w308',
                },
                {
                    id: 2,
                    linkImg:
                        'https://lh3.googleusercontent.com/LJn0eNsRxrPRkyTsMf4mrgRPSZKdx7AFLX9c6ApPhRL49WQ-fIIBab7sYAjiSY2F4YQSW6DHDRWBF4LCc1ogqvQlfCAlIag=rw-w308',
                },
                {
                    id: 3,
                    linkImg:
                        'https://lh3.googleusercontent.com/zYcHzuKXxDdjo8Ys5Wm8AJqKKSjexXRVnyGdE-hXnkFdg3GEHH0fTxwuSxpkBzb9dCZBDyAnsZ2Z1tckGCAGGTb2cCk2Ptw=rw-w308',
                },
                {
                    id: 4,
                    linkImg:
                        'https://lh3.googleusercontent.com/gHeUX_NcMU4ouasucDLoq3or6MCO4bdK86nICUQgsdgPo2VTmkU3HGWUXvyuw_5fZMjia4MB6EIhOak9c1R0zKPbTgl0etSr7g=rw-w308',
                },
            ]);
        }, 0);
    }, []);

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
    return (
        <div className={scroll ? 'App app-scroll' : 'App'} id="app">
            <div>
                <Slider {...settings}>
                    {carousels.map((carousel) => (
                        <div className={cx('card')} key={carousel.id}>
                            <div className={cx('card-top')}>
                                <img src={carousel.linkImg} alt={carousel.title} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={cx('box')}>
                <div className={cx('box-img')}>
                    {images.map((img) => (
                        <div className={cx('img')} key={img.id}>
                            <Button>
                                <img src={img.linkImg} alt="" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
