import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QuickDine — Restaurant Technology Platform | QR Ordering, Menus, KDS" },
      {
        name: "description",
        content:
          "QuickDine is a SaaS platform for restaurants in India: QR-based ordering, digital menus, kitchen display, table & menu management, and analytics.",
      },
      { property: "og:title", content: "QuickDine — Restaurant Technology Platform" },
      {
        property: "og:description",
        content:
          "QR ordering, digital menus, kitchen & table management for modern restaurants.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Landing,
});

const styles = `
:root{
  --orange:#ff5a00;
  --orange-hover:#e64500;
  --ink:#0a0a0a;
  --ink-2:#1a1a1a;
  --muted:#6b7280;
  --line:#ececec;
  --bg:#fbfaf7;
  --card:#ffffff;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-font-smoothing:antialiased}
html,body{background:var(--bg);color:var(--ink);font-family:'Inter',system-ui,sans-serif;scroll-behavior:smooth}
a{color:inherit;text-decoration:none}
.serif{font-family:'Instrument Serif',serif;font-style:italic;font-weight:400}
.container{max-width:1200px;margin:0 auto;padding:0 24px}

/* NAV */
.nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(14px);background:rgba(251,250,247,.75);border-bottom:1px solid var(--line)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;max-width:1200px;margin:0 auto}
.brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:18px;letter-spacing:-.02em}
.brand-dot{width:28px;height:28px;border-radius:8px;background:var(--ink);color:#fff;display:grid;place-items:center;font-weight:800;font-size:14px}
.nav-links{display:flex;gap:28px;font-size:14px;color:var(--muted);font-weight:500}
.nav-links a:hover{color:var(--ink)}
.nav-cta{background:var(--ink);color:#fff;padding:10px 18px;border-radius:100px;font-size:14px;font-weight:600;border:none;cursor:pointer;transition:transform .15s}
.nav-cta:hover{transform:translateY(-1px)}
@media(max-width:768px){.nav-links{display:none}}

/* HERO */
.hero{position:relative;padding:96px 0 80px;overflow:hidden}
.hero::before{content:"";position:absolute;top:-200px;right:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(255,90,0,.18),transparent 70%);pointer-events:none}
.eyebrow{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1px solid var(--line);padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;color:var(--muted);margin-bottom:24px}
.eyebrow .pulse{width:7px;height:7px;border-radius:50%;background:var(--orange);box-shadow:0 0 0 0 rgba(255,90,0,.7);animation:pulse 2s infinite}
@keyframes pulse{70%{box-shadow:0 0 0 10px rgba(255,90,0,0)}100%{box-shadow:0 0 0 0 rgba(255,90,0,0)}}
.h1{font-size:clamp(40px,7vw,76px);font-weight:800;letter-spacing:-.035em;line-height:1.02;max-width:900px}
.h1 .accent{color:var(--orange)}
.hero-sub{margin-top:24px;font-size:clamp(17px,2vw,20px);color:var(--muted);max-width:620px;line-height:1.5}
.hero-cta{margin-top:36px;display:flex;gap:12px;flex-wrap:wrap}
.btn{padding:14px 26px;border-radius:100px;font-weight:600;font-size:15px;border:none;cursor:pointer;transition:transform .15s,box-shadow .2s;display:inline-flex;align-items:center;gap:8px}
.btn-primary{background:var(--orange);color:#fff;box-shadow:0 10px 30px -10px rgba(255,90,0,.6)}
.btn-primary:hover{transform:translateY(-2px);background:var(--orange-hover)}
.btn-ghost{background:#fff;color:var(--ink);border:1px solid var(--line)}
.btn-ghost:hover{border-color:var(--ink)}
.hero-meta{margin-top:40px;display:flex;gap:32px;flex-wrap:wrap;font-size:13px;color:var(--muted)}
.hero-meta b{color:var(--ink);font-weight:700;font-size:22px;display:block}

/* SECTION */
.section{padding:96px 0;border-top:1px solid var(--line)}
.section-head{max-width:720px;margin-bottom:56px}
.kicker{font-size:12px;font-weight:700;color:var(--orange);text-transform:uppercase;letter-spacing:.12em;margin-bottom:12px}
.h2{font-size:clamp(32px,4.5vw,52px);font-weight:800;letter-spacing:-.03em;line-height:1.05}
.h3{font-size:20px;font-weight:700;letter-spacing:-.01em}
.lead{font-size:17px;color:var(--muted);margin-top:16px;line-height:1.6}

/* FEATURES bento */
.bento{display:grid;grid-template-columns:repeat(6,1fr);gap:18px}
.tile{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:32px;position:relative;overflow:hidden;transition:transform .2s,border-color .2s}
.tile:hover{transform:translateY(-3px);border-color:#d4d4d4}
.tile .icon{width:42px;height:42px;border-radius:12px;background:#fff5ed;color:var(--orange);display:grid;place-items:center;font-size:20px;margin-bottom:18px;border:1px solid #ffe2cf}
.tile p{color:var(--muted);font-size:14px;line-height:1.55;margin-top:8px}
.t-lg{grid-column:span 4}
.t-sm{grid-column:span 2}
@media(max-width:900px){.bento{grid-template-columns:1fr}.t-lg,.t-sm{grid-column:span 1}}

/* PRICING */
.price-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:900px){.price-grid{grid-template-columns:1fr}}
.price{background:#fff;border:1px solid var(--line);border-radius:24px;padding:36px;display:flex;flex-direction:column}
.price.featured{background:var(--ink);color:#fff;border-color:var(--ink);position:relative}
.price.featured .price-sub,.price.featured .price-feat li{color:#a3a3a3}
.price-name{font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--orange)}
.price-amt{font-size:48px;font-weight:800;letter-spacing:-.03em;margin-top:14px}
.price-amt small{font-size:14px;font-weight:500;color:var(--muted)}
.price.featured .price-amt small{color:#a3a3a3}
.price-sub{color:var(--muted);font-size:14px;margin-top:6px;min-height:42px}
.price-feat{list-style:none;margin:24px 0;padding:0;flex:1}
.price-feat li{padding:8px 0;font-size:14px;color:#333;display:flex;gap:10px;align-items:flex-start}
.price-feat li::before{content:"✓";color:var(--orange);font-weight:700}
.price .btn{width:100%;justify-content:center}
.badge-pop{position:absolute;top:-12px;right:24px;background:var(--orange);color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:100px;letter-spacing:.05em}

/* FAQ */
.faq-item{border-bottom:1px solid var(--line);padding:20px 0;cursor:pointer}
.faq-q{display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:17px;gap:24px}
.faq-q span:last-child{color:var(--orange);font-size:24px;transition:transform .2s}
.faq-item.open .faq-q span:last-child{transform:rotate(45deg)}
.faq-a{font-size:15px;color:var(--muted);line-height:1.6;max-height:0;overflow:hidden;transition:max-height .3s,padding .3s}
.faq-item.open .faq-a{max-height:300px;padding-top:14px}

/* ABOUT / CONTACT split */
.split{display:grid;grid-template-columns:1.2fr 1fr;gap:48px;align-items:start}
@media(max-width:900px){.split{grid-template-columns:1fr}}
.info-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:28px}
.info-row{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--line);font-size:14px}
.info-row:last-child{border-bottom:0}
.info-row span:first-child{color:var(--muted)}
.info-row span:last-child{font-weight:600}

/* POLICY pages */
.policy{padding:72px 0;max-width:820px;margin:0 auto}
.policy h2{font-size:32px;font-weight:800;letter-spacing:-.02em;margin-bottom:24px}
.policy h3{font-size:20px;font-weight:700;margin-top:36px;margin-bottom:10px}
.policy p,.policy li{color:#333;font-size:15px;line-height:1.7;margin-bottom:10px}
.policy ul{padding-left:22px}
.policy .meta{color:var(--muted);font-size:13px;margin-bottom:36px}

/* FOOTER */
.footer{background:var(--ink);color:#a3a3a3;padding:72px 0 32px;margin-top:0}
.footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:40px;margin-bottom:48px}
@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr}}
.footer h4{color:#fff;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:18px}
.footer ul{list-style:none;display:flex;flex-direction:column;gap:10px;font-size:14px}
.footer a:hover{color:var(--orange)}
.footer-bottom{border-top:1px solid #262626;padding-top:24px;display:flex;justify-content:space-between;font-size:13px;flex-wrap:wrap;gap:12px}
.footer .brand{color:#fff}

/* SCREENSHOTS placeholder */
.shots{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:900px){.shots{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.shots{grid-template-columns:1fr}}
.shot{aspect-ratio:4/3;border-radius:18px;border:1px solid var(--line);background:linear-gradient(135deg,#fff,#fff5ed);display:grid;place-items:center;padding:24px;text-align:center;font-weight:600;color:var(--ink-2);position:relative;overflow:hidden}
.shot::after{content:"";position:absolute;inset:auto -30% -50% auto;width:240px;height:240px;background:radial-gradient(circle,rgba(255,90,0,.18),transparent 70%)}
.shot small{display:block;color:var(--muted);font-weight:500;font-size:12px;margin-top:6px}
`;

