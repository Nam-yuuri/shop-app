import classNames from 'classnames/bind';
import { ShipIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './Grid.module.scss';
import { DataGrid } from '~/Data/Grid/DataGrid';
import Grid from '~/components/Grid';

const cx = classNames.bind(styles);

function Panel() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(DataGrid);
        }, 0);
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    <div className={cx('header')}>
                        <div className={cx('header-text')}>Laptop</div>
                        <Button to={'/laptop'}>
                            <div>Xem tất cả</div>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                    </div>
                </div>
                <Grid />
            </div>
        </div>
    );
}

export default Panel;
