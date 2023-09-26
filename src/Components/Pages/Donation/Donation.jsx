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
            setNoFound("No Data Found");
        }
    }, []);



    return (
        <div>
            {noFound ? (
                <p className="flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    <h1 className="text-2xl font-bold text-center bg-green-400 py-6 rounded-lg">Donation Card</h1>
                    {donation.length > 0 && (
                        <div className="py-12 text-xl font-semibold">

                            <h1>Total Donation : {totalPrice}</h1>
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