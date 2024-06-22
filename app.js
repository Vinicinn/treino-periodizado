import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgEAeATp9zhWUff-rK2LXDWjmo4gr6fPU",
  authDomain: "fir-back-test.firebaseapp.com",
  databaseURL: "https://fir-back-test-default-rtdb.firebaseio.com",
  projectId: "fir-back-test",
  storageBucket: "fir-back-test.appspot.com",
  messagingSenderId: "75117160680",
  appId: "1:75117160680:web:d399831e99225c79e7415d",
  measurementId: "G-QRHE0629LX",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const databaseRef = ref(database);

get(child(databaseRef, `treinos`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

