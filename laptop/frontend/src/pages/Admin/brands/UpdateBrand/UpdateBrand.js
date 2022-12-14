import { Alert, Button, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material';
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
import './UpdateBrand.scss';
import Sidebar from '../../Sidebar';
import { createBanner } from '~/actions/bannerAction';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { clearErrors, createBrand, getBrandDetails, updateBrand } from '~/actions/brandAction';
import { UPDATE_BRAND_RESET } from '~/constants/brandConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
function UpdateBrand() {
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
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [status, setStatus] = useState(true);
    const [images, setImages] = useState([]);
    const [logo, setLogo] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [logoPreview, setLogoPreview] = useState([]);
    const [oldImages, setOldImages] = useState(['']);
    const [oldLogos, setOldLogos] = useState([]);

    const { loading: brandLoading, error, brands } = useSelector((state) => state.brandDetails);
    const { loading, error: updateError, isUpdated } = useSelector((state) => state.brand);

    const dispatch = useDispatch();
    let navigate = useNavigate();
    let match = useParams();

    const brandId = match.id;

    useEffect(() => {
        if (brands && brands._id !== brandId) {
            dispatch(getBrandDetails(brandId));
        } else {
            setName(brands.name);
            setDescription(brands.description);
            setOldImages(brands.images);
            setOldLogos(brands.logo);
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
            setOpenSuccess(true);
            setSuccessAlert('Ch???nh s???a th??ng tin brands th??nh c??ng');
            Swal.fire('Th??nh c??ng!', 'S???a th????ng hi???u th??nh c??ng!', 'success');
            navigate('/admin/BrandList');
            dispatch({ type: UPDATE_BRAND_RESET });
        }
    }, [dispatch, error, isUpdated, brandId, brands, updateError]);

    const updateBrandSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set('name', name);
        myForm.set('description', description);
        // myForm.set('status', status);

        images.forEach((image) => {
            myForm.append('images', image);
        });

        logo.forEach((logo) => {
            myForm.append('logo', logo);
        });

        dispatch(updateBrand(brandId, myForm));

        setName('');
        setDescription('');
        // setStatus(false);
        setImages([]);
        setImagesPreview([]);
        setLogoPreview([]);
    };

    // console.log(myForm)
    const updateBrandImagesChange = (e) => {
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

    const createBannerLogoChange = (e) => {
        const files = Array.from(e.target.files);

        setLogo([]);
        setLogoPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setLogoPreview((old) => [...old, reader.result]);
                    setLogo((old) => [...old, reader.result]);
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
                            <h1>S???a th????ng hi???u </h1>
                            <Link to={config.routes.brandList} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                H???Y
                            </Link>
                        </div>
                    </div>
                    <div className="UpdateBrand">
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
                            <form className="flexDiv" encType="multipart/form-data" onSubmit={updateBrandSubmitHandler}>
                                <Grid container spacing={2}>
                                    {/* <div className="flexDiv"> */}
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>T??n th????ng hi???u</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="T??n"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Gi???i thi???u</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <textarea
                                            placeholder="Gi???i thi???u"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            cols="100"
                                            rows="7"
                                        ></textarea>
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Logo</p>
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
                                                T???i ???nh l??n
                                                <input
                                                    type="file"
                                                    name="avatar"
                                                    accept="image/*"
                                                    onChange={createBannerLogoChange}
                                                    multiple
                                                    hidden
                                                />
                                            </Button>
                                        </div>

                                        <Box
                                            id="createProductFormImage"
                                            sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}
                                        >
                                            <img
                                                key={oldLogos.public_id}
                                                src={oldLogos.url}
                                                alt="Banner Preview"
                                                style={{
                                                    maxHeight: '150px',
                                                    maxWidth: '250px',
                                                }}
                                            />
                                        </Box>

                                        <Box
                                            id="createProductFormImage"
                                            sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}
                                        >
                                            {logoPreview.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt="Banner Preview"
                                                    style={{
                                                        maxHeight: '150px',
                                                        maxWidth: '250px',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>???nh gi???i thi???u</p>
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
                                                T???i ???nh l??n
                                                <input
                                                    type="file"
                                                    name="avatar"
                                                    accept="image/*"
                                                    onChange={updateBrandImagesChange}
                                                    multiple
                                                    hidden
                                                />
                                            </Button>
                                        </div>

                                        <Box
                                            id="createProductFormImage"
                                            sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}
                                        >
                                            <img
                                                key={oldImages.public_id}
                                                src={oldImages.url}
                                                alt="Banner Preview"
                                                style={{
                                                    maxHeight: '150px',
                                                    maxWidth: '250px',
                                                }}
                                            />
                                        </Box>
                                        <Box
                                            id="createProductFormImage"
                                            sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}
                                        >
                                            {imagesPreview.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt="Banner Preview"
                                                    style={{
                                                        maxHeight: '150px',
                                                        maxWidth: '250px',
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Button
                                            id="createCategoryBtn"
                                            type="submit"
                                            variant="contained"
                                            // disabled={loading ? true : false}
                                            sx={{
                                                marginBottom: '50px',
                                            }}
                                        >
                                            T???o th????ng hi???u
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UpdateBrand;
