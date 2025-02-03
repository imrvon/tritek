"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import { PiDotOutline } from "react-icons/pi";

function PostsBody() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [postsNew, setPostsNew] = useState([]);
  const [loading, setLoading] = useState(true);

  const timestamp = new Date().getTime();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `https://dev-wordpress-ninjas.pantheonsite.io/wp-json/wp/v2/posts?_embed=true&_=${timestamp}`
        );
        const data = await response.json();

        // Process the posts to add image URL from ACF
        const postsWithImages = await Promise.all(
          data.map(async (post: any) => {
            // Get the image ID from ACF field
            const imageId = post.acf?.image; // Replace 'image' with your ACF field key

            let imageUrl = null;

            if (imageId) {
              // Fetch image details using the WordPress media endpoint
              const mediaResponse = await fetch(
                `https://dev-tritek.pantheonsite.io/wp-json/wp/v2/media/${imageId}`
              );
              const mediaData = await mediaResponse.json();
              imageUrl = mediaData?.source_url || null; // Get the image URL
              setImageURL(imageUrl);
            }

            return {
              ...post,
              imageUrl, // Add the image URL to the post
            };
          })
        );

        setPostsNew(postsWithImages as any);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [timestamp]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[10rem]">
        <p className="text-2xl font-medium">Loading posts...</p>
      </div>
    );
  }

  console.log("Posts", postsNew)

  // Extract categories
  const categories = [
    "All",
    ...Array.from(
      new Set(
        postsNew.flatMap(
          (post: any) =>
            post?._embedded?.["wp:term"]?.[0]?.map((term: any) => term.name) ||
            []
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

  function truncateTextByChars(text: string, charLimit: number): string {
    if (text.length <= charLimit) {
      return text; // Return the original text if it's within the limit
    }
    return text.slice(0, charLimit) + "..."; // Truncate text and add ellipsis
  }

  return (
    <div className="px-[5%] font-heading  py-6 md:py-10">
      {/* Tabs for categories */}
      {filteredPosts?.length > 0 && (
        <div className="flex flex-wrap justify-center px-[5%] gap-x-4 gap-y-0 mt-8 sm:mt-10 md:mt-16 mb-3">
          {categories.slice(0, 9).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group px-2 flex flex-col justify-start text-[1rem] font-paragraph rounded ${
                selectedCategory === category
                  ? "text-[#9e9f7f]"
                  : "text-black hover:text-[#9e9f7f]"
              }`}
            >
              {/* Category Name */}
              <p>{category}</p>

              {/* Animated Dot */}
              <PiDotOutline
                className={`text-[2rem] mt-[-0.5rem] ml-[-0.75rem] transform transition-transform duration-300 ease-in-out ${
                  selectedCategory === category
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* Post Cards */}
      {filteredPosts?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10 gap-y-7 lg:gap-y-10 gap-x-[3.5%] ">
          {filteredPosts.map((post: any) => {
            const featuredImage =
              imageURL ||
              post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                ?.full?.source_url ||
              post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            const category =
              post?._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

            return (
              <section
                key={post.id}
                className="bg-no-repeat bg-cover h-[27rem] lg:h-[30rem] hover:shadow-lg relative text-white pb-[5%] md:pb-[10%] px-[5%] md:px-[7.5%] w-full group overflow-hidden"
              >
                {/* Background Image with Hover Scaling */}
                <div
                  className="absolute inset-0 transition-transform transform duration-700 group-hover:scale-[107.5%] "
                  style={{
                    backgroundImage: `url(${featuredImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <div className="flex font-paragraph text-[1rem] sm:text-[1.1rem] md:text-[1rem] font-medium items-center gap-2 ">
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
                  <div className="mt-3 h-auto md:h-[3.5rem] lg:h-[4rem]">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-heading text-[1.3rem] sm:text-[1.5rem]  md:text-[1.45rem] leading-[130%] hover:text-[#9e9f7f] font-bold text-center"
                    >
                      {truncateTextByChars(post.title.rendered || "", 45)}
                    </Link>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex hover:text-[#9e9f7f] font-paragraph items-center gap-2 mt-10 lg:mt-12 "
                  >
                    <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[0.8rem] leading-none font-bold">
                      READ MORE
                    </p>
                    <IoIosArrowDropright className="text-[1.2rem]" />
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[10rem]">
          <p className="text-2xl font-medium">No Posts Found</p>
        </div>
      )}
    </div>
  );
}

export default PostsBody;
