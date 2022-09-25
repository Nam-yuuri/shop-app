import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { DataCardItem } from '~/Data/CardItem/CardItem';
import styles from './CardValue.module.scss';

const cx = classNames.bind(styles);

function CardItemValue() {
    const [cardResult, setCardResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setCardResult(DataCardItem);
        }, 0);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    {cardResult.map((card) => (
                        <div className={cx('content')} key={card.id}>
                            <div className={cx('image')}>
                                <img src={card.img} alt="" />
                            </div>
                            <div className={cx('info')}>
                                <div className={cx('text')}>{card.name}</div>
                                <div className={cx('code', 'text')}>Số lượng: {card.amount}</div>
                                <div className={cx('number')}>{card.price} đ</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* {cardResult.map((card) => ( */}
                <div className={cx('sum-price')}>
                    <div className={cx('text')}>Tổng tiền (2) sản phẩm</div>
                    <div className={cx('number')}>123.456 đ</div>
                </div>
                {/* ))} */}
                <div className={cx('btn')}>
                    <button>
                        <div>Xem giỏ hàng</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardItemValue;
