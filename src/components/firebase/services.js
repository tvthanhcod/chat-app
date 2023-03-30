import { collection, addDoc, query, onSnapshot, where, orderBy } from 'firebase/firestore'

import { useEffect, useState } from 'react'

import { db } from './config'


export const addCollection = (collectionName, data) => {
    
    const collectionDB = collection(db, collectionName)

    addDoc(collectionDB, {
        ...data
    })

}

export const useFireStore = (collectionName, condition ) => {
    const [documents , setDocuments] = useState([])
    useEffect(() => {
        const ConllectionRef = collection(db, collectionName)
        if(condition) {
            if(!condition.filedName || !condition.value )
            return
        }
        const q = query(ConllectionRef,  where(condition.filedName, condition.operator, condition.value))
        const unSubcribe = onSnapshot(q , snapshot => {
            const arrayDocs = []
        snapshot.forEach(doc => {
           arrayDocs.push({...doc.data(), id: doc.id})
        })
        setDocuments(arrayDocs)
    })
    return () => {
        unSubcribe()
    }
    }, [collectionName, condition])
    
    return documents
}
export const useFireStoreMessage = (collectionName, condition ) => {
    const [documents , setDocuments] = useState([])
    useEffect(() => {
        const ConllectionRef = collection(db, collectionName)
        if(condition) {
            if(!condition.filedName || !condition.value )
            return
        }
        const q = query(ConllectionRef, where(condition.filedName, condition.operator, condition.value))
        const unSubcribe = onSnapshot(q , snapshot => {
            const arrayDocs = []
        snapshot.forEach(doc => {
           arrayDocs.push({...doc.data(), id: doc.id})
        })
        setDocuments(arrayDocs)
    })
    return () => {
        unSubcribe()
    }
    }, [collectionName, condition])
    
    return documents
}