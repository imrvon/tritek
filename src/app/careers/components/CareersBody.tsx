"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CareersBody() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  const timestamp = new Date().getTime();

  useEffect(() => {
    async function fetchCareers() {
      try {
        const response = await fetch(
          `https://dev-wordpress-ninjas.pantheonsite.io/wp-json/wp/v2/career?_embed&_=${timestamp}`
        );
        const data = await response.json();
        setCareers(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCareers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("careers", careers);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[10rem]">
        <p className="text-2xl font-medium">Loading Careers...</p>
      </div>
    );
  }

  if (!careers?.length) {
    return (
      <div className="flex justify-center items-center h-[10rem]">
        <p className="text-2xl font-medium">No Careers Found</p>
      </div>
    );
  }

  function extractTextContent(html: string): string[] {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
  
    // Select all elements inside the body
    const elements = doc.body.querySelectorAll("*");
  
    // Extract and return text content from all elements
    return Array.from(elements).map((el) => el.textContent?.trim() || "").filter(Boolean);
  }
  
  
  return (
    <div className="px-[5%] py-6 md:py-10 my-4 sm:my-6 lg:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 lg:gap-y-10 gap-x-[3.5%] lg:gap-x-[1.5%] xl:gap-x-[3.5%]">
      {careers?.map((career: any) => {
        const { id, title, content, acf } = career;
        const careerTitle = title?.rendered || "Career Title";
        const description = extractTextContent(content?.rendered || "No description available");
        const careerType = acf?.career_type || "Unknown Type";
        const location = acf?.location || "Location not specified";

        return (
          <Link href={`/careers/${career.slug}`}
            key={id}
            className="bg-white shadow-md px-4 sm:px-6 py-4 sm:py-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Career Title */}
            <h3 className="text-[1.3rem] sm:text-[1.5rem] md:text-[1.3rem] hover:underline font-spartan line-clamp-1 lg:line-clamp-2 h-auto lg:h-16 font-bold text-gray-800">{careerTitle}</h3>

            {/* Career Details */}
            <div className=" space-y-4 mt-3">
                {/* Career Type and Location */}
              <div className="flex justify-between items-center text-sm sm:text-[0.95rem] md:text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                  {careerType}
                </span>
                <span>{location}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 font-spartan text-[1rem] sm:text-[1.1rem] md:text-[1rem] mt-2 line-clamp-3">
                {description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
