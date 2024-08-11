// import React, { useEffect, useState } from "react";
// import { onSnapshot, query, collection, orderBy, updateDoc, doc, deleteDoc } from "firebase/firestore";
// import { fireDB } from "../firebase/FirebaseConfig";
// import { toast } from "react-hot-toast";

// const Appointments = () => {
//   const [loading, setLoading] = useState(false);
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const unsubscribe = fetchAppointments();
//     return unsubscribe;
//   }, []);

//   const fetchAppointments = () => {
//     setLoading(true);
//     try {
//       const q = query(
//         collection(fireDB, "appointments"),
//         orderBy("createdAt", "desc")
//       );
//       return onSnapshot(q, (querySnapshot) => {
//         const appointmentArray = [];
//         querySnapshot.forEach((doc) => {
//           appointmentArray.push({ id: doc.id, ...doc.data() });
//         });
//         setAppointments(appointmentArray);
//         setLoading(false);
//       }, (error) => {
//         console.error("Error fetching appointments:", error);
//         setLoading(false);
//       });
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (id, status) => {
//     try {
//       await updateDoc(doc(fireDB, "appointments", id), { status });
//       // Update the status in the UI immediately
//       setAppointments((prevAppointments) =>
//         prevAppointments.map((appointment) =>
//           appointment.id === id ? { ...appointment, status } : appointment
//         )
//       );
//       toast.success(`Appointment ${status.toLowerCase()} successfully`);
//     } catch (error) {
//       console.error(`Error ${status.toLowerCase()} appointment:`, error);
//       toast.error(`An error occurred while ${status.toLowerCase()} the appointment`);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteDoc(doc(fireDB, "appointments", id));
//       setAppointments((prevAppointments) =>
//         prevAppointments.filter((appointment) => appointment.id !== id)
//       );
//       toast.success("Appointment deleted successfully");
//     } catch (error) {
//       console.error("Error deleting appointment:", error);
//       toast.error("An error occurred while deleting the appointment");
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 max-w-7xl my-5">
//       <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
//         <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
//           <thead style={{ background: "rgb(30, 41, 59)" }} className="text-xs">
//             <tr>
//               <th className="px-6 py-3" style={{ color: "white" }}>
//                 S.No
//               </th>
//               <th className="px-6 py-3" style={{ color: "white" }}>
//                 Client Name
//               </th>
//               <th className="px-6 py-3" style={{ color: "white" }}>
//                 Mobile Number
//               </th>
//               <th className="px-6 py-3" style={{ color: "white" }}>
//                 Appointment Date
//               </th>
//               <th className="px-6 py-3" style={{ color: "white" }}>
//                 Appointment Time
//               </th>
//               <th className="px-6 py-3" style={{ color: "white" }}>
//                 Message
//               </th>
//               <th className="px-6 py-3" style={{ color: "white" }}>
//                 Status
//               </th>
//               <th className="px-6 py-3" style={{ color: "white" }}>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="9" className="text-center py-4">
//                   Loading...
//                 </td>
//               </tr>
//             ) : appointments.length > 0 ? (
//               appointments.map((appointment, index) => (
//                 <tr
//                   key={appointment.id}
//                   className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
//                 >
//                   <td className="px-6 py-4">{index + 1}</td>
//                   <td className="px-6 py-4">{appointment.name}</td>
//                   <td className="px-6 py-4">{appointment.phoneNumber}</td>
//                   <td className="px-6 py-4">{appointment.preferredDate}</td>
//                   <td className="px-6 py-4">{appointment.preferredTime}</td>
//                   <td className="px-6 py-4">{appointment.message}</td>

//                   <td className="px-6 py-4">{appointment.status}</td>
//                   <td className="px-6 py-4">
//                     <button
//                       className="px-4 py-1 rounded-lg text-black font-bold bg-green-300 mr-2"
//                       onClick={() => handleStatusChange(appointment.id, "Accepted")}
//                     >
//                       Accept
//                     </button>
//                     <button
//                       className="px-4 py-1 rounded-lg text-white font-bold bg-red-300 mr-2"
//                       onClick={() => handleStatusChange(appointment.id, "Rejected")}
//                     >
//                       Reject
//                     </button>
//                     <button
//                       className="px-4 py-1 rounded-lg text-white font-bold bg-red-500"
//                       onClick={() => handleDelete(appointment.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="8" className="text-center py-4">
//                   Not Found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Appointments;

import React, { useEffect, useState } from "react";
import {
  onSnapshot,
  query,
  collection,
  orderBy,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import { toast } from "react-hot-toast";

const Appointments = () => {
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchAppointments();
    return unsubscribe;
  }, []);

  const fetchAppointments = () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "appointments"),
        orderBy("createdAt", "desc")
      );
      return onSnapshot(
        q,
        (querySnapshot) => {
          const appointmentArray = [];
          querySnapshot.forEach((doc) => {
            appointmentArray.push({ id: doc.id, ...doc.data() });
          });
          setAppointments(appointmentArray);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching appointments:", error);
          setLoading(false);
        }
      );
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status, email, date, time) => {
    try {
      await updateDoc(doc(fireDB, "appointments", id), { status });
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === id ? { ...appointment, status } : appointment
        )
      );
      if (status === "Accepted" && email) {
        // If the appointment is accepted, send an email
        sendEmail(email, date, time);
      }
      toast.success(`Appointment ${status.toLowerCase()} successfully`);
    } catch (error) {
      console.error(`Error ${status.toLowerCase()} appointment:`, error);
      toast.error(
        `An error occurred while ${status.toLowerCase()} the appointment`
      );
    }
  };

  const sendEmail = async (email, date, time) => {
    if (!email) {
      console.error("Email address is missing");
      return;
    }

    try {
      const response = await fetch("http://localhost:8004/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, date, time }), // Send the email address as JSON
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error sending email:", errorData.message);
        toast.error(`Error sending email: ${errorData.message}`);
        return;
      }

      const data = await response.json();
      console.log("Email sent:", data.message);
      toast.success("Email sent successfully");
     
    } catch (error) {
      console.error("Network error:", error);
      toast.error("An error occurred while sending the email");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(fireDB, "appointments", id));
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.id !== id)
      );
      toast.success("Appointment deleted successfully");
    } catch (error) {
      console.error("Error deleting appointment:", error);
      toast.error("An error occurred while deleting the appointment");
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl my-5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
        <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
          <thead style={{ background: "rgb(30, 41, 59)" }} className="text-xs">
            <tr>
              <th className="px-6 py-3" style={{ color: "white" }}>
                S.No
              </th>
              <th className="px-6 py-3" style={{ color: "white" }}>
                Client Name
              </th>
              <th className="px-6 py-3" style={{ color: "white" }}>
                Mobile Number
              </th>
              <th className="px-6 py-3" style={{ color: "white" }}>
                Email
              </th>
              <th className="px-6 py-3" style={{ color: "white" }}>
                Appointment Date
              </th>
              <th className="px-6 py-3" style={{ color: "white" }}>
                Appointment Time
              </th>
              <th className="px-6 py-3" style={{ color: "white" }}>
                Message
              </th>
              <th className="px-6 py-3" style={{ color: "white" }}>
                Status
              </th>
              <th className="px-6 py-3" style={{ color: "white" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : appointments.length > 0 ? (
              appointments.map((appointment, index) => (
                <tr
                  key={appointment.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{appointment.name}</td>
                  <td className="px-6 py-4">{appointment.phoneNumber}</td>
                  <td className="px-6 py-4">{appointment.email}</td>
                  <td className="px-6 py-4">{appointment.preferredDate}</td>
                  <td className="px-6 py-4">{appointment.preferredTime}</td>
                  <td className="px-6 py-4">{appointment.message}</td>
                  <td className="px-6 py-4">{appointment.status}</td>
                  <td className="px-6 py-4">
                    <button
                      className="px-4 py-1 rounded-lg text-black font-bold bg-green-300 mr-2"
                      onClick={() =>
                        handleStatusChange(
                          appointment.id,
                          "Accepted",
                          appointment.email,
                          appointment.preferredDate,
                          appointment.preferredTime
                        )
                      }
                    >
                      Accept
                    </button>

                    <button
                      className="px-4 py-1 mb-2 rounded-lg text-white font-bold bg-red-300 mr-2"
                      onClick={() =>
                        handleStatusChange(appointment.id, "Rejected")
                      }
                    >
                      Reject
                    </button>
                    <br />
                    <button
                      className="px-4 py-1 rounded-lg text-white font-bold bg-red-500"
                      onClick={() => handleDelete(appointment.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
