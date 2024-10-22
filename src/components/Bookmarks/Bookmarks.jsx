import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="lg:w-1/3 w-4/5 mx-auto bg-slate-200 ml-5 py-6 my-6 rounded-xl space-y-4">
            <h2 className="border-2 border-purple-700 rounded-lg bg-purple-200 p-5 text-2xl text-purple-600 text-center font-bold w-11/12 mx-auto">Spent Time On Read: {readingTime} min</h2>

            <h4 className="text-3xl font-bold text-center">Bookmarks: {bookmarks.length}</h4>

            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;