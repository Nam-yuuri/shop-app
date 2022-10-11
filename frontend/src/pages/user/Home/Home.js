import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useEffect } from 'react';

import HeaderHome from './components/Header/Header';
import ContainerHome from './components/container/Container';
import axios from 'axios';

const cx = classNames.bind(styles);

function Home({ children }) {

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => console.log(res))

    },[])

    return (
        <div className={cx('container')}>
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
