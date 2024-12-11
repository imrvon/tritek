"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import { PiDotOutline } from "react-icons/pi";

function PostsBody() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [postsNew, setPostsNew] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://dev-jozz-portfolio.pantheonsite.io/wp-json/wp/v2/posts?_embed"
        );
        const data = await response.json();
        setPostsNew(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  console.log(postsNew);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  // Extract categories
  const categories = [
    "All",
    ...Array.from(
      new Set(
        postsNew.flatMap((post: any) =>
          post?._embedded?.["wp:term"]?.[0]?.map((term: any) => term.name) || []
        )
      )
    ),
  ];

  // Filter posts by selected category
  const filteredPosts =
    selectedCategory === "All"
      ? postsNew
      : postsNew.filter((post: any) =>
          post?._embedded?.["wp:term"]?.[0]?.some(
            (term: any) => term.name === selectedCategory
          )
        );

  return (
    <div className="px-[5%] font-ibm  py-10">
      {/* Tabs for categories */}
      <div className="flex justify-center gap-4 mt-16 mb-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 flex flex-col justify-start text-[1rem] font-nuno rounded ${
              selectedCategory === category
                ? " text-[#9e9f7f]"
                : " text-black hover:text-[#9e9f7f]"
            }`}
          >
            <p>{category}</p>
            {selectedCategory === category && (
              <PiDotOutline className=" text-[2rem] mt-[-0.5rem] ml-[-0.75rem] " />
            )}
          </button>
        ))}
      </div>

      {/* Post Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-y-10 gap-x-[3.5%] ">
        {filteredPosts.map((post: any) => {
          const featuredImage =
            post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
          const category =
            post?._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

          return (
            <section
              key={post.id}
              className="bg-no-repeat bg-cover h-[30rem] relative text-white pb-[10%] px-[7.5%] w-full group"
              style={{ backgroundImage: `url(${featuredImage})` }}
            >
              <div className="absolute inset-0 bg-black/50 transition-transform transform group-hover:scale-[102%] "></div>
              <div className="relative z-10 flex flex-col justify-end h-full">
                <div className="flex font-spartan text-[1rem] font-medium items-center gap-2 ">
                  <Link
                    href={`/blog/${post?.slug}`}
                    className="font-bold hover:text-[#9e9f7f] text-center"
                  >
                    {category}
                  </Link>
                  <GoDotFill />
                  <Link
                    href={`/blog/${post?.slug}`}
                    className="font-bold hover:text-[#9e9f7f] text-center"
                  >
                    Latest News
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-dm text-[1.5rem] hover:text-[#9e9f7f] font-bold text-center"
                  >
                    {post.title.rendered || ""}
                  </Link>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex hover:text-[#9e9f7f] font-nuno items-center gap-2 mt-10"
                >
                  <p className="text-[0.8rem] leading-none font-bold">
                    READ MORE
                  </p>
                  <IoIosArrowDropright className="text-[1.2rem]" />
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default PostsBody;
