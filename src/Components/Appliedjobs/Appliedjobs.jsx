import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const Appliedjobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // option-1 : hard work
            //const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            // option-2 : easy work
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (
        <div>
            <h1 className="text-3xl">Jobs I Applied: {appliedJobs.length}</h1>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 btn-primary">Open or Close</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>onSite</a></li>
                </ul>
            </div>
            <ul>
                <li>Product Designer</li>
                <li>Software enginner</li>
                <li>Google Tlc</li>
            </ul>
        </div>
    );
};

export default Appliedjobs;