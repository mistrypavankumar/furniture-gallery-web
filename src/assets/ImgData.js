import img1 from './images/bed_.jpg';
import img2 from './images/sofa_.jpeg';
import img3 from './images/dinning_table_.jpeg';
import img4 from './images/Chairs.jpg';
import img5 from './images/tvStand.jpg';
import img6 from './images/dressing_table.jpg';


const title = [
    "Beds",
    "Sofa",
    "Dinning Table",
    "Chairs",
    "Tv Stand",
    "Dressing Table",
     ]

const path = [
    "/beds",
    "/sofa",
    "/dinningtable",
    "/chairs",
    "/tvstand",
    "/dressingtable",

    ]    

const ImgData = [
    {   
        id: 1,
        img: img1,
        title: title[0],
        path: path[0] 
    },
    {
        id: 2,
        img: img2,
        title: title[1],
        path: path[1]  
    },
    {
        id: 3,
        img: img3,
        title: title[2],
        path: path[2]  
    },
    {
        id: 4,
        img: img4,
        title: title[3],
        path: path[3]  
    },
    {
        id: 5,
        img: img5,
        title: title[4],
        path: path[4]  
    },
    {
        id: 6,
        img: img6,
        title: title[5],
        path: path[5]  
    },
    
]


export default ImgData;