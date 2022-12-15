import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShowroom, getShowroomCity } from '~/actions/showroomAction';
import Button from '~/components/Button';
import Loading from '~/components/Loading/Loading';
import Earth from '~/components/Loading/Loading';
import styles from './Showroom.module.scss';

const cx = classNames.bind(styles);

function Showroom() {
    const dispatch = useDispatch();

    const { showrooms, loading } = useSelector((state) => state.showroomCity);
    const { showrooms: allShowroom } = useSelector((state) => state.showrooms);

    useEffect(() => {
        dispatch(getShowroomCity());
        dispatch(getAllShowroom());
    }, [dispatch]);

    const store = [];

    allShowroom &&
        allShowroom.length &&
        allShowroom.forEach((item) => {
            if (store.indexOf(item.city) === -1) {
                store.push(item.city);
            }
        });

    function handleSearch() {
        var selectValue = document.getElementById('select').value;
        dispatch(getShowroomCity(selectValue));
    }

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className={cx('Showroom')}>
                    <div className={cx('left')}>
                        <h5>Chọn showroom theo tỉnh/thành phố</h5>
                        <select
                            id="select"
                            onChange={() => {
                                handleSearch();
                            }}
                        >
                            <option value={''}>Chọn tỉnh/ thành phố</option>
                            {store.map((item) => (
                                <option value={item} key={item}>
                                    {item}
                                </option>
                            ))}
                            {/* <option value={'Hà Nội'} onChange>
                                Hà Nội
                            </option>
                            <option value={'Thanh Hóa'} onChange>
                                Thanh Hóa
                            </option>
                            <option value={'Hồ Chí Minh'} onChange>
                                Thành phố Hồ Chí Minh
                            </option> */}
                        </select>
                    </div>
                    <div className={cx('right')}>
                        {showrooms &&
                            showrooms.length > 0 &&
                            showrooms.map((showroom) => (
                                <div className={cx('box-content')} key={showroom._id}>
                                    <div className={cx('title')}>
                                        <b>{showroom.name}</b>
                                    </div>
                                    <div className={cx('content')}>
                                        <div className={cx('address')}>
                                            <b>Địa chỉ: </b>
                                            {showroom.address}
                                        </div>
                                        <div className={cx('contact')}>
                                            <div className={cx('store-contact')}>
                                                <div className={cx('store-phone')}>
                                                    <b>Điện thoại: </b>
                                                    {showroom.phone}
                                                </div>
                                                <div className={cx('store-working-hours')}>
                                                    <b>Giờ mở cửa: </b>
                                                    {showroom.open_door}
                                                </div>
                                            </div>
                                            <label htmlFor={showroom._id}>Tìm đường</label>
                                            <input type={'checkbox'} id={showroom._id} />
                                            <div className={cx('box-store')}>
                                                <figure className="add-store mb-2 mt-4 mb-lg-0">
                                                    <iframe
                                                        src={showroom.iframe}
                                                        width="100%"
                                                        height="300"
                                                        style={{
                                                            border: '0',
                                                            borderRadius: '8px',
                                                            overflow: 'hidden',
                                                        }}
                                                        allowFullScreen=""
                                                        loading="lazy"
                                                        referrerPolicy="no-referrer-when-downgrade"
                                                    ></iframe>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Showroom;
