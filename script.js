/* ============================================================
   Memory Vault — experience logic
   Pure HTML/CSS/JS. No backend. Deploy-ready (GitHub / Cloudflare Pages).
   ============================================================ */

/* ---- 1. Image manifest ------------------------------------
   99 normal memories (alphabetical), then last1 & last2 forced
   to the very end for the cinematic finale.                    */
const NORMAL_IMAGES = [
  "13544cdfcff44b49958aa2d4dd601657.jpg",
  "AGC_20240423_094833729.jpg",
  "AGC_20240423_113428167.jpg",
  "AGC_20240423_154251396.jpg",
  "AGC_20240424_001702407.jpg",
  "AGC_20240424_112217757.jpg",
  "AGC_20240424_112712028.jpg",
  "AGC_20240424_131606032.jpg",
  "IMG-20221217-WA0160.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.10 (1).jpeg",
  "IMG-20230112-WA0038.jpg",
  "IMG-20230214-WA0027.jpg",
  "IMG-20230413-WA0008.jpg",
  "IMG-20230413-WA0013.jpg",
  "IMG-20230413-WA0015.jpg",
  "IMG-20230516-WA0019.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.10 (2).jpeg",
  "IMG-20230601-WA0054.jpg",
  "IMG-20230713-WA0073.jpg",
  "IMG-20230713-WA0075.jpg",
  "IMG-20230727-WA0032.jpg",
  "IMG-20230728-WA0030.jpg",
  "IMG-20230913-WA0036.jpg",
  "IMG-20231019-WA0031.jpg",
  "IMG-20231023-WA0038.jpg",
  "IMG-20231023-WA0043.jpg",
  "IMG-20231023-WA0046.jpg",
  "IMG-20231023-WA0051.jpg",
  "IMG-20231023-WA0071.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.11 (2).jpeg",
  "IMG-20250428-WA0039.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.12 (2).jpeg",
  "IMG_0741.jpg",
  "IMG_0756.jpg",
  "IMG_1288.jpg",
  "IMG_20221007_150516.jpg",
  "IMG_20221028_163237.jpg",
  "IMG_20230112_204637.jpg",
  "IMG_20230114_115429.jpg",
  "IMG_20230124_143955.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.09.jpeg",
  "IMG_20230131_150938.jpg",
  "IMG_20230204_185118.jpg",
  "IMG_20230224_173610.jpg",
  "IMG-20250208-WA0028.jpg",
  "IMG_20230525_221922.jpg",
  "IMG_20230527_091344.jpg",
  "IMG_20230530_162149.jpg",
  "IMG_20230604_170400.jpg",
  "IMG_20230612_191555.jpg",
  "IMG_20230619_193046.jpg",
  "IMG_20230704_145426.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.08.jpeg",
  "IMG_20230711_083126.jpg",
  "IMG_20230711_083425.jpg",
  "IMG_20230712_172354.jpg",
  "IMG_20230713_105947.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.16.jpeg",
  "IMG_20230715_153313.jpg",
  "IMG_20230715_153405.jpg",
  "IMG_20230828_153749.jpg",
  "IMG_20230828_195032.jpg",
  "IMG_20230829_120732.jpg",
  "IMG_20230912_112746.jpg",
  "IMG_20230913_133044.jpg",
  "IMG_20231005_221903.jpg",
  "IMG_20231108_055810.jpg",
  "IMG_5309.jpg",
  "IMG_20231108_101416.jpg",
  "IMG_20231108_101420.jpg",
  "IMG_5500.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.08aa.jpeg",
  "WhatsApp Image 2026-09-18 at 14.14.40.jpeg",
  "WhatsApp Image 2026-09-18 at 14.14.40s.jpeg",
  "IMG-20240403-WA0006.jpg",
  "WhatsApp Image 2026-09-18 at 14.14.41faddf.jpeg",
  "WhatsApp Image 2026-09-18 at 14.14.41sdsd.jpeg",
  "WhatsApp Image 2026-09-18 at 14.14.41sfd.jpeg",
  "WhatsApp Image 2026-09-18 at 14.14.42dsf.jpeg",
  "WhatsApp Image 2026-09-18 at 14.14.43adfadf.jpeg",
  "2025_04_18_01_13_IMG_8993.JPG",
  "2025_04_18_15_15_IMG_9249.JPG",
  "2025_04_19_19_57_IMG_9324.JPG",
  "2025_10_26_13_20_IMG_1168.JPG",
  "WhatsApp Image 2026-09-18 at 14.14.43dfsdf.jpeg",
  "WhatsApp Image 2026-09-18 at 14.14.43sdsd.jpeg",
  "WhatsApp Image 2026-09-18 at 14.14.44adf.jpeg",
  "IMG-20250428-WA0047.jpg",
  "WhatsApp Image 2026-09-18 at 14.14.44adfadf.jpeg",
  "IMG_5308.jpg",
  "WhatsApp Image 2026-09-18 at 14.14.45adf.jpeg",
  "WhatsApp Image 2026-09-18 at 14.14.48WDWD.jpeg",
  "IMG_20231108_105100.jpg",
  "IMG_20231109_091839.jpg",
  "IMG_20231124_192612.jpg",
  "IMG_20231219_192728.jpg",
  "IMG_2624.JPG",
  "IMG_20231219_192833.jpg",
  "IMG_20231219_193006.jpg",
  "IMG_20240104_112437.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.09zd.jpeg",
  "IMG_20240107_114304.jpg",
  "IMG_20240110_124643.jpg",
  "IMG_2799.JPG",
  "IMG_20240111_102019.jpg",
  "IMG_3278.jpg",
  "IMG_20240111_182324.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.13 (1).jpeg",
  "IMG_20240111_193352.jpg",
  "IMG_20240117_104318.jpg",
  "IMG_20240117_122554.jpg",
  "IMG_20240124_121349.jpg",
  "IMG_20240302_232436.jpg",
  "IMG_5205.jpg",
  "IMG_20240331_103658.jpg",
  "IMG_20240331_103753.jpg",
  "IMG_20240423_192215.jpg",
  "IMG_20240428_074307.jpg",
  "IMG_20240808_164348.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.13 (2).jpeg",
  "IMG_20240824_173054.jpg",
  "IMG_20240824_173655.jpg",
  "IMG_20240824_174059.jpg",
  "IMG_2209.jpg",
  "IMG_2232.jpg",
  "IMG_2308.jpg",
  "IMG_5014.jpg",
  "IMG_2726.jpg",
  "IMG_3123.jpg",
  "IMG_3278a.jpg",
  "PXL_20240423_100504060.RAW-01.MP.COVER.jpg",
  "PXL_20240424_074157987.RAW-01.MP.COVER.jpg",
  "Snapchat-1431294820.jpg",
  "Snapchat-1491887139.jpg",
  "WhatsApp Image 2026-09-18 at 12.25.13.jpeg",
  "Snapchat-1554679999.jpg",
  "IMG_5300.jpg",
  "Snapchat-2029569476.jpg",
  "Snapchat-837453904.jpg"
];
const LAST1 = "last1.jpg";
const LAST2 = "last2.jpg";

