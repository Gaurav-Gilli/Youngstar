"use client";
import Image from "next/image";
import overviewImage from "@/assets/images/about/overview.jpg";
import overviewKidImage from "@/assets/images/about/overview_kg.png";
import useIsTrue from "@/hooks/useIsTrue";

const AboutContent = () => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const isAbout = useIsTrue("/about");
  const isAboutDark = useIsTrue("/about-dark");

  return (
    <div>
      <p className="text-contentColor dark:text-contentColor-dark mb-25px">
        We, the Young Star Trust, have been working for many years, mainly focusing on the development of people. 
        We work as a trusted group and provide various employment and empowerment courses and programs for everyone at minimal prices, enabling them to learn skills and activities of their interest, pursue their paths, and develop their own identity for personal and societal fame.
      </p>
      {isAbout || isAboutDark ? (
        <>
          <h4 className="text-xl font-medium text-blackColor dark:text-blackColor-dark">
            Employment and Empowerment Programs
          </h4>
          <p className="text-contentColor dark:text-contentColor-dark mb-25px">
            Our goal is to empower youths—the pillars of society—and women. We offer yoga classes for personality development and collaborate with government-recognized institutes and global as well as national programs to support development in our area, primarily Agashi.
          </p>

          <h4 className="text-xl font-medium text-blackColor dark:text-blackColor-dark">
            Collaborative Initiatives
          </h4>
          <p className="text-contentColor dark:text-contentColor-dark mb-30px">
            We have partnerships with institutions like HDFC Life, Yuva Vikas Agadi, Ideal Educational, and Tejaswini Mahila Mandal. Together, we organize seminars, activities, and workshops for individuals of all age groups, fostering development and empowerment.
          </p>

          <h4 className="text-xl font-medium text-blackColor dark:text-blackColor-dark">
            Community Bonding and Security
          </h4>
          <p className="text-contentColor dark:text-contentColor-dark mb-30px">
            Young Star Trust conducts picnics and bonding activities for community members, enhancing relationships and providing knowledge and guidance. We maintain dignity and security in all our endeavors to uplift individuals and groups.
          </p>
        </>
      ) : (
        <Image
          src={isHome9 || isHome9Dark ? overviewKidImage : overviewImage}
          alt="Young Star Trust Overview"
          className="w-full"
          placeholder="blur"
        />
      )}
    </div>
  );
};

export default AboutContent;
