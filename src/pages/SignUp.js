import "./SignUp.css";
import Header from "../components/header/Header";

const SignUp = () => {
  return (
      <>
        <Header/>
        <div className="sign-up">
          <section className="sign-up-desktop">
            <div className="sign-in">
              <div className="signup-form">
                <h1 className="sign-up1">Sign up</h1>
                <div className="sign-up-to">
                  Sign up to get rewards, and many more
                </div>
              </div>
              <form className="input-fields">
                <div className="name-address-username">
                  <div className="your-name-wrapper">
                    <div className="your-name">Your Name</div>
                  </div>
                  <div className="email-country-password">
                    <div className="email">Email</div>
                  </div>
                </div>
                <div className="name-address-username1">
                  <div className="address-wrapper">
                    <input className="address" placeholder="Address" type="text"/>
                  </div>
                  <div className="country-parent">
                    <div className="country">Country</div>
                    <img
                        className="email-country-input"
                        alt=""
                        src="/email-country-input.svg"
                    />
                  </div>
                </div>
                <div className="name-address-username2">
                  <div className="username-parent">
                    <div className="username">Username</div>
                    <img
                        className="name-address-input"
                        alt=""
                        src="/frame-153-1.svg"
                    />
                  </div>
                  <div className="password-parent">
                    <div className="password">Password</div>
                    <img className="frame-child" alt="" src="/frame-153-2.svg"/>
                  </div>
                </div>
                <button className="button3">
                  <img className="tag-icon" alt="" src="/tag-icon1.svg"/>
                  <div className="button4">Sign up</div>
                  <img className="tag-icon1" alt="" src="/tag-icon1.svg"/>
                </button>
              </form>
              <div className="or-sign-up">or, sign up with</div>
              <div className="social-signup">
                <img
                    className="social-options-icon"
                    loading="lazy"
                    alt=""
                    src="/frame-158.svg"
                />
                <img
                    className="social-options-icon1"
                    loading="lazy"
                    alt=""
                    src="/frame-158.svg"
                />
                <img
                    className="social-options-icon2"
                    loading="lazy"
                    alt=""
                    src="/frame-158.svg"
                />
              </div>
            </div>
          </section>
        </div>
      </>

  );
};

export default SignUp;
