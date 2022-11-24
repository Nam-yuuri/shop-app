// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
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
// import Menu from '@mui/material/Menu';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import HomeIcon from '@mui/icons-material/Home';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChatIcon from '@mui/icons-material/Chat';
// import Tooltip from '@mui/material/Tooltip';
// import LogoutIcon from '@mui/icons-material/Logout';
// import MenuItem from '@mui/material/MenuItem';
import {
    Avatar,
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
// import Chart from "chart.js/auto";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
// import {
//   getAllOrders,
//   getAllOrdersStatistical,
//   getAllOrdersStatus,
// } from "../../actions/orderAction";
// import { logout } from "../../actions/userAction.js";
// import { getAdminProduct, getTopProducts } from "../../actions/productAction";
// import { getAllUsers } from "../../actions/userAction";
import '../Admin.scss';
// import Sidebar from "./components/Sidebar";
import formatPrice from '~/utils/formatPrice';
// import MetaData from "../../components/Layout/MetaData";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import moment from "moment";
// import "moment/locale/vi";
// import { getAllBlogs } from "../../actions/blogAction";
// import { display } from '@mui/system';
import MoodIcon from '@mui/icons-material/Mood';
import { getAdminProduct } from '~/actions/productAction';
import Sidebar from '../Sidebar';
import './Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

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
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.productsAdmin);
    useEffect(() => {
        dispatch(getAdminProduct());
    }, [dispatch]);

    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);

    // const { user } = useSelector((state) => state.user);
    // const { products } = useSelector((state) => state.productsAdmin);
    // const { products: topProducts } = useSelector((state) => state.topProducts);

    // const { orders } = useSelector((state) => state.allOrders);

    // const { ordersProssesing, ordersShipped, ordersDelivered, ordersCancel } = useSelector(
    //     (state) => state.allOrdersStatus,
    // );

    // const { blogs } = useSelector((state) => state.blogs);

    // const { orders: ordersStatistical } = useSelector((state) => state.allOrdersStatistical);

    // const { users } = useSelector((state) => state.allUsers);

    let outOfStock = 0;
    let lowStock = 0;

    // products &&
    //     products.forEach((item) => {
    //         if (item.Stock === 0) {
    //             outOfStock += 1;
    //         }
    //         if (item.Stock <= 5) {
    //             lowStock += 1;
    //         }
    //     });

    // useEffect(() => {
    //   dispatch(getAdminProduct());
    //   dispatch(getAllOrders());
    //   dispatch(getAllUsers());
    //   dispatch(getAllBlogs());
    //   dispatch(getTopProducts());
    //   dispatch(getAllOrdersStatus());
    // }, [dispatch]);

    let totalAmount = 0;
    // ordersStatistical &&
    //     ordersStatistical.forEach((item) => {
    //         totalAmount += item.totalPrice;
    //     });

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

    const doughnutState = {
        labels: ['Hết hàng', 'Còn hàng', 'Sắp hết hàng'],
        datasets: [
            {
                backgroundColor: ['rgb(255, 61, 87)', 'rgb(25, 118, 210)', 'rgb(255, 175, 56)'],
                hoverBackgroundColor: ['rgba(255, 61, 87, 0.7)', 'rgba(25, 118, 210, 0.7)', 'rgb(255, 175, 56, 0.7)'],
                data: [outOfStock, products.length - outOfStock, lowStock],
            },
        ],
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // let history = useHistory();

    // const handleHistory = (his) => {
    //   history.push(`/admin/${his}`);
    // };

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (e) => {
        setAnchorElUser(e.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // function logOutUser() {
    //   // dispatch(logout());
    //   // alert("Đăng xuất thành công");
    //   setOpenSuccess(true);
    //   setSuccessAlert("Đăng xuất thành công");
    //   history.push("/");
    // }

    const [wrapperWidth, setWapperWidth] = useState(true);

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
                        QUAY VỀ GIAO DIỆN KHÁCH HÀNG
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
                        <DrawerHeader />
                        {/* <Typography variant="h3">
                            Welcome back, user.name! <MoodIcon />
                        </Typography>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quidem.</p> */}
                        <Grid container spacing={2} className="dashboardSummary">
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper className={classes.flexPaper} style={{ borderLeft: '5px solid yellow' }} square>
                                    <InventoryIcon />
                                    <Link to="/admin/products">
                                        <p className="statistical-number">1</p>
                                        <p>Sản phẩm</p>
                                    </Link>
                                    <Link to="/admin/products">
                                        <p>
                                            Go to detail <ChevronRightIcon />
                                        </p>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} className="dashboardSummaryBox2">
                                <Paper
                                    className={classes.flexPaper}
                                    style={{ borderLeft: '5px solid red', backgroundColor: '#e3ffa8' }}
                                >
                                    <FeedIcon />

                                    <Link to="/admin/blogs">
                                        <p className="statistical-number">2</p>
                                        <p>Tin tức</p>
                                    </Link>
                                    <Link to="/admin/blogs">
                                        <p>
                                            Go to detail <ChevronRightIcon />
                                        </p>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper
                                    className={classes.flexPaper}
                                    style={{ borderLeft: '5px solid blue', backgroundColor: '#45ffbc' }}
                                >
                                    <ShoppingBasketIcon />
                                    <Link to="/admin/orders">
                                        <p className="statistical-number">3</p>
                                        <p>Đơn hàng</p>
                                    </Link>
                                    <Link to="/admin/orders">
                                        <p>
                                            Go to detail <ChevronRightIcon />
                                        </p>
                                    </Link>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper
                                    className={classes.flexPaper}
                                    style={{ borderLeft: '5px solid green', backgroundColor: '#bdbbb7' }}
                                >
                                    <PeopleIcon />
                                    <Link to="/admin/users">
                                        <p className="statistical-number">4</p>
                                        <p>Tài khoản</p>
                                    </Link>
                                    <Link to="/admin/users">
                                        <p>
                                            Go to detail <ChevronRightIcon />
                                        </p>
                                    </Link>
                                </Paper>
                            </Grid>
                            {/* <Grid item xs={12} md={6} className="lineChart">
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '2rem',
                                    }}
                                >
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Chọn ngày bắt đầu"
                                            value={dateStart}
                                            onChange={(newValue) => {
                                                setDateStart(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Chọn ngày kết thúc"
                                            value={dateEnd}
                                            onChange={(newValue) => {
                                                setDateEnd(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                    <Button
                                        onClick={handleStatistical}
                                        variant="contained"
                                        sx={{
                                            fontSize: '1.3rem',
                                            padding: '10px 20px',
                                        }}
                                    >
                                        Thống kê
                                    </Button>
                                </div>
                                <Line data={lineState} />
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Paper className={classes.flexPaper} style={{ borderLeft: '5px solid #541690' }}>
                                            <AttachMoneyIcon />
                                            <div>
                                                <p className="statistical-number">{formatPrice(totalAmount)}</p>
                                                <p>Tổng tiền nhận được</p>
                                            </div>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid> */}
                            <Grid item xs={12} md={6} className="doughnutChart" sx={{ mt: 5 }}>
                                <Grid container spacing={5}>
                                    <Grid item xs={12} sm={6}>
                                        <Paper elevation={3} className={classes.orderBox}>
                                            <CardGiftcardIcon fontSize="large" />
                                            <Typography variant="h3">1</Typography>
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
                                            <Typography variant="h3">2</Typography>
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
                                            <Typography variant="h3">3</Typography>
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
                                            <Typography variant="h3">4</Typography>
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
                            <Grid item sx={12} sm={6} sx={{ mt: 5 }}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 2,
                                    }}
                                >
                                    <Grid container spacing={2} className="tableInventory">
                                        <Grid item sx={12} sm={7}>
                                            <Box className={classes.flexBox}>
                                                <h6>Sản phẩm hết hàng</h6>
                                                <h6>{outOfStock}</h6>
                                            </Box>
                                            <Box className={classes.flexBox}>
                                                <h6>Sản phẩm sắp hết hàng</h6>
                                                <h6>{lowStock}</h6>
                                            </Box>
                                            <Box className={classes.flexBox}>
                                                <h6>Sản phẩm có sẵn</h6>
                                                <h6>products && products.length - outOfStock </h6>
                                            </Box>
                                        </Grid>
                                        {/* <Grid item sx={12} sm={5}>
                                            <Doughnut
                                                data={doughnutState}
                                                width={'200%'}
                                                height={'200%'}
                                                options={{ maintainAspectRatio: false }}
                                            />
                                        </Grid> */}
                                    </Grid>
                                </Paper>
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
                                        >
                                            Sản phẩm bán chạy
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <TableContainer>
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Tên sản phẩm</TableCell>
                                                        <TableCell>Hình ảnh</TableCell>
                                                        <TableCell>Đã bán</TableCell>
                                                        <TableCell>Kho hàng</TableCell>
                                                        {/* <TableCell>Action</TableCell> */}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {products &&
                                                        products.map((item) => (
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
                        <Grid>
                            
                        </Grid>

                        {/* <div className="lineChart"></div> */}

                        {/* <div className="doughnutChart"></div> */}
                    </Main>
                </div>
            </div>
        </Box>
    );
}