/* ---- 2. Build the ordered sequence of "steps" ------------- */
const ENTRANCE = ["anim-fade", "anim-scale", "anim-slideL", "anim-slideR", "anim-slideU", "anim-card"];
const steps = [];

// 99 normal memories
NORMAL_IMAGES.forEach((src, i) => {
  steps.push({
    type: "photo",
    src,
    memory: i + 1,
    anim: ENTRANCE[i % ENTRANCE.length]
  });
});
// interstitial + last1  (memory 100)
steps.push({ type: "interstitial", text: "Okay… one last memory." });
steps.push({ type: "photo", src: LAST1, memory: 140, cinematic: true, anim: "anim-scale" });
// interstitial + last2  (memory 101)
steps.push({ type: "interstitial", text: "Actually… we saved the best one for last 😂", strong: true });
steps.push({ type: "photo", src: LAST2, memory: 141, cinematic: true, finale: true });

const TOTAL_MEMORIES = 141;

/* ---- 3. Element refs -------------------------------------- */
const $ = (id) => document.getElementById(id);
const loader = $("loader");
const introEl = $("intro");
const galleryEl = $("gallery");
const endingEl = $("ending");
const stage = $("stage");
const counterEl = $("counter");
const progressFill = $("progressFill");
const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");
const playBtn = $("playBtn");
const swipeHint = $("swipeHint");
const bgMusic = $("bgMusic");

