import React from "react";
import "./AboutUs.css";
import { images } from "../../constants";

function AboutUs() {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        {/* <img src={images.G} alt="t letter"></img> */}
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about spoon" className="spoon__img" />
          <p className="p__opensans">
            We are a french bistro in Long Island City near the midtown
            tunnel and 59th street bridge. Pascal Escriout, the owner of
            Tournesol got off the train one day and was captivated by a town
            that reminded him of a small village in France. The atmoshpere of
            Long Island City greeted him with a nostalgia of italian country
            life. It was here that Pascal found a home for his bistro Tournesol
            which is french for "sunflower". Tournesol opened in 2002 shedding a
            new bright light within the city. A small family owned restaurant
            celebrating over 18 years in the community.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          {/* <img src={images.knife} alt="about knife" /> */}
        </div>
        {/* <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            ipsam ut inventore. Voluptatibus et eum sit reprehenderit iusto
            harum fugit dolore pariatur. Aperiam, neque voluptatem?
          </p>
          <button type="button" className="custom__button">Know More</button>
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;
