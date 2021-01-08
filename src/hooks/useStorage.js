import {useState, useEffect} from 'react'
import { projectStorage, projectFirestore, timestamp} from '../firebase/config';



const useStorage = (file) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // reference
        const storageRef = projectStorage.ref(file.name);

        const collectionRef = projectFirestore.collection('dinningTables');
        console.log(collectionRef);
        console.log(storageRef);

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({url, createdAt});
            setUrl(url);
        }
        
        )
    },[file]);


    return { progress, url, error};

}


export default useStorage;
