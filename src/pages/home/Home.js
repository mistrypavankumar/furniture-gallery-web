import React from 'react'
import ImgData from '../../assets/ImgData';
import Card from './card/Card';

import './Home.css';


export default function Home() {
    return (
        <>
            <div className="mainContainer">
                <div className="gridContainer">
                    {ImgData.map((data, id) => {
                        return (
                            <Card 
                                img = {data.img}
                                title = {data.title}
                                 />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