type View = "home" | "about" | "contact" | "pricing" | "features" | "privacy" | "terms" | "refund" | "cancellation" | "faq";

function Landing() {
  const [view, setView] = useState<View>("home");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [view]);

  const go = (v: View) => (e: React.MouseEvent) => { e.preventDefault(); setView(v); };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* NAV */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#" onClick={go("home")} className="brand">
            <span className="brand-dot">Q</span>
            QuickDine
          </a>
          <nav className="nav-links">
            <a href="#" onClick={go("features")}>Features</a>
            <a href="#" onClick={go("pricing")}>Pricing</a>
            <a href="#" onClick={go("about")}>About</a>
            <a href="#" onClick={go("faq")}>FAQ</a>
            <a href="#" onClick={go("contact")}>Contact</a>
          </nav>
          <button className="nav-cta" onClick={() => setView("contact")}>Book demo</button>
        </div>
      </header>

      <main>
        {view === "home" && <Home setView={setView} openFaq={openFaq} setOpenFaq={setOpenFaq} />}
        {view === "features" && <Features />}
        {view === "pricing" && <Pricing />}
        {view === "about" && <About />}
        {view === "contact" && <Contact />}
        {view === "faq" && <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />}
        {view === "privacy" && <Privacy />}
        {view === "terms" && <Terms />}
        {view === "refund" && <Refund />}
        {view === "cancellation" && <Cancellation />}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="brand" style={{ marginBottom: 14 }}>
                <span className="brand-dot" style={{ background: "var(--orange)" }}>Q</span>
                QuickDine
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 320 }}>
                Restaurant technology SaaS platform — QR ordering, digital menus, kitchen & table management.
              </p>
              <p style={{ marginTop: 18, fontSize: 13 }}>
                <b style={{ color: "#fff" }}>QuickDine</b> · Chennai, Tamil Nadu, India
              </p>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#" onClick={go("features")}>Features</a></li>
                <li><a href="#" onClick={go("pricing")}>Pricing</a></li>
                <li><a href="#" onClick={go("faq")}>FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#" onClick={go("about")}>About Us</a></li>
                <li><a href="#" onClick={go("contact")}>Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li><a href="#" onClick={go("privacy")}>Privacy Policy</a></li>
                <li><a href="#" onClick={go("terms")}>Terms & Conditions</a></li>
                <li><a href="#" onClick={go("refund")}>Refund Policy</a></li>
                <li><a href="#" onClick={go("cancellation")}>Cancellation Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2026 QuickDine. All rights reserved.</div>
            <div>support@quickdine.in · +91 90000 00000</div>
          </div>
        </div>
      </footer>
    </>
  );
}

