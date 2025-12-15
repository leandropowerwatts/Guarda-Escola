<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDhjOZi--n9-5CE_O1b_5_V9ANMvWckWqc",
    authDomain: "guarda-escolar.firebaseapp.com",
    projectId: "guarda-escolar",
    storageBucket: "guarda-escolar.firebasestorage.app",
    messagingSenderId: "894303198086",
    appId: "1:894303198086:web:8b746011262df3265bea07"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  window.db = db;
</script>