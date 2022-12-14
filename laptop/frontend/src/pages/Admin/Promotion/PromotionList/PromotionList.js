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
import './PromotionList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { getAllHeaders } from '~/actions/headerAction';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { clearErrors, deletePromotion, getAllPromotion } from '~/actions/promotionAction';
import { DELETE_PROMOTION_RESET } from '~/constants/promotionConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
function PromotionList() {

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

    const { loading, error, promotions } = useSelector((state) => state.promotions);
    const { error: deleteError, isDeleted } = useSelector((state) => state.promotion);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const deletePromotionHandler = (id) => {
        dispatch(deletePromotion(id));
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
            Swal.fire('Th??nh c??ng!', 'X??a khuy???n m??i th??nh c??ng!', 'success');
            dispatch({ type: DELETE_PROMOTION_RESET });
        }

        dispatch(getAllPromotion());
    }, [dispatch, error, deleteError, navigate, isDeleted]);

    // useEffect(() => {
    //     dispatch(getAllPromotion());
    // }, [dispatch]);
    // // console.log('promotion: ', promotions);

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 200, maxWidth: 200, flex: 0.5 },
        {
            field: 'title',
            headerName: 'Gi???i thi???u',
            minWidth: 500,
            flex: 0.5,
        },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 200,
            flex: 0.5,
            renderCell: (params) =>
                params.value ? <span className="greenColor">B???t</span> : <span className="redColor">T???t</span>,
        },
        {
            field: 'image',
            headerName: 'H??nh ???nh',
            minWidth: 200,
            flex: 0.8,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt=""
                    style={{
                        minWidth: '100px',
                        height: '45px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                />
            ),
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
                            <Link to={`/admin/PromotionList/updatePromotion/${params.getValue(params.id, 'id')}`}>
                                <EditIcon />
                            </Link>

                            <Button
                                onClick={() => {
                                    confirmAlert({
                                        title: 'X??c nh???n',
                                        message: 'B???n c?? mu???n x??a khuy???n m??i n??y?',
                                        buttons: [
                                            {
                                                label: 'C??',
                                                onClick: () => {
                                                    deletePromotionHandler(params.getValue(params.id, 'id'));
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

    promotions &&
        promotions.forEach((item) => {
            rows.push({
                id: item._id,
                title: item.title,
                status: item.status,
                image: item.images.url,
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
                            <h1>Khuy???n m??i</h1>
                            <Link to={config.routes.newPromotion} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faPlus} />
                                Th??m khuy???n m??i
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

export default PromotionList;