function Home({ setView, openFaq, setOpenFaq }: { setView: (v: View) => void; openFaq: number | null; setOpenFaq: (n: number | null) => void }) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="eyebrow"><span className="pulse" /> Live · Trusted by modern restaurants</div>
          <h1 className="h1">
            The dining experience, <span className="serif accent">reimagined</span> for the QR era.
          </h1>
          <p className="hero-sub">
            QuickDine is the all-in-one restaurant operating system: QR-based ordering, digital menus,
            kitchen display, table management and analytics — built for India's restaurants.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => setView("pricing")}>See pricing →</button>
            <button className="btn btn-ghost" onClick={() => setView("contact")}>Book a demo</button>
          </div>
          <div className="hero-meta">
            <div><b>40%</b>Faster table turnover</div>
            <div><b>0</b>Order errors at the pass</div>
            <div><b>24/7</b>Support in English & Tamil</div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Built for restaurants</div>
            <h2 className="h2">One platform. <span className="serif">Every kind of kitchen.</span></h2>
            <p className="lead">
              QuickDine is for café owners, QSR chains, fine-dining operators and cloud kitchens who want to
              modernize operations without juggling six different tools.
            </p>
          </div>
          <div className="bento">
            <Tile cls="t-lg" icon="◔" title="QR Ordering" desc="Guests scan, browse a beautiful digital menu, and order directly from their phone. No app downloads, no waiting." />
            <Tile cls="t-sm" icon="◐" title="Digital Menus" desc="Update prices, availability and photos in seconds across every table." />
            <Tile cls="t-sm" icon="◑" title="Table Management" desc="Live floor view, merge/split bills, manage covers and turnover." />
            <Tile cls="t-lg" icon="◕" title="Kitchen Display System" desc="Tickets flow straight from table to kitchen. No paper, no shouted orders, no missed items at the pass." />
            <Tile cls="t-lg" icon="●" title="Menu Management" desc="Categories, modifiers, combos, taxes and 86'd items — all controlled from one dashboard." />
            <Tile cls="t-sm" icon="◯" title="Analytics" desc="Daily sales, top items, peak hours and staff performance." />
          </div>
        </div>
      </section>

      {/* PRICING preview */}
      <PricingInline />

      {/* FAQ preview */}
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <div className="kicker">FAQ</div>
            <h2 className="h2">Questions, <span className="serif">answered.</span></h2>
          </div>
          <FAQList openFaq={openFaq} setOpenFaq={setOpenFaq} />
        </div>
      </section>
    </>
  );
}

