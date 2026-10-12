/* Msgram landing — small, dependency-free. */

/* ---------------------------------------------------------------
   ССЫЛКИ НА СКАЧИВАНИЕ
   Когда файлы будут готовы, впишите сюда ссылки (например, на
   GitHub Releases) — и кнопка автоматически станет рабочей,
   а плашка «Скоро» исчезнет. Пустая строка = кнопка неактивна.
   --------------------------------------------------------------- */
const DOWNLOADS = {
  windows: "", // https://github.com/<user>/<repo>/releases/latest/download/Msgram-Setup.exe
  linux:   "", // https://github.com/<user>/<repo>/releases/latest/download/Msgram.AppImage
  android: ""  // https://github.com/<user>/<repo>/releases/latest/download/Msgram.apk
};

(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // nav border on scroll
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // download buttons: enable when a URL is provided
  document.querySelectorAll("button[data-platform]").forEach((btn) => {
    const url = DOWNLOADS[btn.dataset.platform];
    if (!url) return;
    const a = document.createElement("a");
    a.className = btn.className;
    a.href = url;
    a.setAttribute("download", "");
    a.innerHTML = btn.innerHTML;
    btn.replaceWith(a);
    const soon = a.closest(".dl-card")?.querySelector(".soon");
    if (soon) soon.remove();
  });

  // scroll reveal (one-shot)
  const items = document.querySelectorAll(".rv");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("on"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    items.forEach((el) => io.observe(el));
  }

  // hero: logo tile + chat messages appear once, in sequence
  const tile = document.querySelector(".logo-tile");
  const msgs = document.querySelectorAll("#chat .msg");
  if (reduce) {
    tile && tile.classList.add("on");
    msgs.forEach((m) => m.classList.add("on"));
  } else {
    requestAnimationFrame(() => tile && tile.classList.add("on"));
    msgs.forEach((m, i) => setTimeout(() => m.classList.add("on"), 500 + i * 650));
  }
})();
