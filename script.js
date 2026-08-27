(function () {
  const content = window.SITE_CONTENT;
  if (!content) {
    return;
  }

  const ownName = content.profile.name;

  function $(id) {
    return document.getElementById(id);
  }

  function text(node, value) {
    node.textContent = value || "";
  }

  const iconPaths = {
    scholar: '<path d="M4 8.5 12 4l8 4.5-8 4.5L4 8.5Z"/><path d="M7 11.5v4.2c1.4 1 3.1 1.5 5 1.5s3.6-.5 5-1.5v-4.2"/><path d="M20 8.5v5"/>',
    github: '<path d="M9 19c-4 1.2-4-2-5.5-2.5"/><path d="M15 22v-3.4c0-1 .1-1.6-.5-2.2 2-.2 4.2-1 4.2-4.8 0-1.1-.4-2-1-2.8.1-.3.5-1.5-.1-2.8 0 0-.9-.3-2.9 1a10 10 0 0 0-5.4 0c-2-1.3-2.9-1-2.9-1-.6 1.3-.2 2.5-.1 2.8-.6.8-1 1.7-1 2.8 0 3.8 2.2 4.6 4.2 4.8-.3.3-.5.8-.5 1.5V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    cv: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/>',
    mail: '<path d="M4 4h16v16H4z"/><path d="m4 7 8 6 8-6"/>',
    wechat: '<path d="M3 10.2C3 6.8 6.3 4 10.3 4s7.3 2.8 7.3 6.2-3.3 6.2-7.3 6.2c-.8 0-1.7-.1-2.4-.3L4.8 18l.8-3.1C4 13.8 3 12.1 3 10.2Z"/><path d="M12.2 15.1c0 2.7 2.6 4.9 5.8 4.9.6 0 1.2-.1 1.8-.2l2.4 1.2-.6-2.4c1.1-.9 1.8-2.1 1.8-3.5 0-2.7-2.4-4.8-5.5-4.9"/><path d="M7.8 8.8h.1M12.6 8.8h.1M16 14h.1M19.8 14h.1"/>',
    paper: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 12h8M8 16h8M8 20h5"/>',
    code: '<path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/>',
    activity: '<path d="M22 12h-4l-3 8L9 4l-3 8H2"/>',
    zap: '<path d="M13 2 3 14h8l-1 8 11-14h-8l1-6Z"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    nodes: '<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="m8.5 7.5 7 0M7.5 8.5l3 7M16.5 8.5l-3 7"/>'
  };

  function iconNameForLabel(label) {
    const key = (label || "").toLowerCase();
    if (key.includes("scholar")) return "scholar";
    if (key.includes("github")) return "github";
    if (key.includes("linkedin")) return "linkedin";
    if (key.includes("wechat")) return "wechat";
    if (key === "cv" || key.includes("curriculum")) return "cv";
    if (key.includes("paper") || key.includes("pdf")) return "paper";
    if (key.includes("code")) return "code";
    if (key.includes("email") || key.includes("mail")) return "mail";
    return "";
  }

  function createIcon(name) {
    if (!iconPaths[name]) {
      return null;
    }
    const span = document.createElement("span");
    span.className = "inline-icon";
    span.setAttribute("aria-hidden", "true");
    span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]}</svg>`;
    return span;
  }

  function createLink(link, className, options = {}) {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = link.url.startsWith("http") ? "_blank" : "_self";
    if (link.url.startsWith("http")) {
      a.rel = "noreferrer";
    }
    if (className) {
      a.className = className;
    }
    if (options.icon !== false) {
      const icon = createIcon(options.icon || iconNameForLabel(link.label));
      if (icon) {
        a.append(icon);
      }
    }
    a.append(document.createTextNode(link.label));
    return a;
  }

  function appendLinkedText(parent, value, options = {}) {
    const source = value || "";
    const linkMap = content.linkMap || {};
    const phrases = Object.keys(linkMap).sort((a, b) => b.length - a.length);
    const needles = options.strongOwnName ? [ownName, ...phrases].sort((a, b) => b.length - a.length) : phrases;
    let index = 0;
    let buffer = "";

    function flush() {
      if (buffer) {
        parent.append(document.createTextNode(buffer));
        buffer = "";
      }
    }

    while (index < source.length) {
      const match = needles.find((needle) => source.startsWith(needle, index));
      if (!match) {
        buffer += source[index];
        index += 1;
        continue;
      }

      flush();
      if (options.strongOwnName && match === ownName) {
        const strong = document.createElement("strong");
        strong.textContent = match;
        parent.append(strong);
      } else {
        parent.append(createLink({ label: match, url: linkMap[match] }, "", { icon: false }));
      }
      index += match.length;
    }

    flush();
  }

  function highlightAuthor(authorString) {
    const fragment = document.createDocumentFragment();
    const parts = (authorString || "").split(ownName);
    parts.forEach((part, index) => {
      fragment.append(document.createTextNode(part));
      if (index < parts.length - 1) {
        const strong = document.createElement("strong");
        strong.textContent = ownName;
        fragment.append(strong);
      }
    });
    return fragment;
  }

  function renderProfile() {
    document.title = ownName;
    $("profile-name").textContent = ownName;
    const siteName = $("site-name");
    if (siteName) {
      siteName.textContent = ownName;
    }
    $("profile-avatar").src = content.profile.avatar || "assets/img/profile-placeholder.svg";
    $("profile-avatar").alt = ownName;
    text($("profile-title"), content.profile.title);
    const affiliation = $("profile-affiliation");
    if (content.profile.affiliationUrl) {
      affiliation.replaceChildren(createLink({ label: content.profile.affiliation, url: content.profile.affiliationUrl }, "", { icon: false }));
    } else {
      text(affiliation, content.profile.affiliation);
    }

    const links = $("profile-links");
    links.replaceChildren();
    content.profile.links.forEach((link, index) => {
      if (index > 0) {
        const separator = document.createElement("span");
        separator.className = "slash-separator";
        separator.textContent = "/";
        links.append(separator);
      }
      links.append(createLink(link, "icon-link"));
    });

    const email = $("profile-email");
    email.href = `mailto:${content.profile.email}`;
    email.className = "email-link icon-link";
    email.replaceChildren(createIcon("mail"), document.createTextNode(content.profile.email));

    const scholar = content.profile.links.find((link) => link.label.toLowerCase().includes("scholar"));
    if (scholar) {
      $("scholar-link").href = scholar.url;
    }

    $("footer-name").textContent = ownName;
    $("footer-year").textContent = new Date().getFullYear();
    if ($("footer-updated") && content.siteMeta && content.siteMeta.lastUpdated) {
      $("footer-updated").textContent = content.siteMeta.lastUpdated;
    }
  }

  function renderWechat() {
    const wrap = $("wechat-contact");
    const config = content.profile.wechat;
    if (!wrap || !config || !config.qr) {
      return;
    }

    wrap.hidden = false;

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "wechat-trigger icon-link";
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", "wechat-qr-card");
    trigger.append(createIcon("wechat"), document.createTextNode(config.label || "WeChat"));

    const card = document.createElement("span");
    card.id = "wechat-qr-card";
    card.className = "wechat-qr-card";
    card.setAttribute("aria-hidden", "true");

    const top = document.createElement("span");
    top.className = "wechat-card-top";
    const title = document.createElement("strong");
    title.textContent = config.displayName || "WeChat";
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "wechat-close";
    closeButton.setAttribute("aria-label", "Close WeChat QR code");
    closeButton.textContent = "×";
    top.append(title, closeButton);

    const imageLink = document.createElement("a");
    imageLink.className = "wechat-image-link";
    imageLink.href = config.qr;
    imageLink.target = "_blank";
    imageLink.rel = "noreferrer";
    imageLink.setAttribute("aria-label", "Open full-size WeChat QR code");
    const image = document.createElement("img");
    image.src = config.qr;
    image.alt = `WeChat QR code for ${config.displayName || ownName}`;
    image.loading = "lazy";
    imageLink.append(image);

    const note = document.createElement("small");
    note.textContent = config.note || "Scan to connect on WeChat";
    card.append(top, imageLink, note);
    wrap.replaceChildren(trigger, card);

    let keyboardInput = false;
    let suppressFocusOpen = false;

    function setOpen(isOpen) {
      wrap.classList.toggle("is-open", isOpen);
      trigger.setAttribute("aria-expanded", String(isOpen));
      card.setAttribute("aria-hidden", String(!isOpen));
    }

    document.addEventListener(
      "pointerdown",
      (event) => {
        keyboardInput = false;
        if (!wrap.contains(event.target)) {
          setOpen(false);
        }
      },
      true
    );

    document.addEventListener("keydown", (event) => {
      keyboardInput = true;
      if (event.key === "Escape" && wrap.classList.contains("is-open")) {
        event.preventDefault();
        setOpen(false);
        suppressFocusOpen = true;
        trigger.focus({ preventScroll: true });
        suppressFocusOpen = false;
      }
    });

    trigger.addEventListener("focus", () => {
      if (keyboardInput && !suppressFocusOpen) {
        setOpen(true);
      }
    });

    trigger.addEventListener("click", (event) => {
      if (event.detail === 0 && wrap.classList.contains("is-open")) {
        return;
      }
      setOpen(!wrap.classList.contains("is-open"));
    });

    closeButton.addEventListener("click", () => {
      setOpen(false);
      suppressFocusOpen = true;
      trigger.focus({ preventScroll: true });
      suppressFocusOpen = false;
    });
  }

  function bindActiveNavigation() {
    const links = [...document.querySelectorAll(".nav-list a")];
    const sectionIds = links.map((link) => link.getAttribute("href")).filter(Boolean);
    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    function setActive() {
      let activeId = "#Home";
      const offset = 120;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= offset) {
          activeId = `#${section.id}`;
        }
      });
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === activeId);
      });
    }

    window.addEventListener("scroll", setActive, { passive: true });
    window.addEventListener("hashchange", setActive);
    setActive();
  }

  function renderAbout() {
    const about = $("about-content");
    about.replaceChildren();
    content.about.forEach((paragraph) => {
      const p = document.createElement("p");
      appendLinkedText(p, paragraph);
      about.append(p);
    });
    const collaboration = $("collaboration-note");
    collaboration.replaceChildren();
    if (content.collaboration) {
      collaboration.hidden = false;
      appendLinkedText(collaboration, content.collaboration);
    } else {
      collaboration.hidden = true;
    }
  }

  function renderNews() {
    const news = $("news-content");
    news.replaceChildren();
    const visibleLimit = 6;
    const allItems = content.news.flatMap((yearGroup) =>
      (yearGroup.items || []).map((item) => ({ ...item, year: yearGroup.year }))
    );

    function renderGroups(items, target, options = {}) {
      const groups = [];
      items.forEach((item) => {
        let group = groups.find((candidate) => candidate.year === item.year);
        if (!group) {
          group = { year: item.year, items: [] };
          groups.push(group);
        }
        group.items.push(item);
      });

      groups.forEach((yearGroup, groupIndex) => {
        const block = document.createElement("div");
        block.className = "year-block";

        const year = document.createElement("div");
        year.className = "year-label";
        year.textContent = yearGroup.year;

        const list = document.createElement("ul");
        list.className = "news-list";
        yearGroup.items.forEach((item) => {
          const li = document.createElement("li");
          const date = document.createElement("span");
          date.className = "date-tag";
          date.textContent = `[${item.date}] `;
          li.append(date);

          if (item.highlightText && item.text.includes(item.highlightText)) {
            const start = item.text.indexOf(item.highlightText);
            appendLinkedText(li, item.text.slice(0, start));
            const emphasis = document.createElement("span");
            emphasis.className = "news-emphasis";
            appendLinkedText(emphasis, item.highlightText);
            li.append(emphasis);
            appendLinkedText(li, item.text.slice(start + item.highlightText.length));
          } else {
            appendLinkedText(li, item.text);
          }
          list.append(li);
        });

        if (!(options.suppressFirstYear && groupIndex === 0)) {
          block.append(year);
        }
        block.append(list);
        target.append(block);
      });
    }

    renderGroups(allItems.slice(0, visibleLimit), news);

    const olderItems = allItems.slice(visibleLimit);
    if (!olderItems.length) {
      return;
    }

    const archive = document.createElement("div");
    archive.className = "news-archive";
    archive.id = "older-news";
    archive.setAttribute("aria-hidden", "true");
    archive.inert = true;
    renderGroups(olderItems, archive, {
      suppressFirstYear: olderItems[0].year === allItems[visibleLimit - 1].year
    });

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "news-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", archive.id);
    toggle.innerHTML = '<span>Show older news</span><span class="news-toggle-arrow" aria-hidden="true">↓</span>';

    function setArchiveOpen(isOpen) {
      toggle.setAttribute("aria-expanded", String(isOpen));
      archive.setAttribute("aria-hidden", String(!isOpen));
      archive.inert = !isOpen;
      archive.classList.toggle("is-open", isOpen);
      archive.style.maxHeight = isOpen ? `${archive.scrollHeight}px` : "0px";
      toggle.querySelector("span").textContent = isOpen ? "Show fewer" : "Show older news";
    }

    toggle.addEventListener("click", () => {
      setArchiveOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    window.addEventListener("resize", () => {
      if (archive.classList.contains("is-open")) {
        archive.style.maxHeight = `${archive.scrollHeight}px`;
      }
    });

    news.append(archive, toggle);
  }

  function renderResearch() {
    const target = $("research-content");
    target.replaceChildren();
    content.researchInterests.forEach((item) => {
      const row = document.createElement("article");
      row.className = "research-item";
      const title = document.createElement("h3");
      title.textContent = item.title;
      const body = document.createElement("p");
      appendLinkedText(body, item.text);
      const copy = document.createElement("div");
      copy.append(title, body);

      if (item.papers && item.papers.length) {
        const papers = document.createElement("div");
        papers.className = "research-papers";
        papers.setAttribute("aria-label", `Representative work in ${item.title}`);
        item.papers.forEach((paper) => {
          papers.append(createLink(paper, "research-paper-link", { icon: false }));
        });
        copy.append(papers);
      }

      row.append(copy);
      target.append(row);
    });
  }

  function renderSelectedPublications() {
    const target = $("selected-publications");
    target.replaceChildren();
    content.selectedPublications.forEach((pub) => {
      const article = document.createElement("article");
      article.className = "publication";

      const image = pub.image ? document.createElement("img") : null;
      if (image) {
        image.className = "pub-image";
        image.src = pub.image;
        image.alt = `${pub.title} preview`;
        image.loading = "lazy";
      }

      const body = document.createElement("div");
      const title = document.createElement("h3");
      title.className = "pub-title";
      title.textContent = pub.title;

      const authors = document.createElement("p");
      authors.className = "pub-authors";
      authors.append(highlightAuthor(pub.authors));

      const venue = document.createElement("p");
      venue.className = "pub-venue";
      appendLinkedText(venue, pub.venue);

      body.append(title, authors, venue);

      if (pub.contribution) {
        const contribution = document.createElement("p");
        contribution.className = "pub-contribution";
        contribution.textContent = pub.contribution;
        body.append(contribution);
      }

      if (pub.note) {
        const note = document.createElement("p");
        note.className = "pub-note";
        note.textContent = pub.note;
        body.append(note);
      }

      if (pub.links && pub.links.length) {
        const links = document.createElement("div");
        links.className = "pub-links";
        pub.links.forEach((link) => links.append(createLink(link)));
        body.append(links);
      }

      if (image) {
        article.append(image);
      } else {
        article.classList.add("publication--text-only");
      }
      article.append(body);
      target.append(article);
    });
  }

  function renderOtherPublications() {
    const target = $("other-publications");
    const title = $("other-publications-title");
    target.replaceChildren();
    const hasItems = content.otherPublications.some((yearGroup) => yearGroup.items && yearGroup.items.length);
    if (title) {
      title.hidden = !hasItems;
    }
    if (!hasItems) {
      return;
    }
    const list = document.createElement("ol");
    list.className = "compact-list";
    content.otherPublications.forEach((yearGroup) => {
      (yearGroup.items || []).forEach((pub) => {
        const item = document.createElement("li");
        if (pub.image) {
          item.className = "compact-publication";
          const image = document.createElement("img");
          image.className = "compact-image";
          image.src = pub.image;
          image.alt = `${pub.title} preview`;
          image.loading = "lazy";
          item.append(image);
        }

        const copy = document.createElement("div");
        const title = document.createElement("span");
        title.className = "compact-title";
        title.textContent = pub.title;
        const meta = document.createElement("span");
        meta.className = "compact-meta";
        meta.append(highlightAuthor(`${pub.authors}. ${pub.venue}. `));

        copy.append(title, meta);
        if (pub.links && pub.links.length) {
          const links = document.createElement("span");
          links.className = "compact-links";
          pub.links.forEach((link) => links.append(createLink(link)));
          meta.append(links);
        }

        item.append(copy);
        list.append(item);
      });
    });
    target.append(list);
  }

  function renderEntries(items, targetId) {
    const target = $(targetId);
    target.replaceChildren();
    items.forEach((item) => {
      const entry = document.createElement("article");
      entry.className = "entry";

      const period = document.createElement("div");
      period.className = "entry-period";
      period.textContent = item.period;

      const body = document.createElement("div");
      body.className = "entry-copy";
      const title = document.createElement("h3");
      title.textContent = item.title;
      const org = document.createElement("p");
      appendLinkedText(org, item.organization);
      const detail = document.createElement("p");
      appendLinkedText(detail, [item.location, item.detail].filter(Boolean).join(" - "));
      body.append(title, org, detail);

      if (item.summary) {
        const summary = document.createElement("p");
        summary.className = "entry-summary";
        appendLinkedText(summary, item.summary);
        body.append(summary);
      }

      const main = document.createElement("div");
      main.className = "entry-main";
      if (item.logo) {
        const logo = document.createElement("img");
        logo.className = "entry-logo";
        logo.src = item.logo;
        logo.alt = item.logoAlt || `${item.organization} logo`;
        logo.loading = "lazy";
        main.append(logo);
      }
      main.append(body);

      entry.append(period, main);
      target.append(entry);
    });
  }

  function renderAwards() {
    const target = $("awards-content");
    target.replaceChildren();
    content.awards.forEach((award) => {
      const li = document.createElement("li");
      appendLinkedText(li, award);
      target.append(li);
    });
  }

  function renderService() {
    const service = $("service-content");
    service.replaceChildren();

    if (content.serviceGroups && content.serviceGroups.length) {
      content.serviceGroups.forEach((group) => {
        const title = document.createElement("h3");
        title.textContent = group.title;
        const list = document.createElement("ul");
        list.className = "simple-list";
        group.items.forEach((item) => {
          const li = document.createElement("li");
          li.append(createLink(item));
          list.append(li);
        });
        service.append(title, list);
      });
      return;
    }

    const p = document.createElement("p");
    p.textContent = content.service || "";
    service.append(p);
  }

  renderProfile();
  renderWechat();
  renderAbout();
  renderNews();
  renderResearch();
  renderSelectedPublications();
  renderOtherPublications();
  renderEntries(content.education, "education-content");
  renderEntries(content.experience, "experience-content");
  renderAwards();
  renderService();
  bindActiveNavigation();
})();
