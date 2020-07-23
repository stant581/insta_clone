import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBNGUDnxiJQYUoMbDbb7beFwTOm-V_OS2o",
        authDomain: "insta-clone-react-3e031.firebaseapp.com",
        databaseURL: "https://insta-clone-react-3e031.firebaseio.com",
        projectId: "insta-clone-react-3e031",
        storageBucket: "insta-clone-react-3e031.appspot.com",
        messagingSenderId: "819965941438",
        appId: "1:819965941438:web:dc507cea4d5b0fa40770ef",
        measurementId: "G-D4D2NJZ8G9"
});
const db = firebaseApp.fireStore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}