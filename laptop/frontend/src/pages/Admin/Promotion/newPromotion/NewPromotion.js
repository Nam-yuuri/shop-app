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
import './NewPromotion.scss';
import Sidebar from '../../Sidebar';
import { createBanner } from '~/actions/bannerAction';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
function NewPromotion() {
    const [wrapperWidth, setWapperWidth] = useState(true);
    // const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    // const [newHeader, setNewHeader] = useState({
    //     description,
    //     status,
    //     images,
    // });

    const dispatch = useDispatch();

    const { banners } = useSelector((state) => state.newBanner);



    const createBannerSubmitHandler = (e) => {
        e.preventDefault();

        var myForm = new FormData();

        console.log('des: ', description);
        myForm.append('description', description);
        // console.log('sta: ', status);
        // myForm.set('status', status);

        // images.forEach((image) => {
        //     myForm.append('images', image);
        // });

        // console.log('form: ', images);
        console.log('form: ', myForm.entries());
        // dispatch(createBanner(myForm));

        // console.log('newHeader: ', newHeader);
        // console.log(`${pair[0]}: ${pair[1]}`);
    };

    // const formData = new FormData();
    // formData.append('picture', 'somePictureData');
    // formData.append('firstName', 'some name');

    // for (var pair of formData.entries()) {
    //     console.log(`${pair[0]}: ${pair[1]}`);
    // }

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
                    <h1>Thêm khuyến mãi </h1>
                    <Link to={config.routes.promotionList} className="header-sidebar-btn">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        HỦY
                    </Link>
                </div>
            </div>
            <div className="NewHeader">
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
                    <form className="flexDiv" encType="multipart/form-data" onSubmit={createBannerSubmitHandler}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                <p>Giới thiệu</p>
                            </Grid>
                            <Grid item xs={12} sm={8} md={10}>
                                <textarea
                                    placeholder="Giới thiệu"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    // onChange={(e) => setNewHeader({...newHeader, description:e.target.value})}
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
                                        // onChange={(e) => setNewHeader({...newHeader, status:e.target.value})}
                                    >
                                        <MenuItem value={true}>Bật</MenuItem>
                                        <MenuItem value={false}>Tắt</MenuItem>
                                    </Select>
                                </FormControl>
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
                                            alt="Header Preview"
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
                                    Tạo khuyến mãi
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewPromotion;
