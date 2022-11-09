import { faAngleRight, faChevronDown, faChevronUp, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import styles from './Profile.module.scss';
import { img } from '~/Data/Product/Product';
import { useEffect, useState } from 'react';
import { ComputerSaleIcon, GiftIcon, InsuranceIcon, SettingIcon, ShipIcon } from '~/components/Icons';
import Button from '~/components/Button';
import { Carousel } from 'react-carousel-minimal';
import './profile.scss';

const cx = classNames.bind(styles);

function Profile() {
    const [image, setImage] = useState([]);
    const [discount, setDiscount] = useState(false);
    const [description, setDescription] = useState(false);
    const [details, SetDetails] = useState(false);

    const handleDiscount = () => {
        discount ? setDiscount(false) : setDiscount(true);
    };

    useEffect(() => {
        setTimeout(() => {
            setImage(img);
        }, 3000);
    });

    useEffect(() => {
        setTimeout(() => {
            setDescription(true);
        }, 3000);
    });

    // const settings = {
    //     customPaging: function (i) {
    //         return (
    //             <a href={' '}>
    //                 <img src={`${image[0]}`} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
    //             </a>
    //         );
    //     },
    //     dots: true,
    //     dotsClass: 'slick-dots slick-thumb',
    //     infinite: true,
    //     // speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     thumbnails: true
    //     // cssEase: 'linear',
    // };

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    };
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };

    return (
        <div className={cx('profile')}>
            <div className={cx('href')}>
                <a href="/" className={cx('home-href')}>
                    <div className={cx('href-text')}>Trang chủ</div>
                    <div className={cx('href-icon')}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </a>
                <div className={cx('href-text', 'href-text-cart')}>Laptop</div>
            </div>
            <div className={cx('content')}>
                <div className={cx('Left')}>
                    <div className={cx('container-left')}>
                        <div className={cx('box-left')}>
                            <div className={cx('box-img')}>
                                <div className={cx('box-img-header')}>
                                    <Carousel
                                        data={img}
                                        time={2000}
                                        width="300px"
                                        height="300px"
                                        captionStyle={captionStyle}
                                        radius="8px"
                                        // slideNumber={true}
                                        slideNumberStyle={slideNumberStyle}
                                        captionPosition="bottom"
                                        automatic={true}
                                        dots={true}
                                        pauseIconColor="white"
                                        pauseIconSize="40px"
                                        slideBackgroundColor="transparent"
                                        slideImageFit="cover"
                                        thumbnails={true}
                                        thumbnailWidth="50px"
                                        style={{
                                            textAlign: 'center',
                                            maxWidth: '300px',
                                            maxHeight: '400px',
                                            margin: '40px auto',
                                        }}
                                    />
                                    {/* <Slider {...settings}>
                                        {image.map((img) => (
                                            <div key={img.id} style={{ width: '100%' }}>
                                                <img src={img.image} alt="" style={{ width: '100%' }} />
                                            </div>
                                        ))}
                                    </Slider> */}
                                </div>
                                <div className={cx('box-border')}>
                                    <div className={cx('border')}></div>
                                </div>
                                <div className={cx('box-info')}>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>CPU: Intel Core i5-1135G7</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>Màn hình: 15.6" TFT (1920 x 1080)</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>RAM: 1 x 4GB, 1 x 4GB Onboard DDR4 2400MHz</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>Đồ họa: Intel Iris Xe Graphics</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>Lưu trữ: 512GB SSD M.2 NVMe /</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>Hệ điều hành: Windows 11 Home</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>Pin: 2 cell 36 Wh Pin liền</span>
                                    </div>
                                    <div className={cx('info-text')}>
                                        <FontAwesomeIcon icon={faMinus} />
                                        <span>Khối lượng: 1.7 kg</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('box-content')}>
                                <div className={cx('content-info')}>
                                    <h1>Màn hình LCD MSI PRO MP271QP (2560 x 1440/IPS/60Hz/5 ms)</h1>
                                    <div className={cx('content-title')}>
                                        <div className={cx('content-Trademark')}>
                                            Thương hiệu
                                            <a href={'/profile'} className={cx('Trademark-href')}>
                                                <span>MSI</span>
                                            </a>
                                            <span className={cx('before')}></span>
                                            SKU: 220303296
                                        </div>
                                    </div>
                                </div>
                                {discount ? (
                                    <div className={cx('content-price')}>
                                        <div className={cx('discount-price')}>6.250.000&nbsp;₫</div>
                                        <div className={cx('real-price')}>
                                            <div className={cx('box-real-price')}>6.690.000&nbsp;₫</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={cx('content-price')}>
                                        <div className={cx('discount-price')}>6.690.000&nbsp;₫</div>
                                    </div>
                                )}
                                <div className={cx('mobile')}>
                                    <div className={cx('box-border')}>
                                        <div className={cx('border')}></div>
                                    </div>
                                    <div className={cx('box-info')}>
                                        <div className={cx('info-text')}>
                                            <FontAwesomeIcon icon={faMinus} />
                                            <span>CPU: Intel Core i5-1135G7</span>
                                        </div>
                                        <div className={cx('info-text')}>
                                            <FontAwesomeIcon icon={faMinus} />
                                            <span>Màn hình: 15.6" TFT (1920 x 1080)</span>
                                        </div>
                                        <div className={cx('info-text')}>
                                            <FontAwesomeIcon icon={faMinus} />
                                            <span>RAM: 1 x 4GB, 1 x 4GB Onboard DDR4 2400MHz</span>
                                        </div>
                                        <div className={cx('info-text')}>
                                            <FontAwesomeIcon icon={faMinus} />
                                            <span>Đồ họa: Intel Iris Xe Graphics</span>
                                        </div>
                                        <div className={cx('info-text')}>
                                            <FontAwesomeIcon icon={faMinus} />
                                            <span>Lưu trữ: 512GB SSD M.2 NVMe /</span>
                                        </div>
                                        <div className={cx('info-text')}>
                                            <FontAwesomeIcon icon={faMinus} />
                                            <span>Hệ điều hành: Windows 11 Home</span>
                                        </div>
                                        <div className={cx('info-text')}>
                                            <FontAwesomeIcon icon={faMinus} />
                                            <span>Pin: 2 cell 36 Wh Pin liền</span>
                                        </div>
                                        <div className={cx('info-text')}>
                                            <FontAwesomeIcon icon={faMinus} />
                                            <span>Khối lượng: 1.7 kg</span>
                                        </div>
                                    </div>
                                </div>
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
                                                <span className={cx('gift-num')}>x1</span>
                                                <span className={cx('gift-text')}>Ba lô Acer U-K0618 (Quà tặng)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('box-border')}>
                                    <div className={cx('border')}></div>
                                </div>
                                <div className={cx('content-promotion')}>Chọn một trong những khuyến mãi sau</div>
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
                                                <span>440.000đ</span>
                                                &nbsp;/&nbsp;Chiếc
                                            </div>
                                            <div className={cx('promotion-text')}>Khi mua từ 1 Chiếc trở lên</div>
                                            <div className={cx('promotion-HSD')}>
                                                <div className={cx('promotion-date')}>HSD:&nbsp;20/10/2022</div>
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
                                                <span>440.000đ</span>
                                                &nbsp;/&nbsp;Chiếc
                                            </div>
                                            <div className={cx('promotion-text')}>Khi mua từ 1 Chiếc trở lên</div>
                                            <div className={cx('promotion-HSD')}>
                                                <div className={cx('promotion-date')}>HSD:&nbsp;20/10/2022</div>
                                                <div className={cx('promotion-btn')}>Áp dụng</div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className={cx('content-btn')}>
                                    <Button primary large className={cx('buy-now')}>
                                        MUA NGAY
                                    </Button>
                                    <Button outline large className={cx('add-cart')}>
                                        THÊM VÀO GIỎ HÀNG
                                    </Button>
                                </div>
                                <div className={cx('box-border')}>
                                    <div className={cx('border')}></div>
                                </div>
                                <div className={cx('content-related-promotion')}>
                                    <div className={cx('related-promotion-title')}>Khuyến mãi liên quan</div>
                                    <ul className={cx('promotion-list')}>
                                        {/* <li>
                                            <span>
                                                Nhập mã&nbsp;
                                                <strong>PM240901</strong>
                                                &nbsp;giảm&nbsp;
                                                <span className={cx('list-price')}>2.000.000đ</span>
                                                &nbsp;cho đơn hàng có sản phẩm này
                                            </span>
                                        </li> */}
                                        <li>
                                            <span>
                                                Trả góp 6 tháng lãi suất 0% với đơn hàng >3tr
                                                {/* <FontAwesomeIcon icon={faAngleRight} /> */}
                                            </span>
                                            <a href=" " className={cx('list-href')}>
                                                Xem chi tiết
                                            </a>
                                        </li>
                                        <li>
                                            <span>
                                                Nhập mã <strong>PV100</strong> giảm thêm 5% tối đa{' '}
                                                <span className={cx('list-price')}>100.000đ</span> khi thanh toán qua
                                                VNPAY-QR.
                                            </span>
                                            <a href=" " className={cx('list-href')}>
                                                Xem chi tiết
                                            </a>
                                        </li>
                                        <li>
                                            <span>
                                                Nhập mã <strong>PV1000</strong> giảm thêm{' '}
                                                <span className={cx('list-price')}>1.000.000đ</span> khi thanh toán qua
                                                VNPAY-QR.
                                            </span>
                                            <a href=" " className={cx('list-href')}>
                                                Xem chi tiết
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('Right')}>
                    <div className={cx('container-right')}>
                        <div className={cx('box-header')}>
                            <ShipIcon />
                            <div className={cx('header-text')}>Sản phẩm được miễn phí giao hàng</div>
                        </div>
                        <div className={cx('box-border-right')}></div>
                        <div className={cx('Sales-policy')}>
                            <div className={cx('policy-header', 'box-header-right')}>Chính sách bán hàng</div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <img
                                        src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'> <path fill='%231435C3' d='M12.822 16.756h-.777c-.362 0-.654-.293-.654-.654V5.308H2.654c-.361 0-.654-.292-.654-.654C2 4.293 2.293 4 2.654 4h9.39c.362 0 .655.293.655.654v2.208h5.07c.3 0 .561.204.634.495l.643 2.57 2.592 1.297c.222.11.362.337.362.585v4.293c0 .361-.293.654-.654.654h-2.924v.061c0 1.547-1.253 2.8-2.8 2.8s-2.8-1.253-2.8-2.8v-.061zm1.388-.424c-.052.152-.08.315-.08.485 0 .824.668 1.492 1.492 1.492s1.492-.668 1.492-1.492c0-.17-.028-.333-.08-.485l-.01-.025c-.208-.573-.757-.982-1.402-.982-.645 0-1.194.41-1.403.982-.003.009-.005.017-.009.025zm-1.031-.885c.48-.853 1.394-1.43 2.443-1.43 1.05 0 1.964.577 2.443 1.43h2.627v-3.234l-2.5-1.25c-.171-.085-.296-.241-.343-.426l-.591-2.367h-4.56v7.277h.48zm-3.996-4.292c.361 0 .654.293.654.654 0 .361-.293.654-.654.654H5.248c-.362 0-.654-.293-.654-.654 0-.361.292-.654.654-.654h3.935zm0 3.577c.361 0 .654.293.654.654 0 .362-.293.654-.654.654h-.984c-.361 0-.654-.292-.654-.654 0-.361.293-.654.654-.654h.984zM3.28 8.886c-.361 0-.654-.293-.654-.654 0-.362.293-.655.654-.655h5.903c.361 0 .654.293.654.655 0 .36-.293.654-.654.654H3.28zm12.28.776v.777h.778c.36 0 .654.293.654.654 0 .362-.293.655-.654.655h-1.431c-.362 0-.655-.293-.655-.655v-1.43c0-.362.293-.655.655-.655.36 0 .654.293.654.654z'/></svg>"
                                        alt=""
                                    />
                                </div>
                                <span className={cx('box-text-right')}>Miễn phí giao hàng cho đơn hàng từ 800K</span>
                            </div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <img
                                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cpath fill='%231435C3' fill-rule='evenodd' d='M10.646 2.34c.496-.454 1.244-.454 1.74 0l.012.013c1.52 1.482 3.3 2.232 5.599 2.36 1.103.062 1.98.974 1.996 2.076.003.227.009.43.018.622v.016c.045 2.349.1 5.272-.88 7.93-.537 1.456-1.35 2.723-2.416 3.764-1.214 1.185-2.803 2.126-4.723 2.798-.063.022-.129.04-.195.053-.093.019-.187.028-.281.028-.094 0-.188-.01-.282-.028-.066-.013-.13-.03-.193-.053-1.923-.67-3.514-1.611-4.729-2.796-1.066-1.041-1.88-2.307-2.416-3.764-.976-2.649-.92-5.567-.876-7.912v-.036c.01-.194.016-.397.019-.621.016-1.103.893-2.015 1.996-2.077 2.3-.128 4.078-.878 5.598-2.36zm.942.863c-.044-.038-.1-.038-.145 0-.867.843-1.799 1.469-2.848 1.913-1.05.445-2.194.696-3.495.769-.49.027-.88.432-.888.922-.003.234-.01.446-.018.65v.013c-.046 2.363-.097 5.042.803 7.483 1.03 2.792 3.132 4.708 6.43 5.858.012.004.024.008.037.01.035.007.07.007.103 0 .013-.002.026-.006.037-.01 3.295-1.152 5.397-3.07 6.426-5.86.903-2.448.853-5.129.808-7.495-.01-.201-.015-.414-.019-.649-.007-.49-.397-.895-.888-.922-1.301-.073-2.444-.324-3.495-.769-1.048-.444-1.98-1.07-2.848-1.913zm4.097 6.004c.276.277.276.725 0 1.001L11.1 14.793c-.276.276-.724.276-1 0L7.807 12.5c-.276-.276-.276-.724 0-1 .277-.277.725-.277 1.001 0L10.6 13.29l4.084-4.084c.276-.276.725-.276 1.001 0z'/%3e%3c/svg%3e"
                                        alt=""
                                    />
                                </div>
                                <span className={cx('box-text-right')}>Cam kết hàng chính hãng 100%</span>
                            </div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <img
                                        src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e %3cpath fill='%231435C3' d='M16.112 13.458v-3.019L12.982 12v3.337l3.13-1.878zm-3.692-2.43l3-1.495-3.84-1.926-3 1.496 3.84 1.925zm-.56 4.392V12l-3.972-1.99v3.42l3.972 1.99zm5.317-6.14c.038.075.047.16.057.234v4.261c0 .197-.103.384-.272.486l-4.252 2.542c-.159.103-.364.113-.533.029L7.075 14.28c-.187-.093-.309-.29-.309-.505V9.093c.01-.084.019-.159.056-.243.01-.009.02-.009.02-.018.018-.02.027-.038.046-.056.037-.057.093-.103.159-.14.009-.01.018-.029.028-.029l4.252-2.13c.159-.075.336-.075.495 0l5.103 2.55.028.029c.066.037.122.084.159.15l.047.046c0 .01.01.019.018.028zm-13.26 8.908l-.408 2.14c-.069.354-.41.587-.766.519-.355-.067-.588-.41-.52-.765l.723-3.785c.066-.343.389-.573.735-.525l3.955.56c.358.051.607.383.557.741-.052.357-.383.607-.74.555l-2.586-.366c1.56 2.307 4.208 3.737 7.133 3.737 4.78 0 8.692-3.912 8.692-8.691 0-.361.293-.654.654-.654.361 0 .654.293.654.654 0 5.502-4.498 10-10 10-3.281 0-6.267-1.57-8.083-4.12zM20.083 5.12l.408-2.14c.069-.355.41-.587.766-.52.355.068.588.411.52.766l-.723 3.784c-.065.343-.389.574-.735.525l-3.955-.56c-.358-.05-.607-.383-.557-.74.052-.357.383-.607.74-.556l2.586.367C17.573 3.738 14.925 2.308 12 2.308 7.22 2.308 3.308 6.221 3.308 11c0 .36-.292.654-.654.654-.361 0-.654-.293-.654-.654C2 5.498 6.498 1 12 1c3.281 0 6.267 1.57 8.083 4.12z'/%3e%3c/svg%3e"
                                        alt=""
                                    />
                                </div>
                                <span className={cx('box-text-right')}>Đổi trả trong vòng 10 ngày</span>
                            </div>
                        </div>
                        <div className={cx('Other-services')}>
                            <div className={cx('services-header', 'box-header-right')}>Dịch vụ khác</div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <SettingIcon />
                                </div>
                                <span className={cx('box-text-right')}>Sửa chữa đồng giá 150.000đ.</span>
                            </div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <ComputerSaleIcon />
                                </div>
                                <span className={cx('box-text-right')}>Vệ sinh máy tính, laptop.</span>
                            </div>
                            <div className={cx('box-content-right')}>
                                <div className={cx('box-img-right')}>
                                    <InsuranceIcon />
                                </div>
                                <span className={cx('box-text-right')}>Bảo hành tại nhà.</span>
                            </div>
                        </div>
                        <a href=" " className={cx('href-right')}>
                            Xem chi tiết
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('border-bottom')}></div>
            <div className={cx('container-bottom')}>
                <div className={cx('Product-description')}>
                    <div className={cx('box-title-bottom')}>
                        <div className={cx('box-title')}>Mô tả sản phẩm</div>
                    </div>
                    {description ? (
                        <div className={cx('box-content')}>
                            <h2>
                                <a href=" ">
                                    <strong>Màn hình LCD Msi</strong>
                                </a>
                                <strong>
                                    {' '}
                                    Pro MP271QP (2560 x 1440/IPS/60Hz/5ms) là một sản phẩm màn hình phẳng cao cấp đến từ
                                    hãng Msi với thiết kế sang trọng cho tầm nhìn tuyệt hảo. Bạn đang có nhu cầu mua một
                                    chiếc màn hình phẳng để làm việc, giải trí hoặc dùng cho gia đình của mình, chiếc
                                    LCD này sẽ đáp ứng tốt.{' '}
                                </strong>
                            </h2>
                            <h3>
                                <strong>
                                    Kích thước 27 inch rộng rãi, tấm nền IPS cao cấp cùng góc nhìn rộng 178 độ
                                </strong>
                            </h3>
                            <p>
                                Màn hình LCD Msi Pro MP271QP có thiết kế khung viền màu đen chắc chắn, màn hình phẳng
                                với kích thước màn hình&nbsp;
                                <strong>27 inch</strong>
                                &nbsp;rộng rãi và độ phân giải&nbsp;
                                <strong>2560 x 1440 px</strong>
                                &nbsp;cho tầm nhìn chân thực toàn diện. Với khối lượng 6kg tính cả chân đế sẽ không khó
                                khăn cho việc di chuyển vị trí đặt màn hình trong không gian của bạn.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_c5fca6c7-d9c2-4845-b65e-67b29ad2e3a1.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                LCD Msi Pro MP271QP được đang bị tấm nền &nbsp;<strong>IPS</strong>&nbsp; cao cấp nâng
                                cao độ bền và giá trị cho màn hình. Bên cạnh đó cùng với góc nhìn rộng &nbsp;
                                <strong>178 độ</strong>&nbsp; cho phép bạn có thể nhìn rõ chuyển động trên màn hình từ
                                bất kỳ góc độ nào. Đặc điểm này khá tiện lợi khi bạn vừa có thể làm công việc nhà, trò
                                chuyện với mọi người, vừa có thể đưa mắt xem chương trình mình thích.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_d5466ce4-3640-4b02-9113-e778e80d7150.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                <strong>
                                    Dễ dàng điều chỉnh góc nhìn, cổng kết nối hiện đại, hai loa tích hợp 2W{' '}
                                </strong>
                            </p>
                            <p>
                                LCD Msi Pro MP271QP đặc biệt có khả năng điều chỉnh góc nhìn theo nhu cầu sử dụng của
                                bạn. Cụ thể bạn có thể tăng chiều cao của màn hình lên 120mm, xoay vòng 90 độ, xoay lệch
                                30 độ hoặc xoay nghiêng từ 8 - 20 độ tùy vào mong muốn học tập, làm việc và giải trí của
                                bạn
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_b2b6d546-11e3-4659-8a2e-629fc5e4451f.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                Msi đã trang bị cho chiếc màn hình LCD Pro của mình cổng xuất hình hiện đại gồm 2 cổng
                                HDMI 1.4 và 1 cổng DisplayPort 1.2 cho kết nối linh hoạt. Ngoài ra, Pro MP271 có hai loa
                                tích hợp 2W cho phép người dùng nghe các tệp âm thanh, chỉnh sửa video hoặc tham gia các
                                khóa học trực tuyến bất cứ lúc nào mà không cần mang theo loa ngoài hoặc đeo tai nghe.
                            </p>
                            <h3>
                                <strong>Khả năng hiển thị sắc nét, đa dạng màu sắc với 16.7 triệu màu</strong>
                            </h3>
                            <p>
                                Với tần số quét &nbsp;<strong>60Hz</strong>&nbsp; hỗ trợ tốc độ làm mới và thời gian
                                phản hồi chuyển động là &nbsp;<strong>5 ms</strong>, Msi Pro cho bạn hình ảnh hiển thị
                                với tốc độ chuyển động mượt mà. Trong từng khoảnh khắc dịch chuyển sẽ không lo bị mờ
                                nhòe, rất tiện lợi đặc biệt là đối với người dùng có thị lực không tốt.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_6a3a84fa-9018-479a-b7bd-1edade6cad86.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                Màn hình LCD Msi Pro MP271QP có độ sáng &nbsp;<strong>300 cd/m2</strong>&nbsp; và khả
                                năng hiển thị màu sắc đa dạng với &nbsp;<strong>16.7 triệu màu</strong>&nbsp; cho bạn
                                thoải mái trải nghiệm hình ảnh sắc nét với độ chân thực cao, đắm chìm trong không gian
                                sống động trên màn ảnh. Tối ưu hóa màu sắc cũng giúp bạn tận hưởng từng chi tiết một
                                cách tốt nhất trong khi sử dụng các ứng dụng mà bạn quan tâm.
                            </p>
                            <h3>
                                <strong>
                                    Công nghệ hiện đại bảo vệ đôi mắt, bộ công cụ hiển thị độc quyền từ Msi{' '}
                                </strong>
                            </h3>
                            <p>
                                <strong>Công nghệ chống nhấp nháy và chống chói</strong>&nbsp; được hỗ trợ trên chiếc
                                Msi Pro này giúp giảm lượng ánh sáng phản chiếu khỏi màn hình, cho người xem cảm giác dễ
                                chịu hơn, giảm tình trạng khô và mỏi mắt. Ngoài ra công nghệ ít ánh sáng xanh hơn sẽ
                                chặn và hấp thụ ánh sáng xanh tạo ra từ màn hình, bảo vệ mắt bạn khỏi tác hại của ánh
                                sáng xanh, cho đôi mắt khỏe mạnh.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_75fe52cd-1f05-4f8a-9f3d-51ec0b1f41a8.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                Msi đã ưu ái trang bị cho chiếc màn hình LCD Pro MP271QP của mình bộ công cụ hiển thị
                                độc quyền dành riêng cho thương hiệu. Cụ thể với bộ công cụ này bạn có thể tự thiết lập
                                chế độ màu thích hợp cho mình, gồm cả chế độ chơi game, xem phim. Hơn thế nữa bàn phím
                                ảo trên thiết bị cho phép bạn dùng mọi lúc mọi nơi phòng khi bàn phím của bạn không may
                                bị hỏng.
                            </p>
                            <figure>
                                <img
                                    src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2022/5/9/20220509_03ce25fa-ddba-4bcf-a4dc-1f82a230dc87.jpg"
                                    alt=""
                                />
                            </figure>
                            <p>
                                <strong>
                                    Mua màn hình LCD Msi Pro MP271QP (2560 x 1440/IPS/60Hz/5ms), hỗ trợ miễn phí vận
                                    chuyển tận nơi
                                </strong>
                            </p>
                            <p>
                                Cùng với những tính năng hữu ích và công nghệ hiện đại bảo vệ đôi mắt có trên màn hình
                                LCD Msi Pro MP271QP, đây là một sản phẩm rất đáng để bạn sở hữu. Hệ thống &nbsp;
                                <a href=" ">showroom Phong Vũ</a>&nbsp; phân phối sản phẩm chính hãng đến tay bạn, hãy
                                đến ngay cửa hàng của chúng tôi để trải nghiệm mua sắm hoặc đặt hàng qua website nhận ưu
                                đãi miễn phí vận chuyển nhé!
                            </p>
                        </div>
                    ) : (
                        <div className={cx('null')}>
                            <p>Mô tả sản phẩm sẽ được cập nhật trong thời gian sớm nhất !</p>
                        </div>
                    )}
                </div>

                <div className={cx('Details', 'laptop')}>
                    <div className={cx('box-title-bottom')}>
                        <div className={cx('box-title')}>Thông tin chi tiết</div>
                    </div>
                    <div className={cx('Details-content')}>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Thương hiệu</div>
                            <div className={cx('box-value')}>MSI</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Bảo hành</div>
                            <div className={cx('box-value')}>36</div>
                        </div>
                        <div className={cx('box-title')}>Thông tin chung</div>
                        <div className={cx('box-title')}>Cấu hình chi tiết</div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Kích thước</div>
                            <div className={cx('box-value')}>27"</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Độ phân giải</div>
                            <div className={cx('box-value')}>2560 x 1440 ( 16:9 )</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Tấm nền</div>
                            <div className={cx('box-value')}>IPS</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Tần số quét</div>
                            <div className={cx('box-value')}>60Hz</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Thời gian phản hồi</div>
                            <div className={cx('box-value')}>5 ms</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Kiểu màn hình</div>
                            <div className={cx('box-value')}>Màn hình phẳng</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Độ sáng</div>
                            <div className={cx('box-value')}>300 cd/m2</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Góc nhìn</div>
                            <div className={cx('box-value')}>178 (H) / 178 (V)</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Khả năng hiển thị màu sắc</div>
                            <div className={cx('box-value')}>16.7 triệu màu</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Độ tương phản tĩnh</div>
                            <div className={cx('box-value')}>1,000:1</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Bề mặt</div>
                            <div className={cx('box-value')}>Màn hình chống lóa</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Cổng xuất hình</div>
                            <div className={cx('box-value')}>2 x HDMI 1.4 , 1 x DisplayPort 1.2</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Khối lượng</div>
                            <div className={cx('box-value')}>6 kg</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Phụ kiện đi kèm</div>
                            <div className={cx('box-value')}>HDMI cable</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Loa</div>
                            <div className={cx('box-value')}>có</div>
                        </div>
                        <div className={cx('box-title')}>Thông tin kích thước</div>
                    </div>
                </div>

                <div className={cx('Details', 'tablet')}>
                    <div className={cx('box-title-bottom')}>
                        <div className={cx('box-title')}>Thông tin chi tiết</div>
                    </div>
                    <div className={cx('Details-content')} style={{ height: details ? '100%' : '300px' }}>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Thương hiệu</div>
                            <div className={cx('box-value')}>MSI</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Bảo hành</div>
                            <div className={cx('box-value')}>36</div>
                        </div>
                        <div className={cx('box-title')}>Thông tin chung</div>
                        <div className={cx('box-title')}>Cấu hình chi tiết</div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Kích thước</div>
                            <div className={cx('box-value')}>27"</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Độ phân giải</div>
                            <div className={cx('box-value')}>2560 x 1440 ( 16:9 )</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Tấm nền</div>
                            <div className={cx('box-value')}>IPS</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Tần số quét</div>
                            <div className={cx('box-value')}>60Hz</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Thời gian phản hồi</div>
                            <div className={cx('box-value')}>5 ms</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Kiểu màn hình</div>
                            <div className={cx('box-value')}>Màn hình phẳng</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Độ sáng</div>
                            <div className={cx('box-value')}>300 cd/m2</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Góc nhìn</div>
                            <div className={cx('box-value')}>178 (H) / 178 (V)</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Khả năng hiển thị màu sắc</div>
                            <div className={cx('box-value')}>16.7 triệu màu</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Độ tương phản tĩnh</div>
                            <div className={cx('box-value')}>1,000:1</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Bề mặt</div>
                            <div className={cx('box-value')}>Màn hình chống lóa</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Cổng xuất hình</div>
                            <div className={cx('box-value')}>2 x HDMI 1.4 , 1 x DisplayPort 1.2</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Khối lượng</div>
                            <div className={cx('box-value')}>6 kg</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Phụ kiện đi kèm</div>
                            <div className={cx('box-value')}>HDMI cable</div>
                        </div>
                        <div className={cx('box-content')}>
                            <div className={cx('box-text')}>Loa</div>
                            <div className={cx('box-value')}>có</div>
                        </div>
                        <div className={cx('box-title')}>Thông tin kích thước</div>
                    </div>

                    <div
                        className={cx('btn-details')}
                        onClick={() => {
                            SetDetails(!details);
                        }}
                    >
                        {!details ? (
                            <div>
                                <span>Xem thêm nội dung</span>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        ) : (
                            <div>
                                <span>Thu gọn</span>
                                <FontAwesomeIcon icon={faChevronUp} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
