import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import './ProductList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { deleteProduct, getAdminProduct } from '~/actions/productAction';
import { getAllBanners } from '~/actions/bannerAction';
import formatPrice from '~/utils/formatPrice';
function ProductList() {
    const [pageSize, setPageSize] = React.useState(5);

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id));
        window.location.reload();
    };

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.productsAdmin);
    useEffect(() => {
        dispatch(getAdminProduct());
    }, [dispatch]);

    console.log('products: ', products);

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 100, maxWidth: 150, flex: 0.5 },

        {
            field: 'name',
            headerName: 'Tên sản phẩm',
            minWidth: 300,
            flex: 1,
        },
        {
            field: 'Stock',
            headerName: 'Kho hàng',
            type: 'number',
            minWidth: 100,
            flex: 0.3,
            renderCell: (params) => <span>{params.value}</span>,
        },
        {
            field: 'cost',
            headerName: 'Giá tiền',
            type: 'number',
            minWidth: 100,
            flex: 0.5,
            renderCell: (params) => <span>{formatPrice(params.value)}</span>,
        },
        {
            field: 'Status_promotional',
            headerName: 'Đang giảm giá',
            minWidth: 100,
            flex: 0.3,
            renderCell: (params) =>
                params.value ? <span className="greenColor">Có</span> : <span className="redColor">Không</span>,
        },
        {
            field: 'promotional',
            headerName: 'Giảm giá(%)',
            type: 'number',
            minWidth: 80,
            flex: 0.3,
            renderCell: (params) => <span>{params.value}</span>,
        },
        {
            field: 'image',
            headerName: 'Hình ảnh',
            minWidth: 50,
            maxWidth: 100,
            flex: 0.7,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt=""
                    style={{
                        width: '45px',
                        height: '45px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
            ),
        },
        {
            field: 'gift_images',
            headerName: 'Quà',
            minWidth: 50,
            maxWidth: 70,
            flex: 0.7,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt=""
                    style={{
                        width: '45px',
                        height: '45px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
            ),
        },
        {
            field: 'gift_image_name',
            headerName: 'Tên quà',
            type: 'number',
            minWidth: 0,
            flex: 0.5,
        },
        {
            field: 'brand',
            headerName: 'Thương hiệu',
            minWidth: 80,
            flex: 0.5,
        },
        {
            field: 'actions',
            flex: 0.3,
            headerName: 'Actions',
            minWidth: 100,
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <React.Fragment>
                        <div className="box-Action-admin">
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
                        </div>
                    </React.Fragment>
                );
            },
        },
    ];

    const rows = [];

    products &&
        products.forEach((item) => {
            rows.push({
                id: item._id,
                name: item.name,
                Stock: item.Stock,
                cost: item.cost,
                promotional: item.promotional,
                Status_promotional: item.Status_promotional,
                image: item.images[0].url,
                brand: item.brand.name,
                gift_image_name: item.gift_image_name,
                gift_images: item.gift_images[0].url,
            });
        });

    const [wrapperWidth, setWapperWidth] = useState(true);
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
                    <h1>Sản phẩm </h1>
                    <Link to={config.routes.newProduct} className="header-sidebar-btn">
                        <FontAwesomeIcon icon={faPlus} />
                        Thêm sản phẩm
                    </Link>
                </div>
            </div>
            <div className="productList">
                <div>
                    <div
                        className="sidebar"
                        style={{ width: wrapperWidth ? '222px' : '0px', display: wrapperWidth ? 'block' : 'none' }}
                    >
                        <div className="box-sidebar">
                            <Sidebar />
                        </div>
                    </div>
                </div>
                <div className="data">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={pageSize}
                        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                        rowsPerPageOptions={[5, 10, 20]}
                        pageSize={10}
                        pagination
                        disableSelectionOnClick
                        className="productListTable"
                        autoHeight
                        components={{
                            Toolbar: GridToolbar,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductList;
