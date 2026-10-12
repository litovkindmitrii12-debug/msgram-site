<p align="center"><img src="assets/logo-256.png" width="120" alt="Msgram"></p>

# Msgram

Сайт мессенджера Msgram для Windows, Linux и Android. Обычные статические файлы, сборка не нужна.

## Как залить на GitHub и опубликовать
1. На github.com нажмите **New repository**, назовите, например, `msgram`, тип **Public**, создайте.
2. На странице репозитория нажмите **uploading an existing file** и перетащите в окно **всё содержимое** распакованной папки (файлы `index.html`, `style.css`, `script.js`, `favicon.ico`, `.nojekyll`, папки `assets` и `downloads`). Нажмите **Commit changes**.
3. Откройте **Settings → Pages**. В разделе Source выберите **Deploy from a branch**, ветку **main**, папку **/ (root)**, нажмите **Save**.
4. Через 1–2 минуты сайт откроется по адресу `https://ВАШ_ЛОГИН.github.io/msgram/`.

`index.html` должен лежать в корне репозитория, а не внутри вложенной папки.

## Как включить кнопки скачивания
Откройте `script.js`, в самом верху найдите блок `DOWNLOADS` и вставьте ссылку между кавычками:

    windows: 'https://github.com/ВАШ_ЛОГИН/msgram/releases/latest/download/Msgram-Setup.exe',

Пустая строка — кнопка остаётся серой. Заполненная — кнопка становится синей и скачивает файл.
Для больших файлов создайте релиз: **Releases → Draft a new release**, приложите файлы и скопируйте ссылки на них.
