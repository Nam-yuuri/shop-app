import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import FeaturedBrand from './FeaturedBrand';
import Grid from './Grid';

import Panel from './panel/Panel';

const cx = classNames.bind(styles);

function ContainerHome({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className="container">
                    <div className={cx('box')}>
                        <Panel />
                    </div>
                    <div className={cx('box')}>
                        <FeaturedBrand />
                    </div>
                    <div className={cx('box')}>
                        <Grid />
                    </div>
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default ContainerHome;
