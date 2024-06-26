import { initializeApp } from "firebase/app";

import {
  connectFirestoreEmulator,
  initializeFirestore,
} from "@firebase/firestore";
import {
  connectAuthEmulator,
  indexedDBLocalPersistence,
  initializeAuth,
  browserSessionPersistence,
} from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getStorage, connectStorageEmulator } from "firebase/storage";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const isDev = import.meta.env.MODE !== "production";

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: isDev ? browserSessionPersistence : indexedDBLocalPersistence,
});
export const firestore = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});
export const storage = getStorage(app);

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_FIREBASE_APPCHECKKEY),
  isTokenAutoRefreshEnabled: true,
});

if (isDev) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}
