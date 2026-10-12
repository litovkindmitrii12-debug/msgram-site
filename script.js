document.documentElement.classList.add('js');

/* ============================================================
   ССЫЛКИ НА СКАЧИВАНИЕ — единственное, что нужно менять.
   Пока строка пустая, кнопка серая и не нажимается.
   Когда файл готов, вставьте ссылку между кавычками, например:
   windows: 'https://github.com/ВАШ_ЛОГИН/msgram/releases/latest/download/Msgram-Setup.exe'
   или относительный путь к файлу в репозитории: 'downloads/Msgram-Setup.exe'
   ============================================================ */
var DOWNLOADS = {
  windows: '',
  linux:   '',
  android: ''
};

document.querySelectorAll('[data-platform]').forEach(function (btn) {
  var url = DOWNLOADS[btn.dataset.platform];
  var note = btn.parentElement.querySelector('[data-note]');
  if (url) {
    btn.href = url;
    btn.setAttribute('download', '');
    btn.removeAttribute('aria-disabled');
    btn.removeAttribute('tabindex');
    btn.classList.remove('btn--disabled');
    btn.classList.add('btn--primary');
    if (note) note.remove();
  } else {
    btn.addEventListener('click', function (e) { e.preventDefault(); });
  }
});

/* Плавное появление блоков при прокрутке */
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(function (el) { io.observe(el); });
})();
