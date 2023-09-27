import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Static/Statistics';
import Data from '../Data/Data';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';


const CreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("/data.json")
            },
            {
                path: '/static',
                element: <Statistics></Statistics>,
                loader: () => fetch("/data.json")
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/category/:id',
                element: <Data></Data>,
                loader: () => fetch("/data.json"),
            },
            
        ]
    }
])


export default CreateRoute;
