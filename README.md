<p align="center"><img align="center" width="200px" src="https://i.imgur.com/ZZNnLBK.png" /></p>
<h1 align="center" style="margin-top:4px;">Pylon Blog</h1>

> This is the official repository for the [Pylon blog](https://blog.pylon.gg). This project is built with Nuxt.js, Nuxt.js Content, Markdown, SASS, Prettier, and ESLint.
>
> Feedback, enhancements, and post suggestions are all welcome 😄, please see our contribution guide for information on how to add to this project!

## Features

-   📓 Ability for server side rendering or static generation.
-   💡 Highly opinionated design structure for SASS.
-   📱 Mobile friendly, with examples of how to use media breakpoints to facilitate a good mobile UX.
-   🧾 Strict linting with best practices for Vue and Nuxt.
-   🔥 Blazing fast, SEO friendly, and highly customizable.

## Getting started

```bash
# 1. Clone the repository
$ git clone https://github.com/PylonGG/nuxt.js.blog.git my-new-blog

# 2. Enter the folder for your new blog
$ cd my-new-blog

# 3. Install dependencies, Node & NPM are required.
$ npm install or npm i

# 4. Run development server with hot reloading on http://localhost:3000
$ npm run dev

# 5. If using SSR, build for production and then run the server
$ npm run build
$ npm run start

# 6. If using static generation, generate the static assets
$ npm run generate
```

> Need help with something related to Nuxt? Check out the official [Nuxt.js docs](https://nuxtjs.org).

> Need help with something related to Vue? Check out the official [Vue.js docs](https://vuejs.org/v2/guide/).

## Adding content

This project uses [Nuxt.js Content](https://content.nuxtjs.org/), a new module from the Nuxt team that allows for the easy asynchronous fetching and displaying of Markdown, JSON, YAML, and CSV files which acts as a headless CMS.

All content (blog posts in our case) is located in the `content` directory.

#### Front Matter

We utilize YAML front matter as specified by the [Content docs](https://content.nuxtjs.org/writing).

Our front matter looks like this:

```
---
title: Title of the blog post
description: Description of the blog post
author: John Deere
category: Github
image: /image.jpg
date: 04/28/20
---
```

Things to note:

-   `category` must begin with an uppercase letter, unless some minor code changes are made.
-   `image` is a relative path that must include `/` unless minor code changes are made to include the option to allow full path URLs.
-   You can add any additional objects here for use in your posts.

The above YAML front matter will inject the following variables:

```
{
  body: Object
  title: "Title of the blog post"
  description: "Description of the blog post"
  image: "/image.jpg"
  author: "John Deere"
  category: "Github"
  date: "04/28/20"
  dir: "/"
  extension: ".md"
  path: "/name-of-file"
  slug: "name-of-file"
  toc: Array
  createdAt: DateTime
  updatedAt: DateTime
}
```

Things to note:

-   All variables are accessible in components by fetching the data, storing it in a variable, and accessing `variable.title`. For example that would return `"Title of the blog post"` in this case.
-   Some of the variables are automatically generated by Nuxt Content.
-   The name of the markdown file, in our case a blog post, is what generates the `slug` and `path`. For example a blog post named `hello-world.md` would inject `slug: "name-of-file"` and `path: "/name-of-file"`.

> For more detailed documentation regarding Nuxt Content, please view their [official docs](https://content.nuxtjs.org/).

## Contribution guide

This project is a fantastic way to get your foot in the door with contributing to open source software. Fix a grammatical error, simplify code, or plant a suggestion!

-   Please tag all contributions accordingly.
-   Please follow the `.editorconfig` and `.prettierrc` code style.
-   Have fun!

## What is Pylon?

Pylon is a startup that is creating a gaming and technology based discussion platform. Check out our [official blog](https://blog.pylon.gg) for more information on the project.

> Want to get in contact with us?
> Email: info@pylon.gg
