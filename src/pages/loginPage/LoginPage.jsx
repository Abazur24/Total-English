import "./loginPage.scss";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/input/Input";
import config from '../../config/config.js';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState('');
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      setToken(await res.json())      
      navigate("/dashboard");
    } catch (err) {
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