/* ---- 4. State --------------------------------------------- */
let index = 0;            // current step index within `steps`
let busy = false;         // guards during transitions
const imgCache = {};      // src -> HTMLImageElement (decoded)

/* Autoplay */
let autoplay = true;      // slideshow on by default
let autoTimer = null;     // pending advance
const PHOTO_MS = 3500;    // time a normal memory stays on screen
const TEXT_MS = 2900;     // time an interstitial line stays
const FINALE_MS = 4600;   // linger on the very last memory


/* ---- Background music --------------------------------------- */

function startMusic() {
  if (!bgMusic) return;

  bgMusic.volume = 0.35;

  const playPromise = bgMusic.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Browser may block autoplay in some situations.
      // The music will still be allowed because this function
      // is called from the user's Enter button interaction.
    });
  }
}

function stopMusic() {
  if (!bgMusic) return;

  bgMusic.pause();
  bgMusic.currentTime = 0;
}

/* ---- 5. Preloading helpers -------------------------------- */
function preload(src) {
  if (!src || imgCache[src]) return imgCache[src];
  const img = new Image();
  img.src = src;
  imgCache[src] = img;
  return img;
}
function preloadAround(i) {
  for (let k = i; k <= i + 2; k++) {
    const s = steps[k];
    if (s && s.type === "photo") preload(s.src);
  }
}

/* ---- 6. Boot: preload first memory, then show intro ------- */
function boot() {
  const first = steps.find((s) => s.type === "photo");
  const warm = new Image();
  let done = false;
  const reveal = () => {
    if (done) return;
    done = true;
    loader.classList.add("fade-out");
    setTimeout(() => loader.classList.add("hidden"), 500);
    startIntro();
  };
  warm.onload = reveal;
  warm.onerror = reveal;
  warm.src = first.src;
  // safety timeout so the vault always opens
  setTimeout(reveal, 2500);
  preloadAround(steps.indexOf(first));
}

/* ---- 7. Intro sequence ------------------------------------ */
function startIntro() {
  introEl.classList.remove("hidden");

  const lines = introEl.querySelectorAll(".intro-line");
  const btn = $("enterBtn");
  const videoInvitation = introEl.querySelector(".video-invitation");

  lines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add("show");
    }, 500 + i * 1600);
  });

  setTimeout(() => {
    // Show Enter the vault button
    btn.classList.add("show");

    // Show video invitation
    if (videoInvitation) {
      videoInvitation.classList.add("show");
    }
  }, 500 + lines.length * 1600 + 200);

  // Enter the slideshow ONLY when the button is pressed
  btn.onclick = () => {
    goToGallery();
  };
}

/* ---- 8. Enter gallery ------------------------------------- */
function goToGallery() {
  introEl.classList.add("hidden");

  galleryEl.classList.remove("hidden");
  galleryEl.classList.add("reveal-in");

  index = 0;

  // Start background music from the user's button click
  startMusic();

  // Render the first image.
  // Autoplay will begin only after the image is fully loaded.
  render(steps[index], "forward", true);
}

