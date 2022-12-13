import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useEffect } from 'react';
import HeaderHome from './components/Header/Header';
import ContainerHome from './components/container/Container';
import axios from 'axios';
import { ImportExportOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

function Home({ children }) {

    return (
        <div className={cx('container')} style={{maxWidth: '100%'}}>
            <div className={cx('wrapper')}>
                <HeaderHome />
                {/* <div className="container">
                    <div className="content">{children}</div>
                </div> */}
                <ContainerHome />
            </div>
        </div>
    );
}

export default Home;
