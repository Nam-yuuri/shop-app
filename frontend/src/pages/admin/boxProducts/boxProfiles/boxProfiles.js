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

const cx = classNames.bind(styles);

function BoxProfile({ profileCurrentId, setProfileCurrentId, setProfile, currentId, setCurrentId}) {
    const product = useSelector((state) =>
        profileCurrentId ? state.products.find((p) => p._id === profileCurrentId) : null,
    );

    // console.log(product.Insurance);

    // product.Product_parameters.map((parameter) => {
    //     console.log({parameter})
    // })
    // const profiles = useSelector((state) => state.profiles);
    // console.log(profiles);

    // const profile = useSelector((state) => (currentId ? state.profiles.find((p) => p._id === currentId) : null));
    // console.log(profile);

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
        // cssEase: 'linear',
    };
    return (
        <div className={cx('admin')}>
            {/* <div className={cx('header')}>
                <div>
                    <Header />
                </div>
            </div> */}
            <div className={cx('content')}>
                <div className={cx('profile')}>
                    <div>
                        <div className={cx('Left')}>
                            <div className={cx('container-left')}>
                                <div className={cx('box-left')}>
                                    <div className={cx('box-img')}>
                                        <div className={cx('box-img-header')}>
                                            <Slider {...settings}>
                                                {image.map((img) => (
                                                    <div key={img.id} style={{ width: '100%' }}>
                                                        <img src={img.img} alt="" style={{ width: '100%' }} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                        <div className={cx('box-border')}>
                                            <div className={cx('border')}></div>
                                        </div>
                                        <div className={cx('box-info', 'box-hover')}>
                                            <h2>Thông số sản phẩm</h2>
                                        

                                            <div className={cx('info-text')}>
                                                <span>&#45; CPU: {product.CPU}</span>
                                            </div>
                                            <div className={cx('info-text')}>
                                                <span>&#45; Màn hình: {product.Monitor}</span>
                                            </div>
                                            <div className={cx('info-text')}>
                                                <span>&#45; RAM: {product.RAM}</span>
                                            </div>
                                            <div className={cx('info-text')}>
                                                <span>&#45; Đồ họa: {product.Graphics}</span>
                                            </div>
                                            <div className={cx('info-text')}>
                                                <span>&#45; Lưu trữ: {product.Storage}</span>
                                            </div>
                                            <div className={cx('info-text')}>
                                                <span>&#45; Hệ điều hành: {product.Operating_system}</span>
                                            </div>
                                            <div className={cx('info-text')}>
                                                <span>&#45; Pin: {product.battery}</span>
                                            </div>
                                            <div className={cx('info-text')}>
                                                <span>&#45; Khối lượng: {product.Mass}kg</span>
                                            </div>

                                            {/* <div className={cx('box-control')}>
                                                <Button
                                                    primary
                                                    small
                                                    onClick={() => {
                                                        // setCurrentId(product._id);
                                                    }}
                                                >
                                                    Update
                                                </Button>
                                                <Button
                                                    primary
                                                    small
                                                    // onClick={() => dispatch(deleteProduct(product._id))}
                                                >
                                                    Delete
                                                </Button>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className={cx('box-content')}>
                                        <div className={cx('content-info')}>
                                            <h1>{product.info}</h1>
                                            <div className={cx('content-title')}>
                                                <div className={cx('content-Trademark')}>
                                                    Thương hiệu
                                                    <a href={'/profile'} className={cx('Trademark-href')}>
                                                        <span>{product.brand}</span>
                                                    </a>
                                                    <span className={cx('before')}></span>
                                                    SKU: {product.SKU}
                                                </div>
                                            </div>
                                        </div>
                                        {discount ? (
                                            <div className={cx('content-price')}>
                                                <div className={cx('discount-price')}>
                                                    {product.promotional_price}&nbsp;₫
                                                </div>
                                                <div className={cx('real-price')}>
                                                    <div className={cx('box-real-price')}>{product.cost}&nbsp;₫</div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={cx('content-price')}>
                                                <div className={cx('discount-price')}>{product.cost}&nbsp;₫</div>
                                            </div>
                                        )}
                                        <div className={cx('content-gift')}>
                                            <div className={cx('gift-title')}>Bạn sẽ nhận được</div>
                                            <div className={cx('box-gift')}>
                                                <div>
                                                    <div className={cx('box-gift-content')}>
                                                        <div className={cx('gift-img')}>
                                                            <img
                                                                src="https://lh3.googleusercontent.com/8ID_TJiaE6lxjCUClu05nNjr-KBN0kjf2rs2sAkDuXn8WQofoEl2M8R6VjdGQ1YIW2qf_1sZwrCjQ-6hsA=rw"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <span className={cx('gift-num')}>
                                                            x{product.gift_image_count}
                                                        </span>
                                                        <span className={cx('gift-text')}>
                                                            {product.gift_image_name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('box-border')}>
                                            <div className={cx('border')}></div>
                                        </div>
                                        <div className={cx('content-promotion')}>
                                            Chọn một trong những khuyến mãi sau
                                        </div>
                                        {discount ? (
                                            <div
                                                className={cx('content-box-promotion', 'content-promotion-true')}
                                                onClick={handleDiscount}
                                            >
                                                <div className={cx('promotion-img')}>
                                                    <GiftIcon />
                                                </div>
                                                <div className={cx('promotion-content')}>
                                                    <div className={cx('promotion-price')}>
                                                        Giảm&nbsp;
                                                        <span>{product.promotion_money}</span>
                                                        &nbsp;/&nbsp;Chiếc
                                                    </div>
                                                    <div className={cx('promotion-text')}>
                                                        Khi mua từ 1 Chiếc trở lên
                                                    </div>
                                                    <div className={cx('promotion-HSD')}>
                                                        <div className={cx('promotion-date')}>
                                                            HSD:&nbsp;{product.HSD}
                                                        </div>
                                                        <div className={cx('promotion-btn')}>Bỏ chọn</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={cx('content-box-promotion')} onClick={handleDiscount}>
                                                <div className={cx('promotion-img')}>
                                                    <GiftIcon />
                                                </div>
                                                <div className={cx('promotion-content')}>
                                                    <div className={cx('promotion-price')}>
                                                        Giảm&nbsp;
                                                        <span>{product.promotion_money}</span>
                                                        &nbsp;/&nbsp;Chiếc
                                                    </div>
                                                    <div className={cx('promotion-text')}>
                                                        Khi mua từ 1 Chiếc trở lên
                                                    </div>
                                                    <div className={cx('promotion-HSD')}>
                                                        <div className={cx('promotion-date')}>
                                                            HSD:&nbsp;{product.HSD}
                                                        </div>
                                                        <div className={cx('promotion-btn')}>Áp dụng</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className={cx('box-border')}>
                                            <div className={cx('border')}></div>
                                        </div>
                                        <div className={cx('content-related-promotion', 'box-hover')}>
                                            <div className={cx('related-promotion-title')}>Khuyến mãi liên quan</div>
                                            <ul className={cx('promotion-list')}>
                                                <li>
                                                    <span>
                                                        Nhập mã&nbsp;
                                                        <strong>PM240901</strong>
                                                        &nbsp;giảm&nbsp;
                                                        <span className={cx('list-price')}>200.000đ</span>
                                                        &nbsp;cho đơn hàng có sản phẩm này
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        Trả góp 6 tháng lãi suất 0% với đơn hàng
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                        3tr
                                                    </span>
                                                    <a href=" " className={cx('list-href')}>
                                                        Xem chi tiết
                                                    </a>
                                                </li>
                                                <li>
                                                    <span>
                                                        Nhập mã PV100 giảm thêm 5% tối đa 100.000đ khi thanh toán qua
                                                        VNPAY-QR.
                                                    </span>
                                                    <a href=" " className={cx('list-href')}>
                                                        Xem chi tiết
                                                    </a>
                                                </li>
                                                <li>
                                                    <span>
                                                        Nhập mã PVAPPLE giảm thêm 4% tối đa 800.000đ cho đơn hàng Apple
                                                        từ 20 triệu khi thanh toán qua VNPAY-QR.
                                                    </span>
                                                    <a href=" " className={cx('list-href')}>
                                                        Xem chi tiết
                                                    </a>
                                                </li>
                                            </ul>
                                            {/* <div className={cx('box-control')}>
                                                <Button
                                                    primary
                                                    small
                                                    onClick={() => {
                                                        // setCurrentId(product._id);
                                                    }}
                                                >
                                                    Update
                                                </Button>
                                                <Button
                                                    primary
                                                    small
                                                    // onClick={() => dispatch(deleteProduct(product._id))}
                                                >
                                                    Delete
                                                </Button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('info')}>
                        
                        <div className={cx('box-title-bottom')}>
                            <div className={cx('box-title')}>Thông tin chi tiết</div>
                        </div>
                        <table className="table table-striped">
                            {/* <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {/* <tr>
                                    <th scope="row">Thương hiệu</th>
                                    <td>{product.brand}</td>
                                </tr> */}
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
                                }}
                            >
                                Update
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h1>Mô tả sản phẩm</h1>
                    </div>
                </div>
                <div className={cx('form')}>
                    {/* <h1>Chọn mục cần làm việc </h1> */}
                    <div className={cx('form-content')}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
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
