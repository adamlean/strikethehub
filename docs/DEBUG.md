# Project Fixes & Deployment Notes

**14.08.2025**

This document contains a chronological list of issues encountered during development and deployment of this project, along with their solutions.  
Purpose: serve as a reference when maintaining or redeploying the project in the future.

---

## 1. React Router on Netlify (Routing Issue)

**Date:** 2025-08-12  
**Issue:**  
Routes worked locally but not on Netlify. Refreshing a non-root URL (e.g. `/about`) caused a `404` error.

**Cause:**  
Netlify serves static files and does not automatically redirect all requests to `index.html`.

**Solution:**  
Add a `_redirects` file to the `public/` folder with the following line:

```

/\*    /index.html   200

```

---

## 2. React Router Component Conversion

**Date:** 2025-08-12  
**Issue:**  
Some components used plain `<a>` tags with `href="#"` instead of `react-router-dom`'s `<Link>`.

**Solution:**  
Replaced:

```jsx
<a href="/about">About</a>
```

with:

```jsx
import { Link } from "react-router-dom";
<Link to="/about">About</Link>;
```

---

## 3. Netlify Build Fail — Dependency Installation Error

**Date:** 2025-08-13
**Issue:**
Build failed at `Install dependencies` stage with:

```
Failed during stage 'Install dependencies': dependency_installation script returned non-zero exit code: 1
```

**Cause:**
`package.json` had outdated dependencies or incompatible versions.

**Solution:**

- Removed `node_modules` and `package-lock.json` locally.
- Reinstalled with:

```bash
npm install
```

- Pushed updated `package-lock.json` to repository.

---

## 4. TypeScript & i18next Version Conflict

**Date:** 2025-08-13
**Issue:**
Netlify build failed with:

```
npm error code ERESOLVE
Conflicting peer dependency: typescript@5.9.2
Found: typescript@4.9.5
peerOptional typescript@"^5" from i18next@25.3.4
```

**Cause:**
`i18next@25.3.4` requires TypeScript ^5, but the project had TypeScript 4.9.5.

**Solution:**
Updated TypeScript:

```bash
npm install typescript@^5
```

Cleaned Netlify cache and redeployed.

---

## 5. Missing Dependencies (react-icons, web-vitals)

**Date:** 2025-08-13
**Issue:**
Local build failed with:

```
Module not found: Can't resolve 'react-icons/fa'
Module not found: Can't resolve 'web-vitals'
```

**Cause:**
These packages were not listed in `package.json`.

**Solution:**
Installed missing dependencies:

```bash
npm install react-icons web-vitals
```

---

## 6. Final Status

After applying all fixes above:

- Local build: ✅
- Netlify deployment: ✅
- Routing on production: ✅

---

## Maintenance Tips

- Always commit `package-lock.json` along with `package.json`.
- If you return to this project after a long break, run:

```bash
npm install
npm audit fix
```

- Keep a `_redirects` file for SPA routing on Netlify.
- Document each major fix here before forgetting the context.

```

```
