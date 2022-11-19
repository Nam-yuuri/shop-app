import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import './BrandList.scss';
import { getAllBrands } from '~/actions/brandAction';
import Loader from '~/components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

function BrandList() {
    const [wrapperWidth, setWapperWidth] = useState(true);
    // const { product } = useSelector((state) => state.products);
    // console.log(product);

    const [pageSize, setPageSize] = React.useState(5);

    const deleteProductHandler = (id) => {
        // dispatch(deleteProduct(id));
    };

    const dispatch = useDispatch();

    const { loading, brands } = useSelector((state) => state.brands);
    useEffect(() => {
        dispatch(getAllBrands());
    }, [dispatch]);

    console.log('brand: ', brands);

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 200, flex: 0.5 },

        {
            field: 'name',
            headerName: 'Tên thương hiệu',
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
        <div>
            <div className="header-admin">
                <div className="btn-sidebar" style={{ width: wrapperWidth ? '222px' : '35px' }}>
                    <FontAwesomeIcon
                        icon={wrapperWidth ? faChevronLeft : faBars}
                        onClick={() => {
                            setWapperWidth(!wrapperWidth);
                        }}
                    />
                </div>
                <div className="header-sidebar">
                    <h1>Brand</h1>
                    <Link to={config.routes.newBrandList} className="header-sidebar-btn">
                        <FontAwesomeIcon icon={faPlus} />
                        Thêm thương hiệu 
                    </Link>
                </div>
            </div>
            <div>
                {!brands ? (
                    <p>aaaa</p>
                ) : (
                    <div className="BrandList">
                        <div
                            className="sidebar"
                            style={{ width: wrapperWidth ? '222px' : '0px', display: wrapperWidth ? 'block' : 'none' }}
                        >
                            <div className="box-sidebar">
                                <Sidebar />
                            </div>
                        </div>
                        <div className="data">
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
                )}
            </div>
        </div>
    );
}

export default BrandList;
