const data = window.SEQUOIA_DATA;

const pages = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["schools-brands.html", "Schools & Brands"],
  ["programs.html", "Programs"],
  ["agentech-education.html", "Agentech Education"],
  ["ai-club.html", "AI Club"],
  ["news-events.html", "News & Events"],
  ["community-impact.html", "Community Impact"],
  ["partnership.html", "Partnership"],
  ["careers.html", "Careers"],
  ["contact.html", "Contact"]
];

function pageName() {
  return document.body.dataset.page || "home";
}

function brandSlug() {
  return document.body.dataset.brand || "";
}

function activeHref() {
  const file = location.pathname.split("/").pop() || "index.html";
  return file;
}

function nav() {
  const active = activeHref();
  return `
    <header class="site-header">
      <div class="nav">
        <a class="brand-lockup" href="index.html">
          <img src="images/sequoia-education-group-white-logo.png" alt="Sequoia Education Group logo">
          <span>${data.name}<br>${data.zhName}</span>
        </a>
        <nav class="nav-links" aria-label="Main navigation">
          ${pages.map(([href, label]) => `<a class="${active === href ? "active" : ""}" href="${href}" ${href.startsWith("https://") ? 'target="_blank" rel="noreferrer"' : ""}>${label}</a>`).join("")}
        </nav>
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
          <strong>Website links / ç¬¬ä¸‰æ–‡ä»¶é“¾æŽ¥</strong>
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
      <a class="button light" href="brand-${brand.slug}.html">Learn More / äº†è§£æ›´å¤š</a>
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
            <a class="button" href="schools-brands.html">Explore Our Schools</a>
            <a class="button secondary" href="news-events.html">News & Events</a>
            <a class="button secondary" href="partnership.html">Partner With Us</a>
          </div>
        </div>
        <div class="hero-card">
          <img src="images/sequoia-education-group-red-logo.jpg" alt="Sequoia Education Group logo">
          <h3>Official Positioning / å®˜æ–¹å®šä½</h3>
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
          <p class="eyebrow">About Snapshot / å…³äºŽå¿«ç…§</p>
          <h2>A ten-year Southern California education ecosystem</h2>
          <p>Started in Walnut in 2015, Sequoia has grown from one Montessori preschool into a multi-brand education group spanning preschool, after-school learning, teacher training, academic planning, community service, wellness, and future AI education.</p>
          <p>Sequoia äºŽ 2015 å¹´ä»Ž Walnut çš„ç¬¬ä¸€æ‰€è’™ç‰¹æ¢­åˆ©å¹¼å„¿å›­èµ·æ­¥ï¼Œåå¹´å‘å±•ä¸ºè¦†ç›–å¹¼å„¿æ•™è‚²ã€è¯¾åŽæ•™è‚²ã€æ•™å¸ˆåŸ¹è®­ã€å‡å­¦è§„åˆ’ã€å…¬ç›Šç¤¾åŒºã€èº«å¿ƒå¥åº·ä¸Žæœªæ¥ AI æ•™è‚²çš„å¤šå“ç‰Œæ•™è‚²ç”Ÿæ€ã€‚</p>
        </div>
      </div>
      <div class="program-grid">
        ${data.programs.slice(0, 8).map((program) => card(program[0], program[1], program[2], program[3])).join("")}
      </div>
    </section>
    <section class="section alt"><div class="section-inner">
      <div class="section-head"><div><p class="eyebrow">Brand Matrix / å“ç‰ŒçŸ©é˜µ</p><h2>Schools, programs, foundation, wellness, and future learning</h2></div></div>
      <div class="card-grid">${data.brands.map(brandCard).join("")}</div>
    </div></section>
    <section class="section">
      <div class="feature-panel">
        <div class="feature-logo-panel">
          <img src="images/agentech-education-logo.png" alt="Agentech Education logo">
        </div>
        <div class="feature-content">
          <p class="eyebrow">Agentech Education Preview / AI æœªæ¥å­¦ä¹ é¢„è§ˆ</p>
          <h2>AI literacy, robotics, and future-ready learning for K-12</h2>
          <p>${data.agentech.role}</p>
          <p>${data.agentech.zhRole}</p>
          <div class="button-row"><a class="button" href="https://www.agent-tech.ai/agentech-education" target="_blank" rel="noreferrer">View Agentech Education</a></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">10-Year Timeline / åå¹´æ—¶é—´çº¿</p><h2>Rooted growth</h2></div></div>
      <div class="timeline">
        ${[
          ["2015", "Walnut International Montessori Preschool founded / Walnut åˆ›æ ¡"],
          ["2019", "Learning Tree Montessori of Arcadia / Arcadia æ ¡åŒº"],
          ["2020", "Learning Tree Walnut Education Center / Walnut è¯¾åŽæ•™è‚²ä¸­å¿ƒ"],
          ["2023", "Montessori of Anaheim / Anaheim æ ¡åŒº"],
          ["2024", "Montessori Teacher Preparation of California / æ•™å¸ˆåŸ¹è®­"],
          ["2025", "Nuts Education Institute and Yoga Me & Beyond / å­¦æœ¯è§„åˆ’ä¸Žèº«å¿ƒå¥åº·"],
          ["Coming Next", "Agentech Education / AI Future Learning"]
        ].map(([year, text]) => `<div class="timeline-item"><strong>${year}</strong><p>${text}</p></div>`).join("")}
      </div>
    </section>
    <section class="section alt"><div class="section-inner">
      <div class="split">
        <div>
          <p class="eyebrow">Founder Message / åˆ›å§‹äººå¯„è¯­</p>
          <h2>Rooted in care, growing with families</h2>
          <p>Connie's message should be a short, warm note about ten years of building schools with teachers, families, and communities. A professional photo and bio should be added before launch.</p>
          <p>Connie çš„å¯„è¯­åº”ç®€çŸ­æ¸©æš–ï¼Œè®²è¿°åå¹´æ¥ä¸Žè€å¸ˆã€å®¶åº­å’Œç¤¾åŒºå…±åŒå»ºè®¾å­¦æ ¡çš„åˆå¿ƒã€‚ä¸Šçº¿å‰éœ€è¡¥å……ä¸“ä¸šç…§ç‰‡ä¸Ž founder bioã€‚</p>
        </div>
        <div class="card">
          <p class="eyebrow">Final CTA / è¡ŒåŠ¨å…¥å£</p>
          <h3>Enroll Now / Join Our Team / Partner With Us</h3>
          <div class="button-row">
            <a class="button" href="contact.html">Enroll Now</a>
            <a class="button light" href="careers.html">Join Our Team</a>
            <a class="button light" href="partnership.html">Partner With Us</a>
          </div>
        </div>
      </div>
    </div></section>`;
}

