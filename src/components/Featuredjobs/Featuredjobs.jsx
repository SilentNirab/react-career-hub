import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featuredjobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('job.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold">Featured Jobs</h1>
            <p className="text-lg">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
            <button
            className="btn btn-primary"
            onClick={()=>setDataLength(jobs.length)}
            >Show All</button>
            </div>
        </div>

    );
};

export default Featuredjobs;