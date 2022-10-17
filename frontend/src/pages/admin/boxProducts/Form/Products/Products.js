import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, getProducts, updateProduct } from '~/actions/products';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Prodcuts({ currentId, setCurrentId, handleAdd, handleClear, product, setProductData, productData }) {
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
    return (
        <form>
            <h2 className={cx('form-title')}>{currentId ? 'Editing' : 'Create'} Products</h2>
            <div className={cx('form-content')}>
                {/* <div className="input-group mb-3">
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
                </div> */}
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
                        placeholder="Image product"
                        value={productData.img}
                        onChange={(e) => setProductData({ ...productData, img: e.target.value })}
                    />
                </div>
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
                        placeholder="cost"
                        value={productData.cost}
                        onChange={(e) => setProductData({ ...productData, cost: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="date"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="HSD"
                        value={productData.HSD}
                        onChange={(e) => setProductData({ ...productData, HSD: e.target.value })}
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
                {/* <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupFile01" style={{ fontSize: '1.3rem' }}>
                        Image gift
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile01"
                        placeholder="gift img"
                        value={productData.gift_image}
                        onChange={(e) => setProductData({ ...productData, gift_image: e.target.value })}
                    />
                </div> */}
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Image gift"
                        value={productData.gift_image}
                        onChange={(e) => setProductData({ ...productData, gift_image: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="Number"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="gift image count"
                        value={productData.gift_image_count}
                        onChange={(e) => setProductData({ ...productData, gift_image_count: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="gift image name"
                        value={productData.gift_image_name}
                        onChange={(e) => setProductData({ ...productData, gift_image_name: e.target.value })}
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
                {/* <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01">
                            brand
                        </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                        let a =1;
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div> */}
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="SKU"
                        value={productData.SKU}
                        onChange={(e) => setProductData({ ...productData, SKU: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Product parameters"
                        value={productData.Product_parameters}
                        onChange={(e) => setProductData({ ...productData, Product_parameters: e.target.value })}
                    />
                </div>
            </div>

            {productData.img.length ||
            productData.promotion_money.length ||
            productData.info.length ||
            productData.cost.length ||
            productData.promotional_price.length ||
            productData.percent.length ||
            productData.gift_image.length ||
            productData.brand.length ? (
                <div>
                    <Button primary small type="submit" className="btn btn-primary" onClick={handleAdd}>
                        {currentId ? 'UPDATE' : 'ADD'}
                    </Button>
                    <Button primary small type="submit" className="btn btn-primary" onClick={handleClear}>
                        CLEAR
                    </Button>
                </div>
            ) : (
                <div>
                    <Button disabled small type="submit" className="btn btn-primary" onClick={handleAdd}>
                        {currentId ? 'UPDATE' : 'ADD'}
                    </Button>
                    <Button disabled small type="submit" className="btn btn-primary" onClick={handleClear}>
                CLEAR
            </Button>
                </div>
            )}
            {/* {currentId ? (
                <Fragment />
            ) : ( */}
            
            {/* )} */}
        </form>
    );
}

export default Prodcuts;