/* ---- 9. Render a step ------------------------------------- */
function render(step, direction, instant = false) {
  preloadAround(index);

  const old = stage.querySelector(".card, .interstitial");

  const mount = () => {
    const node =
      step.type === "photo"
        ? buildPhoto(step)
        : buildInterstitial(step);

    stage.appendChild(node);

    updateChrome(step);

    /*
     * PHOTO:
     * Wait until the image is completely loaded/decoded
     * before starting the display timer.
     */
    if (step.type === "photo") {

      node.imageReady.then(() => {

        /*
         * Make sure the user hasn't navigated away while
         * this image was loading.
         */
        if (steps[index] !== step) {
          return;
        }

        /*
         * Now the image is completely ready.
         *
         * Only NOW start the 3.5 second timer.
         */
        scheduleAuto();

      });

    } else {

      /*
       * Interstitial text does not need image loading.
       */
      scheduleAuto();
    }
  };

  if (old && !instant) {

    old.classList.add("leaving");

    setTimeout(() => {
      old.remove();
      mount();
    }, 260);

  } else {

    if (old) {
      old.remove();
    }

    mount();
  }
}

function buildPhoto(step) {
  const card = document.createElement("div");

  card.className =
    "card reveal " + (step.anim || "anim-fade");

  if (step.cinematic) {
    card.classList.add("cinematic");
  }

  if (step.finale) {
    card.classList.add("finale-strong");
  }

  const frame = document.createElement("div");
  frame.className = "card-frame loading";

  const img = document.createElement("img");

  img.alt = "Memory " + step.memory;
  img.decoding = "async";

  /*
   * The slideshow waits for this promise before starting
   * the display timer.
   */
  let imageReadyResolve;

  const imageReady = new Promise((resolve) => {
    imageReadyResolve = resolve;
  });

  const finishLoading = async () => {
    try {
      /*
       * decode() waits until the browser has decoded the
       * complete image and it is ready to display.
       */
      if (img.decode) {
        await img.decode();
      }
    } catch (error) {
      // If decode() fails, the image may still be usable.
    }

    frame.classList.remove("loading");

    imageReadyResolve();
  };

  const cached = imgCache[step.src];

  if (cached && cached.complete && cached.naturalWidth) {
    img.src = step.src;

    /*
     * Cached image is already available.
     */
    finishLoading();
  } else {
    img.onload = finishLoading;

    img.onerror = () => {
      /*
       * Do not freeze the slideshow forever if an image
       * cannot be loaded.
       */
      frame.classList.remove("loading");
      imageReadyResolve();
    };

    img.src = step.src;
  }

  /*
   * Tell render() when the image is completely ready.
   */
  card.imageReady = imageReady;

  const shine = document.createElement("div");
  shine.className = "card-shine";

  frame.appendChild(img);
  frame.appendChild(shine);

  card.appendChild(frame);

  const num = document.createElement("div");

  num.className = "card-num";

  num.textContent =
    step.finale
      ? "the best one ❤️"
      : step.cinematic
        ? "one last memory"
        : "memory no. " + step.memory;

  card.appendChild(num);

  return card;
}

function buildInterstitial(step) {
  const wrap = document.createElement("div");
  wrap.className = "interstitial" + (step.strong ? " strong" : "");
  const p = document.createElement("p");
  p.textContent = step.text;
  wrap.appendChild(p);
  return wrap;
}

/* ---- 10. Update counter / progress / buttons -------------- */
function updateChrome(step) {
  if (step.type === "photo") {
    counterEl.textContent = "Memory " + step.memory + " / " + TOTAL_MEMORIES;
    counterEl.style.visibility = "visible";
    progressFill.style.width = (step.memory / TOTAL_MEMORIES) * 100 + "%";
  } else {
    counterEl.style.visibility = "hidden";
  }
  prevBtn.disabled = index === 0;
}

