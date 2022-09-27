import classNames from 'classnames/bind';
import styles from './Laptop.module.scss';

import Button from '~/components/Button';
import { Fragment, useEffect, useRef, useState } from 'react';
import { AdvancedFilters, Bands, Chipset, GraphicChip, Mainboard, Trademark } from '~/Data/Asus/Asus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Grid from '~/components/Grid';

const cx = classNames.bind(styles);

function Laptop() {
    const [trademarks, setTrademarks] = useState([]);
    const [chipsets, setChipsets] = useState([]);
    const [mainboards, setMainboards] = useState([]);
    const [graphicChips, setGraphicChips] = useState([]);
    const [bands, setBands] = useState([]);
    const [advancedFilters, setAdvancedFilters] = useState([]);

    const [divHeight, setDivHeight] = useState(false);
    const [presently, setPresently] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            // setDivHeight(ref.current.clientHeight);
            console.log('height: ', ref.current.clientHeight);
            if (ref.current.clientHeight > 40) {
                setDivHeight(true);
            } else {
                setDivHeight(false);
            }

            // console.log('width: ', ref.current.clientWidth);
        }, 0);
    }, []);

    useEffect(() => {
        setTrademarks(Trademark);
        setChipsets(Chipset);
        setMainboards(Mainboard);
        setGraphicChips(GraphicChip);
        setBands(Bands);
        setAdvancedFilters(AdvancedFilters);
    }, []);

    const handlePresently = () => {
        presently ? setPresently(false) : setPresently(true);
    };

    return (
        <div className={cx('Laptop')}>
            <div className={cx('Filter')}>
                <div className={cx('href')}>
                    <a href="/" className={cx('home-href')}>
                        <div className={cx('href-text')}>Trang chủ</div>
                        <div className={cx('href-icon')}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                    </a>
                    <div className={cx('href-text', 'href-text-cart')}>Asus</div>
                </div>
                <div className={cx('container')}>
                    <div className={cx('box')}>
                        <div className={cx('title')}>
                            <div className={cx('text')}>Bộ lọc</div>
                            <div></div>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Thương hiệu</div>
                                </div>
                                <div className={cx('name-line')}>
                                    {trademarks.map((trade) => (
                                        <div className={cx('name-box')} key={trade.id}>
                                            <Button to={'/'} className={cx('name-content')}>
                                                <div className={cx('name-brand')}>{trade.name}</div>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Nhà sản xuất chipset</div>
                                </div>
                                <div className={cx('name-line')}>
                                    {chipsets.map((chip) => (
                                        <div className={cx('name-box')} key={chip.id}>
                                            <Button to={'/'} className={cx('name-content')}>
                                                <div className={cx('name-brand')}>{chip.name}</div>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Series mainboard</div>
                                </div>
                                <div className={cx('name-line')}>
                                    {mainboards.map((main) => (
                                        <div className={cx('name-box')} key={main.id}>
                                            <Button to={'/'} className={cx('name-content')}>
                                                <div className={cx('name-brand')}>{main.name}</div>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Series chip đồ họa</div>
                                </div>
                                <div className={cx('name-line')}>
                                    {graphicChips.map((grap) => (
                                        <div className={cx('name-box')} key={grap.id}>
                                            <Button to={'/'} className={cx('name-content')}>
                                                <div className={cx('name-brand')}>{grap.name}</div>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Băng tần hỗ trợ</div>
                                </div>
                                <div className={cx('name-line')}>
                                    {bands.map((band) => (
                                        <div className={cx('name-box')} key={band.id}>
                                            <Button to={'/'} className={cx('name-content')}>
                                                <div className={cx('name-brand')}>{band.name}</div>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Màu sắc</div>
                                </div>
                                <div className={cx('name-line')}>
                                    {advancedFilters.map((advanced) => (
                                        <div className={cx('name-box')} key={advanced.id}>
                                            <Button to={'/'} className={cx('name-content')}>
                                                <div className={cx('name-brand')}>{advanced.name}</div>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Chuẩn kết nối</div>
                                </div>
                                <div className={cx('name-line')}>
                                    {advancedFilters.map((advanced) => (
                                        <div className={cx('name-box')} key={advanced.id}>
                                            <Button to={'/'} className={cx('name-content')}>
                                                <div className={cx('name-brand')}>{advanced.name}</div>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Chất liệu</div>
                                </div>
                                <div className={cx('name-line')}>
                                    {advancedFilters.map((advanced) => (
                                        <div className={cx('name-box')} key={advanced.id}>
                                            <Button to={'/'} className={cx('name-content')}>
                                                <div className={cx('name-brand')}>{advanced.name}</div>
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('products')}>
                <Grid />
            </div>
        </div>
    );
}

export default Laptop;
