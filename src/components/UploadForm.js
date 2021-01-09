import React,{useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = (collection) =>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    //making user to select only these types of files
    const types = ['image/png', 'image/jpg', 'image/jpeg'];

    const handleChanges = (e) => {
        //seting as use can select only one img
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
            // console.log(selected);

        }else{
            setFile(null);
            setError('Please select an image file (png or jpg or jpeg)');
        }

    }


    return (
        <form >
            <label>
                <input type="file" onChange = {handleChanges} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div> }
                {file && <div>{file.name}</div> }
                {file && <ProgressBar file = {file} collection = {collection} setFile = {setFile} />}
            </div>

        </form>
    )

}

export default UploadForm;