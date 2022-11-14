import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Promotion.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

function Promotion() {
    return (
        <div className={cx('promotion')}>
            <div className={cx('box-promotion')}>
                <div className={cx('img')}>
                    <img
                        src="https://lh3.googleusercontent.com/pZlBhjrmvNDVhVM2XKJOpkfVi_fpCqF-eoUFR9278TAGmZV2Jw0OKTEAHYXH10w-ttEOZDngDnLWNfccVYxA4FDPCrKkdmz2=rw-w523"
                        alt=""
                    />
                </div>
                <h2>Mùa Rực Lửa - Sale Một Nửa</h2>
                <p>01/11 - 18/12/2022</p>
                <div className={cx('btn')}><Button primary to={config.routes.brand}>Xem chi tiết</Button></div>
            </div>
            <div className={cx('box-promotion')}>
                <div className={cx('img')}>
                    <img
                        src="https://lh3.googleusercontent.com/pZlBhjrmvNDVhVM2XKJOpkfVi_fpCqF-eoUFR9278TAGmZV2Jw0OKTEAHYXH10w-ttEOZDngDnLWNfccVYxA4FDPCrKkdmz2=rw-w523"
                        alt=""
                    />
                </div>
                <h2>Mùa Rực Lửa - Sale Một Nửa</h2>
                <p>01/11 - 18/12/2022</p>
                <div className={cx('btn')}><Button primary to={config.routes.brand}>Xem chi tiết</Button></div>
            </div>
            <div className={cx('box-promotion')}>
                <div className={cx('img')}>
                    <img
                        src="https://lh3.googleusercontent.com/pZlBhjrmvNDVhVM2XKJOpkfVi_fpCqF-eoUFR9278TAGmZV2Jw0OKTEAHYXH10w-ttEOZDngDnLWNfccVYxA4FDPCrKkdmz2=rw-w523"
                        alt=""
                    />
                </div>
                <h2>Mùa Rực Lửa - Sale Một Nửa</h2>
                <p>01/11 - 18/12/2022</p>
                <div className={cx('btn')}><Button primary to={config.routes.brand}>Xem chi tiết</Button></div>
            </div>
            <div className={cx('box-promotion')}>
                <div className={cx('img')}>
                    <img
                        src="https://lh3.googleusercontent.com/pZlBhjrmvNDVhVM2XKJOpkfVi_fpCqF-eoUFR9278TAGmZV2Jw0OKTEAHYXH10w-ttEOZDngDnLWNfccVYxA4FDPCrKkdmz2=rw-w523"
                        alt=""
                    />
                </div>
                <h2>Mùa Rực Lửa - Sale Một Nửa</h2>
                <p>01/11 - 18/12/2022</p>
                <div className={cx('btn')}><Button primary to={config.routes.brand}>Xem chi tiết</Button></div>
            </div>
            <div className={cx('box-promotion')}>
                <div className={cx('img')}>
                    <img
                        src="https://lh3.googleusercontent.com/pZlBhjrmvNDVhVM2XKJOpkfVi_fpCqF-eoUFR9278TAGmZV2Jw0OKTEAHYXH10w-ttEOZDngDnLWNfccVYxA4FDPCrKkdmz2=rw-w523"
                        alt=""
                    />
                </div>
                <h2>Mùa Rực Lửa - Sale Một Nửa</h2>
                <p>01/11 - 18/12/2022</p>
                <div className={cx('btn')}><Button primary to={config.routes.brand}>Xem chi tiết</Button></div>
            </div>
        </div>
    );
}

export default Promotion;
