import { useState } from 'react';
import pg from './lfimage.png'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  };
  
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={pg} alt="Lost and Found" />
      </div>
      
      <div className="login-form-container">
        <div className="login-form-box">
          <h2>Login</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="signin-button">
              Sign In
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <button type="button" className="google-signin">
             
              Sign in with Google
            </button>

            <div className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
