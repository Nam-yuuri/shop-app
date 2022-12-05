import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import '../../Admin.scss';
import './ShowroomList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { getAllHeaders } from '~/actions/headerAction';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { getAllPromotion } from '~/actions/promotionAction';
import { clearErrors, deleteShowroom, getAllShowroom } from '~/actions/showroomAction';
import { DELETE_SHOWROOM_RESET } from '~/constants/showroomConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
function ShowroomList() {
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const [wrapperWidth, setWapperWidth] = useState(true);
    // const { product } = useSelector((state) => state.products);
    // console.log(product);
    const { loading, error, showrooms } = useSelector((state) => state.showrooms);
    const { error: deleteError, isDeleted } = useSelector((state) => state.showroom);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [pageSize, setPageSize] = React.useState(10);

    const deleteShowroomHandler = (id) => {
        dispatch(deleteShowroom(id));
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
            dispatch(clearErrors);
        }

        if (isDeleted) {

            Swal.fire('Thành công!', 'Xóa thông tin cửa hàng thành công!', 'success');
            dispatch({ type: DELETE_SHOWROOM_RESET });
        }

        dispatch(getAllShowroom());
    }, [dispatch, error, deleteError, navigate, isDeleted]);



    const columns = [
        // { field: 'id', headerName: 'ID', minWidth: 100, maxWidth: 150, flex: 0.5 },
        {
            field: 'name',
            headerName: 'Tên chi nhánh',
            minWidth: 300,
            flex: 0.5,
        },
        {
            field: 'address',
            headerName: 'Địa chỉ',
            minWidth: 600,
            flex: 0.5,
        },
        {
            field: 'phone',
            headerName: 'Điện thoại',
            minWidth: 100,
            flex: 0.5,
        },
        {
            field: 'open_door',
            headerName: 'Giờ làm việc',
            minWidth: 350,
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
                            <Link to={`/admin/ShowroomList/updateShowroom/${params.getValue(params.id, 'id')}`}>
                                <EditIcon />
                            </Link>

                            <Button
                                onClick={() => {
                                    confirmAlert({
                                        title: 'Xác nhận',
                                        message: 'Bạn có muốn xóa thông tin cửa hàng này?',
                                        buttons: [
                                            {
                                                label: 'Có',
                                                onClick: () => {
                                                    deleteShowroomHandler(params.getValue(params.id, 'id'));
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

    showrooms &&
        showrooms.forEach((item) => {
            rows.push({
                id: item._id,
                name: item.name,
                address: item.address,
                phone: item.phone,
                open_door: item.open_door,
            });
        });

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
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
                            <h1>Khuyến mãi</h1>
                            <Link to={config.routes.newShowroom} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faPlus} />
                                Thêm khuyến mãi
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

export default ShowroomList;
