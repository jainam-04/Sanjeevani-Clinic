// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import UserDetail from "../admin/UserDetail";
// import BlogDetail from "../admin/BlogDetail";
// import { Button } from "@material-tailwind/react";
// import { useNavigate } from "react-router-dom";
// // import Blog from "../Components/Blog";
// import Appoinment from "./Appoinment";

// const AdminDashboard = () => {
//   const user = JSON.parse(localStorage.getItem("users"));

//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.clear("users");
//     navigate("/login");
//   };
//   return (
//     <div className="container mx-auto px-4 py-5">
//       <div className="mb-8 px-5 mt-5">
//         <div className="bg-blue-100 py-5 border border-gray-200 rounded-lg">
//           <h1 className="text-center text-3xl font-bold text-gray-600">
//             Admin Dashboard
//           </h1>
//         </div>
//       </div>

//       <div className="px-5">
//         <div className="mb-8">
//           <div className="bg-blue-100 py-8 rounded-xl border border-gray-200 flex flex-col items-center">
//             <img
//               className="w-24 h-24 mb-4"
//               src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
//               alt="User Avatar"
//             />
//             <div className="text-center">
//               <h2 className="text-lg font-bold text-black-600">
//                 Name: {user?.name}
//               </h2>
//               <h2 className="text-lg font-bold text-black-600">
//                 Email: {user?.email}
//               </h2>
//               <h2 className="text-lg font-bold text-black-600">
//                 Date: {user?.date}
//               </h2>
//               <h2 className="text-lg font-bold text-black-600">
//                 Role: {user?.role}
//               </h2>
//             </div>
//             <br />
//             <Button onClick={logout}>Logout</Button>
//           </div>
//         </div>

//         <div>
//           <Tabs>
//             <TabList className="flex justify-center">
//               <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
//                 <div className="border bg-blue-100 hover:bg-blue-200 border-black-200 px-4 py-3 rounded-xl">
//                   <h2 className="text-3xl font-medium text-gray-600">10 </h2>
//                   <p className="text-gray-600 font-bold">Total Blogs</p>
//                 </div>
//               </Tab>
//               <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
//                 <div className="border bg-blue-100 hover:bg-blue-200 border-gray-200 px-4 py-3 rounded-xl">
//                   <h2 className="text-3xl font-medium text-gray-600">10</h2>
//                   <p className="text-gray-600 font-bold">Total Users</p>
//                 </div>
//               </Tab>

//               <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
//                 <div className="border bg-blue-100 hover:bg-blue-200 border-gray-200 px-4 py-3 rounded-xl">
//                   <h2 className="text-3xl font-medium text-gray-600">10</h2>
//                   <p className="text-gray-600 font-bold">Total Appointment</p>
//                 </div>
//               </Tab>
//             </TabList>

//             <TabPanel>
//               <BlogDetail />
//             </TabPanel>

//             <TabPanel>
//               <UserDetail />
//             </TabPanel>

//             <TabPanel>
//               <Appoinment />
//             </TabPanel>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UserDetail from "../admin/UserDetail";
import BlogDetail from "../admin/BlogDetail";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import Appoinment from "./Appoinment";
import MyContext from "../context/MyContext";
import { useContext } from "react";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const navigate = useNavigate();
  const context = useContext(MyContext);
  const { getAllBlog, getAllUser, getAllAppointment } = context;
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="mb-8 px-5 mt-5">
        <div
          className="bg-blue-100 py-5 border border-gray-200 rounded-lg"
          style={{
            backgroundColor: "#2F4286",
          }}
        >
          <h1 className="text-center text-3xl font-bold text-white">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="px-5">
        <div className="mb-8">
          <div
            className="bg-blue-100 py-8 rounded-xl border border-gray-200 flex flex-col items-center"
            style={{
              backgroundColor: "#2F4286",
            }}
          >
            <img
              className="w-24 h-24 mb-4"
              src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
              alt="User Avatar"
            />
            <div className="text-center">
              <h2 className="text-lg font-bold text-white">
                Name: {user?.name}
              </h2>
              <h2 className="text-lg font-bold  text-white  ">
                Email: {user?.email}
              </h2>
              <h2 className="text-lg font-bold  text-white ">
                Date: {user?.date}
              </h2>
              <h2 className="text-lg font-bold  text-white ">
                Role: {user?.role}
              </h2>
            </div>
            <br />
            <Button onClick={logout}>Logout</Button>
          </div>
        </div>

        <div>
          <Tabs>
            <TabList className="flex justify-center">
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className="border bg-blue-100 hover:bg-blue-200 border-black-200 px-4 py-3 rounded-xl" style={{
              backgroundColor: "#2F4286",
            }}>
                  <h2 className="text-3xl font-medium text-white">
                    {getAllBlog.length}
                  </h2>
                  <p className="text-gray-100 font-bold">Total Blogs</p>
                </div>
              </Tab>
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className="border bg-blue-100 hover:bg-blue-200 border-gray-200 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "#2F4286",
                }}>
                  <h2 className="text-3xl font-medium text-gray-100">
                    {getAllUser.length}
                  </h2>
                  <p className="text-gray-100 font-bold">Total Users</p>
                </div>
              </Tab>

              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className="border bg-blue-100 hover:bg-blue-200 border-gray-200 px-4 py-3 rounded-xl" style={{
              backgroundColor: "#2F4286",
            }}>
                  <h2 className="text-3xl font-medium text-gray-100">
                    {getAllAppointment.length}
                  </h2>
                  <p className="text-gray-100 font-bold">Total Appointment</p>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <BlogDetail />
            </TabPanel>

            <TabPanel>
              <UserDetail />
            </TabPanel>

            <TabPanel>
              <Appoinment />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
