import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import {
    AdviseIcon,
    CartIcon,
    PromotionIcon,
    ShowroomIcon,
    UserIcon,
} from '~/components/Icons';
import styles from './Header.module.scss';
import CartItem from '../PreviewItem/CartItem';
import CartItemValue from '../PreviewItem/CartItemValue';
import { useEffect, useState } from 'react';
import SearchItem from '../PreviewItem/SearchItem';
import ProductItem from '../PreviewItem/Products';
import LoginItem from '../PreviewItem/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBanners, getAllBannersMain } from '~/actions/bannerAction';
import config from '~/config';
import { getAllHeaderMain, getAllHeaders } from '~/actions/headerAction';
import { getAllUsers, getUserDetails, loadUser } from '~/actions/userAction';
import { Link, useHistory, useNavigate, useParams } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
import { getCart } from '~/actions/cartAction';
import { Alert, Snackbar } from '@mui/material';
const cx = classNames.bind(styles);

function Header() {
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

    const [searchResult, setSearchResult] = useState([]);
    const [loginResult, setLoginResult] = useState('');
    const [cartMountResult, setCartMountResult] = useState(0);
    const [scrollHeader, setScrollHeader] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    let match = useParams();

    const { headers } = useSelector((state) => state.headersMain);

    const { isAuthenticated, user, loading } = useSelector((state) => state.user);

    const { cart, isDeleted, isUpdated } = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getAllHeaderMain());
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

    const handleScroll = () => {
        if (window.scrollY >= 99) {
            setScrollHeader(false);
        } else {
            setScrollHeader(true);
        }
    };

    window.addEventListener('scroll', handleScroll);

    const renderCart = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>{cart ? <CartItemValue /> : <CartItem />}</PopperWrapper>
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

    const [keyword, setKeyword] = useState('');

    const url = 'https://res.cloudinary.com/dx1ecgla5/image/upload/v1670298772/avatars/avt/avt_gpdqfj.jpg';

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className={cx('wrapper')}>
                    <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
                        <Alert onClose={handleCloseError} severity="warning" sx={{ width: '100%', fontSize: '0.85em' }}>
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
                    <div className={cx('container-header')}>
                        {headers &&
                            headers.map((header) => (
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
                                                    {cart ? (
                                                        <div>({cart.cartItems.length}) sản phẩm</div>
                                                    ) : (
                                                        <div>(0) sản phẩm</div>
                                                    )}
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
                                                            type="search"
                                                            className={cx('form-control')}
                                                            name="q"
                                                            id="q"
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
                                                        {cart ? (
                                                            <div>({cart.cartItems.length}) sản phẩm</div>
                                                        ) : (
                                                            <div>(0) sản phẩm</div>
                                                        )}
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
