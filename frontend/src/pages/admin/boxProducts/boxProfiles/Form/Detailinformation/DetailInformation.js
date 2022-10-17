import classNames from 'classnames/bind';
import styles from './DetailInformation.module.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, getProducts, updateProduct } from '~/actions/products';
import Button from '~/components/Button';
import './style.css';

const cx = classNames.bind(styles);

function DetailInformation({ currentId, setCurrentId }) {
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
                    <input
                        type="Number"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Bảo hành"
                        value={productData.Insurance}
                        onChange={(e) => setProductData({ ...productData, Insurance: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Bảo hành
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        // style={{ minHeight: '85px', maxHeight: '230px' }}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Series laptop"
                        value={productData.Series_laptop}
                        onChange={(e) => setProductData({ ...productData, Series_laptop: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Series laptop
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Part-number"
                        value={productData.Part_number}
                        onChange={(e) => setProductData({ ...productData, Part_number: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Part-number
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Màu sắc"
                        value={productData.Color}
                        onChange={(e) => setProductData({ ...productData, Color: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Màu sắc
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Thế hệ CPU"
                        value={productData.CPU_The_system}
                        onChange={(e) => setProductData({ ...productData, CPU_The_system: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Thế hệ CPU
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="CPU"
                        value={productData.CPU}
                        onChange={(e) => setProductData({ ...productData, CPU: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            CPU
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Chip đồ họa"
                        value={productData.Graphics}
                        onChange={(e) => setProductData({ ...productData, Graphics: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Chip đồ họa
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="RAM"
                        value={productData.RAM}
                        onChange={(e) => setProductData({ ...productData, RAM: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            RAM
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Màn hình"
                        value={productData.Monitor}
                        onChange={(e) => setProductData({ ...productData, Monitor: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Màn hình
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Lưu trữ"
                        value={productData.Storage}
                        onChange={(e) => setProductData({ ...productData, Storage: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Lưu trữ
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Số cổng lưu trữ tối đa"
                        value={productData.Port_number}
                        onChange={(e) => setProductData({ ...productData, Port_number: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Số cổng lưu trữ tối đa
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Support slot type"
                        value={productData.Support_slot_type}
                        onChange={(e) => setProductData({ ...productData, Support_slot_type: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Support slot type
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Cổng xuất hình"
                        value={productData.Output_port}
                        onChange={(e) => setProductData({ ...productData, Output_port: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Cổng xuất hình
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Cổng kết nối"
                        value={productData.Connector}
                        onChange={(e) => setProductData({ ...productData, Connector: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Cổng kết nối
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Kết nối không dây"
                        value={productData.Wireless_Connectivity}
                        onChange={(e) => setProductData({ ...productData, Wireless_Connectivity: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Kết nối không dây
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Bàn phím"
                        value={productData.Keyboard}
                        onChange={(e) => setProductData({ ...productData, Keyboard: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Bàn phím
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Hệ điều hành"
                        value={productData.Operating_system}
                        onChange={(e) => setProductData({ ...productData, Operating_system: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Hệ điều hành
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Kích thước"
                        value={productData.Size}
                        onChange={(e) => setProductData({ ...productData, Size: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Kích thước
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Pin"
                        value={productData.battery}
                        onChange={(e) => setProductData({ ...productData, battery: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Pin
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="Number"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Khối lượng"
                        value={productData.Mass}
                        onChange={(e) => setProductData({ ...productData, Mass: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Khối lượng
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Đèn LED trên máy"
                        value={productData.LED}
                        onChange={(e) => setProductData({ ...productData, LED: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Đèn LED trên máy
                        </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Phụ kiện đi kèm"
                        value={productData.Accessories_included}
                        onChange={(e) => setProductData({ ...productData, Accessories_included: e.target.value })}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-default">
                            Phụ kiện đi kèm
                        </span>
                    </div>
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

export default DetailInformation;
