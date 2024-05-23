import "./SignUp1.css";

const SignUp1 = () => {
  return (
    <div className="sign-up2">
      <section className="sign-in-desktop">
        <div className="sign-in1">
          <div className="sign-in-form">
            <div className="credentials">
              <h1 className="sign-in2">Sign in</h1>
              <div className="sign-in-to">
                Sign in to your account to see products catered to you
              </div>
            </div>
            <form className="input-fields1">
              <div className="username-field">
                <div className="username1">Username</div>
                <img
                  className="password-mask-icon"
                  alt=""
                  src="/frame-153-1.svg"
                />
              </div>
              <div className="username-field1">
                <div className="password1">Password</div>
                <img
                  className="username-field-child"
                  alt=""
                  src="/frame-153-2.svg"
                />
              </div>
              <button className="button5">
                <img className="tag-icon2" alt="" src="/tag-icon1.svg" />
                <div className="button6">Sign in</div>
                <img className="tag-icon3" alt="" src="/tag-icon1.svg" />
              </button>
            </form>
            <div className="or-sign-in">or, sign in with</div>
            <div className="social-auth">
              <img
                className="social-options-icon3"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-options-icon4"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="social-options-icon5"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp1;
