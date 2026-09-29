// Light/dark toggle. The choice is remembered in the browser (localStorage).
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) saved = "dark";
  if (saved) root.setAttribute("data-theme", saved);

  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
