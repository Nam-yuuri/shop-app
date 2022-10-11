import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import { createBrand, getBrands, updateBrand } from '~/actions/brands';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Form({ currentId, setCurrentId }) {
    const [brandData, setBrandData] = useState({
        name: '',
        img: '',
    });

    const brand = useSelector((state) => (currentId ? state.brands.find((p) => p._id === currentId) : null));

    const dispatch = useDispatch();

    useEffect(() => {
        if (brand) {
            setBrandData(brand);
        }
        // console.log(brand);
    }, [brand]);

    useEffect(() => {
        dispatch(getBrands());
    }, [dispatch]);

    const handleAdd = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateBrand(currentId, brandData));
        } else {
            dispatch(createBrand(brandData));
        }

        setBrandData({
            name: '',
            img: '',
        });
        setCurrentId(0);
    };
    const handleClear = () => {
        setCurrentId(0);
        setBrandData({});
    };
    return (
        <form>
            <h2 className={cx('form-title')}>{currentId ? 'Editing' : 'Create'} Brands</h2>
            {/* <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupFile01" style={{ fontSize: '1.3rem' }}>
                    Image product
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    value={brandData.img}
                    onChange={(e) => setBrandData({ ...brandData, img: e.target.value })}
                />
            </div> */}

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="image"
                    value={brandData.img}
                    onChange={(e) => setBrandData({ ...brandData, img: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="name"
                    value={brandData.name}
                    onChange={(e) => setBrandData({ ...brandData, name: e.target.value })}
                />
            </div>

            {brandData.img.length || brandData.name.length ? (
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
