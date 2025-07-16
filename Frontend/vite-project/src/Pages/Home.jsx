// import React, { useState } from 'react'
// import "../index.css"
// function Home() {
//     const [form,setForm]=useState({
//         Name:"",
//         email:"",
//         phone:"",
//         date:"",
//         adhar:"",
//          guardianDetails:"",
//          guardianPhone:"",
//          localaddress:"",
//          permanentaddress:"",
//          qualification:"",  
//          year:'',    
//          university:"",
//          designation:"",
//          Company:"" ,
//     })
//   const [educational,setEducational]=useState(false)

//     function handelForm(e){
//           const {name,value}= e.target
//           setForm(prev=>({...prev,[name]:value}))
//     }
//     function handelSumbit(e){
//       e.preventDefault()
//         console.log(form)
//     }
//     function toggle(e){
//      setEducational(e.target.id)
//     }
//   return (
//     <div>
//          <form action="" onSubmit={handelSumbit}>
//                     <div>
//                         <label htmlFor="Name" >Name</label>
//                         <input type="text" placeholder='Enter Your Name' id='Name'   name='Name' required  onChange={(e)=>handelForm(e)}  value={form.Name}/>

//                          <label htmlFor="email">Email</label>
//                         <input type="email" placeholder='Enter Your Email' id='email'  name='email'  required   onChange={(e)=>handelForm(e)}  value={form.email}/> 


//                          <label htmlFor="phone">Phone</label>
//                         <input type="text" placeholder='Enter Your Phone' id='phone'  name='phone'  required  onChange={(e)=>handelForm(e)}  value={form.phone}/>   


//                           <label htmlFor="date">Date-Of-Birth</label>
//                         <input type="date" placeholder='Enter Your Phone' id='date'   name='date' required  onChange={(e)=>handelForm(e)}  value={form.date}/>   

//                        <div>
//                              <input type="radio"  id='male' name='gender' />
//                              <label htmlFor="male">Male</label>


//                              <input type="radio"  id='female'  name='gender'/>
//                              <label htmlFor="female">Female</label>

//                              <input type="radio"  id='other' name='gender'/>
//                              <label htmlFor="other">Other</label>
//                        </div>






//                         {/* <label htmlFor="adhar">Adhar Card</label>
//                         <input type="file" placeholder='Enter Your Phone' id='adhar' name="adhar"  required  onChange={()=>handelForm()}  value={form.adhar}/>    */}
  

//                     </div>


//                      <h4>Parent Details</h4>
//                     <div>
//                          <label htmlFor="guardianDetails">Parent / Guardian Name</label>
//                          <input type="text"  id="guardianDetails"  placeholder='Parent / Guardian Name' name='guardianDetails'  onChange={(e)=>handelForm(e)}  value={form.guardianDetails}/>

//                          <label htmlFor="guardianPhone">Parent / Guardian Phone</label>
//                          <input type="text"  id='guardianPhone' placeholder='Parent / Guardian Phone'  name='guardianPhone' onChange={(e)=>handelForm(e)}  value={form.guardianPhone}/>


//                     </div>

//                   <h4>Residential Details</h4>
//                   <div>
//                       <label htmlFor="localaddress">Local Address</label>
//                       <textarea name="localaddress" id="localaddress"  cols={70} rows={3} placeholder='Enter Your Local Address(in Jaipur)'  onChange={(e)=>handelForm(e)}  value={form.localaddress}></textarea>

                    
//                       <label htmlFor="permanentaddress">Permanent Address</label>
//                       <textarea name="permanentaddress" id="permanentaddress"  cols={70} rows={3} placeholder='Enter Your Permanent Address(in Jaipur)'  onChange={(e)=>handelForm(e)}  value={form.permanentaddress}></textarea>

//                   </div>
//                   <div>
//                         <h4>Educational Details</h4>
                        
//                         <div>
//                           <label htmlFor="">As You as</label>
//                           <input type="radio" name="student" id="student"  onClick={(e)=>toggle(e)}/>
//                           <label htmlFor="student">Student</label>
//                            <input type="radio" name="student" id="workingprofessional"  onClick={(e)=>toggle(e)}/>
//                           <label htmlFor="workingprofessional">Working Professional</label> 
//                           {
//                             educational=="student" ?<div>
//                           <label htmlFor="qualification">Last Attained Qualification</label>
//                           <input type="text" id='qualification' name='qualification'  placeholder='Enter Your Qualification' onChange={(e)=>handelForm(e)}  value={form.qualification}/>

//                           <label htmlFor="year">Year</label>
//                           <input type="text" id='year' name='year' placeholder='Enter Your Completion Year' onChange={(e)=>handelForm(e)}  value={form.year}/>

//                           <label htmlFor="university">College / University</label>
//                           <input type="text" id='university' name='university' placeholder='College / University' onChange={(e)=>handelForm(e)}  value={form.university}/>

//                          </div>: <div>
//                            <label htmlFor="designation">Designation</label>
//                           <input type="text" id='designation' name='designation' placeholder='Enter Your Designation' onChange={(e)=>handelForm(e)}  value={form.designation}/>

