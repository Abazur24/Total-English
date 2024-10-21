
import videoTest from '../assets/natur.mp4';

export const Course = [
    { 
        id: 1,
        title: "A1",
        level:"Beginner",
        description: "Basic grammar, vocabulary, and everyday conversation skills for new learners.",  
            
    },
    {
        id: 2,
        title: "A2",
        level:"Beginner",
        description: "Expands vocabulary and dialogues for common, familiar situations and tasks.",
        
    },
    {
        id: 3,
        title: "B1",
        level:"Intermediate",
        description: "Develops communication skills for routine conversations and everyday tasks.",
        
        
    },
    {
        id: 4,
        title: "B2",
        level:"Upper-Intermediate",
        description: "Enhances fluency in conversations, focusing on more complex topics.",
      
    },
    {
        id: 5,
        title: "C1",
        level:"Advanced",
        description: "Refines advanced grammar and vocabulary for professional and academic communication.",
       
    },
    {
        id: 6,
        title: "C2",
        level:"Proficient",
        description: "Achieves near-native fluency for nuanced, complex discussions and topics.",
       
    },
    {
        id: 7,
        title: "A1.1",
        level:"Beginner",
        description: "Basic grammar, vocabulary, and phrases for everyday, simple conversations.",
        
    },
    {
        id: 8,
        title: "A1.2",
        level:"Beginner",
        description: "Expands vocabulary and dialogues for common, familiar situations and tasks.",
       
    },
    {
        id: 9,
        title: "B1.1",
        level:"Intermediate",
        description: "Develops communication skills for routine conversations and everyday tasks.",
       
    },
    {
        id: 10,
        title: "B1.2",
        level:"Intermediate",
        description: "Enhances fluency in conversations, focusing on more complex topics.",
       
    },
    { 
        id: 11,
        title: "C1.1",
        level:"Advanced",
        description: "This course is designed to help students improve their academic writing skills.",  
           
    },
    {
        id: 12,
        title: "C1.2",
        level:"Advanced",
        description: "Refines advanced grammar and vocabulary for professional and academic communication.",
       
       
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