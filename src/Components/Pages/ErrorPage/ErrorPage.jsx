import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[500px]
         bg-white p-4 rounded-lg shadow-lg">
            <h4>Oops!!!</h4>
            <button><Link to={'/'}>Go Home</Link></button>
        </div>
    );
};

export default ErrorPage;