
// 
import { useEffect, useState } from "react";

import { useLoaderData, } from "react-router-dom";
import { Cell, PieChart, Pie } from "recharts";



const Statistics = () => {

    const [storedData, setStoredData] = useState([])

    const categoriesData = useLoaderData();


    const donationPercentage = (storedData.length / categoriesData.length) * 100;
    const percentage = parseFloat(donationPercentage.toFixed(2))

    const total = 100 - donationPercentage;
    const totalFixed = parseFloat(total.toFixed(2))

    useEffect(() => {

        const dataStored = JSON.parse(localStorage.getItem("donation"))

        if (dataStored) {
            setStoredData(dataStored)
        }

    }, [])


    const data01 = [
        { name: 'Group A', value: totalFixed,  color: 'red'},
        { name: 'Group B', value: percentage, color: 'green' },
    ];


    return (
        <div >

            <PieChart width={800} height={800}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={300}
                    label
                >
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
            </PieChart>

            

        </div>
    );
};



export default Statistics;