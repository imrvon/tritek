"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function JobsBody() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const timestamp = new Date().getTime();

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(
          `https://dev-tritek.pantheonsite.io/wp-json/wp/v2/job?_embed&_=${timestamp}`
        );
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  // console.log("jobs", jobs);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[10rem]">
        <p className="text-2xl font-medium">Loading jobs...</p>
      </div>
    );
  }

  if (!jobs.length) {
    return (
      <div className="flex justify-center items-center h-[10rem]">
        <p className="text-2xl font-medium">No Jobs Found</p>
      </div>
    );
  }

//   function stripHTMLTags(html: string): string {
//     const tempDiv = document.createElement("p");
//     tempDiv.innerHTML = html;
//     return tempDiv.textContent || tempDiv.innerText || "";
//   }

function extractParagraphItems(html: string): string[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const listItems = doc.querySelectorAll("p");
    return Array.from(listItems).map((item) => item.textContent || "");
  }
  
  return (
    <div className="px-[5%] py-6 md:py-10 my-4 sm:my-6 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 lg:gap-y-10 gap-x-[3.5%] lg:gap-x-[1.5%] xl:gap-x-[3.5%]">
      {jobs?.map((job: any) => {
        const { id, title, content, acf } = job; // Assuming ACF is used for custom fields
        const jobTitle = title?.rendered || "Job Title";
        const description = extractParagraphItems(content?.rendered || "No description available");
        const jobType = acf?.job_type || "Unknown Type";
        const location = acf?.location || "Location not specified";

        return (
          <Link href={`/jobs/${job.slug}`}
            key={id}
            className="bg-white shadow-md px-4 sm:px-6 py-4 sm:py-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Job Title */}
            <h3 className="text-[1.3rem] sm:text-[1.5rem] md:text-[1.3rem] hover:underline font-spartan line-clamp-1 lg:line-clamp-2 h-auto lg:h-16 font-bold text-gray-800">{jobTitle}</h3>

            {/* Job Details */}
            <div className=" space-y-4 mt-3">
                {/* Job Type and Location */}
              <div className="flex justify-between items-center text-sm sm:text-[0.95rem] md:text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                  {jobType}
                </span>
                <span>{location}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 font-spartan text-[1rem] sm:text-[1.1rem] md:text-[1rem] mt-2 line-clamp-3">
                {description}
              </p>
            </div>

            {/* Apply Button */}
            {/* <button
              className="mt-4 w-full text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded py-2"
              onClick={() => window.open(`/jobs/${job.slug}`, "_blank")}
            >
              View Details
            </button> */}
          </Link>
        );
      })}
    </div>
  );
}
