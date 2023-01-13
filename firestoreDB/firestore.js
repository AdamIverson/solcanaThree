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

// const firebaseConfig = {
//   apiKey: "AIzaSyDLm3m3g4v5oJtWWctU0MQnTjuniaNRC6g",
//   authDomain: "solcanathree.firebaseapp.com",
//   databaseURL: "https://solcanathree-default-rtdb.firebaseio.com",
//   projectId: "solcanathree",
//   storageBucket: "solcanathree.appspot.com",
//   messagingSenderId: 483534570383,
//   appId: "1:483534570383:web:6365caaf7a7241275201fa",
//   measurementId: "G-N8NYK35FXQ",
// };

// if(!firebase.app.length) {
//   firebase.initializeApp(firebaseConfig)
// }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const firebaseAnalytics = getAnalytics(app);

export { firebaseAnalytics, db };
export default app;