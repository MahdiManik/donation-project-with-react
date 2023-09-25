
import PropTypes from 'prop-types';

const DonationCard = (categoryId) => {

    console.log({ categoryId });

    const { title, button_text, image, background_color,
        button_background_color, button_text_color, price } = categoryId.categoryId || {};


    return (
        <div className='my-2'>


            <div className="card grid grid-cols-3 lg:card-side bg-base-100 shadow-xl rounded-md justify-start gap-5" style={{ backgroundColor: background_color }}>
                <figure className='col-span-1'><img className='h-36 w-full' src={image} alt="Album" /></figure>
                
                <div className="card-body col-span-2 py-2 flex flex-col gap-2">
                    <p className='card-title w-20 text-center  rounded-md' style={{
                        backgroundColor: button_background_color,
                        color: button_text_color
                    }}>{button_text}</p>

                    <h3 className='text-xl font-semibold'>{title}</h3>
                    <p style={{
                        color: button_text_color
                    }}
                    >${price}</p>
                    <div className="card-actions justify-end">
                        <button className="py-1 px-4 rounded-md text-white font-semibold" style={{
                            backgroundColor: button_text_color
                        }}>View Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

DonationCard.propTypes = {
    categoryId: PropTypes.object
};

export default DonationCard;