import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getHorizontalMain } from '~/actions/bannerHorizontalAction';

const cx = classNames.bind(styles);

function Banner() {
    const dispatch = useDispatch();

    const { horizontals } = useSelector((state) => state.horizontalMain);
    useEffect(() => {
        dispatch(getHorizontalMain());
    }, [dispatch]);
    // console.log('horizon: ', horizontals[0]);

    return (
        <div className={cx('banner')}>
            <div className={cx('box-banner')}>
                {horizontals.map((horizon) => (
                    <div className={cx('box-img')} key={horizon._id}>
                        <img src={horizon.images.url} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner;
