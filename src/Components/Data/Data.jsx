import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "../categoryCard/CategoryCard";


const Data = () => {
    const [category, setCategory] = useState({});

    const categories = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    useEffect(() => {


        const findData = categories?.find((data) => data.id === idInt);
        setCategory(findData);

    }, [categories, idInt]);

   


    return (
        <>

        <CategoryCard key={category.id} category={category}></CategoryCard>

            
        </>
    );
};

export default Data;
