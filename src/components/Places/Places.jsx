import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "Leading the list are #1 Sea Ray, #2 Bayliner, #3 Wellcraft, #4 Catalina and #5 Grady-White. 'Sea Ray, with 54,266 boats, is by far the most popular powerboat owned by BoatU.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of AgraAgra stands atop. As it homes the world's most beautiful monument, Taj Mahal, it reigns supreme in the list of famous tourist places in India.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "Up to half of the continent's modern surface area may have been submerged by this sea. This is called the Western Interior Seaway. It covered the majority of states like Texas, New Mexico, Oklahoma, Colorado, Kansas, Nebraska, the Dakotas, and Wyoming.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "Sydney is an unincorporated community in Hillsborough County, Florida, United States.Toponymy. In 1788, Captain Arthur Phillip, the first governor of New South Wales, named the cove where the first British settlement was established Sydney Cove after Home Secretary Thomas Townshend, 1st Viscount Sydney.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "he majority of the city proper lies in a basin in Southern California adjacent to the Pacific Ocean in the west and extending partly through the Santa Monica Mountains and north into the San Fernando Valley, with the city bordering the San Gabriel Valley to its east.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "Las Vegas, colloquially referred to as Vegas, is the most populous city in the U.S. state of Nevada and the seat of Clark County. The Las Vegas Valley metropolitan area is the largest within the greater Mojave Desert, and second-largest in the Southwestern United States.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
