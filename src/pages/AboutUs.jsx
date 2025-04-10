import React from "react";
import sampleImage from "../assets/10-years.jpg"; // Replace with your actual image path

const equipment = [
  {
    name: "Heidelberg SM 102-8P – 8 Colour (Germany) – 28x40",
    description:
      "A high-speed 8-color offset press designed for premium, full-color printing. Ideal for complex jobs such as brochures, packaging, and marketing materials.",
    image: "/assets/equipment/heidelberg-8color.jpg",
  },
  {
    name: "Brand New KOMORI Lithron G-37 – 4 Colour",
    description:
      "Perfect for medium-sized projects, this energy-efficient press delivers fast setup, superior color accuracy, and smooth results.",
    image: "/assets/equipment/komori-g37.jpg",
  },
  {
    name: "Heidelberg SM CPC – 4 Colour – 28x40",
    description:
      "This reliable press handles high-volume color printing with outstanding color consistency. Great for catalogs, magazines, and more.",
    image: "/assets/equipment/heidelberg-4color.jpg",
  },
  {
    name: "Heidelberg SM CPC – 2 Colour – 28x40",
    description:
      "Ideal for printing forms, vouchers, and monochrome jobs. Delivers crisp detail and two-color processing.",
    image: "/assets/equipment/heidelberg-2color.jpg",
  },
  {
    name: "Komori Lithrone 26 – 4 Colour Offset (Size: 19x25)",
    description:
      "Compact and efficient for small to medium print runs. Perfect for brochures, flyers, and quick jobs.",
    image: "/assets/equipment/komori-26.jpg",
  },
  {
    name: "Heidelberg Topsetter Thermal CTP Machine – 28x40",
    description:
      "This CTP system ensures fast, accurate plate imaging and registration, supporting large-format presses.",
    image: "/assets/equipment/heidelberg-ctp.jpg",
  },
];

export default function AboutUs() {
  return (
    <div>
      {/* About Section with Text on Left & Image on Right */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-8 bg-white">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Today, a leading Print Production House in India
          </h2>
          <p className="text-lg text-gray-700">
            At Subak Offset LLP, we’ve been delivering top-quality digital printing
            solutions since our establishment in 2015. Founded by Tanaji Chougale,
            the company has grown steadily over the past decade.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're a corporate client, publisher, or educational
            institution, our mission is to provide exceptional print quality,
            on-time delivery, and eco-friendly practices — every time.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={sampleImage}
            alt="10 Years of Printing Excellence"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>
      </section>

      {/* Facility Information */}
      <section className="px-6 md:px-16 py-8 bg-white">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">🏭 Our Facility</h2>
        <p className="text-lg mb-8 text-gray-700">
          Subak Offset LLP operates from a modern facility equipped with
          cutting-edge digital and offset printing technology. Our team ensures
          precision, speed, and consistent results across every print job.
        </p>
      </section>

      {/* Equipment / Printing Infrastructure */}
      <section className="px-6 md:px-16 py-8 bg-white">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">
          ⚙️ Our Advanced Printing Infrastructure
        </h2>
        <div className="grid gap-12">
          {equipment.map((item, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-6 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-2">
                  {item.name}
                </h3>
                <p className="text-base text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

