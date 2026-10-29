
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
import { useEffect, useRef, useState } from "react";
import saferFutureImage from "./assets/mkitten.jpeg";
import aboutImage from "./assets/streetdog.jpeg";
import rescueImage from "./assets/blackdog.jpeg";
import communityImage from "./assets/punda.jpeg";
import kittenHeroImage from "./assets/kitten.jpeg";
import pundaHeroImage from "./assets/punda 2.jpeg";
import babyDogHeroImage from "./assets/babydog.jpeg";
import nehosaLogo from "./assets/logo.jpeg";
import "./App.css";

const heroImages = [kittenHeroImage, pundaHeroImage, babyDogHeroImage];

const animals = [
  {
    slug: "rescue-rehabilitation",
    name: "Rescue & Rehabilitation",
    category: "ANIMAL WELFARE",
    description: "Helping animals in need through rescue, care, rehabilitation and responsible rehoming.",
    detail: "NEHOSA works toward a safer path for street and mistreated animals. This work focuses on responding with compassion, supporting recovery and encouraging responsible long-term care.",
    focusAreas: [
      "Connect animals in distress with appropriate care and veterinary assessment.",
      "Support food, shelter and recovery while resources are available.",
      "Encourage responsible adoption and ongoing care for animals who are ready for a home.",
    ],
    image: rescueImage,
  },
  {
    slug: "community-education",
    name: "Community Education",
    category: "COMMUNITY",
    description: "Encouraging compassionate treatment of animals through education and community awareness.",
    detail: "Lasting animal welfare depends on informed, caring communities. NEHOSA aims to share practical guidance that helps people understand animal needs and make responsible choices.",
    focusAreas: [
      "Promote kind, responsible treatment of animals.",
      "Share awareness about vaccination and rabies prevention.",
      "Encourage families and communities to seek veterinary help when animals need it.",
    ],
    image: communityImage,
  },
  {
    slug: "a-safer-future",
    name: "A Safer Future",
    category: "PROTECTION",
    description: "Promoting animal protection, responsible care and a kinder future for every living being.",
    detail: "NEHOSA's vision is a future where animals receive humane care and communities have the support to protect their wellbeing. Progress comes from prevention, access to care and cooperation.",
    focusAreas: [
      "Support animal vaccination and preventive veterinary care.",
      "Promote humane approaches to animal population management.",
      "Build partnerships that help communities care for animals over time.",
    ],
    image: saferFutureImage,
  },
];

const opportunities = [
  {
    slug: "volunteer",
    name: "Volunteer with NEHOSA",
    category: "GET INVOLVED",
    detail: "Share your time, skills and compassion to help NEHOSA support animals and communities across Tanzania. Start by contacting us to discuss your interests and the needs we can support together.",
    detailSectionTitle: "Ways to volunteer",
    focusAreas: [
      "Help with animal-care, feeding or transport tasks when arranged with the team.",
      "Support community education, awareness or fundraising activities.",
      "Offer useful professional skills and follow agreed safety and animal-welfare guidance.",
    ],
    detailNote: "Volunteer activities depend on current needs, availability and suitable arrangements.",
    image: aboutImage,
    actionLabel: "Contact NEHOSA",
    actionHref: "/#contact",
    actionType: "contact",
    backLabel: "← Back to get involved",
    backHref: "/#involved",
  },
  {
    slug: "partner",
    name: "Partner with NEHOSA",
    category: "PARTNERSHIPS",
    detail: "Organizations, veterinary professionals, community groups and businesses can help strengthen animal welfare through shared knowledge, services and resources. We welcome conversations about practical ways to work together.",
    detailSectionTitle: "Ways to partner",
    focusAreas: [
      "Support animal-care priorities such as food, shelter or veterinary services.",
      "Collaborate on vaccination awareness, community education or outreach.",
      "Contribute relevant professional skills, supplies, funding or local connections.",
    ],
    detailNote: "Partnership activities should match NEHOSA current priorities and each partner capacity.",
    image: saferFutureImage,
    actionLabel: "Let's collaborate",
    actionHref: "/#contact",
    actionType: "contact",
    backLabel: "← Back to get involved",
    backHref: "/#involved",
  },
];

