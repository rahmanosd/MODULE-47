import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

 const JobDetails = () => {
// Best work Not JobDeatils -- tis is a no worked
    //    const jobs = useLoaderData();
    //    const {id} = useParams();
    //    const idInt = parseInt(id);
    //    const job = jobs.find(job => job.id === idInt);
    //    console.log(job);

   const handleApplyJob = () => {
    // Not Workded
    //saveJobApplication(idInt);
    toast('You have Applyed Successfully');
   }

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Coming Here</h2>
                    <h2 className="text-3xl font-semibold">This is a details : </h2>
                    <p className="font-bold">Google LTC</p>
                </div>
               <div className="border">
                 <h2 className="text-2xl">Side Things</h2>
                 <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
               </div>
            </div>
        <ToastContainer />
        </div>
    );
};

export default JobDetails;