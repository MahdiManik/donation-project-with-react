import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Pie } from 'react-chartjs-2';




const Statistics = () => {


    const [totalPrice, setTotalPrice] = useState(0)

    const statistics = useLoaderData([])
    statistics.categories.map((item) => setTotalPrice(parseFloat(item.price)))
 

    const data = {
        labels: ['Red', 'Green'],
        datasets: [
            {
                data: totalPrice,
                backgroundColor: ['#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
            },
        ],
    };

    const options = {
        totalPrice
    };

    // const PieChart = () => {
        
    // };







    return (
        <div >
            {/* <div id="pieChart">
                <PieChart
                    options={this.state.options}
                    series={this.state.options.series}
                    type="pie"
                    width="100%"
                />
            </div> */}

            <Pie data={data} options={options} />;

        </div>
    );
};



export default Statistics;