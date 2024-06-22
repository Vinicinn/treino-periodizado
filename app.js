import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

var app, database, databaseRef, banco;

(function () {
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

  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
  databaseRef = ref(database);

  get(child(databaseRef, `treinos/hoje`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        switch (snapshot.val()) {
          case 0:
            document.getElementById("treinoDia").innerHTML = "Peito/Triceps/Ombro(EMPURRAR)"
            break;
          case 1:
            console.log("Puxar");
            break;
          case 2:
            console.log("Pernas");
            break;
        }
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
})();
