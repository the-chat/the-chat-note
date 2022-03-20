import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { FIREBASE_PUBLIC_CONFIG } from "@the-chat/config"

const app = initializeApp(FIREBASE_PUBLIC_CONFIG)

const auth = getAuth(app)
auth.useDeviceLanguage()
// learn
auth.onAuthStateChanged(() => {})

const db = getFirestore(app)

const storage = getStorage(app)

export { auth, db, storage }
