import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Avatar, Button, Snackbar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import './ProductList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { clearErrors, deleteProduct, getAdminProduct } from '~/actions/productAction';
import { getAllBanners } from '~/actions/bannerAction';
import formatPrice from '~/utils/formatPrice';
import { useNavigate, useParams } from 'react-router-dom';
import { DELETE_PRODUCT_RESET } from '~/constants/productConstants';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import Loading from '~/components/Loading/Loading';
function ProductList() {
    const [pageSize, setPageSize] = React.useState(20);
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenError(false);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSuccess(false);
    };

    const deleteProductHandler = (id) => {
        dispatch(deleteProduct(id));
    };

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const { loading, error, products } = useSelector((state) => state.productsAdmin);
    const { loading: loadingg, error: deleteError, isDeleted } = useSelector((state) => state.product);

    React.useEffect(() => {
        if (error) {
            setOpenError(true);
            setErrorAlert(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            setOpenError(true);
            setErrorAlert(deleteError);
            dispatch(clearErrors);
        }

        if (isDeleted) {
            Swal.fire('Th??nh c??ng!', 'X??a s???n ph???m th??nh c??ng!', 'success');
            dispatch({ type: DELETE_PRODUCT_RESET });
        }

        dispatch(getAdminProduct());
    }, [dispatch, error, deleteError, navigate, isDeleted]);

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 100, maxWidth: 150, flex: 0.5 },

        {
            field: 'name',
            headerName: 'T??n s???n ph???m',
            minWidth: 300,
            flex: 1,
        },
        {
            field: 'Stock',
            headerName: 'Kho h??ng',
            type: 'number',
            minWidth: 100,
            flex: 0.3,
            renderCell: (params) => <span>{params.value}</span>,
        },
        {
            field: 'cost',
            headerName: 'Gi?? ti???n',
            type: 'number',
            minWidth: 100,
            flex: 0.5,
            renderCell: (params) => <span>{formatPrice(params.value)}</span>,
        },
        {
            field: 'Status_promotional',
            headerName: '??ang gi???m gi??',
            minWidth: 100,
            flex: 0.3,
            renderCell: (params) =>
                params.value ? <span className="greenColor">C??</span> : <span className="redColor">Kh??ng</span>,
        },
        {
            field: 'promotional',
            headerName: 'Gi???m gi??(%)',
            type: 'number',
            minWidth: 80,
            flex: 0.3,
            renderCell: (params) => <span>{params.value}</span>,
        },
        {
            field: 'image',
            headerName: 'H??nh ???nh',
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
            headerName: 'Qu??',
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
        // {
        //     field: 'gift_image_name',
        //     headerName: 'T??n qu??',
        //     type: 'number',
        //     minWidth: 0,
        //     flex: 0.5,
        // },
        {
            field: 'brand',
            headerName: 'Th????ng hi???u',
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
                            <Link to={`/admin/ProductList/UpdateProduct/${params.getValue(params.id, 'id')}`}>
                                <EditIcon />
                            </Link>

                            <Button
                                onClick={() => {
                                    confirmAlert({
                                        title: 'X??c nh???n',
                                        message: 'B???n c?? mu???n x??a s???n ph???m n??y',
                                        buttons: [
                                            {
                                                label: 'C??',
                                                onClick: () => {
                                                    deleteProductHandler(params.getValue(params.id, 'id'));
                                                },
                                            },
                                            {
                                                label: 'Kh??ng',
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
            {loadingg ? (
                <Loading />
            ) : (
                <div>
                    <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
                        <Alert onClose={handleCloseError} severity="warning" sx={{ width: '100%', fontSize: '0.85em' }}>
                            {errorAlert}
                        </Alert>
                    </Snackbar>
                    <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                        <Alert
                            onClose={handleCloseSuccess}
                            severity="success"
                            sx={{ width: '100%', fontSize: '0.85em' }}
                        >
                            {successAlert}
                        </Alert>
                    </Snackbar>
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
                            <h1>S???n ph???m </h1>
                            <Link to={config.routes.newProduct} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faPlus} />
                                Th??m s???n ph???m
                            </Link>
                        </div>
                    </div>
                    <div className="productList">
                        <div>
                            <div
                                className="sidebar"
                                style={{
                                    width: wrapperWidth ? '222px' : '0px',
                                    display: wrapperWidth ? 'block' : 'none',
                                }}
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
                                // pageSize={10}
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
            )}
        </div>
    );
}

export default ProductList;