//                             <label htmlFor="company">Company</label>
//                           <input type="text" id='company' name='Company' placeholder='Enter Your Designation' onChange={(e)=>handelForm(e)}  value={form.Company}/>
//                          </div>
//                           }

                         

                         
//                         </div>
//                   </div>
//                   <div>
//                      <h4>Course Details</h4>
//                      <div>
//                            <label htmlFor="course">Course</label>
//                            <select name="course" id="course"   onChange={(e)=>handelForm(e)}  value={form.course} >
//                            <option value="">Select Course</option>
//                            <option value="Android Devlopment">Android Devlopment</option>
//                            <option value="Software Development">Software Development</option>
//                            <option value="Frontend Development">Frontend Development</option>
//                            <option value="Backend Development">Backend Development</option>
//                            <option value="Full Stack Development">Full Stack Development</option>
//                            <option value="UI/Ux Development">UI/Ux Development</option>
//                            <option value="PHP">PHP</option>
//                            <option value="Python">Python</option>
//                            <option value="React">React</option>
//                            <option value="web Design">web Design</option>
//                            <option value="Photoshop">Photoshop</option>
//                            <option value="Node Js">Node Js</option>
//                            <option value="Digital Marketing">Digital Marketing</option>
//                            <option value="Core Java">Core Java</option>
                            
//                             </select>  


//                             <label htmlFor="">How did you come to know about us?</label>  
//                             <input type="radio" id='google' name='suggestion'/> 
//                             <label htmlFor="google">Google</label>

//                             <input type="radio" id='linkdin' name='suggestion'/> 
//                             <label htmlFor="linkdin">Linkdin</label>

//                              <input type="radio" id="instagram" name='suggestion'/> 
//                             <label htmlFor="instagram">Instagram</label>    


//                              <input type="radio" id='collegetpo' name='suggestion'/> 
//                             <label htmlFor="collegetpo">College Tpo</label> 

//                              <input type="radio" id='friend' name='suggestion'/> 
//                             <label htmlFor="friend">Friend</label> 
//                      </div>

//                   </div>

                    
            
//              <button type='Sumbit'>sumbit</button>
//         </form> 
//     </div>
//   )
// }

// export default Home



import React, { useState } from 'react';
import "../index.css";
import { instance } from '../axios';

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

  const [educational, setEducational] = useState("");

  function handelForm(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

 async function handelSumbit(e) {
    e.preventDefault();
    console.log(form)
     
         let res= await instance.post('/form/add' , form)
         console.log(res)
      }

  function toggle(e) {
    setEducational(e.target.id);
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <form onSubmit={handelSumbit} className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="Name" className="block mb-1 font-medium">Name</label>
            <input type="text" name="Name" id="Name" required value={form.Name} onChange={handelForm} className="w-full p-2 border rounded" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input type="email" name="email" id="email" required value={form.email} onChange={handelForm} className="w-full p-2 border rounded" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
            <input type="text" name="phone" id="phone" required value={form.phone} onChange={handelForm} className="w-full p-2 border rounded" placeholder="Enter your phone" />
          </div>
          <div>
            <label htmlFor="date" className="block mb-1 font-medium">Date of Birth</label>
            <input type="date" name="date" id="date" required value={form.date} onChange={handelForm} className="w-full p-2 border rounded" />
          </div>
        </div>

        <div className="mt-4">
          <p className="font-medium mb-2">Gender</p>
          <div className="flex gap-4">
            <label><input type="radio" name="gender" id="male" value="male" onChange={handelForm}/> Male</label>
            <label><input type="radio" name="gender" id="female" value="female" onChange={handelForm}/> Female</label>
            <label><input type="radio" name="gender" id="other" value="other" onChange={handelForm}/> Other</label>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">Parent Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="guardianDetails" className="block mb-1 font-medium">Parent / Guardian Name</label>
            <input type="text" name="guardianDetails" id="guardianDetails" value={form.guardianDetails} onChange={handelForm} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="guardianPhone" className="block mb-1 font-medium">Parent / Guardian Phone</label>
            <input type="text" name="guardianPhone" id="guardianPhone" value={form.guardianPhone} onChange={handelForm} className="w-full p-2 border rounded" />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">Residential Details</h2>
        <div>
          <label htmlFor="localaddress" className="block mb-1 font-medium">Local Address</label>
          <textarea name="localaddress" id="localaddress" value={form.localaddress} onChange={handelForm} className="w-full p-2 border rounded" rows={3}></textarea>
        </div>
        <div>
          <label htmlFor="permanentaddress" className="block mb-1 font-medium">Permanent Address</label>
          <textarea name="permanentaddress" id="permanentaddress" value={form.permanentaddress} onChange={handelForm} className="w-full p-2 border rounded" rows={3}></textarea>
        </div>

        <h2 className="text-xl font-semibold mt-6">Educational Details</h2>
        <div className="flex gap-6">
          <label><input type="radio" name="student" id="student" onClick={toggle} /> Student</label>
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

        <h2 className="text-xl font-semibold mt-6">Course Details</h2>
        <div>
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
