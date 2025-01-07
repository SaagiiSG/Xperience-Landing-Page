import React, { useState } from 'react';
import { db } from '../firebaseConfig.js'; // Import Firestore from your firebase.js file
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore'; // Firestore functions
import backdrop from "../assets/Frame 71.svg";

const Preregister = () => {
  const [email, setEmail] = useState(''); // State to hold the email input value

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

  return (
    <main className="w-full h-[60dvh] flex flex-col justify-end items-center relative">
      <header className="font-bold text-3xl absolute top-3 w-full text-center py-3">
        Register early to be demo tester
      </header>
      <div className="flex mb-8 z-40">
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
      <img src={backdrop} alt="" className="hidden md:block absolute -bottom-1/2 w-full" />
    </main>
  );
};

export default Preregister;
