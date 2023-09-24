import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utiliti/localstoreg";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedjobs, setAppliedJobs] = useState([]);
    useEffect(() => {
        const getStoredIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobApplied = [];
            for (const id of getStoredIds) {
                const job = jobs.find(job => job.id === id);
                jobApplied.push(job);
            }
            setAppliedJobs(jobApplied);
        }
    }, [jobs])
    return (
        <div>
            <p>Jobs:{appliedjobs.length}</p>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">Filter by</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </details>
        </div>
    );
};

export default AppliedJobs;