function renderAbout() {
  return `
    ${pageHeader("About Sequoia Education Group", "å…³äºŽçº¢è¡«æ•™è‚²é›†å›¢", "Our Story, Mission & Values, 10-Year Milestone, Founder Message, Leadership/Team, Awards & Recognition.", "åŒ…å«é›†å›¢æ•…äº‹ã€ä½¿å‘½ä»·å€¼ã€åå¹´é‡Œç¨‹ç¢‘ã€åˆ›å§‹äººå¯„è¯­ã€é¢†å¯¼å›¢é˜Ÿã€å¥–é¡¹è£èª‰ã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="section-head">
        <div>
          <p class="eyebrow">Group Story Gallery / é›†å›¢æ•…äº‹è½®æ’­</p>
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
          <h2>Mission & Values / ä½¿å‘½ä¸Žä»·å€¼</h2>
          <p>${data.keywords}</p>
          <p>${data.zhKeywords}</p>
          <p>Sequoia should present itself as a trusted education group with local roots, a growing ecosystem, and a careful future-learning vision.</p>
          <p>Sequoia åº”å‘ˆçŽ°ä¸ºæœ‰æœ¬åœ°æ ¹åŸºã€ä¸æ–­æˆé•¿ã€å¹¶è°¨æ…Žå¸ƒå±€æœªæ¥å­¦ä¹ çš„å¯ä¿¡æ•™è‚²é›†å›¢ã€‚</p>
        </div>
        <ul class="detail-list">
          <li><strong>Founder Message:</strong> Connie short message and professional photo needed. / éœ€è¦ Connie ä¸“ä¸šå¤´åƒä¸Žç®€çŸ­å¯„è¯­ã€‚</li>
          <li><strong>Leadership/Team:</strong> add real leadership and team profiles. / è¡¥å……çœŸå®žé¢†å¯¼å›¢é˜Ÿèµ„æ–™ã€‚</li>
          <li><strong>Awards & Recognition:</strong> add certificate and Walnut city honor photos only after verification. / å¥–é¡¹è¯ä¹¦ä¸ŽåŸŽå¸‚è£èª‰éœ€æ ¸å®žåŽä¸Šçº¿ã€‚</li>
        </ul>
      </div>
    </section>`;
}

