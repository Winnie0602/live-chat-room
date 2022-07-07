import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {

    const documents = ref(null)
    const error = ref(null)


    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt')


    //onSnapshot()需要傳入量個參數，try catch的概念
    collectionRef.onSnapshot(snap => {
        let results = [];
        snap.docs.forEach(doc => {
        // 等到timestamp有值後才能將資料push至result
            doc.data().createdAt && results.push({...doc.data(), id: doc.id})
        });
        
        documents.value = results;
        error.value = null;
    }, err => {
        console.log(err.message)
        documents.value = null
        error.value = '找不到資料'
  })

  return { error, documents }
}

export default getCollection