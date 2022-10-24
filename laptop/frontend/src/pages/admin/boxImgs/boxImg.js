import classNames from 'classnames/bind';
import styles from './boxImg.module.scss';
// import Header from "../Header";
import Imgs from './imgs/imgs';
import Form from './Form/Form';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBoximgs } from '~/actions/boximgs';

const cx = classNames.bind(styles);

function BoxImg() {
    const boximgs = useSelector((state) => state.boximgs);
    // console.log(boximgs)
    // console.log(Imgs)
    const [currentId, setCurrentId] = useState(null);
    const [disOnclick, setDisOnclick] = useState(false);
    // console.log(disOnclick);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBoximgs());
    }, [dispatch]);
    return (
        <div className={cx('admin')}>
            <div className={cx('header')}>
                <div>
                    <Header />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('box-img')}>
                    {boximgs.length < 4 ? (
                        <Imgs setCurrentId={setCurrentId} />
                    ) : (
                        <div>
                            <h1>ĐÃ ĐẠT SỐ LƯỢNG ẢNH TỐI ĐA</h1>
                            <Imgs
                                setCurrentId={setCurrentId}
                                setDisOnclick={setDisOnclick}
                                disOnclick={disOnclick}
                                currentId={currentId}
                            />
                        </div>
                    )}
                </div>
                <div className={cx('form')}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} setDisOnclick={setDisOnclick} />
                    {disOnclick ? <h3>Không xóa ảnh khi đang chỉnh sửa</h3> : <Fragment />}
                </div>
            </div>
        </div>
    );
}

export default BoxImg;