function Tile({ cls, icon, title, desc }: { cls: string; icon: string; title: string; desc: string }) {
  return (
    <div className={`tile ${cls}`}>
      <div className="icon">{icon}</div>
      <h3 className="h3">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function PricingInline() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Pricing</div>
          <h2 className="h2">Simple, transparent, <span className="serif">monthly.</span></h2>
          <p className="lead">No setup fees. Cancel anytime. All prices in INR, billed monthly.</p>
        </div>
        <PriceCards />
      </div>
    </section>
  );
}

function PriceCards() {
  return (
    <div className="price-grid">
      <div className="price">
        <div className="price-name">Starter</div>
        <div className="price-amt">₹499<small>/month</small></div>
        <div className="price-sub">For single-location cafés getting started with QR ordering.</div>
        <ul className="price-feat">
          <li>QR ordering for up to 15 tables</li>
          <li>Digital menu management</li>
          <li>Basic analytics</li>
          <li>Email support</li>
        </ul>
        <button className="btn btn-ghost">Start with Starter</button>
      </div>
      <div className="price featured">
        <span className="badge-pop">Most popular</span>
        <div className="price-name">Growth</div>
        <div className="price-amt">₹999<small>/month</small></div>
        <div className="price-sub">For busy restaurants that need the kitchen display and table management.</div>
        <ul className="price-feat">
          <li>Unlimited tables & QR codes</li>
          <li>Kitchen Display System (KDS)</li>
          <li>Table management & floor view</li>
          <li>Advanced analytics & exports</li>
          <li>Priority chat support</li>
        </ul>
        <button className="btn btn-primary">Choose Growth</button>
      </div>
      <div className="price">
        <div className="price-name">Enterprise</div>
        <div className="price-amt">Custom<small></small></div>
        <div className="price-sub">For multi-location groups, cloud kitchens and chains.</div>
        <ul className="price-feat">
          <li>Multi-outlet dashboard</li>
          <li>Custom integrations</li>
          <li>Dedicated success manager</li>
          <li>SLA-backed support</li>
        </ul>
        <button className="btn btn-ghost">Contact sales</button>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Product</div>
          <h2 className="h2">Everything you need to run a <span className="serif">modern restaurant.</span></h2>
          <p className="lead">A look at the core surfaces of QuickDine. Screenshots are representative of the product UI.</p>
        </div>
        <div className="shots">
          <div className="shot">QR Ordering<small>Guest-facing scan-to-order flow</small></div>
          <div className="shot">Table Management<small>Live floor & cover tracking</small></div>
          <div className="shot">Kitchen Dashboard<small>KDS ticket flow</small></div>
          <div className="shot">Menu Management<small>Items, modifiers, taxes</small></div>
          <div className="shot">Analytics<small>Sales, items, peak hours</small></div>
          <div className="shot">Multi-outlet<small>Group-level dashboard</small></div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Pricing</div>
          <h2 className="h2">Pick a plan that <span className="serif">fits your floor.</span></h2>
          <p className="lead">All plans are billed monthly in INR. Includes hosting, updates and support. GST extra where applicable.</p>
        </div>
        <PriceCards />
        <p style={{ marginTop: 28, fontSize: 13, color: "var(--muted)" }}>
          Billing cycle: monthly, auto-renewing. Payments processed securely via Razorpay / Cashfree. Cancel anytime from your dashboard.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="kicker">About</div>
          <h2 className="h2">We're modernizing how <span className="serif">India dines out.</span></h2>
          <p className="lead">
            QuickDine was founded to modernize restaurant operations through digital ordering, smart menu
            management and streamlined customer experiences.
          </p>
        </div>
        <div className="split">
          <div>
            <h3 className="h3" style={{ marginBottom: 12 }}>Our mission</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 16 }}>
              Indian restaurants lose time, money and customer goodwill to slow ordering, mis-fired tickets
              and disconnected tools. QuickDine replaces all of that with one calm, reliable platform — so
              owners can focus on the food and the floor, not the paperwork.
            </p>
            <h3 className="h3" style={{ marginTop: 32, marginBottom: 12 }}>The problem we solve</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 16 }}>
              Most restaurants still juggle paper menus, manual KOTs and three different apps for billing,
              inventory and ordering. QuickDine unifies QR ordering, digital menus, kitchen display and
              table management in one subscription.
            </p>
            <h3 className="h3" style={{ marginTop: 32, marginBottom: 12 }}>Founder</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 16 }}>
              QuickDine is founded and operated by the QuickDine team in Chennai, India. We come from
              backgrounds in restaurant operations and software engineering.
            </p>
          </div>
          <div className="info-card">
            <h3 className="h3" style={{ marginBottom: 16 }}>Company snapshot</h3>
            <div className="info-row"><span>Business name</span><span>QuickDine</span></div>
            <div className="info-row"><span>Business type</span><span>Restaurant Tech SaaS</span></div>
            <div className="info-row"><span>Country</span><span>India</span></div>
            <div className="info-row"><span>Headquarters</span><span>Chennai, TN</span></div>
            <div className="info-row"><span>Support</span><span>support@quickdine.in</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Contact</div>
          <h2 className="h2">Talk to us. <span className="serif">We answer.</span></h2>
          <p className="lead">For sales, support, partnerships or just to say hi — reach us through any of the channels below.</p>
        </div>
        <div className="split">
          <div className="info-card">
            <div className="info-row"><span>Email</span><span>support@quickdine.in</span></div>
            <div className="info-row"><span>Phone</span><span>+91 90000 00000</span></div>
            <div className="info-row"><span>Address</span><span>Chennai, Tamil Nadu, India</span></div>
            <div className="info-row"><span>Hours</span><span>Mon – Sat, 10:00 – 19:00 IST</span></div>
          </div>
          <div>
            <h3 className="h3" style={{ marginBottom: 12 }}>Sales & demos</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              Want to see QuickDine in action at your restaurant? Email <b style={{ color: "var(--ink)" }}>support@quickdine.in</b>
              {" "}with your restaurant name, city and number of tables, and we'll schedule a 20-minute demo.
            </p>
            <h3 className="h3" style={{ marginTop: 24, marginBottom: 12 }}>Existing customer support</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              Customers can reach priority support directly from the in-app help menu, or by replying to any
              QuickDine email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ({ openFaq, setOpenFaq }: { openFaq: number | null; setOpenFaq: (n: number | null) => void }) {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 820 }}>
        <div className="section-head">
          <div className="kicker">FAQ</div>
          <h2 className="h2">Questions, <span className="serif">answered.</span></h2>
        </div>
        <FAQList openFaq={openFaq} setOpenFaq={setOpenFaq} />
      </div>
    </section>
  );
}

