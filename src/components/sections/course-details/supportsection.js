import Image from "next/image";
import { FaHandsHelping, FaCreditCard, FaPhoneAlt } from "react-icons/fa";

const SupportSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      {/* Hero Image */}
      <div className="relative w-full h-80">
        <Image
          src="/path-to-your-hero-image.jpg" // Replace with your hero image path
          alt="Support Us"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white">Support Our Mission</h1>
        </div>
      </div>

      {/* Title and Description */}
      <div className="text-center mt-12 px-6">
        <h2 className="text-4xl font-bold text-primaryColor">Let's Make a Change</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Every contribution counts. Together, we can uplift communities and transform lives. Explore the different ways you can support our cause.
        </p>
      </div>

      {/* Donation Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 px-6">
        {/* Donate Offline */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center">
            <div className="text-primaryColor text-5xl mb-4 hover:scale-110 transition-transform">
              <FaHandsHelping />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Donate Offline</h3>
            <p className="mt-4 text-gray-600">
              Visit our office or send a check to contribute to our initiatives.
            </p>
            <button className="mt-6 px-6 py-2 bg-primaryColor text-white font-medium rounded-full hover:bg-primaryColor-dark transition-colors">
              Get Address
            </button>
          </div>
        </div>

        {/* Donate Online */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center">
            <div className="text-primaryColor text-5xl mb-4 hover:scale-110 transition-transform">
              <FaCreditCard />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Donate Online</h3>
            <p className="mt-4 text-gray-600">
              Use our secure portal to make an instant contribution.
            </p>
            <button className="mt-6 px-6 py-2 bg-primaryColor text-white font-medium rounded-full hover:bg-primaryColor-dark transition-colors">
              Donate Now
            </button>
          </div>
        </div>

        {/* Donate on Call */}
        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center">
            <div className="text-primaryColor text-5xl mb-4 hover:scale-110 transition-transform">
              <FaPhoneAlt />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Donate on Call</h3>
            <p className="mt-4 text-gray-600">
              Speak to our team directly and arrange your donation.
            </p>
            <button className="mt-6 px-6 py-2 bg-primaryColor text-white font-medium rounded-full hover:bg-primaryColor-dark transition-colors">
              Call Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
  