import './Register.css';

const Login = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Femsocial</h3>
          <span className="registerDesc">
            Connect with friends and the world around you...
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              placeholder="Username"
              className="registerInput"
            />
            <input type="email" placeholder="Email" className="registerInput" />
            <input
              type="password"
              placeholder="Password"
              className="registerInput"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="registerInput"
            />
            <button className="registerButton">Register</button>
            <span className="registerForgot">Already have an account?</span>
            <button className="registerLoginButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
