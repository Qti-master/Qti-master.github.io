/*
 * PERSONALIZE HERE
 * 아래 객체만 수정하면 이름, 소개, 기술, 프로젝트, 연락처를 한곳에서 교체할 수 있습니다.
 */
const PORTFOLIO_CONTENT = {
  brand: "minseo.dev",
  name: "정민서",
  initials: "MS",
  heroDescription: "명확한 문제 정의와 섬세한 인터랙션으로, 오래 쓰고 싶은 웹 경험을 만듭니다.",
  aboutLead: "복잡한 정보를 단순한 흐름으로 바꾸고, 사용자가 망설이지 않는 인터페이스를 설계합니다.",
  aboutBody: "디자인과 개발 사이를 자연스럽게 오가며 제품의 시작부터 출시 이후의 개선까지 함께합니다. 작은 디테일이 신뢰를 만든다고 믿습니다.",
  highlights: [
    ["EXPERIENCE", "3+ YEARS"],
    ["PROJECTS", "18 SHIPPED"],
    ["LOCATION", "SEOUL, KR"],
  ],
  skills: [
    { title: "Frontend", description: "빠르고 접근 가능한 화면을 구현합니다.", tags: ["React", "TypeScript", "Next.js"] },
    { title: "UI Engineering", description: "재사용 가능한 인터페이스를 설계합니다.", tags: ["Design System", "CSS", "a11y"] },
    { title: "Product Thinking", description: "사용자와 비즈니스의 접점을 찾습니다.", tags: ["UX", "Analytics", "A/B Test"] },
    { title: "Collaboration", description: "명확한 소통으로 팀의 속도를 높입니다.", tags: ["Git", "Figma", "Agile"] },
  ],
  projects: [
    {
      number: "01",
      year: "2025",
      title: "Morrow Finance",
      description: "복잡한 금융 데이터를 누구나 이해할 수 있는 개인 자산 관리 경험으로 재구성했습니다.",
      tech: ["Next.js", "TypeScript", "Chart.js"],
      demo: "https://example.com",
      source: "https://github.com/username/morrow-finance",
      gradient: "linear-gradient(135deg, #1e694f, #162b2b 68%, #101822)",
    },
    {
      number: "02",
      year: "2024",
      title: "Nook Commerce",
      description: "취향 기반 탐색 흐름으로 전환율을 개선한 라이프스타일 커머스입니다.",
      tech: ["React", "Zustand", "API"],
      demo: "https://example.com",
      source: "https://github.com/username/nook-commerce",
      gradient: "linear-gradient(135deg, #53386b, #24263d 70%, #141724)",
    },
    {
      number: "03",
      year: "2024",
      title: "Flowboard",
      description: "분산된 팀의 작업 상태를 한눈에 정리하는 협업 대시보드입니다.",
      tech: ["Vue", "Firebase", "D3.js"],
      demo: "https://example.com",
      source: "https://github.com/username/flowboard",
      gradient: "linear-gradient(135deg, #24506e, #1a2738 70%, #171721)",
    },
  ],
  contacts: [
    { kind: "EMAIL", value: "hello@minseo.dev", href: "mailto:hello@minseo.dev" },
    { kind: "GITHUB", value: "github.com/username", href: "https://github.com/username" },
    { kind: "LINKEDIN", value: "linkedin.com/in/username", href: "https://www.linkedin.com/in/username" },
  ],
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("has-js");

function setTextBindings() {
  document.querySelectorAll("[data-bind]").forEach((element) => {
    const key = element.dataset.bind;
    if (key === "nameCode") {
      element.textContent = `"${PORTFOLIO_CONTENT.name}"`;
    } else if (PORTFOLIO_CONTENT[key]) {
      element.textContent = PORTFOLIO_CONTENT[key];
    }
  });
  document.title = `${PORTFOLIO_CONTENT.name} | Frontend Developer`;
}

function renderHighlights() {
  const list = document.querySelector("#highlights-list");
  list.replaceChildren(
    ...PORTFOLIO_CONTENT.highlights.map(([label, value]) => {
      const item = document.createElement("div");
      item.className = "highlight";
      const term = document.createElement("dt");
      const definition = document.createElement("dd");
      term.textContent = label;
      definition.textContent = value;
      item.append(term, definition);
      return item;
    }),
  );
}

function renderSkills() {
  const grid = document.querySelector("#skill-grid");
  grid.replaceChildren(
    ...PORTFOLIO_CONTENT.skills.map((skill, index) => {
      const card = document.createElement("article");
      card.className = "skill-card";
      card.innerHTML = `
        <span class="skill-number">0${index + 1}</span>
        <h3></h3>
        <p></p>
        <ul class="skill-tags"></ul>`;
      card.querySelector("h3").textContent = skill.title;
      card.querySelector("p").textContent = skill.description;
      const tags = card.querySelector(".skill-tags");
      skill.tags.forEach((tag) => {
        const tagItem = document.createElement("li");
        tagItem.textContent = tag;
        tags.append(tagItem);
      });
      return card;
    }),
  );
}

function renderProjects() {
  const grid = document.querySelector("#project-grid");
  grid.replaceChildren(
    ...PORTFOLIO_CONTENT.projects.map((project) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.style.setProperty("--project-gradient", project.gradient);
      card.innerHTML = `
        <div class="project-preview" aria-hidden="true">
          <div class="project-ui"><div class="project-ui-top"><i></i><i></i><i></i></div><div class="project-ui-line"></div><div class="project-ui-line short"></div><div class="project-ui-grid"><i></i><i></i><i></i></div></div>
        </div>
        <div class="project-content">
          <div class="project-meta"><span>${project.number}</span><span>${project.year}</span></div>
          <h3></h3><p></p>
          <div class="project-footer"><ul class="project-tech"></ul><div class="project-links"><a class="demo-link" target="_blank" rel="noreferrer">DEMO ↗</a><a class="source-link" target="_blank" rel="noreferrer">CODE ↗</a></div></div>
        </div>`;
      card.querySelector("h3").textContent = project.title;
      card.querySelector("p").textContent = project.description;
      card.querySelector(".demo-link").href = project.demo;
      card.querySelector(".source-link").href = project.source;
      const techList = card.querySelector(".project-tech");
      project.tech.forEach((tech) => {
        const item = document.createElement("li");
        item.textContent = tech;
        techList.append(item);
      });
      return card;
    }),
  );
}

