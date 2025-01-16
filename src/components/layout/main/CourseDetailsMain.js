import React from "react";
import CourseDetailsPrimary from "@/components/sections/course-details/CourseDetailsPrimary";
import SupportSection from "@/components/sections/course-details/supportsection";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

import Image from "next/image";
const CourseDetailsMain = ({ id }) => {
  return (
    <>
      <HeroPrimary path={"Support Us"} title={"Support Us "} />
      {/* <CourseDetailsPrimary id={id} /> */}
      <SupportSection />
    </>
  );
};

export default CourseDetailsMain;
