// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPNuDUFreX11GZuLZm7h5JxCzdOmZ5Xes",
  authDomain: "micochera-58631.firebaseapp.com",
  projectId: "micochera-58631",
  storageBucket: "micochera-58631.appspot.com",
  messagingSenderId: "1005581205581",
  appId: "1:1005581205581:web:315b134dd9e423f7641c04",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

//Cargamos los vehículos por hora
export async function createNewHourVehicle(vehicleData) {
  const collectionRef = collection(firestore, "porhora");
  let response = await addDoc(collectionRef, vehicleData);
  return response.id;
}

export default firestore;