function renderSchools() {
  return `
    ${pageHeader("Our Schools & Brands", "æ——ä¸‹å­¦æ ¡ä¸Žå“ç‰Œ", "Filter-ready cards for schools, programs, foundation, wellness, and future initiatives. Each brand has its own detail page.", "å±•ç¤ºæ‰€æœ‰å­¦æ ¡ã€é¡¹ç›®ã€åŸºé‡‘ä¼šã€èº«å¿ƒå¥åº·å“ç‰Œå’Œæœªæ¥æ•™è‚²é¡¹ç›®ï¼›æ¯ä¸ªå“ç‰Œéƒ½æœ‰ç‹¬ç«‹è¯¦æƒ…é¡µã€‚")}
    <section class="section schools-surface"><div class="section-inner"><div class="card-grid">${data.brands.map(brandCard).join("")}</div></div></section>`;
}

function renderPrograms() {
  return `
    ${pageHeader("Programs", "æ•™è‚²é¡¹ç›®", "Programs are organized by audience and learning need, from Montessori preschool to AI future learning.", "æ•™è‚²é¡¹ç›®æŒ‰æœåŠ¡å¯¹è±¡å’Œå­¦ä¹ éœ€æ±‚åˆ†ç±»ï¼Œä»Žè’™ç‰¹æ¢­åˆ©å¹¼å„¿æ•™è‚²åˆ° AI æœªæ¥å­¦ä¹ ã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="program-grid">${data.programs.map((p) => card(p[0], p[1], p[2], p[3])).join("")}</div>
    </div></section>`;
}

function renderAgentech() {
  return `
    ${pageHeader("Agentech Education", "Agentech Education / AI æœªæ¥å­¦ä¹ ", "AI Literacy, Robotics, and Future-Ready Learning for K-12.", "è®©å­©å­ç†è§£ AIã€åˆ›é€ é¡¹ç›®ã€é¢å‘æœªæ¥å­¦ä¹ ã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="notice"><strong>Role / é¡µé¢è§’è‰²:</strong> ${data.agentech.role}<br>${data.agentech.zhRole}</div>
      <div class="card-grid" style="margin-top:22px">${data.agentech.modules.map((m) => card(m[0], m[2], m[1], m[3])).join("")}</div>
    </div></section>
    <section class="section">
      <div class="split">
        <div>${card("Avoid / å¿…é¡»é¿å…", "Safety", data.agentech.avoid.join(" "), data.agentech.zhAvoid.join(" "))}</div>
        <div>${card("Future expansion / æœªæ¥æ‰©å±•", "Roadmap", data.agentech.future.join(", "), "AI Club ç‹¬ç«‹é¡µã€AI Camp ç‹¬ç«‹é¡µã€Student Showcaseã€Curriculum for Schoolsã€Parent Workshopã€‚")}</div>
      </div>
    </section>`;
}

function renderAiClub() {
  return `
    ${pageHeader("AI Club / Robotics & Data Lab", "AI Club / æœºå™¨äººä¸Žæ•°æ®å®žéªŒå®¤", "Optional secondary page for AI Club, robotics, data labs, project-based learning, and student showcase once programs are stable.", "å¯é€‰äºŒçº§é¡µï¼›å½“è¯¾ç¨‹ç¨³å®šåŽç”¨äºŽå±•ç¤º AI Clubã€æœºå™¨äººã€æ•°æ®å®žéªŒå®¤ã€é¡¹ç›®åˆ¶å­¦ä¹ å’Œå­¦ç”Ÿä½œå“ã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="program-grid">
        ${["K-2", "Grades 3-5", "Grades 6-8", "Grades 9-12"].map((age) => card(age, "Age Track / å¹´é¾„æ®µ", "Show goals, project outcomes, student fit, and course length.", "å†™å­¦ä¹ ç›®æ ‡ã€é¡¹ç›®äº§å‡ºã€é€‚åˆå­©å­ã€è¯¾ç¨‹æ—¶é•¿ã€‚")).join("")}
      </div>
    </div></section>`;
}

