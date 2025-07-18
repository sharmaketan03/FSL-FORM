import React, { useState } from 'react';
import "../index.css";
import { instance } from '../axios.js';

function Home() {
  const [form, setForm] = useState({
    Name: "",
    email: "",
    phone: "",
    date: "",
    imageFront: null,
    imageBack: null,
    gender: "",
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
  

  const [formdisabled, setDisabled] = useState(false);
  const [educational, setEducational] = useState("student");

  function handleForm(e) {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  }
  // console.log(form.imageFront)
  function toggle(e) {
    setEducational(e.target.id);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setDisabled(false);

    let formData = new FormData();
    if(form){
      for (let key in form) {
      formData.append(key, form[key]);
      
    }
    
   console.log(formData,form)
    
  let res=  await instance.post('/api/form/add', formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});
        
      console.log(res.data);
     
    }
    
   
  }

  return (
    <div className="w-[90%] mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <form onSubmit={handleSubmit} className="space-y-6" method="post" encType="multipart/form-data">
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="Name" placeholder="Name" value={form.Name} onChange={handleForm} className="p-2 border rounded" required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleForm} className="p-2 border rounded" required />
            <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleForm} className="p-2 border rounded" required />
            <input type="date" name="date" value={form.date} onChange={handleForm} className="p-2 border rounded" required />
          </div>

          <div className="mt-4">
            <label>Gender:</label>
            <div className="flex gap-4">
              <label><input type="radio" name="gender" value="male" onChange={handleForm} /> Male</label>
              <label><input type="radio" name="gender" value="female" onChange={handleForm} /> Female</label>
              <label><input type="radio" name="gender" value="other" onChange={handleForm} /> Other</label>
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-medium">Upload Aadhaar Card:</label>
            <input type="file" name="imageFront" onChange={handleForm} className="mt-1" accept="image/*" required />
           
            <input type="file" name="imageBack" onChange={handleForm} className="mt-1" accept="image/*" required />
          </div>
        </div>

        {/* Guardian Details */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Guardian Details</h2>
          <input type="text" name="guardianDetails" placeholder="Guardian Name" value={form.guardianDetails} onChange={handleForm} className="p-2 border rounded w-full mb-3" required />
          <input type="text" name="guardianPhone" placeholder="Guardian Phone" value={form.guardianPhone} onChange={handleForm} className="p-2 border rounded w-full" required />
        </div>

        {/* Address */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <textarea name="localaddress" placeholder="Local Address" value={form.localaddress} onChange={handleForm} className="w-full p-2 border rounded mb-3" rows={2} required></textarea>
          <textarea name="permanentaddress" placeholder="Permanent Address" value={form.permanentaddress} onChange={handleForm} className="w-full p-2 border rounded" rows={2} required></textarea>
        </div>

        {/* Education / Work */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Education / Work</h2>
          <div className="flex gap-4 mb-4">
            <label><input type="radio" name="student" id="student" onClick={toggle} checked={educational === "student"} /> Student</label>
            <label><input type="radio" name="student" id="workingprofessional" onClick={toggle} checked={educational === "workingprofessional"} /> Working Professional</label>
          </div>

          {educational === "student" ? (
            <>
              <input type="text" name="qualification" placeholder="Qualification" value={form.qualification} onChange={handleForm} className="p-2 border rounded w-full mb-3" />
              <input type="text" name="year" placeholder="Passing Year" value={form.year} onChange={handleForm} className="p-2 border rounded w-full mb-3" />
              <input type="text" name="university" placeholder="University" value={form.university} onChange={handleForm} className="p-2 border rounded w-full" />
            </>
          ) : (
            <>
              <input type="text" name="designation" placeholder="Designation" value={form.designation} onChange={handleForm} className="p-2 border rounded w-full mb-3" />
              <input type="text" name="Company" placeholder="Company" value={form.Company} onChange={handleForm} className="p-2 border rounded w-full" />
            </>
          )}
        </div>

        {/* Course Selection */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Course</h2>
          <select name="course" value={form.course} onChange={handleForm} className="w-full p-2 border rounded" required>
            <option value="">-- Select Course --</option>
            <option value="Android Development">Android Development</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Node Js">Node Js</option>
            <option value="React">React</option>
            <option value="PHP">PHP</option>
            <option value="Python">Python</option>
            <option value="UI/UX">UI/UX</option>
          </select>
        </div>

        <button type="submit"  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mt-6">Submit</button>
      </form>
    </div>
  );
}

export default Home;
