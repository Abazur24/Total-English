import "./input.scss";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="input-container">
      <div className="input-icon">
        <Icon className="icon-size" />
      </div>
      <input {...props} className="custom-input" />
    </div>
  );
};

export default Input;

