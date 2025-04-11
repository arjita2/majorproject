import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import aboutusback from "../assets/aboutusback.jpg";
import core from "../assets/core.jpg";
import heidelberg2color from "../assets/heidelberg2color.jpg";
import heidelberg4color from "../assets/heidelberg4color.png";
import heidelberg8color from "../assets/heidelberg8color.jpg";
import komori26 from "../assets/komori26.jpg";
import komori37 from "../assets/komori37.jpg";
import topsetter from "../assets/topsetter.jpeg";

const AboutUs = () => {
  const [selected, setSelected] = useState("about");
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTabClick = (tab) => {
    setSelected(tab);
    scrollToContent();
  };

  const content = {
    about: {
      title: "About Subak Offset LLP",
      text: (
        <div className="space-y-10">
          <div className="text-center text-gray-700 text-lg leading-relaxed">
            <p>
              <strong>Kolhapur’s Premier Digital & Offset Printing Service</strong>
            </p>
            <br />
            <p>
              Subak Offset LLP, established in 2015 by Mr. Tanaji Chougale, has grown into one of Kolhapur’s most respected names in digital and offset printing. With a decade of experience, Subak has built a strong reputation for delivering innovative, high-quality, and customized printing solutions that meet the evolving needs of businesses across sectors.
            </p>
            <br />
            <p>
              From its base in Kolhapur, Subak Offset operates a modern facility equipped with advanced printing machinery and a team of skilled professionals dedicated to excellence. The company offers a comprehensive range of services—including digital, offset, signage, packaging, and large-format printing—making it a true one-stop solution for all printing needs in the region.
            </p>
            <br />
            <p>
              Our commitment to quality, timely delivery, and customer satisfaction has positioned Subak Offset LLP as a reliable partner for local enterprises, retailers, and commercial clients. Over the years, we’ve continually embraced new technologies and techniques to ensure that every print reflects precision, professionalism, and passion.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6"
          >
            <h3 className="text-2xl text-center font-semibold text-gray-800 mb-4">
              Our Team
            </h3>
            <img
              src="/src/assets/aboutus.png"
              alt="Subak Offset Team"
              className="w-full h-auto rounded-md object-cover"
            />
          </motion.div>
        </div>
      ),
    },

    values: {
      title: "Our Core Values",
      text: (
        <div
          className="w-full bg-cover bg-center bg-no-repeat py-20"
          style={{ backgroundImage: `url(${aboutusback})` }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 bg-white/80 rounded-xl shadow-xl py-12">
            <div className="w-full md:w-1/2 space-y-6 text-justify text-gray-800 text-lg leading-relaxed">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
              <p>
                At <strong>Subak Offset LLP</strong>, our success over the past decade is deeply rooted in the values we live by every day. These guiding principles drive our commitment to excellence, customer satisfaction, and continuous innovation.
              </p>
              <p>
                <strong>🕒 On-Time Delivery</strong><br />
                We believe that punctuality is more than a promise — it’s a standard. At Subak, we strictly adhere to defined SLAs to ensure timely delivery for every project.
              </p>
              <p>
                <strong>🖨️ Highest Quality Printing</strong><br />
                Quality is the cornerstone of our work. From pre-press to post-press, we maintain rigorous standards at every stage of production.
              </p>
              <p>
                <strong>💡 Innovation at the Core</strong><br />
                From our roots in traditional printing to evolving into a modern, multi-service digital print provider, innovation has always been part of our DNA.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <img
                src={core}
                alt="Core Values Illustration"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      ),
    },

    capabilities: {
      title: "Our Capabilities",
      text: (
        <div className="space-y-20 bg-white p-6 rounded-xl shadow-md">
          <p className="text-lg text-gray-700">
            Our facility supports digital, offset, and large-format printing. We handle everything from small jobs to high-volume commercial orders, packaging, and prototype production efficiently.
          </p>

          {[
            {
              img: heidelberg2color,
              title: "🖨️ Heidelberg 2 Color",
              desc: "The Heidelberg 2 Color press is ideal for high-quality two-color offset printing. Known for its reliability and versatility, this machine is best suited for jobs like letterheads, invoices, brochures, and packaging that require precision and consistency across medium volumes. Its compact footprint and smooth registration make it a go-to for efficient two-color runs.",
              reverse: false,
            },
            {
              img: heidelberg4color,
              title: "🖨️ Heidelberg 4 Color",
              desc: "The Heidelberg 4 Color press offers full-color CMYK offset printing with sharp accuracy. It's a popular choice for printing marketing materials such as catalogs, flyers, posters, and packaging. Its advanced inking unit and precise sheet handling deliver vibrant, true-to-design output at high speed.",
              reverse: true,
            },
            {
              img: heidelberg8color,
              title: "🖨️ Heidelberg 8 Color",
              desc: " A high-end production press, the Heidelberg 8 Color is engineered for complex, double-sided multicolor print jobs in a single pass. Ideal for large-volume commercial printing, it provides unmatched registration, consistency, and productivity. It's perfect for demanding projects that require vibrant color, sharp detail, and high throughput.",
              reverse: false,
            },
            {
              img: komori26,
              title: "🖨️ Komori 26",
              desc: "The Komori 26 is a compact yet powerful offset printing machine designed for quick turnaround jobs. With a sheet size of around 26 inches, it is widely used for medium-format printing such as booklets, labels, and promotional materials. It’s known for fast makeready times and minimal waste.",
              reverse: true,
            },
            {
              img: komori37,
              title: "🖨️ Komori 37",
              desc: "The Komori 37 is a larger, more robust offset printing press capable of handling high-volume printing with a larger sheet size (typically 37 inches). It’s ideal for producing magazines, large brochures, and packaging materials. Its efficiency and high-speed capabilities make it a favorite among commercial printers.",
              reverse: false,
            },
            {
              img: topsetter,
              title: "💿 Topsetter CTP",
              desc: "The Topsetter CTP system is a critical component of the pre-press process. It directly transfers digital files to printing plates with incredible accuracy, eliminating the need for intermediate film. This reduces setup time, improves plate quality, and ensures perfect alignment. The use of CTP technology leads to sharper images and consistent quality throughout the print run.",
              reverse: true,
            },
          ].map(({ img, title, desc, reverse }, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10`}
            >
              <motion.img
                initial={{ x: reverse ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src={img}
                alt={title}
                className="md:w-1/2 rounded-lg shadow-lg"
              />
              <div className="md:w-1/2 text-lg text-gray-800">
                <strong>{title}</strong><br />
                {desc}
              </div>
            </div>
          ))}
        </div>
      ),
    },
  };

  return (
    <div className="flex flex-col p-8 md:p-16 gap-10">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-10"
      >
        <div className="w-full md:w-1/4">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Subak Offset LLP
          </h1>
        </div>

        <div className="w-full md:w-3/4 flex md:flex-row flex-col gap-6">
          <div className="md:w-1/3 space-y-6">
            {["about", "values", "capabilities"].map((item) => (
              <h3
                key={item}
                onClick={() => handleTabClick(item)}
                className={`cursor-pointer font-semibold border-l-4 pl-4 ${
                  selected === item
                    ? "border-cyan-500 text-cyan-600"
                    : "border-transparent text-gray-800"
                } hover:text-cyan-500 transition-all`}
              >
                {item === "about"
                  ? "About Subak Offset LLP"
                  : item === "values"
                  ? "Our Core Values"
                  : "Our Capabilities"}
              </h3>
            ))}
          </div>
        </div>
      </motion.div>

      <div ref={contentRef} className="pt-10">
        <motion.div
          key={selected}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {content[selected].title}
          </h2>
          <div className="text-gray-700 text-lg">
            {content[selected].text}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;






