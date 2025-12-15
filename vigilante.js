import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const confirmacoesRef = collection(window.db, "confirmacoes");

function onScanSuccess(decodedText) {
  const nome = document.getElementById("nomeVigilante").value;
  if (!nome) {
    alert("Informe seu nome antes");
    return;
  }

  addDoc(confirmacoesRef, {
    vigilante: nome,
    escolaId: decodedText,
    data: new Date()
  });

  alert("Presença confirmada!");
}

const html5QrCode = new Html5Qrcode("reader");

html5QrCode.start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 250 },
  onScanSuccess
);