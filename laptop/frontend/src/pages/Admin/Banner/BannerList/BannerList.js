import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import './BannerList.scss';
import config from '~/config';
import { deleteBanner, getAllBanners } from '~/actions/bannerAction';
import { Diversity1 } from '@mui/icons-material';
import Loader from '~/components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
function BannerList() {
    const [wrapperWidth, setWapperWidth] = useState(true);
    // const { product } = useSelector((state) => state.products);
    // console.log(product);

    const [pageSize, setPageSize] = React.useState(5);

    const deleteBannerHandler = (id) => {
        dispatch(deleteBanner(id));
        window.location.reload();
    };

    const dispatch = useDispatch();

    const { loading, banners } = useSelector((state) => state.banners);
    useEffect(() => {
        dispatch(getAllBanners());
    }, [dispatch]);

    console.log('banner: ', banners);

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 200, flex: 0.5 },

        {
            field: 'title',
            headerName: 'Tiêu đề',
            minWidth: 280,
            flex: 1,
        },
        {
            field: 'desc',
            headerName: 'Giới thiệu',
            minWidth: 100,
            flex: 0.5,
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            minWidth: 100,
            flex: 0.5,
            renderCell: (params) =>
                params.value ? <span className="greenColor">Bật</span> : <span className="redColor">Tắt</span>,
        },
        {
            field: 'images',
            headerName: 'Hình ảnh',
            minWidth: 150,
            maxWidth: 200,
            flex: 0.8,
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
            type: 'number',
            sortable: false,
            renderCell: (params) => {
                return (
                    <React.Fragment>
                        <div className="box-Action-admin">
                            <Link to={`/admin/banner/${params.getValue(params.id, 'id')}`}>
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

    banners &&
        banners.forEach((item) => {
            rows.push({
                id: item._id,
                title: item.title,
                desc: item.description,
                status: item.status,
                images: item.images[0].url,
            });
        });

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
                    <Link to={config.routes.newBannerList} className="header-sidebar-btn">
                        <FontAwesomeIcon icon={faPlus} />
                        Thêm banner
                    </Link>
                </div>
            </div>
            <div>
                {loading ? (
                    <p>a</p>
                ) : (
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
                )}
            </div>
        </div>
    );
}

export default BannerList;
