import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-3xl text-center">
            <h1>Opps !!!</h1>
            <Link to="/" className="bg-orange-700 rounded-2xl">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;