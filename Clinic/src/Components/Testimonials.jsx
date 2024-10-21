import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="pb-7 pt-2">
      <p className="text-center text-4xl text-gray-800 my-2 underline-none">
        Testimonials
      </p>
      <h2 className="text-xl text-center my-3">
        Patients Say About
        <br />
        Our Services
      </h2>
      <div className="w-3/4 mx-auto">
        <Slider {...settings}>
          {data.map((d) => (
            <li key={d.id} style={{ listStyle: "none" }}>
              <div className="bg-white h-[450px] text-black rounded-xl mx-2 overflow-hidden">
                <div className="h-56 rounded-t-xl bg-blue-500 flex justify-center items-center">
                  <div className="h-44 w-44 rounded-full overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <button className="bg-indigo-300 hover:bg-indigo-600 text-white text-lg px-6 py-1 rounded-xl transition-colors duration-300 ease-in-out">
                    Read more
                  </button>
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    id: 0,
    name: "John Morgan",
    img: "https://img.freepik.com/free-photo/front-view-doctor-doctor-mask-points-phonendoscope_179666-16264.jpg?t=st=1713018014~exp=1713021614~hmac=140d0fbc0119298a1abd93ee85bd92ebf6b8e3e07ed493a668d4012d546a2da2&w=1060",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi corporis repellendus corrupti sint, explicabo deserunt voluptate labore magni autem!",
  },
  {
    id: 1,
    name: "Ellie Anderson",
    img: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1713017972~exp=1713021572~hmac=323acf024fb7dbb52f3037c110a2e4c0bec2cb95f9d344507970188a016f0dbc&w=740",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi corporis repellendus corrupti sint, explicabo deserunt voluptate labore magni autem!",
  },
  {
    id: 2,
    name: "Nia Adebayo",
    img: "https://img.freepik.com/free-photo/portrait-doctor_144627-39387.jpg?t=st=1713017994~exp=1713021594~hmac=7d6d8b78c98843c5c006d539eef14009ffd9d1eb8845e8d55d30e988d146ec41&w=360",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo modi corporis repellendus corrupti sint, explicabo deserunt voluptate labore magni autem!",
  },
];

export default Testimonials;
