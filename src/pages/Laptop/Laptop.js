import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Fragment, useEffect, useRef, useState } from 'react';
import Button from '~/components/Button';
import styles from './Laptop.module.scss';

const cx = classNames.bind(styles);

function Laptop() {
    const [divHeight, setDivHeight] = useState(false);
    const [presently, setPresently] = useState(false);

    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            // setDivHeight(ref.current.clientHeight);
            // console.log('height: ', ref.current.clientHeight);
            if (ref.current.clientHeight > 35) {
                setDivHeight(true);
            } else {
                setDivHeight(false);
            }

            // console.log('width: ', ref.current.clientWidth);
        }, 3000);
    }, []);

    const handlePresently = () => {
        presently ? setPresently(false) : setPresently(true);
    };

    return (
        <div className={cx('Laptop')}>
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
                            <div className={cx('name-line')} style={{ height: presently ? '100%' : '35px'} }>
                                <div className={cx('name-box')} ref={ref}>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>ACER</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>APPLE</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>ASUS</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>Avita</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>Dell</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>GIGABYTE</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>HP</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>Huawei</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>Lenovo</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MICROSOFT</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MSI1</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MSI2</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MSI3</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MSI4</div>
                                    </Button>
                                </div>
                            </div>
                            {divHeight ? (
                                <div className={cx('btn')} onClick={handlePresently}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            ) : (
                                Fragment
                            )}
                        </div>
                        <div className={cx('line-content')}>
                            <div className={cx('title-line')}>
                                <div className={cx('text-title')}>Thương hiệu</div>
                            </div>
                            <div className={cx('name-line')} style={{ height: presently ? '100%' : '35px'} }>
                                <div className={cx('name-box')} ref={ref}>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>ACER</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>APPLE</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>ASUS</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>Avita</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>Dell</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>GIGABYTE</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>HP</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>Huawei</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>Lenovo</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MICROSOFT</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MSI1</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MSI2</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MSI3</div>
                                    </Button>
                                    <Button to={''} className={cx('name-content')}>
                                        <div className={cx('name-brand')}>MSI4</div>
                                    </Button>
                                </div>
                            </div>
                            {divHeight ? (
                                <div className={cx('btn')} onClick={handlePresently}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            ) : (
                                Fragment
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Laptop;
