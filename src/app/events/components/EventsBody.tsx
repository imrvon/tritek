"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function EventsBody() {
  const [events, setEvents] = useState([]);
  const [imageURLs, setImageURLs] = useState<{ [key: number]: string | null }>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const timestamp = new Date().getTime();

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          `https://dev-tritek.pantheonsite.io/wp-json/wp/v2/events?_embed&_=${timestamp}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data);

        // Fetch image URLs for each event
        const imagePromises = data.map(async (event: any) => {
          if (event.acf?.image) {
            const imageUrl = await fetchImageURL(event.acf.image);
            return { id: event.id, url: imageUrl };
          }
          return { id: event.id, url: null }; // In case there's no image
        });

        // Resolve all image URLs and update state
        const resolvedImages = await Promise.all(imagePromises);
        const imageMap = resolvedImages.reduce(
          (acc, { id, url }) => ({ ...acc, [id]: url }),
          {}
        );
        setImageURLs(imageMap);
      } catch (error) {
        console.error("Failed to fetch events:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    async function fetchImageURL(imageID: number) {
      try {
        const response = await fetch(
          `https://dev-tritek.pantheonsite.io/wp-json/wp/v2/media/${imageID}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch image URL");
        }

        const imageData = await response.json();
        return imageData.source_url; // Return the image URL
      } catch (error) {
        console.error("Failed to fetch image URL:", error);
        return null; // Fallback if image cannot be fetched
      }
    }

    fetchEvents();
  }, [timestamp]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[10rem]">
        <p className="text-2xl font-medium">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[10rem]">
        <p className="text-2xl font-medium text-red-500">
          Failed to load events.
        </p>
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="flex justify-center items-center h-[10rem]">
        <p className="text-2xl font-medium">No Events Found</p>
      </div>
    );
  }

  function convertTo12HourFormat(time: any) {
    const [hours, minutes] = time.split(":");
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert 0 or 12 to 12 in 12-hour format
    return `${formattedHours}${period}`;
  }

  function formatDate(dateString: any) {
    const year = dateString.slice(0, 4);
    const month = parseInt(dateString.slice(4, 6), 10) - 1; // Months are 0-based in JavaScript Date
    const day = dateString.slice(6, 8);

    const date = new Date(year, month, day);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="px-[5%] py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 lg:gap-y-10 gap-x-[3.5%] lg:gap-x-[1.5%] xl:gap-x-[2%]">
      {events.map((event: any) => {
        const { id, title, content, acf, slug, _embedded } = event; // Assuming ACF is used for custom fields
        const eventTitle = title?.rendered || "Event Title";
        const eventContent = content?.rendered || "No description available";
        const startDate = acf?.start_date || "Start Date Not Available";
        const endDate = acf?.end_date || "End Date Not Available";
        const time = acf?.time || "Time Not Specified";
        const location = acf?.location || "Location Not Specified";
        const featuredImage =
          imageURLs[id] || _embedded?.["wp:featuredmedia"]?.[0]?.source_url;

        return (
          <Link
            href={`/events/${slug || id}`}
            key={id}
            className="bg-white px-0 py-0 shadow-lg hover:shadow-lg transition-shadow duration-300"
          >
            {/* Event Image */}
            <div className="h-48 w-full relative overflow-hidden ">
              {featuredImage && (
                <Image
                  src={featuredImage}
                  alt={eventTitle}
                  className="w-full h-full object-cover absolute  transition-transform transform duration-700 group-hover:scale-[107.5%]"
                  width={100}
                  height={100}
                />
              )}
            </div>

            <section className="py-4 px-[3%] ">
              <div className=" space-y- border-b-[1.5px] pb-4 ">
                {/* Event Title */}
                <h3 className="text-[1.3rem] sm:text-[1.5rem] md:text-[1.6rem] hover:underline font-spartan line-clamp-1  font-bold text-gray-800">
                  {eventTitle}
                </h3>

                {/* Description */}
                <div
                  className="text-gray-600 font-nuno text-[1rem] h-auto md:h-12 sm:text-[1.1rem] md:text-[1rem] line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: eventContent }}
                />
              </div>

              {/* Event Details */}
              <div className="space-y-4 mt-4">
                {/* Date and Time */}
                <div className=" mt-4">
                  <h3 className="font-semibold tracking-[3px] uppercase font-spartan ">
                    Date
                  </h3>
                  <p>
                    {formatDate(startDate)} - {formatDate(endDate)}{" "}
                  </p>
                </div>

                <div className=" mt-4">
                  <h3 className="font-semibold tracking-[3px] uppercase font-spartan ">
                    Time
                  </h3>
                  <p>{convertTo12HourFormat(time)}</p>
                </div>

                {/* Location */}
                <p className="text-base mt-4 h-auto md:h-12 line-clamp-2 ">
                  <span className="font-semibold"></span> {location}
                </p>
              </div>
            </section>
          </Link>
        );
      })}
    </div>
  );
}
