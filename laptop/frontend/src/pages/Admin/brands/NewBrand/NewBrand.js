import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
// import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

// import 'sweetalert2/src/sweetalert2.scss';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../../Admin.scss';
import './NewBrand.scss';
import Sidebar from '../../Sidebar';
import { createBanner } from '~/actions/bannerAction';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { NEW_BANNER_RESET } from '~/constants/bannerConstants';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
function NewBrand() {
    const [wrapperWidth, setWapperWidth] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const dispatch = useDispatch();

    const { banners } = useSelector((state) => state.newBanner);

    useEffect(() => {
        dispatch({ type: NEW_BANNER_RESET });
    }, [dispatch]);

    const createBannerSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        console.log('title: ', title);
        myForm.set('title', title);
        console.log('des: ', description);
        myForm.set('description', description);
        console.log('sta: ', status);
        myForm.set('status', status);

        images.forEach((image) => {
            myForm.append('images', image);
        });

        console.log('form: ', myForm);
        // dispatch(createBanner(myForm));
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
                    <h1>Thêm thương hiệu </h1>
                    <Link to={config.routes.brandList} className="header-sidebar-btn">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        HỦY
                    </Link>
                </div>
            </div>
            <div className="NewBrand">
                <div className="sidebar" style={{ width: wrapperWidth ? '222px' : '0px', display: wrapperWidth ? 'block' : 'none' }}
                >
                    <div className="box-sidebar">
                        <Sidebar />
                    </div>
                </div>
                <div className="data">
                    <form className="flexDiv" encType="multipart/form-data" onSubmit={createBannerSubmitHandler}>
                        <Grid container spacing={2}>
                            {/* <div className="flexDiv"> */}
                            <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                <p>Tên thương hiệu</p>
                            </Grid>
                            <Grid item xs={12} sm={8} md={10}>
                                <TextField
                                    type="text"
                                    label="Tên"
                                    required
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
                                        Tải ảnh lên
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
                            <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                <p>Ảnh giới thiệu</p>
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
                                    Tạo brand
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewBrand;
