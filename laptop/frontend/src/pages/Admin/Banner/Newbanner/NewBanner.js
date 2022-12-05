import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
// import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from 'react-redux';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

import 'sweetalert2/src/sweetalert2.scss';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../../Admin.scss';
import './NewBanner.scss';
import Sidebar from '../../Sidebar';
import { clearErrors, createBanner } from '~/actions/bannerAction';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { NEW_BANNER_RESET } from '~/constants/bannerConstants';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '~/components/Loading/Loading';
function NewBanner() {
    const [wrapperWidth, setWapperWidth] = useState(true);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const { loading, error, success } = useSelector((state) => state.newBanner);

    useEffect(() => {
        if (error) {
            Swal.fire('Thất bại!', 'Tạo banner thất bại!', 'error');
            dispatch(clearErrors());
        }

        if (success) {
            Swal.fire('Thành công!', 'Tạo banner thành công!', 'success');
            navigate('/admin/Bannerlist');
            dispatch({ type: NEW_BANNER_RESET });
        }
    }, [dispatch, error, navigate, success]);

    const createBannerSubmitHandler = (e) => {
        e.preventDefault();

        let myForm = new FormData();

        myForm.set('title', title);
        myForm.set('description', description);
        myForm.set('status', status);

        images.forEach((image) => {
            myForm.append('images', image);
        });

        dispatch(createBanner(myForm));

        setImages([]);
        setImagesPreview([]);
    };

   
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

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
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
                            <h1>Thêm Banner</h1>
                            <Link to={config.routes.bannerList} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                HỦY
                            </Link>
                        </div>
                    </div>
                    <div className="NewBanner">
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
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Tiêu đề</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Tiêu đề"
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

export default NewBanner;
