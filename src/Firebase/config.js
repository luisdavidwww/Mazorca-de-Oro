// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Umkmuq44srf2trigPszNcTsecwB9jFg",
  authDomain: "react-firebase-b816f.firebaseapp.com",
  projectId: "react-firebase-b816f",
  storageBucket: "react-firebase-b816f.appspot.com",
  messagingSenderId: "859861589126",
  appId: "1:859861589126:web:1c4a6e0b48b1f512814507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

//metodo para subir
export function uploadFile(file) {
    const storageRef = ref(storage, 'some-child');
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log(snapshot);
      });
}