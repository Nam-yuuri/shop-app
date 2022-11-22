import Spline from '@splinetool/react-spline';
import './Loading.scss';

export default function Loading() {
    return (
        <div className="loading-parent">
            <Spline scene="https://prod.spline.design/RAuEfYV1rxbtQoAc/scene.splinecode" />
            <div class="container-loading">
                <div class="loader">
                    <div class="loader--text"></div>
                </div>
            </div>
        </div>
    );
}
