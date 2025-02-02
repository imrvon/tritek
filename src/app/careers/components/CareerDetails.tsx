"use client";

/* eslint-disable @next/next/no-img-element */
// app/blog/[slug]/page.jsx

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

interface CareerType {
  title: { rendered: string };
  content: { rendered: string };
  acf: { apply_link: string };
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

export default function CareerDetails({
  params,
}: {
  params: { slug: string };
}) {
  const [career, setCareer] = useState<CareerType | null>(null);
  // const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const timestamp = new Date().getTime();

  useEffect(() => {
    async function fetchPostData() {
      try {
        // Fetch posts from the API
        const response = await fetch(
          `https://dev-wordpress-ninjas.pantheonsite.io/wp-json/wp/v2/career?_embed&_=${timestamp}`
        );
        const careers = await response.json();

        // Find the specific post with the matching slug
        const matchingCareer = careers?.find(
          (p: any) => p.slug === params.slug
        );

        if (!matchingCareer) {
          notFound(); // Trigger 404 if no post is found
        } else {
          setCareer(matchingCareer);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPostData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-ibm">Loading career...</p>
      </div>
    );
  }

  if (!career) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-ibm">Career not found</p>
      </div>
    );
  }

  // Extract details from the job object
  const { title, content, acf, _embedded, excerpt } = career;
  // console.log(career);
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
          <div className="flex text-white py-5 w-5/12">
          <Link
  target="_blank"
  href={
    acf?.apply_link?.match(/^https?:\/\//) // Checks if it starts with "http://" or "https://"
      ? acf.apply_link
      : `https://${acf.apply_link}` // If not, prepend "https://"
  }
  className="rounded-[25px] md:rounded-[50px] py-[21px] px-[28px] shadow-[0_0_0_4em_#6a008e_inset] hover:-translate-y-[3px] ease-in-out transition-transform duration-300"
>
  Apply Now
</Link>

          </div>
        </div>
      </section>
    </div>
  );
}