function renderNews() {
  return `
    ${pageHeader("News & Events", "æ–°é—»æ´»åŠ¨", "CMS model for group news, school events, community events, student highlights, teacher stories, parent workshops, and media coverage.", "é›†å›¢æ–°é—»ã€æ ¡å›­æ´»åŠ¨ã€ç¤¾åŒºæ´»åŠ¨ã€å­¦ç”Ÿäº®ç‚¹ã€æ•™å¸ˆæ•…äº‹ã€å®¶é•¿è¯¾å ‚ã€åª’ä½“æŠ¥é“ï¼›éœ€è¦ CMS ç®¡ç†ã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">${data.newsFields.map((f) => card(f[0], `${f[4]} / ${f[2]}`, f[1], f[3])).join("")}</div>
    </div></section>`;
}

function renderCommunity() {
  return `
    ${pageHeader("Community Impact", "ç¤¾åŒºå½±å“åŠ›", "Sequoia Forest Foundation, volunteer service, city honors, activity photos, and community news.", "Sequoia Forest Foundationã€å¿—æ„¿æœåŠ¡ã€å…¬ç›Šæ´»åŠ¨ã€æ”¿åºœ/ç¤¾åŒºè£èª‰ã€ç…§ç‰‡ä¸Žæ–°é—»ã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="feature-panel">
        <img src="images/sequoia-forest-foundation-logo.jpg" alt="Sequoia Forest Foundation">
        <div class="feature-content">
          <h2>Foundation and service pathway / åŸºé‡‘ä¼šä¸Žå¿—æ„¿æœåŠ¡è·¯å¾„</h2>
          <p>Student volunteering, community participation, social responsibility, civic awareness, and leadership should connect to news and event pages.</p>
          <p>å­¦ç”Ÿå¿—æ„¿æœåŠ¡ã€ç¤¾åŒºå‚ä¸Žã€ç¤¾ä¼šè´£ä»»æ„Ÿã€å…¬æ°‘æ„è¯†ä¸Žé¢†å¯¼åŠ›ï¼Œåº”ä¸Žæ–°é—»æ´»åŠ¨é¡µé¢æ‰“é€šã€‚</p>
          <p class="notice">Confirm nonprofit registration before publishing formal nonprofit claims. / æ­£å¼å…¬ç›Šèµ„è´¨ä¸Žéžè¥åˆ©æ³¨å†Œä¿¡æ¯éœ€ä¸Šçº¿å‰ç¡®è®¤ã€‚</p>
        </div>
      </div>
    </div></section>`;
}

function renderPartnership() {
  return `
    ${pageHeader("Partnership & Strategic Growth", "åˆä½œä¸Žæˆ˜ç•¥å‘å±•", "A quiet page for VC investors, partners, employers, and education institutions.", "ç»™ VCã€åˆä½œæ–¹ã€é›‡ä¸»ã€æ•™è‚²æœºæž„çœ‹çš„ä½Žè°ƒé¡µé¢ï¼›å»ºè®®æ”¾ footer å’Œé¦–é¡µæŒ‰é’®ï¼Œä¸ä¸€å®šæ”¾ä¸»å¯¼èˆªã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">
        ${card("Education ecosystem", "Investor angle / æŠ•èµ„äººè§’åº¦", "Sequoia is a Southern California multi-brand, multi-stage education ecosystem, not a single preschool.", "Sequoia ä¸æ˜¯å•ä¸€å¹¼å„¿å›­ï¼Œè€Œæ˜¯å—åŠ å·žå¤šå“ç‰Œã€å¤šé˜¶æ®µæ•™è‚²ç”Ÿæ€ã€‚")}
        ${card("Partnership form fields", "Form / è¡¨å•", "Organization, Contact Person, Role, Partnership Type, Budget/Timeline optional, Message.", "Organizationã€Contact Personã€Roleã€Partnership Typeã€Budget/Timelineï¼ˆå¯é€‰ï¼‰ã€Messageã€‚")}
        ${card("Agentech partnerships", "Future learning / æœªæ¥å­¦ä¹ ", "Partner for school programs, camps, curriculum pilots, or community workshops.", "å­¦æ ¡é¡¹ç›®ã€è¥åœ°ã€è¯¾ç¨‹è¯•ç‚¹ã€ç¤¾åŒºå·¥ä½œåŠåˆä½œå…¥å£ã€‚")}
      </div>
    </div></section>`;
}

