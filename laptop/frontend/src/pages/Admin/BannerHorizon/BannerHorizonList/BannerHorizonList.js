import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import './BannerHorizonList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { getAllBanners } from '~/actions/bannerAction';
import {
    clearErrors,
    deleteBannerHorizontal,
    getAllBannerHorizontalMain,
    getAllBannersHorizontal,
} from '~/actions/bannerHorizontalAction';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Loading from '~/components/Loading/Loading';
import { DELETE_BANNER_RESET } from '~/constants/bannerConstants';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useNavigate, useParams } from 'react-router-dom';
import {DELETE_BANNER_HORIZONTAL_RESET} from '~/constants/bannerHorizontalConstants'
function BannerHorizonList() {
    const [wrapperWidth, setWapperWidth] = useState(true);
    // const { product } = useSelector((state) => state.products);
    // console.log(product);

    const { loading, error, horizontals } = useSelector((state) => state.horizontals);
    const { error: deleteError, isDeleted } = useSelector((state) => state.horizontal);

    const [pageSize, setPageSize] = React.useState(10);

    const deleteBannerHandler = (id) => {
        dispatch(deleteBannerHorizontal(id));
        // window.location.reload();
    };

    const dispatch = useDispatch();
    let navigate = useNavigate();

    React.useEffect(() => {
        if (error) {
            dispatch(clearErrors());
        }

        if (deleteError) {
            dispatch(clearErrors);
        }

        if (isDeleted) {
            Swal.fire('Thành công!', 'Xóa banner thành công!', 'success');
            dispatch({ type: DELETE_BANNER_HORIZONTAL_RESET });
        }

        dispatch(getAllBannersHorizontal());
    }, [dispatch, error, deleteError, navigate, isDeleted]);

    // const { loading, horizontals } = useSelector((state) => state.horizontals);
    // useEffect(() => {
    //     dispatch(getAllBannersHorizontal());
    // }, [dispatch]);

    // // console.log('bannersHorizontal: ', horizontals);

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 200, maxWidth: 200, flex: 0.5 },

        {
            field: 'desc',
            headerName: 'Giới thiệu',
            minWidth: 100,
            flex: 0.5,
        },
        {
            field: 'status',
            headerName: 'Status',
            minWidth: 100,
            maxWidth: 100,
            flex: 0.5,
            renderCell: (params) =>
                params.value ? <span className="greenColor">Bật</span> : <span className="redColor">Tắt</span>,
        },
        {
            field: 'image',
            headerName: 'Hình ảnh',
            minWidth: 480,
            flex: 0.8,
            renderCell: (params) => (
                <img
                    src={params.value}
                    alt=""
                    style={{
                        width: '480px',
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
                            <Link to={`/admin/BannerHorizon/updateBannerHorizon/${params.getValue(params.id, 'id')}`}>
                                <EditIcon />
                            </Link>

                            <Button
                                onClick={() => {
                                    confirmAlert({
                                        title: 'Xác nhận',
                                        message: 'Bạn có muốn xóa banner này?',
                                        buttons: [
                                            {
                                                label: 'Có',
                                                onClick: () => {
                                                    deleteBannerHandler(params.getValue(params.id, 'id'));
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

    horizontals &&
        horizontals.forEach((item) => {
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
                            <h1>Banner Horizontal</h1>
                            <Link to={config.routes.newBannerHorizon} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faPlus} />
                                Thêm banner Horizontal
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

export default BannerHorizonList;