const FAQS = [
  { q: "Does QuickDine process restaurant payments?", a: "QuickDine is a software subscription. We do not collect payments on behalf of restaurants. When restaurants choose to accept digital payments from their guests, payments are processed by integrated providers like Razorpay or Cashfree directly into the restaurant's own account." },
  { q: "How do subscriptions work?", a: "QuickDine is billed monthly in INR. You pick a plan (Starter, Growth or Enterprise), pay via Razorpay/Cashfree, and get instant access. The subscription auto-renews each month and can be cancelled anytime from your dashboard." },
  { q: "Can restaurants cancel anytime?", a: "Yes. You can cancel from your dashboard at any time. Cancellation stops future renewals; your plan remains active until the end of the current billing cycle." },
  { q: "What support is provided?", a: "All plans include email support. Growth includes priority chat support. Enterprise includes a dedicated success manager with an SLA. Support is available Mon–Sat, 10:00–19:00 IST." },
  { q: "Is QuickDine a payment, lending or crypto product?", a: "No. QuickDine is a SaaS platform for restaurants. We are not a lender, not a crypto exchange, and we do not deal in any prohibited categories. Restaurants subscribe to use our software." },
];

function FAQList({ openFaq, setOpenFaq }: { openFaq: number | null; setOpenFaq: (n: number | null) => void }) {
  return (
    <div>
      {FAQS.map((f, i) => (
        <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
          <div className="faq-q"><span>{f.q}</span><span>+</span></div>
          <div className="faq-a">{f.a}</div>
        </div>
      ))}
    </div>
  );
}

