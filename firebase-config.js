// Firebase 配置檔案
// 請將以下配置替換為你的 Firebase 專案配置

const firebaseConfig = {
  apiKey: "AIzaSyBHuMGYdsYSdtoysNaSy0uiygtouE-VtOI",
  authDomain: "koe-button-1001.firebaseapp.com",
  projectId: "koe-button-1001",
  storageBucket: "koe-button-1001.firebasestorage.app",
  messagingSenderId: "824249221733",
  appId: "1:824249221733:web:f916dc4ab38c6198b67c8c"
};

// 初始化 Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

// 導出供其他檔案使用
window.firebase = {
  db,
  storage,
  auth,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};