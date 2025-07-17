import React, { useState } from 'react';
import "../index.css";
import { instance } from '../axios.js';

function Home() {
  const [form, setForm] = useState({
    Name: "",
    email: "",
    phone: "",
    date: "",
    adhar: "",
    guardianDetails: "",
    guardianPhone: "",
    localaddress: "",
    permanentaddress: "",
    qualification: "",
    year: '',
    university: "",
    designation: "",
    Company: "",
    course: ""
  });

  const [educational, setEducational] = useState("student");

  function handelForm(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handelSumbit(e) {
    console.log("first");

    e.preventDefault();
    console.log(form);

    let res = await instance.post('/api/form/add', form);
    console.log(res);
  }

  function toggle(e) {
    setEducational(e.target.id);
  }

  return (
    <div className="w-[90%] mx-auto p-6 bg-white shadow-lg rounded-lg mt-30">
      <form onSubmit={handelSumbit} className="space-y-6">

      
        <div className="bg-gray-50 p-4 rounded-lg border">
  <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <label htmlFor="Name" className="w-32 font-medium">Name</label>
      <input
        type="text"
        name="Name"
        id="Name"
        required
        value={form.Name}
        onChange={handelForm}
        className="flex-1 p-2 border rounded"
        placeholder="Enter your name"
      />
    </div>

    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <label htmlFor="email" className="w-32 font-medium">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        value={form.email}
        onChange={handelForm}
        className="flex-1 p-2 border rounded"
        placeholder="Enter your email"
      />
    </div>

    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <label htmlFor="phone" className="w-32 font-medium">Phone</label>
      <input
        type="text"
        name="phone"
        id="phone"
        required
        value={form.phone}
        onChange={handelForm}
        className="flex-1 p-2 border rounded"
        placeholder="Enter your phone"
      />
    </div>

    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <label htmlFor="date" className="w-32 font-medium">Date of Birth</label>
      <input
        type="date"
        name="date"
        id="date"
        required
        value={form.date}
        onChange={handelForm}
        className="flex-1 p-2 border rounded"
      />
    </div>
  </div>

  <div className="mt-6">
    <p className="font-medium mb-2">Gender</p>
    <div className="flex gap-6">
      <label className="flex items-center gap-1">
        <input type="radio" name="gender" value="male" onChange={handelForm} /> Male
      </label>
      <label className="flex items-center gap-1">
        <input type="radio" name="gender" value="female" onChange={handelForm} /> Female
      </label>
      <label className="flex items-center gap-1">
        <input type="radio" name="gender" value="other" onChange={handelForm} /> Other
      </label>
    </div>
  </div>
</div>


       
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Parent / Guardian Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="guardianDetails" className="block mb-1 font-medium">Guardian Name</label>
              <input type="text" name="guardianDetails" id="guardianDetails" value={form.guardianDetails} onChange={handelForm} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label htmlFor="guardianPhone" className="block mb-1 font-medium">Guardian Phone</label>
              <input type="text" name="guardianPhone" id="guardianPhone" value={form.guardianPhone} onChange={handelForm} className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold">Residential Details</h2>
          <div className="mt-4">
            <label htmlFor="localaddress" className="block mb-1 font-medium">Local Address</label>
            <textarea name="localaddress" id="localaddress" value={form.localaddress} onChange={handelForm} className="w-full p-2 border rounded" rows={3}></textarea>
          </div>
          <div className="mt-4">
            <label htmlFor="permanentaddress" className="block mb-1 font-medium">Permanent Address</label>
            <textarea name="permanentaddress" id="permanentaddress" value={form.permanentaddress} onChange={handelForm} className="w-full p-2 border rounded" rows={3}></textarea>
          </div>
        </div>

   
        <div>
          <h2 className="text-xl font-semibold mt-6">Educational Details</h2>
          <div className="flex gap-6 my-2">
            <label><input type="radio" name="student" id="student" onClick={toggle} checked={educational=="student"}/> Student</label>
            <label><input type="radio" name="student" id="workingprofessional" onClick={toggle} /> Working Professional</label>
          </div>

          {educational === "student" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="qualification" className="block mb-1 font-medium">Last Qualification</label>
                <input type="text" name="qualification" id="qualification" value={form.qualification} onChange={handelForm} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="year" className="block mb-1 font-medium">Completion Year</label>
                <input type="text" name="year" id="year" value={form.year} onChange={handelForm} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="university" className="block mb-1 font-medium">University</label>
                <input type="text" name="university" id="university" value={form.university} onChange={handelForm} className="w-full p-2 border rounded" />
              </div>
            </div>
          ) : educational === "workingprofessional" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="designation" className="block mb-1 font-medium">Designation</label>
                <input type="text" name="designation" id="designation" value={form.designation} onChange={handelForm} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="Company" className="block mb-1 font-medium">Company</label>
                <input type="text" name="Company" id="Company" value={form.Company} onChange={handelForm} className="w-full p-2 border rounded" />
              </div>
            </div>
          ) : null}
        </div>

        {/* Course Details */}
        <div>
          <h2 className="text-xl font-semibold mt-6">Course Details</h2>
          <label htmlFor="course" className="block mb-1 font-medium">Select Course</label>
          <select name="course" id="course" value={form.course} onChange={handelForm} className="w-full p-2 border rounded">
            <option value="">-- Select Course --</option>
            <option value="Android Devlopment">Android Development</option>
            <option value="Software Development">Software Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="UI/Ux Development">UI/Ux Development</option>
            <option value="PHP">PHP</option>
            <option value="Python">Python</option>
            <option value="React">React</option>
            <option value="web Design">Web Design</option>
            <option value="Photoshop">Photoshop</option>
            <option value="Node Js">Node Js</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Core Java">Core Java</option>
          </select>
        </div>

        {/* Source of Information */}
        <div className="mt-4">
          <p className="font-medium mb-2">How did you come to know about us?</p>
          <div className="flex flex-wrap gap-4">
            <label><input type="radio" name="suggestion" id="google" /> Google</label>
            <label><input type="radio" name="suggestion" id="linkdin" /> LinkedIn</label>
            <label><input type="radio" name="suggestion" id="instagram" /> Instagram</label>
            <label><input type="radio" name="suggestion" id="collegetpo" /> College TPO</label>
            <label><input type="radio" name="suggestion" id="friend" /> Friend</label>
          </div>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mt-6">Submit</button>
      </form>
    </div>  
  );
}

export default Home;













