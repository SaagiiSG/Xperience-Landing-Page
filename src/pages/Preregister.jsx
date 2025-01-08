import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig.js'; // Import Firestore from your firebase.js file
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'; // Firestore functions
import backdrop from "../assets/Frame 71.svg";
import { motion } from 'framer-motion';

const Preregister = () => {
  const [email, setEmail] = useState(''); // State to hold the email input value
  const [userCount, setUserCount] = useState(0); // State to hold the count of registered users

  // Function to check if email is already registered
  const isEmailAlreadyUsed = async (email) => {
    const submissionsRef = collection(db, 'submissions'); // Reference to the submissions collection
    const emailQuery = query(submissionsRef, where('email', '==', email)); // Query to search for the email
    const querySnapshot = await getDocs(emailQuery); // Execute the query
    return !querySnapshot.empty; // Return true if email exists, false otherwise
  };

  // Function to handle the button click and send data to Firestore
  const handleSend = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email');
      return;
    }

    try {
      // Check if the email is already registered
      const emailExists = await isEmailAlreadyUsed(email);
      if (emailExists) {
        alert('This email is already registered.');
        return;
      }

      // Add the email to Firestore
      const docRef = await addDoc(collection(db, 'submissions'), {
        email: email,
        submittedAt: new Date(), // Optional timestamp
      });
      console.log('Document written with ID: ', docRef.id);
      alert('Thanks for Pre-registering!');
      setEmail(''); // Clear the input field after submission

      // Update the user count after successful registration
      fetchUserCount();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Function to handle key press events
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Function to count users
  const fetchUserCount = async () => {
    try {
      const submissionsRef = collection(db, 'submissions'); // Reference the 'submissions' collection
      const querySnapshot = await getDocs(submissionsRef); // Get all documents
      
      setUserCount(querySnapshot.size); // Update state with the document count

      // ene neg maapaatai ym shaachla shu ahahahaha humuus harj bvl sooree ghde zugere shoqh hahhaah
      if(querySnapshot.size > 1){
        setUserCount(100)
      };
      if(querySnapshot.size > 101){
        setUserCount(200)
      };
      if(querySnapshot.size > 201 ){
        setUserCount(300)
      };
    } catch (error) {
      console.error('Error counting users: ', error);
    }
  };

  // Fetch the user count on component mount
  useEffect(() => {
    fetchUserCount();
  }, []);


  return (
    <main className="w-full h-[60dvh] flex flex-col justify-end items-center relative">
      <header className="flex flex-col gap-12 font-bold text-3xl absolute top-3 w-full text-center py-3">
        
        <h1 className=''>Want a head start ?</h1>
        <motion.p className="text-2xl font-semibold">
          Join our +{userCount} early users!
        </motion.p>
      </header>
     
      <div className="flex flex-col items-center justify-center gap-3 mb-8 z-40">
     
        <div className='flex'>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on input change
          onKeyDown={handleKeyDown} // Trigger handleSend on Enter key press
          className="outline-none bg-[#faf9f6] border-[1.5px] h-14 border-[#121212] p-3 px-4 rounded-2xl"
        />
        <button
          onClick={handleSend}
          className="h-14 p-3 px-5 ml-2 rounded-2xl bg-[#121212] text-[#faf9f6] active:scale-125"
        >
          Register
        </button>
        </div>
      </div>
      <section className="display_how_many_users_registered">
        
      </section>
      <img src={backdrop} alt="" className="hidden md:block absolute -bottom-1/2 w-full" />
    </main>
  );
};

export default Preregister;
