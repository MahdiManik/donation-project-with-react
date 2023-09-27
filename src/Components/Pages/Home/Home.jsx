import { useState } from "react";
import Category from "../../Category/Category";
import { useLoaderData } from "react-router-dom";


const Home = () => {


    const categories = useLoaderData();

    const [displayCategory, setDisplayCategory] = useState(categories);

    const [searchInput, setSearchInput] = useState("");

    const handleSearchClick = () => {

        if (searchInput.length == 0) {
            setDisplayCategory(categories)
            return;
        }

        const filteredItem = categories.filter(item =>
            item.type.toLowerCase() == searchInput.toLowerCase())

        setDisplayCategory(filteredItem);

    };


    return (
        <>

            <div>



                <div className="bg-content relative bg-cover opacity-10  
                                 h-[500px] w-full rounded-md "
                    style={{ backgroundImage: 'url("donation.jpg")' }}>


                </div>


                <div className="absolute min-h-screen py-10 -mt-96 ml-28">
                    <div className=" text-center">
                        <div className=" text-black ">
                            <h1 className="text-5xl font-bold pb-10">
                                I Grow By Helping People In Need
                            </h1>
                            <div>
                                <input
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                    className="py-2 px-4 w-4/12 border-2
                                      border-gray-300 rounded-md"
                                    type="text"
                                    name="text"
                                    placeholder="Search here" />
                                <button
                                    onClick={handleSearchClick}
                                    className="bg-red-500 font-semibold 
                                    text-white py-2 
                                     px-6 rounded-md">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4 my-28">
                {
                    displayCategory.map(category => <Category
                        key={category.id}
                        category={category}></Category>)
                }
            </div>

        </>
    );
};

export default Home;