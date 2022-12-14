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
import './UpdateProduct.scss';
import Sidebar from '../../Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { Link, useHistory } from 'react-router-dom';
import { clearErrors, createProduct, getAdminProduct, getProductDetails, updateProduct } from '~/actions/productAction';
import Loading from '~/components/Loading/Loading';
import { getAllBrands } from '~/actions/brandAction';
import { useNavigate } from 'react-router-dom';
import { NEW_PRODUCT_RESET } from '~/constants/productConstants';
import { useParams } from 'react-router-dom';
function UpdateProduct() {
    const [wrapperWidth, setWapperWidth] = useState(true);

    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [errorAlert, setErrorAlert] = useState('');
    const [successAlert, setSuccessAlert] = useState('');

    const { loading: productLoading, error, products } = useSelector((state) => state.productDetails);
    const { loading, error: updateError, isUpdated } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    let match = useParams();

    const productId = match.id;

    const { brands } = useSelector((state) => state.brands);

    useEffect(() => {
        // dispatch(getAdminProduct());
        dispatch(getAllBrands());
    }, [dispatch]);
    const BrandOptions = brands.map((item) => {
        return item.name;
    });

    // const cpuOptions = [
    //     'Intel Celeron/Pentium',
    //     'Intel Core i3',
    //     'Intel Core i5',
    //     'Intel Core i7',
    //     'Intel Core i9',
    //     'AMD Ryzen 3',
    //     'Intel Xeon',
    //     'AMD Ryzen 5',
    //     'AMD Ryzen 7',
    //     'AMD Ryzen 9',
    //     'Microsoft SQ2',
    //     'Apple M1',
    //     'Apple M2',
    // ];

    const RAMOptions = ['4GB', '8GB', '16GB', '32GB', '64GB'];

    const LedOptions = ['kh??ng ??e??n', 'C?? ????n'];

    const demandOptions = [
        'Laptop Gaming',
        '????? H???a, Ki???n Tr??c',
        'Ph??? Th??ng, V??n Ph??ng',
        'M???ng Nh???, Th???i Trang',
        'Doanh nh??n',
    ];

    const Card_GraphicOptions = ['VGA NVIDIA', 'VGA AMD', 'VGA Onboard', 'Onboard Intel UHD Graphics'];

    const MonitorOptions = ["14'", "15.6'", "17'"];

    const operatingSystemOptions = ['Windows', 'Linux', 'Dos', 'Mac OS'];

    // const KeyboardOptions = ['th??????ng , LED','th??????ng , co?? phi??m s???? , LED']

    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const [name, setName] = useState('');
    // const [name_Compact, setName_Compact] = useState('');
    const [cost, setCost] = useState(0);
    const [promotional, setPromotional] = useState(0);
    const [status_promotional, setStatus_promotional] = useState('');

    const [category, setCategory] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [brand, setBrand] = useState('');
    const [brandName, setBrandName] = useState('');

    const [RAM, setRAM] = useState(RAMOptions[0]);
    const [RAM_specs, setRAM_specs] = useState('');
    const [description, setDescription] = useState('');
    const [description_more, setDescription_more] = useState('');
    const [insurance, setInsurance] = useState(0);
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

    const [inputBrandValue, setInputBrandValue] = useState('');
    const [inputRAMValue, setInputRAMValue] = useState(RAMOptions[0]);

    const [inputOperatingSystemValue, setInputOperatingSystemValue] = useState('');

    const [oldImages, setOldImages] = useState([]);
    const [oldGift, setOldGift] = useState([]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // BrandOptions.map((item) => item.name)

    // const handleHistory = (his) => {
    //     history.push(`/admin/${his}`);
    // };

    useEffect(() => {
        if (products && products._id !== productId) {
            dispatch(getProductDetails(productId));
        } else {
            setName(products.name);
            // setName_Compact(products.name_Compact);
            setCost(products.cost);
            setPromotional(products.promotional);
            setStatus_promotional(products.Status_promotional);
            setBrand(products.brand._id);
            setBrandName(products.brand.name);
            setRAM(products.RAM);
            setRAM_specs(products.RAM_specs);
            setDescription(products.description);
            setDescription_more(products.description_more);
            setInsurance(products.Insurance);
            setColor(products.Color);
            setDemand(products.Demand);
            setCPU(products.CPU);
            setCPU_The_system(products.CPU_The_system);
            setCPU_specs(products.CPU_specs);
            setCard_Graphic(products.Card_Graphic);
            setMonitor(products.Monitor);
            setMonitor_specs(products.Monitor_specs);
            setStorage(products.Storage);
            setPort_number(products.Port_number);
            setSupport_slot_type(products.Support_slot_type);
            setOutput_port(products.Output_port);
            setConnector(products.Connector);
            setWireless_Connectivity(products.Wireless_Connectivity);
            setKeyboard(products.Keyboard);
            setOperating_system(products.Operating_system);
            setSize(products.Size);
            setBattery(products.Battery);
            setMass(products.Mass);
            setLed(products.Led);
            setAccessories_included(products.Accessories_included);
            setStock(products.Stock);
            setGift_image_name(products.gift_image_name);
            setGift_image_count(products.gift_image_count);
            setOldImages(products.images);
            setOldGift(products.gift_images);
        }
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
            Swal.fire('Th??nh c??ng!', 'Ch???nh s???a th??ng tin s???n ph???m th??nh c??ng!', 'success');
            navigate('/admin/ProductList');
            dispatch({ type: 'UPDATE_HEADER_RESET' });
        }
    }, [dispatch, error, isUpdated, productId, products, updateError, navigate]);

    const updateBannerImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);
        setOldImages([]);

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

    const updateBannerLogoChange = (e) => {
        const files = Array.from(e.target.files);

        setGift_images([]);
        setGiftPreview([]);
        setOldGift([]);

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

    // console.log('brand: ', products.brand.name);

    const createProductSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set('name', name);
        // myForm.set('name_Compact', name_Compact);
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

        dispatch(updateProduct(productId, myForm));
    };

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
                            <h1>S???a th??ng tin s???n ph???m </h1>
                            <Link to={config.routes.productList} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                H???Y
                            </Link>
                        </div>
                    </div>
                    <div className="UpdateProduct">
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
                                            <p>T??n s???n ph???m</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="T??n s???n ph???m"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%' }}
                                            />
                                        </Grid>

                                        {/* <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>T??n t??m t???t </p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="T??n t??m t???t"
                                                required
                                                value={name_Compact}
                                                onChange={(e) => setName_Compact(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%' }}
                                            />
                                        </Grid> */}

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Gi?? ti???n</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="number"
                                                label="Gi?? ti???n"
                                                value={cost}
                                                required
                                                onChange={(e) => setCost(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Gi???m gi??</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <br />
                                            <TextField
                                                // inputProps={{
                                                //     inputMode: 'numeric',
                                                //     type: 'number',
                                                //     pattern: '[0-9]*',
                                                //     min: '0',
                                                // }}
                                                type="text"
                                                label="Gi???m gi?? (%)"
                                                required
                                                value={promotional}
                                                onChange={(e) => setPromotional(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%', marginBottom: '1.5rem' }}
                                            />
                                            <br />

                                            <FormControl sx={{ width: '50%', marginBottom: '1.5rem' }}>
                                                <InputLabel id="demo-simple-select-label">??ang gi???m gi??</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={status_promotional}
                                                    label="??ang gi???m gi??"
                                                    onChange={(e) => setStatus_promotional(e.target.value)}
                                                >
                                                    <MenuItem value={true}>C??</MenuItem>
                                                    <MenuItem value={false}>Kh??ng</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Th????ng hi???u</p>
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
                                                options={BrandOptions}
                                                sx={{ width: 500 }}
                                                renderInput={(params) => <TextField {...params} label="Th????ng hi???u" />}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Gi???i thi???u</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Gi???i thi???u ng???n"
                                                // required
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500, marginBottom: '1.5rem' }}
                                            />
                                            {/* <textarea
                                                placeholder="Gi???i thi???u"
                                                value={description_more}
                                                onChange={(e) => setDescription_more(e.target.value)}
                                                cols="120"
                                                rows="10"
                                            ></textarea> */}
                                            <ReactQuill
                                                theme="snow"
                                                value={description_more || ''}
                                                onChange={(html) => setDescription_more(html)}
                                                style={{
                                                    marginBottom: '50px',
                                                    height: '500px',
                                                }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>B???o h??nh </p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <Grid item xs={12} sm={8} md={10}>
                                                {/* <TextField
                                                    inputProps={{
                                                        inputMode: 'numeric',
                                                        type: 'number',
                                                        pattern: '[0-9]*',
                                                        min: '0',
                                                    }}
                                                    label="B???o h??nh"
                                                    // required
                                                    value={insurance}
                                                    onChange={(e) => setInsurance(e.target.value)}
                                                    variant="outlined"
                                                    sx={{ width: 500 }}
                                                /> */}
                                                <TextField
                                                    inputProps={{
                                                        inputMode: 'numeric',
                                                        type: 'number',
                                                        pattern: '[0-9]*',
                                                        min: '0',
                                                    }}
                                                    label="B???o h??nh"
                                                    required
                                                    value={insurance}
                                                    onChange={(e) => setInsurance(e.target.value)}
                                                    variant="outlined"
                                                    sx={{ width: 500, marginBottom: '1.5rem' }}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>M??u s???c </p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="M??u s???c"
                                                // required
                                                value={Color}
                                                onChange={(e) => setColor(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Nhu c???u</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Nhu c???u"
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
                                        <Grid
                                            item
                                            xs={12}
                                            sm={8}
                                            md={10}
                                            style={{ display: 'flex', flexDirection: 'column' }}
                                        >
                                            <TextField
                                                type="text"
                                                label="Th???? h???? CPU"
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
                                                label="Chi ti???t CPU"
                                                // required
                                                value={CPU_specs}
                                                onChange={(e) => setCPU_specs(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500, marginTop: '1.5rem' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Chip ?????? ho??a</p>
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
                                                renderInput={(params) => <TextField {...params} label="Chip ?????? ho??a" />}
                                                // required
                                            /> */}
                                            <TextField
                                                type="text"
                                                label="Chip ?????? ho??a"
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
                                                    <TextField {...params} label="S???? c????ng l??u tr???? t????i ??a" />
                                                )}
                                                required
                                            />

                                            <TextField
                                                type="text"
                                                label="Chi ti???t RAM"
                                                // required
                                                value={RAM_specs}
                                                onChange={(e) => setRAM_specs(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Ma??n hi??nh</p>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={8}
                                            md={10}
                                            style={{ display: 'flex', flexDirection: 'column' }}
                                        >
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
                                                renderInput={(params) => <TextField {...params} label="Ma??n hi??nh" />}
                                                required
                                            /> */}
                                            <TextField
                                                // type="Number"
                                                label="Ma??n hi??nh"
                                                // required
                                                value={monitor}
                                                onChange={(e) => setMonitor(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%' }}
                                            />
                                            <TextField
                                                type="text"
                                                label="Chi ti???t ma??n hi??nh "
                                                // required
                                                value={monitor_specs}
                                                onChange={(e) => setMonitor_specs(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500, marginTop: '1.5rem' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>L??u tr????</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="L??u tr????"
                                                required
                                                value={storage}
                                                onChange={(e) => setStorage(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>S???? c????ng l??u tr???? t????i ??a</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="S???? c????ng l??u tr???? t????i ??a"
                                                // required
                                                value={port_number}
                                                onChange={(e) => setPort_number(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Ki???u khe M.2 h??? tr???</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Ki???u khe M.2 h??? tr???"
                                                // required
                                                value={Support_slot_type}
                                                onChange={(e) => setSupport_slot_type(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>C????ng xu????t hi??nh</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="C????ng xu????t hi??nh"
                                                // required
                                                value={output_port}
                                                onChange={(e) => setOutput_port(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>C???ng k???t n???i</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="C???ng k???t n???i"
                                                // required
                                                value={connector}
                                                onChange={(e) => setConnector(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>K????t n????i kh??ng d??y</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="K????t n????i kh??ng d??y"
                                                // required
                                                value={wireless_Connectivity}
                                                onChange={(e) => setWireless_Connectivity(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Ba??n phi??m</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Ba??n phi??m"
                                                // required
                                                value={keyboard}
                                                onChange={(e) => setKeyboard(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>H??? ??i???u h??nh</p>
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
                                                renderInput={(params) => <TextField {...params} label="H??? ??i???u h??nh" />}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Ki??ch th??????c</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Ki??ch th??????c"
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
                                            <p>Kh????i l??????ng</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="Number"
                                                label="Kh????i l??????ng"
                                                required
                                                value={mass}
                                                onChange={(e) => setMass(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>????n LED tr??n m??y</p>
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
                                                    <TextField {...params} label="????n LED tr??n m??y" />
                                                )}
                                            /> */}
                                            <TextField
                                                type="text"
                                                label="????n LED tr??n m??y"
                                                // required
                                                value={led}
                                                onChange={(e) => setLed(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Phu?? ki????n ??i ke??m</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                type="text"
                                                label="Phu?? ki????n ??i ke??m"
                                                // required
                                                value={accessories_included}
                                                onChange={(e) => setAccessories_included(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: 500 }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Kho h??ng</p>
                                        </Grid>
                                        <Grid item xs={12} sm={8} md={10}>
                                            <TextField
                                                inputProps={{
                                                    inputMode: 'numeric',
                                                    type: 'number',
                                                    pattern: '[0-9]*',
                                                    min: '0',
                                                }}
                                                label="Kho h??ng"
                                                required
                                                value={Stock}
                                                onChange={(e) => setStock(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%' }}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>Qu?? t???ng </p>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={8}
                                            md={10}
                                            style={{ display: 'flex', flexDirection: 'column' }}
                                        >
                                            <TextField
                                                type="text"
                                                label="Qu?? t???ng"
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
                                                label="S??? l?????ng"
                                                required
                                                value={gift_image_count}
                                                onChange={(e) => setGift_image_count(e.target.value)}
                                                variant="outlined"
                                                sx={{ width: '50%', marginBottom: '1.5rem' }}
                                            />
                                            <Grid style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                                                <div id="createProductFormFile">
                                                    <Button variant="contained" component="label">
                                                        T???i ???nh qu?? t???ng
                                                        <input
                                                            type="file"
                                                            name="avatar"
                                                            accept="image/*"
                                                            onChange={updateBannerLogoChange}
                                                            multiple
                                                            hidden
                                                        />
                                                    </Button>
                                                </div>

                                                <Box
                                                    id="createProductFormImage1"
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '30px',
                                                        // overflowY: 'scroll',
                                                        // maxWidth: 1000,
                                                    }}
                                                >
                                                    {oldGift &&
                                                        oldGift.map((image, index) => (
                                                            <img
                                                                key={index}
                                                                src={image.url}
                                                                alt="old Banner Preview"
                                                                style={{
                                                                    maxHeight: '50px',
                                                                    maxWidth: '50px',
                                                                }}
                                                            />
                                                        ))}
                                                </Box>

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
                                            <p>???nh c??</p>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={8}
                                            md={10}
                                            style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}
                                        >
                                            {/* <div id="createProductFormFile">
                                                <Button variant="contained" component="label">
                                                    T???i ???nh l??n
                                                    <input
                                                        type="file"
                                                        name="avatar"
                                                        accept="image/*"
                                                        onChange={updateBannerImagesChange}
                                                        multiple
                                                        hidden
                                                    />
                                                </Button>
                                            </div> */}

                                            <Box
                                                id="createProductFormImage1"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '30px',
                                                    overflowY: 'scroll',
                                                    maxWidth: 1000,
                                                }}
                                            >
                                                {oldImages &&
                                                    oldImages.map((image, index) => (
                                                        <img
                                                            key={index}
                                                            src={image.url}
                                                            alt="old Banner Preview"
                                                            style={{
                                                                maxHeight: '150px',
                                                                maxWidth: '250px',
                                                            }}
                                                        />
                                                    ))}
                                            </Box>

                                            {/* <Box
                                                id="createProductFormImage"
                                                sx={{ display: 'flex', alignItems: 'center', gap: '30px', overflowY: 'scroll', maxWidth: 1000 }}
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
                                            </Box> */}
                                        </Grid>

                                        <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                            <p>???nh m???i </p>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={8}
                                            md={10}
                                            style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}
                                        >
                                            <div id="createProductFormFile">
                                                <Button variant="contained" component="label">
                                                    T???i ???nh l??n
                                                    <input
                                                        type="file"
                                                        name="avatar"
                                                        accept="image/*"
                                                        onChange={updateBannerImagesChange}
                                                        multiple
                                                        hidden
                                                    />
                                                </Button>
                                            </div>

                                            {/* <Box
                                                id="createProductFormImage1"
                                                sx={{ display: 'flex', alignItems: 'center', gap: '30px', overflowY: 'scroll', maxWidth: 1000 }}
                                            >
                                                {oldImages &&
                                                    oldImages.map((image, index) => (
                                                        <img
                                                            key={index}
                                                            src={image.url}
                                                            alt="old Banner Preview"
                                                            style={{
                                                                maxHeight: '150px',
                                                                maxWidth: '250px',
                                                            }}
                                                        />
                                                    ))}
                                            </Box> */}

                                            <Box
                                                id="createProductFormImage"
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '30px',
                                                    overflowY: 'scroll',
                                                    maxWidth: 1000,
                                                }}
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
                                                T???o s???n ph???m
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

export default UpdateProduct;
