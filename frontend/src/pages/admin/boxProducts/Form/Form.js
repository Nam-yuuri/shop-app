import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, getProducts, updateProduct } from '~/actions/products';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Form({ currentId, setCurrentId }) {
    const [productData, setProductData] = useState({
        name: '',
        to: '',
        img: '',
        promotion_money: '',
        info: '',
        cost: '',
        promotional_price: '',
        percent: '',
        gift_image: '',
        brand: '',
    });

    const product = useSelector((state) => (currentId ? state.products.find((p) => p._id === currentId) : null));

    const dispatch = useDispatch();

    useEffect(() => {
        if (product) {
            setProductData(product);
        }
        // console.log(product);
    }, [product]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleAdd = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateProduct(currentId, productData));
        } else {
            dispatch(createProduct(productData));
        }

        setProductData({
            // name: '',
            to: '',
            img: '',
            promotion_money: '',
            info: '',
            cost: '',
            promotional_price: '',
            percent: '',
            gift_image: '',
            brand: '',
        });

        setCurrentId(0);
    };
    const handleClear = () => {
        setCurrentId(0);
        setProductData({});
    };
    return (
        <form>
            <h2 className={cx('form-title')}>{currentId ? 'Editing' : 'Create'} Products</h2>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupFile01" style={{ fontSize: '1.3rem' }}>
                    Image product
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    value={productData.img}
                    onChange={(e) => setProductData({ ...productData, img: e.target.value })}
                />
            </div>
            {/* <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1 inputGroup-sizing-lg"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                    value={productData.name}
                    onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                />
            </div> */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="promotion money"
                    value={productData.promotion_money}
                    onChange={(e) => setProductData({ ...productData, promotion_money: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <textarea
                    style={{ minHeight: '85px', maxHeight: '230px' }}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="info"
                    value={productData.info}
                    onChange={(e) => setProductData({ ...productData, info: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="cost"
                    value={productData.cost}
                    onChange={(e) => setProductData({ ...productData, cost: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="promotional price"
                    value={productData.promotional_price}
                    onChange={(e) => setProductData({ ...productData, promotional_price: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="percent"
                    value={productData.percent}
                    onChange={(e) => setProductData({ ...productData, percent: e.target.value })}
                />
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupFile01" style={{ fontSize: '1.3rem' }}>
                    Image gift
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    placeholder="gift img"
                    value={productData.gift_image}
                    onChange={(e) => setProductData({ ...productData, gift_img: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="brand"
                    value={productData.brand}
                    onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
                />
            </div>

            {productData.img.length ||
            productData.promotion_money.length ||
            productData.info.length ||
            productData.cost.length ||
            productData.promotional_price.length ||
            productData.percent.length ||
            productData.gift_image.length ||
            productData.brand.length ? (
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
