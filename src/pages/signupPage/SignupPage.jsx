import "./signupPage.scss";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/input/Input";
import PasswordStrengthMeter from "../../components/passwordStrengthMether/PasswordStrengthMeter";
import { LockKeyhole, Mail, User} from "lucide-react";
import config from "../../config/config";
import { AuthContext } from "../../context/AuthContext";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For handling errors
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const navigate = useNavigate();
  const { currentUser, updateUser } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Reset errors before new attempt

    try {
      const res = await fetch(`${config.apiUrl}/register`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Signup failed");
      }

      // If signup is successful, navigate to verify email page
     updateUser(await res.json())
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-page-container">
      <h2 className="signup-heading">Create Account</h2>

      <form onSubmit={handleSignUp}>
        <Input
          icon={User}
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={LockKeyhole}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PasswordStrengthMeter password={password} />

        {error && <p className="error-message">{error}</p>} {/* Display error */}
        <button disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign up"}
        </button>
      </form>

      <div className="login-prompt">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
