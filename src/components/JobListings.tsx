import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

type TJobListingsProp = {
  isHome: boolean;
};

type TJobData = {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
};

const JobListings = ({ isHome = false }: TJobListingsProp) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async (): Promise<void> => {
      const apiURL = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        setLoading(true);
        const response = await fetch(apiURL);
        const data = await response.json();

        setJobs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent jobs" : "Browse jobs"}
        </h2>

        {loading ? (
          <>
            <Spinner loading={true} />
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job: TJobData) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
