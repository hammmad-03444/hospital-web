'use client'

import React, { useState } from 'react';



// Define departments and their associated doctors
const departments: Record<string, string[]> = {
  Cardiology: ['Dr. Heart', 'Dr. Vascular', 'Dr. Pulse'],
  Neurology: ['Dr. Brain', 'Dr. Nerve', 'Dr. Synapse'],
  Orthopedics: ['Dr. Bone', 'Dr. Joint', 'Dr. Muscle'],
};


const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    doctor: '',
    message: '',
    gender: '',
    phone: '',
    time: '',
    department: '',
  });

  
  

  // State to track available doctors based on selected department
  const [availableDoctors, setAvailableDoctors] = useState<string[]>([]);

  // Update the form data and available doctors on department selection
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If the department is changed, update available doctors
    if (name === 'department') {
      setAvailableDoctors(departments[value] || []);
      setFormData((prev) => ({ ...prev, doctor: '' })); // Reset doctor selection
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Replace with actual form submission logic
  };

  return (
    <div id='Appointment' >
    <div  className=" main flex flex-col lg:flex-row bg-blue-100 min-h-screen justify-center items-center px-40  rounded-lg shadow-lg overflow-hidden">
      {/* Left Side: Text */}
      <div className="w-full  pr-6 flex flex-col justify-center">
        <h2 className=" heading text-3xl  font-extrabold text-blue-900 mb-4">Book an Appointment</h2>
        <p className= "text-gray-700 text-xl paragraph  mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
          Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
        </p>
      </div>

      {/* Right Side: Form */}
      <form className=" form w-full  bg-blue-900 p-6 rounded-lg " onSubmit={handleSubmit}>
        {/* Row 1: Name and Gender */}
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-1/2 p-3 rounded border border-gray-300 text-gray-800"
            value={formData.name}
            onChange={handleChange}
          />
          <select
            name="gender"
            className="w-1/2 p-3 rounded border border-gray-300 text-gray-800"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Row 2: Email and Phone */}
        <div className="flex gap-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-1/2 p-3 rounded border border-gray-300 text-gray-800"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-1/2 p-3 rounded border border-gray-300 text-gray-800"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Row 3: Date and Time */}
        <div className="flex gap-4 mb-4">
          <input
            type="date"
            name="date"
            className="w-1/2 p-3 rounded border border-gray-300 text-gray-800"
            value={formData.date}
            onChange={handleChange}
          />
          <select
            name="time"
            className="w-1/2 p-3 rounded border border-gray-300 text-gray-800"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        {/* Row 4: Doctor and Department */}
        <div className="flex gap-4 mb-4">
          <select
            name="department"
            className="w-1/2 p-3 rounded border border-gray-300 text-gray-800"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Department</option>
            {Object.keys(departments).map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <select
            name="doctor"
            className="w-1/2 p-3 rounded border border-gray-300 text-gray-800"
            value={formData.doctor}
            onChange={handleChange}
          >
            <option value="">Doctor</option>
            {availableDoctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>
        </div>

        {/* Row 5: Message */}
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-3 mb-4 rounded border border-gray-300 text-gray-800"
          rows={5}
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-1/2 ml-[25%] py-3 font-bold text-blue-900 bg-blue-200 rounded-full hover:bg-blue-300"
        >
          SUBMIT
        </button>
      </form>
    </div>
    </div>
  );
};

export default AppointmentForm;
