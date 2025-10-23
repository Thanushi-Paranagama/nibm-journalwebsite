# ICACIT / Journal Website

Small React single-page site for the ICACIT / International Journal. Built with Create React App and Tailwind CSS. The site is dark-mode-first and uses simple local-state navigation (no react-router).

Repository layout

- public/
  - index.html
  - pdfs/Finalized_journal_17102026.pdf  <-- embedded on the Issues page
- src/
  - App.js              <-- main app shell, nav, and page routing
  - index.js
  - index.css
  - pages/
    - Icacit2025.js
    - IcacitAbout.js
    - IcacitCommittee.js
    - IcacitDeadlines.js

Key features

- Dark-mode-first design (dark mode enforced in `App.js` by default)
- Navigation with dropdowns for ICACIT and About Journal (desktop and mobile)
- Issues page now embeds a single PDF from `public/pdfs/Finalized_journal_17102026.pdf`
- Organizing Committee page populated with the provided content

Getting started (Windows PowerShell)

1. Install dependencies (first time):

```powershell
npm ci
```

2. Start dev server:

```powershell
npm start
```

3. Create production build:

```powershell
npm run build
```

How the Issues PDF is wired

- The Issues page is implemented inside `src/App.js` as `IssuesPage`.
- It embeds the PDF using an iframe src of `/pdfs/Finalized_journal_17102026.pdf` and also provides Open/Download links.
- To replace the PDF: put the new PDF file in `public/pdfs/` and either overwrite the existing filename or update the `pdfPath` field in the `journalIssues` array inside `src/App.js`.

Notes & suggestions

- Accessibility: dropdowns are toggleable but lack full keyboard/click-outside behavior. I can add ARIA attributes and keyboard handlers.
- If you plan to add multiple issues later, we should extract the Issues UI into its own component and re-introduce a list view and filters.
- The app intentionally uses buttons for navigation to avoid empty-anchor accessibility warnings.

Deployment

- Deploy the `build/` output created by `npm run build` to any static host (Netlify, Vercel, GitHub Pages, S3). If using GitHub Pages, set `homepage` in `package.json` and follow typical gh-pages steps.

Want me to...

- Start the dev server now so you can preview the changes locally? (I've run builds successfully in this session.)
- Add keyboard/ARIA accessibility for the dropdowns and the PDF viewer?
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
