import React, { useRef } from "react";

function Stories() {
  const storyContainerRef = useRef(null);

  const nextSlide = () => {
    if (storyContainerRef.current) {
      storyContainerRef.current.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (storyContainerRef.current) {
      storyContainerRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="stories-box">
      <div className="stories-box-head">Here's some stories narrating sustainability</div>
      <div className="story-container" ref={storyContainerRef}>
        <div className="story-x">
          <div className="story-heading">Saalumarada Thimmakka</div>
          <div className="story-tag">The Banyan Pioneer of Karnataka</div>
          <div className="story-body">Saalumarada Thimmakka, born in 1912 in Karnataka, India, dedicated her life to environmental conservation. In the 1960s, with her husband Chikkaiah, they planted 385 banyan trees along a 4-kilometer stretch of highway. Facing challenges, Thimmakka's persistence transformed the arid landscape into a green canopy, providing shade for travelers and enhancing biodiversity. Her impactful efforts gained national acclaim, highlighting the profound difference one person's commitment to sustainability can make.</div>
        </div>
        <div className="story-x">
          <div className="story-heading">Rajendra Singh</div>
          <div className="story-tag">The Water Man of India</div>
          <div className="story-body">Rajendra Singh, also known as the "Water Man of India," dedicated his life to water conservation. In the arid region of Rajasthan, he revived traditional water harvesting methods to combat water scarcity. By constructing check dams, ponds, and using indigenous water management techniques, Singh transformed barren lands into fertile ones. His efforts not only replenished groundwater but also empowered local communities by providing a sustainable source of water for agriculture, improving livelihoods, and restoring the ecosystem.</div>
        </div>
        <div className="story-x">
          <div className="story-heading">Vandana Shiva</div>
          <div className="story-tag"> Environmental Activist and Seed Sovereignty Advocate</div>
          <div className="story-body">Vandana Shiva, an environmental activist and physicist, has been a prominent advocate for sustainable agriculture and seed sovereignty. She has campaigned against genetically modified organisms (GMOs) and promoted organic farming practices. Through her organization Navdanya, Shiva has worked to conserve traditional seed varieties, empowering farmers to maintain biodiversity and resist dependence on commercial seeds. Her efforts emphasize the importance of sustainable agriculture in ensuring food security, environmental health, and the preservation of indigenous knowledge.</div>
        </div>
      </div>

      {/* Optional navigation controls */}
      <div className="slider-nav">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default Stories;