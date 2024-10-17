import "./loginPage.scss";
import { Mail, Lock } from "lucide-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import config from '../../config/config.js';
import loadingIcon from '../../assets/images/loading.svg'
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("daniel@gmail.com");
  const [password, setPassword] = useState("Daniel123!");
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {currentUser, updateUser} = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {

      const res = await fetch(`${config.apiUrl}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password, name:'test' }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log(errorData.message) // message: user not found
        throw new Error(errorData.message || "Login failed");
      }
      setLoading(false)
      const user = await res.json();

      updateUser(user)  
      navigate("/dashboard");
    } catch (err) {
      setLoading(false)
      setErr(err.message)
    }
  };

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <Input
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={Lock}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      {loading &&
        (<div className="loading-cont">
        <img src={loadingIcon} alt="loading-icon" />
      </div>)}
      {err&&(
        <span className="form-err">
          {err}
        </span>
      )}
      <div className="signup-prompt">
        <p>
          {"Don't"} have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
