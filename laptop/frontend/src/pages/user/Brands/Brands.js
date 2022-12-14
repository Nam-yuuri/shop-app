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

    const [clickCost, setClickCost] = useState(true);

    const [clickColor, setClickColor] = useState(false);

    const [clickGraphic, setClickGraphic] = useState(false);

    const [clickRam, setClickRam] = useState(false);

    const [clickMonitor, setClickMonitor] = useState(false);

    /**
     * !Function
     */

    const handleClickCost = () => {
        setClickCost(!clickCost);
    };

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

    const { loading: brandLoading, error, brands } = useSelector((state) => state.brandDetails);
    const { productsCount, resultPerPage, filteredProductsCount, loading } = useSelector((state) => state.products);

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

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className={cx('brands')}>
                    <div className={cx('href')}>
                        <a href="/" className={cx('home-href')}>
                            <div className={cx('href-text')}>Trang ch???</div>
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
                            <span>S???p x???p</span>
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
                                <span>B??? l???c</span>
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
                                <div className={cx('container-Trademark', 'container-box')}>
                                    <div className={cx('box-header')} onClick={handleClickCost}>
                                        <h5>Kho???ng gi??</h5>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            style={{ transform: clickCost ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </div>
                                    <div
                                        className={cx('Trademark', 'box')}
                                        style={{ height: clickCost ? 'auto' : '0' }}
                                    >
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([0, 10]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 0 && cost[1] === 10}
                                                />
                                                <span>D?????i 10 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([10, 15]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 10 && cost[1] === 15}
                                                />
                                                <span>T??? 10 tri???u - 15 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([15, 20]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 15 && cost[1] === 20}
                                                />
                                                <span>T??? 15 tri???u - 20 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([20, 30]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 20 && cost[1] === 30}
                                                />
                                                <span>T??? 20 tri???u - 30 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([30, 40]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 30 && cost[1] === 40}
                                                />
                                                <span>T??? 30 tri???u - 40 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([40, 50]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 40 && cost[1] === 50}
                                                />
                                                <span>T??? 40 tri???u - 50 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([50, 70]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 50 && cost[1] === 70}
                                                />
                                                <span>T??? 50 tri???u - 70 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([70, 100]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 70 && cost[1] === 100}
                                                />
                                                <span>T??? 70 tri???u - 100 tri???u</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('container-Color', 'container-box')}>
                                    <div className={cx('box-header')} onClick={handleClickColor}>
                                        <h5>M??u s???c</h5>
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
                                                    checked={Color === 'B???c'}
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setColor('B???c');
                                                        } else {
                                                            setColor('');
                                                        }
                                                    }}
                                                />
                                                <span>B???c</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Color === '??en'}
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setColor('??en');
                                                        } else {
                                                            setColor('');
                                                        }
                                                    }}
                                                />
                                                <span>??en</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Color === 'Xa??m'}
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setColor('Xa??m');
                                                        } else {
                                                            setColor('');
                                                        }
                                                    }}
                                                />
                                                <span>Xa??m</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Color === 'Starlight'}
                                                    onChange={() => {}}
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
                                                    checked={Color === 'Tr???ng'}
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setColor('Tr???ng');
                                                        } else {
                                                            setColor('');
                                                        }
                                                    }}
                                                />
                                                <span>Tr???ng</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('container-Graphics', 'container-box')}>
                                    <div className={cx('box-header')} onClick={handleClickGraphic}>
                                        <h5>H??? ??i???u h??nh</h5>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            style={{ transform: clickGraphic ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </div>
                                    <div
                                        className={cx('Graphics', 'box')}
                                        style={{ height: clickGraphic ? 'auto' : '0' }}
                                    >
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Operating_system === 'Mac OS'}
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                        <h5>Dung l?????ng RAM</h5>
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                        <h5>K??ch th?????c m??n h??nh</h5>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            style={{ transform: clickMonitor ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </div>
                                    <div
                                        className={cx('Monitors', 'box')}
                                        style={{ height: clickMonitor ? 'auto' : '0' }}
                                    >
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Monitor === '13.3'}
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                <div className={cx('container-box')} style={{ textAlign: 'center' }}>
                                    <Button
                                        primary
                                        onClick={() => {
                                            setCost([0, 150]);
                                            setColor('');
                                            setOperating_system('');
                                            setRAM('');
                                            setMonitor('');
                                        }}
                                    >
                                        RESET
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('Left', 'laptop')}>
                            <div className={cx('box-left')}>
                                <div className={cx('container-Trademark', 'container-box')}>
                                    <div className={cx('box-header')} onClick={handleClickCost}>
                                        <h5>Kho???ng gi??</h5>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            style={{ transform: clickCost ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </div>
                                    <div
                                        className={cx('Trademark', 'box')}
                                        style={{ height: clickCost ? 'auto' : '0' }}
                                    >
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([0, 10]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 0 && cost[1] === 10}
                                                />
                                                <span>D?????i 10 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([10, 15]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 10 && cost[1] === 15}
                                                />
                                                <span>T??? 10 tri???u - 15 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([15, 20]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 15 && cost[1] === 20}
                                                />
                                                <span>T??? 15 tri???u - 20 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([20, 30]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 20 && cost[1] === 30}
                                                />
                                                <span>T??? 20 tri???u - 30 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([30, 40]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 30 && cost[1] === 40}
                                                />
                                                <span>T??? 30 tri???u - 40 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([40, 50]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 40 && cost[1] === 50}
                                                />
                                                <span>T??? 40 tri???u - 50 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([50, 70]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 50 && cost[1] === 70}
                                                />
                                                <span>T??? 50 tri???u - 70 tri???u</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="price-2"
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setCost([70, 100]);
                                                        } else {
                                                            setCost([0, 151]);
                                                        }
                                                    }}
                                                    checked={cost[0] === 70 && cost[1] === 100}
                                                />
                                                <span>T??? 70 tri???u - 100 tri???u</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('container-Color', 'container-box')}>
                                    <div className={cx('box-header')} onClick={handleClickColor}>
                                        <h5>M??u s???c</h5>
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
                                                    checked={Color === 'B???c'}
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setColor('B???c');
                                                        } else {
                                                            setColor('');
                                                        }
                                                    }}
                                                />
                                                <span>B???c</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Color === '??en'}
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setColor('??en');
                                                        } else {
                                                            setColor('');
                                                        }
                                                    }}
                                                />
                                                <span>??en</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Color === 'Xa??m'}
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setColor('Xa??m');
                                                        } else {
                                                            setColor('');
                                                        }
                                                    }}
                                                />
                                                <span>Xa??m</span>
                                            </label>
                                        </div>
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Color === 'Starlight'}
                                                    onChange={() => {}}
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
                                                    checked={Color === 'Tr???ng'}
                                                    onChange={() => {}}
                                                    onClick={(e) => {
                                                        if (e.target.checked) {
                                                            setColor('Tr???ng');
                                                        } else {
                                                            setColor('');
                                                        }
                                                    }}
                                                />
                                                <span>Tr???ng</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('container-Graphics', 'container-box')}>
                                    <div className={cx('box-header')} onClick={handleClickGraphic}>
                                        <h5>H??? ??i???u h??nh</h5>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            style={{ transform: clickGraphic ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </div>
                                    <div
                                        className={cx('Graphics', 'box')}
                                        style={{ height: clickGraphic ? 'auto' : '0' }}
                                    >
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Operating_system === 'Mac OS'}
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                        <h5>Dung l?????ng RAM</h5>
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                        <h5>K??ch th?????c m??n h??nh</h5>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                            style={{ transform: clickMonitor ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                        />
                                    </div>
                                    <div
                                        className={cx('Monitors', 'box')}
                                        style={{ height: clickMonitor ? 'auto' : '0' }}
                                    >
                                        <div className={cx('check')}>
                                            <label className={cx('label')}>
                                                <input
                                                    type={'checkbox'}
                                                    checked={Monitor === '13.3'}
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                                    onChange={() => {}}
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
                                <div className={cx('container-box')} style={{ textAlign: 'center' }}>
                                    <Button
                                        primary
                                        onClick={() => {
                                            setCost([0, 150]);
                                            setColor('');
                                            setOperating_system('');
                                            setRAM('');
                                            setMonitor('');
                                        }}
                                    >
                                        RESET
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('Right')}>
                            <Grid />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Brands;