function Privacy() {
  return (
    <div className="container">
      <div className="policy">
        <h2>Privacy Policy</h2>
        <div className="meta">Last updated: June 2026</div>
        <p>This Privacy Policy describes how QuickDine ("we", "us", "our") collects, uses and protects information when you use our restaurant technology platform.</p>

        <h3>1. Information we collect</h3>
        <ul>
          <li>Name</li><li>Email address</li><li>Phone number</li>
          <li>Payment information (processed by our payment partners; we do not store full card details)</li>
          <li>Usage data (pages visited, features used, device & browser info)</li>
        </ul>

        <h3>2. Why we collect it</h3>
        <ul>
          <li>To create and manage your QuickDine account</li>
          <li>To provide customer support</li>
          <li>To improve and secure our services</li>
          <li>To send service-related communication</li>
        </ul>

        <h3>3. Data security</h3>
        <p>QuickDine employs reasonable administrative, technical and physical security measures to protect user information against unauthorized access, alteration or disclosure.</p>

        <h3>4. Third parties</h3>
        <p>We share limited information with the following service providers to operate QuickDine:</p>
        <ul>
          <li>Razorpay — payment processing</li>
          <li>Cashfree — payment processing</li>
          <li>Google Analytics — usage analytics</li>
          <li>Hosting providers — application hosting and storage</li>
        </ul>

        <h3>5. Your rights</h3>
        <ul>
          <li>Request deletion of your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>To exercise any of these rights, email <b>support@quickdine.in</b>.</p>

        <h3>6. Contact</h3>
        <p>For any privacy questions, contact support@quickdine.in.</p>
      </div>
    </div>
  );
}

