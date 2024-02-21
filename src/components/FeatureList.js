import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const FeatureList = () => {
    const { states, func } = useContext(GlobalContext);
    const { data } = states;
    const { fetchData, seeDetail } = func;

    useEffect(() => {
        fetchData();
    }, []);

    //mengacak data yang akan ditampilkan
    // const randomComparator = () => 0.5 - Math.random();
    // const randomJobs = data.sort(randomComparator).slice(0, 4);

    //tampilkan data secara acak
    const jobListElement = data.slice(0, 4).map((job) => {
        return (
            <div className="card bg-base-100 shadow-xl" key={job.id}>
                <div className="card-body">
                    <div className="flex justify-between">
                        <img
                            src={job.company_image_url}
                            className="h-10 w-14"
                            alt="logo-company"
                        />
                        <div className="badge badge-accent justify-end font-medium">
                            {job.job_tenure}
                        </div>
                    </div>
                    <h2 className="card-title text-lg text-primary font-bold">
                        {job.title}
                    </h2>

                    <p className="text-xs text-secondary">
                        {`${job.company_name} | ${job.company_city} (${job.job_type})`}
                    </p>
                    <p className="text-xs">
                        {job.job_description === null
                            ? "-"
                            : job.job_description.length > 60
                            ? job.job_description.substr(0, 60) + "..."
                            : job.job_description}
                    </p>
                    <p className=" text-xs mb-7">{`Rp.${job.salary_min} - Rp${job.salary_max}`}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary btn-sm"
                            value={job.id}
                            onClick={seeDetail}
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div id="skill">
        <div className="skill-main">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title text-center wow fadeIn">
                  <h3>My Skill</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>
                    I value simple content structure, clean design patterns,
                    and thoughtful interactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="row love-row wow fadeIn">
              <div className="col-md-6">
                <div className="skill-details text-left">
                  <p>
                    UI/UX involves planning and iterating a site's structure
                    and layout. Once the proper information architecture is in
                    place, I design the visual layer to create a beautiful
                    user experience. Front End Development is building out the
                    visual components of a website. Using HTML, CSS, and
                    Javascript, I build fast, interactive websites. This also
                    may include a CMS, apis, or other integrations. The work
                    that I am most interested in is 0-1 work (helping you get
                    your idea into the world).
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="skill-details">
                  <div className="content">
                    <div className="col">
                      <ul id="skill-main">
                        <li>
                          <h3>HTML / CSS - 97%</h3>
                        </li>
                        <li>
                          <h3>UI / UX - 92%</h3>
                        </li>
                        <li>
                          <h3>React JS - 30%</h3>
                        </li>
                        <li>
                          <h3>PHP (Laravel) - 93%</h3>
                        </li>
                        <li>
                          <h3>MySQL - 95%</h3>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FeatureList;
