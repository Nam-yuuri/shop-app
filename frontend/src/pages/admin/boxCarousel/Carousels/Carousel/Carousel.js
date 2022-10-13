import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
import { useDispatch } from 'react-redux';
import Button from '~/components/Button';
import { deleteCarousel } from '~/actions/carousels';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Carousel({ carousel, setCurrentId }) {
    const dispatch = useDispatch();
    // console.log(carousel)
    return ( 
        <div className={cx('box-carousel')}>
            <div className={cx('carousel')}>
                <Image src={carousel.img} alt={carousel.alt} />
            </div>
            <div className={cx('box-control')}>
                <Button
                    primary
                    small
                    onClick={() => {
                        setCurrentId(carousel._id);
                    }}
                >
                    Update
                </Button>
                <Button primary small onClick={() => dispatch(deleteCarousel(carousel._id))}>
                    Delete
                </Button>
            </div>
        </div>

     );
}

export default Carousel;