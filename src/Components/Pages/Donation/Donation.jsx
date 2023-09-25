

const Donation = ({ category }) => {



    const handleDonation = () => {
        console.log(category);
    }



    const { title, image, background_color,
        button_background_color, button_text_color, price, description } = category;

    return (
        <div className="my-20">
            <div className="rounded-md my-16 pb-12 flex flex-col gap-4" style={{ backgroundColor: background_color }}>

                <div className="relative">
                    <img className="w-full rounded-md" src={image} alt="" />

                    <div
                        className="absolute bottom-0 left-0 right-0 py-3
                                 bg-black bg-opacity-50"
                        style={{ backgroundColor: button_background_color }}
                    >
                        <button onClick={handleDonation} className="text-white font-semibold w-32 ml-6 py-1 px-2 rounded-md" 
                        style={{ backgroundColor: button_text_color }}>Donation ${price}</button>
                    </div>
                </div>

                <div className="m-6">
                    <h3 className='text-2xl font-bold'>{title}</h3>
                    <h3 className=''>{description}</h3>
                </div>
            </div>
        </div>
    );
};

export default Donation;