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
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '~/actions/productAction';
import formatPrice from '~/utils/formatPrice';
import Loading from '~/components/Loading/Loading';
import { addToCart } from '~/actions/cartAction';
import { Alert, Snackbar } from '@mui/material';

const cx = classNames.bind(styles);

function Profile() {
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenError(false);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
    };
    const [image, setImage] = useState([]);
    const [discount, setDiscount] = useState(false);
    const [description, setDescription] = useState(false);
    const [details, SetDetails] = useState(false);

    const [quantity, setQuantity] = useState(1);

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

    const dispatch = useDispatch();
    let navigate = useNavigate();
    let match = useParams();

    const productId = match.id;

    const { loading: productLoading, error, products } = useSelector((state) => state.productDetails);

    useEffect(() => {
        dispatch(getProductDetails(productId));
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    };
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };

    // const userId = match.id;

    const { headers } = useSelector((state) => state.headersMain);

    const { user, loading: userLoading } = useSelector((state) => state.user);

    const { cart, error: cartError, isUpdated } = useSelector((state) => state.cart);

    // const userId = user._id;

    const addToCartHandler = () => {
        if (cartError) {
            setOpenError(true);
            setErrorAlert(cartError);
            // alert('Thêm sản phẩm vào giỏ hàng không thành công');
            return;
        }
        dispatch(addToCart(products._id, quantity));
        // alert('Thêm sản phẩm vào giỏ hàng thành công');
        setOpenSuccess(true);
        setSuccessAlert('Thêm sản phẩm vào giỏ hàng thành công');
        // dispatch(getProductDetails(match.id));
    };

    const buyHandler = () => {
        if (cartError) {
            setOpenError(true);
            setErrorAlert(cartError);
            // alert('Thêm sản phẩm vào giỏ hàng không thành công');
            return;
        }
        dispatch(addToCart(products._id, quantity));
        // alert('Thêm sản phẩm vào giỏ hàng thành công');
        setOpenSuccess(true);
        setSuccessAlert('Thêm sản phẩm vào giỏ hàng thành công');
        navigate('/cart');
        // dispatch(getProductDetails(match.id));
    };

    // console.log('products._id: ', products._id);
    // console.log('quantity: ', quantity);
    // console.log('userId: ', user.user._id);

    const settings = {
        dots: true,
        Number: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div>
            {productLoading ? (
                <Loading />
            ) : (
                <div>
                    <div className={cx('profile')}>
                        <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
                            <Alert
                                onClose={handleCloseError}
                                severity="warning"
                                sx={{ width: '100%', fontSize: '0.85em' }}
                            >
                                {errorAlert}
                            </Alert>
                        </Snackbar>
                        <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                            <Alert
                                onClose={handleCloseSuccess}
                                severity="success"
                                sx={{ width: '100%', fontSize: '0.85em' }}
                            >
                                {successAlert}
                            </Alert>
                        </Snackbar>
                        <div className={cx('href')}>
                            <a href="/" className={cx('home-href')}>
                                <div className={cx('href-text')}>Trang chủ</div>
                                <div className={cx('href-icon')}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </a>
                            <div className={cx('text_laptop')}>
                                <div className={cx('href-text', 'href-text-cart')}>Laptop </div>
                                <div className={cx('href-icon')}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </div>
                            <div className={cx('href-text', 'href-text-cart')}>{products.name}</div>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('Left')}>
                                <div className={cx('container-left')}>
                                    <div className={cx('box-left')}>
                                        <div className={cx('box-img')}>
                                            <div className={cx('box-img-header')}>
                                                {products.images && (
                                                    <Slider {...settings}>
                                                        {products.images.map((carousel) => (
                                                            <div className={cx('cart')} key={carousel._id}>
                                                                <div className={cx('cart-top')}>
                                                                    <img
                                                                        style={{ width: '100%' }}
                                                                        src={carousel.url}
                                                                        alt={''}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </Slider>
                                                )}
                                            </div>
                                            <div className={cx('box-border')}>
                                                <div className={cx('border')}></div>
                                            </div>
                                            <div className={cx('box-info')}>
                                                <div className={cx('info-text')}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                    <span>CPU: {products.CPU}</span>
                                                </div>
                                                <div className={cx('info-text')}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                    <span>Màn hình: {products.Monitor}"</span>
                                                </div>
                                                <div className={cx('info-text')}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                    <span>RAM: {products.RAM}</span>
                                                </div>
                                                <div className={cx('info-text')}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                    <span>Đồ họa: {products.Card_Graphic}</span>
                                                </div>
                                                <div className={cx('info-text')}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                    <span>Lưu trữ: {products.Storage}</span>
                                                </div>
                                                <div className={cx('info-text')}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                    <span>Hệ điều hành: {products.Operating_system}</span>
                                                </div>
                                                <div className={cx('info-text')}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                    <span>Pin: {products.Battery}</span>
                                                </div>
                                                <div className={cx('info-text')}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                    <span>Khối lượng: {products.Mass}kg</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('box-content')}>
                                            <div className={cx('content-info')}>
                                                <h1>
                                                    {products.name}({products.description})
                                                </h1>
                                                <div className={cx('content-title')}>
                                                    {products.brand && (
                                                        <div className={cx('content-Trademark')}>
                                                            Thương hiệu
                                                            <a href={'/profile'} className={cx('Trademark-href')}>
                                                                <span>{products.brand.name}</span>
                                                            </a>
                                                            {/* <span className={cx('before')}></span> */}
                                                            {/* SKU: 220303296 */}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {!discount ? (
                                                <div className={cx('content-price')}>
                                                    <div className={cx('discount-price')}>
                                                        {formatPrice(
                                                            parseFloat(
                                                                (products.cost / 1000000 -
                                                                    (
                                                                        ((products.cost / 1000000) *
                                                                            products.promotional) /
                                                                        100
                                                                    ).toFixed(0)) *
                                                                    1000000,
                                                            ),
                                                        )}
                                                    </div>
                                                    {products.Status_promotional && (
                                                        <div className={cx('real-price')}>
                                                            <div className={cx('box-real-price')}>
                                                                {products.cost && formatPrice(products.cost)}
                                                            </div>
                                                            <div className={cx('percent')}>
                                                                -{products.promotional}%
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className={cx('content-price')}>
                                                    <div className={cx('discount-price')}>
                                                        {products.cost && formatPrice(products.cost)}
                                                    </div>
                                                </div>
                                            )}
                                            <div className={cx('mobile')}>
                                                <div className={cx('box-border')}>
                                                    <div className={cx('border')}></div>
                                                </div>
                                                <div className={cx('box-info')}>
                                                    <div className={cx('info-text')}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                        <span>CPU: {products.CPU}</span>
                                                    </div>
                                                    <div className={cx('info-text')}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                        <span>Màn hình: {products.Monitor}</span>
                                                    </div>
                                                    <div className={cx('info-text')}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                        <span>RAM: {products.RAM}</span>
                                                    </div>
                                                    <div className={cx('info-text')}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                        <span>Đồ họa: {products.Card_Graphic}</span>
                                                    </div>
                                                    <div className={cx('info-text')}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                        <span>Lưu trữ: {products.Storage}</span>
                                                    </div>
                                                    <div className={cx('info-text')}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                        <span>Hệ điều hành: {products.Operating_system}</span>
                                                    </div>
                                                    <div className={cx('info-text')}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                        <span>Pin: {products.Battery}</span>
                                                    </div>
                                                    <div className={cx('info-text')}>
                                                        <FontAwesomeIcon icon={faMinus} />
                                                        <span>Khối lượng: {products.Mass}kg</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('content-gift')}>
                                                <div className={cx('gift-title')}>Bạn sẽ nhận được</div>
                                                <div className={cx('box-gift')}>
                                                    <div>
                                                        <div className={cx('box-gift-content')}>
                                                            {products.gift_images && (
                                                                <div className={cx('gift-img')}>
                                                                    <img
                                                                        src={products.gift_images[0].url}
                                                                        alt={products.gift_image_name}
                                                                    />
                                                                </div>
                                                            )}
                                                            <span className={cx('gift-num')}>
                                                                x{products.gift_image_count}
                                                            </span>
                                                            <span className={cx('gift-text')}>
                                                                {products.gift_image_name} (Quà tặng)
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('box-border')}>
                                                <div className={cx('border')}></div>
                                            </div>

                                            <div className={cx('content-btn')}>
                                                <Button primary large className={cx('buy-now')} onClick={buyHandler}>
                                                    MUA NGAY
                                                </Button>
                                                <Button
                                                    outline
                                                    large
                                                    className={cx('add-cart')}
                                                    onClick={addToCartHandler}
                                                >
                                                    THÊM VÀO GIỎ HÀNG
                                                </Button>
                                            </div>
                                            <div className={cx('box-border')}>
                                                <div className={cx('border')}></div>
                                            </div>
                                            <div className={cx('content-related-promotion')}>
                                                <div className={cx('related-promotion-title')}>
                                                    Khuyến mãi liên quan
                                                </div>
                                                <ul className={cx('promotion-list')}>
                                                    <li>
                                                        <span>Trả góp 6 tháng lãi suất 0% với đơn hàng{' >'}3tr</span>
                                                        <a href=" " className={cx('list-href')}>
                                                            Xem chi tiết
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Nhập mã <strong>PV100</strong> giảm thêm 5% tối đa{' '}
                                                            <span className={cx('list-price')}>100.000đ</span> khi thanh
                                                            toán qua VNPAY-QR.
                                                        </span>
                                                        <a href=" " className={cx('list-href')}>
                                                            Xem chi tiết
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Nhập mã <strong>PV1000</strong> giảm thêm{' '}
                                                            <span className={cx('list-price')}>1.000.000đ</span> khi
                                                            thanh toán qua VNPAY-QR.
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
                                        <div className={cx('policy-header', 'box-header-right')}>
                                            Chính sách bán hàng
                                        </div>
                                        <div className={cx('box-content-right')}>
                                            <div className={cx('box-img-right')}>
                                                <img
                                                    src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'> <path fill='%231435C3' d='M12.822 16.756h-.777c-.362 0-.654-.293-.654-.654V5.308H2.654c-.361 0-.654-.292-.654-.654C2 4.293 2.293 4 2.654 4h9.39c.362 0 .655.293.655.654v2.208h5.07c.3 0 .561.204.634.495l.643 2.57 2.592 1.297c.222.11.362.337.362.585v4.293c0 .361-.293.654-.654.654h-2.924v.061c0 1.547-1.253 2.8-2.8 2.8s-2.8-1.253-2.8-2.8v-.061zm1.388-.424c-.052.152-.08.315-.08.485 0 .824.668 1.492 1.492 1.492s1.492-.668 1.492-1.492c0-.17-.028-.333-.08-.485l-.01-.025c-.208-.573-.757-.982-1.402-.982-.645 0-1.194.41-1.403.982-.003.009-.005.017-.009.025zm-1.031-.885c.48-.853 1.394-1.43 2.443-1.43 1.05 0 1.964.577 2.443 1.43h2.627v-3.234l-2.5-1.25c-.171-.085-.296-.241-.343-.426l-.591-2.367h-4.56v7.277h.48zm-3.996-4.292c.361 0 .654.293.654.654 0 .361-.293.654-.654.654H5.248c-.362 0-.654-.293-.654-.654 0-.361.292-.654.654-.654h3.935zm0 3.577c.361 0 .654.293.654.654 0 .362-.293.654-.654.654h-.984c-.361 0-.654-.292-.654-.654 0-.361.293-.654.654-.654h.984zM3.28 8.886c-.361 0-.654-.293-.654-.654 0-.362.293-.655.654-.655h5.903c.361 0 .654.293.654.655 0 .36-.293.654-.654.654H3.28zm12.28.776v.777h.778c.36 0 .654.293.654.654 0 .362-.293.655-.654.655h-1.431c-.362 0-.655-.293-.655-.655v-1.43c0-.362.293-.655.655-.655.36 0 .654.293.654.654z'/></svg>"
                                                    alt=""
                                                />
                                            </div>
                                            <span className={cx('box-text-right')}>
                                                Miễn phí giao hàng cho đơn hàng từ 800K
                                            </span>
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
                                {products.description_more ? (
                                    <div
                                        className={cx('box-content')}
                                        dangerouslySetInnerHTML={{
                                            __html: products.description_more,
                                        }}
                                    ></div>
                                ) : (
                                    <div className={cx('null')}>
                                        <p>Mô tả sản phẩm sẽ được cập nhật trong thời gian sớm nhất !</p>
                                    </div>
                                )}
                                {/* <div className={cx('box-content')}>{products.description_more}</div> */}
                            </div>

                            <div className={cx('Details', 'laptop')}>
                                <div className={cx('box-title-bottom')}>
                                    <div className={cx('box-title')}>Thông tin chi tiết</div>
                                </div>
                                <div className={cx('Details-content')}>
                                    {products.brand && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Thương hiệu</div>
                                            <div className={cx('box-value')}>{products.brand.name}</div>
                                        </div>
                                    )}

                                    {products.Insurance && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Bảo hành</div>
                                            <div className={cx('box-value')}>{products.Insurance}</div>
                                        </div>
                                    )}
                                    <div className={cx('box-title')}>Thông tin chung</div>
                                    {products.Color && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Màu sắc</div>
                                            <div className={cx('box-value')}>{products.Color}</div>
                                        </div>
                                    )}
                                    {products.Demand && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Nhu cầu</div>
                                            <div className={cx('box-value')}>{products.Demand}</div>
                                        </div>
                                    )}

                                    <div className={cx('box-title')}>Cấu hình chi tiết</div>
                                    {products.CPU_The_system && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Thế hệ CPU</div>
                                            <div className={cx('box-value')}>{products.CPU_The_system}</div>
                                        </div>
                                    )}
                                    {products.CPU && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>CPU</div>
                                            <div className={cx('box-value')}>
                                                {products.CPU} {products.CPU_specs && products.CPU_specs}
                                            </div>
                                        </div>
                                    )}
                                    {products.Card_Graphic && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Chip đồ họa</div>
                                            <div className={cx('box-value')}>{products.Card_Graphic}</div>
                                        </div>
                                    )}
                                    {products.RAM && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>RAM</div>
                                            <div className={cx('box-value')}>
                                                {products.RAM} ( {products.RAM_specs && products.RAM_specs} )
                                            </div>
                                        </div>
                                    )}
                                    {products.Monitor && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Màn hình</div>
                                            <div className={cx('box-value')}>
                                                {products.Monitor}" {products.Monitor_specs && products.Monitor_specs}
                                            </div>
                                        </div>
                                    )}
                                    {products.Storage && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Lưu trữ</div>
                                            <div className={cx('box-value')}>{products.Storage}</div>
                                        </div>
                                    )}
                                    {products.Port_number && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Số cổng lưu trữ tối đa</div>
                                            <div className={cx('box-value')}>{products.Port_number}</div>
                                        </div>
                                    )}
                                    {products.Support_slot_type && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Kiểu khe M.2 hỗ trợ</div>
                                            <div className={cx('box-value')}>{products.Support_slot_type}</div>
                                        </div>
                                    )}
                                    {products.Output_port && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Cổng xuất hình</div>
                                            <div className={cx('box-value')}>{products.Output_port}</div>
                                        </div>
                                    )}
                                    {products.Connector && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Cổng kết nối</div>
                                            <div className={cx('box-value')}>{products.Connector}</div>
                                        </div>
                                    )}
                                    {products.Wireless_Connectivity && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Kết nối không dây</div>
                                            <div className={cx('box-value')}>{products.Wireless_Connectivity}</div>
                                        </div>
                                    )}

                                    {products.Keyboard && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Bàn phím</div>
                                            <div className={cx('box-value')}>{products.Keyboard}</div>
                                        </div>
                                    )}
                                    {products.Operating_system && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Hệ điều hành</div>
                                            <div className={cx('box-value')}>{products.Operating_system}</div>
                                        </div>
                                    )}
                                    {products.Size && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Kích thước</div>
                                            <div className={cx('box-value')}>{products.Size}</div>
                                        </div>
                                    )}
                                    {products.Battery && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Pin</div>
                                            <div className={cx('box-value')}>{products.Battery}</div>
                                        </div>
                                    )}
                                    {products.Mass && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Khối lượng</div>
                                            <div className={cx('box-value')}>{products.Mass}kg</div>
                                        </div>
                                    )}

                                    <div className={cx('box-title')}>Thông tin khác</div>
                                    {products.Led && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Đèn LED trên máy</div>
                                            <div className={cx('box-value')}>{products.Led ? 'không đèn' : 'đèn'}</div>
                                        </div>
                                    )}
                                    {products.Accessories_included && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Phụ kiện đi kèm</div>
                                            <div className={cx('box-value')}>{products.Accessories_included}</div>
                                        </div>
                                    )}
                                    {/* <div className={cx('box-title')}>Thông tin kích thước</div> */}
                                </div>
                            </div>

                            <div className={cx('Details', 'tablet')}>
                                <div className={cx('box-title-bottom')}>
                                    <div className={cx('box-title')}>Thông tin chi tiết</div>
                                </div>
                                <div className={cx('Details-content')}>
                                    {products.brand && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Thương hiệu</div>
                                            <div className={cx('box-value')}>{products.brand.name}</div>
                                        </div>
                                    )}
                                    {products.Insurance && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Bảo hành</div>
                                            <div className={cx('box-value')}>{products.Insurance}</div>
                                        </div>
                                    )}
                                    <div className={cx('box-title')}>Thông tin chung</div>
                                    {products.Color && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Màu sắc</div>
                                            <div className={cx('box-value')}>{products.Color}</div>
                                        </div>
                                    )}
                                    {products.Demand && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Nhu cầu</div>
                                            <div className={cx('box-value')}>{products.Demand}</div>
                                        </div>
                                    )}

                                    <div className={cx('box-title')}>Cấu hình chi tiết</div>
                                    {products.CPU_The_system && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Thế hệ CPU</div>
                                            <div className={cx('box-value')}>{products.CPU_The_system}</div>
                                        </div>
                                    )}
                                    {products.CPU && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>CPU</div>
                                            <div className={cx('box-value')}>
                                                {products.CPU} {products.CPU_specs && products.CPU_specs}
                                            </div>
                                        </div>
                                    )}
                                    {products.Card_Graphic && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Chip đồ họa</div>
                                            <div className={cx('box-value')}>{products.Card_Graphic}</div>
                                        </div>
                                    )}
                                    {products.RAM && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>RAM</div>
                                            <div className={cx('box-value')}>
                                                {products.RAM} ( {products.RAM_specs && products.RAM_specs} )
                                            </div>
                                        </div>
                                    )}
                                    {products.Monitor && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Màn hình</div>
                                            <div className={cx('box-value')}>
                                                {products.Monitor}" {products.Monitor_specs && products.Monitor_specs}
                                            </div>
                                        </div>
                                    )}
                                    {products.Storage && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Lưu trữ</div>
                                            <div className={cx('box-value')}>{products.Storage}</div>
                                        </div>
                                    )}
                                    {products.Port_number && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Số cổng lưu trữ tối đa</div>
                                            <div className={cx('box-value')}>{products.Port_number}</div>
                                        </div>
                                    )}
                                    {products.Support_slot_type && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Kiểu khe M.2 hỗ trợ</div>
                                            <div className={cx('box-value')}>{products.Support_slot_type}</div>
                                        </div>
                                    )}
                                    {products.Output_port && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Cổng xuất hình</div>
                                            <div className={cx('box-value')}>{products.Output_port}</div>
                                        </div>
                                    )}
                                    {products.Connector && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Cổng kết nối</div>
                                            <div className={cx('box-value')}>{products.Connector}</div>
                                        </div>
                                    )}
                                    {products.Wireless_Connectivity && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Kết nối không dây</div>
                                            <div className={cx('box-value')}>{products.Wireless_Connectivity}</div>
                                        </div>
                                    )}

                                    {products.Keyboard && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Bàn phím</div>
                                            <div className={cx('box-value')}>{products.Keyboard}</div>
                                        </div>
                                    )}
                                    {products.Operating_system && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Hệ điều hành</div>
                                            <div className={cx('box-value')}>{products.Operating_system}</div>
                                        </div>
                                    )}
                                    {products.Size && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Kích thước</div>
                                            <div className={cx('box-value')}>{products.Size}</div>
                                        </div>
                                    )}
                                    {products.Battery && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Pin</div>
                                            <div className={cx('box-value')}>{products.Battery}</div>
                                        </div>
                                    )}
                                    {products.Mass && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Khối lượng</div>
                                            <div className={cx('box-value')}>{products.Mass}kg</div>
                                        </div>
                                    )}

                                    <div className={cx('box-title')}>Thông tin khác</div>
                                    {products.Led && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Đèn LED trên máy</div>
                                            <div className={cx('box-value')}>{products.Led ? 'không đèn' : 'đèn'}</div>
                                        </div>
                                    )}
                                    {products.Accessories_included && (
                                        <div className={cx('box-content')}>
                                            <div className={cx('box-text')}>Phụ kiện đi kèm</div>
                                            <div className={cx('box-value')}>{products.Accessories_included}</div>
                                        </div>
                                    )}
                                    {/* <div className={cx('box-title')}>Thông tin kích thước</div> */}
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
                </div>
            )}
        </div>
    );
}

export default Profile;
