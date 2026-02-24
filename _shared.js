// ─── Firebase Config ───────────────────────────────────────────────────────
import { initializeApp }        from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update }
                                 from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBMmBh6c8N9gMF7Kei3sWitv2mOPxOzZYK",
  authDomain:        "catur-multiplayer-f6e88.firebaseapp.com",
  databaseURL:       "https://catur-multiplayer-f6e88-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "catur-multiplayer-f6e88",
  storageBucket:     "catur-multiplayer-f6e88.appspot.com",
  messagingSenderId: "598957347034",
  appId:             "1:598957347034:web:10d7ffe74740242b0095e3",
  measurementId:     "G-QVC6CMN2WM"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, push, onValue, remove, update };

// ─── Toast ─────────────────────────────────────────────────────────────────
export function showToast(msg, type = 'success') {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = `toast show ${type}`;
  clearTimeout(window._tt);
  window._tt = setTimeout(() => t.className='toast', 3200);
}

// ─── Hamburger nav ─────────────────────────────────────────────────────────
export function initNav() {
  const btn = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }
  // mark active
  const path = location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const ap = new URL(a.href).pathname.replace(/\/$/, '') || '/';
    if (ap === path) a.classList.add('active');
  });
}

export const ADMIN_PASS = "admin7a2025"; // ← ganti sesuai keinginan
