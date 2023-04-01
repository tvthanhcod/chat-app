
import { collection, addDoc, query, onSnapshot, where, orderBy, limit, getDocs } from 'firebase/firestore'

import { useEffect, useState } from 'react'

import { db } from './config'


export const addCollection = (collectionName, data) => {
    
    const collectionDB = collection(db, collectionName)

    addDoc(collectionDB, {
        ...data
    })

}

export const readDocs = async(collectionName, condition) => {
    const { filedName, operator, value} = condition
    const docRef = collection(db, collectionName)
    if(condition) {
        if(!condition.filedName || !condition.value )
        return
    }
    const q = query(docRef, where(filedName, operator, value), limit(5))

    const docsData = await getDocs(q)
    const arrayUser = docsData.docs.map((doc) => ({...doc.data()}) )
    return arrayUser
}

export const useFireStore = (collectionName, condition ) => {
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
export const useFireStoreMessage = (collectionName, condition ) => {
    const [documents , setDocuments] = useState([])
    useEffect(() => {
        const ConllectionRef = collection(db, collectionName)
        if(condition) {
            if(!condition.filedName || !condition.value )
            return
        }
        const q = query(ConllectionRef, orderBy("createAt"), where(condition.filedName, condition.operator, condition.value))
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

export const generateKeywords = (displayName) => {
    // liet ke tat cac hoan vi. vd: name = ["David", "Van", "Teo"]
    // => ["David", "Van", "Teo"], ["David", "Teo", "Van"], ["Teo", "David", "Van"],...
    const name = displayName.split(' ').filter((word) => word);
  
    const length = name.length;
    let flagArray = [];
    let result = [];
    let stringArray = [];
  
    /**
     * khoi tao mang flag false
     * dung de danh dau xem gia tri
     * tai vi tri nay da duoc su dung
     * hay chua
     **/
    for (let i = 0; i < length; i++) {
      flagArray[i] = false;
    }
  
    const createKeywords = (name) => {
      const arrName = [];
      let curName = '';
      name.split('').forEach((letter) => {
        curName += letter;
        arrName.push(curName);
      });
      return arrName;
    };
  
    function findPermutation(k) {
      for (let i = 0; i < length; i++) {
        if (!flagArray[i]) {
          flagArray[i] = true;
          result[k] = name[i];
  
          if (k === length - 1) {
            stringArray.push(result.join(' '));
          }
  
          findPermutation(k + 1);
          flagArray[i] = false;
        }
      }
    }
  
    findPermutation(0);
  
    const keywords = stringArray.reduce((acc, cur) => {
      const words = createKeywords(cur);
      return [...acc, ...words];
    }, []);
  
    return keywords;
  };