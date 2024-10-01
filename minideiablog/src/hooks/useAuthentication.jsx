import { db } from './../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIsCancelled() {
        if (cancelled) {
            return
        }
    }

    async function createUser(data) {
        checkIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)
            return user
        } catch (error) {
            console.error(error.message),
                console.table(typeof error.message)

            let systemErrorMessage

            if (error.message.includes('Password')) {
                systemErrorMessage = 'A senha precisa conter ao menos 6 caracteres.'
            } else if (error.message.includes('email-already')) {
                systemErrorMessage = 'Este e-mail já existe em nossos sistemas'
            } else {
                systemErrorMessage = 'Tente mais tarde, nosso sistema está indisponível.'
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const login = async (data) => {
        checkIsCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            setLoading(false)
        } catch (error) {
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if (error.message.includes('invalid-login-credentials')) {
                systemErrorMessage = 'Este usuário não existe em nosso sistemas.'
            } else if (error.message.includes('wrong-password')) {
                systemErrorMessage = 'Há algum erro com suas informações'
            } else {
                systemErrorMessage = 'Tente mais tarde, nosso sistema está indisponível.'
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const logout = () =>{
        checkIsCancelled()
        signOut(auth)
    }

    useEffect(() =>{
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        login,
        logout
    }
}