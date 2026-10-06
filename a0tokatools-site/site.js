/* ===== A0tokatools 共通設定(ここだけ書き換えればOK) ===== */
window.SITE = {
  APP_URL: "https://ao-soundbutton.vercel.app/",   // SoundButton(ブラウザ版)
  DOWNLOAD_URL: "",                                  // ★ exeのダウンロードURL(GitHub Releasesなど)。空欄の間は「準備中」と表示
  VERSION: "1.1.0",
  DISCORD: "https://discord.gg/bUBHtz7wdF",
  MAIL: "info.a0tkdeveloper@gmail.com"
};
(function () {
  var S = window.SITE, root = document.documentElement;
  var LINKS = {
    app: S.APP_URL, terms: S.APP_URL + "terms.html", privacy: S.APP_URL + "privacy.html",
    copyright: S.APP_URL + "copyright.html", discord: S.DISCORD, mail: "mailto:" + S.MAIL
  };
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var u = LINKS[a.dataset.link]; if (!u) return; a.href = u;
    if (/^https?:/.test(u)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
  });
  document.querySelectorAll("[data-mail]").forEach(function (e) { e.textContent = S.MAIL; });
  document.querySelectorAll("[data-version]").forEach(function (e) { e.textContent = S.VERSION; });

  function theme(t) {
    root.dataset.theme = t;
    var b = document.getElementById("theme"); if (b) b.textContent = t === "light" ? "☀️" : "🌙";
    try { localStorage.setItem("a0_theme", t); } catch (e) {}
  }
  theme(root.dataset.theme || "dark");
  var tb = document.getElementById("theme");
  if (tb) tb.onclick = function () { theme(root.dataset.theme === "light" ? "dark" : "light"); };

  var mobile = /Android|iPhone|iPad|iPod|Macintosh.*Mobile/i.test(navigator.userAgent);
  document.querySelectorAll("[data-dl]").forEach(function (a) {
    if (mobile) { a.setAttribute("aria-disabled", "true"); a.textContent = "exe版はWindows用です"; }
    else if (S.DOWNLOAD_URL) { a.href = S.DOWNLOAD_URL; }
    else { a.setAttribute("aria-disabled", "true"); a.textContent = "exe版は準備中です"; }
  });
  var nav = document.getElementById("navbtn");
  if (nav) nav.onclick = function () { document.body.classList.toggle("navopen"); };
})();
