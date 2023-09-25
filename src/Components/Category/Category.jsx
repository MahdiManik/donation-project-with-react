
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Category = ({ category }) => {

    const { id, title, image, background_color,
        button_text, button_background_color, button_text_color, } = category;


    return (


        <>

            <Link to={`/category/${id}`} className='rounded-md pb-4 cursor-pointer 
            flex flex-col justify-center items-start gap-3' style={{ backgroundColor: background_color }}>

                <img src={image} alt="" />
                <h3 className='w-20 text-center mx-4 rounded-md' style={{
                    backgroundColor: button_background_color,
                    color: button_text_color
                }}>{button_text}</h3>
                <h3 className='mx-4' style={{ color: button_text_color }}>{title}</h3>
            </Link>

        </>


    );
};


Category.propTypes = {
    category: PropTypes.object
};

export default Category;


