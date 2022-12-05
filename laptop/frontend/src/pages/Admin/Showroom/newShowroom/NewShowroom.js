import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
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
import './NewShowroom.scss';
import Sidebar from '../../Sidebar';
import { createBanner } from '~/actions/bannerAction';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faBars, faChevronLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { clearErrors, createShowroom } from '~/actions/showroomAction';
import { useNavigate, useParams } from 'react-router-dom';
import { NEW_SHOWROOM_RESET } from '~/constants/showroomConstants';
import Loading from '~/components/Loading/Loading';
function NewShowroom() {
    const [wrapperWidth, setWapperWidth] = useState(true);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [open_door, setOpen_door] = useState('');
    const [iframe, setIframe] = useState('');

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const { loading, error, success } = useSelector((state) => state.newShowroom);

    useEffect(() => {
        if (error) {
            //   setOpenError(true);
            //   setErrorAlert(error);
            dispatch(clearErrors());
        }

        if (success) {
            // setOpenSuccess(true);
            // setSuccessAlert("Tạo banner thành công");
            Swal.fire('Thành công!', 'Tạo header thành công!', 'success');
            //   history.push("/admin/banners");
            navigate('/admin/ShowroomList');
            dispatch({ type: NEW_SHOWROOM_RESET });
        }
    }, [dispatch, error, navigate, success]);

    const createBannerSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set('name', name);
        myForm.set('address', address);
        myForm.set('phone', phone);
        myForm.set('city', city);
        myForm.set('open_door', open_door);
        myForm.set('iframe', iframe);

        dispatch(createShowroom(myForm));
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
                            <h1>Thêm cửa hàng </h1>
                            <Link to={config.routes.showroomList} className="header-sidebar-btn">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                HỦY
                            </Link>
                        </div>
                    </div>
                    <div className="NewShowroom">
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
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Tên chi nhánh</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Tên chi nhánh"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Thành phố</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Thành phố"
                                            required
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Địa chỉ</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <textarea
                                            placeholder="Địa chỉ"
                                            required
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            cols="65"
                                            rows="7"
                                        ></textarea>
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Điện thoại</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Điện thoại"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Giờ làm việc</p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="Giờ làm việc"
                                            required
                                            value={open_door}
                                            onChange={(e) => setOpen_door(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <p>Địa chỉ map </p>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={10}>
                                        <TextField
                                            type="text"
                                            label="iframe"
                                            required
                                            value={iframe}
                                            onChange={(e) => setIframe(e.target.value)}
                                            variant="outlined"
                                            sx={{ width: '50%' }}
                                        />
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
                                            Thêm cửa hàng
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

export default NewShowroom;
