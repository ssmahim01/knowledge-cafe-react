import PropTypes from "prop-types";
import { IoBookmarksOutline } from 'react-icons/io5';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id,
        title,
         cover,
          author,
           author_img,
            reading_time,
             posted_date,
              hashtags} = blog;
    return (
        <div className="space-y-4 pb-16 w-full">
            <img className="w-full rounded-xl" src={cover} alt={`Cover picture of the ${title}`} />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14" src={author_img}/>
                <div className="ml-6">
                    <h3 className="text-2xl font-semibold">{author}</h3>
                    <p className="text-gray-600">{posted_date}</p>
                </div>
            </div>

                <div>
                    <span>{reading_time} min read
                        <button onClick={() => handleAddToBookmark(blog)} className="ml-2">
                            <IoBookmarksOutline/>
                                </button>
                    </span>
                </div>
            </div>
            <h2 className="text-3xl font-semibold">{title}</h2>

           <p> {
                hashtags.map((hashtag, idx) => <span key={idx} className="ml-2 text-lg text-gray-600 font-medium"><a href="">#{hashtag}</a></span>)
            }
           </p>

            <button 
            onClick={() => handleMarkAsRead(id, reading_time)}
            className="underline text-purple-700 font-bold">Mark As Read</button>
          </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;