function Terms() {
  return (
    <div className="container">
      <div className="policy">
        <h2>Terms & Conditions</h2>
        <div className="meta">Last updated: June 2026</div>

        <h3>1. Eligibility</h3>
        <p>Users must provide accurate, current and complete information while using QuickDine and keep it updated.</p>

        <h3>2. Services</h3>
        <p>QuickDine provides restaurant ordering and management software, including QR ordering, digital menus, kitchen display, table management and analytics.</p>

        <h3>3. User responsibilities</h3>
        <ul>
          <li>No fraud or misrepresentation</li>
          <li>No abuse of the platform or other users</li>
          <li>No illegal content, listings or activity</li>
        </ul>

        <h3>4. Subscription</h3>
        <p>Access to premium features requires an active paid subscription. Subscriptions renew monthly until cancelled.</p>

        <h3>5. Termination</h3>
        <p>QuickDine reserves the right to suspend or terminate accounts that violate these terms.</p>

        <h3>6. Limitation of liability</h3>
        <p>QuickDine shall not be liable for any indirect, incidental or consequential damages arising from use of the service.</p>

        <h3>7. Governing law</h3>
        <p>These terms are governed by the laws of India. Courts in Chennai, Tamil Nadu shall have exclusive jurisdiction.</p>

        <h3>8. Contact</h3>
        <p>For questions about these terms, email support@quickdine.in.</p>
      </div>
    </div>
  );
}

function Refund() {
  return (
    <div className="container">
      <div className="policy">
        <h2>Refund Policy</h2>
        <div className="meta">Last updated: June 2026</div>

        <h3>Monthly subscriptions</h3>
        <p>Refunds may be issued within <b>7 days</b> of the initial purchase of a QuickDine subscription, provided no significant usage of the platform has occurred (e.g. no live orders processed, no extensive menu setup).</p>
        <p>After the 7-day window, subscription payments are non-refundable. Cancelling a subscription will stop future renewals but does not refund the current billing period.</p>

        <h3>How to request a refund</h3>
        <p>Email <b>support@quickdine.in</b> from the email address associated with your QuickDine account, with the subject "Refund request". Approved refunds are processed to the original payment method within 7–10 business days.</p>
      </div>
    </div>
  );
}

function Cancellation() {
  return (
    <div className="container">
      <div className="policy">
        <h2>Cancellation Policy</h2>
        <div className="meta">Last updated: June 2026</div>
        <p>Users may cancel their QuickDine subscription at any time from the billing section of their dashboard, or by emailing support@quickdine.in.</p>
        <p>Cancellation will prevent any future automatic renewals. Your plan remains active until the end of the current billing cycle, after which access to paid features will be paused.</p>
        <p>You can re-activate your subscription at any time by signing back in and choosing a plan.</p>
      </div>
    </div>
  );
}
