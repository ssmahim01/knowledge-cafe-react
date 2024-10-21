import PropTypes from "prop-types";
import { IoBookmarksOutline } from 'react-icons/io5';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title,
         cover,
          author,
           author_img,
            reading_time,
             posted_date,
              hashtags} = blog;
    return (
        <div className="space-y-5 pb-16">
            <img className="w-full" src={cover} alt={`Cover picture of the ${title}`} />
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
            <h3 className="text-3xl font-semibold">{title}</h3>

            {
                hashtags.map((hashtag, idx) => <span key={idx} className="ml-2"><a href="">#{hashtag}</a></span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;