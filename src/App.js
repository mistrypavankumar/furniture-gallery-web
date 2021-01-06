import React, {useState} from 'react';
import ImageGrid from './components/ImageGrid';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title';
// import UploadForm from './components/UploadForm';

import './App.css';
// import Modal from './components/Model';
import Home from './pages/home/Home';

function App() {
  // const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
    <Navbar />
     <Title />
     {/* <UploadForm /> */}
     {/* <ImageGrid  setSelectedImg = {setSelectedImg}/>
     {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )} */}

      <Home />
    </div>
  );
}

export default App;
