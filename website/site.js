const data = window.SEQUOIA_DATA;

const pages = [
  ["/", "Home", "home"],
  ["/about", "About", "about"],
  ["/schools-brands", "Schools & Brands", "schools"],
  ["/programs", "Programs", "programs"],
  ["agentech-menu", "Agentech", "agentech-menu"],
  ["news-menu", "News & Events", "news-menu"],
  ["/partnership", "Partnership", "partnership"],
  ["/careers", "Careers", "careers"],
  ["/contact", "Contact", "contact"]
];

const utilityPages = new Set(["/partnership", "/careers", "/contact"]);
const agentechPages = [
  ["/agentech-education", "Agentech Education"],
  ["/ai-club", "AI Club"]
];
const newsPages = [
  ["/news-events", "News & Events"],
  ["/community-impact", "Community Impact"]
];

function pageName() {
  return document.body.dataset.page || "home";
}

function brandSlug() {
  return document.body.dataset.brand || "";
}

function activeHref() {
  const path = location.pathname.replace(/\/$/, "") || "/";
  return path.replace(/\.html$/, "");
}

function nav() {
  const active = activeHref();
  const mainPages = pages.filter(([href]) => !utilityPages.has(href));
  const dropdown = (label, items, isActive) => `
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger ${isActive ? "active" : ""}" type="button" aria-haspopup="true" aria-expanded="false">${label}</button>
        <div class="nav-dropdown-menu">
          ${items.map(([pageHref, pageLabel]) => `<a class="${active === pageHref ? "active" : ""}" href="${pageHref}">${pageLabel}</a>`).join("")}
        </div>
      </div>`;
  const navItem = ([href, label]) => {
    if (href !== "agentech-menu") {
      if (href === "news-menu") {
        return dropdown(label, newsPages, newsPages.some(([pageHref]) => active === pageHref));
      }
      return `<a class="${active === href ? "active" : ""}" href="${href}">${label}</a>`;
    }

    return dropdown(label, agentechPages, agentechPages.some(([pageHref]) => active === pageHref));
  };
  return `
    <header class="site-header">
      <div class="nav">
        <a class="brand-lockup" href="/">
          <img src="images/sequoia-education-group-white-logo.png" alt="Sequoia Education Group logo">
          <span>${data.name}<br>${data.zhName}</span>
        </a>
        <div class="nav-panel">
          <nav class="nav-links nav-links-main" aria-label="Main navigation">
            ${mainPages.map(navItem).join("")}
          </nav>
        </div>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <div>
          <strong>${data.name} / ${data.zhName}</strong>
          <p>${data.slogan}<br>${data.zhSlogan}</p>
          <p>${data.address}<br>${data.email}<br>${data.domain}</p>
          <p class="footer-utility-links"><a href="/partnership">Partnership</a><span>|</span><a href="/careers">Careers</a><span>|</span><a href="/contact">Contact</a></p>
        </div>
        <div>
          <strong>Website links / \u7b2c\u4e09\u6587\u4ef6\u94fe\u63a5</strong>
          <p>${data.externalLinks.map(([name, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${name}</a>`).join("<br>")}</p>
        </div>
      </div>
    </footer>`;
}

function pageHeader(title, zhTitle, text, zhText) {
  return `
    <section class="section page-hero-section">
      <p class="eyebrow">${data.name}</p>
      <h1>${title}</h1>
      <p class="page-lede">${text}</p>
      <p class="page-lede">${zhText}</p>
    </section>`;
}

function card(title, meta, text, zhText, extra = "") {
  return `
    <article class="card">
      <p class="meta">${meta}</p>
      <h3>${title}</h3>
      <p>${text}</p>
      ${zhText ? `<p>${zhText}</p>` : ""}
      ${extra}
    </article>`;
}

function brandCard(brand) {
  const extra = `
    <p><strong>Location:</strong> ${brand.location}</p>
    <div class="button-row">
      <a class="button light" href="/brand-${brand.slug}">Learn More / \u4e86\u89e3\u66f4\u591a</a>
      ${brand.url ? `<a class="button light" href="${brand.url}" target="_blank" rel="noreferrer">Official Site</a>` : ""}
    </div>`;
  return `
    <article class="card">
      <div class="card-logo"><img src="${brand.image}" alt="${brand.name} logo or image"></div>
      <p class="meta">${brand.year} / ${brand.type}</p>
      <h3>${brand.name}</h3>
      <p>${brand.zhType}</p>
      <p>${brand.summary}</p>
      <p>${brand.zhSummary}</p>
      ${extra}
    </article>`;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-inner">
        <div>
          <p class="eyebrow">${data.zhName}</p>
          <h1>${data.name}</h1>
          <p class="lede">${data.slogan}<br>${data.zhSlogan}</p>
          <div class="button-row">
            <a class="button" href="/schools-brands">Explore Our Schools</a>
            <a class="button secondary" href="/news-events">News & Events</a>
            <a class="button secondary" href="/partnership">Partner With Us</a>
          </div>
        </div>
        <div class="hero-card">
          <img src="images/sequoia-education-group-red-logo.jpg" alt="Sequoia Education Group logo">
          <h3>Official Positioning / \u5b98\u65b9\u5b9a\u4f4d</h3>
          <p>${data.positioning.en}</p>
          <p>${data.positioning.zh}</p>
        </div>
      </div>
    </section>
    <section class="section stats-grid">
      ${data.stats.map(([en, zh]) => `<div class="stat"><strong>${en}</strong><span>${zh}</span></div>`).join("")}
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">About Snapshot / \u5173\u4e8e\u5feb\u7167</p>
          <h2>A ten-year Southern California education ecosystem</h2>
          <p>Started in Walnut in 2015, Sequoia has grown from one Montessori preschool into a multi-brand education group spanning preschool, after-school learning, teacher training, academic planning, community service, wellness, and future AI education.</p>
          <p>Sequoia \u4e8e 2015 \u5e74\u4ece Walnut \u7684\u7b2c\u4e00\u6240\u8499\u7279\u68ad\u5229\u5e7c\u513f\u56ed\u8d77\u6b65,\u5341\u5e74\u53d1\u5c55\u4e3a\u8986\u76d6\u5e7c\u513f\u6559\u80b2\u3001\u8bfe\u540e\u6559\u80b2\u3001\u6559\u5e08\u57f9\u8bad\u3001\u5347\u5b66\u89c4\u5212\u3001\u516c\u76ca\u793e\u533a\u3001\u8eab\u5fc3\u5065\u5eb7\u4e0e\u672a\u6765 AI \u6559\u80b2\u7684\u591a\u54c1\u724c\u6559\u80b2\u751f\u6001\u3002</p>
        </div>
      </div>
      <div class="program-grid">
        ${data.programs.slice(0, 8).map((program) => card(program[0], program[1], program[2], program[3])).join("")}
      </div>
    </section>
    <section class="section alt"><div class="section-inner">
      <div class="section-head"><div><p class="eyebrow">Brand Matrix / \u54c1\u724c\u77e9\u9635</p><h2>Schools, programs, foundation, wellness, and future learning</h2></div></div>
      <div class="card-grid">${data.brands.map(brandCard).join("")}</div>
    </div></section>
    <section class="section">
      <div class="feature-panel">
        <div class="feature-logo-panel">
          <img src="images/agentech-education-logo.png" alt="Agentech Education logo">
        </div>
        <div class="feature-content">
          <p class="eyebrow">Agentech Education Preview / AI \u672a\u6765\u5b66\u4e60\u9884\u89c8</p>
          <h2>AI literacy, robotics, and future-ready learning for K-12</h2>
          <p>${data.agentech.role}</p>
          <p>${data.agentech.zhRole}</p>
          <div class="button-row"><a class="button" href="https://www.agent-tech.ai/" target="_blank" rel="noreferrer">View Agentech</a></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">10-Year Timeline / \u5341\u5e74\u65f6\u95f4\u7ebf</p><h2>Rooted growth</h2></div></div>
      <div class="timeline">
        ${[
          ["2015", "Walnut International Montessori Preschool founded / Walnut \u521b\u6821"],
          ["2019", "Learning Tree Montessori of Arcadia / Arcadia \u6821\u533a"],
          ["2020", "Learning Tree Walnut Education Center / Walnut \u8bfe\u540e\u6559\u80b2\u4e2d\u5fc3"],
          ["2023", "Montessori of Anaheim / Anaheim \u6821\u533a"],
          ["2024", "Montessori Teacher Preparation of California / \u6559\u5e08\u57f9\u8bad"],
          ["2025", "Yoga Me & Beyond / Wellness and community learning"],
          ["Coming Next", "Agentech Education / AI Future Learning"]
        ].map(([year, text]) => `<div class="timeline-item"><strong>${year}</strong><p>${text}</p></div>`).join("")}
      </div>
    </section>
    <section class="section alt"><div class="section-inner">
      <div class="split">
        <div>
          <p class="eyebrow">Founder Message / \u521b\u59cb\u4eba\u5bc4\u8bed</p>
          <h2>Rooted in care, growing with families</h2>
          <p>Connie's message should be a short, warm note about ten years of building schools with teachers, families, and communities. A professional photo and bio should be added before launch.</p>
          <p>Connie \u7684\u5bc4\u8bed\u5e94\u7b80\u77ed\u6e29\u6696,\u8bb2\u8ff0\u5341\u5e74\u6765\u4e0e\u8001\u5e08\u3001\u5bb6\u5ead\u548c\u793e\u533a\u5171\u540c\u5efa\u8bbe\u5b66\u6821\u7684\u521d\u5fc3\u3002\u4e0a\u7ebf\u524d\u9700\u8865\u5145\u4e13\u4e1a\u7167\u7247\u4e0e founder bio\u3002</p>
        </div>
        <div class="card">
          <p class="eyebrow">Final CTA / \u884c\u52a8\u5165\u53e3</p>
          <h3>Enroll Now / Join Our Team / Partner With Us</h3>
          <div class="button-row">
            <a class="button" href="/contact">Enroll Now</a>
            <a class="button light" href="/careers">Join Our Team</a>
            <a class="button light" href="/partnership">Partner With Us</a>
          </div>
        </div>
      </div>
    </div></section>`;
}

