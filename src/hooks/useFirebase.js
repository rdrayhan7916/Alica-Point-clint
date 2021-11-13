import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

import initializetion from "../Pages/Login/Firebase/firebase.init"

initializetion()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
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
            .finally(() => setIsLoading(false));
    }

    const singInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')
                const destination = location?.state?.from || '/'
                history.replace(destination)
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [])

    useEffect(() => {
        fetch(`https://guarded-temple-07884.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {

            }).catch((error) => {

            })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://guarded-temple-07884.herokuapp.com/users', {
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
        admin,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        singInWithGoogle
    }
}

export default useFirebase