import React, { useState } from 'react'

import UploadForm from '../../../components/UploadForm';
import Modal from "../../../components/Model";
import Title from '../../../components/Title';
import { motion } from 'framer-motion';
import useFirestore from '../../../hooks/useFirestore';


export default function Sofa() {
    const { docs } = useFirestore("sofas");

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div>
            <Title
                title="Sofa's"
            />
            <UploadForm />

            <div>
                <div className="img-grid">
                    {docs && docs.map(doc => (
                        <motion.div className="img-wrap" key={doc.id}
                            layout
                            whileHover={{ opacity: 1 }}
                            onClick={() => setSelectedImg(doc.url)}
                        >

                            <motion.img src={doc.url} alt="uploaded pic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            />

                        </motion.div>
                    ))}
                </div>
                {selectedImg && (
                    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                )}

            </div>
            {selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}

        </div>
    )
}
