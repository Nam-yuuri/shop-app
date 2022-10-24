import classNames from 'classnames/bind';
import styles from './boxProfiles.module.scss';
import Header from '../../Header';

import { faAngleRight, faClose, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { ComputerSaleIcon, GiftIcon, InsuranceIcon, SettingIcon, ShipIcon } from '~/components/Icons';
import Button from '~/components/Button';
import { img } from '~/Data/Product/Product';
import { useSelector } from 'react-redux';
import Form from './Form/Detailinformation/DetailInformation';
import ProductDescription from './Form/ProductDescription/ProductDescription';

const cx = classNames.bind(styles);

function BoxProfile({ profileCurrentId, setProfileCurrentId, setProfile, currentId, setCurrentId }) {
    const product = useSelector((state) =>
        profileCurrentId ? state.products.find((p) => p._id === profileCurrentId) : null,
    );

    const [form, setForm] = useState(true);
    const [image, setImage] = useState([]);
    const [discount, setDiscount] = useState(false);
    const [description, setDescription] = useState(false);
    const [productParametersData, setProductParametersData] = useState({});

    const handleDiscount = () => {
        discount ? setDiscount(false) : setDiscount(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setImage(img);
        }, 0);
    });

    useEffect(() => {
        setTimeout(() => {
            setDescription(true);
        }, 3000);
    });

    const settings = {
        customPaging: function (i) {
            return (
                <a href={' '}>
                    <img src={`${image[0]}`} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                </a>
            );
        },
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return (
        <div className={cx('admin')}>
            <div className={cx('content')}>
                <div className={cx('profile')}>
                    <div className={cx('info')}>
                        <div className={cx('box-title-bottom')}>
                            <div className={cx('box-title')}>
                                <h1>Thông tin chi tiết</h1>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <th scope="row">Thương hiệu</th>
                                    <td>{product.brand}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bảo hành</th>
                                    <td>{product.Insurance}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Series laptop</th>
                                    <td>{product.Series_laptop}"</td>
                                </tr>
                                <tr>
                                    <th scope="row">Part-number</th>
                                    <td>{product.Part_number}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Màu sắc</th>
                                    <td>{product.Color}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Thế hệ CPU</th>
                                    <td>{product.CPU_The_system}</td>
                                </tr>
                                <tr>
                                    <th scope="row">CPU</th>
                                    <td>{product.CPU}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Chip đồ họa</th>
                                    <td>{product.Graphics}</td>
                                </tr>
                                <tr>
                                    <th scope="row">RAM</th>
                                    <td>{product.RAM}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Màn hình</th>
                                    <td>{product.Monitor}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Lưu trữ</th>
                                    <td>{product.Storage}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Số cổng lưu trữ tối đa</th>
                                    <td>{product.Port_number}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Support slot type</th>
                                    <td>{product.Support_slot_type}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cổng xuất hình</th>
                                    <td>{product.Output_port}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Cổng kết nối</th>
                                    <td>{product.Connector}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Kết nối không dây</th>
                                    <td>{product.Wireless_Connectivity}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Bàn phím</th>
                                    <td>{product.Keyboard}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hệ điều hành</th>
                                    <td>{product.Operating_system}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Kích thước</th>
                                    <td>{product.Size}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Pin</th>
                                    <td>{product.battery}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Khối lượng</th>
                                    <td>{product.Mass} kg</td>
                                </tr>
                                <tr>
                                    <th scope="row">Đèn LED trên máy</th>
                                    <td>{product.LED}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phụ kiện đi kèm</th>
                                    <td>{product.Accessories_included}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className={cx('box-control')}>
                            <Button
                                primary
                                small
                                onClick={() => {
                                    setCurrentId(product._id);
                                    setForm(true)
                                }}
                            >
                                Update
                            </Button>
                        </div>
                    </div>
                    <div className={cx('box-title-bottom')}>
                        <div className={cx('box-title')}>
                            <h1>Mô tả sản phẩm</h1>
                        </div>
                    </div>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row">Mô tả</th>
                                <th>Ảnh</th>
                            </tr>
                            <tr>
                                <td scope="row">Thương hiệu</td>
                                <td>{product.Product_Description[0]}</td>
                            </tr>
                            <tr>
                                <td scope="row">Bảo hành</td>
                                <td>{product.Product_Description[1]}</td>
                            </tr>
                            <tr>
                                <td scope="row">Series laptop</td>
                                <td>{product.Product_Description[2]}</td>
                            </tr>
                            <tr>
                                <td scope="row">Part-number</td>
                                <td>{product.Product_Description[3]}</td>
                            </tr>
                            <tr>
                                <td scope="row">Màu sắc</td>
                                <td>{product.Product_Description[4]}</td>
                            </tr>
                            <tr>
                                <td scope="row">Thế hệ CPU</td>
                                <td>{product.Product_Description[5]}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={cx('box-control')}>
                        <Button
                            primary
                            small
                            onClick={() => {
                                setCurrentId(product._id);
                                setForm(false)
                            }}
                        >
                            Update
                        </Button>
                    </div>
                </div>
                <div className={cx('form')}>
                    {/* <h1>Chọn mục cần làm việc </h1> */}
                    <div className={cx('form-content')}>
                        {form ? (
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        ) : (
                            <ProductDescription currentId={currentId} setCurrentId={setCurrentId} />
                        )}
                    </div>
                </div>
                <div className={cx('btn-close')} onClick={() => setProfile(false)}>
                    <FontAwesomeIcon icon={faClose} />
                </div>
            </div>
        </div>
    );
}

export default BoxProfile;
