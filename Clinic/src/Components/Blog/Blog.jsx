// 1st UI
// import React, { useState, useEffect } from "react";
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
// import { fireDB } from "../firebase/FirebaseConfig";

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getAllBlogs = async () => {
//       setLoading(true);
//       try {
//         const q = query(collection(fireDB, "blogs"), orderBy("time"));
//         const unsubscribe = onSnapshot(q, (snapshot) => {
//           const blogArray = [];
//           snapshot.forEach((doc) => {
//             blogArray.push({ ...doc.data(), id: doc.id });
//           });
//           setBlogs(blogArray);
//           setLoading(false);
//         });
//         return unsubscribe;
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         setLoading(false);
//       }
//     };

//     getAllBlogs();
//   }, []);

//   return (
//     <>
//       <h1 className="text-center md:text-6xl align-center mt-2 text-3xl">Blogs</h1>
//       <div className="flex mt-10 flex-wrap justify-center -m-4 mb-5">
//         {loading ? (
//           <h1 className="text-xl font-bold">Loading...</h1>
//         ) : blogs.length > 0 ? (
//           blogs.map((item, index) => {
//             const { thumbnail, id, date } = item;
//             console.log(item);
//             return (
//               <div className="p-4 md:w-1/3" key={index}>
//                 <div
//                   className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
//                 rounded-xl overflow-hidden`}
//                 >
//                   {/* Blog Thumbnail  */}
//                   <img
//                     onClick={() => navigate(`/bloginfo/${id}`)}
//                     className="w-full"
//                     src={thumbnail}
//                     alt="blog"
//                   />

//                   {/* Top Items  */}
//                   <div className="p-6">
//                     {/* Blog Date  */}
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                       {date}
//                     </h2>

//                     {/* Blog Title  */}
//                     <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
//                       {item.title}
//                     </h1>

//                     {/* Blog Description  */}
//                     <p className="leading-relaxed mb-3">{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <h1 className="text-xl font-bold">Not Found</h1>
//         )}
//       </div>
//     </>
//   );
// }

// export default Blog;

// 2nd  UI
// import React, { useState, useEffect } from "react";
// import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
// import { fireDB } from "../firebase/FirebaseConfig";
// import { useNavigate } from "react-router-dom";

// function Blog() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getAllBlogs = async () => {
//       setLoading(true);
//       try {
//         const q = query(collection(fireDB, "blogs"), orderBy("time"));
//         const unsubscribe = onSnapshot(q, (snapshot) => {
//           const blogArray = [];
//           snapshot.forEach((doc) => {
//             blogArray.push({ ...doc.data(), id: doc.id });
//           });
//           setBlogs(blogArray);
//           setLoading(false);
//         });
//         return unsubscribe;
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         setLoading(false);
//       }
//     };

//     getAllBlogs();
//   }, []);
  
//   return (
//     <div className="bg-white text-black px-4 py-8">
//       <h1 className="text-center text-3xl text-gray-500 font-bold mb-6">Blogs</h1>
//       {loading ? (
//         <div className="text-center text-xl">Loading...</div>
//       ) : (
//         <div className="flex flex-wrap justify-center gap-6">
//           {blogs.length > 0 ? (
//             blogs.map((item) => {
//               const { id, thumbnail, date, title, description } = item;

//               return (
//                 <div
//                   className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
//                   key={id}
//                 >
//                   <div
//                     className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-200
//                     hover:shadow-xl hover:translate-y-[-5px] cursor-pointer"
//                   >
//                     <img
//                       src={thumbnail}
//                       alt="Blog Thumbnail"
//                       className="w-full h-48 object-cover"
//                       onClick={() => navigate(`/bloginfo/${id}`)}
//                     />

//                     <div className="p-4">
//                       <h2 className="text-gray-400 text-xs font-medium mb-1">
//                         {date}
//                       </h2>
//                       <h1 className="text-lg font-bold text-gray-900 mb-3">
//                         {title}
//                       </h1>
//                       <p className="text-sm leading-relaxed">{description}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           ) : (
//             <div className="text-center text-xl font-bold">Not Found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Blog;

import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllBlogs = async () => {
      setLoading(true);
      try {
        const q = query(collection(fireDB, "blogs"), orderBy("time"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const blogArray = [];
          snapshot.forEach((doc) => {
            blogArray.push({ ...doc.data(), id: doc.id });
          });
          setBlogs(blogArray);
          setLoading(false);
        });
        return unsubscribe;
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    getAllBlogs();
  }, []);

  return (
    <div className="bg-white text-black px-4 py-8">
      <h1 className="text-center text-3xl text-gray-500 font-bold mb-6">Blogs</h1>
      
      <div className="flex flex-wrap justify-center gap-6">
        {blogs.length > 0 ? (
          blogs.map((item) => {
            const { id, thumbnail, date, title, description } = item;

            return (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={id}>
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-200
                  hover:shadow-xl hover:translate-y-[-5px] cursor-pointer"
                >
                  <img
                    src={thumbnail}
                    alt="Blog Thumbnail"
                    className="w-full h-48 object-cover"
                    onClick={() => navigate(`/bloginfo/${id}`)}
                  />

                  <div className="p-4">
                    <h2 className="text-gray-400 text-xs font-medium mb-1">
                      {date}
                    </h2>
                    <h1 className="text-lg font-bold text-gray-900 mb-3">
                      {title}
                    </h1>
                    <p className="text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-xl font-bold">Not Found</div>
        )}
      </div>
      
      {loading && (
        <div className="text-center text-xl">Loading...</div>
      )}
    </div>
  );
}

export default Blog;
