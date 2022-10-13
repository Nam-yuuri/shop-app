import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './brand.module.scss';

const cx = classNames.bind(styles);

function Brand({ brand }) {
    // console.log(brand)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div key={brand.id}>
                    <div className={cx('')}>
                        <Button to='/laptop' className={cx('box')}>
                            <div className={cx('content')}>
                                <div className={cx('box-img')}>
                                    <img src={brand.img} alt="" />
                                </div>
                                <span>{brand.name}</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;