const detailPages = [...animals, ...opportunities];
function getWorkFromLocation() {
  const slug = new URLSearchParams(window.location.search).get("work");
  return detailPages.find((item) => item.slug === slug) ?? null;
}

function WorkDetailPage({ work, onAction }) {
  return (
    <section className="section work-detail-section">
      <div className="container">
        <a className="work-detail-back" href={work.backHref ?? "/#work"}>{work.backLabel ?? "← Back to our work"}</a>
        <div className="work-detail-grid">
          <div className="work-detail-image"><img src={work.image} alt={work.name} /></div>
          <div className="work-detail-content">
            <span className="eyebrow">{work.category}</span>
            <h1>{work.name}</h1>
            <p className="work-detail-intro">{work.detail}</p>
            <h2>{work.detailSectionTitle ?? "How we work toward this"}</h2>
            <ul>{work.focusAreas.map((focus) => <li key={focus}>{focus}</li>)}</ul>
            <p className="work-detail-note">{work.detailNote ?? "These are current focus areas; activities depend on available resources and community needs."}</p>
            <div className="work-detail-actions">
              <a className="button button-primary" href={work.actionHref ?? "/#donate"} onClick={(event) => onAction(event, work.actionHref ?? "/#donate")}>{work.actionType === "contact" ? <HandHeart size={17} /> : <Heart size={17} />} {work.actionLabel ?? "Donate to NEHOSA"}</a>
              <a className="work-detail-home" href="/#home">Return to home</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [donationAmount, setDonationAmount] = useState("25000");
  const [donationFrequency, setDonationFrequency] = useState("Once");
  const [selectedWork, setSelectedWork] = useState(getWorkFromLocation);
  const pendingSection = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  const pageLink = (section) => selectedWork ? `/#${section}` : `#${section}`;

  const navigateFromDetail = (event, href) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const target = new URL(href, window.location.origin);
    if (target.origin !== window.location.origin || !target.hash) return;
    event.preventDefault();
    pendingSection.current = target.hash.slice(1);
    window.history.pushState({}, "", `${target.pathname}${target.hash}`);
    setSelectedWork(null);
  };

  useEffect(() => {
    if (!selectedWork && pendingSection.current) {
      document.getElementById(pendingSection.current)?.scrollIntoView({ behavior: "smooth" });
      pendingSection.current = null;
    }
  }, [selectedWork]);

  const openWorkPage = (event, work) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set("work", work.slug);
    url.hash = "";
    window.history.pushState({ work: work.slug }, "", `${url.pathname}${url.search}`);
    setSelectedWork(work);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const syncWorkPage = () => {
      setSelectedWork(getWorkFromLocation());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("popstate", syncWorkPage);
    return () => window.removeEventListener("popstate", syncWorkPage);
  }, []);

  useEffect(() => {
    const slideshow = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, 5500);
    return () => window.clearInterval(slideshow);
  }, []);

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
          <a className="brand" href={pageLink("home")} onClick={closeMenu}>
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
            <a href={pageLink("home")} onClick={closeMenu}>Home</a>
            <a href={pageLink("about")} onClick={closeMenu}>About us</a>
            <a href={pageLink("work")} onClick={closeMenu}>Our work</a>
            <a href={pageLink("involved")} onClick={closeMenu}>Get involved</a>
            <a className="nav-donate" href={pageLink("donate")} onClick={closeMenu}>
              <Heart size={16} /> Donate
            </a>
          </nav>
        </div>
      </header>

      <main>
        {selectedWork ? (
          <WorkDetailPage work={selectedWork} onAction={navigateFromDetail} />
        ) : (
          <>
        <section className="hero" id="home">
          <div className="hero-slides" aria-hidden="true">
            {heroImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt=""
                className={index === activeHeroImage ? "hero-slide is-active" : "hero-slide"}
              />
            ))}
          </div>
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow hero-eyebrow">
              <PawPrint size={16} /> A NEW HOPE FOR EVERY LIFE
            </span>
            <h1>
              Welcome to NEHOSA,
              <br />
              <span>where a kinder world starts.</span>
            </h1>
            <p>
              NEHOSA works towards a future where animals are treated with
              kindness and communities are empowered to make a difference.
            </p>
            <div className="hero-actions">
              <a href={pageLink("work")} className="button button-light">
                Discover our work <ArrowRight size={18} />
              </a>
              <a href={pageLink("involved")} className="button button-outline">
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
            <a className="mission-item mission-link" href={`/?work=${animals[0].slug}`} onClick={(event) => openWorkPage(event, animals[0])}>
              <span className="mission-icon"><Heart /></span>
              <div><strong>Compassion</strong><p>Care for animals and people.</p></div>
            </a>
            <a className="mission-item mission-link" href={`/?work=${animals[2].slug}`} onClick={(event) => openWorkPage(event, animals[2])}>
              <span className="mission-icon"><ShieldCheck /></span>
              <div><strong>Protection</strong><p>Promote safety and welfare.</p></div>
            </a>
            <a className="mission-item mission-link" href={`/?work=${animals[1].slug}`} onClick={(event) => openWorkPage(event, animals[1])}>
              <span className="mission-icon"><Users /></span>
              <div><strong>Community</strong><p>Create change together.</p></div>
            </a>
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
              <h2>Care and hope for street animals across Tanzania.</h2>
              <p>
                New Hope for Society and Animals (<strong>NEHOSA</strong>) is an animal-welfare
                initiative under New Hope for Women and Youth Organization, a
                registered non-governmental organization in Tanzania. The
                organization was registered on 30 October 2023 under the
                Non-Governmental Organizations Act, 2002.
              </p>
              <p>
                <strong>NEHOSA</strong> works to improve animal welfare across Tanzania. We
                help street and mistreated animals by providing care, shelter,
                food and vaccinations.
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


              <a href={pageLink("involved")} className="text-link">
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
                    <a href={`/?work=${item.slug}`} className="card-link" onClick={(event) => openWorkPage(event, item)}>
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
                <a href={`/?work=${opportunities[0].slug}`} onClick={(event) => openWorkPage(event, opportunities[0])}>Learn about volunteering <ArrowRight size={16} /></a>
              </div>
              <div className="involve-card">
                <span className="involve-icon"><Users /></span>
                <h3>Partner with us</h3>
                <p>Work together to support animal welfare and communities.</p>
                <a href={`/?work=${opportunities[1].slug}`} onClick={(event) => openWorkPage(event, opportunities[1])}>Explore partnership <ArrowRight size={16} /></a>
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
                <CreditCard size={18} /> Continue to Pesapal
              </button>
              <p className="donation-unavailable">Online donations are coming soon. Pesapal checkout will be connected here after merchant setup is complete.</p>
              <p className="donation-security"><LockKeyhole size={14} /> Secure payment processing will be provided by the configured gateway.</p>
            </form>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand footer-brand-link" href={pageLink("home")}>
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
            <a href={pageLink("about")}>About us</a>
            <a href={pageLink("work")}>Our work</a>
            <a href={pageLink("involved")}>Get involved</a>
            <a href={pageLink("donate")}>Donate</a>
          </div>

          <div className="footer-contact">
            <h3>Get in touch</h3>
            <p><MapPin size={17} /> Ilala, Dar Es Salaam, Tanzania</p>
            <p><Mail size={17} /> <a href="mailto:foryouthnewhope@gmail.com" style={{ color: "inherit" }}>foryouthnewhope@gmail.com</a></p>
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
          <a href={pageLink("home")}>Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
