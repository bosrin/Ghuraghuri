import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "India is famous for many historical monuments and the architectural skill involved. For the history seekers, India is the apt place to visit different historical monuments. Each historical monument has a great history and its specific identity. The royalty of Indian kingdom can be seen in these historical monuments.Alleppey, Mcleodganj, Ooty, Darjeeling, Pushkar, Rishikesh, Kodaikanal, Jaisalmer, Goa, Lonavala, Kanyakumari, Kasol, Jaipur, Khajuraho, Nainital, Udaipur, Meghalaya, Pondicherry, Itanagar, Gokarna.",
    author: "Someone",
    date: "April 22, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The best time to visit the USA is either during spring (late March to late May) or autumn (late September to late October). These are the shoulder seasons before and after summer, so promise mild temperatures and fewer visitors in the most popular destinations.While 39.3 million U.S. residents visited Mexico in one year, 15 million made a trip to Canada. Third on the list is the UK with 3.9 million visitors in 2019, followed by the Italy with 3.2 million and France with 3.1 million travelers.",
    author: "Someone",
    date: "April 22, 2024",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "The best time to visit Japan is between March and May and between September and November as it's both warm and dry between these periods. However, the joys of springtime and the iconic blooming of the cherry blossoms in Japan are no secret, which means you'll be sharing the space with plenty of other travellers.Kyoto. The ancient capital of Kyoto is the ideal place to immerse yourself in traditional Japan. Between the Imperial Palace, Nijo Castle, several major shrines and temples and an impressive range of other historic buildings, the city has more fascinating sights than you could see in a dozen visits.",
    author: "Someone",
    date: "April 22, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
