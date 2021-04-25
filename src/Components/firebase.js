const firebaseConfig = {
    apiKey: "AIzaSyDOA_eus2m2LqvKrGFDVi4LFI49O9SS3lU",
    authDomain: "disneyplushotstar-clone.firebaseapp.com",
    projectId: "disneyplushotstar-clone",
    storageBucket: "disneyplushotstar-clone.appspot.com",
    messagingSenderId: "634583630922",
    appId: "1:634583630922:web:313cfbbb08ec607dd752b3",
    measurementId: "G-HGWJQB2MQE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firebase();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  const {auth, provider, storage};
  export default db;