"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Pic from "../assets/blog1.jpg";

export default function EventDetails({ params }: { params: { slug: string } }) {
  const [event, setEvent] = useState<any | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const timestamp = new Date().getTime();

  useEffect(() => {
    async function fetchEvent() {
      try {
        const response = await fetch(
          `https://dev-tritek.pantheonsite.io/wp-json/wp/v2/events?_embed&_=${timestamp}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }

        const events = await response.json();
        const matchingEvent = events.find(
          (event: any) => event.slug === params.slug
        );

        if (!matchingEvent) {
          notFound(); // Trigger 404 if no event is found
        } else {
          setEvent(matchingEvent);

          // If acf.image is an ID, fetch its URL
          if (matchingEvent.acf?.image) {
            fetchImageURL(matchingEvent?.acf?.image);
            console.log("if fetch");
          }
        }
      } catch (error) {
        console.error("Failed to fetch event details:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    async function fetchImageURL(imageID: number) {
      console.log("fetching image...")
      try {
        const response = await fetch(
          `https://dev-tritek.pantheonsite.io/wp-json/wp/v2/media/${imageID}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch image URL");
        }

        const imageData = await response.json();
        console.log("imageData", imageData)
        setImageURL(imageData.source_url);
      } catch (error) {
        console.error("Failed to fetch image URL:", error);
        setImageURL(null); // Fallback if image cannot be fetched
      }
    }

    fetchEvent();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug]);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-medium">Loading event...</p>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-medium text-red-500">
          Failed to load event details.
        </p>
      </div>
    );
  }

  // Destructure event details
  const { title, content, acf, _embedded } = event;
  const eventTitle = title?.rendered || "Event Title";
  const eventContent = content?.rendered || "No description available";
  const startDate = acf?.start_date || "Start Date Not Available";
  const endDate = acf?.end_date || "End Date Not Available";
  const time = acf?.time || "Time Not Specified";
  const location = acf?.location || "Location Not Specified";
  const featuredImage = imageURL || _embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  console.log("eventdetails", event)

  function convertTo12HourFormat(time: string) {
    const [hours, minutes] = time.split(":");
    const period = +hours >= 12 ? "PM" : "AM";
    const formattedHours = +hours % 12 || 12; // Convert 0 or 12 to 12 in 12-hour format
    return `${formattedHours}:${minutes} ${period}`;
  }

  function formatDate(dateString: string) {
    const year = dateString.slice(0, 4);
    const month = parseInt(dateString.slice(4, 6), 10) - 1; // Months are 0-based
    const day = parseInt(dateString.slice(6, 8), 10); // Convert day to number
    const date = new Date(parseInt(year, 10), month, day);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="px-[5%] mt-12 lg:mt-20 py-10">
      <section className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-16">
        {/* Event Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-60 sm:h-72 md:h-96">
            {featuredImage ? (
              <Image
                src={featuredImage}
                alt={eventTitle}
                layout="fill"
                className="object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                <p className="text-gray-500">No Image Available</p>
              </div>
            )}
          </div>
        </div>

        {/* Event Details */}
        <div className="w-full lg:w-1/2 font-ibm space-y-4">
          <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] font-bold font-spartan">
            {eventTitle}
          </h1>

          <div
            className="text-[0.95rem] sm:text-base text-gray-700  font-nuno space-y-4"
            dangerouslySetInnerHTML={{ __html: eventContent }}
          />

          {/* Additional Details */}
          <div className="space-y-4">
            {/* Date */}
            <div>
              <h3 className="font-semibold tracking-[3px] uppercase font-spartan">
                Date
              </h3>
              <p>
                {formatDate(startDate)} - {formatDate(endDate)}
              </p>
            </div>

            {/* Time */}
            <div>
              <h3 className="font-semibold tracking-[3px] uppercase font-spartan">
                Time
              </h3>
              <p>{convertTo12HourFormat(time)}</p>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-semibold tracking-[3px] uppercase font-spartan">
                Location
              </h3>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
