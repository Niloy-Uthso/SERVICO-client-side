import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'SkillForge',
    logo: 'https://i.ibb.co/3xBLVgn/skillforge-cover-e-2147483647-v-beta-t-6xb-Yg-AVvvewht-DX8-FCzih-WU3ry-ASc8-Yw-EH2-Hx0lb-Us.jpg',
    description: 'Providing skill-building workshops and mentorship support.',
  },
  {
    name: 'CraftNest',
    logo: 'https://i.ibb.co/1YbmBSnp/98978c3e0cfcc45a68918d48b62b9d1a.jpg',
    description: 'Specialists in handmade art supply sponsorships.',
  },
  {
    name: 'TechLinkers',
    logo: 'https://i.ibb.co/VWNqPBF3/photo-1498050108023-c5249f4df085-fm-jpg-q-60-w-3000-ixlib-rb-4-1.jpg',
    description: 'Our official tech partner enabling seamless digital experiences.',
  },
  {
    name: 'LocalSpark',
    logo: 'https://i.ibb.co/rffTkBpY/images-q-tbn-ANd9-Gc-Sk-SGd2lpe-Ck-Dg4c-UXe-Sl-Yg-HTKZQ3-B83h-Jlr-PKl4-F38-Od2-Kjb-c-X19-XHUn-P5-On.jpg',
    description: 'Connecting local volunteers and community hubs to your events.',
  },
];

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.9,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const MeetOurPartners = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-800 to-indigo-900 text-white px-6 mt-5">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 mb-4 tracking-tight">Meet Our Partners</h2>
        <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
          Our journey is supported by amazing collaborators who help bring value to the community.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            className="bg-white text-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-16 w-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
            <p className="text-sm opacity-80">{partner.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MeetOurPartners;
