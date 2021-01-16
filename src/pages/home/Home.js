import React from 'react'
import ImgData from '../../assets/ImgData';
import Card from './card/Card';

import './Home.css';
import {
    Link,
} from "react-router-dom";
import Footer from '../../components/footer/Footer';
import Title from '../../components/Title';
import Navbar from '../../components/Navbar/Navbar';


export default function Home() {
    return (
        <>
            <Navbar />
            <Title
                title="Bhole Shankar Furniture"
            />
            <div className="mainContainer">
                <div className="gridContainer">
                    {ImgData.map((data, id) => {
                        return (
                            <Link to={data.path} key={id}>
                                <Card
                                    key={data.id}
                                    img={data.img}
                                    title={data.title}
                                />
                            </Link>
                        );
                    })}
                </div>

            </div>
            <hr />
            <Footer />
        </>
    )
}
