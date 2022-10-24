import classNames from 'classnames/bind';
import styles from './ProductDescription.module.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, getProducts, updateProduct } from '~/actions/products';
import Button from '~/components/Button';
import './style.css';

const cx = classNames.bind(styles);

function ProductDescription({ currentId, setCurrentId }) {
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
        gift_image_name: '',
        gift_image_count: '',
        brand: '',
        SKU: '',
        HSD: '',
        brand: '',
        Insurance: '',
        Series_laptop: '',
        Part_number: '',
        Color: '',
        CPU_The_system: '',
        CPU: '',
        Graphics: '',
        RAM: '',
        Monitor: '',
        Storage: '',
        Port_number: '',
        Support_slot_type: '',
        Output_port: '',
        Connector: '',
        Wireless_Connectivity: '',
        Keyboard: '',
        Operating_system: '',
        Size: '',
        battery: '',
        Mass: '',
        LED: '',
        Accessories_included: '',
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
            name: '',
            to: '',
            img: '',
            promotion_money: '',
            info: '',
            cost: '',
            promotional_price: '',
            percent: '',
            gift_image: '',
            gift_image_name: '',
            gift_image_count: '',
            brand: '',
            SKU: '',
            HSD: '',
            brand: '',
            Insurance: '',
            Series_laptop: '',
            Part_number: '',
            Color: '',
            CPU_The_system: '',
            CPU: '',
            Graphics: '',
            RAM: '',
            Monitor: '',
            Storage: '',
            Port_number: '',
            Support_slot_type: '',
            Output_port: '',
            Connector: '',
            Wireless_Connectivity: '',
            Keyboard: '',
            Operating_system: '',
            Size: '',
            battery: '',
            Mass: '',
            LED: '',
            Accessories_included: '',
        });

        setCurrentId(0);
    };
    const handleClear = () => {
        setCurrentId(0);
        setProductData({});
    };

    return (
        <form>
            <h2 className={cx('form-title')}>Editing Products</h2>
            <div className={cx('form-content')}>
                <div className="input-group mb-3">
                    <textarea
                        type="Number"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Bảo hành"
                        value={productData.Product_Description[0]}
                        onChange={(e) => setProductData({ ...productData, Product_Description: e.target.value })}
                    />
                    
                </div>
                <div className="input-group mb-3">
                    <textarea
                        // style={{ minHeight: '85px', maxHeight: '230px' }}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Series laptop"
                        value={productData.Product_Description[1]}
                        onChange={(e) => setProductData({ ...productData, Product_Description: e.target.value })}
                    />
                </div>
                <div className="input-group mb-3">
                    <textarea
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Part-number"
                        value={productData.Product_Description[2]}
                        onChange={(e) => setProductData({ ...productData, Product_Description: e.target.value })}
                    />
                    
                </div>
                <div className="input-group mb-3">
                    <textarea
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Màu sắc"
                        value={productData.Product_Description[3]}
                        onChange={(e) => setProductData({ ...productData, Product_Description: e.target.value })}
                    />
                    
                </div>
                <div className="input-group mb-3">
                    <textarea
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Thế hệ CPU"
                        value={productData.Product_Description[4]}
                        onChange={(e) => setProductData({ ...productData, Product_Description: e.target.value })}
                    />
                </div>
                <div className="input-group mb-3">
                    <textarea
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="CPU"
                        value={productData.Product_Description[5]}
                        onChange={(e) => setProductData({ ...productData, Product_Description: e.target.value })}
                    />
                </div>
            </div>

            {currentId ? (
                <Button primary small type="submit" className="btn btn-primary" onClick={handleAdd}>
                    UPDATE
                </Button>
            ) : (
                <Button disabled small type="submit" className="btn btn-primary" onClick={handleAdd}>
                    UPDATE
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

export default ProductDescription;
