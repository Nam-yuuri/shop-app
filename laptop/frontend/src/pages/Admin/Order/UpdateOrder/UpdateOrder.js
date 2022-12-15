import {
    Alert,
    Autocomplete,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
    Typography,
} from '@mui/material';
// import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../../Admin.scss';
import './UpdateOrder.scss';
import Sidebar from '../../Sidebar';
import { createBanner } from '~/actions/bannerAction';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { clearErrors, createShowroom, getShowroomDetails, updateShowroom } from '~/actions/showroomAction';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
import { getUserDetails, updateUser } from '~/actions/userAction';
import { UPDATE_SHIP_RESET, UPDATE_USER_RESET } from '~/constants/userConstants';
import { getOrderDetails, updateOrder } from '~/actions/orderAction';
import { UPDATE_ORDER_RESET } from '~/constants/orderConstants';
import formatPrice from '~/utils/formatPrice';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

function UpdateOrder() {
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const [wrapperWidth, setWapperWidth] = useState(true);

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
    const theme = useTheme();

    const [open, setOpen] = useState(true);

    const { user: userNow } = useSelector((state) => state.user);
    const { order, error, loading } = useSelector((state) => state.orderDetails);
    const { error: updateError, isUpdated } = useSelector((state) => state.order);

    const [status, setStatus] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let match = useParams();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleHistory = (his) => {
        //   history.push(`/admin/${his}`);
    };

    useEffect(() => {
        if (error) {
            setOpenError(true);
            setErrorAlert(error);
            dispatch(clearErrors());
        }
        if (updateError) {
            setOpenError(true);
            setErrorAlert(updateError);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            // alert("Cập nhật đơn hàng thành công");
            setOpenSuccess(true);
            setSuccessAlert('Cập nhật đơn hàng thành công');
            // navigator('/admin/OrderList')
            // navigate('admin/OrderList');
            dispatch({ type: UPDATE_ORDER_RESET });
        }

        dispatch(getOrderDetails(match.id));
    }, [dispatch, error, match.id, isUpdated, updateError, navigate]);

    const updateOrderSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set('status', status);

        dispatch(updateOrder(match.id, myForm));
    };

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (e) => {
        setAnchorElUser(e.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    console.log('order', order);

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
                            <h1>Sửa thông tin tài khoản </h1>
                            <Link to={config.routes.orderList} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                HỦY
                            </Link>
                        </div>
                    </div>
                    <div className="UpdateOrder">
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
                            <div>
                                <Grid
                                    container
                                    spacing={2}
                                    className="confirmshippingArea"
                                    style={{ marginBottom: '50px' }}
                                >
                                    <Grid item xs={12} md={6} style={{ maxWidth: '35%' }}>
                                        <Typography variant="h4">Địa chỉ giao hàng</Typography>
                                        <div className="orderDetail">
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ margin: '0px' }}>Họ tên:</p>
                                                <span>{order.name}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ margin: '0px' }}>Số điện thoại:</p>
                                                <span>{order.shippingInfo && order.shippingInfo.phoneNo}</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ margin: '0px' }}>Địa chỉ:</p>
                                                <span>
                                                    {order.shippingInfo &&
                                                        `${order.shippingInfo.address}, ${order.shippingInfo.country}, ${order.shippingInfo.state}, ${order.shippingInfo.city}`}
                                                </span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ margin: '0px' }}>Ngày đặt hàng:</p>
                                                <span>{order.updatedAt && order.updatedAt.split('T')[0]}</span>
                                            </div>
                                        </div>
                                        <Typography variant="h4">Thanh toán</Typography>
                                        <div className="orderDetail">
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ margin: '0px' }}>Trạng thái</p>
                                                <p
                                                    style={{ margin: '0px' }}
                                                    className={
                                                        order.paymentInfo && order.paymentInfo.status === 'Đã thanh toán'
                                                            ? 'greenColor'
                                                            : 'redColor'
                                                    }
                                                >
                                                    {order.paymentInfo && order.paymentInfo.status === 'Đã thanh toán'
                                                        ? 'Đã thanh toán'
                                                        : 'Chưa thanh toán'}
                                                </p>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{ margin: '0px' }}>Tổng tiền:</p>
                                                <span>{order.totalPrice && formatPrice(order.totalPrice)}</span>
                                            </div>
                                        </div>
                                        

                                        <Typography variant="h4">Trạng thái đơn hàng</Typography>
                                        <div className="orderDetail">
                                            <div>
                                                <p
                                                    className={
                                                        order.orderStatus && order.orderStatus === 'Delivered'
                                                            ? 'greenColor'
                                                            : 'redColor'
                                                    }
                                                >
                                                    {order.orderStatus}
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6} style={{ maxWidth: '100%', flex: 1 }}>
                                        <div className="confirmCartItems">
                                            <Typography variant="h4">Giỏ hàng:</Typography>
                                            <div className="confirmCartItemsContainer">
                                                {order.orderItems &&
                                                    order.orderItems.map((item) => (
                                                        <div key={item.product}>
                                                            <img src={item.image} alt={item.name} />
                                                            <Link to={`/profile/${item.product}`}>
                                                                {item.name}
                                                            </Link>{' '}
                                                            <span>
                                                                {item.quantity} X {formatPrice(item.priceSale)} ={' '}
                                                                <b>{formatPrice(item.priceSale * item.quantity)}</b>
                                                            </span>
                                                            <img src={item.gift_image} alt={item.gift_name} />
                                                            <p>
                                                                {item.gift_name}(Quà tặng)
                                                            </p>{' '}
                                                            
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: order.orderStatus === 'Delivered' ? 'none' : 'block',
                                            }}
                                        >
                                            <form className="updateOrderForm" onSubmit={updateOrderSubmitHandler}>
                                                <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
                                                    Trạng thái đơn hàng
                                                </Typography>

                                                <div>
                                                    <AccountTreeIcon />

                                                    <FormControl sx={{ width: '50%' }}>
                                                        <InputLabel id="select-label">Trạng thái</InputLabel>
                                                        <Select
                                                            labelId="select-label"
                                                            id="demo-simple-select"
                                                            // value={age}
                                                            // value={order.orderStatus}
                                                            label="Trạng thái"
                                                            onChange={(e) => setStatus(e.target.value)}
                                                        >
                                                            {order.orderStatus === 'Processing' && (
                                                                <MenuItem value="Shipped">Shipped</MenuItem>
                                                            )}
                                                            {order.orderStatus === 'Shipped' && (
                                                                <MenuItem value="Delivered">Delivered</MenuItem>
                                                            )}
                                                        </Select>
                                                    </FormControl>
                                                </div>

                                                <Button
                                                    id="createProductBtn"
                                                    type="submit"
                                                    variant="contained"
                                                    sx={{
                                                        marginTop: '10px',
                                                        fontSize: '1.5rem',
                                                        width: '20%',
                                                    }}
                                                    disabled={loading ? true : false || status === '' ? true : false}
                                                >
                                                    Xử lý
                                                </Button>
                                            </form>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UpdateOrder;
