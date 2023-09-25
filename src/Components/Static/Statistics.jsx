import { useState } from "react";
import { useLoaderData } from "react-router-dom";



const Statistics = () => {


    const [totalPrice, setTotalPrice] = useState(0)
    const statistics = useLoaderData([])
    statistics.categories.map(item => item.price )
    // const price = item.price




    return (
        <div>
            
        </div>
    );
};



export default Statistics;