import React, { useState, useMemo } from "react";
import { galleryImages, categories } from "../data/images";
import Header from "./Header"; // make sure this exists
import ImageCard from "./ImageCard";
import LightboxModal from "./LightboxModal";
import Masonry from "react-masonry-css";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState(null);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  function shuffledImages(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const shuffled = useMemo(() => shuffledImages(filteredImages), [filteredImages]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Header with category filtering */}
      <Header
        categories={categories}
        active={selectedCategory}
        setActive={setSelectedCategory}
      />

      {/* Title & Intro */}
      <h1
        className="text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 text-transparent bg-clip-text drop-shadow-sm tracking-tight"
      >
        CollegeTips.in
      </h1>
      <p className="text-center text-lg max-w-3xl mx-auto mb-10 text-gray-700">
        We are India's fastest growing start-up aiming to make students' lives
        easy and happening. So far, we've reached and influenced the lives of
        more than 25 lakh students from 4000+ colleges in 1200+ cities with the
        help of 200+ members working as a team.
      </p>

      {/* Masonry Gallery */}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 mt-6"
        columnClassName="space-y-4"
      >
        {shuffled.map((img, index) => (
          <ImageCard
            key={index}
            image={img}
            onClick={() => setModalImage({ index, images: shuffled })}
          />
        ))}
      </Masonry>


      {/* Lightbox Modal */}
      {modalImage && (
        <LightboxModal
          images={modalImage.images}
          currentIndex={modalImage.index}
          onClose={() => setModalImage(null)}
        />
      )}
    </div>
  );
};

export default Gallery;
