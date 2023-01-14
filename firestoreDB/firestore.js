import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics} from "firebase/analytics";
import analytics from '@react-native-firebase/analytics';
// import { firebase } from "@react-native-firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};


// if(!firebase.app.length) {
//   firebase.initializeApp(firebaseConfig)
// }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const firebaseAnalytics = getAnalytics(app);

export { firebaseAnalytics, db };
export default app;