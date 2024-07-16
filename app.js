import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  update,
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

let treinoDia = document.getElementById("treinoDia");
let andamento = document.getElementById("andamento");
let nomeExercicio = document.getElementById("exercicio");
let botaoProximo = document.getElementById("botaoProximo");
let botaoAnterior = document.getElementById("botaoAnterior");
let finalizar = document.getElementById("finalizar");

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const databaseRef = ref(database, "treinos");
const snapshot = await get(databaseRef);
if (snapshot.exists()) {
  var diaAtual = snapshot.val().dia;
  var quantidadeDoDia = snapshot.val()[diaAtual].length;
  var exercicioAtual = snapshot.val().exercicio;

  preencherTela();
} else {
  alert("Erro na leitura do db");
}

function preencherTela() {
  switch (diaAtual) {
    case 0:
      treinoDia.innerHTML = "Peito e Triceps!";
      break;
    case 1:
      treinoDia.innerHTML = "Costas e Biceps!";
      break;
    case 2:
      treinoDia.innerHTML = "Perna e Panturrilha!";
      break;
    case 3:
      treinoDia.innerHTML = "Ombro, Trapezio e Antebraço!";
      break;
  }

  andamento.innerHTML = `${exercicioAtual + 1} / ${quantidadeDoDia}`;

  nomeExercicio.innerHTML = snapshot.val()[diaAtual][exercicioAtual].nome;
}

function proximoExercicio() {
  update(databaseRef, {
    exercicio: exercicioAtual == quantidadeDoDia - 1 ? 0 : exercicioAtual + 1,
  });
  window.location.reload();
}

function anteriorExercicio() {
  update(databaseRef, {
    exercicio: exercicioAtual == 0 ? quantidadeDoDia - 1 : exercicioAtual - 1,
  });
  window.location.reload();
}

function proximoDia() {
  update(databaseRef, {
    dia: diaAtual == 3 ? 0 : diaAtual + 1,
    exercicio: 0,
  });
  window.location.reload();
}

botaoProximo.addEventListener("click", proximoExercicio);
botaoAnterior.addEventListener("click", anteriorExercicio);
finalizar.addEventListener("click", proximoDia);
