
---

# React in Vue 2 Integration

### Steps to Integrate a React Component as a Web Component in Vue 2

1. **Create React Component and Web Component Wrapper**
   - Write a React component (e.g., `MyReactComponent.jsx`) with props and events.
   - Create a web component wrapper using `CustomElement` API to embed the React component.
   - Render React component into the wrapper’s shadow DOM.

2. **Build React Component as Web Component**
   - Set up `vite.config.js` with production build & build formats.
   - Run build command to generate a `my-web-component.js` file.

3. **Add Web Component to Vue 2 Project**
   - Copy the built `my-web-component.js` file to the Vue 2 project’s `public` folder.
   - Link it in `index.html`:
     ```html
     <script src="/public/my-web-component.js"></script>
     ```

4. **Use the Web Component in Vue 2**
   - In your Vue component template (e.g., `App.vue`):
     ```html
     <my-web-component :message="Hello!" @customEvent="handleEvent"></my-web-component>
     ```

5. **Pass Props and Listen to Events**
   - Pass props to `<my-web-component>` using attributes.

---
