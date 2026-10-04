# Introduction Team — Single-Page Website

Open `index.html` in a browser. No build step or server needed.

## Project structure

```
index.html              Page structure (rarely edited)
css/style.css           All styles / theme colors (UofL red: #C71E3A)
js/
  main.js               Rendering & interaction logic (rarely edited)
  data/
    recommendations.js  Recommendations list
    projects.js         Team's Work projects
    team-members.js     Team member profiles
assets/images/
  projects/             Project card images
  members/              Member photos
```

## How to update content

**Add/edit a recommendation** — open `js/data/recommendations.js`, copy an
object in the array, change `id`, `title`, and `content` (HTML).

**Add/edit a project** — open `js/data/projects.js`, copy an object, change
`id`, `title`, `image`, `shortDesc`, `fullContent` (HTML).
Put the image in `assets/images/projects/`.

**Add/edit a team member** — open `js/data/team-members.js`, copy an object,
change `id`, `name`, `role`, `image`, `bio` (HTML).
Put the photo in `assets/images/members/`.

**Change colors / layout** — edit the CSS variables at the top of
`css/style.css`.

Note: `id` values must be unique, no spaces. The modal image is inserted
automatically — do not include `<img>` tags in `fullContent` / `bio`.
