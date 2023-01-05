import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { confirmAlert } from 'react-confirm-alert';
import classNames from 'classnames/bind';
import styles from './pdf.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, myOrders } from '~/actions/orderAction';
import formatPrice from '~/utils/formatPrice';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Pdf() {
    const { cart, isDeleted, isUpdated, loading } = useSelector((state) => state.cart);

    console.log("cart", cart)

    const columns = [
        {
            field: 'image',
            headerName: 'Hình ảnh',
            minWidth: 100,
            // maxWidth: 100,
            flex: 0.7,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt=""
                    style={{
                        width: '80px',
                        minHeight: '80px',
                        padding: '10px',
                    }}
                />
            ),
        },
        {
            field: 'name',
            headerName: 'Tên sản phẩm',
            minWidth: 280,
            flex: 1,
        },
        // {
        //     field: 'name',
        //     headerName: 'Tên sản phẩm',
        //     minWidth: 280,
        //     flex: 1,
        // },

        {
            field: 'quantity',
            headerName: 'Số lượng',
            type: 'number',
            minWidth: 150,
            flex: 0.5,
            renderCell: (params) => <span>{params.value}</span>,
        },
        {
            field: 'price',
            headerName: 'Giá tiền',
            type: 'number',
            minWidth: 200,
            flex: 0.5,
            renderCell: (params) => <span>{formatPrice(params.value)}</span>,
        },
        {
            field: 'totalPrice',
            headerName: 'Thành tiền',
            minWidth: 150,
            flex: 0.5,
            type: 'number',
            renderCell: (params) => <span>{formatPrice(params.value)}</span>,
        },
    ];

    const rows = [];

    cart && cart.cartItems &&
        cart.cartItems.map((item) => {
            rows.push({
                id: item._id,
                name: item.name,
                image: item.image,
                quantity: item.quantity,
                price: item.priceSale,
                totalPrice: item.priceSale * item.quantity,
            });
        });
    return (
        <div>
            <Button primary large to={config.routes.cart} style={{margin: '10px'}}><FontAwesomeIcon icon={faLeftLong}/> Giỏ hàng</Button>
            <div className={cx('data')} style={{padding: '10px 210px 0'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowsPerPageOptions={[5, 10, 20]}
                    // pagination
                    pageSize={5}
                    disableSelectionOnClick
                    className="productListTable"
                    autoHeight
                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </div>
        </div>
    );
}

export default Pdf;
