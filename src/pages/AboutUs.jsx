import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutUs = () => {
  const [selected, setSelected] = useState("about");

  const content = {
    about: {
      title: "About Subak Offset LLP",
      text: "Subak Offset LLP has been a pioneer in digital printing since 2015. Founded by Mr. Tanaji Chougale, we operate from a 30,000 sq. ft. facility equipped with state-of-the-art machinery and staffed by skilled professionals. We pride ourselves on timely delivery, eco-friendly practices, and consistent high-quality service.",
    },
    values: {
      title: "Our Values",
      text: "We value integrity, quality, sustainability, and customer satisfaction. Every print we create reflects our commitment to ethical practices and top-tier service.",
    },
    capabilities: {
      title: "Our Capabilities",
      text: "Our facility supports digital, offset, and large-format printing. We handle everything from small jobs to high-volume commercial orders, packaging, and prototype production efficiently.",
    },
  };

  return (
    <div className="flex flex-col md:flex-row p-8 md:p-16 gap-10">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 space-y-6">
        {["about", "values", "capabilities"].map((item) => (
          <h3
            key={item}
            onClick={() => setSelected(item)}
            className={`cursor-pointer font-bold border-b pb-1 ${
              selected === item ? "text-cyan-600" : "text-gray-800"
            } hover:text-cyan-400 transition-all`}
          >
            {item === "about"
              ? "About Subak Offset LLP"
              : item.charAt(0).toUpperCase() + item.slice(1)}
          </h3>
        ))}
      </div>

      {/* Content Area with downward transition */}
      <div className="w-full md:w-3/4 min-h-[200px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full space-y-4"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              {content[selected].title}
            </h2>
            <p className="text-gray-700 text-lg">{content[selected].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutUs;
