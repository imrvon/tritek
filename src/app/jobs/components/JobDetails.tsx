"use client";

/* eslint-disable @next/next/no-img-element */
// app/blog/[slug]/page.jsx

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";

interface JobType {
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
      alt_text?: string;
    }[];
    "wp:term"?: { name: string }[][];
  };
}

export default function JobDetails({ params }: { params: { slug: string } }) {
  const [job, setJob] = useState<JobType | null>(null);
  // const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPostData() {
      try {
        // Fetch posts from the API
        const response = await fetch(
          `https://dev-jozz-portfolio.pantheonsite.io/wp-json/wp/v2/job?_embed`
        );
        const jobs = await response.json();

        // Find the specific post with the matching slug
        const matchingJob = jobs.find((p: any) => p.slug === params.slug);

        if (!matchingJob) {
          notFound(); // Trigger 404 if no post is found
        } else {
          setJob(matchingJob);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPostData();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-ibm">Loading job...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-ibm">Job not found</p>
      </div>
    );
  }

  // Extract details from the job object
  const { title, content, _embedded, excerpt } = job;

  // const featuredImage = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  // const categories =
  //   _embedded?.["wp:term"]?.[0]?.map((term: any) => term.name).join(", ") ||
  //   "Uncategorized";

  // function truncateTextByChars(text: string, charLimit: number): string {
  //   if (text.length <= charLimit) {
  //     return text; // Return the original text if it's within the limit
  //   }
  //   return text.slice(0, charLimit) + "..."; // Truncate text and add ellipsis
  // }

  return (
    <div className="px-[5%] mt-12 lg:mt-20 py-10">
      <section className="flex flex-col md:flex-row gap-8 lg:gap-16 ">
        {/* Main Job Post */}
        <div className=" w-full lg:w-3/4  font-ibm">
          {/* Categories */}

          {/* Title */}
          <div>
            <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] font-spartan lg:text-[2.7rem]  font-bold mb-4">
              {title?.rendered}
            </h1>
            {/* <h4 className="font-ibm italic font-medium text-[1.1rem] mb-8">
              {excerpt?.rendered?.replace(/<[^>]+>/g, "")}{" "}
            </h4> */}
          </div>

          <div
            className="text-[0.95rem] sm:text-base text-gray-700 text-justify font-nuno space-y-4"
            dangerouslySetInnerHTML={{ __html: content?.rendered }}
          />
        </div>
      </section>
    </div>
  );
}
