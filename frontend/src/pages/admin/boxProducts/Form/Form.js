import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, getProducts, updateProduct } from '~/actions/products';
import Button from '~/components/Button';
import Prodcuts from '../Form/Products/Products'

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
        gift_image_name: '',
        gift_image_count: '',
        brand: '',
        SKU: '',
        HSD: '',
        Insurance: '',
        Size: '',
        Resolution: '',
        Background_panels: '',
        Scan_frequency: '',
        Response_time: '',
        Screen_Type: '',
        Brightness: '',
        View: '',
        Color_visibility: '',
        Static_Contrast: '',
        Surface: '',
        Mass: '',
        Accessories_included: '',
        Loudspeaker: '',
        Output_port: '',
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
            Insurance: '',
            Size: '',
            Resolution: '',
            Background_panels: '',
            Scan_frequency: '',
            Response_time: '',
            Screen_Type: '',
            Brightness: '',
            View: '',
            Color_visibility: '',
            Static_Contrast: '',
            Surface: '',
            Mass: '',
            Accessories_included: '',
            Loudspeaker: '',
            Output_port: '',
        });

        setCurrentId(0);
    };
    const handleClear = () => {
        setCurrentId(0);
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
            Insurance: '',
            Size: '',
            Resolution: '',
            Background_panels: '',
            Scan_frequency: '',
            Response_time: '',
            Screen_Type: '',
            Brightness: '',
            View: '',
            Color_visibility: '',
            Static_Contrast: '',
            Surface: '',
            Mass: '',
            Accessories_included: '',
            Loudspeaker: '',
            Output_port: '',
        });
    };
    return (
        <Prodcuts currentId={currentId} setCurrentId={setCurrentId} handleAdd={handleAdd} product={product} setProductData={setProductData} productData={productData}/>
    );
}

export default Form;
