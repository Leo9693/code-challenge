<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">qantas-code-challenge</h3>

<div align="center">

</div>

---

## 📝 Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Tests](#tests)
-   [Usage](#usage)
-   [Built Using](#built_using)
-   [Authors](#authors)

## 🧐 About <a name = "about"></a>

This project is developed for quatas code challenge.

### Description:

You have been tasked with the job of giving Qantas customers the ability to view which airports Qantas currently operates from. As part of this task you will build a mobile responsive app which will load the list of airports from an API and present them to users.

### Deliverable:

1. A responsive web application.
2. Any supporting documentation or instructions needed to run the app.

### Must have(s)

-   A project that runs on Google Chrome.
-   Appropriate unit testing coverage.
-   Allows you to navigate and view airport detail (details page)
-   README detailing how to compile/run the app (if needed)

### Nice to have

-   Handle API failures
-   Handle no network connectivity (caching)
-   Attractive UI (animations etc)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

```
node -v
  v12.13.0
npm -v
  6.12.0
```

make sure you have already installed node and npm.

### Installing

```
npm install
```

install all necessary dependencies to launch the app

## 🔧 Running the tests <a name = "tests"></a>

```
npm run test
```

execute tests for the app, we have tests for asynchronous API requests and snapshots for react components

## 🎈 Usage <a name="usage"></a>

```
npm run start
```

launch the app and you can access it at http://localhost:3000/

All of features have been implemented according to requirements.(must haves and optional)

### main features

-   Proper mobile responsive design has been done for mobile, tablet and laptop. feel free to check that by inspecting the app with F12 and changing screen size.

-   404 request and requests that fail to fetch data have been handled. There will be an alert if the api call fail. Check this by changing the endPoint under config folder. please check there is no localstorage, otherwise there is no alert. cached data will be used.

-   data will be cached into local storage. please make sure you can load the data first when network works. then you can check this by disconnecting your network, and the app still works. No need to set expired time for data under this code challenge scenario, feel free to clear your local storage manually if you want.

## ⛏️ Built Using <a name = "built_using"></a>

-   [Reactjs](https://reactjs.org/) - Front end framework
-   [Redux](https://redux.js.org/) - State Management
-   [React-Bootstrap](https://react-bootstrap.github.io/) - UI Framework
-   [styled-components](https://www.styled-components.com/) - UI library

## ✍️ Authors <a name = "authors"></a>

-   [wujian gao](https://github.com/gaowujian) - Idea & Initial work
