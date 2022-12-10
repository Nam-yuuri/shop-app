import { faAngleDown, faAngleRight, faCaretDown, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Grid from '~/components/Grid';
import styles from './Brands.module.scss';
import {
    chipGraphicsData,
    ColorsData,
    CPUData,
    MonitorsData,
    RamData,
    ResolutionsData,
    TouchData,
    TrademarkData,
} from '~/Data/Brands/Brands';
import { ProductsIcon, ShipIcon } from '~/components/Icons';
import Nouislider from 'react-nouislider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Slider from '@mui/material/Slider';
import formatPrice from '~/utils/formatPrice';
import Button from '~/components/Button';
import './brands.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getBrandProducts } from '~/actions/productAction';
import Loading from '~/components/Loading/Loading';
import { getBrandDetails } from '~/actions/brandAction';

const cx = classNames.bind(styles);

function Brands() {
    const [onWidth, setOnWidth] = useState(false);
    const [value, setValue] = useState([0, 150]);
    const [price, setPrice] = useState([0, 150]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cost, setCost] = useState([0, 150]);
    const [RAM, setRAM] = useState('');
    const [CPU, setCPU] = useState('');
    const [Color, setColor] = useState('');
    const [Monitor, setMonitor] = useState('');
    const [Operating_system, setOperating_system] = useState('');

    const priceHandler = (event, newPrice) => {
        setPrice([value[0], value[1]]);
    };
    const resetHandle = () => {
        setPrice([0, 150]);
        setValue([0, 150]);
    };
    /**
     * !useState
     */

    const [clickColor, setClickColor] = useState(true);

    const [clickGraphic, setClickGraphic] = useState(true);

    const [clickRam, setClickRam] = useState(true);

    const [clickMonitor, setClickMonitor] = useState(true);

    /**
     * !Function
     */

    const handleClickColor = () => {
        setClickColor(!clickColor);
    };

    const handleClickGraphic = () => {
        clickGraphic ? setClickGraphic(false) : setClickGraphic(true);
    };

    const handleClickRam = () => {
        clickRam ? setClickRam(false) : setClickRam(true);
    };

    const handleClickMonitor = () => {
        clickMonitor ? setClickMonitor(false) : setClickMonitor(true);
    };

    /**
     * !console
     */

    // console.log(checkTrademark);
    const num = 10000000;

    const { loading: brandLoading, error, brands } = useSelector((state) => state.brandDetails);
    // const { loading, error: updateError, isUpdated } = useSelector((state) => state.brand);
    // const { loading, products } = useSelector((state) => state.productsBrand);
    // const { productsCount, resultPerPage, filteredProductsCount } = useSelector((state) => state.products);

    const dispatch = useDispatch();
    let navigate = useNavigate();
    let match = useParams();

    const brandId = match.id;
    const id = brandId;
    const keyword = match && match.keyword;

    useEffect(() => {
        dispatch(getBrandDetails(brandId));
        dispatch(getBrandProducts(brandId));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getBrandProducts(id, currentPage, cost, keyword, RAM, CPU, Color, Monitor, Operating_system));
    }, [id, currentPage, cost, keyword, RAM, CPU, Color, Monitor, Operating_system]);

    // const dispatch = useDispatch();
    // let navigate = useNavigate();
    // let match = useParams();

    // const setCurrentPageNo = (e) => {
    //     setCurrentPage(e);
    // };

    // const productId = match.id;

    // const { loading, products } = useSelector((state) => state.productsBrand);

    // console.log('pro: ', products.length);

    // useEffect(() => {
    //     dispatch(getBrandProducts(productId));
    // }, [dispatch]);

    // console.log('RAM: ', products);

    return (
        <div>
            {/* {brandLoading ? (
                <Loading />
            ) : ( */}
            <div className={cx('brands')}>
                <div className={cx('href')}>
                    <a href="/" className={cx('home-href')}>
                        <div className={cx('href-text')}>Trang chủ</div>
                        <div className={cx('href-icon')}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </a>
                    {/* style={{display: 'flex', height: '19.5px'}} */}
                    <div className={cx('text_laptop')}>
                        <div className={cx('href-text', 'href-text-cart')}>Laptop </div>
                        <div className={cx('href-icon')}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </div>
                    <div className={cx('href-text', 'href-text-cart')}>{brands.name}</div>
                </div>
                <div className={cx('header-tablet')}>
                    <div className={cx('sort')}>
                        <span>Sắp xếp</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className={cx('Filter')}>
                        {/* <div className={cx('icon')}>
                    <ProductsIcon />
                </div>
                <span className={cx('stick')}></span> */}
                        <div
                            className={cx('box-filter')}
                            onClick={() => {
                                setOnWidth(true);
                            }}
                        >
                            <span>Bộ lọc</span>
                            <FontAwesomeIcon icon={faFilter} />
                        </div>
                    </div>
                </div>
                <div className={cx('container')}>
                    {onWidth ? (
                        <div
                            className={cx('wall')}
                            onClick={() => {
                                setOnWidth(false);
                            }}
                        ></div>
                    ) : (
                        ''
                    )}
                    <div className={cx('Left', 'tablet')} style={{ width: onWidth ? '80%' : '0' }}>
                        <div className={cx('box-left')}>
                            <div className={cx('Price-range')}>
                                <h5>Khoảng giá</h5>
                                <div className={cx('box-price')}>
                                    <Slider
                                        value={value}
                                        aria-labelledby="range-slider"
                                        onChange={(e) => setValue(e.target.value)}
                                        min={0}
                                        max={151}
                                        valueLabelDisplay="auto"
                                        sx={{ mt: 3, color: '#1435c3' }}
                                    />
                                    <form onSubmit={priceHandler}>
                                        <div className="row" style={{ gap: '0px' }}>
                                            <div className="col-6" style={{ paddingLeft: '0px' }}>
                                                <input
                                                    type="text"
                                                    value={`${formatPrice(value[0] * 1000000)}`}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setPrice([0, 10]);
                                                            // setCategory("");
                                                            // setRam("");
                                                            // setMachineSeries("");
                                                            // setMonitorSize([0, 43]);
                                                        } else {
                                                            setPrice([0, 151]);
                                                        }
                                                    }}
                                                    checked={price[0] === 0 && price[1] === 10}
                                                />
                                            </div>

                                            <div
                                                className="col-6"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    paddingRight: '0px',
                                                }}
                                            >
                                                <input
                                                    type="text"
                                                    value={`${formatPrice(value[1] * 1000000)}`}
                                                    onChange={() => {}}
                                                ></input>
                                            </div>
                                        </div>

                                        <div
                                            className="box-btn-filter"
                                            style={{ display: 'flex', justifyContent: 'space-between' }}
                                        >
                                            <div className="btn-filter">Lọc</div>
                                            <div className="btn-reset" onClick={resetHandle}>
                                                Reset
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className={cx('container-Color', 'container-box')}>
                                <div className={cx('box-header')} onClick={handleClickColor}>
                                    <h5>Màu sắc</h5>
                                    <FontAwesomeIcon
                                        icon={faAngleDown}
                                        style={{ transform: clickColor ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                                <div className={cx('Color', 'box')} style={{ height: clickColor ? 'auto' : '0' }}>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Bạc'}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Bạc');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Bạc</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Đen'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Đen');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Đen</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Xám'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Xám');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Xám</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Starlight'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Starlight');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Starlight</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Trắng'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Trắng');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Trắng</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('container-Graphics', 'container-box')}>
                                <div className={cx('box-header')} onClick={handleClickGraphic}>
                                    <h5>Hệ điều hành</h5>
                                    <FontAwesomeIcon
                                        icon={faAngleDown}
                                        style={{ transform: clickGraphic ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                                <div className={cx('Graphics', 'box')} style={{ height: clickGraphic ? 'auto' : '0' }}>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Operating_system === 'Mac OS'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setOperating_system('Mac OS');
                                                    } else {
                                                        setOperating_system('');
                                                    }
                                                }}
                                            />
                                            <span>Mac OS</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Operating_system === 'Windows'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setOperating_system('Windows');
                                                    } else {
                                                        setOperating_system('');
                                                    }
                                                }}
                                            />
                                            <span>Windows</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Operating_system === 'Linus'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setOperating_system('Linus');
                                                    } else {
                                                        setOperating_system('');
                                                    }
                                                }}
                                            />
                                            <span>Linus</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('container-Rams', 'container-box')}>
                                <div className={cx('box-header')} onClick={handleClickRam}>
                                    <h5>Dung lượng RAM</h5>
                                    <FontAwesomeIcon
                                        icon={faAngleDown}
                                        style={{ transform: clickRam ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                                <div className={cx('Rams', 'box')} style={{ height: clickRam ? 'auto' : '0' }}>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={RAM === '4GB'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setRAM('4GB');
                                                    } else {
                                                        setRAM('');
                                                    }
                                                }}
                                            />
                                            <span>4GB</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={RAM === '8GB'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setRAM('8GB');
                                                    } else {
                                                        setRAM('');
                                                    }
                                                }}
                                            />
                                            <span>8GB</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={RAM === '16GB'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setRAM('16GB');
                                                    } else {
                                                        setRAM('');
                                                    }
                                                }}
                                            />
                                            <span>16GB</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={RAM === '32GB'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setRAM('32GB');
                                                    } else {
                                                        setRAM('');
                                                    }
                                                }}
                                            />
                                            <span>32GB</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('container-Monitors', 'container-box')}>
                                <div className={cx('box-header')} onClick={handleClickMonitor}>
                                    <h5>Kích thước màn hình</h5>
                                    <FontAwesomeIcon
                                        icon={faAngleDown}
                                        style={{ transform: clickMonitor ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                                <div className={cx('Monitors', 'box')} style={{ height: clickMonitor ? 'auto' : '0' }}>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Monitor === '13.3'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setMonitor('13.3');
                                                    } else {
                                                        setMonitor('');
                                                    }
                                                }}
                                            />
                                            <span>13.3"</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Monitor === '13.6'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setMonitor('13.6');
                                                    } else {
                                                        setMonitor('');
                                                    }
                                                }}
                                            />
                                            <span>13.6"</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Monitor === '14'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setMonitor('14');
                                                    } else {
                                                        setMonitor('');
                                                    }
                                                }}
                                            />
                                            <span>14"</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Monitor === '15.6'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setMonitor('15.6');
                                                    } else {
                                                        setMonitor('');
                                                    }
                                                }}
                                            />
                                            <span>15.6"</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('Left', 'laptop')}>
                        <div className={cx('box-left')}>
                            <div className={cx('Price-range')}>
                                <h5>Khoảng giá</h5>
                                <div className={cx('box-price')}>
                                    <Slider
                                        value={value}
                                        aria-labelledby="range-slider"
                                        onChange={(e) => setValue(e.target.value)}
                                        min={0}
                                        max={151}
                                        valueLabelDisplay="auto"
                                        sx={{ mt: 3, color: '#1435c3' }}
                                    />
                                    <form onSubmit={priceHandler}>
                                        <div className="row" style={{ gap: '0px' }}>
                                            <div className="col-6" style={{ paddingLeft: '0px' }}>
                                                <input
                                                    type="text"
                                                    value={`${formatPrice(value[0] * 1000000)}`}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setPrice([0, 10]);
                                                            // setCategory("");
                                                            // setRam("");
                                                            // setMachineSeries("");
                                                            // setMonitorSize([0, 43]);
                                                        } else {
                                                            setPrice([0, 151]);
                                                        }
                                                    }}
                                                    checked={price[0] === 0 && price[1] === 10}
                                                />
                                            </div>

                                            <div
                                                className="col-6"
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    paddingRight: '0px',
                                                }}
                                            >
                                                <input
                                                    type="text"
                                                    value={`${formatPrice(value[1] * 1000000)}`}
                                                    onChange={() => {}}
                                                ></input>
                                            </div>
                                        </div>

                                        <div
                                            className="box-btn-filter"
                                            style={{ display: 'flex', justifyContent: 'space-between' }}
                                        >
                                            <div className="btn-filter">Lọc</div>
                                            <div className="btn-reset" onClick={resetHandle}>
                                                Reset
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div className={cx('container-Trademark', 'container-box')}>
                                    <div className={cx('box-header')} onClick={handleClickTrademark}>
                                        <h5>Series laptop</h5>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            style={{ transform: clickTrademark ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </div>
                                    <div
                                        className={cx('Trademark', 'box')}
                                        style={{ height: clickTrademark ? 'auto' : '0' }}
                                    >
                                        {trademark.map((trade) => (
                                            <div className={cx('check')} key={trade.id}>
                                                <label className={cx('label')}>
                                                    <input
                                                        type={'checkbox'}
                                                        checked={checkTrademark.includes(trade.name)}
                                                        onChange={() => handleCheckTrademark(trade.name)}
                                                    />
                                                    <span>{trade.name}</span>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div> */}
                            <div className={cx('container-Color', 'container-box')}>
                                <div className={cx('box-header')} onClick={handleClickColor}>
                                    <h5>Màu sắc</h5>
                                    <FontAwesomeIcon
                                        icon={faAngleDown}
                                        style={{ transform: clickColor ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                                <div className={cx('Color', 'box')} style={{ height: clickColor ? 'auto' : '0' }}>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Bạc'}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Bạc');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Bạc</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Đen'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Đen');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Đen</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Xám'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Xám');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Xám</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Starlight'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Starlight');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Starlight</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Color === 'Trắng'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setColor('Trắng');
                                                    } else {
                                                        setColor('');
                                                    }
                                                }}
                                            />
                                            <span>Trắng</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('container-Graphics', 'container-box')}>
                                <div className={cx('box-header')} onClick={handleClickGraphic}>
                                    <h5>Hệ điều hành</h5>
                                    <FontAwesomeIcon
                                        icon={faAngleDown}
                                        style={{ transform: clickGraphic ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                                <div className={cx('Graphics', 'box')} style={{ height: clickGraphic ? 'auto' : '0' }}>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Operating_system === 'Mac OS'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setOperating_system('Mac OS');
                                                    } else {
                                                        setOperating_system('');
                                                    }
                                                }}
                                            />
                                            <span>Mac OS</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Operating_system === 'Windows'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setOperating_system('Windows');
                                                    } else {
                                                        setOperating_system('');
                                                    }
                                                }}
                                            />
                                            <span>Windows</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Operating_system === 'Linus'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setOperating_system('Linus');
                                                    } else {
                                                        setOperating_system('');
                                                    }
                                                }}
                                            />
                                            <span>Linus</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('container-Rams', 'container-box')}>
                                <div className={cx('box-header')} onClick={handleClickRam}>
                                    <h5>Dung lượng RAM</h5>
                                    <FontAwesomeIcon
                                        icon={faAngleDown}
                                        style={{ transform: clickRam ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                                <div className={cx('Rams', 'box')} style={{ height: clickRam ? 'auto' : '0' }}>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={RAM === '4GB'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setRAM('4GB');
                                                    } else {
                                                        setRAM('');
                                                    }
                                                }}
                                            />
                                            <span>4GB</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={RAM === '8GB'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setRAM('8GB');
                                                    } else {
                                                        setRAM('');
                                                    }
                                                }}
                                            />
                                            <span>8GB</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={RAM === '16GB'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setRAM('16GB');
                                                    } else {
                                                        setRAM('');
                                                    }
                                                }}
                                            />
                                            <span>16GB</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={RAM === '32GB'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setRAM('32GB');
                                                    } else {
                                                        setRAM('');
                                                    }
                                                }}
                                            />
                                            <span>32GB</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('container-Monitors', 'container-box')}>
                                <div className={cx('box-header')} onClick={handleClickMonitor}>
                                    <h5>Kích thước màn hình</h5>
                                    <FontAwesomeIcon
                                        icon={faAngleDown}
                                        style={{ transform: clickMonitor ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </div>
                                <div className={cx('Monitors', 'box')} style={{ height: clickMonitor ? 'auto' : '0' }}>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Monitor === '13.3'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setMonitor('13.3');
                                                    } else {
                                                        setMonitor('');
                                                    }
                                                }}
                                            />
                                            <span>13.3"</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Monitor === '13.6'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setMonitor('13.6');
                                                    } else {
                                                        setMonitor('');
                                                    }
                                                }}
                                            />
                                            <span>13.6"</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Monitor === '14'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setMonitor('14');
                                                    } else {
                                                        setMonitor('');
                                                    }
                                                }}
                                            />
                                            <span>14"</span>
                                        </label>
                                    </div>
                                    <div className={cx('check')}>
                                        <label className={cx('label')}>
                                            <input
                                                type={'checkbox'}
                                                checked={Monitor === '15.6'}
                                                onClick={(e) => {
                                                    if (e.target.checked) {
                                                        setMonitor('15.6');
                                                    } else {
                                                        setMonitor('');
                                                    }
                                                }}
                                            />
                                            <span>15.6"</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('Right')}>
                        <Grid />
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    );
}

export default Brands;