function renderAbout() {
  return `
    ${pageHeader("About Sequoia Education Group", "\u5173\u4e8e\u7ea2\u6749\u6559\u80b2\u96c6\u56e2", "Our Story, Mission & Values, 10-Year Milestone, Founder Message, Leadership/Team, Awards & Recognition.", "\u5305\u542b\u96c6\u56e2\u6545\u4e8b\u3001\u4f7f\u547d\u4ef7\u503c\u3001\u5341\u5e74\u91cc\u7a0b\u7891\u3001\u521b\u59cb\u4eba\u5bc4\u8bed\u3001\u9886\u5bfc\u56e2\u961f\u3001\u5956\u9879\u8363\u8a89\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="section-head">
        <div>
          <p class="eyebrow">Group Story Gallery / \u96c6\u56e2\u6545\u4e8b\u8f6e\u64ad</p>
          <h2>Sequoia at a glance</h2>
        </div>
      </div>
      <div class="about-roll" aria-label="Sequoia group facts carousel">
        <div class="about-roll-track">
          ${[...data.facts, ...data.facts].map((f) => `<article class="card about-slide">
            <div class="about-slide-media">Image coming soon</div>
            <p class="meta">${f[2]}</p>
            <h3>${f[0]}</h3>
            <p>${f[1]}</p>
            <p>${f[3]}</p>
          </article>`).join("")}
        </div>
      </div>
    </div></section>
    <section class="section">
      <div class="split">
        <div>
          <h2>Mission & Values / \u4f7f\u547d\u4e0e\u4ef7\u503c</h2>
          <p>${data.keywords}</p>
          <p>${data.zhKeywords}</p>
          <p>Sequoia should present itself as a trusted education group with local roots, a growing ecosystem, and a careful future-learning vision.</p>
          <p>Sequoia \u5e94\u5448\u73b0\u4e3a\u6709\u672c\u5730\u6839\u57fa\u3001\u4e0d\u65ad\u6210\u957f\u3001\u5e76\u8c28\u614e\u5e03\u5c40\u672a\u6765\u5b66\u4e60\u7684\u53ef\u4fe1\u6559\u80b2\u96c6\u56e2\u3002</p>
        </div>
        <ul class="detail-list">
          <li><strong>Founder Message:</strong> Connie short message and professional photo needed. / \u9700\u8981 Connie \u4e13\u4e1a\u5934\u50cf\u4e0e\u7b80\u77ed\u5bc4\u8bed\u3002</li>
          <li><strong>Leadership/Team:</strong> add real leadership and team profiles. / \u8865\u5145\u771f\u5b9e\u9886\u5bfc\u56e2\u961f\u8d44\u6599\u3002</li>
          <li><strong>Awards & Recognition:</strong> add certificate and Walnut city honor photos only after verification. / \u5956\u9879\u8bc1\u4e66\u4e0e\u57ce\u5e02\u8363\u8a89\u9700\u6838\u5b9e\u540e\u4e0a\u7ebf\u3002</li>
        </ul>
      </div>
    </section>`;
}

function renderSchools() {
  return `
    ${pageHeader("Our Schools & Brands", "\u65d7\u4e0b\u5b66\u6821\u4e0e\u54c1\u724c", "Filter-ready cards for schools, programs, foundation, wellness, and future initiatives. Each brand has its own detail page.", "\u5c55\u793a\u6240\u6709\u5b66\u6821\u3001\u9879\u76ee\u3001\u57fa\u91d1\u4f1a\u3001\u8eab\u5fc3\u5065\u5eb7\u54c1\u724c\u548c\u672a\u6765\u6559\u80b2\u9879\u76ee;\u6bcf\u4e2a\u54c1\u724c\u90fd\u6709\u72ec\u7acb\u8be6\u60c5\u9875\u3002")}
    <section class="section schools-surface"><div class="section-inner"><div class="card-grid">${data.brands.map(brandCard).join("")}</div></div></section>`;
}

function renderPrograms() {
  return `
    ${pageHeader("Programs", "\u6559\u80b2\u9879\u76ee", "Programs are organized by audience and learning need, from Montessori preschool to AI future learning.", "\u6559\u80b2\u9879\u76ee\u6309\u670d\u52a1\u5bf9\u8c61\u548c\u5b66\u4e60\u9700\u6c42\u5206\u7c7b,\u4ece\u8499\u7279\u68ad\u5229\u5e7c\u513f\u6559\u80b2\u5230 AI \u672a\u6765\u5b66\u4e60\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="program-grid">${data.programs.map((p) => card(p[0], p[1], p[2], p[3])).join("")}</div>
    </div></section>`;
}

function renderAgentech() {
  return `
    ${pageHeader("Agentech Education", "Agentech Education / AI \u672a\u6765\u5b66\u4e60", "AI Literacy, Robotics, and Future-Ready Learning for K-12.", "\u8ba9\u5b69\u5b50\u7406\u89e3 AI\u3001\u521b\u9020\u9879\u76ee\u3001\u9762\u5411\u672a\u6765\u5b66\u4e60\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="notice"><strong>Role / \u9875\u9762\u89d2\u8272:</strong> ${data.agentech.role}<br>${data.agentech.zhRole}</div>
      <div class="card-grid" style="margin-top:22px">${data.agentech.modules.map((m) => card(m[0], m[2], m[1], m[3])).join("")}</div>
    </div></section>
    <section class="section">
      <div class="split">
        <div>${card("Avoid / \u5fc5\u987b\u907f\u514d", "Safety", data.agentech.avoid.join(" "), data.agentech.zhAvoid.join(" "))}</div>
        <div>${card("Future expansion / \u672a\u6765\u6269\u5c55", "Roadmap", data.agentech.future.join(", "), "AI Club \u72ec\u7acb\u9875\u3001AI Camp \u72ec\u7acb\u9875\u3001Student Showcase\u3001Curriculum for Schools\u3001Parent Workshop\u3002")}</div>
      </div>
    </section>`;
}

function renderAiClub() {
  return `
    ${pageHeader("AI Club / Robotics & Data Lab", "AI Club / \u673a\u5668\u4eba\u4e0e\u6570\u636e\u5b9e\u9a8c\u5ba4", "Optional secondary page for AI Club, robotics, data labs, project-based learning, and student showcase once programs are stable.", "\u53ef\u9009\u4e8c\u7ea7\u9875;\u5f53\u8bfe\u7a0b\u7a33\u5b9a\u540e\u7528\u4e8e\u5c55\u793a AI Club\u3001\u673a\u5668\u4eba\u3001\u6570\u636e\u5b9e\u9a8c\u5ba4\u3001\u9879\u76ee\u5236\u5b66\u4e60\u548c\u5b66\u751f\u4f5c\u54c1\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="program-grid">
        ${["K-2", "Grades 3-5", "Grades 6-8", "Grades 9-12"].map((age) => card(age, "Age Track / \u5e74\u9f84\u6bb5", "Show goals, project outcomes, student fit, and course length.", "\u5199\u5b66\u4e60\u76ee\u6807\u3001\u9879\u76ee\u4ea7\u51fa\u3001\u9002\u5408\u5b69\u5b50\u3001\u8bfe\u7a0b\u65f6\u957f\u3002")).join("")}
      </div>
    </div></section>`;
}

function renderNews() {
  return `
    ${pageHeader("News & Events", "\u65b0\u95fb\u6d3b\u52a8", "CMS model for group news, school events, community events, student highlights, teacher stories, parent workshops, and media coverage.", "\u96c6\u56e2\u65b0\u95fb\u3001\u6821\u56ed\u6d3b\u52a8\u3001\u793e\u533a\u6d3b\u52a8\u3001\u5b66\u751f\u4eae\u70b9\u3001\u6559\u5e08\u6545\u4e8b\u3001\u5bb6\u957f\u8bfe\u5802\u3001\u5a92\u4f53\u62a5\u9053;\u9700\u8981 CMS \u7ba1\u7406\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">${data.newsFields.map((f) => card(f[0], `${f[4]} / ${f[2]}`, f[1], f[3])).join("")}</div>
    </div></section>`;
}

