import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Products.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import NotificationItem from '~/components/layout/components/PreviewItem/NotificationItem';

const cx = classNames.bind(styles);

function ProductItem() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts([
                {
                    id: 1,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/XZbKOJAWFP2B84j0orH9mo6k8h6W2Rm3TkapjzI-n2O0Fd6jc2diNEyfRWoetc59LWtqh1VPGS3iRGTtvZ6IimcX0oZBsbKa=rw',
                    name: 'Laptop',
                },
                {
                    id: 2,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/E7coVNI7mvCGp5GASzte71-stIZAYet_sozvQ0A1D_GJfvW1IFJGzymplqvm4A5upZV6ONPQtjgloVYzpHSG09lmQBrEDLU=rw',
                    name: 'Sản phẩm Apple',
                },
                {
                    id: 3,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/Y7KEp2iUC1syVaF1SQuQ8ZPCLu8PVhCKqadoVKlI8ON-vKqxyvi0EbgM00Ky8Zb_wIcl9Q8HTLZkQj_MuTzqyJhGuLJz8mFTqw=rw',
                    name: 'PC - Máy tính bộ',
                },
                {
                    id: 4,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/iRXHBhcy0POD2QZ8HdjIsEhi_PyXoTkDja7HNcASAffs8SFIDCpibFnhDOYLSOtLEFMFrUMTl6LAG9bTBjLX=rw',
                    name: 'PC - Màn hình máy tính',
                },
                {
                    id: 5,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/qtC62XnXkTsyJbMok7Z7Uu5GOPvhqslzU5YscZZ0HvorTWRs0Qg5s8gWU6l6CTcmc-pQA2y1myJCZ92t9VDq=rw',
                    name: 'PC - Linh kiện máy tính',
                },
                {
                    id: 6,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/dkzFFaKYmPLLkPnC-cyefC1u1Qh0Iy_6Loz7adsbIMs-KAK8FA_PwUOklM3gEppESc1uSeaTa63U4Vejifo=rw',
                    name: 'PC - Phụ kiện',
                },
                {
                    id: 7,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/qtC62XnXkTsyJbMok7Z7Uu5GOPvhqslzU5YscZZ0HvorTWRs0Qg5s8gWU6l6CTcmc-pQA2y1myJCZ92t9VDq=rw',
                    name: 'PC - Game & Stream',
                },
                {
                    id: 8,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/dkzFFaKYmPLLkPnC-cyefC1u1Qh0Iy_6Loz7adsbIMs-KAK8FA_PwUOklM3gEppESc1uSeaTa63U4Vejifo=rw',
                    name: 'Điện thoại & phụ kiện',
                },
                {
                    id: 9,
                    to: 'laptop',
                    img: 'https://lh3.googleusercontent.com/qtC62XnXkTsyJbMok7Z7Uu5GOPvhqslzU5YscZZ0HvorTWRs0Qg5s8gWU6l6CTcmc-pQA2y1myJCZ92t9VDq=rw',
                    name: 'Máy ảnh - Máy quay phim',
                },
            ]);
        }, 0);
    }, []);

    const renderNotification = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <NotificationItem />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {products.map((product) => (
                    <div key={product.id}>
                        <Tippy
                            interactive
                            delay={[100, 200]}
                            offset={[0, -3]}
                            placement="right"
                            render={renderNotification}
                        >
                            <div>
                                <Button to={product.to} className={cx('box')}>
                                    <div className={cx('content')}>
                                        <img src={product.img} alt="" />
                                        <span>{product.name}</span>
                                    </div>
                                </Button>
                            </div>
                        </Tippy>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductItem;
