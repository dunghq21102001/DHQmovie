import { createContext, useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { addDoc, setDoc, doc, collection } from 'firebase/firestore'
const AuthContext = createContext()
export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})

    function signUp(email, pass) {
        createUserWithEmailAndPassword(auth, email, pass)
        setDoc(doc(db, 'users', email), {
            savedShows: []
        })
    }


    function logIn(email, pass) {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}