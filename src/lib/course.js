import genEngImg from '../assets/images/people.png';
import acaEngImg from '../assets/images/academic.png';
import busEngImg from '../assets/images/business.png';
import proEngImg from '../assets/images/itprofessionals.png';
import travelEngImg from '../assets/images/travelling.png';
import childEngImg from '../assets/images/childrenFoto.png';
import healthEngImg from '../assets/images/healthcare.png';
import lawEngImg from '../assets/images/lawyers.png';
import salesEngImg from '../assets/images/sales.png';
import financeEngImg from '../assets/images/finance.jpg';
import videoTest from '../assets/natur.mp4';

export const Course = [
    { 
        id: 1,
        title: "General English",
        description: "This course is designed to help students improve their general writing skills.",  
        image: genEngImg,
        duration: 24,
        price: 200,       
    },
    {
        id: 2,
        title: "English for Traveling",
        description: "This course is designed to help travelers improve their language skills for traveling.",
        image: travelEngImg,
        duration: 24,
        price: 200, 
    },
    {
        id: 3,
        title: "English for Children",
        description: "This course is designed to help children improve their language skills.",
        image: childEngImg,
        duration: 24,
        price: 200, 
    },
    {
        id: 4,
        title: "English for Professionals",
        description: "This course is designed to help professionals improve their language skills in a corporate context.",
        image: proEngImg,
        duration: 24,
        price: 200, 

    },
    {
        id: 5,
        title: "English for Healthcare",
        description: "This course is designed to help professionals improve their language skills in a corporate context.",
        image: healthEngImg,
        duration: 24,
        price: 200, 

    },
    {
        id: 6,
        title: "English for Marketing and Sales",
        description: "This course is designed to help professionals improve their language skills in a corporate context.",
        image: salesEngImg,
        duration: 24,
        price: 200, 

    },
    {
        id: 7,
        title: "English for Lawyers",
        description: "This course is designed to help professionals improve their language skills in a corporate context.",
        image: lawEngImg,
        duration: 24,
        price: 200, 

    },
    {
        id: 8,
        title: "English for IT",
        description: "This course is designed to help professionals improve their language skills in a corporate context.",
        image: proEngImg,
        duration: 24,
        price: 200, 
    },
    {
        id: 9,
        title: "English for Lawyers",
        description: "This course is designed to help professionals improve their language skills in a corporate context.",
        image: lawEngImg,
        duration: 24,
        price: 200, 

    },
    {
        id: 10,
        title: "English for Finance and Accounting",
        description: "This course is designed to help professionals improve their language skills in a corporate context.",
        image: financeEngImg,
        duration: 24,
        price: 200, 

    },
    { 
        id: 11,
        title: "Academic English",
        description: "This course is designed to help students improve their academic writing skills.",  
        image: acaEngImg,
        duration: 24,
        price: 200,       
    },
    {
        id: 12,
        title: "Business English",
        description: "This course is designed to help professionals improve their business communication skills.",
        image: busEngImg,
        duration: 24,
        price: 200
    }
]

export const Lectures = [
{
    id: 1,
    title: "General English",
    courseID: 1,
    video: {
        title: "Introduction to General English",
        duration: 10,
        videoURL: videoTest},

},
{
    id: 2,
    title: "English for Traveling",
    courseID: 2,
    video: {
        title: "Introduction to General English",
        duration: 10,
        videoURL: videoTest
    },    
}
]