import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

export default function Card({
  linkToService,
  imageSrc,
  cardText,
}: {
  linkToService: string;
  imageSrc: string;
  cardText: string;
}) {
  return (
    <section className="md:max-w-[28rem] max-w-[21rem] border h-fit p-10 text-center flex items-center flex-col gap-20 bg-white">
      <Link href={linkToService} className="flex flex-col items-center gap-3">
        <div>
          <Image width={100} height={1} src={imageSrc} alt={cardText} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{cardText}</h3>
        </div>
      </Link>
      <Link
        href={linkToService}
        className="flex items-center gap-2 text-sm opacity-50"
      >
        <p>READ MORE</p> <IoIosArrowDropright className="w-5 h-5" />
      </Link>
    </section>
  );
}
