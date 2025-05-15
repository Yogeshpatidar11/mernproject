import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const {user} = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>welcome, {user ? `${user.username} to our website` : `to our website`}</p>


              <h1>Why Choose Us? </h1>
              <p>
                At Grocery Store, we believe grocery shopping should be
                simple, affordable, and enjoyable. Founded with the goal of
                bringing fresh, high-quality products to your doorstep, we offer
                a wide range of groceries—from farm-fresh fruits and vegetables
                to pantry staples, dairy, snacks, and personal care items. We
                are passionate about customer satisfaction and work hard every
                day to ensure timely delivery, competitive pricing, and a smooth
                online shopping experience. Whether you're stocking up for the
                week or just grabbing a few essentials, we’re here to serve you
                with care and convenience.
              </p>
              
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