function renderCareers() {
  return `
    ${pageHeader("Careers", "æ‹›è˜", "Career page for role categories, team culture, growth opportunities, and application fields.", "èŒä½ç±»åˆ«ã€å›¢é˜Ÿæ–‡åŒ–ã€æˆé•¿æœºä¼šã€ç”³è¯·è¡¨å•/é‚®ç®±ã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">
        ${card("Teaching roles", "Schools / å­¦æ ¡", "Montessori teachers, assistants, after-school instructors, Chinese teachers, camp teachers.", "è’™ç‰¹æ¢­åˆ©è€å¸ˆã€åŠ©æ•™ã€è¯¾åŽè€å¸ˆã€ä¸­æ–‡è€å¸ˆã€è¥åœ°è€å¸ˆã€‚")}
        ${card("Program and operations roles", "Group / é›†å›¢", "Campus operations, admissions, marketing, curriculum support, community events.", "æ ¡åŒºè¿è¥ã€æ‹›ç”Ÿã€å¸‚åœºã€è¯¾ç¨‹æ”¯æŒã€ç¤¾åŒºæ´»åŠ¨ã€‚")}
        ${card("Application fields", "Form / è¡¨å•", "Role Interest, Resume Upload, Credentials/Permit optional, Availability.", "Role Interestã€Resume Uploadã€Credentials/Permitï¼ˆå¯é€‰ï¼‰ã€Availabilityã€‚")}
      </div>
    </div></section>`;
}

function renderContact() {
  return `
    ${pageHeader("Contact", "è”ç³»æˆ‘ä»¬", "Inquiry routing for admissions, teacher training, partnerships, careers, media, and foundation/donation.", "æŒ‰å’¨è¯¢ç±»åž‹åˆ†æµï¼šæ‹›ç”Ÿã€æ•™å¸ˆåŸ¹è®­ã€åˆä½œã€æ‹›è˜ã€åª’ä½“ã€å…¬ç›Šã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="split">
        <div class="card">
          <h2>Sequoia Education Group</h2>
          <p>${data.address}<br>${data.email}<br>${data.domain}</p>
          <p class="notice">Before launch, verify each entity's legal name, license, address, phone, and email. / ä¸Šçº¿å‰æ ¸å®žæ¯ä¸ªå®žä½“çš„ legal nameã€licenseã€åœ°å€ã€ç”µè¯ã€é‚®ç®±ã€‚</p>
        </div>
        <div class="card-grid">${data.formFields.map((f) => card(f[0], "Form / è¡¨å•", f[1], f[2])).join("")}</div>
      </div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">External Links / ç¬¬ä¸‰æ–‡ä»¶é“¾æŽ¥</p><h2>Official school and organization links</h2></div></div>
      <div class="link-grid">${data.externalLinks.map(([name, url]) => card(name, "Official link", url, "", `<a class="button light" href="${url}" target="_blank" rel="noreferrer">Open Website</a>`)).join("")}</div>
    </section>`;
}

function renderTechnical() {
  return `
    <section class="section alt"><div class="section-inner">
      <div class="section-head"><div><p class="eyebrow">Technical / CMS / SEO</p><h2>Developer requirements from the brief</h2></div></div>
      <div class="card-grid">${data.technical.map((t) => card(t[0], "Requirement / éœ€æ±‚", t[1], t[2])).join("")}</div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Launch Checklist / ä¸Šçº¿å‰æ ¸å®ž</p><h2>Must confirm before publishing</h2></div></div>
      <div class="card-grid">${data.checklist.map((c) => card(c[0], c[2], c[1], c[3])).join("")}</div>
    </section>
    <section class="section alt"><div class="section-inner">
      <div class="section-head"><div><p class="eyebrow">Reference Websites / å‚è€ƒç½‘ç«™</p><h2>15 reference site notes</h2></div></div>
      <div class="card-grid">${data.referenceSites.map((r) => card(r[0], r[2], r[3], "", `<a href="${r[1]}" target="_blank" rel="noreferrer">${r[1]}</a>`)).join("")}</div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Implementation Phases / å®žçŽ°é¡ºåº</p><h2>Recommended build order</h2></div></div>
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
            <li><strong>Services / æœåŠ¡:</strong> add age range, programs, address, contact, photos, related news, and tour CTA for each campus or brand.</li>
            <li><strong>Required check / å¿…é¡»æ ¸å®ž:</strong> legal name, license, exact address, phone, email, student numbers, credential claims, and photo permission.</li>
            <li><strong>CTA / è¡ŒåŠ¨å…¥å£:</strong> Schedule a Tour, Enrollment Inquiry, Contact the Campus.</li>
          </ul>
          <div class="button-row">
            <a class="button" href="contact.html">Contact / è”ç³»</a>
            ${brand.url ? `<a class="button light" href="${brand.url}" target="_blank" rel="noreferrer">Official Website</a>` : ""}
          </div>
        </div>
      </div>
    </div></section>`;
}

