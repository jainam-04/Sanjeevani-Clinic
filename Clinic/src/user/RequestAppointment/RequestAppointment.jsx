import React, { useRef, useState } from 'react';
import { toast, Toaster } from "react-hot-toast";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import emailjs from "@emailjs/browser";

// import { firebase } from 'firebase/app';
function RequestAppointment() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_4x4aaka", // Service ID
      "template_ihkwtdf", // Template ID
      formRef.current, // The form reference
      "andz4rLZhFHfCNrr5" // Public key (API key)
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.status, result.text);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );

    try {
      const appointmentData = {
        ...formData,
        createdAt: Timestamp.now()
      };

      // Add the appointment data to Firestore under the 'appointments' collection
      const appointmentRef = collection(fireDB, "appointments");
      await addDoc(appointmentRef, appointmentData);

      // Reset the form data after successful submission
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });

      // Show a success toast
      toast.success("Appointment request submitted successfully!");
    } catch (error) {
      console.error("Error submitting appointment request:", error);
      // Show an error toast
      toast.error(
        "An error occurred while submitting your appointment request. Please try again later."
      );
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-blue-100 mt-16 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Request Appointment</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-800">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="preferredDate" className="block text-gray-800">Preferred Date</label>
          <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="preferredTime" className="block text-gray-800">Preferred Time</label>
          <input type="time" id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-800">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 resize-none"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default RequestAppointment;
