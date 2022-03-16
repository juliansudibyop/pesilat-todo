import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_G8cZN6wVBVNTmISKAex5AmFXIVRfM-g",
    authDomain: "silat-project.firebaseapp.com",
    projectId: "silat-project",
    storageBucket: "silat-project.appspot.com",
    messagingSenderId: "928058052382",
    appId: "1:928058052382:web:4193e2e960157cc12f830f",
    measurementId: "G-G494K4B8N5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