function renderRoutes() {
  return `
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Required Pages & Routes / å¿…éœ€é¡µé¢ä¸Žè·¯ç”±</p><h2>Information architecture from the brief</h2></div></div>
      <div class="card-grid">${data.routes.map((r) => card(r[1], r[0], r[2], "")).join("")}</div>
    </section>`;
}

function renderAgentech() {
  return `
    ${pageHeader("Agentech Education", "Agentech Education / AI Future Learning", "AI Literacy, Robotics, and Future-Ready Learning for K-12.", "è®©å­©å­ç†è§£ AIã€åˆ›é€ é¡¹ç›®ã€é¢å‘æœªæ¥å­¦ä¹ ã€‚")}
    <section class="section alt"><div class="section-inner">
      <div class="feature-panel">
        <div class="feature-content">
          <div class="inline-logo-panel"><img class="agentech-logo" src="images/agentech-education-logo.png" alt="Agentech Education logo"></div>
          <h2>AI imagination, robotics, and project-based future learning</h2>
          <p>Agentech Education introduces students to age-appropriate AI, creativity, robotics, drones, computer vision, and hands-on engineering challenges.</p>
          <p>Agentech Education é¢å‘ä¸åŒå¹´é¾„æ®µå­¦ç”Ÿæä¾›é€‚é¾„ AIã€åˆ›é€ åŠ›ã€æœºå™¨äººã€æ— äººæœºã€è®¡ç®—æœºè§†è§‰ä¸ŽåŠ¨æ‰‹å·¥ç¨‹æŒ‘æˆ˜ã€‚</p>
          <div class="button-row">
            <a class="button" href="https://www.agent-tech.ai/talents" target="_blank" rel="noreferrer">AI Robotics Club</a>
            <a class="button light" href="contact.html">Request Program Info</a>
          </div>
        </div>
        <img src="images/agentech-robotics-club-preview.png" alt="Agentech robotics project preview">
      </div>
      <div class="program-grid" style="margin-top:24px">
        ${data.agentech.gradeTracks.map((track) => card(track[0], track[1], track[2], track[3])).join("")}
      </div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Walnut 2026 Programs / Walnut 2026 è¯¾ç¨‹</p><h2>Summer AI tracks from Agentech Education</h2></div></div>
      <div class="card-grid">
        ${data.agentech.courses.map((course) => card(course[1], `${course[0]} / ${course[3]} / ${course[4]}`, course[2], "Walnut æ ¡åŒº 2026 Summer é¡¹ç›®ã€‚")).join("")}
      </div>
    </section>`;
}

