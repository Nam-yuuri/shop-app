import {
    Autocomplete,
    Avatar,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
// import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

// import 'sweetalert2/src/sweetalert2.scss';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../../Admin.scss';
import './NewProduct.scss';
import Sidebar from '../../Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { Link, useHistory } from 'react-router-dom';
function NewProduct() {
    const createProductImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };
    const cpuOptions = [
        'Intel Celeron/Pentium',
        'Intel Core i3',
        'Intel Core i5',
        'Intel Core i7',
        'Intel Core i9',
        'AMD Ryzen 3',
        'Intel Xeon',
        'AMD Ryzen 5',
        'AMD Ryzen 7',
        'AMD Ryzen 9',
        'Microsoft SQ2',
        'Apple M1',
        'Apple M2',
    ];

    const machineSeriesOptions = [
        'Laptop Gaming',
        'Đồ Họa, Kiến Trúc',
        'Phổ Thông, Văn Phòng',
        'Mỏng Nhẹ, Thời Trang',
        'Doanh nhân',
    ];

    const ramOptions = ['4GB', '8GB', '16GB', '32GB', '64GB'];

    const cardMonitorOptions = ['VGA NVIDIA', 'VGA AMD', 'VGA Onboard'];

    const operatingSystemOptions = ['Windows', 'Linux', 'Dos', 'Mac OS'];

    // const [openError, setOpenError] = useState(false);
    // const [openSuccess, setOpenSuccess] = useState(false);
    // const [errorAlert, setErrorAlert] = useState('');
    // const [successAlert, setSuccessAlert] = useState('');

    // const handleCloseError = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setOpenError(false);
    // };
    // const handleCloseSuccess = (event, reason) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setOpenSuccess(false);
    // };

    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [moreDescription, setMoreDescription] = useState('');
    const [CPU, setCPU] = useState(cpuOptions[0]);
    const [machineSeries, setMachineSeries] = useState(machineSeriesOptions[0]);
    const [RAM, setRAM] = useState(ramOptions[0]);
    const [cardMonitor, setCardMonitor] = useState(cardMonitorOptions[0]);
    const [operatingSystem, setOperatingSystem] = useState(operatingSystemOptions[0]);
    const [monitorSize, setMonitorSize] = useState(0);
    const [category, setCategory] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [Stock, setStock] = useState(0);
    const [unitPrice, setUnitPrice] = useState('');
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const [inputTypeValue, setInputTypeValue] = useState('');
    const [inputCPUValue, setInputCPUValue] = useState('');
    const [inputRAMValue, setInputRAMValue] = useState('');
    const [inputMachineSeriesValue, setInputMachineSeriesValue] = useState('');
    const [inputOperatingSystemValue, setInputOperatingSystemValue] = useState('');
    const [inputCardMonitorValue, setInputCardMonitorValue] = useState('');
    const [inputCategoryValue, setCategoryValue] = useState('');

    // const [discountName, setDiscountName] = useState("");
    // const [discountDesc, setDiscountDesc] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);
    const [discountActive, setDiscountActive] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // const handleHistory = (his) => {
    //     history.push(`/admin/${his}`);
    // };

    const [wrapperWidth, setWapperWidth] = useState(true);
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
                    <h1>New Product</h1>
                    <Link to={config.routes.productList} className="header-sidebar-btn">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        HỦY
                    </Link>
                </div>
            </div>
            <div className="NewProduct">
                <div
                    className="sidebar"
                    style={{ width: wrapperWidth ? '222px' : '0px', display: wrapperWidth ? 'block' : 'none' }}
                >
                    <div className="box-sidebar">
                        <Sidebar />
                    </div>
                </div>
                <div className="data">
                    <Grid container spacing={2}>
                        {/* <div className="flexDiv"> */}
                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Tên sản phẩm</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                type="text"
                                label="Tên sản phẩm"
                                required
                                value={'name'}
                                // onChange={(e) => setName(e.target.value)}
                                variant="outlined"
                                sx={{ width: '50%' }}
                            />
                        </Grid>
                        {/* </div> */}
                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Giá tiền</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                type="number"
                                label="Giá tiền"
                                required
                                // onChange={(e) => setPrice(e.target.value)}
                                variant="outlined"
                                sx={{ width: '50%' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Đơn vị tính</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                type="text"
                                label="Đơn vị tính"
                                required
                                // onChange={(e) => setUnitPrice(e.target.value)}
                                variant="outlined"
                                sx={{ width: '50%' }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>CPU</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <Autocomplete
                                value={'CPU'}
                                // onChange={(event, newValue) => {
                                //     setCPU(newValue);
                                // }}
                                // inputValue={inputCPUValue}
                                // onInputChange={(event, newInputValue) => {
                                //     setInputCPUValue(newInputValue);
                                // }}
                                id="controllable-cpu"
                                options={cpuOptions}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="CPU" />}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Hệ điều hành</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <Autocomplete
                                value={'operatingSystem'}
                                // onChange={(event, newValue) => {
                                //     setOperatingSystem(newValue);
                                // }}
                                // inputValue={inputOperatingSystemValue}
                                // onInputChange={(event, newInputValue) => {
                                //     setInputOperatingSystemValue(newInputValue);
                                // }}
                                id="controllable-operating-system"
                                options={operatingSystemOptions}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Hệ điều hành" />}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>RAM</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <Autocomplete
                                value={'RAM'}
                                // onChange={(event, newValue) => {
                                //     setRAM(newValue);
                                // }}
                                // inputValue={inputRAMValue}
                                // onInputChange={(event, newInputValue) => {
                                //     setInputRAMValue(newInputValue);
                                // }}
                                id="controllable-RAM"
                                options={ramOptions}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="RAM" />}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>VGA-Card màn hình</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <Autocomplete
                                value={'cardMonitor'}
                                // onChange={(event, newValue) => {
                                //     setCardMonitor(newValue);
                                // }}
                                // inputValue={inputCardMonitorValue}
                                // onInputChange={(event, newInputValue) => {
                                //     setInputCardMonitorValue(newInputValue);
                                // }}
                                id="controllable-card-monitor"
                                options={cardMonitorOptions}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="VGA-Card màn hình" />}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Dòng máy</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <Autocomplete
                                value={'machineSeries'}
                                // onChange={(event, newValue) => {
                                //     setMachineSeries(newValue);
                                // }}
                                // inputValue={inputMachineSeriesValue}
                                // onInputChange={(event, newInputValue) => {
                                //     setInputMachineSeriesValue(newInputValue);
                                // }}
                                id="controllable-machine-series"
                                options={machineSeriesOptions}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Dòng máy" />}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Giới thiệu</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <textarea
                                placeholder="Giới thiệu"
                                value={'description'}
                                // onChange={(e) => setDescription(e.target.value)}
                                cols="40"
                                rows="3"
                            ></textarea>
                        </Grid>

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Thông tin sản phẩm</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <ReactQuill
                                theme="snow"
                                value={''}
                                // onChange={(html) => setMoreDescription(html)}
                                style={{
                                    marginBottom: '50px',
                                    height: '200px',
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Màn hình</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                label="Màn hình"
                                required
                                // onChange={(e) => setMonitorSize(e.target.value)}
                                variant="outlined"
                                sx={{ width: '50%' }}
                            />
                        </Grid>

                        {/* <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Danh Mục</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <Autocomplete
                                value={'categoryName'}
                                required
                                // onChange={(event, newValue) => {
                                //     // const categoryId = categories.filter((cate) => cate.name === newValue);
                                //     setCategoryName(newValue);
                                //     // setCategory(categoryId[0]._id);
                                // }}
                                // inputValue={inputCategoryValue}
                                // onInputChange={(event, newInputValue) => {
                                //     setCategoryValue(newInputValue);
                                // }}
                                id="controllable-category"
                                // options={categoryOptions.map((cate) => cate.name)}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Danh mục" />}
                            />
                        </Grid> */}

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Kho hàng</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                inputProps={{
                                    inputMode: 'numeric',
                                    type: 'number',
                                    pattern: '[0-9]*',
                                    min: '0',
                                }}
                                label="Kho hàng"
                                required
                                // onChange={(e) => setStock(e.target.value)}
                                variant="outlined"
                                sx={{ width: '50%' }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Giảm giá</p>
                        </Grid>

                        <Grid item xs={12} sm={8} md={10}>
                            <br />
                            <TextField
                                inputProps={{
                                    inputMode: 'numeric',
                                    type: 'number',
                                    pattern: '[0-9]*',
                                    min: '0',
                                }}
                                label="Giảm giá (%)"
                                required
                                // value={discountPercent}
                                // onChange={(e) => setDiscountPercent(e.target.value)}
                                variant="outlined"
                                sx={{ width: '50%', marginBottom: '1.5rem' }}
                            />
                            <br />

                            <FormControl sx={{ width: '50%', marginBottom: '1.5rem' }}>
                                <InputLabel id="demo-simple-select-label">Đang giảm giá</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={'discountActive'}
                                    label="Đang giảm giá"
                                    // onChange={(e) => setDiscountActive(e.target.value)}
                                >
                                    <MenuItem value={true}>Có</MenuItem>
                                    <MenuItem value={false}>Không</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>Chọn ảnh</p>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={8}
                            md={10}
                            style={{ display: 'flex', gap: '30px', alignItems: 'center' }}
                        >
                            <div id="createProductFormFile">
                                <Button variant="contained" component="label">
                                    Tải ảnh lên
                                    <input
                                        type="file"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={createProductImagesChange}
                                        multiple
                                        hidden
                                    />
                                </Button>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                id="createProductBtn"
                                type="submit"
                                variant="contained"
                                // disabled={loading ? true : false}
                                sx={{
                                    marginBottom: '50px',
                                }}
                            >
                                Tạo sản phẩm
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
