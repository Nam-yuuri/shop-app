import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBoximg, getBoximgs, updateBoximg } from '~/actions/boximgs';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Form({ currentId, setCurrentId, setDisOnclick }) {
    const boximgss = useSelector((state) => state.boximgs);
    // console.log(boximgs)
    

    const [boximgData, setBoximgData] = useState({
        img: '',
    });

    const dispatch = useDispatch();

    const boximg = useSelector((state) => (currentId ? state.boximgs.find((p) => p._id === currentId) : null));

    useEffect(() => {
        if (boximg) {
            setBoximgData(boximg);
        }
    }, [boximg]);

    useEffect(() => {
        dispatch(getBoximgs(boximg));
    }, [dispatch]);

    const handleAdd = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateBoximg(currentId, boximgData));
        } else {
            dispatch(createBoximg(boximgData));
        }

        setBoximgData({
            img: '',
        });

        setCurrentId(0);

        setDisOnclick(false)
    };

    const handleClear = () => {
        setCurrentId(0);
        setBoximgData({});
    };

    return (
        <form>
            <h2 className={cx('form-title')}>{currentId ? 'Editing' : 'Create'} Box Image</h2>
            {/* <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupFile01" style={{ fontSize: '1.3rem' }}>
                    Image product
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    value={boximgData.img}
                    onChange={(e) => setBoximgData({ ...boximgData, img: e.target.value })}
                />
            </div> */}
            <div className="mb-3">
                {boximgss.length < 4 || currentId ? (
                    <textarea
                        style={{ minHeight: '80px', maxHeight: '135px' }}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="image link"
                        value={boximgData.img}
                        onChange={(e) => setBoximgData({ ...boximgData, img: e.target.value })}
                    />
                ) : (
                    <textarea
                        disabled
                        style={{ minHeight: '80px', maxHeight: '135px' }}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="image link"
                        value={boximgData.img}
                        onChange={(e) => setBoximgData({ ...boximgData, img: e.target.value })}
                    />
                )}
            </div>

            {boximgData.img.length && boximgss.length < 4 || currentId ? (
                <Button primary small type="submit" className="btn btn-primary" onClick={handleAdd}>
                    {currentId ? 'UPDATE' : 'ADD'}
                </Button>
            ) : (
                <Button disabled small type="submit" className="btn btn-primary" onClick={handleAdd}>
                    {currentId ? 'UPDATE' : 'ADD'}
                </Button>
            )}
            {/* {currentId ? (
                <Fragment />
            ) : ( */}
            {/* <Button primary small type="submit" className="btn btn-primary" onClick={handleClear}>
                CLEAR
            </Button> */}
            {/* )} */}
        </form>
    );
}

export default Form;
