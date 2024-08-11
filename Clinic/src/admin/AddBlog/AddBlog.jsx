import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import getDownloadURL
import { fireDB, fireStorage } from "../firebase/FirebaseConfig";
import { toast } from "react-hot-toast";

function AddBlog() {
  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // blog state
  const [blog, setBlog] = useState({
    title: "",
    thumbnail: null,
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const handleThumbnailChange = (event) => {
    setBlog({
      ...blog,
      thumbnail: event.target.files[0],
    });
  };

  // Add Blog Function
  const addBlogFunction = async (event) => { // Pass event parameter to prevent form submission
    event.preventDefault(); // Prevent default form submission behavior

    if (
      blog.title === "" ||
      blog.thumbnail === null ||
      blog.description === ""
    ) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      // Upload thumbnail to Firebase Storage
      const thumbnailRef = ref(
        fireStorage,
        `thumbnails/${blog.thumbnail.name}`
      );
      await uploadBytes(thumbnailRef, blog.thumbnail);

      // Get download URL for the uploaded thumbnail
      const thumbnailURL = await getDownloadURL(thumbnailRef);

      // Add blog data to Firestore with thumbnail URL
      const blogsRef = collection(fireDB, "blogs");
      await addDoc(blogsRef, { ...blog, thumbnail: thumbnailURL });

      toast.success("Blog added successfully");
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Failed to add blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={addBlogFunction} className="w-full max-w-lg mt-20 mx-auto">
      {loading && <Loader />}
      <div className="flex flex-col bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-black-700 text-sm font-bold mb-2">
            Upload Thumbnail:
          </label>
          <input
            type="file"
            onChange={handleThumbnailChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter Your Title:
          </label>
          <input
            type="text"
            value={blog.title}
            onChange={(e) => {
              setBlog({
                ...blog,
                title: e.target.value,
              });
            }}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Title"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Enter Description:
          </label>
          <textarea
            value={blog.description}
            onChange={(e) => {
              setBlog({
                ...blog,
                description: e.target.value,
              });
            }}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Description"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-indigo-500 w-full hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            SEND
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddBlog;
