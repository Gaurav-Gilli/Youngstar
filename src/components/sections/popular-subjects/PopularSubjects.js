"use client";
import Subjects from "@/components/shared/popular-subjects/Subjects";
import Image from "next/image";
import React from "react";
import shapImage from "@/assets/images/service/service__shape__1.png";
import shapBgImage from "@/assets/images/service/service__shape__bg__1.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useIsTrue from "@/hooks/useIsTrue";
import chatImage from "@/assets/images/icon/chat-app.png";
import virtualRealityImage from "@/assets/images/icon/virtual-reality.png";
import machineLearningImage from "@/assets/images/icon/machine-learning.png";
import artifitialImage from "@/assets/images/icon/artificial-intelligence.png";

const PopularSubjects = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isHome10 = useIsTrue("/home-10");
  const isHome10Dark = useIsTrue("/home-10-dark");
  const subjects = [
    {
      title:
        isHome9 || isHome9Dark
          ? "Daily Routines"
          : isHome10 || isHome10Dark
          ? "MS-CIT"
          : "Business Studies",
      desc: "Practical courses aimed at skill-building and personal growth.",
      navButton: true,
      image: isHome10 || isHome10Dark ? chatImage : null,
      id: 1,
      path: "#",
      category:
        isHome9 || isHome9Dark
          ? "Lifestyle"
          : isHome10 || isHome10Dark
          ? "Development"
          : "Business",
    },
    {
      title:
        isHome9 || isHome9Dark
          ? "Activity Room"
          : isHome10 || isHome10Dark
          ? "Advance Tally"
          : "Art & Design",
      desc: "Courses designed to enhance creativity and technical skills.",
      navButton: true,
      id: 2,
      path: "#",
      category:
        isHome9 || isHome9Dark
          ? "Personal Development"
          : isHome10 || isHome10Dark
          ? "Technical Skills"
          : "Art & Design",
      image: isHome10 || isHome10Dark ? virtualRealityImage : null,
    },
    {
      title:
        isHome9 || isHome9Dark
          ? "Yoga Classes"
          : isHome10 || isHome10Dark
          ? "Yoga for Wellness"
          : "Yoga Class",
      desc: "Health-focused programs to balance the mind and body.",
      navButton: true,
      id: 3,
      path: "#",
      category:
        isHome9 || isHome9Dark
          ? "Health & Fitness"
          : isHome10 || isHome10Dark
          ? "Development"
          : "Wellness",
      image: isHome10 || isHome10Dark ? machineLearningImage : null,
    },
    {
      title:
        isHome9 || isHome9Dark
          ? "Advance Beautician"
          : isHome10 || isHome10Dark
          ? "Beautician Skills"
          : "Beauty & Wellness",
      desc: "Specialized courses for professional and personal grooming.",
      navButton: true,
      id: 4,
      path: "#",
      category:
        isHome9 || isHome9Dark
          ? "Health & Fitness"
          : isHome10 || isHome10Dark
          ? "Development"
          : "Professional Skills",
      image: isHome10 || isHome10Dark ? artifitialImage : null,
    },
  ];

  return (
    <section
      className={`${
        isHome9 || isHome9Dark
          ? "bg-[url(../assets/images/about/about_bg_1.jpg)] bg-cover"
          : "bg-lightGrey10 dark:bg-lightGrey10-dark"
      } pt-50px pb-110px`}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-30px gap-x-30px items-center">
          <div
            className="mb-30px lg:mb-0 pb-0 md:pb-30px xl:pb-0"
            data-aos="fade-up"
          >
            <div className="relative">
              <div>
                <Image
                  className="absolute bottom-9 lg:bottom-[-50px] right-[50px] animate-move-hor"
                  src={shapImage}
                  alt=""
                />
              </div>
              {isHome9 || isHome9Dark ? (
                ""
              ) : (
                <div>
                  <span className="text-sm font-semibold text-primaryColor bg-whitegrey3 px-6 py-5px mb-5 rounded-full inline-block">
                    Popular Subject
                  </span>
                  <h3 className="text-3xl md:text-size-35 2xl:text-size-38 3xl:text-size-42 leading-10 md:leading-45px 2xl:leading-50px 3xl:leading-2xl font-bold text-blackColor dark:text-blackColor-dark pb-25px">
                    Skill-Building & Empowerment Programs Designed for You
                  </h3>
                  <p className="text-sm md:text-base text-contentColor dark:text-contentColor-dark mb-10px 2xl:mb-50px">
                    Young Star Trust offers a variety of affordable courses aimed
                    at empowering youth and women with skills that help them build
                    their futures and contribute to society.
                  </p>
                  <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10 pl-3 border-l-[3px] border-secondaryColor">
                    Our programs include technical skills, vocational training,
                    and personality development, with support from top
                    institutions like HDFC Life, Yuva Vikas Agadi, and Tejaswini
                    Mahila Mandal.
                  </p>
                  <div>
                    <ButtonPrimary color="secondary" path="#">
                      Explore More <i className="icofont-long-arrow-right"></i>
                    </ButtonPrimary>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative z-0 overflow-visible">
            <div data-aos="fade-up">
              <Image
                className="absolute sm:block xl:left-1/4 z-[-1] top-6 animate-move-var"
                src={shapBgImage}
                alt=""
              />
            </div>
            <Subjects subjects={subjects} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSubjects;
