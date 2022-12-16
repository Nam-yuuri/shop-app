import { Alert, Button, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material';
// import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

import 'sweetalert2/src/sweetalert2.scss';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../../Admin.scss';
import './UpdateBanner.scss';
import Sidebar from '../../Sidebar';
import { clearErrors, createBanner, getBannerDetails, updateBanner } from '~/actions/bannerAction';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { NEW_BANNER_RESET } from '~/constants/bannerConstants';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { UPDATE_BANNER_RESET } from '../../../../constants/bannerConstants';
import Loading from '~/components/Loading/Loading';
function UpdateBanner() {
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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [oldImages, setOldImages] = useState([]);
    const [oldLogos, setOldLogos] = useState([]);

    const { loading: bannerLoading, error, banners } = useSelector((state) => state.bannerDetails);
    const { loading, error: updateError, isUpdated } = useSelector((state) => state.banner);

    const dispatch = useDispatch();
    let navigate = useNavigate();
    let match = useParams();

    const bannerId = match.id;

    // console.log("bbb: ", banners)

    useEffect(() => {
        if (banners && banners._id !== bannerId) {
            dispatch(getBannerDetails(bannerId));
        } else {
            setTitle(banners.title);
            setDescription(banners.description);
            setStatus(banners.status)
            setOldImages(banners.images);
            setOldLogos(banners.logo);
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
            Swal.fire('Thành công!', 'Chỉnh sửa thông tin banner thành công!', 'success');
            navigate('/admin/BannerList');
            dispatch({ type: UPDATE_BANNER_RESET });
        }
    }, [dispatch, error, isUpdated, bannerId, banners, updateError]);

    // console.log('title: ', title)

    

    const updateBannerSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set('title', title);
        myForm.set('description', description);
        myForm.set('status', status);

        images.forEach((image) => {
            myForm.append('images', image);
        });

        dispatch(updateBanner(bannerId, myForm));
    };

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

    return (
        <div>
            {bannerLoading ? (
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
                            <h1>Sửa Banner</h1>
                            <Link to={config.routes.bannerList} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                HỦY
                            </Link>
                        </div>
                    </div>
                    <div className="UpdateBanner">
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
                                onSubmit={updateBannerSubmitHandler}
                            >
                                <Grid container spacing={2}>
                                    {/* <div className="flexDiv"> */}
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Tiêu đề</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Tiêu đề"
                                            // required
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Giới thiệu</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <textarea
                                            placeholder="Giới thiệu"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            cols="100"
                                            rows="7"
                                        ></textarea>
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Trạng thái</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <FormControl sx={{ width: '50%', marginBottom: '1.5rem' }}>
                                            <InputLabel id="demo-simple-select-label">Trạng thái</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={status}
                                                label="Trạng thái"
                                                onChange={(e) => setStatus(e.target.value)}
                                            >
                                                <MenuItem value={true}>Bật</MenuItem>
                                                <MenuItem value={false}>Tắt</MenuItem>
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
                                                    onChange={updateBannerImagesChange}
                                                    multiple
                                                    hidden
                                                />
                                            </Button>
                                        </div>

                                        <Box
                                            id="createProductFormImage"
                                            sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}
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
                                            Tạo banner
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

export default UpdateBanner;
