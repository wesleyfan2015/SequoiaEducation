const data = window.SEQUOIA_DATA;

const pages = [
  ["/", "Home", "home"],
  ["/about", "About", "about"],
  ["/schools-brands", "Schools & Brands", "schools"],
  ["/programs", "Programs", "programs"],
  ["/agentech-education", "Agentech Education", "agentech"],
  ["/ai-club", "AI Club", "ai-club"],
  ["/news-events", "News & Events", "news"],
  ["/community-impact", "Community Impact", "community"],
  ["/partnership", "Partnership", "partnership"],
  ["/careers", "Careers", "careers"],
  ["/contact", "Contact", "contact"]
];

const utilityPages = new Set(["/careers", "/contact"]);

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
  const bottomPages = pages.filter(([href]) => utilityPages.has(href));
  return `
    <header class="site-header">
      <div class="nav">
        <a class="brand-lockup" href="/">
          <img src="images/sequoia-education-group-white-logo.png" alt="Sequoia Education Group logo">
          <span>${data.name}<br>${data.zhName}</span>
        </a>
        <div class="nav-panel">
          <nav class="nav-links nav-links-main" aria-label="Main navigation">
            ${mainPages.map(([href, label]) => `<a class="${active === href ? "active" : ""}" href="${href}">${label}</a>`).join("")}
          </nav>
          <nav class="nav-links nav-links-bottom" aria-label="Secondary navigation">
            ${bottomPages.map(([href, label]) => `<a class="${active === href ? "active" : ""}" href="${href}">${label}</a>`).join("")}
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
          ["2025", "Nuts Education Institute and Yoga Me & Beyond / \u5b66\u672f\u89c4\u5212\u4e0e\u8eab\u5fc3\u5065\u5eb7"],
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

function renderNews() {
  const categories = [
    ["Group News", "\u96c6\u56e2\u65b0\u95fb", "Milestones, strategic updates, anniversaries, awards, and group-wide announcements.", "\u96c6\u56e2\u91cc\u7a0b\u7891\u3001\u6218\u7565\u66f4\u65b0\u3001\u5468\u5e74\u6d3b\u52a8\u3001\u5956\u9879\u8363\u8a89\u4e0e\u96c6\u56e2\u516c\u544a\u3002"],
    ["School Events", "\u6821\u56ed\u6d3b\u52a8", "Campus activities, open houses, seasonal celebrations, classroom moments, and family events.", "\u6821\u533a\u6d3b\u52a8\u3001\u5f00\u653e\u65e5\u3001\u8282\u65e5\u5e86\u795d\u3001\u8bfe\u5802\u77ac\u95f4\u4e0e\u5bb6\u5ead\u6d3b\u52a8\u3002"],
    ["Community Events", "\u793e\u533a\u6d3b\u52a8", "Volunteer service, foundation activities, civic engagement, and local partnerships.", "\u5fd7\u613f\u670d\u52a1\u3001\u57fa\u91d1\u4f1a\u6d3b\u52a8\u3001\u793e\u533a\u53c2\u4e0e\u4e0e\u672c\u5730\u5408\u4f5c\u3002"],
    ["Student Highlights", "\u5b66\u751f\u4eae\u70b9", "Student work, presentations, camp showcases, robotics demos, and growth stories.", "\u5b66\u751f\u4f5c\u54c1\u3001\u5c55\u793a\u6d3b\u52a8\u3001\u8425\u5730\u6210\u679c\u3001\u673a\u5668\u4eba demo \u4e0e\u6210\u957f\u6545\u4e8b\u3002"],
    ["Teacher Stories", "\u6559\u5e08\u6545\u4e8b", "Teacher recognition, classroom practice, professional growth, and team culture.", "\u6559\u5e08\u8868\u5f70\u3001\u8bfe\u5802\u5b9e\u8df5\u3001\u4e13\u4e1a\u6210\u957f\u4e0e\u56e2\u961f\u6587\u5316\u3002"],
    ["Parent Workshops", "\u5bb6\u957f\u8bfe\u5802", "Parent education, wellness, academic planning, AI literacy, and school-family partnership.", "\u5bb6\u957f\u6559\u80b2\u3001\u8eab\u5fc3\u5065\u5eb7\u3001\u5b66\u672f\u89c4\u5212\u3001AI \u7d20\u517b\u4e0e\u5bb6\u6821\u5408\u4f5c\u3002"]
  ];

  return `
    ${pageHeader("News & Events", "\u65b0\u95fb\u6d3b\u52a8", "Stories from Sequoia's group growth, schools, classrooms, teachers, students, families, and community events.", "\u5c55\u793a\u96c6\u56e2\u53d1\u5c55\u3001\u5b66\u6821\u6d3b\u52a8\u3001\u8bfe\u5802\u6545\u4e8b\u3001\u6559\u5e08\u6545\u4e8b\u3001\u5b66\u751f\u4eae\u70b9\u3001\u5bb6\u957f\u8bfe\u5802\u4e0e\u793e\u533a\u6d3b\u52a8\u3002")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">
        ${categories.map((item) => card(item[0], item[1], item[2], item[3])).join("")}
      </div>
    </div></section>`;
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
}

render();
