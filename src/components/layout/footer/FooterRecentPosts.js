import Image from "next/image";
import React from "react";
import post1 from "@/assets/images/footer/footer__1.png";
import post2 from "@/assets/images/footer/footer__2.png";
import post3 from "@/assets/images/footer/footer__3.png";
import FooterHeading from "@/components/shared/headings/FooterHeading";
import FooterRecentPost from "./FooterRecentPost";
const FooterRecentPosts = () => {
  const posts = [
    {
      title: "Empowering Women Through Workshops",
      image: post1,
      date: "12 Jan 2025",
      id: 1,
    },
    {
      title: "Youth Skill-Building Initiatives",
      image: post2,
      date: "05 Jan 2025",
      id: 2,
    },
    {
      title: "Community Yoga and Wellness Programs",
      image: post3,
      date: "01 Jan 2025",
      id: 3,
    },
  ];
  
  return (
    <div
      className="sm:col-start-1 sm:col-span-12 md:col-start-7 md:col-span-6 lg:col-start-10 lg:col-span-3 pl-0 2xl:pl-50px"
      data-aos="fade-up"
    >
      <FooterHeading className="text-size-22 font-bold text-whiteColor mb-3">
        Recent Post
      </FooterHeading>
      <ul className="flex flex-col gap-y-5">
        {posts.map((post, idx) => (
          <FooterRecentPost key={idx} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default FooterRecentPosts;