/* ---- 11. Autoplay engine ---------------------------------- */
function stepDelay() {
  const s = steps[index];
  if (s.type === "interstitial") return TEXT_MS;
  if (s.finale) return FINALE_MS;
  return PHOTO_MS;
}
function ringReset() {
  playBtn.style.transition = "none";
  playBtn.style.setProperty("--auto", "0%");
}
function ringRun(ms) {
  playBtn.style.transition = "none";
  playBtn.style.setProperty("--auto", "0%");
  void playBtn.offsetWidth;            // force reflow so the animation restarts
  playBtn.style.transition = "--auto " + ms + "ms linear";
  playBtn.style.setProperty("--auto", "100%");
}
function ringFreeze() {
  const now = getComputedStyle(playBtn).getPropertyValue("--auto");
  playBtn.style.transition = "none";
  playBtn.style.setProperty("--auto", now);
}
function clearAuto() {
  if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
}
function scheduleAuto() {
  clearAuto();

  if (
    !autoplay ||
    galleryEl.classList.contains("hidden")
  ) {
    ringReset();
    return;
  }

  const step = steps[index];

  /*
   * If this is a photo, the timer is started by
   * render() only after the image has finished loading.
   */
  if (step.type === "photo") {
    const currentCard = stage.querySelector(".card");

    if (
      currentCard &&
      currentCard.imageReady
    ) {
      /*
       * render() normally handles this.
       * This fallback handles cached images/navigation.
       */
      currentCard.imageReady.then(() => {

        if (
          steps[index] !== step ||
          !autoplay
        ) {
          return;
        }

        startAutoTimer();
      });

      return;
    }
  }

  startAutoTimer();
}
function startAutoTimer() {
  clearAuto();

  if (
    !autoplay ||
    galleryEl.classList.contains("hidden")
  ) {
    ringReset();
    return;
  }

  const ms = stepDelay();

  ringRun(ms);

  autoTimer = setTimeout(() => {
    next();
  }, ms);
}
function setAutoplay(on) {
  autoplay = on;
  playBtn.classList.toggle("paused", !on);
  playBtn.setAttribute("aria-pressed", String(on));
  playBtn.setAttribute("aria-label", on ? "Pause slideshow" : "Play slideshow");
  if (on) {
    swipeHint.textContent = "swipe · tap sides · hold to pause";
    scheduleAuto();
  } else {
    clearAuto();
    ringFreeze();
    swipeHint.textContent = "paused — tap ▶ to resume";
  }
}

/* ---- 12. Navigation --------------------------------------- */
function next() {
  if (busy) return;

  if (index >= steps.length - 1) {
    showEnding();
    return;
  }

  busy = true;

  clearAuto();
  ringReset();

  index++;

  /*
   * render() now waits for the new image to finish
   * loading before starting the timer.
   */
  render(steps[index], "forward");

  setTimeout(() => {
    busy = false;
  }, 300);
}
function prev() {
  if (busy || index === 0) return;

  busy = true;

  clearAuto();
  ringReset();

  index--;

  render(steps[index], "back");

  setTimeout(() => {
    busy = false;
  }, 300);
}

/* ---- 12. Ending ------------------------------------------- */
function showEnding() {
  clearAuto();
  ringReset();

  // Stop background music when slideshow finishes
  stopMusic();

  galleryEl.classList.add("hidden");

  endingEl.classList.remove("hidden");

  endingEl.classList.remove("reveal-in");

  void endingEl.offsetWidth;

  endingEl.classList.add("reveal-in");
}

function replay() {
  stopMusic();

  endingEl.classList.add("hidden");

  // Reset intro lines
  introEl
    .querySelectorAll(".intro-line")
    .forEach((l) => l.classList.remove("show"));

  $("enterBtn").classList.remove("show");

  const videoInvitation = introEl.querySelector(".video-invitation");

  if (videoInvitation) {
    videoInvitation.classList.remove("show");
  }

  if (swipeHint) {
    swipeHint.style.opacity = "";
  }

  setAutoplay(true);

  index = 0;

  startIntro();
}

/* ---- 13. Wire up controls --------------------------------- */
let lastSwipe = 0; // suppresses the ghost click a swipe leaves on a tap-zone
const tapNav = (fn) => () => { if (Date.now() - lastSwipe < 450) return; fn(); };

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
$("tapNext").addEventListener("click", tapNav(next));
$("tapPrev").addEventListener("click", tapNav(prev));
$("replayBtn").addEventListener("click", replay);
playBtn.addEventListener("click", () => setAutoplay(!autoplay));

// pause the slideshow while the tab/app is in the background, resume on return

