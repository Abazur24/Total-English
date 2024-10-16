import React from "react";
import "./profCoursePages.scss";
import { useNavigate } from "react-router-dom";

export function ProfCoursePages({ title, image, target, imgalt, description }) {
  const navigate = useNavigate();

  return (
    <div className="content-prof">
      <div className="text-prof">
        <h1 className="heading-prof">{title}</h1>
        <p className="description-prof">{description}</p>
      </div>

      <div className="container-prof">
        <img className="picture-prof" src={image} alt={imgalt} />
      </div>

      <div>
        <button
          className="contact-button-prof"
          onClick={() => navigate(target)}
        >
          Contact Our Manager
        </button>
      </div>
    </div>
  );
}

export const pages = {
  ItPage: {
    title: "English for IT Professionals",
    image: "../src/assets/images/itprofessionals.png",
    target: "/it",
    imgalt: "it people",
    description:
      "English for IT Professionals is crucial for those working in global tech environments. It focuses on technical terminology, software documentation, troubleshooting, and communication within teams. IT professionals use English to collaborate on projects, write code, and explain complex concepts clearly to non-technical clients. Proficiency in English also aids in understanding and using industry-standard tools, staying updated with new technologies, and participating in international conferences. Mastering English for IT is essential for career growth and effective participation in the global tech industry.",
  },

  lawyers: {
    title: "English for Lawyers",
    image: "../src/assets/images/lawyers.png",
    target: "/lawyers",
    imgalt: "lawyer",
    description:
      "English for Lawyers focuses on the legal terminology and communication skills needed in international legal contexts. It covers areas like contract drafting, negotiations, courtroom procedures, and legal correspondence. Lawyers must master complex legal vocabulary to understand and interpret laws, draft legal documents, and advise clients effectively. English proficiency is crucial for working with multinational clients, understanding international law, and participating in cross-border cases. Mastering legal English enhances a lawyer’s ability to navigate global legal systems and succeed in international practice.",
  },

  finance: {
    title: "English for Finance and Accounting",
    image: "../src/assets/images/finance.jpg",
    target: "/finance",
    imgalt: "finance",
    description:
      "English for Finance and Accounting focuses on the language and terminology essential for professionals in global financial environments. It covers key areas like financial reporting, budgeting, auditing, and investment analysis. Proficiency in English allows accountants and financial professionals to interpret financial statements, communicate with international clients, and ensure compliance with global standards. Understanding industry-specific terms and concepts is crucial for preparing reports, presenting data, and making financial recommendations. Mastering English in finance and accounting enhances career opportunities and ensures accuracy in financial transactions.",
  },

  sales: {
    title: "English for Marketing and Sales",
    image: "../src/assets/images/sales.png",
    target: "/sales",
    imgalt: "sales",
    description:
      "English for Sales equips professionals with the language skills needed to excel in global markets. It focuses on sales techniques, negotiating, and building relationships with clients. Key areas include product presentations, handling objections, closing deals, and discussing pricing. Effective communication in English allows salespeople to better understand customer needs, explain product benefits clearly, and persuade potential buyers. Mastering sales-related English is crucial for expanding business opportunities, increasing revenue, and establishing strong, long-term customer relationships in international markets.",
  },

  healthcarePage: {
    title: "English for Healthcare Professionals",
    image: "../src/assets/images/healthcare.png",
    target: "/healthcare",
    imgalt: "healthcare",
    description:
      "English for Healthcare is essential for professionals working in international medical settings. It focuses on the language needed for patient care, medical procedures, and healthcare management. Key areas include medical terminology, patient communication, understanding diagnoses, and explaining treatments. Healthcare workers need to effectively communicate with patients, colleagues, and other healthcare providers, ensuring accurate medical records and safe care delivery. English proficiency helps in discussing symptoms, giving instructions, and managing emergencies. Additionally, clear communication reduces misunderstandings and errors, enhancing patient outcomes and safety.",
  },

  HumanresoursesPage: {
    title: "English for Humanresourses",
    image: "../src/assets/images/humanresourses.png",
    target: "/humanresourses",
    imgalt: "humanresourses",
    description:
      "English for Human Resources (HR) focuses on the language and communication skills needed for HR professionals in an international setting. It covers key areas like recruitment, employee relations, performance management, and legal compliance. Mastering HR-specific vocabulary, drafting formal documents, and conducting interviews are essential. English proficiency in HR also includes understanding labor laws, resolving conflicts, and managing cultural diversity in the workplace. Effective communication in English ensures smoother collaboration, enhances leadership, and supports a company’s global operations. Ultimately, strong English skills in HR contribute to creating a more productive and inclusive work environment.",
  },
};