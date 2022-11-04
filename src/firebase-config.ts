// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAooA94FDc1_SXCGsu9RlADuSow4mCqnVs",
  authDomain: "algo-post.firebaseapp.com",
  projectId: "algo-post",
  storageBucket: "algo-post.appspot.com",
  messagingSenderId: "1052327389155",
  appId: "1:1052327389155:web:cbea40ea28ac2bb07122d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
