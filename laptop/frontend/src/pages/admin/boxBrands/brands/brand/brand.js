import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { deleteBrand } from '~/actions/brands';
import Button from '~/components/Button';
import styles from './brand.module.scss';

const cx = classNames.bind(styles);

function Brand({ brand, setCurrentId }) {
    const dispatch = useDispatch();
    // console.log(brand)
    return (
        <div className={cx('brand')}>
            <div style={{height: '100%'}}>
                <div className={cx('box')}>
                    <div className={cx('box-img')}>
                        <img src={brand.img} alt="" />
                    </div>
                    <h5>{brand.name}</h5>
                </div>
            </div>
            <div className={cx('box-control')}>
                <Button primary small onClick={() => setCurrentId(brand._id)}>
                    Update
                </Button>
                <Button primary small onClick={() => dispatch(deleteBrand(brand._id))}>
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default Brand;
