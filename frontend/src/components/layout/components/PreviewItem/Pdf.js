import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Pdf.module.scss';

const cx = classNames.bind(styles);

function Pdf() {
    return (
        <Button className={cx('Pdf')} to={'/pdf'}>
            <div className={cx('box-pdf')}>
                <img src="https://shopfront-cdn.tekoapis.com/static/c88ca7dfb6a0adbd.svg" alt="" />
                <div className={cx('pdf-text')}>PDF</div>
            </div>
        </Button>
    );
}

export default Pdf;