function renderContacts() {
  const list = document.querySelector("#contact-links");
  list.replaceChildren(
    ...PORTFOLIO_CONTENT.contacts.map((contact) => {
      const link = document.createElement("a");
      link.className = "contact-link";
      link.href = contact.href;
      link.innerHTML = `<span class="contact-kind"></span><span class="contact-value"></span><span class="contact-arrow" aria-hidden="true">↗</span>`;
      link.querySelector(".contact-kind").textContent = contact.kind;
      link.querySelector(".contact-value").textContent = contact.value;
      if (!contact.href.startsWith("mailto:")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      return link;
    }),
  );
}

function setupMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  const setOpen = (open) => {
    toggle.classList.toggle("is-open", open);
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
}

function setupAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", link.getAttribute("href"));
    });
  });
}

function setupObservers() {
  const revealElements = document.querySelectorAll(".reveal, .skill-card, .project-card");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const navLinks = [...document.querySelectorAll(".primary-nav a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;
  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => link.removeAttribute("aria-current"));
    document.querySelector(`.primary-nav a[href="#${visible.target.id}"]`)?.setAttribute("aria-current", "true");
  }, { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.4] });
  sections.forEach((section) => navObserver.observe(section));
}

setTextBindings();
renderHighlights();
renderSkills();
renderProjects();
renderContacts();
document.querySelector("#current-year").textContent = String(new Date().getFullYear());
setupMenu();
setupAnchors();
setupObservers();
