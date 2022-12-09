import {
    Alert,
    Autocomplete,
    Avatar,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
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
import './NewProduct.scss';
import Sidebar from '../../Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { Link, useHistory } from 'react-router-dom';
import { clearErrors, createProduct, getAdminProduct } from '~/actions/productAction';
import Loading from '~/components/Loading/Loading';
import { getAllBrands } from '~/actions/brandAction';
import { useNavigate } from 'react-router-dom';
import { NEW_PRODUCT_RESET } from '~/constants/productConstants';
function NewProduct() {
   
    // console.log(BrandOptions)
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

    const RAMOptions = ['4GB', '8GB', '16GB', '32GB', '64GB'];

    const LedOptions = ['không đèn', 'Có đèn'];

    const demandOptions = [
        'Laptop Gaming',
        'Đồ Họa, Kiến Trúc',
        'Phổ Thông, Văn Phòng',
        'Mỏng Nhẹ, Thời Trang',
        'Doanh nhân',
    ];

    const Card_GraphicOptions = ['VGA NVIDIA', 'VGA AMD', 'VGA Onboard', 'Onboard Intel UHD Graphics'];

    const MonitorOptions = ["14'", "15.6'", "17'"];

    const operatingSystemOptions = ['Windows', 'Linux', 'Dos', 'Mac OS'];

    // const KeyboardOptions = ['thường , LED','thường , có phím số , LED']

    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const [name, setName] = useState('');
    const [name_Compact, setName_Compact] = useState('');
    const [cost, setCost] = useState(0);
    const [promotional, setPromotional] = useState(0);
    const [status_promotional, setStatus_promotional] = useState(false);

    const [category, setCategory] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [brand, setBrand] = useState('');
    const [brandName, setBrandName] = useState('');

    const [RAM, setRAM] = useState(RAMOptions[0]);
    const [RAM_specs, setRAM_specs] = useState('');
    const [description, setDescription] = useState('');
    const [description_more, setDescription_more] = useState('');
    const [insurance, setInsurance] = useState(12);
    const [Color, setColor] = useState('');
    const [demand, setDemand] = useState('');
    const [CPU, setCPU] = useState('');
    const [CPU_The_system, setCPU_The_system] = useState('');
    const [CPU_specs, setCPU_specs] = useState('');
    const [card_Graphic, setCard_Graphic] = useState('');
    const [monitor, setMonitor] = useState(0);
    const [monitor_specs, setMonitor_specs] = useState('');
    const [storage, setStorage] = useState('');
    const [port_number, setPort_number] = useState('');
    const [Support_slot_type, setSupport_slot_type] = useState('');
    const [output_port, setOutput_port] = useState('');
    const [connector, setConnector] = useState('');
    const [wireless_Connectivity, setWireless_Connectivity] = useState('');
    const [keyboard, setKeyboard] = useState('');
    const [operating_system, setOperating_system] = useState(operatingSystemOptions[0]);
    const [size, setSize] = useState('');
    const [battery, setBattery] = useState('');
    const [mass, setMass] = useState(0);
    const [led, setLed] = useState('');
    const [accessories_included, setAccessories_included] = useState('');
    const [Stock, setStock] = useState(0);
    const [gift_image_name, setGift_image_name] = useState('');
    const [gift_image_count, setGift_image_count] = useState(1);

    const [gift_images, setGift_images] = useState([]);
    const [images, setImages] = useState([]);

    const [imagesPreview, setImagesPreview] = useState([]);
    const [GiftPreview, setGiftPreview] = useState([]);

    // const [inputCPUValue, setInputCPUValue] = useState('');
    const [inputBrandValue, setInputBrandValue] = useState('');
    const [inputRAMValue, setInputRAMValue] = useState(RAMOptions[0]);
    // const [inputRAM_specsValue, setInputRAM_specsValue] = useState('');
    // const [inputColorValue, setInputColorValue] = useState('');
    // const [inputDemandValue, setInputDemandValue] = useState('');
    // const [inputCPU_systemValue, setInputCPU_systemValue] = useState('');
    // const [inputCPU_specsValue, setInputCPU_specsValue] = useState('');
    const [inputCard_GraphicValue, setInputCard_GraphicValue] = useState('');
    const [inputMonitorValue, setInputMonitorValue] = useState(MonitorOptions[0]);
    // const [inputMonitor_specsValue, setInputMonitor_specsValue] = useState('');
    // const [inputStorageValue, setInputStorageValue] = useState('');
    // const [inputPort_numberValue, setInputPort_numberValue] = useState('');
    // const [inputOutput_portValue, setInputOutput_portValue] = useState('');
    // const [inputConnectorValue, setInputConnectorValue] = useState('');
    // const [inputWireless_ConnectivityValue, setInputWireless_ConnectivityValue] = useState('');
    // const [inputKeyboardValue, setInputKeyboardValue] = useState('');
    // const [inputSizeValue, setInputSizeValue] = useState('');
    // const [inputBatteryValue, setInputBatteryValue] = useState('');
    const [inputLedValue, setInputLedValue] = useState('');
    // const [inputAccessories_includedValue, setInputAccessories_includedValue] = useState('');
    // const [inputGift_image_nameValue, setInputGift_image_nameValue] = useState('');
    const [inputOperatingSystemValue, setInputOperatingSystemValue] = useState('');

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

    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { brands } = useSelector((state) => state.brands);

    useEffect(() => {
        // dispatch(getAdminProduct());
        dispatch(getAllBrands());
    }, [dispatch]);
    const BrandOptions = brands;

    // const { products } = useSelector((state) => state.productsAdmin);
    const { loading, error, success } = useSelector((state) => state.newProduct);

    useEffect(() => {
        if (error) {
            setOpenError(true);
            // setErrorAlert('Thông tin không hợp lệ');
            setErrorAlert(error);
            dispatch(clearErrors());
            // Swal.fire('Thành công!', 'Thêm sản phẩm không thành công!', 'error');
        }

        if (success) {
            Swal.fire('Thành công!', 'Thêm sản phẩm thành công!', 'success');
            navigate('/admin/ProductList');
            dispatch({ type: NEW_PRODUCT_RESET });
        }
    }, [dispatch, error, success, navigate]);

    const createProductSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set('name', name);
        myForm.set('name_Compact', name_Compact);
        myForm.set('cost', cost);
        myForm.set('promotional', promotional);
        myForm.set('Status_promotional', status_promotional);
        myForm.set('brand', brand);
        myForm.set('RAM', RAM);
        myForm.set('RAM_specs', RAM_specs);
        myForm.set('description', description);
        myForm.set('description_more', description_more);
        myForm.set('insurance', insurance);
        myForm.set('Color', Color);
        myForm.set('Demand', demand);
        myForm.set('CPU', CPU);
        myForm.set('CPU_The_system', CPU_The_system);
        myForm.set('CPU_specs', CPU_specs);
        myForm.set('Card_Graphic', card_Graphic);
        myForm.set('Monitor', monitor);
        myForm.set('Monitor_specs', monitor_specs);
        myForm.set('Storage', storage);
        myForm.set('Port_number', port_number);
        myForm.set('Support_slot_type', Support_slot_type);
        myForm.set('Output_port', output_port);
        myForm.set('Connector', connector);
        myForm.set('Wireless_Connectivity', wireless_Connectivity);
        myForm.set('Keyboard', keyboard);
        myForm.set('Operating_system', operating_system);
        myForm.set('Size', size);
        myForm.set('Battery', battery);
        myForm.set('Mass', mass);
        myForm.set('Led', led);
        myForm.set('Accessories_included', accessories_included);
        myForm.set('Stock', Stock);
        myForm.set('gift_image_name', gift_image_name);
        myForm.set('gift_image_count', gift_image_count);

        gift_images.forEach((image) => {
            myForm.append('gift_images', image);
        });

        images.forEach((image) => {
            myForm.append('images', image);
        });

        dispatch(createProduct(myForm));
    };

    // console.log("brand: ", brand)

    const handleCloseError = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpenError(false);
      };
      const handleCloseSuccess = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpenSuccess(false);
      };

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

    const createProductGiftChange = (e) => {
        const files = Array.from(e.target.files);

        setGift_images([]);
        setGiftPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setGiftPreview((old) => [...old, reader.result]);
                    setGift_images((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };
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
                            <h1>Thêm sản phẩm </h1>
                            <Link to={config.routes.productList} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                HỦY
                            </Link>
                        </div>
                    </div>
                    <div className="NewProduct">
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
                            <form
                                className="flexDiv"
                                encType="multipart/form-data"
                                onSubmit={createProductSubmitHandler}
                            >
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
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%' }}
                                            />
                                        </Grid>

                                        {/* <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Tên tóm tắt </p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Tên tóm tắt"
                                                // required
                                                value={name_Compact}
                                                onChange={(e) => setName_Compact(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%' }}
                                            />
                                        </Grid> */}

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Giá tiền</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="number"
                                                label="Giá tiền"
                                                value={cost}
                                                required
                                                onChange={(e) => setCost(e.target.value)}
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
                                                // inputProps={{
                                                //     inputMode: 'numeric',
                                                //     type: 'text',
                                                //     pattern: '[0-9]*',
                                                //     min: '0',
                                                // }}
                                                type="number"
                                                label="Giảm giá (%)"
                                                required
                                                value={promotional}
                                                onChange={(e) => setPromotional(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%', marginBottom: '1.5rem' }}
                                            />
                                            <br />

                                            <FormControl sx={{ width: '50%', marginBottom: '1.5rem' }}>
                                                <InputLabel id="demo-simple-select-label">Đang giảm giá</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={status_promotional}
                                                    label="Đang giảm giá"
                                                    onChange={(e) => setStatus_promotional(e.target.value)}
                                                >
                                                    <MenuItem value={true}>Có</MenuItem>
                                                    <MenuItem value={false}>Không</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Thương hiệu</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <Autocomplete
                                                value={brandName}
                                                required
                                                onChange={(event, newValue) => {
                                                    const brandId = brands.filter((item) => item.name === newValue);
                                                    setBrandName(newValue);
                                                    setBrand(brandId[0]._id);
                                                }}
                                                inputValue={inputBrandValue}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputBrandValue(newInputValue);
                                                }}
                                                id="controllable-category"
                                                options={BrandOptions.map((item) => item.name)}
                                                sx={{ width: 500 }}
                                                renderInput={(params) => <TextField {...params} label="Thương hiệu" />}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Giới thiệu</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Giới thiệu ngắn"
                                                // required
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500, marginBottom: '1.5rem' }}
                                            />
                                            <textarea
                                                placeholder="Giới thiệu"
                                                value={description_more}
                                                onChange={(e) => setDescription_more(e.target.value)}
                                                cols="120"
                                                rows="10"
                                            ></textarea>
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Bảo hành </p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <Grid item xs={12} sm={8} md={10}>
                                                <TextField
                                                    type="number"
                                                    label="Bảo hành"
                                                    // required
                                                    value={insurance}
                                                    onChange={(e) => setInsurance(e.target.value)}
                                                    variant="outlined"
                                                    sx={{ width: 500 }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Màu sắc </p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Màu sắc"
                                                // required
                                                value={Color}
                                                onChange={(e) => setColor(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Nhu cầu</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Nhu cầu"
                                                // required
                                                value={demand}
                                                onChange={(e) => setDemand(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>CPU</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Thế hệ CPU"
                                                // required
                                                value={CPU_The_system}
                                                onChange={(e) => setCPU_The_system(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500, marginBottom: '1.5rem' }}
                                            />
                                            <TextField
                                                type="text"
                                                label="CPU"
                                                // required
                                                value={CPU}
                                                onChange={(e) => setCPU(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />

                                            <TextField
                                                type="text"
                                                label="Chi tiết CPU"
                                                // required
                                                value={CPU_specs}
                                                onChange={(e) => setCPU_specs(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500, marginTop: '1.5rem' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Chip đồ họa</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            {/* <Autocomplete
                                                value={card_Graphic}
                                                onChange={(event, newValue) => {
                                                    setCard_Graphic(newValue);
                                                }}
                                                inputValue={inputCard_GraphicValue}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputCard_GraphicValue(newInputValue);
                                                }}
                                                id="controllable-port_number"
                                                options={Card_GraphicOptions}
                                                sx={{ width: 500 }}
                                                renderInput={(params) => <TextField {...params} label="Chip đồ họa" />}
                                                // required
                                            /> */}
                                            <TextField
                                                type="text"
                                                label="Chip đồ họa"
                                                // required
                                                value={card_Graphic}
                                                onChange={(e) => setCard_Graphic(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500, marginTop: '1.5rem' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>RAM</p>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={8}
                                            md={10}
                                            sx={{ display: 'flex', flexDirection: 'column' }}
                                        >
                                            <Autocomplete
                                                value={RAM}
                                                onChange={(event, newValue) => {
                                                    setRAM(newValue);
                                                }}
                                                inputValue={inputRAMValue}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputRAMValue(newInputValue);
                                                }}
                                                id="controllable-port_number"
                                                options={RAMOptions}
                                                sx={{ width: 500, marginBottom: '1.5rem' }}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Số cổng lưu trữ tối đa" />
                                                )}
                                                required
                                            />

                                            <TextField
                                                type="text"
                                                label="Chi tiết RAM"
                                                // required
                                                value={RAM_specs}
                                                onChange={(e) => setRAM_specs(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Màn hình</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            {/* <Autocomplete
                                                value={monitor}
                                                onChange={(event, newValue) => {
                                                    setMonitor(newValue);
                                                }}
                                                inputValue={inputMonitorValue}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputMonitorValue(newInputValue);
                                                }}
                                                id="controllable-port_number"
                                                options={MonitorOptions}
                                                sx={{ width: 500 }}
                                                renderInput={(params) => <TextField {...params} label="Màn hình" />}
                                                required
                                            /> */}
                                            <TextField
                                                type="text"
                                                label="Màn hình"
                                                // required
                                                value={monitor}
                                                onChange={(e) => setMonitor(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                            <TextField
                                                type="text"
                                                label="Chi tiết màn hình "
                                                // required
                                                value={monitor_specs}
                                                onChange={(e) => setMonitor_specs(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500, marginTop: '1.5rem' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Lưu trữ</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Lưu trữ"
                                                required
                                                value={storage}
                                                onChange={(e) => setStorage(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Số cổng lưu trữ tối đa</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Số cổng lưu trữ tối đa"
                                                // required
                                                value={port_number}
                                                onChange={(e) => setPort_number(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Kiểu khe M.2 hỗ trợ</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Kiểu khe M.2 hỗ trợ"
                                                // required
                                                value={Support_slot_type}
                                                onChange={(e) => setSupport_slot_type(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Cổng xuất hình</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Cổng xuất hình"
                                                // required
                                                value={output_port}
                                                onChange={(e) => setOutput_port(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Cổng kết nối</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Cổng kết nối"
                                                // required
                                                value={connector}
                                                onChange={(e) => setConnector(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Kết nối không dây</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Kết nối không dây"
                                                // required
                                                value={wireless_Connectivity}
                                                onChange={(e) => setWireless_Connectivity(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Bàn phím</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Bàn phím"
                                                // required
                                                value={keyboard}
                                                onChange={(e) => setKeyboard(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Hệ điều hành</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <Autocomplete
                                                value={operating_system}
                                                onChange={(event, newValue) => {
                                                    setOperating_system(newValue);
                                                }}
                                                inputValue={inputOperatingSystemValue}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputOperatingSystemValue(newInputValue);
                                                }}
                                                id="controllable-operating_system"
                                                options={operatingSystemOptions}
                                                sx={{ width: 500 }}
                                                renderInput={(params) => <TextField {...params} label="Hệ điều hành" />}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Kích thước</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Kích thước"
                                                // required
                                                value={size}
                                                onChange={(e) => setSize(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Pin</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Pin"
                                                required
                                                value={battery}
                                                onChange={(e) => setBattery(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Khối lượng</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="Number"
                                                label="Khối lượng"
                                                required
                                                value={mass}
                                                onChange={(e) => setMass(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Đèn LED trên máy</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            {/* <Autocomplete
                                                value={led}
                                                onChange={(event, newValue) => {
                                                    setLed(newValue);
                                                }}
                                                inputValue={inputLedValue}
                                                onInputChange={(event, newInputValue) => {
                                                    setInputLedValue(newInputValue);
                                                }}
                                                id="controllable-led"
                                                options={LedOptions}
                                                sx={{ width: 500 }}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Đèn LED trên máy" />
                                                )}
                                            /> */}
                                            <TextField
                                                type="text"
                                                label="Đèn LED trên máy"
                                                // required
                                                value={led}
                                                onChange={(e) => setLed(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Phụ kiện đi kèm</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Phụ kiện đi kèm"
                                                // required
                                                value={accessories_included}
                                                onChange={(e) => setAccessories_included(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

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
                                                value={Stock}
                                                onChange={(e) => setStock(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Quà tặng </p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Quà tặng"
                                                required
                                                value={gift_image_name}
                                                onChange={(e) => setGift_image_name(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500, marginBottom: '1.5rem' }}
                                            />
                                            <TextField
                                                inputProps={{
                                                    inputMode: 'numeric',
                                                    type: 'number',
                                                    pattern: '[0-9]*',
                                                    min: '0',
                                                }}
                                                label="Số lượng"
                                                required
                                                value={gift_image_count}
                                                onChange={(e) => setGift_image_count(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%', marginBottom: '1.5rem' }}
                                            />
                                            <Grid style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                                                <div id="createProductFormFile">
                                                    <Button variant="contained" component="label">
                                                        Tải ảnh quà tặng
                                                        <input
                                                            type="file"
                                                            name="avatar"
                                                            accept="image/*"
                                                            onChange={createProductGiftChange}
                                                            multiple
                                                            hidden
                                                        />
                                                    </Button>
                                                </div>

                                                <Box
                                                    id="createProductFormImage"
                                                    sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}
                                                >
                                                    {GiftPreview.map((image, index) => (
                                                        <img
                                                            key={index}
                                                            src={image}
                                                            alt="Product Preview"
                                                            style={{
                                                                maxHeight: '50px',
                                                                maxWidth: '50px',
                                                            }}
                                                        />
                                                    ))}
                                                </Box>
                                            </Grid>
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

                                            <Box
                                                id="createProductFormImage"
                                                sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}
                                            >
                                                {imagesPreview.map((image, index) => (
                                                    <img
                                                        key={index}
                                                        src={image}
                                                        alt="Product Preview"
                                                        style={{
                                                            maxHeight: '150px',
                                                            maxWidth: '150px',
                                                        }}
                                                    />
                                                ))}
                                            </Box>
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
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewProduct;
