import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useEffect } from 'react';
import HeaderHome from './components/Header/Header';
import ContainerHome from './components/container/Container';
import axios from 'axios';
import { ImportExportOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
    // let navigate = useNavigate();
    
    // const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    // console.log('isAuthenticated', isAuthenticated);

    // useEffect(() => {
    //     // setTimeout(() => {
    //     if (isAuthenticated === 'false') {
    //         navigate('/login');
    //     }
    //     // }, 0)
    // }, [navigate]);
    return (
        <div className={cx('container')} style={{ maxWidth: '100%' }}>
            <div className={cx('wrapper')}>
                <HeaderHome />
                <ContainerHome />
            </div>
        </div>
    );
}

export default Home;
