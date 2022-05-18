import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9_GP2hH8hep8SeejVp5jqER_aJ3vttz8",
  authDomain: "todo-by-shojib.firebaseapp.com",
  projectId: "todo-by-shojib",
  storageBucket: "todo-by-shojib.appspot.com",
  messagingSenderId: "496182973840",
  appId: "1:496182973840:web:cec0d1d0bc528cff924f15",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
