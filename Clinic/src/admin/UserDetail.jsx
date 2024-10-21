// const UserDetail = () => {
//     return (
//       <div>
//         <div className="py-5 flex justify-between items-center">
//           <h1 className="text-xl text-blue-600 font-bold">All Users</h1>
//         </div>
  
//         <div className="w-full overflow-x-auto">
//           <table className="w-full border-collapse border border-blue-200">
//             <thead>
//               <tr className="bg-blue-100 text-blue-700">
//                 <th className="px-6 py-3 text-md font-semibold">S.No.</th>
//                 <th className="px-6 py-3 text-md font-semibold">Location Name</th>
//                 <th className="px-6 py-3 text-md font-semibold">Action</th>
//                 <th className="px-6 py-3 text-md font-semibold">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="text-blue-600">
//                 <td className="px-6 py-4">1.</td>
//                 <td className="px-6 py-4">Name</td>
//                 <td className="px-6 py-4 text-green-600 cursor-pointer">Edit</td>
//                 <td className="px-6 py-4 text-red-600 cursor-pointer">Delete</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   };
  
//   export default UserDetail;
import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";


const UserDetail = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUserRole, setCurrentUserRole] = useState(null); // Initialize current user role

  useEffect(() => {
    getUsers();
    getCurrentUserRole(); // Get current user role
  }, []);

  const getCurrentUserRole = async () => {
    try {
      const currentUser = await firebase.auth().currentUser;
      if (currentUser) {
        setCurrentUserRole(currentUser.role);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(fireDB, "user"),
        where("role", "==", "user") // Filter users by role "user"
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const usersData = [];
        querySnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() });
        });
        setUsers(usersData);
        setLoading(false);
      });
      return unsubscribe;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteUser = async (userId, userRole) => {
    try {
      // Check if the current user is an admin
      if (currentUserRole === "admin" && userRole !== "admin") {
        await deleteDoc(doc(fireDB, "user", userId));

        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

        toast.success("User deleted successfully");
      } else {
        toast.error("You don't have permission to delete this user.");
      }
    } catch (error) {
      toast.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        <h1 className="text-xl text-blue-600 font-bold">All Users</h1>
      </div>

      <div className="w-full overflow-x-auto">
        {/* {loading && <Loader/>} */}
        <table className="w-full border-collapse border border-blue-200">
          <thead>
            <tr className="bg-blue-100 text-blue-700">
              <th className="px-6 py-3 text-md font-semibold">S.No.</th>
              <th className="px-6 py-3 text-md font-semibold">Name</th>
              <th className="px-6 py-3 text-md font-semibold">Email</th>
              <th className="px-6 py-3 text-md font-semibold">Role</th>
              <th className="px-6 py-3 text-md font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="text-blue-600">
                <td className="px-6 py-4">{index + 1}.</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">
                  <button
                    className="px-4 py-1 rounded-lg text-white font-bold bg-red-500"
                    onClick={() => deleteUser(user.id, user.role)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetail;
