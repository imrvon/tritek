import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Card from "../components/Services/Card";
import ServicesData from "../../servicesData.json";

export default function Services() {
  return (
    <main>
      <section
        className="relative flex items-center justify-center h-[90vh] bg-fixed bg-cover bg-top"
        style={{
          backgroundImage: "url('/assets/img/hero_services.jpg')",
        }}
      >
        <article className="z-10 text-white md:w-7/12 p-2 text-center mt-20">
          <h1 className="font-bold md:text-8xl text-5xl">Services</h1>
          <p className="md:text-3xl text-xl italic my-10 leading-10">
            Tritex team is a diverse network of consultants and industry
            professionals with a global mindset.
          </p>
        </article>
      </section>
      <section className="bg-[#f7f7f5] px-10 py-36">
        <section className="grid lg:grid-cols-4 min-[480px]:grid-cols-2 grid-cols-1 md:gap-8 gap-5 justify-center place-items-center min-[480px]:place-items-stretch">
          <article className="min-[480px]:col-span-2 flex flex-col justify-center">
            <p className="font-semibold text-xl italic">
              &ldquo;We&apos;re thrilled with the end result - especially the
              fact that the project went live in time for a series of important
              meetings in the nation&apos;s capital.&rdquo;
            </p>
            <p className="font-medium my-5">
              Richard Garrett
              <span className="opacity-40 block">CEO of Tritek</span>
            </p>
          </article>
          {ServicesData.map(
            (
              item: {
                linkToService: string;
                imageSrc: string;
                cardText: string;
              },
              index: number
            ) => (
              <Card
                key={index}
                linkToService={item.linkToService}
                imageSrc={item.imageSrc}
                cardText={item.cardText}
              />
            )
          )}
        </section>
      </section>
      <section className="bg-grey sm:px-10 px-4 sm:py-32 py-20">
        <section className="flex gap-5 lg:items-center justify-between flex-col lg:flex-row">
          <section className="lg:w-[1000px] max-w-[700px]">
            <Image
              src="/assets/img/services2.png"
              className="w-full"
              width={1000}
              height={10}
              alt=""
            />
          </section>
          <section className="lg:w-[900px]">
            <h3 className="font-bold sm:text-6xl text-4xl sm:leading-[4.5rem] font-nuno">
              Organizational design for business
            </h3>
            <p className="italic my-5 sm:text-2xl text-xl">
              We’re here to inform which tactics need funding and which are
              drainsome resources for your company and team.
            </p>
            <button
              type="button"
              className="p-5 bg-secondary font-semibold text-white"
            >
              EXPLORE SOLUTION
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}
