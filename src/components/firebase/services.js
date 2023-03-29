import { collection, addDoc } from 'firebase/firestore'

import { db } from './config'


export const addCollection = (collectionName, data) => {
    
    const collectionDB = collection(db, collectionName)

    addDoc(collectionDB, {
        ...data
    })

}