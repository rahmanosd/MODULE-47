import { Link } from "react-router-dom";

const Job = ({job}) => {
    
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 text-emerald-800 font-extrabold border rounded mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 text-emerald-800 font-extrabold border rounded">{job_type}</button>
          </div>
          <div className="flex">
            <h2 className="mr-4">{location}</h2>
            <h2>{salary}</h2>
          </div>
          <div>
            <Link to={`/job/${id}`}>
           <button className="btn btn-primary">View Details</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;