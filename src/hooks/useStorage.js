import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';



const useStorage = (file, collection) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);



    useEffect(() => {
        // reference
        const storageRef = projectStorage.ref(file.name);

        const _collection = collection.collection;
        
        console.log(_collection);
        const collectionRef = projectFirestore.collection(
            `${_collection}`
        );


        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url);

        }

        )
    }, [file, collection]);


    return { progress, url, error };

}


export default useStorage;
