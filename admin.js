import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const escolasRef = collection(window.db, "escolas");

window.salvarEscola = async function () {
  const nome = document.getElementById("nomeEscola").value;
  if (!nome) return alert("Informe o nome da escola");

  await addDoc(escolasRef, {
    nome: nome,
    criadoEm: new Date()
  });

  document.getElementById("nomeEscola").value = "";
  carregarEscolas();
};

async function carregarEscolas() {
  const lista = document.getElementById("listaEscolas");
  lista.innerHTML = "";

  const snapshot = await getDocs(escolasRef);

  snapshot.forEach(doc => {
    const data = doc.data();

    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${data.nome}</strong>
      <div id="qr-${doc.id}"></div>
    `;

    lista.appendChild(div);

    new QRCode(document.getElementById(`qr-${doc.id}`), {
      text: doc.id,
      width: 128,
      height: 128
    });
  });
}

carregarEscolas();