function renderCommunity() {
  return `
    ${pageHeader("Community Impact", "\u793e\u533a\u5f71\u54cd\u529b", "Sequoia Forest Foundation, volunteer service, city honors, activity photos, and community news.", "Sequoia Forest Foundation\u3001\u5fd7\u613f\u670d\u52a1\u3001\u516c\u76ca\u6d3b\u52a8\u3001\u653f\u5e9c/\u793e\u533a\u8363\u8a89\u3001\u7167\u7247\u4e0e\u65b0\u95fb\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="feature-panel">
        <img src="images/sequoia-forest-foundation-logo.jpg" alt="Sequoia Forest Foundation">
        <div class="feature-content">
          <h2>Foundation and service pathway / \u57fa\u91d1\u4f1a\u4e0e\u5fd7\u613f\u670d\u52a1\u8def\u5f84</h2>
          <p>Student volunteering, community participation, social responsibility, civic awareness, and leadership should connect to news and event pages.</p>
          <p>\u5b66\u751f\u5fd7\u613f\u670d\u52a1\u3001\u793e\u533a\u53c2\u4e0e\u3001\u793e\u4f1a\u8d23\u4efb\u611f\u3001\u516c\u6c11\u610f\u8bc6\u4e0e\u9886\u5bfc\u529b,\u5e94\u4e0e\u65b0\u95fb\u6d3b\u52a8\u9875\u9762\u6253\u901a\u3002</p>
          <p class="notice">Confirm nonprofit registration before publishing formal nonprofit claims. / \u6b63\u5f0f\u516c\u76ca\u8d44\u8d28\u4e0e\u975e\u8425\u5229\u6ce8\u518c\u4fe1\u606f\u9700\u4e0a\u7ebf\u524d\u786e\u8ba4\u3002</p>
        </div>
      </div>
    </div></section>`;
}

function renderPartnership() {
  return `
    ${pageHeader("Partnership & Strategic Growth", "\u5408\u4f5c\u4e0e\u6218\u7565\u53d1\u5c55", "A quiet page for VC investors, partners, employers, and education institutions.", "\u7ed9 VC\u3001\u5408\u4f5c\u65b9\u3001\u96c7\u4e3b\u3001\u6559\u80b2\u673a\u6784\u770b\u7684\u4f4e\u8c03\u9875\u9762;\u5efa\u8bae\u653e footer \u548c\u9996\u9875\u6309\u94ae,\u4e0d\u4e00\u5b9a\u653e\u4e3b\u5bfc\u822a\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">
        ${card("Education ecosystem", "Investor angle / \u6295\u8d44\u4eba\u89d2\u5ea6", "Sequoia is a Southern California multi-brand, multi-stage education ecosystem, not a single preschool.", "Sequoia \u4e0d\u662f\u5355\u4e00\u5e7c\u513f\u56ed,\u800c\u662f\u5357\u52a0\u5dde\u591a\u54c1\u724c\u3001\u591a\u9636\u6bb5\u6559\u80b2\u751f\u6001\u3002")}
        ${card("Partnership form fields", "Form / \u8868\u5355", "Organization, Contact Person, Role, Partnership Type, Budget/Timeline optional, Message.", "Organization\u3001Contact Person\u3001Role\u3001Partnership Type\u3001Budget/Timeline(\u53ef\u9009)\u3001Message\u3002")}
        ${card("Agentech partnerships", "Future learning / \u672a\u6765\u5b66\u4e60", "Partner for school programs, camps, curriculum pilots, or community workshops.", "\u5b66\u6821\u9879\u76ee\u3001\u8425\u5730\u3001\u8bfe\u7a0b\u8bd5\u70b9\u3001\u793e\u533a\u5de5\u4f5c\u574a\u5408\u4f5c\u5165\u53e3\u3002")}
      </div>
    </div></section>`;
}

function renderCareers() {
  return `
    ${pageHeader("Careers", "\u62db\u8058", "Career page for role categories, team culture, growth opportunities, and application fields.", "\u804c\u4f4d\u7c7b\u522b\u3001\u56e2\u961f\u6587\u5316\u3001\u6210\u957f\u673a\u4f1a\u3001\u7533\u8bf7\u8868\u5355/\u90ae\u7bb1\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">
        ${card("Teaching roles", "Schools / \u5b66\u6821", "Montessori teachers, assistants, after-school instructors, Chinese teachers, camp teachers.", "\u8499\u7279\u68ad\u5229\u8001\u5e08\u3001\u52a9\u6559\u3001\u8bfe\u540e\u8001\u5e08\u3001\u4e2d\u6587\u8001\u5e08\u3001\u8425\u5730\u8001\u5e08\u3002")}
        ${card("Program and operations roles", "Group / \u96c6\u56e2", "Campus operations, admissions, marketing, curriculum support, community events.", "\u6821\u533a\u8fd0\u8425\u3001\u62db\u751f\u3001\u5e02\u573a\u3001\u8bfe\u7a0b\u652f\u6301\u3001\u793e\u533a\u6d3b\u52a8\u3002")}
        ${card("Application fields", "Form / \u8868\u5355", "Role Interest, Resume Upload, Credentials/Permit optional, Availability.", "Role Interest\u3001Resume Upload\u3001Credentials/Permit(\u53ef\u9009)\u3001Availability\u3002")}
      </div>
    </div></section>`;
}

function renderContact() {
  return `
    ${pageHeader("Contact", "\u8054\u7cfb\u6211\u4eec", "Inquiry routing for admissions, teacher training, partnerships, careers, media, and foundation/donation.", "\u6309\u54a8\u8be2\u7c7b\u578b\u5206\u6d41:\u62db\u751f\u3001\u6559\u5e08\u57f9\u8bad\u3001\u5408\u4f5c\u3001\u62db\u8058\u3001\u5a92\u4f53\u3001\u516c\u76ca\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="split">
        <div class="card">
          <h2>Sequoia Education Group</h2>
          <p>${data.address}<br>${data.email}<br>${data.domain}</p>
          <p class="notice">Before launch, verify each entity's legal name, license, address, phone, and email. / \u4e0a\u7ebf\u524d\u6838\u5b9e\u6bcf\u4e2a\u5b9e\u4f53\u7684 legal name\u3001license\u3001\u5730\u5740\u3001\u7535\u8bdd\u3001\u90ae\u7bb1\u3002</p>
        </div>
        <div class="card-grid">${data.formFields.map((f) => card(f[0], "Form / \u8868\u5355", f[1], f[2])).join("")}</div>
      </div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">External Links / \u7b2c\u4e09\u6587\u4ef6\u94fe\u63a5</p><h2>Official school and organization links</h2></div></div>
      <div class="link-grid">${data.externalLinks.map(([name, url]) => card(name, "Official link", url, "", `<a class="button light" href="${url}" target="_blank" rel="noreferrer">Open Website</a>`)).join("")}</div>
    </section>`;
}

function renderTechnical() {
  return `
    <section class="section alt"><div class="section-inner">
      <div class="section-head"><div><p class="eyebrow">Technical / CMS / SEO</p><h2>Developer requirements from the brief</h2></div></div>
      <div class="card-grid">${data.technical.map((t) => card(t[0], "Requirement / \u9700\u6c42", t[1], t[2])).join("")}</div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Launch Checklist / \u4e0a\u7ebf\u524d\u6838\u5b9e</p><h2>Must confirm before publishing</h2></div></div>
      <div class="card-grid">${data.checklist.map((c) => card(c[0], c[2], c[1], c[3])).join("")}</div>
    </section>
    <section class="section alt"><div class="section-inner">
      <div class="section-head"><div><p class="eyebrow">Reference Websites / \u53c2\u8003\u7f51\u7ad9</p><h2>15 reference site notes</h2></div></div>
      <div class="card-grid">${data.referenceSites.map((r) => card(r[0], r[2], r[3], "", `<a href="${r[1]}" target="_blank" rel="noreferrer">${r[1]}</a>`)).join("")}</div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Implementation Phases / \u5b9e\u73b0\u987a\u5e8f</p><h2>Recommended build order</h2></div></div>
      <div class="timeline">${data.phases.map((p) => `<div class="timeline-item"><strong>${p[0]}</strong><p>${p[1]}</p><p>${p[2]}</p></div>`).join("")}</div>
    </section>`;
}

function renderBrand() {
  const brand = data.brands.find((item) => item.slug === brandSlug()) || data.brands[0];
  const brandImages = brand.galleryImages ?? [brand.image];
  const brandMedia = brandImages.length > 1
    ? `<div class="brand-gallery">
        <img class="brand-gallery-logo" src="${brandImages[0]}" alt="${brand.name} logo">
        <div class="brand-awards">
          ${brandImages.slice(1).map((image) => `<img src="${image}" alt="${brand.name} award">`).join("")}
        </div>
      </div>`
    : `<div class="brand-logo-panel"><img src="${brand.image}" alt="${brand.name} logo or campus image"></div>`;
  return `
    ${pageHeader(brand.name, brand.zhName, brand.summary, brand.zhSummary)}
    <section class="section alt"><div class="section-inner">
      <div class="feature-panel">
        ${brandMedia}
        <div class="feature-content">
          <p class="eyebrow">${brand.year} / ${brand.location}</p>
          <h2>${brand.type}</h2>
          <p>${brand.zhType}</p>
          <ul class="detail-list">
            <li><strong>Services / \u670d\u52a1:</strong> add age range, programs, address, contact, photos, related news, and tour CTA for each campus or brand.</li>
            <li><strong>Required check / \u5fc5\u987b\u6838\u5b9e:</strong> legal name, license, exact address, phone, email, student numbers, credential claims, and photo permission.</li>
            <li><strong>CTA / \u884c\u52a8\u5165\u53e3:</strong> Schedule a Tour, Enrollment Inquiry, Contact the Campus.</li>
          </ul>
          <div class="button-row">
            <a class="button" href="/contact">Contact / \u8054\u7cfb</a>
            ${brand.url ? `<a class="button light" href="${brand.url}" target="_blank" rel="noreferrer">Official Website</a>` : ""}
          </div>
        </div>
      </div>
    </div></section>`;
}

