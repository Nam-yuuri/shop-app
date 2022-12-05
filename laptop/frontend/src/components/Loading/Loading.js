import Spline from '@splinetool/react-spline';
import './Loading.scss';

export default function Loading() {
    return (
        <div className="loading-parent">
            <Spline scene="https://prod.spline.design/RAuEfYV1rxbtQoAc/scene.splinecode" />
            <div className="container-loading">
                <div className="loader">
                    <div className="loader--text"></div>
                </div>
            </div>
        </div>
    );
}
