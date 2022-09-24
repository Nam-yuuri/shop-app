import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function SearchItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    <div className={cx('content')}>
                        <Button to={'/profile'}>
                            <FontAwesomeIcon icon={faSearch} />
                            kết quả trả về
                        </Button>
                        <Button to={'/profile'}>
                            <FontAwesomeIcon icon={faSearch} />
                            kết quả trả về
                        </Button>
                        <Button to={'/profile'}>
                            <FontAwesomeIcon icon={faSearch} />
                            kết quả trả về
                        </Button>
                        <Button to={'/profile'}>
                            <FontAwesomeIcon icon={faSearch} />
                            kết quả trả về
                        </Button>
                        <Button to={'/profile'}>
                            <FontAwesomeIcon icon={faSearch} />
                            kết quả trả về
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;
