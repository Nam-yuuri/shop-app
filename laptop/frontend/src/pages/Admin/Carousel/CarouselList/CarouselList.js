import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Alert, Avatar, Button, Snackbar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import './CarouselList.scss';
import Loader from '~/components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { clearErrors, deleteCarousel, getAllCarousels } from '~/actions/carouselAction';
import { useNavigate, useParams } from 'react-router-dom';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { DELETE_CAROUSEL_RESET } from '~/constants/carouselConstants';
import Loading from '~/components/Loading/Loading';

function CarouselList() {
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

    const { loading, error, carousels } = useSelector((state) => state.carousels);
    const { error: deleteError, isDeleted } = useSelector((state) => state.carousel);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [pageSize, setPageSize] = React.useState(10);

    const deleteCarouselHandler = (id) => {
        dispatch(deleteCarousel(id));
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
            Swal.fire('Th??nh c??ng!', 'X??a carousel th??nh c??ng!', 'success');
            dispatch({ type: DELETE_CAROUSEL_RESET });
        }

        dispatch(getAllCarousels());
    }, [dispatch, error, deleteError, navigate, isDeleted]);

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 200, maxWidth: 200, flex: 0.5 },

        {
            field: 'desc',
            headerName: 'm?? t???',
            type: 'number',
            minWidth: 70,
            flex: 0.3,
        },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 100,
            maxWidth: 100,
            flex: 0.5,
            renderCell: (params) =>
                params.value ? <span className="greenColor">B???t</span> : <span className="redColor">T???t</span>,
        },
        {
            field: 'image',
            headerName: 'H??nh ???nh',
            minWidth: 300,
            maxWidth: 400,
            flex: 0.7,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt=""
                    style={{
                        width: 'auto',
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
                            <Link to={`/admin/CarouselList/updateCarousel/${params.getValue(params.id, 'id')}`}>
                                <EditIcon />
                            </Link>

                            <Button
                                onClick={() => {
                                    confirmAlert({
                                        title: 'X??c nh???n',
                                        message: 'B???n c?? mu???n x??a carousel n??y',
                                        buttons: [
                                            {
                                                label: 'C??',
                                                onClick: () => {
                                                    deleteCarouselHandler(params.getValue(params.id, 'id'));
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

    carousels &&
        carousels.forEach((item) => {
            rows.push({
                id: item._id,
                desc: item.description,
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
                            <h1>Carousel </h1>
                            <Link to={config.routes.newCarousel} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faPlus} />
                                Th??m carousel
                            </Link>
                        </div>
                    </div>
                    <div>
                        {!carousels ? (
                            <p>aaaa</p>
                        ) : (
                            <div className="CarouselList">
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

export default CarouselList;
