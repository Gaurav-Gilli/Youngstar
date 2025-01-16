import React from "react";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import SectionNameSecondary from "@/components/shared/section-names/SectionNameSecondary";
import Image from "next/image";

import teamImage1 from "@/assets/images/team/team__1.png";
import teamImage2 from "@/assets/images/team/team__2.png";
import teamImage3 from "@/assets/images/team/team__3.png";
import Instructor from "@/components/shared/instructors/Instructor";
import HeadingPrimaryXl from "@/components/shared/headings/HeadingPrimaryXl ";
const Instructors2 = () => {
  const instructors = [
    {
      id: 1,
      name: "Hon.Hitendra Thakur ",
      image: teamImage1,
      desig: "Founder & President-Young Star Trust ",
    },
    {
      id: 2,
      name: "Shri.Vikas B Vartak",
      image: teamImage2,
      desig: "Chairman-Young Star Agashi",
    },
    {
      id: 3,
      name: "Mrs.Vandana V. Vartak",
      image: teamImage3,
      desig: "Trustee",
    },
    {
      id: 4,
      name: "Shri.Deepak Shah",
      image: teamImage3,
      desig: "Trustee",
    },
    {
      id: 5,
      name: "Shri.Ravindra V. Patil",
      image: teamImage3,
      desig: "Trustee",
    },
    {
      id: 6,
      name: "Shri.Sandeep Vartak",
      image: teamImage3,
      desig: "Trustee",
    },
    {
      id: 7,
      name: "Mr.Vinamra V. Vartak",
      image: teamImage3,
      desig: "Trustee",
    },
    {
      id: 8,
      name: "Mr.Vedant V. Vartak",
      image: teamImage3,
      desig: "Trustee",
    },
  ];
  return (
    <section>
      <div className="container py-30px md:pt-10 md:pb-50px 2xl:pt-50px 2xl:pb-100px">
        {/* heading */}

        <div data-aos="fade-up" className="text-center mb-15px">
          <SectionNameSecondary>YOUNG STAR TRUST</SectionNameSecondary>
          <HeadingPrimaryXl text="center">Our Honarable Trustees</HeadingPrimaryXl>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-30px">
          {/* teachers */}

          {instructors.map((instructor, idx) => (
            <Instructor key={idx} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors2;
