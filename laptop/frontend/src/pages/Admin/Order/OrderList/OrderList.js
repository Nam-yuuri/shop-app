import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Avatar, Button, Snackbar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import '../../Admin.scss';
import './OrderList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { deleteHeader, getAllHeaders } from '~/actions/headerAction';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { clearErrors, deleteUser, getAllUsers } from '~/actions/userAction';
import { DELETE_USER_RESET } from '~/constants/userConstants';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Loading from '~/components/Loading/Loading';
import { deleteOrder, getAllOrders } from '~/actions/orderAction';
import { DELETE_ORDER_RESET } from '~/constants/orderConstants';
import formatPrice from '~/utils/formatPrice';
function OrderList() {
    const [openError, setOpenError] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);
    const [errorAlert, setErrorAlert] = React.useState('');
    const [successAlert, setSuccessAlert] = React.useState('');

    const [wrapperWidth, setWapperWidth] = useState(true);
    const [pageSize, setPageSize] = React.useState(10);

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

    const [open, setOpen] = React.useState(true);
    const { user } = useSelector((state) => state.user);
    const { error, orders, loading } = useSelector((state) => state.allOrders);

    const { error: deleteError, isDeleted } = useSelector((state) => state.order);

    const dispatch = useDispatch();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleHistory = (his) => {
        // history.push(`/admin/${his}`);
    };

    const deleteOrderHandler = (id) => {
        dispatch(deleteOrder(id));
    };

    React.useEffect(() => {
        if (error) {
            setOpenError(true);
            setErrorAlert(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            setOpenError(true);
            setErrorAlert(deleteError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            // alert("Xoá đơn hàng thành công");
            setOpenSuccess(true);
            setSuccessAlert('Xoá đơn hàng thành công');
            // history.push('/admin/orders');
            dispatch({ type: DELETE_ORDER_RESET });
        }

        dispatch(getAllOrders());
    }, [dispatch, error, deleteError, isDeleted]);

    

    const columns = [
        { field: 'id', headerName: 'Order ID', minWidth: 270, flex: 1 },

        {
            field: 'updatedAt',
            headerName: 'Ngày đặt hàng',
            minWidth: 150,
            flex: 0.5,
            renderCell: (params) => <span>{params.value.split('T')[0]}</span>,
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            minWidth: 150,
            flex: 0.5,
            cellClassName: (params) => {
                return params.getValue(params.id, 'status') === 'Delivered' ? 'greenColor' : 'redColor';
            },
        },
        {
            field: 'itemsQty',
            headerName: 'Số lượng sản phẩm',
            type: 'number',
            minWidth: 100,
            flex: 0.4,
            renderCell: (params) => <span>{params.value}</span>,
        },

        {
            field: 'amount',
            headerName: 'Tổng tiền',
            type: 'number',
            minWidth: 200,
            flex: 0.5,
            renderCell: (params) => <span>{formatPrice(params.value)}</span>,
        },

        {
            field: 'actions',
            flex: 0.3,
            headerName: 'Actions',
            minWidth: 100,
            maxWidth: 100,
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <React.Fragment>
                        <div className="box-Action-admin">
                            <Link to={`/admin/OrderList/updateOrder/${params.getValue(params.id, 'id')}`}>
                                <EditIcon color="info" />
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
                                                    deleteOrderHandler(params.getValue(params.id, 'id'));
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
                                <DeleteIcon color="error" />
                            </Button>
                        </div>
                    </React.Fragment>
                );
            },
        },
    ];

    const rows = [];

    orders &&
        orders.forEach((item) => {
            rows.push({
                id: item._id,
                itemsQty: item.orderItems.length,
                amount: item.totalPrice,
                status: item.orderStatus,
                updatedAt: item.updatedAt,
            });
        });

    return (
        <div>
            {loading ? (
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
                            <h1>Tài khoản </h1>
                            {/* <Link to={config.routes.newHeader} className="header-sidebar-btn">
                    <FontAwesomeIcon icon={faPlus} />
                    Thêm header
                </Link> */}
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
                </div>
            )}
        </div>
    );
}

export default OrderList;
