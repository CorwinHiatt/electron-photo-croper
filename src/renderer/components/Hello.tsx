import {Link} from 'react-router-dom';
import icon from '../../../assets/icon.svg';

const Hello = () => {
  return (
    <>
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <Link to='/Photo'>
          <button type="button">
            <span role="img" aria-label="books">
              📸
            </span>
            Crop Photo
          </button>
        </Link>

      </div>
    </div>
    </>
  );
};

export default Hello;
