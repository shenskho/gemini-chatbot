import logo from "./img/logo.png"
import facebook from "./img/logo-facebook.png"
import google from "./img/logo-google.png"  
import './Login.css'

export const Login = () => (
    <div className="login">
        <div className="login-container">
            <img src={logo} alt="logo" className="logo" />
            
            <div className="login-header">
                <h1>Login to your account</h1>
                <p>Don't have an account? <a href="/signup">Sign Up</a></p>
            </div>

            <div className="login-form">
                <div className="input-group">
                    <span className="input-icon"></span>
                    <input type="email" placeholder="Email" />
                </div>
                
                <div className="input-group">
                    <input type="password" placeholder="Password" />
                    <span className="input-icon clickable"></span>
                </div>
                
                <div className="forgot-password">
                    <a href="/forgot-password">Forgot Password?</a>
                </div>

                <button className="login-button">Login</button>

                <div className="divider">
                    <span>Or login with</span>
                </div>

                <div className="social-buttons">
                    <button className="social-button google">
                    <img src={google} alt="" /> Google
                    </button>
                    <button className="social-button facebook">
                        <img src={facebook} alt="" /> Facebook
                    </button>
                </div>
            </div>
        </div>
    </div>
);