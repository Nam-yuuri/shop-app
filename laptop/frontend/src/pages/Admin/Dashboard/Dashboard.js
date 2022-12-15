import '../Admin.scss';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import InventoryIcon from '@mui/icons-material/Inventory';
import FeedIcon from '@mui/icons-material/Feed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EditIcon from '@mui/icons-material/Edit';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import CancelIcon from '@mui/icons-material/Cancel';
import {
    Avatar,
    Grid,
    Input,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import Button from '~/components/Button';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import formatPrice from '~/utils/formatPrice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MoodIcon from '@mui/icons-material/Mood';
import { getAdminProduct, getTopProducts } from '~/actions/productAction';
import Sidebar from '../Sidebar';
import './Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import ReCharts from './chart';
import Turnover from './turnover';
import { Discount } from '@mui/icons-material';
import Sumproducts from './Sumproducts';
import { getAllPromotion } from '~/actions/promotionAction';
import { getAllUsers } from '~/actions/userAction';
import LowStock from './chart';
import OutOfStock from './outOfStock';
import { getAllOrders, getAllOrdersStatus } from '~/actions/orderAction';

// moment.locale("vi");

const drawerWidth = 240;

const useStyles = makeStyles({
    root: {
        fontSize: '100%',
    },
    flexPaper: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        height: '150px',
        padding: '10px 20px',
        transition: '0.25s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
        },
        '& a:last-child': {
            paddingLeft: '30%',
        },
        '& a:last-child p': {
            fontWeight: 'bold',
            color: '#000',
        },
    },
    flexBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        '&:first-child h6': {
            color: 'red',
        },
    },
    orderBox: {
        textAlign: 'center',
        padding: '2rem',
        '& h3': {
            marginTop: '0.7rem',
        },
    },
});

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Dashboard() {
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
    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);

    // const { products } = useSelector((state) => state.productsAdmin);
    // const { products: topProducts } = useSelector((state) => state.topProducts);
    // const { users } = useSelector((state) => state.allUsers);
    // const { error, orders, loading } = useSelector((state) => state.allOrders);

    // useEffect(() => {
    //     dispatch(getTopProducts());
    //     dispatch(getAllPromotion());
    //     dispatch(getAdminProduct());
    //     dispatch(getAllUsers());
    //     dispatch(getAllOrders());
    // }, [dispatch]);

    const { user } = useSelector((state) => state.user);
    const { products } = useSelector((state) => state.productsAdmin);
    const { products: topProducts } = useSelector((state) => state.topProducts);
    const { promotions } = useSelector((state) => state.promotions);
    const { orders } = useSelector((state) => state.allOrders);

    const { ordersProssesing, ordersShipped, ordersDelivered, ordersCancel } = useSelector(
        (state) => state.allOrdersStatus,
    );

    const { orders: ordersStatistical } = useSelector((state) => state.allOrdersStatistical);

    const { users } = useSelector((state) => state.allUsers);

    // let outOfStock = 0;
    // let lowStock = 0;

    // products &&
    //     products.forEach((item) => {
    //         if (item.Stock === 0) {
    //             outOfStock += 1;
    //         }
    //         if (item.Stock <= 5) {
    //             lowStock += 1;
    //         }
    //     });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminProduct());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
        dispatch(getTopProducts());
        dispatch(getAllOrdersStatus());
    }, [dispatch]);

    let totalAmount = 0;
    ordersStatistical &&
        ordersStatistical.forEach((item) => {
            totalAmount += item.totalPrice;
        });

    const [lineState, setLineState] = useState({
        labels: ['Số tiền ban đầu', 'Tổng tiền nhận được'],
        datasets: [
            {
                label: 'TỔNG TIỀN',
                backgroundColor: ['tomato'],
                hoverBackgroundColor: ['rgb(197, 72, 49)'],
                data: [0, totalAmount],
            },
        ],
    });

    useEffect(() => {
        setLineState({
            labels: ['Số tiền ban đầu', 'Tổng tiền nhận được'],
            datasets: [
                {
                    label: 'TỔNG TIỀN',
                    borderColor: ['rgb(0, 110, 49)'],
                    backgroundColor: ['rgb(0, 255, 43)'],
                    hoverBackgroundColor: ['rgb(0, 233, 49)'],
                    data: [0, totalAmount],
                },
            ],
        });
    }, [totalAmount]);

    const handleStatistical = () => {
        if (dateStart !== null && dateEnd !== null) {
            // dispatch(getAllOrdersStatistical(dateStart, dateEnd));

            setLineState({
                labels: ['Số tiền ban đầu', 'Tổng tiền nhận được'],
                datasets: [
                    {
                        label: 'TỔNG TIỀN',
                        backgroundColor: ['tomato'],
                        hoverBackgroundColor: ['rgb(197, 72, 49)'],
                        data: [0, totalAmount],
                    },
                ],
            });
        }
    };

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };

    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const handleOpenUserMenu = (e) => {
    //     setAnchorElUser(e.currentTarget);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    const [wrapperWidth, setWapperWidth] = useState(true);

    const outOfStock = [];
    const lowStock = [];

    products &&
        products.forEach((item) => {
            if (item.Stock === 0) {
                outOfStock.push({
                    id: item._id,
                    name: item.name,
                    Stock: item.Stock,
                    cost: item.cost,
                    promotional: item.promotional,
                    Status_promotional: item.Status_promotional,
                    image: item.images[0].url,
                    brand: item.brand.name,
                    gift_image_name: item.gift_image_name,
                    gift_images: item.gift_images[0].url,
                    sold: item.sold,
                });
            } else if (item.Stock <= 5) {
                lowStock.push({
                    id: item._id,
                    name: item.name,
                    Stock: item.Stock,
                    cost: item.cost,
                    promotional: item.promotional,
                    Status_promotional: item.Status_promotional,
                    image: item.images[0].url,
                    brand: item.brand.name,
                    gift_image_name: item.gift_image_name,
                    gift_images: item.gift_images[0].url,
                    sold: item.sold,
                });
            }
        });

    return (
        <Box sx={{ display: 'flex', backgroundColor: 'rgb(255, 255, 248)', padding: '30px' }} className={classes.root}>
            {/* <MetaData title="Admin - Dashboard" />; */}
            <Snackbar open={openError} autoHideDuration={5000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="warning" sx={{ width: '100%', fontSize: '0.85em' }}>
                    {errorAlert}
                </Alert>
            </Snackbar>
            <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%', fontSize: '0.85em' }}>
                    {successAlert}
                </Alert>
            </Snackbar>
            <CssBaseline />
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
                    <h1>Dashboard</h1>
                    <Link to={config.routes.home} className="header-sidebar-btn">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        VỀ GIAO DIỆN NGƯỜI DÙNG
                    </Link>
                </div>
            </div>
            <div className="container-dashboard">
                <div>
                    <div
                        className="sidebar"
                        style={{ width: wrapperWidth ? '222px' : '0px', display: wrapperWidth ? 'block' : 'none' }}
                    >
                        <div className="box-sidebar">
                            <Sidebar />
                        </div>
                    </div>
                </div>
                <div className="data">
                    <Main open={open}>
                        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>Quản lý cửa hàng</p>
                        <Grid container spacing={2} className="dashboardSummary">
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper
                                    className={classes.flexPaper}
                                    style={{
                                        borderLeft: '5px solid yellow',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '20px 10px',
                                        borderRadius: '4px',
                                    }}
                                    square
                                >
                                    <InventoryIcon />
                                    <p style={{ fontSize: '20px', marginBottom: '0px', fontWeight: 'bold' }}>
                                        Sản phẩm
                                    </p>
                                    <div
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <p className="statistical-number">Sản phẩm: </p>
                                            <p className="statistical-number" style={{ fontWeight: 'bold' }}>
                                                {products && products.length}
                                            </p>
                                        </div>
                                        <Link
                                            to={config.routes.productList}
                                            style={{ paddingLeft: '0px', fontSize: '14px' }}
                                        >
                                            <p className="go-to-detail">
                                                Go to detail <ChevronRightIcon />
                                            </p>
                                        </Link>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper
                                    className={classes.flexPaper}
                                    style={{
                                        borderLeft: '5px solid red',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '20px 10px',
                                        borderRadius: '4px',
                                    }}
                                    square
                                >
                                    <PeopleIcon />
                                    <p style={{ fontSize: '20px', marginBottom: '0px', fontWeight: 'bold' }}>
                                        Tài khoản
                                    </p>
                                    <div
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <p className="statistical-number">Tài khoản: </p>
                                            <p className="statistical-number" style={{ fontWeight: 'bold' }}>
                                                {users && users.length}
                                            </p>
                                        </div>
                                        <Link
                                            to={config.routes.userList}
                                            style={{ paddingLeft: '0px', fontSize: '14px' }}
                                        >
                                            <p className="go-to-detail">
                                                Go to detail <ChevronRightIcon />
                                            </p>
                                        </Link>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper
                                    className={classes.flexPaper}
                                    style={{
                                        borderLeft: '5px solid green',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '20px 10px',
                                        borderRadius: '4px',
                                    }}
                                    square
                                >
                                    <ShoppingBasketIcon />
                                    <p style={{ fontSize: '20px', marginBottom: '0px', fontWeight: 'bold' }}>
                                        Đơn hàng
                                    </p>
                                    <div
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <p className="statistical-number">Đơn hàng: </p>
                                            <p className="statistical-number" style={{ fontWeight: 'bold' }}>
                                                {orders && orders.length}
                                            </p>
                                        </div>
                                        <Link
                                            to={config.routes.productList}
                                            style={{ paddingLeft: '0px', fontSize: '14px' }}
                                        >
                                            <p className="go-to-detail">
                                                Go to detail <ChevronRightIcon />
                                            </p>
                                        </Link>
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper
                                    className={classes.flexPaper}
                                    style={{
                                        borderLeft: '5px solid blue',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '20px 10px',
                                        borderRadius: '4px',
                                    }}
                                    square
                                >
                                    <Discount />
                                    <p style={{ fontSize: '20px', marginBottom: '0px', fontWeight: 'bold' }}>
                                        Khuyến mãi
                                    </p>
                                    <div
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <p className="statistical-number">Khuyến mãi: </p>
                                            <p className="statistical-number" style={{ fontWeight: 'bold' }}>
                                                {promotions && promotions.length}
                                            </p>
                                        </div>
                                        <Link
                                            to={config.routes.promotionList}
                                            style={{ paddingLeft: '0px', fontSize: '14px' }}
                                        >
                                            <p className="go-to-detail">
                                                Go to detail <ChevronRightIcon />
                                            </p>
                                        </Link>
                                    </div>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6} mt={5}>
                                <div style={{ width: '80%', display: 'flex', justifyContent: 'space-around' }}>
                                    <Input type="date" style={{ border: '1px solid #eaeaea', borderRadius: '4px' }} />
                                    <Input type="date" style={{ border: '1px solid #eaeaea', borderRadius: '4px' }} />
                                    <Button primary>Thống kê</Button>
                                </div>
                                <div style={{ marginTop: '10px', marginBottom: '20px' }}>
                                    <Turnover />
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Paper
                                            className={classes.flexPaper}
                                            style={{ borderLeft: '5px solid #541690' }}
                                        >
                                            <AttachMoneyIcon />
                                            <div>
                                                <p className="statistical-number">{formatPrice(totalAmount)}</p>
                                                <p>Tổng tiền nhận được</p>
                                            </div>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6} className="doughnutChart" sx={{ mt: 5 }}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={3} className={classes.orderBox}>
                                            <CardGiftcardIcon fontSize="large" />
                                            <Typography variant="h3">
                                                {ordersProssesing && ordersProssesing.length}
                                            </Typography>
                                            <p
                                                style={{
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                Đang xử lý
                                            </p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={3} className={classes.orderBox}>
                                            <LocalShippingIcon fontSize="large" />
                                            <Typography variant="h3">
                                                {ordersShipped && ordersShipped.length}
                                            </Typography>
                                            <p
                                                style={{
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                Đang vận chuyển
                                            </p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={3} className={classes.orderBox}>
                                            <AssignmentTurnedInIcon fontSize="large" />
                                            <Typography variant="h3">
                                                {ordersDelivered && ordersDelivered.length}
                                            </Typography>
                                            <p
                                                style={{
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                Đã giao hàng
                                            </p>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={3} className={classes.orderBox}>
                                            <CancelIcon fontSize="large" />
                                            <Typography variant="h3">{ordersCancel && ordersCancel.length}</Typography>
                                            <p
                                                style={{
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                Huỷ đơn hàng
                                            </p>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            spacing={2}
                            className="dashboardSummary"
                            sx={{
                                mt: 2,
                            }}
                        >
                            <Grid item xs={12} sm={12}>
                                <Paper elevation={3}>
                                    <Box
                                        sx={{
                                            pt: 1,
                                            ml: 1,
                                            mb: 1,
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            sx={{
                                                mt: 2,
                                                ml: 2,
                                            }}
                                            style={{ textAlign: 'center', fontWeight: 'bold' }}
                                        >
                                            Sản phẩm bán chạy
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <TableContainer>
                                            <Table
                                                sx={{ minWidth: 650 }}
                                                aria-label="simple table"
                                                className="w3-striped"
                                            >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Tên sản phẩm</TableCell>
                                                        <TableCell>Hình ảnh</TableCell>
                                                        <TableCell>Đã bán</TableCell>
                                                        <TableCell>Kho hàng</TableCell>
                                                        {/* <TableCell>Action</TableCell> */}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody style={{ maxHeight: '500px', overflow: 'hidden' }}>
                                                    {topProducts &&
                                                        topProducts.map((item) => (
                                                            <TableRow
                                                                key={item._id}
                                                                sx={{
                                                                    '& td, & th': { border: 0 },
                                                                }}
                                                            >
                                                                <TableCell component="th" scope="row">
                                                                    {item.name}
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Avatar src={item.images[0].url} alt={item.name} />
                                                                </TableCell>
                                                                <TableCell>{item.sold}</TableCell>
                                                                <TableCell>{item.Stock}</TableCell>
                                                                {/* <TableCell>
                                                                    <Link
                                                                        to={`/admin/product/${item._id}`}
                                                                        sx={{ color: 'rgb(25, 118, 210)' }}
                                                                    >
                                                                        <EditIcon
                                                                            fontSize="large"
                                                                            sx={{ color: 'rgb(25, 118, 210)' }}
                                                                        />
                                                                    </Link>
                                                                </TableCell> */}
                                                            </TableRow>
                                                        ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                        <p style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '20px' }}>Quản lý sản phẩm</p>
                        <Grid style={{ display: 'flex' }}></Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            style={{ display: 'flex', alignItems: 'center', margin: '0px 0px 10px' }}
                        >
                            <Paper elevation={3} style={{ height: '100%' }}>
                                <Box
                                    sx={{
                                        pt: 1,
                                        ml: 1,
                                        mb: 1,
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            mt: 2,
                                            ml: 2,
                                        }}
                                        style={{ textAlign: 'center', fontWeight: 'bold' }}
                                    >
                                        {lowStock.length > 0 ? (
                                            <p>Có {lowStock.length} sản phẩm sắp hết hàng</p>
                                        ) : (
                                            <p>Chưa có sản phẩm nào sắp hết hàng</p>
                                        )}
                                    </Typography>
                                </Box>
                                <Box>
                                    <TableContainer>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="w3-striped">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Tên sản phẩm</TableCell>
                                                    <TableCell>Hình ảnh</TableCell>
                                                    <TableCell>Đã bán</TableCell>
                                                    <TableCell>Kho hàng</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody style={{ maxHeight: '500px', overflow: 'hidden' }}>
                                                {lowStock &&
                                                    lowStock.map((item) => (
                                                        <TableRow
                                                            key={item._id}
                                                            sx={{
                                                                '& td, & th': { border: 0 },
                                                            }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {item.name}
                                                            </TableCell>
                                                            <TableCell>
                                                                <Avatar src={item.image} alt={item.name} />
                                                            </TableCell>
                                                            <TableCell>{item.sold}</TableCell>
                                                            <TableCell>{item.Stock}</TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Paper>
                            <LowStock />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            style={{ display: 'flex', alignItems: 'center', margin: '30px 0px 0px' }}
                        >
                            <Paper elevation={3} style={{ height: '100%' }}>
                                <Box
                                    sx={{
                                        pt: 1,
                                        ml: 1,
                                        mb: 1,
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            mt: 2,
                                            ml: 2,
                                        }}
                                        style={{ textAlign: 'center', fontWeight: 'bold' }}
                                    >
                                        {outOfStock.length > 0 ? (
                                            <p>Có {outOfStock.length} sản phẩm hết hàng</p>
                                        ) : (
                                            <p>Chưa có sản phẩm nào hết hàng</p>
                                        )}
                                    </Typography>
                                </Box>
                                <Box>
                                    <TableContainer>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="w3-striped">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Tên sản phẩm</TableCell>
                                                    <TableCell>Hình ảnh</TableCell>
                                                    <TableCell>Đã bán</TableCell>
                                                    {/* <TableCell>Kho hàng</TableCell> */}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody style={{ maxHeight: '500px', overflow: 'hidden' }}>
                                                {outOfStock &&
                                                    outOfStock.map((item) => (
                                                        <TableRow
                                                            key={item._id}
                                                            sx={{
                                                                '& td, & th': { border: 0 },
                                                            }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {item.name}
                                                            </TableCell>
                                                            <TableCell>
                                                                <Avatar src={item.image} alt={item.name} />
                                                            </TableCell>
                                                            <TableCell>{item.sold}</TableCell>
                                                            {/* <TableCell>{item.Stock}</TableCell> */}
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Paper>
                            <OutOfStock />
                        </Grid>

                        {/* <Grid>
                            <div>
                                <Sumproducts />
                                <p style={{ textAlign: 'center', marginTop: '20px' }}>
                                    Số lượng sản phẩm còn trong kho{' '}
                                </p>
                            </div>
                        </Grid> */}

                        {/* <div className="lineChart"></div> */}

                        {/* <div className="doughnutChart"></div> */}
                    </Main>
                </div>
            </div>
        </Box>
    );
}
