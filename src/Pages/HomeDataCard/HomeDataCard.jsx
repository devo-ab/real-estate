import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeDataCard = ({data}) => {

    const {id, estate_title, segment_name, price, status, location} = data;

    return (
        <div>
            <h1>{data.estate_title}</h1>
            <Link to={`/home-details/${id}`} className='btn btn-ghost'><button>View Details</button></Link>
        </div>
    );
};

HomeDataCard.propTypes = {
    data : PropTypes.object.isRequired
};

export default HomeDataCard;