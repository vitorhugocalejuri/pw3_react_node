import {db} from '../firebase'
import {
    getAuth,
    createUserWithEmailPassword,
    signWithEmailAndPassword,
    uploadProfile,
    signOut,
}from 'firebase/auth'
import { useState, useEffect } from 'react'