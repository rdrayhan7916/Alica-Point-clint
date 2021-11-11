import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializetion = () => {
    initializeApp(firebaseConfig)
}
export default initializetion