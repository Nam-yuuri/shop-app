import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Sidebar from '../../Sidebar';
import './BrandList.scss'
function BrandList() {
    const { product } = useSelector((state) => state.products);
    console.log(product);

    const [pageSize, setPageSize] = React.useState(5);

    const deleteProductHandler = (id) => {
        // dispatch(deleteProduct(id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 200, flex: 0.5 },

        {
            field: 'name',
            headerName: 'Tên sản phẩm',
            minWidth: 280,
            flex: 1,
        },
        {
            field: 'stock',
            headerName: 'Kho hàng',
            type: 'number',
            minWidth: 70,
            flex: 0.3,
        },
        {
            field: 'price',
            headerName: 'Giá tiền',
            type: 'number',
            minWidth: 150,
            flex: 0.5,
        },
        {
            field: 'discountActive',
            headerName: 'Đang giảm giá',
            minWidth: 150,
            flex: 0.3,
            renderCell: (params) =>
                params.value ? <span className="greenColor">Có</span> : <span className="redColor">Không</span>,
        },
        {
            field: 'discountPercent',
            headerName: 'Giảm giá',
            type: 'number',
            minWidth: 130,
            flex: 0.5,
            renderCell: (params) => <span>{params.value}%</span>,
        },
        {
            field: 'image',
            headerName: 'Hình ảnh',
            minWidth: 200,
            flex: 0.7,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt=""
                    style={{
                        width: '45px',
                        height: '45px',
                    }}
                />
            ),
        },
        {
            field: 'category',
            headerName: 'Danh mục',
            minWidth: 150,
            flex: 0.5,
        },
        {
            field: 'actions',
            flex: 0.3,
            headerName: 'Actions',
            minWidth: 150,
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <React.Fragment>
                        <Link to={`/admin/product/${params.getValue(params.id, 'id')}`}>
                            <EditIcon />
                        </Link>

                        <Button
                            onClick={() => {
                                confirmAlert({
                                    title: 'Xác nhận',
                                    message: 'Bạn có muốn xóa sản phẩm này',
                                    buttons: [
                                        {
                                            label: 'Có',
                                            onClick: () => {
                                                deleteProductHandler(params.getValue(params.id, 'id'));
                                            },
                                        },
                                        {
                                            label: 'Không',
                                            onClick: () => {
                                                return;
                                            },
                                        },
                                    ],
                                });
                            }}
                        >
                            <DeleteIcon />
                        </Button>
                    </React.Fragment>
                );
            },
        },
    ];

    const rows = [];
    return (
        <div className='BrandList'>
            <div className="sidebar">
                <div className='box-sidebar'>
                    <Sidebar />
                </div>
            </div>
            <div className='data'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    // pageSize={10}
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

export default BrandList;
