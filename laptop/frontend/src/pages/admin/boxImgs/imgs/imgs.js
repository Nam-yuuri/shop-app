import classNames from 'classnames/bind';
import styles from './imgs.module.scss';
import { useSelector } from 'react-redux';

import Img from './img/img';

const cx = classNames.bind(styles);

function Imgs({ setCurrentId, setDisOnclick , disOnclick, currentId}) {
    const boximgs = useSelector((state) => state.boximgs);
    // console.log(boximgs)
    // console.log(disOnclick);
    
    return (
        <div>
            {!boximgs.length ? (
                <h1>Chưa có sản phẩm nào trong database</h1>
            ) : (
                <div className={cx('container-boximgs')}>
                    {boximgs.map((boximg) => (
                        <div className={cx('box-boximgs')} key={boximg._id}>
                            <Img boximg={boximg} setCurrentId={setCurrentId} setDisOnclick={setDisOnclick} disOnclick={disOnclick} currentId={currentId}/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Imgs;
