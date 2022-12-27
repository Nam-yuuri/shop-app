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
import './UserList.scss';
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
function UserList() {
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

    const [wrapperWidth, setWapperWidth] = useState(true);
    // const { product } = useSelector((state) => state.products);
    // console.log(product);

    const [pageSize, setPageSize] = React.useState(10);

    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id));
        // window.location.reload();
    };

    const dispatch = useDispatch();

    // const { user } = useSelector((state) => state.user);
    const { error, users, loading } = useSelector((state) => state.allUsers);
    const { error: deleteError, isDeleted, message } = useSelector((state) => state.profile);
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    useEffect(() => {
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
            setOpenSuccess(true);
            setSuccessAlert(message);
            // history.push('/admin/users');
            Swal.fire('Thành công!', 'Xóa tài khoản thành công!', 'success');
            dispatch({ type: DELETE_USER_RESET });
        }

        dispatch(getAllUsers());
    }, [dispatch, error, deleteError, isDeleted, message]);
    // console.log('user: ', users);

    const columns = [
        { field: 'id', headerName: 'User ID', minWidth: 180, flex: 0.8 },

        {
            field: 'email',
            headerName: 'Email',
            minWidth: 200,
            flex: 1,
        },
        {
            field: 'name',
            headerName: 'Họ tên',
            minWidth: 150,
            flex: 0.5,
        },

        {
            field: 'role',
            headerName: 'Quyền',
            // type: "number",
            minWidth: 150,
            flex: 0.3,
            cellClassName: (params) => {
                return params.getValue(params.id, 'role') === 'admin' ? 'redColor' : 'greenColor';
            },
        },
        // {
        //     field: 'avatar',
        //     headerName: 'Hình ảnh',
        //     minWidth: 100,
        //     maxWidth: 100,
        //     flex: 0.8,
        //     renderCell: (params) => (
        //         <img
        //             src={params.value}
        //             alt=""
        //             style={{
        //                 width: '45px',
        //                 height: '45px',
        //                 marginLeft: 'auto',
        //                 marginRight: 'auto',
        //             }}
        //         />
        //     ),
        // },

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
                            <Link to={`/admin/UserList/updateUser/${params.getValue(params.id, 'id')}`}>
                                <EditIcon />
                            </Link>

                            <Button
                                onClick={() => {
                                    confirmAlert({
                                        title: 'Xác nhận',
                                        message: 'Bạn có muốn xóa người dùng này?',
                                        buttons: [
                                            {
                                                label: 'Có',
                                                onClick: () => {
                                                    deleteUserHandler(params.getValue(params.id, 'id'));
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

    users &&
        users.forEach((item) => {
            rows.push({
                id: item._id,
                role: item.role,
                email: item.email,
                name: item.name,
                avatar: item.avatar.url,
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

export default UserList;
