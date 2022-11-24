import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { confirmAlert } from 'react-confirm-alert';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Sidebar from '../../Sidebar';
import './CarouselList.scss';
import { deleteBrand, getAllBrands } from '~/actions/brandAction';
import Loader from '~/components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { deleteCarousel, getAllCarousels } from '~/actions/carouselAction';

function CarouselList() {
    const [wrapperWidth, setWapperWidth] = useState(true);
    // const { product } = useSelector((state) => state.products);
    // console.log(product);

    const [pageSize, setPageSize] = React.useState(5);

    const deleteCarouselHandler = (id) => {
        dispatch(deleteCarousel(id));
        window.location.reload();
    };

    const dispatch = useDispatch();

    const { loading, carousels } = useSelector((state) => state.carousels);
    useEffect(() => {
        dispatch(getAllCarousels());
    }, [dispatch]);

    // console.log('brand: ', carousels);

    const columns = [
        { field: 'id', headerName: 'ID', minWidth: 200, maxWidth: 200, flex: 0.5 },

        {
            field: 'desc',
            headerName: 'mô tả',
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
                params.value ? <span className="greenColor">Bật</span> : <span className="redColor">Tắt</span>,
        },
        {
            field: 'image',
            headerName: 'Hình ảnh',
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
                                                    deleteCarouselHandler(params.getValue(params.id, 'id'));
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
                        Thêm carousel
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
    );
}

export default CarouselList;
