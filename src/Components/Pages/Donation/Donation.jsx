import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem("donation"));

        if (donationItems) {
            setDonation(donationItems);

            const total = donationItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0)


            setTotalPrice(total)


        } else {
            setNoFound(<div className="flex justify-center items-center h-[500px]">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-2xl text-gray-600">No Data Found</p>
                </div>
            </div>);
        }
    }, []);


    const handleRemove = () => {
        localStorage.clear();
        setDonation([]);
        setNoFound(<div className="flex justify-center items-center h-[500px]">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl text-gray-600">No Data Found</p>
            </div>
        </div>);
    };



    return (
        <div>
            {noFound ? (
                <p className="flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    <h1 className="text-4xl font-bold flex flex-col justify-center 
                    items-center mx-48 text-white
                     bg-green-700 py-4 mt-8 rounded-lg">Donation Card</h1>
                    {donation.length > 0 && (
                        <div className="py-12 text-xl font-semibold">

                            <button
                                onClick={handleRemove}
                                className="flex flex-col justify-center items-start bg-green-700 

                                 text-white mx-auto py-1 px-5 my-4 rounded-lg "
                            >
                                Deleted All Donation
                            </button>

                            <h1 className=" flex flex-col justify-center items-center bg-green-700 font-semibold
                                 text-white mx-52 py-2 my-6 rounded-md">Total Donation : {totalPrice}</h1>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                        {
                            isShow ? donation.map((categoryId) => (
                                <DonationCard key={categoryId.id} categoryId={categoryId}></DonationCard>
                            ))

                                : donation.slice(0, 4).map((categoryId) => (
                                    <DonationCard key={categoryId.id} categoryId={categoryId}></DonationCard>
                                ))

                        }
                    </div>

                    {donation.length > 4 &&
                        <button onClick={() => setIsShow(!isShow)} className="px-5
                     bg-green-600 block mx-auto rounded-md mt-6 text-white font-semibold py-1">
                            {isShow ? "See less" : "See more"}
                        </button>}
                </div>
            )}
        </div>
    );
};


export default Donation;