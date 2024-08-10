import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  onSnapshot,
  query,
  collection,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import { toast } from "react-hot-toast";

const BlogDetail = () => {
  const [loading, setLoading] = useState(false);
  const [getAllBlog, setGetAllBlog] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "blogs"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const blogArray = [];
        querySnapshot.forEach((doc) => {
          blogArray.push({ id: doc.id, ...doc.data() });
        });
        setGetAllBlog(blogArray);
        setLoading(false);
      });
      return unsubscribe;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    try {
      // Delete the document from Firestore
      await deleteDoc(doc(fireDB, "blogs", id));
      // Remove the deleted blog post from the state
      setGetAllBlog((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-10 mt-6">
      {/* Your existing layout code here */}

      <div className="container mx-auto px-4 max-w-7xl my-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
          <Link to="/addBlog" className="link-button">
            Add Blog
          </Link>

          <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
            <thead
              style={{
                background: "rgb(30, 41, 59)",
              }}
              className="text-xs "
            >
              <tr>
                <th
                  style={{
                    color: "white",
                  }}
                  scope="col"
                  className="px-6 py-3"
                >
                  S.No
                </th>
                <th
                  style={{
                    color: "white",
                  }}
                  scope="col"
                  className="px-6 py-3"
                >
                  Thumbnail
                </th>
                <th
                  style={{
                    color: "white",
                  }}
                  scope="col"
                  className="px-6 py-3"
                >
                  Title
                </th>
                <th
                  style={{
                    color: "white",
                  }}
                  scope="col"
                  className="px-6 py-3"
                >
                  Category
                </th>
                <th
                  style={{
                    color: "white",
                  }}
                  scope="col"
                  className="px-6 py-3"
                >
                  Date
                </th>
                <th
                  style={{
                    color: "white",
                  }}
                  scope="col"
                  className="px-6 py-3"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {getAllBlog.length > 0 ? (
                getAllBlog.map((blog, index) => (
                  <tr
                    key={blog.id}
                    className=" border-b-2"
                    style={{
                      background:
                        index % 2 === 0 ? "white" : "rgb(245, 247, 250)",
                    }}
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">
                      <img
                        className="w-16 rounded-lg"
                        src={blog.thumbnail}
                        alt="thumbnail"
                      />
                    </td>
                    <td className="px-6 py-4">{blog.title}</td>
                    <td className="px-6 py-4">{blog.category}</td>
                    <td className="px-6 py-4">{blog.date}</td>
                    <td className="px-6 py-4">
                      <button
                        className="px-4 py-1 rounded-lg text-white font-bold bg-red-500"
                        onClick={() => deleteBlog(blog.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
