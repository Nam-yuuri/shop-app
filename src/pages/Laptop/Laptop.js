import classNames from 'classnames/bind';
import styles from './Laptop.module.scss';

import GridLaptop from './GridLaptop';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Laptop() {
    return (
        <div className={cx('Laptop')}>
            <div className={cx('Filter')}>
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
                                    <div className={cx('name-box')}>
                                        <Button to={'/'} className={cx('name-content')}>
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
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Thương hiệu</div>
                                </div>
                                <div className={cx('name-line')}>
                                    <div className={cx('name-box')}>
                                        <Button to={'/'} className={cx('name-content')}>
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
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Thương hiệu</div>
                                </div>
                                <div className={cx('name-line')}>
                                    <div className={cx('name-box')}>
                                        <Button to={'/'} className={cx('name-content')}>
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
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Thương hiệu</div>
                                </div>
                                <div className={cx('name-line')}>
                                    <div className={cx('name-box')}>
                                        <Button to={'/'} className={cx('name-content')}>
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
                            </div>
                            <div className={cx('line-content')}>
                                <div className={cx('title-line')}>
                                    <div className={cx('text-title')}>Thương hiệu</div>
                                </div>
                                <div className={cx('name-line')}>
                                    <div className={cx('name-box')}>
                                        <Button to={'/'} className={cx('name-content')}>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('peoducts')}>
                <GridLaptop />
            </div>
        </div>
    );
}

export default Laptop;
