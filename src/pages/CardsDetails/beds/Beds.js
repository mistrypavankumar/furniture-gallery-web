import React, {useState} from 'react'

import UploadForm from '../../../components/UploadForm';
import ImageGrid from '../../../components/ImageGrid';
import Modal from "../../../components/Model";
import Title from '../../../components/Title';


export default function Beds() {
      const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div>
            <Title 
                title = "Beds"
             />
           <UploadForm />
      <ImageGrid  setSelectedImg = {setSelectedImg}/>
     {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}

        </div>
    )
}
