import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCarousel, getCarousels, updateCarousel } from '~/actions/carousels';
import Button from '~/components/Button';
import styles from './Form.module.scss';

const cx = classNames.bind(styles);

function Form({ currentId, setCurrentId }) {
    const [carouselData, setCarouselData] = useState({
        img: '',
    });
    const carousel = useSelector((state) => (currentId ? state.carousels.find((p) => p._id === currentId) : null));

    const dispatch = useDispatch();

    useEffect(() => {
        if (carousel) {
            setCarouselData(carousel);
        }
    }, [carousel]);

    useEffect(() => {
        dispatch(getCarousels());
    }, [dispatch]);

    const handleAdd = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateCarousel(currentId, carouselData));
        } else {
            dispatch(createCarousel(carouselData));
        }

        setCarouselData({
            img: '',
        });
        setCurrentId(0);
    };

    const handleClear = () => {
        setCurrentId(0);
        setCarouselData({});
    };

    return (
        <form>
            <h2 className={cx('form-title')}>{currentId ? 'Editing' : 'Create'} Carousel</h2>
            {/* <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupFile01" style={{ fontSize: '1.3rem' }}>
                    Image product
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    value={carouselData.img}
                    onChange={(e) => setCarouselData({ ...carouselData, img: e.target.value })}
                />
            </div> */}
            <div className="mb-3">
                <textarea style={{minHeight: '30px', maxHeight: '60px', height: '30px'}}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="link ảnh"
                    value={carouselData.img}
                    onChange={(e) => setCarouselData({ ...carouselData, img: e.target.value })}
                />
            </div>
            {carouselData.img.length ? (
                <Button primary small type="submit" className="btn btn-primary" onClick={handleAdd}>
                    {currentId ? 'UPDATE' : 'ADD'}
                </Button>
            ) : (
                <Button disabled small type="submit" className="btn btn-primary" onClick={handleAdd}>
                    {currentId ? 'UPDATE' : 'ADD'}
                </Button>
            )}
            {/* {currentId ? (
                <Fragment />
            ) : ( */}
            {/* <Button primary small type="submit" className="btn btn-primary" onClick={handleClear}>
                CLEAR
            </Button> */}
            {/* )} */}
        </form>
    );
}

export default Form;
