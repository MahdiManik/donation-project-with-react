import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Static from '../Pages/Static/Static';
import Data from '../Data/Data';




const CreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("../../../public/data.json")
            },
            {
                path: '/static',
                element: <Static>pr</Static>
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/category/:id',
                element: <Data></Data>,
                loader: () => fetch("../../../public/data.json"),
            },
            
        ]
    }
])


export default CreateRoute;
