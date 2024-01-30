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
                <form action="#" className="space-y-8 m-5 p-4">
          <div>
              <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">FullName</label>
              <input type="text" id="fullname" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="john doe" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>

          <div className="flex justify-center items-center">
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-adainwhite rounded-lg bg-adainyellow sm:w-fit hover:bg-adainblack focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>

          </div>
      </form>

            </div>) : ""}

        </div>

            <Footer/>
        </div>
    );

}

export default Job;