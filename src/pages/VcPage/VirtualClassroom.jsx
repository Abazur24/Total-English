import React from "react";
import { useNavigate } from "react-router-dom";
import "../VcPage/virtualClassroom.scss";
import classroomImage from "../../assets/images/virtualclassroom2.png";
import checkImage from "../../assets/images/check-svgrepo-com.png";

const virtualClassroom = () => {
  return (
    <div className="vc-container">
      <div className="vc-image-frame">
        <img src={classroomImage} alt="Virtual Classroom" />
      </div>

      <div className="vc-text-frame">
        <h2 className="vc-heading">
          Learn with the world's English experts in Our virtual classroom
        </h2>
        <h3 className="vc-subheading">
          We help you gain confidence and improve your speaking, pronunciation
          and vocabulary.
        </h3>
        <div className="vc-info-box">
          <div className="checkmark-align">
            <div>
              <img className="vc-checkmark" src={checkImage} alt="checkmark" />
            </div>
            <div>
              <img className="vc-checkmark" src={checkImage} alt="checkmark" />
            </div>
            <div>
              <img className="vc-checkmark" src={checkImage} alt="checkmark" />
            </div>
          </div>

          <div className="description-align">
            <p className="vc-description">
              Practice in small group classes and private one-to-one classes
            </p>
            <br />

            <p className="vc-description">
              Customise your timetable, Choose classes based on your goals and
              interests.
            </p>
            <br />

            <p className="vc-description">
              Choose your level. From beginner to advanced.
            </p>
          </div>
        </div>

        <div>
          <button
            className="vc-contact-button"
            onClick={() => navigate(target)}
          >
            Contact Our Manager
          </button>
        </div>
      </div>
    </div>
  );
};

export default virtualClassroom;
