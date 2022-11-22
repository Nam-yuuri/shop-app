import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Promotion.module.scss';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';
import { useSelect } from '@mui/base';
import { useEffect } from 'react';
import { getAllPromotionMain } from '~/actions/promotionAction';

const cx = classNames.bind(styles);

function Promotion() {
    const dispatch = useDispatch();

    const { promotions } = useSelector((state) => state.promotionsMain);

    useEffect(() => {
        dispatch(getAllPromotionMain());
    }, [dispatch]);
    // console.log('promotion: ', promotions);

    return (
        <div className={cx('promotion')}>
            {promotions.map((promotion) => (
                <div className={cx('box-promotion')} key={promotion._id}>
                    <div className={cx('img')}>
                        <img
                            src={promotion.images.url}
                            alt=""
                        />
                    </div>
                    <h2>{promotion.title}</h2>
                    <p>{promotion.date}</p>
                    <div className={cx('btn')}>
                        <Button primary to={config.routes.brand}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Promotion;