document.addEventListener("visibilitychange", () => {

  if (galleryEl.classList.contains("hidden")) {
    return;
  }

  if (document.hidden) {

    clearAuto();
    ringFreeze();

    if (bgMusic) {
      bgMusic.pause();
    }

  } else if (autoplay) {

    /*
     * Resume music.
     */
    startMusic();

    /*
     * Resume slideshow timer.
     */
    scheduleAuto();
  }
});

// keyboard (desktop)
document.addEventListener("keydown", (e) => {
  if (galleryEl.classList.contains("hidden")) {
    if (e.key === "Enter" && !introEl.classList.contains("hidden")) goToGallery();
    return;
  }
  if (e.key === "ArrowRight") next();
  else if (e.key === "ArrowLeft") prev();
  else if (e.key === " ") { e.preventDefault(); setAutoplay(!autoplay); }
});

// ---- Touch: finger-following drag, tap-to-pause, hold-to-pause ----
let tStartX = 0, tStartY = 0, tMoved = false, dragging = false, resumeAfter = false;

function currentCard() { return stage.querySelector(".card, .interstitial"); }
function haptic(ms, ev) {
  if (ev && ev.isTrusted === false) return;   // skip synthetic events
  if (navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) {} }
}

stage.addEventListener("touchstart", (e) => {
  if (e.touches.length > 1) return;              // ignore pinch
  const t = e.changedTouches[0];
  tStartX = t.clientX; tStartY = t.clientY;
  tMoved = false; dragging = true;
  resumeAfter = autoplay;                         // holding pauses; release resumes
  clearAuto(); ringFreeze();
  const card = currentCard();
  if (card) card.style.transition = "none";
}, { passive: true });

stage.addEventListener("touchmove", (e) => {
  if (!dragging || e.touches.length > 1) return;
  const t = e.changedTouches[0];
  const dx = t.clientX - tStartX, dy = t.clientY - tStartY;
  if (Math.abs(dx) > 8 || Math.abs(dy) > 8) tMoved = true;
  const card = currentCard();
  if (card && Math.abs(dx) > Math.abs(dy)) {
    const shift = dx * 0.72;                       // follow the finger (dampened)
    card.style.transform = "translateX(" + shift + "px) rotate(" + (shift * 0.02) + "deg)";
    card.style.opacity = String(Math.max(0.45, 1 - Math.abs(dx) / 520));
  }
}, { passive: true });

stage.addEventListener("touchend", (e) => {
  if (!dragging) return;
  dragging = false;
  const t = e.changedTouches[0];
  const dx = t.clientX - tStartX, dy = t.clientY - tStartY;
  const card = currentCard();
  const horizontal = Math.abs(dx) > Math.abs(dy);
  const threshold = Math.min(90, window.innerWidth * 0.18);

  // committed swipe -> navigate
  if (horizontal && Math.abs(dx) > threshold) {
    if (card) { card.style.transform = ""; card.style.opacity = ""; }
    lastSwipe = Date.now();
    haptic(10, e);
    dx < 0 ? next() : prev();
    return;
  }

  // a clean tap in the middle band toggles pause/play (Stories-style)
  if (!tMoved) {
    const x = t.clientX, w = window.innerWidth;
    if (x > w * 0.3 && x < w * 0.7) {
      haptic(8, e);
      setAutoplay(!autoplay);
      resumeAfter = autoplay;
    }
  }

  // not enough to commit -> snap back
  if (card) {
    card.style.transition = "transform .35s var(--ease), opacity .35s var(--ease)";
    card.style.transform = ""; card.style.opacity = "";
  }
  if (resumeAfter) scheduleAuto();
}, { passive: true });

stage.addEventListener("touchcancel", () => {
  dragging = false;
  const card = currentCard();
  if (card) {
    card.style.transition = "transform .35s var(--ease), opacity .35s var(--ease)";
    card.style.transform = ""; card.style.opacity = "";
  }
  if (autoplay) scheduleAuto();
}, { passive: true });

/* ---- 14. Mobile viewport height fix (address-bar aware) ---- */
function setVH() {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
}
setVH();
window.addEventListener("resize", setVH);
window.addEventListener("orientationchange", setVH);

/* ---- 15. Go ------------------------------------------------ */
boot();
