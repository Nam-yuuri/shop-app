import { Alert, Button, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material';
// import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

// import 'sweetalert2/src/sweetalert2.scss';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../../Admin.scss';
import './UpdateCarousel.scss';
import Sidebar from '../../Sidebar';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { clearErrors, createCarousel, getCarouselDetails, updateCarousel } from '~/actions/carouselAction';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Loading from '~/components/Loading/Loading';
import { UPDATE_CAROUSEL_RESET } from '~/constants/carouselConstants';
import { useNavigate, useParams } from 'react-router-dom';
function UpdateCarousel() {
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
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [oldImages, setOldImages] = useState([]);

    const { loading: carouselLoading, error, carousels } = useSelector((state) => state.carouselDetails);
    const { loading, error: updateError, isUpdated } = useSelector((state) => state.carousel);

    const dispatch = useDispatch();
    let navigate = useNavigate();
    let match = useParams();

    const carouselId = match.id;

    useEffect(() => {
        if (carousels && carousels._id !== carouselId) {
            dispatch(getCarouselDetails(carouselId));
        } else {
            setDescription(carousels.description);
            setStatus(carousels.status);
            setOldImages(carousels.images);
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
            Swal.fire('Th??nh c??ng!', 'Ch???nh s???a th??ng tin carousels th??nh c??ng!', 'success');
            navigate('/admin/CarouselList');
            dispatch({ type: UPDATE_CAROUSEL_RESET });
        }
    }, [dispatch, error, isUpdated, carouselId, carousels, updateError, navigate]);

    const createBannerSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set('description', description);
        myForm.set('status', status);

        images.forEach((image) => {
            myForm.append('images', image);
        });

        dispatch(updateCarousel(carouselId, myForm));
    };

    // console.log(myForm)
    const createBannerImagesChange = (e) => {
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

    const createBannerLogoChange = (e) => {
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
                            <h1>S???a carousel </h1>
                            <Link to={config.routes.carouselList} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                H???Y
                            </Link>
                        </div>
                    </div>
                    <div className="UpdateCarousel">
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
                                onSubmit={createBannerSubmitHandler}
                            >
                                <Grid container spacing={2}>
                                    {/* <div className="flexDiv"> */}
                                    {/* <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <p>T??n th????ng hi???u</p>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                type="text"
                                label="T??n"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                variant="outlined"
                                sx={{ width: '50%' }}
                            />
                        </Grid> */}

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Gi???i thi???u</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <textarea
                                            required
                                            placeholder="Gi???i thi???u"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            cols="100"
                                            rows="7"
                                        ></textarea>
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Tr???ng th??i</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <FormControl sx={{ width: '50%', marginBottom: '1.5rem' }}>
                                            <InputLabel id="demo-simple-select-label">Tr???ng th??i</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={status}
                                                label="Tr???ng th??i"
                                                onChange={(e) => setStatus(e.target.value)}
                                                // onChange={(e) => setNewHeader({...newHeader, status:e.target.value})}
                                            >
                                                <MenuItem value={true}>B???t</MenuItem>
                                                <MenuItem value={false}>T???t</MenuItem>
                                            </Select>
                                        </FormControl>
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
                                                    onChange={createBannerImagesChange}
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
                                            T???o carousel
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

export default UpdateCarousel;
