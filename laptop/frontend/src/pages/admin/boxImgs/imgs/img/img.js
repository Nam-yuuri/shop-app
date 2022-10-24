import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoximg } from '~/actions/boximgs';
import Button from '~/components/Button';
import styles from './img.module.scss';

const cx = classNames.bind(styles);

function Img({ boximg, setCurrentId, setDisOnclick, disOnclick, currentId }) {
    const dispatch = useDispatch();
    // const boximga = useSelector((state) => (currentId ? state.boximgs.find((p) => p._id === currentId) : null));

    // console.log(currentId);
    // console.log(disOnclick);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-img')}>
                <img src={boximg.img} alt="" />
            </div>
            {/* <h6>{boximg._id}</h6> */}

            <div className={cx('box-control')}>
                <Button
                    primary
                    small
                    onClick={() => {
                        setCurrentId(boximg._id);
                        setDisOnclick(true);
                    }}
                >
                    Update
                </Button>
                {disOnclick /*&& currentId === boximg._id*/ ? (
                    <Button disabled small onClick={() => dispatch(deleteBoximg(boximg._id))}>
                        Delete
                    </Button>
                ) : (
                    <Button
                        primary
                        small
                        onClick={() => {
                            dispatch(deleteBoximg(boximg._id));
                            setDisOnclick(true);
                
                        }}
                    >
                        Delete
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Img;
