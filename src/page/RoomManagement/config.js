
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyDS5NQ8Oy2bjiNZCELD_7Y4HGrJ290muJM",
//   authDomain: "senior1pjweb.firebaseapp.com",
//   projectId: "senior1pjweb",
//   storageBucket: "senior1pjweb.appspot.com",
//   messagingSenderId: "729115434541",
//   appId: "1:729115434541:web:5448e54eb9552a387d62a4",
//   measurementId: "G-99SYFWFQPP"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;

// import firebase from 'firebase/compat/app';
// import "firebase/storage";

// const app = {
//   apiKey: "AIzaSyDS5NQ8Oy2bjiNZCELD_7Y4HGrJ290muJM",
//   authDomain: "senior1pjweb.firebaseapp.com",
//   projectId: "senior1pjweb",
//   storageBucket: "senior1pjweb.appspot.com",
//   messagingSenderId: "729115434541",
//   appId: "1:729115434541:web:5448e54eb9552a387d62a4",
//   measurementId: "G-99SYFWFQPP"
// };

// export const storage = firebase.storage(); 

// export default app;
// import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import "firebase/storage";

// import firebase from 'firebase/compat/app'
// import 'firebase/storage'; 

const app = firebase.initializeApp({
  apiKey: "AIzaSyDS5NQ8Oy2bjiNZCELD_7Y4HGrJ290muJM",
  authDomain: "senior1pjweb.firebaseapp.com",
  projectId: "senior1pjweb",
  storageBucket: "senior1pjweb.appspot.com",
  messagingSenderId: "729115434541",
  appId: "1:729115434541:web:5448e54eb9552a387d62a4",
  measurementId: "G-99SYFWFQPP"
});


// Get a reference to the storage service, export it for use
export const storage = firebase.storage();
export default app;
