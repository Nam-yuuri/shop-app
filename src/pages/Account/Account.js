import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Account.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function Account({ children }) {
    return (
        <div className={cx('info')}>
            <div className={cx('container-info')}>
                <div className={cx('container-left')}>
                    <Sidebar />
                </div>
                <div className={cx('container-right')}>
                    <h5>Thông tin tài khoản</h5>
                    <div className={cx('box-right')}>
                        <div className={cx('box-content')}>
                            <form className={cx('box-form')}>
                                <div className={cx('name', 'box-form')}>
                                    <h6>Họ tên</h6>
                                    <input></input>
                                </div>
                                <div className={cx('mail', 'box-form')}>
                                    <h6>Email</h6>
                                    <input></input>
                                </div>
                                <div className={cx('phone', 'box-form')}>
                                    <h6>Số điện thoại</h6>
                                    <input></input>
                                </div>
                                <div className={cx('birthday', 'box-form')}>
                                    <h6>Ngày sinh</h6>
                                    <input type={'date'}></input>
                                </div>
                                <div className={cx('birthday', 'box-form')}>
                                    <h6>Giới tính</h6>
                                    <label>
                                        <input name="sex" type={'radio'} value={'M'}></input>
                                        <p>Nam</p>
                                    </label>
                                    <label>
                                        <input name="sex" type={'radio'} value={'F'}></input>
                                        <p>Nữ</p>
                                    </label>
                                    <label>
                                        <input name="sex" type={'radio'} value={'O'}></input>
                                        <p>Khác</p>
                                    </label>
                                </div>
                                <div className={cx('btn')}>
                                    <Button primary large>
                                        Cập nhật
                                    </Button>
                                    {/* <Button disabled large>Cập nhật</Button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
