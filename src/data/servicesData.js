// src/data/servicesData.js
import { FaPrint, FaBoxOpen, FaLaptopCode, FaPalette } from 'react-icons/fa';
import offsetImage from "../assets/services/img1.jpg";
import digitalImage from "../assets/services/img2.webp";
import packagingImage from "../assets/services/img3.jpg";
import designImage from "../assets/services/img4.webp";

const servicesList = [
  {
    id: "offset-printing",
    name: "Offset Printing",
    description: "High-quality offset printing for bulk jobs, brochures, catalogs, and more.",
    icon: "FaPrint",
    image: offsetImage
  },
  {
    id: "digital-printing",
    name: "Digital Printing",
    description: "Fast and efficient digital printing suitable for low-volume and personalized jobs.",
    icon: "FaLaptopCode",
    image: digitalImage
  },
  {
    id: "packaging",
    name: "Packaging",
    description: "Custom packaging solutions for your brand's needs.",
    icon: "FaBoxOpen",
    image: packagingImage
  },
  {
    id: "design-services",
    name: "Design Services",
    description: "Creative and professional design services tailored to your brand.",
    icon: "FaPalette",
    image: designImage
  }
];

export default servicesList;
