Команды для запуска:

1. Проверка установки git
```
git -v
```

2. Проверка установки NodeJS
```
node -v
```

3. Клонирование git репозитория
```
git clone https://github.com/arduanov/hugo-site.git
```

4. Переход в директорию проекта
```
cd hugo-site
```

5. Установка npm зависимостей
```
npm i
```

6. запуск hugo сервера
```
npm run server
```

7. открыть ссылку в браузере
http://localhost:1313/

8. добавить новую страницу
- создать файл `content/docs/new-article.md`
```
---
title: New Article
weight: 1
---

Test content.
```

9. Добавить пункт меню
- добавить в файл `config/_default/menus.yaml`
```
  - name: Example
    url: https://github.com/arduanov/hugo-site
    weight: 6
```

10. Шаблон - добавить листинг статей
- добавить в файл `layouts/docs/list.html`
- после {{.Content}}

```
<ul>
  {{range .Pages }}
    <li>
      <a href={{.RelPermalink}}>{{.Title}}</a>
    </li>
  {{end}}
</ul>
```
