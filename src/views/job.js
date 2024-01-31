import React from "react";
import AdainNavBar from "../components/navbar";
import Footer from "../components/footer";
import {motion} from 'framer-motion';
import { useState } from "react";
import { CounterApp } from "./count";



const Job = ()=>{

    const [jobAvailable, setJobAvailable] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const toggleFormVisibility = ()=>{
        setShowForm(!showForm)
      }
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        resume: null,
        coverLetter: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, resume: file });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission, like sending data to a server
        console.log('Form data submitted:', formData);
      };

    return(
        <div>
            <AdainNavBar/>
            <motion.p
      initial={{x: -1000}}
      animate={{x: 0}}
      transition={{
        duration: "2",
      }}
      class="mt-20 mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Apply For Job.</motion.p>

        <div className="flex justify-center items-center">
        <button onClick={toggleFormVisibility} className="mx-8 bg-adainyellow text-white px-4 py-2 rounded font-popins">
        {showForm ? 'Hide form': 'Show form'}

         </button>




        </div>

        <div className="flex justify-center items-center mt-10">

            {showForm  && (<div></div>) ? (
            
            <div className="bg-adainyellow w-96">
                <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Job Application Form</h2>

      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="position" className="block text-sm font-medium text-gray-600">
          Position
        </label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="resume" className="block text-sm font-medium text-gray-600">
          Resume (PDF only)
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          onChange={handleFileChange}
          className="mt-1 p-2 w-full border rounded-md"
          accept=".pdf"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-600">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md"
          required
        ></textarea>
      </div>

      <div className="flex items-center justify-end">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-adainblack text-adainwhite p-2 rounded-md hover:bg-adainyellow"
        >
          Submit
        </button>
      </div>
    </form>

            </div>) : ""}

        </div>

            <Footer/>
        </div>
    );

}

export default Job;