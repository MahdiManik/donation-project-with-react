

const Hero = () => {
    return (

        <>
            <div className="bg-content relative bg-cover opacity-10  h-[500px] w-full rounded-md "
                style={{ backgroundImage: 'url("donation.jpg")' }}>


            </div>


            <div className="absolute min-h-screen py-10 -mt-96 ml-28">
                <div className=" text-center">
                    <div className=" text-black ">
                        <h1 className="text-5xl font-bold pb-10">I Grow By Helping People In Need</h1>
                        <div>
                            <input className="py-2 px-4 w-4/12 border-2 border-gray-300
                             rounded-md" type="search" name="text" placeholder="Search here" />
                            <button className="bg-red-500 font-semibold text-white py-2 
                            px-6 rounded-md">Search</button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default Hero;