// import { useState } from "react";
// import MyContext from "./MyContext";

// function MyState({ children }) {
//   const [loading, setLoading] = useState(false);

//   const [getAllBlog, setGetAllBlog] = useState([]);

//   const getBlogs = async () => {
//     setLoading(true);
//     try {
//       const q = query(collection(fireDB, "blogs"), orderBy("time"));
//       const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const blogArray = [];
//         querySnapshot.forEach((doc) => {
//           blogArray.push({ id: doc.id, ...doc.data() });
//         });
//         setGetAllBlog(blogArray);
//         setLoading(false);
//       });
//       return unsubscribe;
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };
//   // user State
//   const [getAllUser, setGetAllUser] = useState([]);

//   const getAllUserFunction = async () => {
//     setLoading(true);
//     try {
//       const q = query(collection(fireDB, "user"), orderBy("time"));
//       const data = onSnapshot(q, (QuerySnapshot) => {
//         let userArray = [];
//         QuerySnapshot.forEach((doc) => {
//           userArray.push({ ...doc.data(), id: doc.id });
//         });
//         setGetAllUser(userArray);
//         setLoading(false);
//       });
//       return () => data;
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };
//   const [getAllAppointment, setGetAllAppointment] = useState([]);

//   const getAllAppointmentFunction = async () => {
//     setLoading(true);
//     try {
//       const q = query(collection(fireDB, "appointments"), orderBy("time"));
//       const data = onSnapshot(q, (querySnapshot) => {
//         let appointmentArray = [];
//         querySnapshot.forEach((doc) => {
//           appointmentArray.push({ ...doc.data(), id: doc.id });
//         });
//         setGetAllAppointment(appointmentArray);
//         setLoading(false);
//       });
//       return () => data;
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <MyContext.Provider
//       value={{
//         loading,
//         setLoading,
//       }}
//     >
//       {children}
//     </MyContext.Provider>
//   );
// }

// export default MyState;

import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);

  // Blog State
  const [getAllBlog, setGetAllBlog] = useState([]);

  const getBlogsFunction = async () => {
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

  // User State
  const [getAllUser, setGetAllUser] = useState([]);

  const getAllUserFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "user"), orderBy("time"));
      const data = onSnapshot(q, (querySnapshot) => {
        let userArray = [];
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          // Check if the role is "user"
          if (userData.role === "user") {
            userArray.push({ ...userData, id: doc.id });
          }
        });
        setGetAllUser(userArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Appointment State
  const [getAllAppointment, setGetAllAppointment] = useState([]);

  // const getAllAppointmentFunction = async () => {
  //   setLoading(true);
  //   try {
  //     const q = query(collection(fireDB, "appointments"), orderBy("time"));
  //     const data = onSnapshot(q, (querySnapshot) => {
  //       let appointmentArray = [];
  //       querySnapshot.forEach((doc) => {
  //         appointmentArray.push({ ...doc.data(), id: doc.id });
  //       });
  //       setGetAllAppointment(appointmentArray);
  //       setLoading(false);
  //     });
  //     return () => data;
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //   }
  // };

  const getAllAppointmentFunction = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "appointments"),
        orderBy("createdAt", "desc")
      );
      return onSnapshot(q, (querySnapshot) => {
        const appointmentArray = [];
        querySnapshot.forEach((doc) => {
          appointmentArray.push({ id: doc.id, ...doc.data() });
        });
        setGetAllAppointment(appointmentArray);
        setLoading(false);
      }, (error) => {
        console.error("Error fetching appointments:", error);
        setLoading(false);
      });
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getBlogsFunction();
    getAllUserFunction();
    getAllAppointmentFunction();
  }, []);

  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllBlog,
        getBlogs: getBlogsFunction, 
        getAllUser,
        getAllUserFunction, 
        getAllAppointment,
        getAllAppointmentFunction,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;




