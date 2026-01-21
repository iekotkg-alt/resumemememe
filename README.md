# Resumemememe

Этот проект настроен для деплоя статического сайта на GitHub Pages через GitHub Actions.

## Как захостить на GitHub Pages

1. **Залейте репозиторий на GitHub** и убедитесь, что рабочая ветка называется `main`.
2. **Откройте настройки репозитория** → **Pages**.
   - В разделе **Build and deployment** выберите **Source: GitHub Actions**.
3. **Дождитесь выполнения workflow** `Deploy to GitHub Pages` после каждого пуша в `main`.
   - Артефакт собирается в папку `out` командой `pnpm build`.

## Как формируется basePath

GitHub Actions выставляет переменную `BASE_PATH` автоматически:

- Если в настройках репозитория задана переменная `CUSTOM_DOMAIN`, `BASE_PATH` будет пустым (`""`), чтобы сайт корректно работал на кастомном домене.
- Если репозиторий называется `username.github.io`, `BASE_PATH` будет пустым (`""`) и сайт будет доступен по корню домена.
- Для остальных репозиториев `BASE_PATH` равен `/<repo-name>`, чтобы сайт открывался по адресу `https://<username>.github.io/<repo-name>/`.

Эта переменная используется в `next.config.mjs` для `basePath` и `assetPrefix`.

## Кастомный домен

1. В **Settings → Pages** укажите ваш домен в поле **Custom domain**.
2. В **Settings → Variables and secrets → Actions** добавьте переменную **CUSTOM_DOMAIN** со значением вашего домена (например, `cantstopwantstop.xyz`).

Workflow добавит файл `CNAME` в сборку, а `BASE_PATH` будет пустым, чтобы статические ассеты загружались корректно.

## Локальная проверка с базовым путём

Если хотите проверить локально с тем же путём, что и на GitHub Pages, выполните:

```bash
BASE_PATH=/my-repo pnpm build
```

После сборки можно открыть `out/index.html` любым статическим сервером.
