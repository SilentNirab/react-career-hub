import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utiliti/localstoreg";

const Jobdetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id == intId);
    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, salary, job_title } = job;
    const handelApply = () =>{
        toast('Applied successfully');
        saveJobApplication(id);
    }
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 gap-4 my-4">
                <div className="col-span-3 space-y-2 ">
                    <p><span className="text-white text-lg font-samibold">Job Description: </span>{job_description}</p>
                    <p><span className="text-white text-lg font-samibold">Job Responsibility: </span>{job_responsibility}</p>
                    <p><span className="text-white text-lg font-samibold">Educational Requirements: </span>{educational_requirements}</p>
                    <p><span className="text-white text-lg font-samibold">Experiences: </span>{experiences}</p>
                </div>
                <div className="">
                <div className="bg-current p-5 space-y-4">
                    <div className="text-black space-y-1">
                        <h3 className="text-lg font-semibold">Job Details</h3>
                        <hr />
                        <p>{salary}</p>
                        <p>{job_title}</p>
                    </div>
                    <div className="text-black space-y-1">
                        <h3 className="text-lg font-semibold">Contact Information</h3>
                        <hr />
                        <p>{contact_information.phone}</p>
                        <p>{contact_information.email}</p>
                        <p>{contact_information.address}</p>
                    </div>

                </div>
                <Link className="">
                    <button className="btn btn-primary w-full mt-4"
                    onClick={handelApply}
                    >Apply Now</button>
                    <ToastContainer />
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;