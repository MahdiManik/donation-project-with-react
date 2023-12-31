import swal from "sweetalert";
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {


    const { id, title, image, background_color,
        button_text_color, price, description } = category || {};



    const handleDonation = () => {

        const addDonationArray = [];

        const donationItems = JSON.parse(localStorage.getItem("donation"));

        if (!donationItems) {
            addDonationArray.push(category);
            localStorage.setItem("donation", JSON.stringify(addDonationArray));
            swal("Good job!", "Donation added successfully!", "success");
        }

        else {


            const isExits = donationItems.find((item) => item.id === id);


            if (!isExits) {

                addDonationArray.push(...donationItems, category);
                localStorage.setItem("donation", JSON.stringify(addDonationArray));
                swal("Good job!", "Donation added successfully!", "success");

            } else {
                swal("Error!", "No duplicate !", "error");
            }
        }
    };


    return (
        <div className="my-8">
            <h1 className="text-2xl font-bold text-center bg-green-400 py-6 rounded-lg">Card Details</h1>

            <div className="rounded-md my-10 pb-12 flex flex-col gap-4" style={{ backgroundColor: background_color }}>

                <div className="relative">
                    <img className="w-full rounded-md" src={image} alt="" />

                    <div
                        className="absolute bottom-0 left-0 right-0 py-4
                                 bg-black bg-opacity-40"

                    >
                        <button onClick={handleDonation} className="
                        text-white font-semibold w-32 ml-6 py-1 px-2 rounded-md"
                            style={{ backgroundColor: button_text_color }}>Donation ${price}</button>
                    </div>
                </div>

                <div className="m-6">
                    <h3 className='text-2xl pb-4 font-bold'>{title}</h3>
                    <h3 className=''>{description}</h3>
                </div>
            </div>
        </div>
    );
};



CategoryCard.propTypes = {
    category: PropTypes.object,

};

export default CategoryCard;