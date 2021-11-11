import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

import initializetion from "../Pages/Login/Firebase/firebase.init"

initializetion()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const registerUser = (email, password, name, history) => {
        setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, 'POST')
                setAuthError('')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/')
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsloading(false));
    }

    const singInWithGoogle = (location, history) => {
        setIsloading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')
                const destination = location?.state?.from || '/'
                history.replace(destination)
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsloading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsloading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unsubscribe
    }, [])

    const logOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {

            }).catch((error) => {

            })
            .finally(() => setIsloading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        singInWithGoogle
    }
}

export default useFirebase