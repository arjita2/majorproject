import { FaBullhorn, FaGlobe, FaPaintBrush, FaCameraRetro } from "react-icons/fa";

import img1 from "../assets/services/img1.jpg";
import img2 from "../assets/services/img2.jpg";
import img3 from "../assets/services/img3.jpg";
import img4 from "../assets/services/img4.jpg";
import s11 from "../assets/services/subservices/s11.jpg";
import s12 from "../assets/services/subservices/s12.jpg";
import s13 from "../assets/services/subservices/s13.jpg";
import s14 from "../assets/services/subservices/s14.jpg";
import s15 from "../assets/services/subservices/s15.jpg";
import s16 from "../assets/services/subservices/s16.jpg";
import s17 from "../assets/services/subservices/s17.jpg";
import i1 from "../assets/services/subservices/1.jpg";
import i2 from "../assets/services/subservices/2.jpg";
import i3 from "../assets/services/subservices/3.jpg";
import i4 from "../assets/services/subservices/4.jpg";
import s21 from "../assets/services/subservices/s21.jpg";
import s22 from "../assets/services/subservices/s22.jpg";
import s23 from "../assets/services/subservices/s23.jpg";
import s24 from "../assets/services/subservices/s24.jpg";
import s31 from "../assets/services/subservices/s31.jpg";
import s32 from "../assets/services/subservices/s32.jpg";
import s33 from "../assets/services/subservices/s33.jpg";
import s34 from "../assets/services/subservices/s34.jpg";
export const servicesList = [
  {
    id: "marketing-collaterals",
    name: "Marketing Collaterals",
    description: "Eye-catching marketing materials that elevate your brand's reach.",
    longDescription: `Subak Offset LLP brings over 25 years of expertise in designing and printing high-quality marketing collaterals for corporate, industrial, hospitality, and retail sectors.

We specialize in creating a wide range of marketing materials, including booklets, catalogs, leaflets, flyers, cut-outs, coffee table books, and much more — all tailored to elevate your brand presence.

Every product is fully customizable, ensuring your brand stands out in a competitive market with a strong and consistent visual identity.

From creative design to professional execution, Subak Offset LLP offers end-to-end printing services, including seamless doorstep delivery across the Pune region.

Let us help you bring your brand to life with vibrant, on-demand marketing prints!

Got a question or need a quote?
Please use the Contact Us form below — our team is here to assist you.`,
    image: img1,
    icon: FaBullhorn,
    subservices: [
      { id: "brochures-leaflets", name: "Brochures & Leaflets", description: "Attractive handouts to market your business.", image: s11 },
      { id: "booklets", name: "Booklets", description: "Compact and informative multi-page print materials.", image: s12 },
      { id: "catalogs", name: "Catalogs", description: "Detailed product/service listings with visuals.", image: s13 },
      { id: "books", name: "Books", description: "Professionally printed books tailored to your needs.", image: s14 },
      { id: "coffee-table-books", name: "Coffee Table Books", description: "High-quality visual books for display.", image: s15 },
      { id: "paper-bags", name: "Paper Bags", description: "Branded bags for packaging and promotions.", image: s16 },
      { id: "danglers-cutouts", name: "Danglers & Cut-Outs", description: "Attention-grabbing displays for your space.", image: s17 }
    ]
  },
  {
    id: "digital-services",
    name: "Corporate Stationary",
    description: "Smart digital solutions to grow your brand online.",
    longDescription: `In today's competitive world, a strong digital presence is essential to grow and connect with your audience. Subak Offset LLP’s Digital Services division is dedicated to helping brands stand out, engage effectively, and drive results in the online space.

We offer a complete suite of digital solutions — from data-driven digital marketing strategies to stunning website and app UI designs. Whether you're looking to enhance visibility through SEO, launch an impactful ad campaign, or create a seamless user experience, our team ensures your digital goals are achieved with creativity and precision.

Our services include:
- Targeted digital marketing (SEO, SEM, email campaigns)
- Strategic social media management
- Modern, responsive website design
- Intuitive mobile and web app UI/UX design

We combine aesthetics with performance — because your digital identity should be as powerful as your brand.

Let Subak Offset LLP be your trusted partner in digital transformation. Reach out via our Contact Us form for tailored solutions that align with your business vision.`,

    image: img2,
    icon: FaGlobe,
    subservices: [
      { id: "digital-marketing", name: "Visiting Card", description: "SEO, SEM, social media, email & more.", image: i1 },
      { id: "social-media-management", name: "Letterheads&Envelopes", description: "Engage your audience and build community.", image: i2 },
      { id: "website-design", name: "Diaries", description: "Stunning, responsive, user-friendly sites.", image: i3 },
      { id: "app-ui-design", name: "Calenders", description: "Modern and intuitive mobile app interfaces.", image: i4 }
    ]
  },
  {
    id: "design-services",
    name: "Outdoor Signage",
    description: "Creative design that gives your brand a unique identity.",
    longDescription: `At Subak Offset LLP, our Design Services are all about turning your ideas into stunning visuals that reflect your brand’s identity and values.

We specialize in creating impactful and timeless designs — from logos and business stationery to packaging and product mockups. Our experienced design team works closely with you to craft visuals that are both creative and strategic, helping your brand stand out in a crowded marketplace.

Whether you're launching a new product, refreshing your identity, or simply need compelling collateral, our designs ensure consistency and professionalism across all touchpoints.

Our offerings include:
- Custom logo designs that leave a lasting impression
- Elegant business stationery including letterheads, envelopes, and visiting cards
- Eye-catching packaging designs that enhance shelf appeal
- Realistic 3D product mockups to visualize your ideas before production

With a strong focus on detail, quality, and innovation, Subak Offset LLP delivers design solutions that not only look great but also work for your business.

Reach out to us through the Contact Us form to discuss your next creative project — we’d love to bring your vision to life!`,

    image: img3,
    icon: FaPaintBrush,
    subservices: [
      { id: "logo-design", name: "Outdoor Flex Signage", description: "Memorable logos tailored to your brand.", image: s21 },
      { id: "business-stationery", name: "Window Signs", description: "Letterheads, cards, and corporate kits.", image: s22 },
      { id: "packaging-design", name: "Flags", description: "Standout designs for your products.", image: s23 },
      { id: "product-mockups", name: "LED Signs", description: "High-quality product visualization.", image: s24 }
    ]
  },
  {
    id: "photo-video",
    name: "Indoor Signage",
    description: "Professional visual content that captures attention.",
    longDescription: `Subak Offset LLP offers high-end photography and videography services tailored for businesses looking to make a lasting impression.

Whether you're launching a product, showcasing your workspace, or producing a commercial, our creative team brings technical excellence and artistic vision to every project.

We specialize in:
• Product photography that highlights detail, color, and quality.
• Corporate shoots that capture your team’s professionalism and company culture.
• High-impact ad films designed to promote your brand on digital platforms.
• Motion graphics and video editing that enhance storytelling and viewer engagement.

From pre-production planning to post-production polish, we ensure a seamless process and striking results.

Our visual content is crafted to elevate your brand`,

    image: img4,
    icon: FaCameraRetro,
    subservices: [
      { id: "product-photoshoot", name: "Indoor Wallpapers", description: "Clean, crisp visuals of your products.", image: s31 },
      { id: "corporate-shoot", name: "Vinyl Banners", description: "Showcase your team and workspace.", image: s32 },
      { id: "ad-films", name: "Fabric Banners", description: "High-impact commercials and promos.", image: s33 },
      { id: "motion-graphics", name: "Visual Merchandising", description: "Animated content to boost engagement.", image: s34 }
    ]
  }
];
