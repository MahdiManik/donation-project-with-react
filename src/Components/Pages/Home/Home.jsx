import { useLoaderData } from "react-router-dom";
import Category from "../../Category/Category";
import Hero from "../Hero/Hero";

const Home = () => {

    const categories = useLoaderData([]);

    const allData = categories.categories;


    return (
        <>
            <Hero></Hero>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-4 my-28">
                {
                    allData.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </>
    );
};

export default Home;