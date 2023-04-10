import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC9N0ok2PC9pn5Fp4sCR37Fn-N07s0HnUs",
    authDomain: "ccl-project-c0c47.firebaseapp.com",
    projectId: "ccl-project-c0c47",
    storageBucket: "ccl-project-c0c47.appspot.com",
    messagingSenderId: "507098156849",
    appId: "1:507098156849:web:978d87553660e6275b2a10"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);