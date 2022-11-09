import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

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

    const user = null;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-header')}>
                <div className={cx('image')}>
                    <img
                        src="https://lh3.googleusercontent.com/zJfGHn1l8tFpbl6pz9S8UERiPTwb3me4DVKSOpKIDbxrhJXIoaxrhpFI_bt3nqkr5Fx8_MyvEtaYVBzGJCyZ75V0ndIdTuNswA=w1920-rw"
                        alt=""
                    />
                </div>
                <div className={cx('information')}>
                    <Button href={'/'}>
                        <PromotionIcon />
                        <span>Khuyến Mãi</span>
                    </Button>
                    <Button href={'/'}>
                        <ShowroomIcon />
                        <span>Hệ thống Showroom</span>
                    </Button>
                    <Button href={'/'}>
                        <AdviseIcon />
                        <span>Tư vấn mua hàng: 18006867</span>
                    </Button>
                    <Button href={'/'}>
                        <AdviseIcon />
                        <span>CSKH: 18006865</span>
                    </Button>
                    <Button href={'/'}>
                        <ComputerIcon />
                        <span>Tin công nghệ</span>
                    </Button>
                    <Button href={'/'}>
                        <BuildIcon />
                        <span>Xây dựng cấu hình</span>
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
                                    <div className={cx('box', 'hover')}>
                                        <input placeholder="Nhập từ khóa cần tìm" />
                                        <button>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </div>
                                </Tippy>
                            </div>
                            {user ? (
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
                                            <div>
                                                <img
                                                    src={user.result.imageUrl}
                                                    alt={user.result.name}
                                                    style={{ width: '36px', height: '36px' }}
                                                />
                                            </div>
                                            <div>
                                                <div className={cx('text')}>Xin chào,</div>
                                                <div className={cx('text')}>{user.result.name}</div>
                                            </div>
                                        </div>
                                    </Tippy>
                                </Button>
                            ) : (
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
                                            {/* {cartMountResult ? ( */}
                                            <div>({cartMountResult}) sản phẩm </div>
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
                                        <div className={cx('box', 'hover')}>
                                            <input placeholder="Nhập từ khóa cần tìm" />
                                            <button>
                                                <FontAwesomeIcon icon={faSearch} />
                                            </button>
                                        </div>
                                    </Tippy>
                                </div>
                                {user ? (
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
                                                <div>
                                                    <img
                                                        src={user.result.imageUrl}
                                                        alt={user.result.name}
                                                        style={{ width: '36px', height: '36px' }}
                                                    />
                                                </div>
                                                <div>
                                                    <div className={cx('text')}>Xin chào,</div>
                                                    <div className={cx('text')}>{user.result.name}</div>
                                                </div>
                                            </div>
                                        </Tippy>
                                    </Button>
                                ) : (
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
                                                <div>({cartMountResult}) sản phẩm </div>
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
    );
}

export default Header;
