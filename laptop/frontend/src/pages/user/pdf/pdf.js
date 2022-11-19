import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { confirmAlert } from 'react-confirm-alert';
import classNames from 'classnames/bind';
import styles from './pdf.module.scss'

const cx = classNames.bind(styles)

function Pdf() {
    const columns = [
        {
            field: 'image',
            headerName: 'Hình ảnh',
            minWidth: 100,
            maxWidth: 100,
            flex: 0.7,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt=""
                    style={{
                        width: '80px',
                        height: '80px',
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
       
        {
            field: 'price',
            headerName: 'Giá tiền',
            type: 'number',
            minWidth: 100,
            maxWidth: 100,
            flex: 0.5,
        },
        
        {
            field: 'count',
            headerName: 'Số lượng',
            type: 'number',
            minWidth: 30,
            maxWidth: 50,
            flex: 0.5,
            renderCell: (params) => <span>{params.value}%</span>,
        },
        
        {
            field: 'category',
            headerName: 'Thành tiền',
            minWidth: 150,
            flex: 0.5,
        },
    ];

    const rows = [];
    return (
        <div className={cx('data')}>
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
    );
}

export default Pdf;
