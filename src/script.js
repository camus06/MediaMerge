(function () {
  document.documentElement.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    var pageMaskLens = document.createElement("div");
    pageMaskLens.className = "page-mask-lens";
    pageMaskLens.setAttribute("aria-hidden", "true");
    document.body.appendChild(pageMaskLens);

    var lensPoint = null;
    var lensFramePending = false;
    window.addEventListener(
      "pointermove",
      function (event) {
        lensPoint = { x: event.clientX, y: event.clientY };
        var target = event.target;
        var overContent =
          target instanceof Element &&
          target.closest(
            "a, button, h1, h2, h3, p, span, li, dt, dd, label, .principle-card, .aud, .card",
          );
        pageMaskLens.classList.toggle("is-over-content", Boolean(overContent));
        if (lensFramePending) return;
        lensFramePending = true;
        window.requestAnimationFrame(function () {
          lensFramePending = false;
          pageMaskLens.style.setProperty("--mask-x", `${lensPoint.x}px`);
          pageMaskLens.style.setProperty("--mask-y", `${lensPoint.y}px`);
          pageMaskLens.classList.add("is-visible");
        });
      },
      { passive: true },
    );
    document.documentElement.addEventListener("pointerleave", function () {
      pageMaskLens.classList.remove("is-visible");
    });
  }

  function initRippleGrid(section, grid, settings) {
    var rippleCells = [];
    var rippleColumns = 0;
    var rippleRows = 0;
    var rippleCellSize = window.innerWidth < 700 ? settings.mobileSize : settings.desktopSize;
    var lastHoverCell = -1;

    function buildRippleGrid() {
      var bounds = section.getBoundingClientRect();
      rippleCellSize = window.innerWidth < 700 ? settings.mobileSize : settings.desktopSize;
      rippleColumns = Math.max(1, Math.ceil(bounds.width / rippleCellSize));
      rippleRows = Math.max(1, Math.ceil(bounds.height / rippleCellSize));
      grid.replaceChildren();
      grid.style.gridTemplateColumns = `repeat(${rippleColumns}, 1fr)`;
      grid.style.gridAutoRows = `${rippleCellSize}px`;
      rippleCells = [];

      for (var index = 0; index < rippleColumns * rippleRows; index += 1) {
        var cell = document.createElement("span");
        cell.className = "hero-ripple-cell";
        grid.appendChild(cell);
        rippleCells.push(cell);
      }
      lastHoverCell = -1;
    }

    function getRippleCell(clientX, clientY) {
      var bounds = section.getBoundingClientRect();
      var columnWidth = bounds.width / rippleColumns;
      var column = Math.max(
        0,
        Math.min(rippleColumns - 1, Math.floor((clientX - bounds.left) / columnWidth)),
      );
      var row = Math.max(
        0,
        Math.min(rippleRows - 1, Math.floor((clientY - bounds.top) / rippleCellSize)),
      );
      return { row: row, column: column, index: row * rippleColumns + column };
    }

    function pulseRippleGrid(center, radius) {
      var affected = [];
      for (var row = Math.max(0, center.row - radius); row <= Math.min(rippleRows - 1, center.row + radius); row += 1) {
        for (var column = Math.max(0, center.column - radius); column <= Math.min(rippleColumns - 1, center.column + radius); column += 1) {
          var distance = Math.hypot(row - center.row, column - center.column);
          if (distance > radius) continue;
          var cell = rippleCells[row * rippleColumns + column];
          cell.style.setProperty("--ripple-delay", `${Math.round(distance * 42)}ms`);
          cell.classList.remove("is-rippling");
          affected.push(cell);
        }
      }
      window.requestAnimationFrame(function () {
        affected.forEach(function (cell) {
          cell.classList.add("is-rippling");
        });
      });
    }

    buildRippleGrid();
    window.addEventListener("resize", buildRippleGrid);
    section.addEventListener("pointermove", function (event) {
      var center = getRippleCell(event.clientX, event.clientY);
      if (center.index === lastHoverCell) return;
      lastHoverCell = center.index;
      pulseRippleGrid(center, settings.hoverRadius);
    });
    section.addEventListener("click", function (event) {
      pulseRippleGrid(getRippleCell(event.clientX, event.clientY), settings.clickRadius);
    });
  }

  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    var hero = document.querySelector(".hero");
    var heroRipple = hero && hero.querySelector(".hero-ripple");
    if (hero && heroRipple) {
      initRippleGrid(hero, heroRipple, {
        desktopSize: 48,
        mobileSize: 38,
        hoverRadius: 2,
        clickRadius: 4,
      });
    }

    var finalSection = document.querySelector(".final");
    var finalRipple = finalSection && finalSection.querySelector(".final-ripple");
    if (finalSection && finalRipple) {
      initRippleGrid(finalSection, finalRipple, {
        desktopSize: 44,
        mobileSize: 36,
        hoverRadius: 3,
        clickRadius: 5,
      });
    }
  }

  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".bento-item").forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var bounds = card.getBoundingClientRect();
        var horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        var vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
        card.style.setProperty("--bento-tilt-x", `${-vertical * 16}deg`);
        card.style.setProperty("--bento-tilt-y", `${horizontal * 16}deg`);
      });
      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--bento-tilt-x", "0deg");
        card.style.setProperty("--bento-tilt-y", "0deg");
      });
    });
  }

  var productPreview = document.querySelector(".preview");
  if (productPreview && !reduce && window.matchMedia("(pointer: fine)").matches) {
    productPreview.addEventListener("pointermove", function (event) {
      var bounds = productPreview.getBoundingClientRect();
      var horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
      var vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
      productPreview.style.setProperty(
        "--preview-rotate-x",
        `${1 - vertical * 10}deg`,
      );
      productPreview.style.setProperty(
        "--preview-rotate-y",
        `${-1.2 + horizontal * 10}deg`,
      );
    });
    productPreview.addEventListener("pointerleave", function () {
      productPreview.style.setProperty("--preview-rotate-x", "1deg");
      productPreview.style.setProperty("--preview-rotate-y", "-1.2deg");
    });
  }

  if (!reduce) {
    document.querySelectorAll(".aud").forEach(function (card, cardIndex) {
      var meteorField = document.createElement("div");
      meteorField.className = "meteor-field";
      meteorField.setAttribute("aria-hidden", "true");

      for (var meteorIndex = 0; meteorIndex < 7; meteorIndex += 1) {
        var meteor = document.createElement("span");
        meteor.className = "meteor";
        meteor.style.setProperty(
          "--meteor-left",
          `${12 + ((meteorIndex * 23 + cardIndex * 11) % 82)}%`,
        );
        meteor.style.setProperty("--meteor-delay", `${meteorIndex * 0.82 + cardIndex * 0.35}s`);
        meteor.style.setProperty("--meteor-duration", `${4.8 + (meteorIndex % 3) * 0.65}s`);
        meteor.style.setProperty(
          "--meteor-travel",
          `${Math.max(300, card.clientHeight + 100)}px`,
        );
        meteorField.appendChild(meteor);
      }

      card.prepend(meteorField);
    });
  }

  // header scroll state
  var header = document.getElementById("site-header");
  var navCta = document.getElementById("nav-cta");
  window.addEventListener("scroll", function () {
    var y = window.scrollY > 12;
    header.classList.toggle("scrolled", y);
    navCta.style.display = y ? "inline-block" : "none";
  });

  var magneticButtons = [
    navCta,
    document.querySelector(".hero > .hero-ctas .btn-primary"),
  ].filter(Boolean);
  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    magneticButtons.forEach(function (button) {
      button.addEventListener("pointermove", function (event) {
        var bounds = button.getBoundingClientRect();
        var offsetX = (event.clientX - bounds.left - bounds.width / 2) * 0.2;
        var offsetY = (event.clientY - bounds.top - bounds.height / 2) * 0.2;
        button.style.setProperty("--magnetic-x", `${offsetX}px`);
        button.style.setProperty("--magnetic-y", `${offsetY}px`);
      });
      button.addEventListener("pointerleave", function () {
        button.style.setProperty("--magnetic-x", "0px");
        button.style.setProperty("--magnetic-y", "0px");
      });
    });
  }

  var todayMarker = document.querySelector(".timeline-today");
  var todayTimeline = document.querySelector(".timeline-wrap");
  if (todayMarker && todayTimeline) {
    var today = new Date();
    var rangeStart = new Date(2026, 0, 1).getTime();
    var rangeEnd = new Date(2028, 11, 31).getTime();
    var progress = Math.min(
      1,
      Math.max(0, (today.getTime() - rangeStart) / (rangeEnd - rangeStart)),
    );
    todayTimeline.style.setProperty("--today-progress", `${progress * 100}%`);
    document.querySelector(".timeline-today-label").textContent =
      `Today · ${today.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    todayMarker.setAttribute(
      "aria-label",
      `Today, ${today.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`,
    );
  }

  var macbookDevice = document.querySelector(".macbook-scroll-device");
  if (macbookDevice && !reduce) {
    var macbookFramePending = false;
    function updateMacbookScroll() {
      var stage = macbookDevice.parentElement.getBoundingClientRect();
      var progress = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.82 - stage.top) / 440),
      );
      macbookDevice.style.setProperty(
        "--device-tilt",
        `${(1 - progress) * 12}deg`,
      );
      macbookDevice.style.setProperty(
        "--device-scale",
        `${0.94 + progress * 0.06}`,
      );
      macbookDevice.style.setProperty(
        "--device-y",
        `${(1 - progress) * 24}px`,
      );
    }

    window.addEventListener(
      "scroll",
      function () {
        if (macbookFramePending) return;
        macbookFramePending = true;
        window.requestAnimationFrame(function () {
          macbookFramePending = false;
          updateMacbookScroll();
        });
      },
      { passive: true },
    );
    window.addEventListener("resize", updateMacbookScroll);
    updateMacbookScroll();
  }

  // mobile menu
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  // tabs
  var tabs = document.querySelectorAll('.preview-tabs [role="tab"]');
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.setAttribute("aria-selected", "false");
      });
      tab.setAttribute("aria-selected", "true");
    });
  });

  document.querySelectorAll(".territory-toggle").forEach(function (button) {
    button.addEventListener("click", function () {
      var wasExpanded = button.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".territory-toggle").forEach(function (item) {
        var details = document.getElementById(item.getAttribute("aria-controls"));
        item.setAttribute("aria-expanded", "false");
        details.setAttribute("aria-hidden", "true");
        details.classList.remove("is-open");
      });

      if (!wasExpanded) {
        var details = document.getElementById(button.getAttribute("aria-controls"));
        button.setAttribute("aria-expanded", "true");
        details.setAttribute("aria-hidden", "false");
        details.classList.add("is-open");
      }
    });
  });

  // Flip principle cards
  document.querySelectorAll(".principle-card").forEach(function (card) {
    card.addEventListener("click", function () {
      var flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", flipped ? "true" : "false");
    });
  });

  // Pin and advance the audience card stack while its section scrolls.
  var audienceSection = document.getElementById("audience");
  if (audienceSection && !reduce) {
    var audienceStage = audienceSection.querySelector(".audience-stage");
    var audienceCards = Array.from(
      audienceSection.querySelectorAll(".aud"),
    );

    function updateAudienceStack() {
      var sectionBounds = audienceSection.getBoundingClientRect();
      var scrollDistance = audienceSection.offsetHeight - audienceStage.offsetHeight;
      var progress = Math.min(
        1,
        Math.max(0, -sectionBounds.top / Math.max(1, scrollDistance)),
      );
      var activePosition = progress * (audienceCards.length - 1);

      audienceCards.forEach(function (card, index) {
        var distance = index - activePosition;
        var depth = Math.min(3, Math.max(0, distance));
        var exit = Math.min(1, Math.max(0, -distance));
        card.style.setProperty("--stack-y", `${depth * 18 - exit * 90}px`);
        card.style.setProperty(
          "--stack-scale",
          `${1 - depth * 0.045 - exit * 0.08}`,
        );
        card.style.setProperty("--stack-opacity", `${1 - exit}`);
        card.style.zIndex = String(
          Math.round(1000 - Math.abs(distance) * 100) + index,
        );
      });
    }

    var audienceFramePending = false;
    window.addEventListener(
      "scroll",
      function () {
        if (audienceFramePending) return;
        audienceFramePending = true;
        window.requestAnimationFrame(function () {
          audienceFramePending = false;
          updateAudienceStack();
        });
      },
      { passive: true },
    );
    window.addEventListener("resize", updateAudienceStack);
    updateAudienceStack();
  }

  // Select and navigate lifecycle moments
  var moments = document.querySelector(".moments");
  if (moments) {
    var momentButtons = Array.from(moments.querySelectorAll(".moment"));
    function selectMoment(selectedButton) {
      activeMoment = selectedButton;
      var selectedIndex = momentButtons.indexOf(selectedButton);
      momentButtons.forEach(function (button) {
        var isSelected = button === selectedButton;
        button.setAttribute("aria-pressed", isSelected ? "true" : "false");
        button.tabIndex = isSelected ? 0 : -1;
      });
      moments.style.setProperty(
        "--timeline-progress",
        `${(selectedIndex / (momentButtons.length - 1)) * 100}%`,
      );
      function getDotPosition(button) {
        var dot = button.querySelector(".moment-dot");
        return button.offsetTop + dot.offsetTop + dot.offsetHeight / 2;
      }
      var markerPosition = getDotPosition(selectedButton);
      moments.style.setProperty("--moment-marker-y", `${markerPosition}px`);
      moments.style.setProperty(
        "--moment-rail-start-y",
        `${getDotPosition(momentButtons[0])}px`,
      );
      moments.style.setProperty(
        "--moment-rail-end-y",
        `${getDotPosition(momentButtons[momentButtons.length - 1])}px`,
      );
    }

    var activeMoment = momentButtons[0];
    momentButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        selectMoment(button);
      });
      button.addEventListener("keydown", function (event) {
        var nextIndex = index;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          nextIndex = (index + 1) % momentButtons.length;
        } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          nextIndex = (index - 1 + momentButtons.length) % momentButtons.length;
        } else {
          return;
        }
        event.preventDefault();
        selectMoment(momentButtons[nextIndex]);
        momentButtons[nextIndex].focus();
      });
    });

    function updateMomentFromScroll() {
      var viewportCenter = window.innerHeight / 2;
      var nearestMoment = momentButtons.reduce(function (nearest, button) {
        var buttonCenter =
          button.getBoundingClientRect().top + button.offsetHeight / 2;
        var nearestCenter =
          nearest.getBoundingClientRect().top + nearest.offsetHeight / 2;
        return Math.abs(buttonCenter - viewportCenter) <
          Math.abs(nearestCenter - viewportCenter)
          ? button
          : nearest;
      }, momentButtons[0]);

      activeMoment = nearestMoment;
      selectMoment(activeMoment);
    }

    var scrollFramePending = false;
    window.addEventListener(
      "scroll",
      function () {
        if (scrollFramePending) return;
        scrollFramePending = true;
        window.requestAnimationFrame(function () {
          scrollFramePending = false;
          updateMomentFromScroll();
        });
      },
      { passive: true },
    );
    window.addEventListener("resize", updateMomentFromScroll);
    selectMoment(activeMoment);
    updateMomentFromScroll();
  }

  // Prototype form validation and confirmation
  document.querySelectorAll("form[data-validate]").forEach(function (form) {
    var fields = Array.from(
      form.querySelectorAll("input[required], textarea[required]"),
    );
    var status = form.querySelector(".form-status");

    fields.forEach(function (field) {
      field.addEventListener("input", function () {
        var fieldContainer = field.closest(".field");
        var isInvalid = !field.checkValidity();
        fieldContainer.classList.toggle("is-invalid", isInvalid);
        field.setAttribute("aria-invalid", isInvalid ? "true" : "false");
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var firstInvalidField = null;

      fields.forEach(function (field) {
        var isInvalid = !field.checkValidity();
        var fieldContainer = field.closest(".field");
        fieldContainer.classList.toggle("is-invalid", isInvalid);
        field.setAttribute("aria-invalid", isInvalid ? "true" : "false");
        if (isInvalid && !firstInvalidField) firstInvalidField = field;
      });

      if (firstInvalidField) {
        if (status) status.textContent = "Please check the highlighted fields.";
        firstInvalidField.focus();
        return;
      }

      if (status) {
        status.textContent = form.dataset.success || "Your form was submitted.";
        status.classList.add("is-success");
      }
      form.reset();
      fields.forEach(function (field) {
        field.removeAttribute("aria-invalid");
        field.closest(".field").classList.remove("is-invalid");
      });
    });
  });

  // reveal on scroll
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in");
    });
  }
})();