function renderAiClub() {
  return `
    ${pageHeader("AI Robotics Club", "AI æœºå™¨äººä¿±ä¹éƒ¨", "Robotics Competition & Engineering Membership Program.", "æœºå™¨äººç«žèµ›ä¸Žå·¥ç¨‹ç ”å‘ä¼šå‘˜è®¡åˆ’ã€‚")}
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
          <div class="button-row"><a class="button" href="https://www.agent-tech.ai/talents" target="_blank" rel="noreferrer">View Agentech Talents</a></div>
        </div>
      </div>
      <div class="split" style="margin-top:34px">
        <div>
          <p class="eyebrow">Main Introduction / ä¸»ä»‹ç»</p>
          <h2>Understand why robots work, why they fail, and how to improve them.</h2>
        </div>
        <div>
          <p>${data.roboticsClub.main}</p>
          <p>${data.roboticsClub.zhMain}</p>
        </div>
      </div>
      <div class="section-head" style="margin-top:34px"><div><p class="eyebrow">What Students Learn / å­¦ç”Ÿå°†å­¦ä¹ ä»€ä¹ˆ</p><h2>Engineering and AI skills</h2></div></div>
      <div class="card-grid">
        ${data.roboticsClub.learnSections.map((item) => card(item[0], item[2], item[1], item[3])).join("")}
      </div>
      <div class="section-head" style="margin-top:34px"><div><p class="eyebrow">Student Growth / å­¦ç”Ÿæˆé•¿</p><h2>Core abilities</h2></div></div>
      <div class="program-grid">
        ${data.roboticsClub.abilities.map((item) => card(item[0], item[2], item[1], item[3])).join("")}
      </div>
      <div class="section-head" style="margin-top:34px"><div><p class="eyebrow">Project Outputs / é¡¹ç›®äº§å‡º</p><h2>Portfolio-ready work</h2></div></div>
      <div class="program-grid">
        ${data.roboticsClub.outputs.map((item) => card(item, "Output / æˆæžœ", "Students document and present milestone work.", "å­¦ç”Ÿè®°å½•å¹¶å±•ç¤ºé˜¶æ®µæ€§é¡¹ç›®æˆæžœã€‚")).join("")}
      </div>
    </div></section>`;
}

function renderNews() {
  const categories = [
    ["Group News", "é›†å›¢æ–°é—»", "Milestones, strategic updates, anniversaries, awards, and group-wide announcements.", "é›†å›¢é‡Œç¨‹ç¢‘ã€æˆ˜ç•¥æ›´æ–°ã€å‘¨å¹´æ´»åŠ¨ã€å¥–é¡¹è£èª‰ä¸Žé›†å›¢å…¬å‘Šã€‚"],
    ["School Events", "æ ¡å›­æ´»åŠ¨", "Campus activities, open houses, seasonal celebrations, classroom moments, and family events.", "æ ¡åŒºæ´»åŠ¨ã€å¼€æ”¾æ—¥ã€èŠ‚æ—¥åº†ç¥ã€è¯¾å ‚çž¬é—´ä¸Žå®¶åº­æ´»åŠ¨ã€‚"],
    ["Community Events", "ç¤¾åŒºæ´»åŠ¨", "Volunteer service, foundation activities, civic engagement, and local partnerships.", "å¿—æ„¿æœåŠ¡ã€åŸºé‡‘ä¼šæ´»åŠ¨ã€ç¤¾åŒºå‚ä¸Žä¸Žæœ¬åœ°åˆä½œã€‚"],
    ["Student Highlights", "å­¦ç”Ÿäº®ç‚¹", "Student work, presentations, camp showcases, robotics demos, and growth stories.", "å­¦ç”Ÿä½œå“ã€å±•ç¤ºæ´»åŠ¨ã€è¥åœ°æˆæžœã€æœºå™¨äºº demo ä¸Žæˆé•¿æ•…äº‹ã€‚"],
    ["Teacher Stories", "æ•™å¸ˆæ•…äº‹", "Teacher recognition, classroom practice, professional growth, and team culture.", "æ•™å¸ˆè¡¨å½°ã€è¯¾å ‚å®žè·µã€ä¸“ä¸šæˆé•¿ä¸Žå›¢é˜Ÿæ–‡åŒ–ã€‚"],
    ["Parent Workshops", "å®¶é•¿è¯¾å ‚", "Parent education, wellness, academic planning, AI literacy, and school-family partnership.", "å®¶é•¿æ•™è‚²ã€èº«å¿ƒå¥åº·ã€å­¦æœ¯è§„åˆ’ã€AI ç´ å…»ä¸Žå®¶æ ¡åˆä½œã€‚"]
  ];

  return `
    ${pageHeader("News & Events", "æ–°é—»æ´»åŠ¨", "Stories from Sequoia's group growth, schools, classrooms, teachers, students, families, and community events.", "å±•ç¤ºé›†å›¢å‘å±•ã€å­¦æ ¡æ´»åŠ¨ã€è¯¾å ‚æ•…äº‹ã€æ•™å¸ˆæ•…äº‹ã€å­¦ç”Ÿäº®ç‚¹ã€å®¶é•¿è¯¾å ‚ä¸Žç¤¾åŒºæ´»åŠ¨ã€‚")}
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