function renderRoutes() {
  return `
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Required Pages & Routes / \u5fc5\u9700\u9875\u9762\u4e0e\u8def\u7531</p><h2>Information architecture from the brief</h2></div></div>
      <div class="card-grid">${data.routes.map((r) => card(r[1], r[0], r[2], "")).join("")}</div>
    </section>`;
}

function renderAgentech() {
  return `
    ${pageHeader("Agentech Education", "Agentech Education / AI Future Learning", "AI Literacy, Robotics, and Future-Ready Learning for K-12.", "\u8ba9\u5b69\u5b50\u7406\u89e3 AI\u3001\u521b\u9020\u9879\u76ee\u3001\u9762\u5411\u672a\u6765\u5b66\u4e60\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="feature-panel">
        <div class="feature-content">
          <div class="inline-logo-panel"><img class="agentech-logo" src="images/agentech-education-logo.png" alt="Agentech Education logo"></div>
          <h2>AI imagination, robotics, and project-based future learning</h2>
          <p>Agentech Education introduces students to age-appropriate AI, creativity, robotics, drones, computer vision, and hands-on engineering challenges.</p>
          <p>Agentech Education \u9762\u5411\u4e0d\u540c\u5e74\u9f84\u6bb5\u5b66\u751f\u63d0\u4f9b\u9002\u9f84 AI\u3001\u521b\u9020\u529b\u3001\u673a\u5668\u4eba\u3001\u65e0\u4eba\u673a\u3001\u8ba1\u7b97\u673a\u89c6\u89c9\u4e0e\u52a8\u624b\u5de5\u7a0b\u6311\u6218\u3002</p>
          <div class="button-row">
            <a class="button" href="https://www.agent-tech.ai/" target="_blank" rel="noreferrer">View Agentech</a>
            <a class="button light" href="/contact">Request Program Info</a>
          </div>
        </div>
        <img src="images/agentech-robotics-club-preview.png" alt="Agentech robotics project preview">
      </div>
      <div class="program-grid" style="margin-top:24px">
        ${data.agentech.gradeTracks.map((track) => card(track[0], track[1], track[2], track[3])).join("")}
      </div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Walnut 2026 Programs / Walnut 2026 \u8bfe\u7a0b</p><h2>Summer AI tracks from Agentech Education</h2></div></div>
      <div class="card-grid">
        ${data.agentech.courses.map((course) => card(course[1], `${course[0]} / ${course[3]} / ${course[4]}`, course[2], "Walnut \u6821\u533a 2026 Summer \u9879\u76ee\u3002")).join("")}
      </div>
    </section>`;
}

function renderAiClub() {
  return `
    ${pageHeader("AI Robotics Club", "AI \u673a\u5668\u4eba\u4ff1\u4e50\u90e8", "Robotics Competition & Engineering Membership Program.", "\u673a\u5668\u4eba\u7ade\u8d5b\u4e0e\u5de5\u7a0b\u7814\u53d1\u4f1a\u5458\u8ba1\u5212\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="feature-panel">
        <div class="feature-logo-panel">
          <img src="images/agentech-talents-logo.png" alt="Agentech Talents logo">
        </div>
        <div class="feature-content">
          <p class="eyebrow">AI Robotics Club</p>
          <h2>Join a real AI robotics engineering team.</h2>
          <p>${data.roboticsClub.intro}</p>
          <p>${data.roboticsClub.zhIntro}</p>
          <div class="button-row"><a class="button" href="https://www.agent-tech.ai/" target="_blank" rel="noreferrer">View Agentech</a></div>
        </div>
      </div>
      <div class="split" style="margin-top:34px">
        <div>
          <p class="eyebrow">Main Introduction / \u4e3b\u4ecb\u7ecd</p>
          <h2>Understand why robots work, why they fail, and how to improve them.</h2>
        </div>
        <div>
          <p>${data.roboticsClub.main}</p>
          <p>${data.roboticsClub.zhMain}</p>
        </div>
      </div>
      <div class="section-head" style="margin-top:34px"><div><p class="eyebrow">What Students Learn / \u5b66\u751f\u5c06\u5b66\u4e60\u4ec0\u4e48</p><h2>Engineering and AI skills</h2></div></div>
      <div class="card-grid">
        ${data.roboticsClub.learnSections.map((item) => card(item[0], item[2], item[1], item[3])).join("")}
      </div>
      <div class="section-head" style="margin-top:34px"><div><p class="eyebrow">Student Growth / \u5b66\u751f\u6210\u957f</p><h2>Core abilities</h2></div></div>
      <div class="program-grid">
        ${data.roboticsClub.abilities.map((item) => card(item[0], item[2], item[1], item[3])).join("")}
      </div>
      <div class="section-head" style="margin-top:34px"><div><p class="eyebrow">Project Outputs / \u9879\u76ee\u4ea7\u51fa</p><h2>Portfolio-ready work</h2></div></div>
      <div class="program-grid">
        ${data.roboticsClub.outputs.map((item) => card(item, "Output / \u6210\u679c", "Students document and present milestone work.", "\u5b66\u751f\u8bb0\u5f55\u5e76\u5c55\u793a\u9636\u6bb5\u6027\u9879\u76ee\u6210\u679c\u3002")).join("")}
      </div>
    </div></section>`;
}


