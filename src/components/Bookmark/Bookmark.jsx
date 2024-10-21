import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className='m-5 p-4 bg-purple-300 rounded-2xl'>
            <h3 className='text-xl font-bold'>{title}.</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};

export default Bookmark;