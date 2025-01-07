"use client";

/* eslint-disable @next/next/no-img-element */
// app/blog/[slug]/page.jsx

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { BiSolidQuoteRight } from "react-icons/bi";
import Link from "next/link";

interface PostType {
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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<PostType | null>(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const timestamp = new Date().getTime();

  useEffect(() => {
    async function fetchPostData() {
      try {
        // Fetch posts from the API
        const response = await fetch(
          `https://dev-tritek.pantheonsite.io/wp-json/wp/v2/posts?_embed&_=${timestamp}`
        );
        const posts = await response.json();

        // Find the specific post with the matching slug
        const matchingPost = posts.find((p: any) => p.slug === params.slug);

        if (!matchingPost) {
          notFound(); // Trigger 404 if no post is found
        } else {
          setPost(matchingPost);
        }

        // Set all posts as recent posts excluding the current post
        const filteredRecentPosts = posts.filter(
          (p: any) => p.slug !== params.slug
        );
        setRecentPosts(filteredRecentPosts);
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
        <p className="text-2xl font-ibm">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-ibm">Post not found</p>
      </div>
    );
  }

  // Extract details from the post object
  const { title, content, _embedded, excerpt } = post;

  const featuredImage = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const categories =
    _embedded?.["wp:term"]?.[0]?.map((term: any) => term.name).join(", ") ||
    "Uncategorized";

    function truncateTextByChars(text: string, charLimit: number): string {
      if (text.length <= charLimit) {
        return text; // Return the original text if it's within the limit
      }
    return text.slice(0, charLimit) + "..."; // Truncate text and add ellipsis
  }

  return (
    <div className="px-[5%] mt-12 lg:mt-20 py-10">
      <div className="flex items-center gap-2 text-gray-500 mb-2">
        <span className="font-semibold">{categories}</span>
      </div>
      <section className="flex flex-col md:flex-row gap-8 lg:gap-16 ">
        {/* Main Blog Post */}
        <div className=" w-full md:w-3/4  font-ibm">
          {/* Categories */}

          {/* Title */}
          <div>
            <h1 className="text-[2rem] md:text-[2.2rem] lg:text-[2.7rem] font-dm font-bold mb-4">
              {title?.rendered}
            </h1>
            <h4 className="font-ibm italic font-medium text-[1.1rem] mb-8">
              {excerpt?.rendered?.replace(/<[^>]+>/g, "")}{" "}
              {/* Remove HTML tags */}
            </h4>
          </div>

          {/* Featured Image */}
          {featuredImage && (
            <div>
              <img
                src={featuredImage}
                alt={title?.rendered}
                className="w-full h-[25rem] object-cover mb-6"
              />
            </div>
          )}

          {/* Content */}
          <div className="text-base text-black font-nuno space-y-4">
            {content?.rendered
              ?.split("</p>") // Split by closing </p> tag
              .map((para, index) => {
                if (index === 1) {
                  // For the second paragraph, wrap it with blockquote and add the icon
                  return (
                    <div
                      key={index}
                      className="flex flex-col  gap-2 text-gray-500"
                    >
                      <div className=" py-1.5 lg:py-3 ">
                        <BiSolidQuoteRight className="text-[3rem] italic" />
                      </div>
                      <blockquote
                        className="text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] font-dm text-black leading-[150%] italic"
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    </div>
                  );
                }
                // Wrap other paragraphs with <p> tag
                return (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: para + "</p>" }}
                  />
                );
              })}
          </div>

          {/* <div
            className="text-base text-gray-700 font-nuno space-y-4"
            dangerouslySetInnerHTML={{ __html: content?.rendered }}
          /> */}
        </div>

        {/* Recent Posts Section */}
        <div className=" w-full md:w-1/4  font-dm">
          <h1 className="text-[1.2rem] font-dm mt-0 md:mt-6 mb-4">Recent Posts</h1>
          <div className="grid grid-cols-1 gap-4">
            {recentPosts.slice(0, 5).map((recentPost: any) => {
              const recentImage =
                recentPost?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "";
              const recentCategories =
                recentPost?._embedded?.["wp:term"]?.[0]
                  ?.map((term: any) => term.name)
                  .join(", ") || "Uncategorized";
              const recentDate = new Date(recentPost.date).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              );

              return (
                <div
                  key={recentPost.id}
                  className="bg-white flex items-center border-b pb-4 gap-4 md:gap-2"
                >
                  {/* Featured Image */}
                  <div className="w-1/3">
                    {recentImage && (
                      <img
                        src={recentImage}
                        alt={recentPost.title.rendered}
                        className="w-full h-28 sm:h-32 md:h-20 object-cover"
                      />
                    )}
                  </div>

                  {/* Post Details */}
                  <div className=" w-2/3 ">
                    <p className=" font-spartan text-[0.85rem] ">
                      {recentDate}
                    </p>
                    <h2 className="text-[1rem]  mt-1">
                      <Link
                        href={`/blog/${recentPost.slug}`}
                        className="hover:text-[#9e9f7f]"
                      >
                         {truncateTextByChars(recentPost.title.rendered || "", 35)}
                      </Link>
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