const sequoiaNewsArticle = {
  "date": "2026-06-16",
  "displayDate": "June 16, 2026",
  "zhDisplayDate": "2026\u5e746\u670816\u65e5",
  "category": "Group News / AI Education",
  "zhCategory": "\u96c6\u56e2\u65b0\u95fb / AI \u6559\u80b2",
  "title": "Sequoia Education Group Joins Faraday Future as First Institutional Partner \u2014 and Brings AI Robots Directly into the Classroom",
  "zhTitle": "\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u4f5c\u4e3a\u9996\u6279\u673a\u6784\u5408\u4f5c\u4f19\u4f34\u51fa\u5e2d FF EAI \u53d1\u5e03\u4f1a\u2014\u2014\u5e76\u5c06 AI \u673a\u5668\u4eba\u76f4\u63a5\u5e26\u5165\u8bfe\u5802",
  "excerpt": "After acquiring 20 FF Navi quadruped educational robots at the Faraday Future EAI launch, Sequoia has already launched its K-12 AI Summer Camp at Learning Tree Walnut \u2014 where students are now learning with real robots, real AI engineers, and real projects.",
  "zhExcerpt": "\u5728 Faraday Future EAI \u53d1\u5e03\u4f1a\u4e0a\u6b63\u5f0f\u91c7\u8d2d20\u53f0 FX Navi \u56db\u8db3\u6559\u5b66\u673a\u5668\u4eba\u540e\uff0c\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u968f\u5373\u5728 Learning Tree Walnut \u6821\u533a\u542f\u52a8 K-12 AI \u6691\u671f\u8425\u2014\u2014\u5b66\u751f\u4eec\u5df2\u5728\u4f7f\u7528\u771f\u5b9e\u7684\u673a\u5668\u4eba\u3001\u771f\u6b63\u7684 AI \u5de5\u7a0b\u5e08\u5f00\u5c55\u771f\u5b9e\u7684\u9879\u76ee\u5b66\u4e60\u3002",
  "images": [
    {
      "src": "images/news/sequoia-ff-robots-2026/01-connie-keynote.jpg",
      "alt": "Connie Sun speaking on stage at the Faraday Future EAI Robot Education Ecosystem Launch",
      "caption": "Connie Sun, Founder & CEO of Sequoia Educational Group, on stage at the Faraday Future EAI Robot Education Ecosystem Launch, June 16, 2026, Los Angeles.",
      "zhCaption": "Connie Sun\u5973\u58eb\u5728 Faraday Future EAI \u673a\u5668\u4eba\u6559\u80b2\u751f\u6001\u6218\u7565\u53d1\u5e03\u4f1a\u4e0a\u53d1\u8868\u4e3b\u65e8\u6f14\u8bb2\uff0c2026\u5e746\u670816\u65e5\uff0c\u6d1b\u6749\u77f6\u3002"
    },
    {
      "src": "images/news/sequoia-ff-robots-2026/02-ff-launch-group.jpg",
      "alt": "Sequoia Education Group and AgentTech team at the Faraday Future EAI launch",
      "caption": "Sequoia Educational Group and AgentTech team at the Faraday Future EAI launch, June 16, 2026, Los Angeles.",
      "zhCaption": "\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u53ca AgentTech \u56e2\u961f\u5728 Faraday Future EAI \u53d1\u5e03\u4f1a\u73b0\u573a\u5408\u5f71\uff0c2026\u5e746\u670816\u65e5\uff0c\u6d1b\u6749\u77f6\u3002"
    },
    {
      "src": "images/news/sequoia-ff-robots-2026/03-humanoid-classroom.jpg",
      "alt": "AgentTech AI engineer introducing a humanoid robot to students",
      "caption": "An AgentTech AI engineer introduces a humanoid robot to students at Learning Tree Walnut Education Center as part of the AI Summer Camp program.",
      "zhCaption": "AgentTech AI \u5de5\u7a0b\u5e08\u5728 Learning Tree Walnut \u6821\u533a\u5411\u5b66\u751f\u5c55\u793a\u4eba\u5f62\u673a\u5668\u4eba\uff0c\u5b69\u5b50\u4eec\u56f4\u5750\u4e13\u6ce8\u89c2\u770b\u3002"
    },
    {
      "src": "images/news/sequoia-ff-robots-2026/04-navi-classroom.jpg",
      "alt": "Learning Tree Walnut students experiencing the FF Navi robot dog",
      "caption": "Young students at Learning Tree Walnut Education Center experience the FF Navi robot dog up close \u2014 their first hands-on encounter with embodied AI.",
      "zhCaption": "Learning Tree Walnut \u6821\u533a\u5b66\u751f\u8fd1\u8ddd\u79bb\u4f53\u9a8c FX Navi \u673a\u5668\u72d7\u3002"
    },
    {
      "src": "images/news/sequoia-ff-robots-2026/05-lab-team.jpg",
      "alt": "Sequoia Education Group representatives at the California EAI Robotics Education and Innovation Lab",
      "caption": "Sequoia Educational Group representatives at the California EAI Robotics Education & Innovation Lab, Faraday Future HQ.",
      "zhCaption": "\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u4ee3\u8868\u5728 Faraday Future \u603b\u90e8 California EAI Robotics Education & Innovation Lab \u7559\u5f71\u3002"
    }
  ],
  "sections": [
    {
      "title": "Overview",
      "zhTitle": "\u65b0\u95fb\u6982\u89c8",
      "body": [
        "LOS ANGELES, CA \u2014 June 16, 2026.   Sequoia Educational Group was honored to participate as a featured institutional partner at the Faraday Future (FF) EAI Robot Education Ecosystem Strategy Launch, held at FF's \"Silicon Beach\" headquarters in Los Angeles. Founder and CEO Connie Sun took the stage to deliver a keynote address alongside FF executives, investors, educators, and representatives from surrounding school districts. California State Treasurer Fiona Ma also sent a special congratulatory video message for the event."
      ],
      "zhBody": [
        "\u3010\u7f8e\u56fd\u52a0\u5229\u798f\u5c3c\u4e9a\u5dde\u6d1b\u6749\u77f6\uff0c2026\u5e746\u670816\u65e5\u3011\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\uff08Sequoia Educational Group\uff09\u4f5c\u4e3a\u91cd\u8981\u673a\u6784\u5408\u4f5c\u4f19\u4f34\uff0c\u53d7\u9080\u51fa\u5e2d Faraday Future\uff08FF\uff09\u5728\u6d1b\u6749\u77f6\"\u7845\u6ee9\"\u65b0\u603b\u90e8\u4e3e\u529e\u7684EAI \u673a\u5668\u4eba\u6559\u80b2\u751f\u6001\u6218\u7565\u53d1\u5e03\u4f1a\u3002\u96c6\u56e2\u521b\u59cb\u4eba\u517cCEOConnie Sun\u5973\u58eb\u767b\u53f0\u53d1\u8868\u4e3b\u65e8\u6f14\u8bb2\uff0c\u4e0e FF \u9ad8\u7ba1\u3001\u6295\u8d44\u4eba\u53ca\u5468\u8fb9\u5b66\u533a\u4ee3\u8868\u5171\u540c\u89c1\u8bc1\u8fd9\u4e00\u5386\u53f2\u65f6\u523b\u3002\u52a0\u5dde\u8d22\u957f Fiona Ma \u4ea6\u7279\u522b\u5f55\u5236\u795d\u8d3a\u89c6\u9891\u81f4\u8f9e\u3002"
      ]
    },
    {
      "title": "The Handover: 20 FF Navi Robots, Now in the Classroom",
      "zhTitle": "\u6b63\u5f0f\u4ea4\u63a5\uff1a20\u53f0 FX Navi \u673a\u5668\u4eba\uff0c\u73b0\u5df2\u8fdb\u5165\u8bfe\u5802",
      "body": [
        "At the launch event, Sequoia Educational Group was recognized as the first institution in the world to acquire 20 units of the FF Navi quadruped educational robot \u2014 priced at $1,990 per unit and the only robot dog in the United States under $2,000 with full secondary development capabilities. A formal on-stage handover ceremony marked the beginning of this active, classroom-ready partnership.",
        "Sequoia's decision to partner with FF and be among the first to deploy these robots in the classroom was driven by a clear mission: to bring FF's most advanced education platform \u2014 including their humanoid robots, robot dogs, and EAI technology \u2014 directly into our schools and into the hands of families across our surrounding community in Walnut, Arcadia, and Irvine. We believe the future of AI education should not be limited to tech hubs. It belongs in every classroom, in every neighborhood.",
        "\"AI education is no longer something far away. It is already becoming part of our children's future. We are not only using FF's education products \u2014 we are proud to become a cooperation partner and education developer with FF, working side by side to build a real learning system for students.\"  \u2014 Connie Sun, Founder & CEO, Sequoia Educational Group"
      ],
      "zhBody": [
        "\u53d1\u5e03\u4f1a\u4e0a\uff0c\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u4ee5\u5168\u7403\u9996\u6279\u673a\u6784\u8eab\u4efd\u6b63\u5f0f\u91c7\u8d2d20\u53f0 FX Navi \u56db\u8db3\u6559\u5b66\u673a\u5668\u4eba\uff0c\u672c\u4f53\u552e\u4ef71,990\u7f8e\u5143\uff0c\u662f\u5168\u7f8e\u552f\u4e00\u552e\u4ef7\u4f4e\u4e8e2,000\u7f8e\u5143\u3001\u4e14\u652f\u6301\u5b8c\u6574\u4e8c\u6b21\u5f00\u53d1\u529f\u80fd\u7684\u6559\u80b2\u673a\u5668\u72d7\u3002\u73b0\u573a\u4e3e\u884c\u7684\u6b63\u5f0f\u4ea4\u63a5\u4eea\u5f0f\uff0c\u6807\u5fd7\u7740\u8fd9\u6bb5\u5207\u5b9e\u53ef\u843d\u5730\u7684\u6559\u80b2\u5408\u4f5c\u4f19\u4f34\u5173\u7cfb\u6b63\u5f0f\u5f00\u542f\u3002",
        "\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u9009\u62e9\u4e0e FF \u5408\u4f5c\u3001\u5e76\u6210\u4e3a\u9996\u6279\u5c06\u8fd9\u6279\u673a\u5668\u4eba\u5e26\u8fdb\u8bfe\u5802\u7684\u673a\u6784\uff0c\u80cc\u540e\u6709\u660e\u786e\u7684\u4f7f\u547d\uff1a\u5c06 FF \u6700\u5148\u8fdb\u7684\u6559\u80b2\u5e73\u53f0\u2014\u2014\u5305\u62ec\u4eba\u5f62\u673a\u5668\u4eba\u3001\u673a\u5668\u72d7\u53ca EAI \u5177\u8eab\u667a\u80fd\u6280\u672f\u2014\u2014\u771f\u6b63\u5f15\u5165\u6211\u4eec\u7684\u6559\u80b2\u4f53\u7cfb\uff0c\u9001\u8fdb Walnut\u3001Arcadia\u3001Irvine \u53ca\u5468\u8fb9\u793e\u533a\u6bcf\u4e2a\u5bb6\u5ead\u7684\u624b\u4e2d\u3002\u6211\u4eec\u76f8\u4fe1\uff0cAI \u6559\u80b2\u7684\u672a\u6765\u4e0d\u5e94\u6b62\u6b65\u4e8e\u79d1\u6280\u56ed\u533a\uff0c\u800c\u5e94\u8d70\u8fdb\u6bcf\u4e00\u95f4\u6559\u5ba4\u3001\u6bcf\u4e00\u4e2a\u793e\u533a\u3002",
        "\"AI\u6559\u80b2\u4e0d\u518d\u662f\u9065\u8fdc\u7684\u672a\u6765\uff0c\u5b83\u5df2\u7ecf\u6210\u4e3a\u5b69\u5b50\u4eec\u672a\u6765\u7684\u4e00\u90e8\u5206\u3002\u6211\u4eec\u4e0d\u53ea\u662f\u4f7f\u7528 FF \u7684\u6559\u80b2\u4ea7\u54c1\uff0c\u66f4\u8363\u5e78\u5730\u6210\u4e3a FF \u7684\u5408\u4f5c\u4f19\u4f34\u548c\u6559\u80b2\u5f00\u53d1\u8005\uff0c\u643a\u624b\u5171\u5efa\u771f\u5b9e\u6709\u6548\u7684 AI \u5b66\u4e60\u4f53\u7cfb\u3002\"  \u2014\u2014 Connie Sun\uff0c\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u521b\u59cb\u4eba\u517cCEO"
      ]
    },
    {
      "title": "From Launch to Classroom: Already in Action",
      "zhTitle": "\u4ece\u53d1\u5e03\u5230\u8bfe\u5802\uff1a\u5408\u4f5c\u5df2\u5728\u771f\u5b9e\u843d\u5730",
      "body": [
        "Sequoia's partnership with FF is not only a milestone announcement \u2014 it is already producing real results on the ground. Within weeks of the launch, the K-12 AI Summer Camp powered by this partnership has opened its doors at Learning Tree Walnut Education Center, with students from Kindergarten through Grade 12 now learning AI and robotics using the FF Navi robots and humanoid robots in real classroom sessions.",
        "The curriculum is developed by AgentTech Inc. \u2014 an AI software development company collaborating with Sequoia Educational Group \u2014 whose team also presented at the FF launch event. This makes Sequoia one of the first institutions in the United States to move from partnership announcement to active classroom deployment of FF's EAI education ecosystem."
      ],
      "zhBody": [
        "\u5bf9\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u800c\u8a00\uff0c\u4e0e FF \u7684\u5408\u4f5c\u4e0d\u53ea\u662f\u4e00\u4e2a\u91cc\u7a0b\u7891\u5f0f\u7684\u5ba3\u544a\u2014\u2014\u5b83\u5df2\u7ecf\u8f6c\u5316\u4e3a\u771f\u5b9e\u7684\u8bfe\u5802\u884c\u52a8\u3002\u53d1\u5e03\u4f1a\u540e\u6570\u5468\u5185\uff0c\u4f9d\u6258\u672c\u6b21\u5408\u4f5c\u7684 K-12 AI \u6691\u671f\u8425\u5df2\u5728 Learning Tree Walnut Education Center \u6b63\u5f0f\u5f00\u8425\uff0cK-12 \u5404\u5e74\u9f84\u6bb5\u5b66\u751f\u6b63\u5728\u4f7f\u7528 FX Navi \u673a\u5668\u4eba\u53ca\u4eba\u5f62\u673a\u5668\u4eba\u5f00\u5c55\u771f\u5b9e\u7684 AI \u8bfe\u7a0b\u5b66\u4e60\u3002",
        "\u8bfe\u7a0b\u5185\u5bb9\u7531\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u5408\u4f5c\u7684 AI \u8f6f\u4ef6\u5f00\u53d1\u516c\u53f8 AgentTech Inc. \u8d1f\u8d23\u7814\u53d1\uff0cAgentTech \u56e2\u961f\u540c\u6837\u5728\u672c\u6b21 FF \u53d1\u5e03\u4f1a\u4e0a\u53d1\u8868\u4e86\u6f14\u8bb2\u3002\u8fd9\u4f7f\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u6210\u4e3a\u5168\u7f8e\u6700\u65e9\u5b9e\u73b0\u4ece\u5408\u4f5c\u5ba3\u5e03\u5230 FF EAI \u6559\u80b2\u751f\u6001\u8bfe\u5802\u771f\u5b9e\u843d\u5730\u7684\u673a\u6784\u4e4b\u4e00\u3002"
      ]
    },
    {
      "title": "Part of the World's First EAI Robot Education Ecosystem",
      "zhTitle": "\u5168\u7403\u9996\u4e2a\"\u4e09\u4f4d\u4e00\u4f53\"EAI \u673a\u5668\u4eba\u6559\u80b2\u751f\u6001",
      "body": [
        "The launch also marked the debut of FF's \"Three-in-One\" EAI Robot Education Ecosystem Strategy \u2014 the world's first platform designed simultaneously for B2B education institutions and B2C family education. FF also launched an open-source developer platform for youth, a new Futurist humanoid robot, and the FX Navi robot line. As an official FF Robotics PAR partner, Sequoia will continue to collaborate with FF on curriculum development, teacher training, and expanding AI education access across Southern California.",
        "\"Our vision is bigger than one classroom. We hope to work with FF to develop, promote, and bring AI education solutions to more schools, more families, and more students in our surrounding communities. We believe this is not only a strong education direction \u2014 it is also a great opportunity to shape the next generation.\"  \u2014 Connie Sun"
      ],
      "zhBody": [
        "\u672c\u6b21\u53d1\u5e03\u4f1a\u540c\u6b65\u63ed\u5f00\u4e86 FF \u5168\u7403\u9996\u4e2a\"\u4e09\u4f4d\u4e00\u4f53\"EAI \u673a\u5668\u4eba\u6559\u80b2\u751f\u6001\u6218\u7565\uff0c\u8fd9\u662f\u5168\u7403\u9996\u4e2a\u540c\u65f6\u9762\u5411 To B \u6559\u80b2\u673a\u6784\u4e0e To C \u5bb6\u5ead\u6559\u80b2\u7684\u673a\u5668\u4eba\u6559\u80b2\u5e73\u53f0\uff0c\u5e76\u53d1\u5e03\u4e86\u9762\u5411\u9752\u5c11\u5e74\u7684\u5f00\u6e90\u5f00\u653e\u5f00\u53d1\u8005\u5e73\u53f0\u3001\u5168\u65b0 Futurist \u4eba\u5f62\u673a\u5668\u4eba\u4e0e FX Navi \u56db\u8db3\u673a\u5668\u4eba\u5168\u7cfb\u3002\u4f5c\u4e3a FF Robotics \u5b98\u65b9 PAR \u5408\u4f5c\u4f19\u4f34\uff0c\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u5c06\u6301\u7eed\u4e0e FF \u5728\u8bfe\u7a0b\u7814\u53d1\u3001\u6559\u5e08\u57f9\u8bad\u53ca\u5357\u52a0\u5dde AI \u6559\u80b2\u8986\u76d6\u6269\u5c55\u7b49\u65b9\u5411\u6df1\u5ea6\u534f\u4f5c\u3002",
        "\"\u6211\u4eec\u7684\u613f\u666f\u4e0d\u6b62\u4e8e\u4e00\u95f4\u6559\u5ba4\u3002\u6211\u4eec\u5e0c\u671b\u4e0e FF \u5171\u540c\u5f00\u53d1\u3001\u63a8\u5e7f AI \u6559\u80b2\u89e3\u51b3\u65b9\u6848\uff0c\u5c06\u8fd9\u5957\u771f\u5b9e\u6709\u6548\u7684\u5b66\u4e60\u4f53\u7cfb\u5e26\u5230\u66f4\u591a\u5b66\u6821\u3001\u66f4\u591a\u5bb6\u5ead\u3001\u66f4\u591a\u5b69\u5b50\u8eab\u8fb9\u3002\"  \u2014\u2014 Connie Sun"
      ]
    },
    {
      "title": "FX Navi: The Robot Built for Classrooms and Homes",
      "zhTitle": "FX Navi\uff1a\u4e13\u4e3a\u8bfe\u5802\u4e0e\u5bb6\u5ead\u6253\u9020\u7684\u673a\u5668\u4eba",
      "body": [
        "Central to the FF EAI education ecosystem is the FX Navi quadruped educational robot \u2014 the only robot dog in the United States priced under $2,000 ($1,990) with full secondary development capabilities. Weighing just 8kg and measuring 46.5\u00d720\u00d751.5cm, it is designed to move between classrooms and living rooms with ease.",
        "What sets Navi apart is its integrated learning ecosystem: a built-in graphical programming platform, an official curriculum spanning nine progressive levels, and a Skill Store \u2014 all running in parallel. Students plug in an iOS or Android smartphone as the robot's brain, giving it full computational power, camera, and microphone capabilities instantly.",
        "FF has also released the Navi's 3D dog-head model as open source, allowing students to design and 3D-print their own custom heads \u2014 making every Navi uniquely theirs. Ongoing OTA upgrades will continuously unlock new AI capabilities, including autonomous following, multi-modal perception, and interactive responses combining language, expression, and movement."
      ],
      "zhBody": [
        "FF EAI \u6559\u80b2\u751f\u6001\u7684\u6838\u5fc3\u4ea7\u54c1\u2014\u2014FX Navi \u56db\u8db3\u6559\u80b2\u673a\u5668\u4eba\uff0c\u662f\u5168\u7f8e\u552f\u4e00\u4e00\u6b3e\u552e\u4ef7\u4f4e\u4e8e2,000\u7f8e\u5143\uff081,990\u7f8e\u5143\uff09\u3001\u4e14\u652f\u6301\u5b8c\u6574\u4e8c\u6b21\u5f00\u53d1\u529f\u80fd\u7684\u673a\u5668\u72d7\u3002\u6574\u673a\u91cd\u91cf\u4ec58kg\uff0c\u673a\u8eab\u5c3a\u5bf846.5\u00d720\u00d751.5cm\uff0c\u53ef\u8f7b\u677e\u5728\u8bfe\u5802\u4e0e\u5ba2\u5385\u4e4b\u95f4\u7a7f\u884c\u3002",
        "Navi \u7684\u72ec\u7279\u4e4b\u5904\u5728\u4e8e\u5176\u4e00\u4f53\u5316\u5b66\u4e60\u751f\u6001\uff1a\u5185\u7f6e\u56fe\u5f62\u5316\u7f16\u7a0b\u5e73\u53f0\u3001\u5171\u4e5d\u4e2a\u8fdb\u9636\u7b49\u7ea7\u7684\u5b98\u65b9\u8bfe\u7a0b\uff0c\u4ee5\u53ca Skill Store\uff0c\u4e09\u5c42\u5e76\u884c\u3002\u5b66\u751f\u5c06 iOS \u6216 Android \u624b\u673a\u63d2\u5165\u72d7\u5934\u6a21\u5757\uff0c\u624b\u673a\u77ac\u95f4\u6210\u4e3a\u673a\u5668\u4eba\u7684\u5927\u8111\u4e0e\u611f\u5b98\uff0c\u7b97\u529b\u3001\u6444\u50cf\u5934\u3001\u9ea6\u514b\u98ce\u5168\u90e8\u6fc0\u6d3b\u3002",
        "FF \u540c\u6b65\u5f00\u653e\u4e86 Navi \u72d7\u5934\u7684 3D \u6a21\u578b\uff0c\u5b66\u751f\u53ef\u81ea\u884c\u8bbe\u8ba1\u6253\u5370\u4e13\u5c5e\u72d7\u5934\uff0c\u8ba9\u6bcf\u4e00\u53ea Navi \u90fd\u4e0e\u4f17\u4e0d\u540c\u3002\u6301\u7eed\u7684 OTA \u5347\u7ea7\u5c06\u4e0d\u65ad\u89e3\u9501\u65b0 AI \u529f\u80fd\uff0c\u5305\u62ec\u81ea\u4e3b\u8ddf\u968f\u3001\u591a\u6a21\u6001\u611f\u77e5\uff0c\u4ee5\u53ca\u7ed3\u5408\u8bed\u8a00\u3001\u8868\u60c5\u4e0e\u52a8\u4f5c\u7684\u4ea4\u4e92\u56de\u5e94\u3002"
      ]
    },
    {
      "title": "Open Developer Platform for Young Creators",
      "zhTitle": "\u5f00\u6e90\u5f00\u653e\u5f00\u53d1\u8005\u5e73\u53f0\uff08\u9752\u5c11\u5e74\u7248\uff09\uff1a\u8ba9\u5b69\u5b50\u4ece\u4f7f\u7528\u8005\u53d8\u4e3a\u521b\u9020\u8005",
      "body": [
        "FF has officially launched its Open Source Developer Platform (Youth Edition), built around the principles of openness and creation. The platform's first tools, released at the launch event, include:",
        "\u2022Brain Blocks \u2014 a block-based programming platform supporting the full pathway from visual blocks to ROS2 deployment, with one-code-to-multiple-robots deployment and Vibe Coding (natural language to program generation)",
        "\u2022EAI Soul \u2014 an engine for shaping a robot's personality, voice, and knowledge base",
        "\u2022SDK/API \u2014 a local development toolkit for advanced developers and engineers",
        "The platform also introduces the Youth Agent Skill Store, where students can publish their own Agent Skills, build portfolios, and see their work run on real robots. Teachers can share outstanding student projects with the entire class. FF has also launched a developer incentive program offering revenue sharing, hackathons, campus programs, and global community exposure \u2014 so every creator can benefit from what they build."
      ],
      "zhBody": [
        "FF \u6b63\u5f0f\u4e0a\u7ebf\u5f00\u6e90\u5f00\u653e\u5f00\u53d1\u8005\u5e73\u53f0\uff08\u9752\u5c11\u5e74\u7248\uff09\uff0c\u4ee5\"\u5f00\u653e\"\u4e0e\"\u5f00\u53d1\"\u4e3a\u6838\u5fc3\uff0c\u9996\u6279\u5de5\u5177\u4eca\u65e5\u5f00\u653e\uff1a",
        "\u2022Brain Blocks\u2014\u2014\u79ef\u6728\u5f0f\u7f16\u7a0b\u5e73\u53f0\uff0c\u652f\u6301\u4ece Block \u5230 ROS2 \u7684\u5b8c\u6574\u8def\u5f84\u3001\u4e00\u7801\u591a\u673a\u90e8\u7f72\uff0c\u4ee5\u53ca\u7528\u81ea\u7136\u8bed\u8a00\u751f\u6210\u7a0b\u5e8f\u7684 Vibe Coding",
        "\u2022EAI Soul\u2014\u2014\u5851\u9020\u673a\u5668\u4eba\u4e2a\u6027\u3001\u97f3\u8272\u4e0e\u4e13\u5c5e\u77e5\u8bc6\u5e93\u7684\"\u7075\u9b42\"\u5f15\u64ce",
        "\u2022SDK/API\u2014\u2014\u9762\u5411\u4e13\u4e1a\u5f00\u53d1\u8005\u4e0e\u5de5\u7a0b\u5e08\u7684\u672c\u5730\u5f00\u53d1\u5957\u4ef6",
        "\u5e73\u53f0\u540c\u6b65\u53d1\u5e03 Youth Agent Skill Store\uff1a\u5b66\u751f\u53ef\u53d1\u5e03\u81ea\u5df1\u7684 Agent Skill\u3001\u5efa\u7acb\u4f5c\u54c1\u96c6\uff0c\u5e76\u4eb2\u773c\u770b\u5230\u81ea\u5df1\u7684\u521b\u4f5c\u5728\u771f\u5b9e\u673a\u5668\u4eba\u4e0a\u8fd0\u884c\uff1b\u8001\u5e08\u53ef\u5c06\u4f18\u79c0\u4f5c\u54c1\u5206\u4eab\u7ed9\u5168\u73ed\u3002FF \u8fd8\u542f\u52a8\u4e86\u5f00\u53d1\u8005\u751f\u6001\u6fc0\u52b1\u8ba1\u5212\uff0c\u901a\u8fc7\u6536\u76ca\u5206\u6210\u3001\u9ed1\u5ba2\u677e\u3001\u6821\u56ed\u8ba1\u5212\u548c\u5168\u7403\u793e\u533a\u66dd\u5149\uff0c\u8ba9\u6bcf\u4e00\u4f4d\u5f00\u53d1\u8005\u90fd\u80fd\u56e0\u521b\u9020\u83b7\u5f97\u56de\u62a5\u3002"
      ]
    },
    {
      "title": "FF Robotics PAR Partner Program: Building a Global EAI Education Ecosystem",
      "zhTitle": "FF Robotics PAR \u5408\u4f5c\u4f19\u4f34\u8ba1\u5212\uff1a\u5171\u5efa\u5168\u7403 EAI \u6559\u80b2\u751f\u6001",
      "body": [
        "At the launch, FF formally announced the FF Robotics PAR (Partner) Program, inviting institutions worldwide to join in three categories:",
        "\u2022Regional Channel Partners \u2014 expanding FF's sales and service network",
        "\u2022Education Content Partners \u2014 co-developing curriculum, teaching content, and educational applications",
        "\u2022Ecosystem Co-builders \u2014 deep collaboration around products, data, operations, and services",
        "Sequoia Educational Group joins as an Education Content Partner and institutional purchaser \u2014 one of the first PAR members to move from agreement to active classroom deployment. Through AgentTech Inc., Sequoia is already co-developing the curriculum framework that will power this ecosystem across its K\u201312 campuses."
      ],
      "zhBody": [
        "\u53d1\u5e03\u4f1a\u4e0a\uff0cFF \u6b63\u5f0f\u542f\u52a8 FF Robotics PAR\uff08\u5408\u4f5c\u4f19\u4f34\uff09\u8ba1\u5212\uff0c\u9762\u5411\u5168\u7403\u63a8\u52a8\u4e09\u7c7b\u5408\u4f5c\uff1a",
        "\u2022\u533a\u57df\u6e20\u9053\u4f19\u4f34\u2014\u2014\u5171\u540c\u6269\u5c55 FF \u7684\u9500\u552e\u4e0e\u670d\u52a1\u7f51\u7edc",
        "\u2022\u6559\u80b2\u5185\u5bb9\u4f19\u4f34\u2014\u2014\u5171\u540c\u5f00\u53d1\u8bfe\u7a0b\u4f53\u7cfb\u3001\u6559\u5b66\u5185\u5bb9\u53ca\u6559\u80b2\u5e94\u7528",
        "\u2022\u751f\u6001\u5171\u5efa\u4f19\u4f34\u2014\u2014\u56f4\u7ed5\u4ea7\u54c1\u3001\u6570\u636e\u3001\u8fd0\u8425\u4e0e\u670d\u52a1\u6df1\u5ea6\u5408\u4f5c",
        "\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u4ee5\u6559\u80b2\u5185\u5bb9\u4f19\u4f34\u4e0e\u9996\u6279\u673a\u6784\u91c7\u8d2d\u5546\u7684\u53cc\u91cd\u8eab\u4efd\u52a0\u5165 PAR \u8ba1\u5212\uff0c\u6210\u4e3a\u6700\u65e9\u5b9e\u73b0\u4ece\u7b7e\u7ea6\u5230\u8bfe\u5802\u771f\u5b9e\u843d\u5730\u7684 PAR \u6210\u5458\u4e4b\u4e00\u3002\u4f9d\u6258 AgentTech Inc.\uff0c\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u6b63\u5728\u5171\u540c\u7814\u53d1\u8bfe\u7a0b\u6846\u67b6\uff0c\u5e76\u5df2\u5728\u65d7\u4e0b K\u201312 \u6821\u533a\u5168\u9762\u63a8\u8fdb EAI \u6559\u80b2\u751f\u6001\u7684\u843d\u5730\u3002"
      ]
    },
    {
      "title": "About Sequoia Educational Group",
      "zhTitle": "\u5173\u4e8e\u7ea2\u6749\u6559\u80b2\u96c6\u56e2",
      "body": [
        "Sequoia Educational Group is a K-12 education organization serving children and families across Los Angeles and Orange County, California, with over ten years of experience in early childhood education, after-school programs, and Montessori teacher training. Learning Tree Walnut Education Center is Sequoia's flagship campus, located at 20781 Amar Rd., Unit 7, Walnut, CA 91789.",
        "Media inquiries: learningtreewalnut@gmail.com  |  909-612-7668  |  www.learningtrees.us",
        "Sequoia Educational Group  x  AgentTech Education  x  Faraday Future"
      ],
      "zhBody": [
        "\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\uff08Sequoia Educational Group\uff09\u662f\u670d\u52a1\u6d1b\u6749\u77f6\u53ca\u6a59\u53bf\u5730\u533a\u7684\u7efc\u5408\u6027 K-12 \u6559\u80b2\u673a\u6784\uff0c\u6df1\u8015\u5e7c\u513f\u6559\u80b2\u3001\u8bfe\u540e\u5b66\u672f\u8f85\u5bfc\u53ca\u8499\u53f0\u68ad\u5229\u6559\u5e08\u57f9\u8bad\u903e\u5341\u5e74\u3002Learning Tree Walnut Education Center \u662f\u7ea2\u6749\u6559\u80b2\u96c6\u56e2\u65d7\u4e0b\u6838\u5fc3\u6821\u533a\uff0c\u5730\u5740\uff1a20781 Amar Rd., Unit 7, Walnut, CA 91789\u3002",
        "\u5a92\u4f53\u8054\u7cfb\u53ca\u5408\u4f5c\u54a8\u8be2\uff1alearningtreewalnut@gmail.com  |  \u7535\u8bdd\uff1a909-612-7668  |  www.learningtrees.us",
        "Sequoia Educational Group  x  AgentTech Education  x  Faraday Future"
      ]
    }
  ]
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderNewsParagraph(text) {
  const clean = text.startsWith("•") ? text.slice(1).trim() : text;
  if (text.startsWith("•")) {
    return `<li>${escapeHtml(clean)}</li>`;
  }
  if (clean.startsWith('"') || clean.startsWith('â€œ')) {
    return `<blockquote>${escapeHtml(clean)}</blockquote>`;
  }
  return `<p>${escapeHtml(clean)}</p>`;
}

function renderNewsSections(article, language) {
  return article.sections.map((section) => {
    const title = language === "zh" ? section.zhTitle : section.title;
    const body = language === "zh" ? section.zhBody : section.body;
    let html = "";
    let listOpen = false;

    body.forEach((paragraph) => {
      if (paragraph.startsWith("•") && !listOpen) {
        html += '<ul class="news-article-list">';
        listOpen = true;
      }
      if (!paragraph.startsWith("•") && listOpen) {
        html += "</ul>";
        listOpen = false;
      }
      html += renderNewsParagraph(paragraph);
    });

    if (listOpen) html += "</ul>";

    return `
      <section class="news-story-section">
        <h3>${escapeHtml(title)}</h3>
        ${html}
      </section>`;
  }).join("");
}

function renderNewsArticlePanel(article, language) {
  const title = language === "zh" ? article.zhTitle : article.title;
  const excerpt = language === "zh" ? article.zhExcerpt : article.excerpt;
  const date = language === "zh" ? article.zhDisplayDate : article.displayDate;
  const category = language === "zh" ? article.zhCategory : article.category;

  return `
    <div class="news-language-panel" data-lang-panel="${language}" ${language === "zh" ? "hidden" : ""}>
      <div class="news-article-title-row">
        <div>
          <p class="eyebrow">${escapeHtml(category)}</p>
          <h2>${escapeHtml(title)}</h2>
        </div>
        <div class="news-article-meta">
          <strong>${escapeHtml(date)}</strong>
        </div>
      </div>
      <p class="news-article-deck">${escapeHtml(excerpt)}</p>
      ${renderNewsSections(article, language)}
    </div>`;
}

function renderNewsGallery(article, language = "en") {
  return article.images.map((image) => `
    <figure class="news-gallery-item">
      <img src="${image.src}" alt="${escapeHtml(image.alt)}" loading="lazy">
      <figcaption>${escapeHtml(language === "zh" ? image.zhCaption : image.caption)}</figcaption>
    </figure>`).join("");
}

function renderNews() {
  const article = sequoiaNewsArticle;
  const featured = article.images[0];
  return `
    <section class="news-list-hero">
      <div class="news-list-inner">
        <p class="eyebrow">Sequoia Updates</p>
        <h1>News</h1>
        <a class="news-list-card" href="#sequoia-ff-robots-2026" data-news-open>
          <div>
            <div class="news-list-meta"><span>${article.displayDate}</span></div>
            <h2>${escapeHtml(article.title)}</h2>
            <p>${escapeHtml(article.excerpt)}</p>
            <span class="news-read-more">Read more</span>
          </div>
          <img src="${featured.src}" alt="${escapeHtml(featured.alt)}">
        </a>
      </div>
    </section>
    <article class="news-article" id="sequoia-ff-robots-2026" hidden>
      <section class="news-slideshow" aria-label="Article image gallery">
        <div class="news-slideshow-main">
          <img data-slide-image src="${featured.src}" alt="${escapeHtml(featured.alt)}">
          <div class="news-slide-caption">
            <p data-slide-caption="en">${escapeHtml(featured.caption)}</p>
            <p data-slide-caption="zh" hidden>${escapeHtml(featured.zhCaption)}</p>
          </div>
          <div class="news-slide-dots">${article.images.map((_, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-slide-dot="${index}" aria-label="Show image ${index + 1}"></button>`).join("")}</div>
        </div>
        <div class="news-filmstrip">
          ${article.images.map((image, index) => `
            <button type="button" class="${index === 0 ? "active" : ""}" data-slide-index="${index}" data-src="${image.src}" data-alt="${escapeHtml(image.alt)}" data-caption-en="${escapeHtml(image.caption)}" data-caption-zh="${escapeHtml(image.zhCaption)}" aria-label="View image ${index + 1}">
              <img src="${image.src}" alt="${escapeHtml(image.alt)}">
            </button>`).join("")}
        </div>
      </section>
      <section class="news-article-body">
        <a class="news-back-link" href="#top" data-news-close>Back to News</a>
        <div class="news-language-bar" aria-label="Article language">
          <button type="button" class="active" data-news-lang="en">English</button>
          <button type="button" data-news-lang="zh">中文</button>
        </div>
        ${renderNewsArticlePanel(article, "en")}
        ${renderNewsArticlePanel(article, "zh")}
      </section>
    </article>`;
}

function initNewsLanguageToggles() {
  const buttons = document.querySelectorAll("[data-news-lang]");
  if (!buttons.length) return;
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.newsLang;
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll("[data-lang-panel]").forEach((panel) => {
        panel.hidden = panel.dataset.langPanel !== language;
      });
      document.querySelectorAll("[data-slide-caption]").forEach((caption) => {
        caption.hidden = caption.dataset.slideCaption !== language;
      });
    });
  });
}

function initNewsSlideshow() {
  const image = document.querySelector("[data-slide-image]");
  const captions = {
    en: document.querySelector('[data-slide-caption="en"]'),
    zh: document.querySelector('[data-slide-caption="zh"]')
  };
  const thumbs = [...document.querySelectorAll("[data-slide-index]")];
  const dots = [...document.querySelectorAll("[data-slide-dot]")];
  if (!image || !thumbs.length) return;

  const setSlide = (index) => {
    const thumb = thumbs[index];
    if (!thumb) return;
    image.src = thumb.dataset.src;
    image.alt = thumb.dataset.alt || "";
    if (captions.en) captions.en.textContent = thumb.dataset.captionEn || "";
    if (captions.zh) captions.zh.textContent = thumb.dataset.captionZh || "";
    thumbs.forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === index));
    dots.forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === index));
  };

  thumbs.forEach((thumb, index) => thumb.addEventListener("click", () => setSlide(index)));
  dots.forEach((dot, index) => dot.addEventListener("click", () => setSlide(index)));
}

function initNewsArticleOpen() {
  const openLink = document.querySelector("[data-news-open]");
  const closeLink = document.querySelector("[data-news-close]");
  const article = document.querySelector(".news-article");
  if (!openLink || !article) return;

  openLink.addEventListener("click", (event) => {
    event.preventDefault();
    article.hidden = false;
    article.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if (closeLink) {
    closeLink.addEventListener("click", (event) => {
      event.preventDefault();
      article.hidden = true;
      document.querySelector(".news-list-hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}
function render() {
  let html = "";
  const page = pageName();
  if (page === "home") html = renderHome();
  if (page === "about") html = renderAbout();
  if (page === "schools") html = renderSchools();
  if (page === "programs") html = renderPrograms();
  if (page === "agentech") html = renderAgentech();
  if (page === "ai-club") html = renderAiClub();
  if (page === "news") html = renderNews();
  if (page === "community") html = renderCommunity();
  if (page === "partnership") html = renderPartnership();
  if (page === "careers") html = renderCareers();
  if (page === "contact") html = renderContact();
  if (page === "brand") html = renderBrand();
  document.body.insertAdjacentHTML("afterbegin", nav());
  document.querySelector("main").innerHTML = html;
  document.body.insertAdjacentHTML("beforeend", footer());
  if (page === "news") {
    initNewsLanguageToggles();
    initNewsSlideshow();
    initNewsArticleOpen();
  }
}

render();



