
import {
  Heart,
  PawPrint,
  ShieldCheck,
  Users,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Mail,
  HandHeart,
  LockKeyhole,
  CreditCard,
  Check,
} from "lucide-react";
import { useState } from "react";
import saferFutureImage from "./assets/mkitten.jpeg";
import aboutImage from "./assets/streetdog.jpeg";
import rescueImage from "./assets/blackdog.jpeg";
import communityImage from "./assets/punda.jpeg";
import nehosaLogo from "./assets/logo.jpeg";
import "./App.css";

const animals = [
  {
    name: "Rescue & Rehabilitation",
    category: "ANIMAL WELFARE",
    description:
      "Helping animals in need through rescue, care, rehabilitation and responsible rehoming.",
    image:
      rescueImage,
  },
  {
    name: "Community Education",
    category: "COMMUNITY",
    description:
      "Encouraging compassionate treatment of animals through education and community awareness.",
    image:
      communityImage,
  },
  {
    name: "A Safer Future",
    category: "PROTECTION",
    description:
      "Promoting animal protection, responsible care and a kinder future for every living being.",
    image:
      saferFutureImage,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState("25000");
  const [donationFrequency, setDonationFrequency] = useState("Once");

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nehosa">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <MapPin size={15} />
            Tanzania
          </span>
          <span className="topbar-message">
            Protecting animals. Supporting communities.
          </span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-icon">
  <img src={nehosaLogo} alt="NEHOSA logo"  />
</span>
            <span className="brand-copy">
              <strong>NEHOSA</strong>
              <small>New Hope for Society and Animals</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav nav-open" : "nav"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About us</a>
            <a href="#work" onClick={closeMenu}>Our work</a>
            <a href="#involved" onClick={closeMenu}>Get involved</a>
            <a className="nav-donate" href="#donate" onClick={closeMenu}>
              <Heart size={16} /> Support our work
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow hero-eyebrow">
              <PawPrint size={16} /> A NEW HOPE FOR EVERY LIFE
            </span>
            <h1>
              A kinder world
              <br />
              starts with <span>compassion.</span>
            </h1>
            <p>
              NEHOSA works towards a future where animals are treated with
              kindness and communities are empowered to make a difference.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button button-light">
                Discover our work <ArrowRight size={18} />
              </a>
              <a href="#involved" className="button button-outline">
                Get involved
              </a>
            </div>
            <div className="hero-note">
              <Heart size={17} />
              <span>Every act of kindness can change a life.</span>
            </div>
          </div>
        </section>

        <section className="mission-strip">
          <div className="container mission-grid">
            <div className="mission-item">
              <span className="mission-icon"><Heart /></span>
              <div>
                <strong>Compassion</strong>
                <p>Care for animals and people.</p>
              </div>
            </div>
            <div className="mission-item">
              <span className="mission-icon"><ShieldCheck /></span>
              <div>
                <strong>Protection</strong>
                <p>Promote safety and welfare.</p>
              </div>
            </div>
            <div className="mission-item">
              <span className="mission-icon"><Users /></span>
              <div>
                <strong>Community</strong>
                <p>Create change together.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-image-wrap">
              <img
                src={aboutImage}
                alt="Street dog receiving care"
                className="about-image"
              />
              <div className="image-caption">
                <PawPrint size={23} />
                <span>
                  <strong>Small acts. Lasting change.</strong>
                  <small>Building a more compassionate future.</small>
                </span>
              </div>
            </div>

            <div className="about-content">
              <span className="eyebrow">WHO WE ARE</span>
              <h2>Care and hope for street animals across Dar es Salaam.</h2>
              <p>
                New Hope for Society and Animals (NEHOSA) works to improve
                animal welfare across Dar es Salaam, Tanzania. We help street
                and mistreated animals by providing care, shelter, food and
                vaccinations.
              </p>
              <p>
                Our mission is to help meet these needs and encourage
                compassionate, responsible care for animals in our communities.
              </p>

              <div className="about-points">
                <div><span>01</span> Rescue and care for street and mistreated animals</div>
                <div><span>02</span> Help provide shelter and food</div>
                <div><span>03</span> Support animal vaccinations</div>
                <div><span>04</span> Raise awareness about animal welfare</div>
                <div><span>05</span> Support humane population management and access to veterinary care</div>
              </div>


              <a href="#involved" className="text-link">
                Be part of our mission <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">WHAT WE CARE ABOUT</span>
              <h2>Turning compassion into action.</h2>
              <p>
                Working towards a future where animals are protected and
                communities have the knowledge and support to make a difference.
              </p>
            </div>

            <div className="work-grid">
              {animals.map((item) => (
                <article className="work-card" key={item.name}>
                  <div className={`work-image-wrap ${item.name === "Community Education" ? "community-image-wrap" : ""}`}>
                    <img src={item.image} alt={item.name} />
                    <span className="image-paw"><PawPrint size={20} /></span>
                  </div>
                  <div className="work-card-content">
                    <span className="card-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <a href="#involved" className="card-link">
                      Learn how to help <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="container quote-content">
            <span className="quote-mark">“</span>
            <h2>
              The greatness of a community is measured by the compassion it
              shows to the most vulnerable.
            </h2>
            <p>Let's build a kinder future together.</p>
          </div>
        </section>

        <section className="section involve-section" id="involved">
          <div className="container involve-grid">
            <div>
              <span className="eyebrow">MAKE A DIFFERENCE</span>
              <h2>Be part of the hope.</h2>
              <p>
                Whether you volunteer, share our mission or support our work,
                your contribution can help create positive change.
              </p>
            </div>
            <div className="involve-cards">
              <div className="involve-card">
                <span className="involve-icon"><HandHeart /></span>
                <h3>Volunteer</h3>
                <p>Give your time, skills and compassion to our mission.</p>
                <a href="#contact">Contact us <ArrowRight size={16} /></a>
              </div>
              <div className="involve-card">
                <span className="involve-icon"><Users /></span>
                <h3>Partner with us</h3>
                <p>Work together to support animal welfare and communities.</p>
                <a href="#contact">Let's collaborate <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section donation-section" id="donate">
          <div className="container donation-layout">
            <div className="donation-story">
              <span className="eyebrow">YOUR SUPPORT MATTERS</span>
              <h2>Help us create a world full of hope.</h2>
              <p>
                Your gift supports animal care, community education and a safer
                future for animals across Tanzania.
              </p>
              <div className="donation-impact-list">
                <div><span><Check size={16} /></span><p><strong>Care that reaches further</strong><br />Every contribution helps NEHOSA advance its mission.</p></div>
                <div><span><Check size={16} /></span><p><strong>Choose what works for you</strong><br />Give once or choose a monthly contribution.</p></div>
                <div><span><Check size={16} /></span><p><strong>Secure payment setup</strong><br />Payments will be enabled after gateway configuration.</p></div>
              </div>
              <div className="gateway-note"><LockKeyhole size={17} /><span>Payment processing is not active yet. Your details are not being sent or stored.</span></div>
            </div>

            <form className="donation-card" onSubmit={(event) => event.preventDefault()}>
              <div className="donation-card-heading">
                <span className="donation-card-icon"><Heart size={21} /></span>
                <div><h3>Make a donation</h3><p>Choose an amount to support our work.</p></div>
              </div>

              <fieldset className="donation-frequency">
                <legend>Gift frequency</legend>
                {[
                  { label: "Once", value: "Once" },
                  { label: "Monthly", value: "Monthly" },
                ].map((item) => (
                  <button key={item.value} type="button" className={donationFrequency === item.value ? "frequency-option selected" : "frequency-option"} onClick={() => setDonationFrequency(item.value)} aria-pressed={donationFrequency === item.value}>
                    {item.label}
                  </button>
                ))}
              </fieldset>

              <fieldset className="amount-fieldset">
                <legend>Donation amount <span>(TZS)</span></legend>
                <div className="amount-options">
                  {[10000, 25000, 50000, 100000].map((amount) => (
                    <button key={amount} type="button" className={donationAmount === String(amount) ? "amount-option selected" : "amount-option"} onClick={() => setDonationAmount(String(amount))} aria-pressed={donationAmount === String(amount)}>
                      {amount.toLocaleString("en-TZ")}
                    </button>
                  ))}
                </div>
                <label className="custom-amount-label" htmlFor="custom-amount">Or enter another amount</label>
                <div className="amount-input-wrap"><span>TZS</span><input id="custom-amount" inputMode="numeric" type="number" min="1000" step="1000" placeholder="Enter amount" value={donationAmount} onChange={(event) => setDonationAmount(event.target.value)} required /></div>
              </fieldset>

              <div className="donor-fields">
                <label htmlFor="donor-name">Your name <span>(optional)</span></label>
                <input id="donor-name" name="name" type="text" autoComplete="name" placeholder="Name" />
                <label htmlFor="donor-email">Email address <span>(optional)</span></label>
                <input id="donor-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
                <label htmlFor="donor-phone">Mobile money number <span>(optional)</span></label>
                <input id="donor-phone" name="phone" type="tel" autoComplete="tel" placeholder="+255…" />
              </div>

              <button className="button donation-submit" type="submit" disabled>
                <CreditCard size={18} /> Continue to payment
              </button>
              <p className="donation-unavailable">Online donations are coming soon. Selcom checkout will be connected here once setup is complete.</p>
              <p className="donation-security"><LockKeyhole size={14} /> Secure payment processing will be provided by the configured gateway.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand footer-brand-link" href="#home">
              <span className="brand-icon"><PawPrint size={27} /></span>
              <span className="brand-copy">
                <strong>NEHOSA</strong>
                <small>New Hope for Society and Animals</small>
              </span>
            </a>
            <p>
              A new hope for every life. Together, we can build a kinder future
              for animals and communities.
            </p>
          </div>

          <div className="footer-links">
            <h3>Explore</h3>
            <a href="#about">About us</a>
            <a href="#work">Our work</a>
            <a href="#involved">Get involved</a>
            <a href="#donate">Support our work</a>
          </div>

          <div className="footer-contact">
            <h3>Get in touch</h3>
            <p><MapPin size={17} /> Ilala, Dar Es Salaam, Tanzania</p>
            <p><Mail size={17} /> Add your official email</p>
            <p>
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.04 2C6.52 2 2.03 6.48 2.03 12c0 1.77.47 3.5 1.36 5.02L2 22l5.13-1.35A10 10 0 1 0 12.04 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.2 8.2 0 0 1 4 12a8.03 8.03 0 1 1 8.04 8.2Zm4.43-6.15c-.24-.12-1.44-.71-1.66-.8-.22-.08-.38-.12-.54.13-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.07 3.59.57.25.81.4 1.1.51.46.15.87.13 1.2.08.38-.06 1.44-.59 1.64-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
              </svg>
              <a href="https://wa.me/255685477066" target="_blank" rel="noreferrer" aria-label="Chat with NEHOSA on WhatsApp">
                +255 685 477 066
              </a>
            </p>
            <p>
              <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              <a href="https://www.instagram.com/nehosatz/" target="_blank" rel="noreferrer">
                @nehosatz
              </a>
            </p>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} NEHOSA. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
