import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDz9h2rCWvPyzvYB9pVU_E1ZahKH0OXGn4",
  authDomain: "coinnect-b493d.firebaseapp.com",
  projectId: "coinnect-b493d",
  storageBucket: "coinnect-b493d.appspot.com",
  messagingSenderId: "1000982944354",
  appId: "1:1000982944354:web:752efaa2c956d5dbda8f3b",
  measurementId: "G-K0L92CPFGD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.registerUser = async function () {
  const email = prompt("Введите email:");
  const password = prompt("Введите пароль (не меньше 6 символов):");
  if (!email || !password) return alert("Email и пароль обязательны.");

  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    alert("Регистрация успешна! UID: " + user.uid);
  } catch (error) {
    alert("Ошибка: " + error.message);
  }
};
