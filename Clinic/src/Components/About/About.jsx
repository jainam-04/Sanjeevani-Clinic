// import React from "react";
// import Blog from "./Blog";
// import Testimonials from "./Testimonials";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";

// function About() {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-500">
//       {" "}
//       {/* Change background color to white */}
//       <div className="bg-gray-500  text-gray-600 py-16">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-6xl font-bold  text-center mb-4">
//             Welcome To Sanjeevani Clinic
//           </h1>
//           <h2 className="text-4xl md:text-6xl font-bold text-center">
//             Dr. Asif Sheikh
//           </h2>
//           <h1 className="text-5xl">Appoinment</h1>
//           <Link
//             className="text-xl font-thin mt-3 text-black-300 border border-black py-2 px-4 rounded inline-block hover:bg-blue-300 hover:text-white hover:border-gray-300 transition duration-300 ease-in-out"
//             to="/request-appoinment"
//           >
//             Book Now
//           </Link>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center">
//           <p className="text-sm md:text-lg uppercase text-gray-600">About Us</p>
//           <h1 className="text-3xl md:text-5xl font-bold my-4">
//             Best Medical Care For Yourself <br /> And Your Family
//           </h1>
//         </div>
//       </div>
//       <Blog />
//       <Testimonials />
//       <Contact />
//       <Footer /> {/* Render Footer component */}
//     </div>
//   );
// }

// export default About;

// 2nd ui
// import React from "react";
// import Blog from "./Blog";
// import Testimonials from "./Testimonials";
// import Contact from "./Contact";
// import Footer from "./Footer";
// import { Link } from "react-router-dom";

// function About() {
//   return (
//     <div className="flex flex-col h-screen bg-cover bg-center bg-no-repeat text-blue-600">
//       <div
//         className="bg-transparent bg-opacity-80 py-16 w-full h-full overflow-auto"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1625134673337-519d4d10b313?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//         }}
//       >
//         {" "}
//         {/* Full-height content */}
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl md:text-5xl font-bold mb-4 text-blue-400 left-10">
//             Welcome To Sanjeevani <br /> Clinic
//           </h1>
//           <h2 className="text-3xl md:text-4xl font-semibold text-blue-400">
//             <span className="text-red-400">D</span>
//             <span className="text-red-400">R</span>. Asif Sheikh
//           </h2>
//           <div className="mt-8">
//             <Link
//               className="text-xl font-thin border border-gray-400 py-2 px-6 rounded inline-block hover:bg-blue-300 hover:text-white hover:border-gray-300 transition duration-300 ease-in-out"
//               to="/request-appoinment"
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>
//         <div className="container mx-auto px-4 py-16">
//           <div className="">
//             <p className="text-sm md:text-lg uppercase text-blue-600 ms-4">
//               About Us
//             </p>
//             <h1 className="text-3xl md:text-4xl font-bold my-4 text-blue-600">
//               Best Medical Care For Yourself <br /> And Your Family
//             </h1>
//           </div>
//         </div>
//         {/* Additional content */}
//         <Blog />
//         <Testimonials />
//         <Contact />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import QNa from "./Qna/QNa";

import { Link } from "react-router-dom";
import QNA from "./Qna/QNa";

function About() {
  return (
    <>
      <div
        className="flex flex-col h-screen w-full text-blue-600" // Ensure full height and width
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1625134673337-519d4d10b313?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover", // Stretch image to cover the entire component
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat",
          height: "100vh", // Full-screen height
        }}
      >
        <div className="bg-transparent bg-opacity-80 py-16 w-full h-full overflow-auto">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 " style={{
                  color: "#f1bd61",
                  
                }}>
              Welcome To Sanjeevani <br /> Clinic
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold " style={{
                  color: "#f1bd61",
                  
                }}>
              Dr. Asif Sheikh
            </h2>

            <div className="mt-8 ">
              <i
                className="text-xl  "
                style={{
                  color: "#f1bd61",
                  
                }}
              >
                {" "}
                You can book an appointment at <br /> Sanjivani Clinic in Aditya
                Nagar, Solapur.
              </i>
              <br></br><br />
              <Link
                className="text-xl font-thin border border-gray-400 py-2 px-6 rounded inline-block hover:bg-white-300 hover:text-white hover:border-gray-300 transition duration-300 ease-in-out"
                to="/request-appoinment" style={{
                  color: "#f1bd61",
                  
                }}
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className="container mx-auto px-4 py-16"></div>
          {/* Additional content */}
        </div>
      </div>
      <div className="mx-auto">
        <h1 className="text-3xl md:text-lg text-center uppercase text-black-600 mt-2 ms-4">
          About Us
        </h1>
        <h1 className="text-xl md:text-3xl text-center font-bold my-4 text-black-600">
          Clinics offer organised outpatient services to patients. They also
          offer diagnostic and therapeutic services. You can get the best
          facilities for any kind of medical emergency from a clinic. Some of
          them have well-equipped infrastructure to provide services like blood
          tests, X-rays, ultrasounds, MRIs, CT scans, and physical exams, while
          some clinics offer facilities for flu shots, vaccinations, and
          physical exams.
        </h1>
      </div>
      <Blog />
      <Testimonials />
      <QNA/>
      <Contact />
    </>
  );
}

export default About;
