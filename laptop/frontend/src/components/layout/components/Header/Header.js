import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import {
    AdviseIcon,
    BuildIcon,
    CartIcon,
    ComputerIcon,
    PromotionIcon,
    ShowroomIcon,
    UserIcon,
} from '~/components/Icons';
import styles from './Header.module.scss';
import CartItem from '../PreviewItem/CartItem';
import CartItemValue from '../PreviewItem/CartItemValue';
// import NotificationItem from '../PreviewItem/NotificationItem';
import { useEffect, useState } from 'react';
import SearchItem from '../PreviewItem/SearchItem';
import ProductItem from '../PreviewItem/Products';
import LoginItem from '../PreviewItem/Login';
import { useDispatch, useSelector } from 'react-redux';
// import { clearErrors } from '~/actions/productAction';
// import { getAllHeader } from '~/actions/headerAction';
import { getAllBanners, getAllBannersMain } from '~/actions/bannerAction';
import config from '~/config';
import { getAllHeaderMain, getAllHeaders } from '~/actions/headerAction';
import { getAllUsers, getUserDetails, loadUser } from '~/actions/userAction';
import { Link, useHistory, useNavigate, useParams } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
import { getCart } from '~/actions/cartAction';
const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [loginResult, setLoginResult] = useState('');
    // const [cartResult, setCartResult] = useState([]);
    const [cartMountResult, setCartMountResult] = useState(0);
    const [scrollHeader, setScrollHeader] = useState(true);

    const handleScroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY >= 99) {
            setScrollHeader(false);
        } else {
            setScrollHeader(true);
        }
    };

    window.addEventListener('scroll', handleScroll);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoginResult('0395001595');
        }, 3000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setCartMountResult(10);
        }, 3000);
    }, []);

    const renderCart = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>{cartMountResult ? <CartItemValue /> : <CartItem />}</PopperWrapper>
            </div>
        );
    };

    const renderLogin = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <LoginItem />
                </PopperWrapper>
            </div>
        );
    };

    // const renderNotification = (props) => {
    //     return (
    //         <div className={cx('preview')} tabIndex="-1" {...props}>
    //             <PopperWrapper>
    //                 <NotificationItem />
    //             </PopperWrapper>
    //         </div>
    //     );
    // };

    const renderSearch = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <SearchItem />
                </PopperWrapper>
            </div>
        );
    };

    const renderProducts = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <ProductItem />
                </PopperWrapper>
            </div>
        );
    };

    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const dispatch = useDispatch();
    let match = useParams();

    const { headers } = useSelector((state) => state.headersMain);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const [addressInfo, setAddressInfo] = useState('');
    const [cityInfo, setCityInfo] = useState('');
    const [stateInfo, setStateInfo] = useState('');
    const [countryInfo, setCountryInfo] = useState('');
    const [phoneNoInfo, setPhoneNoInfo] = useState('');

    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();

    const { isAuthenticated, user, loading  } = useSelector((state) => state.user);
    // useEffect(() => {
    //     store.dispatch(loadUser());
    // }, []);
    // const store = useSelector((state) => state);

    // console.log('user in header: ', user._id);
    // const userId = user._id;

    // console.log('userId: ', userId);
    const { cart, isDeleted, isUpdated} = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getAllHeaderMain());
        // dispatch(loadUser());
        dispatch(getCart());
    }, [dispatch]);

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        console.log('keyword: ', keyword);
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
        } else {
        }
    };

    const url = 'https://res.cloudinary.com/dx1ecgla5/image/upload/v1670298772/avatars/avt/avt_gpdqfj.jpg';

    // {user ? if (user.avatar.url != '') {
    // } : ''}

    console.log('cart: ', cart);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('container-header')}>
                        {headers.map((header) => (
                            <div className={cx('image')} key={header._id}>
                                <img src={header.images.url} alt="header" />
                            </div>
                        ))}
                        <div className={cx('information')}>
                            <Button to={config.routes.promotion}>
                                <PromotionIcon />
                                <span>Khuyến Mãi</span>
                            </Button>
                            <Button to={config.routes.showroom}>
                                <ShowroomIcon />
                                <span>Hệ thống Showroom </span>
                            </Button>
                            <Button href={'tel:18006867'}>
                                <AdviseIcon />
                                <span>Tư vấn mua hàng: 18006867</span>
                            </Button>
                            <Button href={'tel: 18006865'}>
                                <AdviseIcon />
                                <span>CSKH: 18006865</span>
                            </Button>
                            {/* <Button href={'/'}>
                    <ComputerIcon />
                    <span>Tin công nghệ</span>
                </Button> */}
                            {/* <Button href={'/'}>
                    <BuildIcon />
                    <span>Xây dựng cấu hình</span>
                </Button> */}
                        </div>
                    </div>

                    {scrollHeader ? (
                        <div className={cx('main-navigation-bar')}>
                            <div className={cx('container')}>
                                <div className={cx('content')}>
                                    <div className={cx('logo')}>
                                        <div className={cx('box', 'hover')}>
                                            <Button to={'/'}>
                                                <img src="https://phongvu.vn/phongvu/logo-full.svg" alt="phongvu" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={cx('search')}>
                                        <Tippy
                                            visible={searchResult.length > 0}
                                            interactive
                                            delay={[100, 200]}
                                            offset={[0, 0]}
                                            placement="bottom-start"
                                            render={renderSearch}
                                        >
                                            <form onSubmit={searchSubmitHandler}>
                                                <div className={cx('box', 'hover')}>
                                                    <input
                                                        type="search"
                                                        className={cx('form-control')}
                                                        name="q"
                                                        id="q"
                                                        // placeholder="Tìm kiếm sản phẩm ..."
                                                        required
                                                        onChange={(e) => setKeyword(e.target.value)}
                                                        // style={{ minWidth: '400px' }}
                                                        placeholder="Nhập tên sản phẩm cần tìm"
                                                    />
                                                    <button>
                                                        <FontAwesomeIcon icon={faSearch} />
                                                    </button>
                                                </div>
                                            </form>
                                        </Tippy>
                                    </div>
                                    {(user && (
                                        <Button className={cx('login-logout')}>
                                            <Tippy
                                                hideOnClick={false}
                                                interactive
                                                delay={[100, 200]}
                                                offset={[0, 0]}
                                                placement="bottom"
                                                render={renderLogin}
                                            >
                                                <div className={cx('box', 'hover')}>
                                                    <div className={cx('box_img')}>
                                                        <img
                                                            src={url}
                                                            alt={user.name}
                                                            style={{ width: '36px', height: '36px' }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className={cx('text')}>Xin chào,</div>
                                                        <div className={cx('text')}>{user.name}</div>
                                                    </div>
                                                </div>
                                            </Tippy>
                                        </Button>
                                    )) || (
                                        <Button to={'/login'} className={cx('login-logout')}>
                                            <div className={cx('box', 'hover')}>
                                                <UserIcon />
                                                <div>
                                                    <div className={cx('text')}>Đăng nhập</div>
                                                    <div className={cx('text')}>Đăng Ký</div>
                                                </div>
                                            </div>
                                        </Button>
                                    )}

                                    <Button to={'/cart'} className={cx('cart')}>
                                        <Tippy
                                            inertia
                                            arrow
                                            duration={[100, 200]}
                                            interactive
                                            delay={[100, 200]}
                                            offset={[0, 0]}
                                            placement="bottom-start"
                                            render={renderCart}
                                        >
                                            <div className={cx('box', 'hover')}>
                                                <CartIcon />
                                                <div>
                                                    <div>Giỏ hàng của bạn </div>
                                                    {/* {(cart && (
                                                        <div>({cart.cartItems.length}) sản phẩm </div>
                                                    )) || <div>(0) sản phẩm </div>} */}
                                                </div>
                                            </div>
                                        </Tippy>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className={cx('main-navigation-bar', 'navbar-fixed')}>
                                <div className={cx('container')}>
                                    <div className={cx('content')}>
                                        <div className={cx('logo')}>
                                            <div className={cx('box', 'hover')}>
                                                <div>
                                                    <Button to={'/'}>
                                                        <img src="https://phongvu.vn/phongvu/logo.svg" alt="phongvu" />
                                                    </Button>
                                                </div>
                                                <Tippy
                                                    trigger="click"
                                                    interactive
                                                    delay={[0, 0]}
                                                    offset={[-206, 30]}
                                                    placement="bottom-start"
                                                    render={renderProducts}
                                                >
                                                    <div>
                                                        <Button outline className={cx('nav-btn')}>
                                                            <FontAwesomeIcon icon={faBars} />
                                                            <span>Danh mục sản phẩm</span>
                                                        </Button>
                                                    </div>
                                                </Tippy>
                                            </div>
                                        </div>
                                        <div className={cx('search')}>
                                            <Tippy
                                                visible={searchResult.length > 0}
                                                interactive
                                                delay={[100, 200]}
                                                offset={[0, 0]}
                                                placement="bottom-start"
                                                render={renderSearch}
                                            >
                                                <form onSubmit={searchSubmitHandler}>
                                                    <div className={cx('box', 'hover')}>
                                                        <input
                                                            // className={cx('box_search')}
                                                            type="search"
                                                            className={cx('form-control')}
                                                            name="q"
                                                            id="q"
                                                            // placeholder="Tìm kiếm sản phẩm ..."
                                                            required
                                                            onChange={(e) => setKeyword(e.target.value)}
                                                            placeholder="Nhập tên sản phẩm cần tìm"
                                                        />
                                                        <button>
                                                            <FontAwesomeIcon icon={faSearch} />
                                                        </button>
                                                    </div>
                                                </form>
                                            </Tippy>
                                        </div>
                                        {(user && (
                                            <Button className={cx('login-logout')}>
                                                <Tippy
                                                    hideOnClick={false}
                                                    interactive
                                                    delay={[100, 200]}
                                                    offset={[0, 0]}
                                                    placement="bottom"
                                                    render={renderLogin}
                                                >
                                                    <div className={cx('box', 'hover')}>
                                                        <div className={cx('box_img')}>
                                                            <img
                                                                src={user.avatar.url}
                                                                alt={user.name}
                                                                style={{ width: '36px', height: '36px' }}
                                                            />
                                                        </div>
                                                        <div>
                                                            <div className={cx('text')}>Xin chào,</div>
                                                            <div className={cx('text')}>{user.name}</div>
                                                        </div>
                                                    </div>
                                                </Tippy>
                                            </Button>
                                        )) || (
                                            <Button to={'/login'} className={cx('login-logout')}>
                                                <div className={cx('box', 'hover')}>
                                                    <UserIcon />
                                                    <div>
                                                        <div className={cx('text')}>Đăng nhập</div>
                                                        <div className={cx('text')}>Đăng Ký</div>
                                                    </div>
                                                </div>
                                            </Button>
                                        )}
                                        {/* <div className={cx('notification')}>
                                <Tippy
                                    interactive
                                    delay={[100, 500]}
                                    offset={[0, 0]}
                                    placement="bottom-end"
                                    render={renderNotification}
                                >
                                    <div className={cx('box', 'hover')}>
                                        <span className={cx('number')}>1</span>
                                        <NotificationIcon />
                                    </div>
                                </Tippy>
                            </div> */}
                                        <Button to={'/cart'} className={cx('cart')}>
                                            <Tippy
                                                interactive
                                                delay={[100, 200]}
                                                offset={[0, 0]}
                                                placement="bottom-start"
                                                render={renderCart}
                                            >
                                                <div className={cx('box', 'hover')}>
                                                    <CartIcon />
                                                    <div>
                                                        <div>Giỏ hàng của bạn </div>
                                                        {/* {cartMountResult ? ( */}
                                                        {/* {(cart.cartItems && (
                                                            <div>({cart.cartItems.length}) sản phẩm </div>
                                                        )) || <div>(0) sản phẩm </div>} */}
                                                        {/* ) : (
                                                <div>(0) sản phẩm </div>
                                            )} */}
                                                    </div>
                                                </div>
                                            </Tippy>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('box-header')}></div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Header;
