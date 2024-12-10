import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import Card from "../components/Services/Card";

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
      <section className="bg-[#f7f7f5] px-10 py-20">
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
          <Card
            linkToService=""
            imageSrc="/assets/icons/consult.svg"
            cardText="Strategic Consulting Services"
          />
          <Card
            linkToService=""
            imageSrc="/assets/icons/company.svg"
            cardText="Company & Business Setup"
          />
          <Card
            linkToService=""
            imageSrc="/assets/icons/investment.svg"
            cardText="Investment Management"
          />
          <Card
            linkToService=""
            imageSrc="/assets/icons/acquisition.svg"
            cardText="Acquisitions Finance Consulting"
          />
          <Card
            linkToService=""
            imageSrc="/assets/icons/management.svg"
            cardText="Company Management"
          />
          <Card
            linkToService=""
            imageSrc="/assets/icons/privatePlacement.svg"
            cardText="Private Placement Consulting"
          />
        </section>
      </section>
    </main>
  );
}
