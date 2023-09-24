import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utiliti/localstoreg";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedjobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDispalyJobs] = useState([]);

    const handelJobFilter = Filter =>{
        if (Filter === 'all') {
            setDispalyJobs(appliedjobs)
        }
        else if(Filter === 'remote'){
            const remoteJobs = appliedjobs.filter(job => job.remote_or_onsite === 'Remote')
            setDispalyJobs(remoteJobs)
        }
        else if(Filter === 'onesite'){
            const onsiteJobs = appliedjobs.filter(job => job.remote_or_onsite === 'Onesite')
            setDispalyJobs(onsiteJobs)
        }
    }
    
    useEffect(() => {
        const getStoredIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied = [];
            for (const id of getStoredIds) {
                const job = jobs.find(job => job.id == id);
                jobApplied.push(job);
               
            }
             setAppliedJobs(jobApplied);
             setDispalyJobs(jobApplied);
        }
    }, [jobs])

    return (
        <div className="flex flex-col items-center">
            <p className="text-3xl font-semibold text-white">Jobs I applied: {appliedjobs.length}</p>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">Filter by</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                    <li><a onClick={ () => handelJobFilter('all')}>All</a></li>
                    <li><a onClick={ () => handelJobFilter('remote')}>Remote</a></li>
                    <li><a onClick={ () => handelJobFilter('onsite')}>Onsite</a></li>
                </ul>
            </details>
            <ul className="flex flex-col justify-center items-center">
                {
                    displayJobs.map(job => <li key={job.id} className="flex justify-between space-x-4">
                        <img src={job.logo} alt="" />
                        <p>{job.job_title}</p> 
                        </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;