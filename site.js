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
          <img src="assets/sequoia-logo-white.png" alt="Sequoia Education Group logo">
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
          <strong>Website links / 第三文件链接</strong>
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
      <a class="button light" href="brand-${brand.slug}.html">Learn More / 了解更多</a>
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
          <img src="assets/sequoia-red-logo.jpg" alt="Sequoia Education Group logo">
          <h3>Official Positioning / 官方定位</h3>
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
          <p class="eyebrow">About Snapshot / 关于快照</p>
          <h2>A ten-year Southern California education ecosystem</h2>
          <p>Started in Walnut in 2015, Sequoia has grown from one Montessori preschool into a multi-brand education group spanning preschool, after-school learning, teacher training, academic planning, community service, wellness, and future AI education.</p>
          <p>Sequoia 于 2015 年从 Walnut 的第一所蒙特梭利幼儿园起步，十年发展为覆盖幼儿教育、课后教育、教师培训、升学规划、公益社区、身心健康与未来 AI 教育的多品牌教育生态。</p>
        </div>
      </div>
      <div class="program-grid">
        ${data.programs.slice(0, 8).map((program) => card(program[0], program[1], program[2], program[3])).join("")}
      </div>
    </section>
    <section class="section alt"><div class="section-inner">
      <div class="section-head"><div><p class="eyebrow">Brand Matrix / 品牌矩阵</p><h2>Schools, programs, foundation, wellness, and future learning</h2></div></div>
      <div class="card-grid">${data.brands.map(brandCard).join("")}</div>
    </div></section>
    <section class="section">
      <div class="feature-panel">
        <div class="feature-logo-panel">
          <img src="assets/agentech-education.png" alt="Agentech Education logo">
        </div>
        <div class="feature-content">
          <p class="eyebrow">Agentech Education Preview / AI 未来学习预览</p>
          <h2>AI literacy, robotics, and future-ready learning for K-12</h2>
          <p>${data.agentech.role}</p>
          <p>${data.agentech.zhRole}</p>
          <div class="button-row"><a class="button" href="https://www.agent-tech.ai/agentech-education" target="_blank" rel="noreferrer">View Agentech Education</a></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">10-Year Timeline / 十年时间线</p><h2>Rooted growth</h2></div></div>
      <div class="timeline">
        ${[
          ["2015", "Walnut International Montessori Preschool founded / Walnut 创校"],
          ["2019", "Learning Tree Montessori of Arcadia / Arcadia 校区"],
          ["2020", "Learning Tree Walnut Education Center / Walnut 课后教育中心"],
          ["2023", "Montessori of Anaheim / Anaheim 校区"],
          ["2024", "Montessori Teacher Preparation of California / 教师培训"],
          ["2025", "Nuts Education Institute and Yoga Me & Beyond / 学术规划与身心健康"],
          ["Coming Next", "Agentech Education / AI Future Learning"]
        ].map(([year, text]) => `<div class="timeline-item"><strong>${year}</strong><p>${text}</p></div>`).join("")}
      </div>
    </section>
    <section class="section alt"><div class="section-inner">
      <div class="split">
        <div>
          <p class="eyebrow">Founder Message / 创始人寄语</p>
          <h2>Rooted in care, growing with families</h2>
          <p>Connie's message should be a short, warm note about ten years of building schools with teachers, families, and communities. A professional photo and bio should be added before launch.</p>
          <p>Connie 的寄语应简短温暖，讲述十年来与老师、家庭和社区共同建设学校的初心。上线前需补充专业照片与 founder bio。</p>
        </div>
        <div class="card">
          <p class="eyebrow">Final CTA / 行动入口</p>
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
    ${pageHeader("About Sequoia Education Group", "关于红衫教育集团", "Our Story, Mission & Values, 10-Year Milestone, Founder Message, Leadership/Team, Awards & Recognition.", "包含集团故事、使命价值、十年里程碑、创始人寄语、领导团队、奖项荣誉。")}
    <section class="section alt"><div class="section-inner">
      <div class="section-head">
        <div>
          <p class="eyebrow">Group Story Gallery / 集团故事轮播</p>
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
          <h2>Mission & Values / 使命与价值</h2>
          <p>${data.keywords}</p>
          <p>${data.zhKeywords}</p>
          <p>Sequoia should present itself as a trusted education group with local roots, a growing ecosystem, and a careful future-learning vision.</p>
          <p>Sequoia 应呈现为有本地根基、不断成长、并谨慎布局未来学习的可信教育集团。</p>
        </div>
        <ul class="detail-list">
          <li><strong>Founder Message:</strong> Connie short message and professional photo needed. / 需要 Connie 专业头像与简短寄语。</li>
          <li><strong>Leadership/Team:</strong> add real leadership and team profiles. / 补充真实领导团队资料。</li>
          <li><strong>Awards & Recognition:</strong> add certificate and Walnut city honor photos only after verification. / 奖项证书与城市荣誉需核实后上线。</li>
        </ul>
      </div>
    </section>`;
}

function renderSchools() {
  return `
    ${pageHeader("Our Schools & Brands", "旗下学校与品牌", "Filter-ready cards for schools, programs, foundation, wellness, and future initiatives. Each brand has its own detail page.", "展示所有学校、项目、基金会、身心健康品牌和未来教育项目；每个品牌都有独立详情页。")}
    <section class="section schools-surface"><div class="section-inner"><div class="card-grid">${data.brands.map(brandCard).join("")}</div></div></section>`;
}

function renderPrograms() {
  return `
    ${pageHeader("Programs", "教育项目", "Programs are organized by audience and learning need, from Montessori preschool to AI future learning.", "教育项目按服务对象和学习需求分类，从蒙特梭利幼儿教育到 AI 未来学习。")}
    <section class="section alt"><div class="section-inner">
      <div class="program-grid">${data.programs.map((p) => card(p[0], p[1], p[2], p[3])).join("")}</div>
    </div></section>`;
}

function renderAgentech() {
  return `
    ${pageHeader("Agentech Education", "Agentech Education / AI 未来学习", "AI Literacy, Robotics, and Future-Ready Learning for K-12.", "让孩子理解 AI、创造项目、面向未来学习。")}
    <section class="section alt"><div class="section-inner">
      <div class="notice"><strong>Role / 页面角色:</strong> ${data.agentech.role}<br>${data.agentech.zhRole}</div>
      <div class="card-grid" style="margin-top:22px">${data.agentech.modules.map((m) => card(m[0], m[2], m[1], m[3])).join("")}</div>
    </div></section>
    <section class="section">
      <div class="split">
        <div>${card("Avoid / 必须避免", "Safety", data.agentech.avoid.join(" "), data.agentech.zhAvoid.join(" "))}</div>
        <div>${card("Future expansion / 未来扩展", "Roadmap", data.agentech.future.join(", "), "AI Club 独立页、AI Camp 独立页、Student Showcase、Curriculum for Schools、Parent Workshop。")}</div>
      </div>
    </section>`;
}

function renderAiClub() {
  return `
    ${pageHeader("AI Club / Robotics & Data Lab", "AI Club / 机器人与数据实验室", "Optional secondary page for AI Club, robotics, data labs, project-based learning, and student showcase once programs are stable.", "可选二级页；当课程稳定后用于展示 AI Club、机器人、数据实验室、项目制学习和学生作品。")}
    <section class="section alt"><div class="section-inner">
      <div class="program-grid">
        ${["K-2", "Grades 3-5", "Grades 6-8", "Grades 9-12"].map((age) => card(age, "Age Track / 年龄段", "Show goals, project outcomes, student fit, and course length.", "写学习目标、项目产出、适合孩子、课程时长。")).join("")}
      </div>
    </div></section>`;
}

function renderNews() {
  return `
    ${pageHeader("News & Events", "新闻活动", "CMS model for group news, school events, community events, student highlights, teacher stories, parent workshops, and media coverage.", "集团新闻、校园活动、社区活动、学生亮点、教师故事、家长课堂、媒体报道；需要 CMS 管理。")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">${data.newsFields.map((f) => card(f[0], `${f[4]} / ${f[2]}`, f[1], f[3])).join("")}</div>
    </div></section>`;
}

function renderCommunity() {
  return `
    ${pageHeader("Community Impact", "社区影响力", "Sequoia Forest Foundation, volunteer service, city honors, activity photos, and community news.", "Sequoia Forest Foundation、志愿服务、公益活动、政府/社区荣誉、照片与新闻。")}
    <section class="section alt"><div class="section-inner">
      <div class="feature-panel">
        <img src="Sequoia Forest Foundation.jpg" alt="Sequoia Forest Foundation">
        <div class="feature-content">
          <h2>Foundation and service pathway / 基金会与志愿服务路径</h2>
          <p>Student volunteering, community participation, social responsibility, civic awareness, and leadership should connect to news and event pages.</p>
          <p>学生志愿服务、社区参与、社会责任感、公民意识与领导力，应与新闻活动页面打通。</p>
          <p class="notice">Confirm nonprofit registration before publishing formal nonprofit claims. / 正式公益资质与非营利注册信息需上线前确认。</p>
        </div>
      </div>
    </div></section>`;
}

function renderPartnership() {
  return `
    ${pageHeader("Partnership & Strategic Growth", "合作与战略发展", "A quiet page for VC investors, partners, employers, and education institutions.", "给 VC、合作方、雇主、教育机构看的低调页面；建议放 footer 和首页按钮，不一定放主导航。")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">
        ${card("Education ecosystem", "Investor angle / 投资人角度", "Sequoia is a Southern California multi-brand, multi-stage education ecosystem, not a single preschool.", "Sequoia 不是单一幼儿园，而是南加州多品牌、多阶段教育生态。")}
        ${card("Partnership form fields", "Form / 表单", "Organization, Contact Person, Role, Partnership Type, Budget/Timeline optional, Message.", "Organization、Contact Person、Role、Partnership Type、Budget/Timeline（可选）、Message。")}
        ${card("Agentech partnerships", "Future learning / 未来学习", "Partner for school programs, camps, curriculum pilots, or community workshops.", "学校项目、营地、课程试点、社区工作坊合作入口。")}
      </div>
    </div></section>`;
}

function renderCareers() {
  return `
    ${pageHeader("Careers", "招聘", "Career page for role categories, team culture, growth opportunities, and application fields.", "职位类别、团队文化、成长机会、申请表单/邮箱。")}
    <section class="section alt"><div class="section-inner">
      <div class="card-grid">
        ${card("Teaching roles", "Schools / 学校", "Montessori teachers, assistants, after-school instructors, Chinese teachers, camp teachers.", "蒙特梭利老师、助教、课后老师、中文老师、营地老师。")}
        ${card("Program and operations roles", "Group / 集团", "Campus operations, admissions, marketing, curriculum support, community events.", "校区运营、招生、市场、课程支持、社区活动。")}
        ${card("Application fields", "Form / 表单", "Role Interest, Resume Upload, Credentials/Permit optional, Availability.", "Role Interest、Resume Upload、Credentials/Permit（可选）、Availability。")}
      </div>
    </div></section>`;
}

function renderContact() {
  return `
    ${pageHeader("Contact", "联系我们", "Inquiry routing for admissions, teacher training, partnerships, careers, media, and foundation/donation.", "按咨询类型分流：招生、教师培训、合作、招聘、媒体、公益。")}
    <section class="section alt"><div class="section-inner">
      <div class="split">
        <div class="card">
          <h2>Sequoia Education Group</h2>
          <p>${data.address}<br>${data.email}<br>${data.domain}</p>
          <p class="notice">Before launch, verify each entity's legal name, license, address, phone, and email. / 上线前核实每个实体的 legal name、license、地址、电话、邮箱。</p>
        </div>
        <div class="card-grid">${data.formFields.map((f) => card(f[0], "Form / 表单", f[1], f[2])).join("")}</div>
      </div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">External Links / 第三文件链接</p><h2>Official school and organization links</h2></div></div>
      <div class="link-grid">${data.externalLinks.map(([name, url]) => card(name, "Official link", url, "", `<a class="button light" href="${url}" target="_blank" rel="noreferrer">Open Website</a>`)).join("")}</div>
    </section>`;
}

function renderTechnical() {
  return `
    <section class="section alt"><div class="section-inner">
      <div class="section-head"><div><p class="eyebrow">Technical / CMS / SEO</p><h2>Developer requirements from the brief</h2></div></div>
      <div class="card-grid">${data.technical.map((t) => card(t[0], "Requirement / 需求", t[1], t[2])).join("")}</div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Launch Checklist / 上线前核实</p><h2>Must confirm before publishing</h2></div></div>
      <div class="card-grid">${data.checklist.map((c) => card(c[0], c[2], c[1], c[3])).join("")}</div>
    </section>
    <section class="section alt"><div class="section-inner">
      <div class="section-head"><div><p class="eyebrow">Reference Websites / 参考网站</p><h2>15 reference site notes</h2></div></div>
      <div class="card-grid">${data.referenceSites.map((r) => card(r[0], r[2], r[3], "", `<a href="${r[1]}" target="_blank" rel="noreferrer">${r[1]}</a>`)).join("")}</div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Implementation Phases / 实现顺序</p><h2>Recommended build order</h2></div></div>
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
            <li><strong>Services / 服务:</strong> add age range, programs, address, contact, photos, related news, and tour CTA for each campus or brand.</li>
            <li><strong>Required check / 必须核实:</strong> legal name, license, exact address, phone, email, student numbers, credential claims, and photo permission.</li>
            <li><strong>CTA / 行动入口:</strong> Schedule a Tour, Enrollment Inquiry, Contact the Campus.</li>
          </ul>
          <div class="button-row">
            <a class="button" href="contact.html">Contact / 联系</a>
            ${brand.url ? `<a class="button light" href="${brand.url}" target="_blank" rel="noreferrer">Official Website</a>` : ""}
          </div>
        </div>
      </div>
    </div></section>`;
}

function renderRoutes() {
  return `
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Required Pages & Routes / 必需页面与路由</p><h2>Information architecture from the brief</h2></div></div>
      <div class="card-grid">${data.routes.map((r) => card(r[1], r[0], r[2], "")).join("")}</div>
    </section>`;
}

function renderAgentech() {
  return `
    ${pageHeader("Agentech Education", "Agentech Education / AI Future Learning", "AI Literacy, Robotics, and Future-Ready Learning for K-12.", "让孩子理解 AI、创造项目、面向未来学习。")}
    <section class="section alt"><div class="section-inner">
      <div class="feature-panel">
        <div class="feature-content">
          <div class="inline-logo-panel"><img class="agentech-logo" src="assets/agentech-education.png" alt="Agentech Education logo"></div>
          <h2>AI imagination, robotics, and project-based future learning</h2>
          <p>Agentech Education introduces students to age-appropriate AI, creativity, robotics, drones, computer vision, and hands-on engineering challenges.</p>
          <p>Agentech Education 面向不同年龄段学生提供适龄 AI、创造力、机器人、无人机、计算机视觉与动手工程挑战。</p>
          <div class="button-row">
            <a class="button" href="https://www.agent-tech.ai/talents" target="_blank" rel="noreferrer">AI Robotics Club</a>
            <a class="button light" href="contact.html">Request Program Info</a>
          </div>
        </div>
        <img src="assets/club-1.png" alt="Agentech robotics project preview">
      </div>
      <div class="program-grid" style="margin-top:24px">
        ${data.agentech.gradeTracks.map((track) => card(track[0], track[1], track[2], track[3])).join("")}
      </div>
    </div></section>
    <section class="section">
      <div class="section-head"><div><p class="eyebrow">Walnut 2026 Programs / Walnut 2026 课程</p><h2>Summer AI tracks from Agentech Education</h2></div></div>
      <div class="card-grid">
        ${data.agentech.courses.map((course) => card(course[1], `${course[0]} / ${course[3]} / ${course[4]}`, course[2], "Walnut 校区 2026 Summer 项目。")).join("")}
      </div>
    </section>`;
}

function renderAiClub() {
  return `
    ${pageHeader("AI Robotics Club", "AI 机器人俱乐部", "Robotics Competition & Engineering Membership Program.", "机器人竞赛与工程研发会员计划。")}
    <section class="section alt"><div class="section-inner">
      <div class="feature-panel">
        <div class="feature-logo-panel">
          <img src="assets/agentech-talents.png" alt="Agentech Talents logo">
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
          <p class="eyebrow">Main Introduction / 主介绍</p>
          <h2>Understand why robots work, why they fail, and how to improve them.</h2>
        </div>
        <div>
          <p>${data.roboticsClub.main}</p>
          <p>${data.roboticsClub.zhMain}</p>
        </div>
      </div>
      <div class="section-head" style="margin-top:34px"><div><p class="eyebrow">What Students Learn / 学生将学习什么</p><h2>Engineering and AI skills</h2></div></div>
      <div class="card-grid">
        ${data.roboticsClub.learnSections.map((item) => card(item[0], item[2], item[1], item[3])).join("")}
      </div>
      <div class="section-head" style="margin-top:34px"><div><p class="eyebrow">Student Growth / 学生成长</p><h2>Core abilities</h2></div></div>
      <div class="program-grid">
        ${data.roboticsClub.abilities.map((item) => card(item[0], item[2], item[1], item[3])).join("")}
      </div>
      <div class="section-head" style="margin-top:34px"><div><p class="eyebrow">Project Outputs / 项目产出</p><h2>Portfolio-ready work</h2></div></div>
      <div class="program-grid">
        ${data.roboticsClub.outputs.map((item) => card(item, "Output / 成果", "Students document and present milestone work.", "学生记录并展示阶段性项目成果。")).join("")}
      </div>
    </div></section>`;
}

function renderNews() {
  const categories = [
    ["Group News", "集团新闻", "Milestones, strategic updates, anniversaries, awards, and group-wide announcements.", "集团里程碑、战略更新、周年活动、奖项荣誉与集团公告。"],
    ["School Events", "校园活动", "Campus activities, open houses, seasonal celebrations, classroom moments, and family events.", "校区活动、开放日、节日庆祝、课堂瞬间与家庭活动。"],
    ["Community Events", "社区活动", "Volunteer service, foundation activities, civic engagement, and local partnerships.", "志愿服务、基金会活动、社区参与与本地合作。"],
    ["Student Highlights", "学生亮点", "Student work, presentations, camp showcases, robotics demos, and growth stories.", "学生作品、展示活动、营地成果、机器人 demo 与成长故事。"],
    ["Teacher Stories", "教师故事", "Teacher recognition, classroom practice, professional growth, and team culture.", "教师表彰、课堂实践、专业成长与团队文化。"],
    ["Parent Workshops", "家长课堂", "Parent education, wellness, academic planning, AI literacy, and school-family partnership.", "家长教育、身心健康、学术规划、AI 素养与家校合作。"]
  ];

  return `
    ${pageHeader("News & Events", "新闻活动", "Stories from Sequoia's group growth, schools, classrooms, teachers, students, families, and community events.", "展示集团发展、学校活动、课堂故事、教师故事、学生亮点、家长课堂与社区活动。")}
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
