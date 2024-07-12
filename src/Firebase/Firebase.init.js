// Import the functions you need from the SDKs you need
import { initializeApp,getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-QdU-N7TMtTP_SV3TLlCPYKqAr9swTyQ",
  authDomain: "dragon-context-api.firebaseapp.com",
  projectId: "dragon-context-api",
  storageBucket: "dragon-context-api.appspot.com",
  messagingSenderId: "381251110006",
  appId: "1:381251110006:web:824f0b19181fefd5cd8b57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth