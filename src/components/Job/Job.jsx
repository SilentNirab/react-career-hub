import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiDollar } from 'react-icons/ci';


const Job = ({ job }) => {

    const { id, logo, job_title, company_name, job_type, location, salary } = job;
    return (
        <div className="card card-compactbg-base-100 shadow-xl text-left">
            <figure className=''><img src={logo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <Link ><span className='border-2 border-blue-500 p-2 rounded-md'>{job_type}</span></Link>
                <div className="flex align-center">
                    <CiLocationOn className='mt-1'></CiLocationOn><p className='pl-1'>{location}</p>
                    <CiDollar className='mt-1'></CiDollar>   <p className='pl-1'>{salary}</p>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View Ditails</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

Job.propTypes = {
    job: PropTypes.object
};

export default Job;