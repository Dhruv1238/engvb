// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5NcYmFcsnT0g-tHMqFwC6IANgjLQ0tFo",
    authDomain: "engvbtest.firebaseapp.com",
    projectId: "engvbtest",
    storageBucket: "engvbtest.appspot.com",
    messagingSenderId: "484580812355",
    appId: "1:484580812355:web:2e4a45ae9878ca97a3d6f6",
    measurementId: "G-GNEMNC414L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

const storageRef = ref(storage, 'gs://engvbtest.appspot.com/MEP-Design.pdf');

getDownloadURL(storageRef)
    .then((url) => {
        // `url` is the download URL for 'gs://engvbtest.appspot.com/MEP-Design.pdf'
        console.log(url);
    })
    .catch((error) => {
        // Handle any errors
        console.error(error);
    });

