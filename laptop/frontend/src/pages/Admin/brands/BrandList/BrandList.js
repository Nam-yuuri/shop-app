import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Avatar, Button, Snackbar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import './BrandList.scss';
import { clearErrors, deleteBrand, getAllBrands, getBrandsMain } from '~/actions/brandAction';
import Loader from '~/components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { DELETE_SHOWROOM_RESET } from '~/constants/showroomConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';

function BrandList() {
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

    const deleteBrandHandler = (id) => {
        dispatch(deleteBrand(id));
    };

    const { loading, error, brands } = useSelector((state) => state.brands);
    const { error: deleteError, isDeleted, message } = useSelector((state) => state.brand);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const deleteShowroomHandler = (id) => {
        dispatch(deleteBrand(id));
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
            setOpenSuccess(true);
            setSuccessAlert(message);
            Swal.fire('Th??nh c??ng!', 'X??a th????ng hi???u th??nh c??ng!', 'success');
            dispatch({ type: DELETE_SHOWROOM_RESET });
        }

        dispatch(getAllBrands());
    }, [dispatch, error, deleteError, navigate, isDeleted,message]);

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 200, maxWidth: 200, flex: 0.5 },

        {
            field: 'name',
            headerName: 'T??n th????ng hi???u',
            minWidth: 100,
            maxWidth: 150,
            flex: 1,
        },
        {
            field: 'desc',
            headerName: 'm?? t???',
            type: 'number',
            minWidth: 70,
            flex: 0.3,
        },
        {
            field: 'logo',
            headerName: 'H??nh ???nh',
            minWidth: 200,
            maxWidth: 200,
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
            field: 'image',
            headerName: 'H??nh ???nh',
            minWidth: 200,
            maxWidth: 200,
            flex: 0.7,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt=""
                    style={{
                        width: '100px',
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
            maxWidth: 100,
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <React.Fragment>
                        <div className="box-Action-admin">
                            <Link to={`/admin/BrandList/updateBrand/${params.getValue(params.id, 'id')}`}>
                                <EditIcon />
                            </Link>

                            <Button
                                onClick={() => {
                                    confirmAlert({
                                        title: 'X??c nh???n',
                                        message: 'B???n c?? mu???n x??a th????ng hi???u n??y',
                                        buttons: [
                                            {
                                                label: 'C??',
                                                onClick: () => {
                                                    deleteBrandHandler(params.getValue(params.id, 'id'));
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

    brands &&
        brands.forEach((item) => {
            rows.push({
                id: item._id,
                name: item.name,
                desc: item.description,
                logo: item.logo.url,
                image: item.images.url,
            });
        });
    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    {/* <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
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
                    </Snackbar> */}
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
                            <h1>Th????ng hi???u </h1>
                            <Link to={config.routes.newBrand} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faPlus} />
                                Th??m th????ng hi???u
                            </Link>
                        </div>
                    </div>
                    <div>
                        {!brands ? (
                            <p>aaaa</p>
                        ) : (
                            <div className="BrandList">
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
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default BrandList;
