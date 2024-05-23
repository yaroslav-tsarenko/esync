import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <section className="httpsyesimappcontacts-">
        <div className="navigation">
          <a
            className="link-home"
            href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-2"
            target="_blank"
          >
            Home
          </a>
          <div className="svg-wrapper">
            <img className="svg-icon" loading="lazy" alt="" src="/svg.svg" />
          </div>
          <a
            className="link-contacts"
            href="https://www.figma.com/design/nYNSZMkPGbi6MKR8IfCzws?node-id=1-16978"
            target="_blank"
          >
            Contacts
          </a>
        </div>
        <div className="content">
          <div className="main">
            <div className="contact-info">
              <h1 className="heading-1">Contacts</h1>
              <div className="if-any-issues-container">
                <p className="if-any-issues-bother-you-just">
                  <span>{`If any issues bother you, just text our support: `}</span>
                  <span className="supportglobalesyncapp">
                    support@GlobaleSync.app
                  </span>
                </p>
                <p className="business-and-collaboration-b2">
                  <span>{`Business and collaboration: `}</span>
                  <span className="b2bglobalesyncapp">b2b@GlobaleSync.app</span>
                </p>
                <p className="general-issues-questions-inf">
                  <span>{`General issues, questions: `}</span>
                  <span className="infoglobalesyncapp">
                    info@GlobaleSync.app
                  </span>
                </p>
              </div>
            </div>
            <div className="to-stay-tuned">
              To stay tuned for more GlobaleSync news, follow us on Facebook,
              Instagram and Twitter.
            </div>
            <div className="social-links">
              <img
                className="link-icon"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
              <img
                className="link-icon1"
                loading="lazy"
                alt=""
                src="/link-1.svg"
              />
              <img
                className="link-icon2"
                loading="lazy"
                alt=""
                src="/link-2.svg"
              />
              <img
                className="link-icon3"
                loading="lazy"
                alt=""
                src="/link-3.svg"
              />
              <img
                className="link-icon4"
                loading="lazy"
                alt=""
                src="/link-4.svg"
              />
              <img
                className="link-icon5"
                loading="lazy"
                alt=""
                src="/link-5.svg"
              />
              <img
                className="link-icon6"
                loading="lazy"
                alt=""
                src="/link-6.svg"
              />
            </div>
          </div>
        </div>
        <div className="container" />
      </section>
    </div>
  );
};

export default Contacts;
