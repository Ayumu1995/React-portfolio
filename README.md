# 🌐 3D Interactive Portfolio — Built with React + Vite + Three.js

This project is a fully responsive personal portfolio built using **React**, **Vite**, and **@react-three/fiber** with GLSL shaders and a custom-designed 3D sphere. The background dynamically interacts with scroll position, with smooth transitions, shader-based animation, and environment-aware movement.

It showcases advanced usage of **Three.js**, **GLSL**, and **React hooks** with animated sections, a realistic reflective floor, and a visually rich loading screen.

👉 **Live Demo**: [https://my-first-react-portfolio-two.vercel.app/](https://my-first-react-portfolio-two.vercel.app/)

---

## ✨ Features

-  **Dynamic 3D background** with custom vertex + fragment shaders
-  **Scroll-based transitions** using `IntersectionObserver` and `useState`
-  **Reflective ground plane** with noise-textured `MeshReflectorMaterial`
-  **Responsive sphere motion** across a half-sphere arc
-  **GLSL lighting and shading** with animated color variations
-  **Framer Motion** animations for section transitions
-  **Responsive UI** with TailwindCSS
-  **Loading overlay** with circular progress synced to asset loading

---

## 📦 Tech Stack

-  [React](https://react.dev/)
-  [Vite](https://vitejs.dev/)
-  [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
-  [@react-three/drei](https://github.com/pmndrs/drei)
-  [Three.js](https://threejs.org/)
-  [GLSL Shaders](https://thebookofshaders.com/)
-  [Framer Motion](https://www.framer.com/motion/)
-  [TailwindCSS](https://tailwindcss.com/)
-  [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

## 🚀 Getting Started

```bash
git clone https://github.com/Ayumu1995/React-portfolio-with-Three.js
cd React-portfolio-with-Three.js
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## 🛠 Development Notes

-  **Shaders**
   -  Located in `src/components/shaders/`
   -  `vertexShader.js`: Defines surface wave deformation.
   -  `fragmentShader.js`: Handles dynamic coloring and lighting effects.
-  **Animated Sphere**

   -  Implemented in `ShaderSphere.jsx`.
   -  Uses `useFrame` from `@react-three/fiber` to animate position, scale, and shader uniforms.
   -  Moves in response to scroll position, simulating motion along a hemisphere path.

-  **Scroll-Based Section Detection**

   -  Managed in `App.jsx` via `IntersectionObserver`.
   -  Sets a `phase` state (`idle`, `tech`, `exp`, `contact`) based on which section is in view.

-  **Reflective Surface**

   -  Defined in `ReflectorPlane.jsx`.
   -  Uses `MeshReflectorMaterial` from `@react-three/drei`.
   -  Enhances realism with `roughnessMap`, `normalMap`, and `displacementMap`.

-  **Loading UI**

   -  Circular loading animation in `LoadingCircle.jsx`.
   -  Based on `useProgress` from `@react-three/drei`.
   -  Appears until all textures and shaders are loaded.

-  **Styling & Responsiveness**

   -  TailwindCSS is used for layout, spacing, colors, and media queries.
   -  Hero section adapts image opacity based on screen size with utility classes and logic.

-  **3D Assets & Textures**
   -  Images and texture maps (e.g., normal, displacement) are stored in `src/assets/`.
   -  Some files may be loaded via the `public/` folder for direct access.

## 📁 Project Structure

```txt
.
├── README.md
├── index.html
├── package.json
├── public
│   ├── resume_v2.pdf
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── projects
│   │   │   ├── project-1.webp
│   │   │   ├── project-2.webp
│   │   │   ├── project-3.webp
│   │   │   └── project-4.webp
│   │   ├── Ayumu_m_logo.png
│   │   ├── photo.jpeg
│   │   ├── rock_disp3.png
│   │   └── rock_rough3.png
│   ├── components
│   │   ├── Background3D.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingCircle.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ReflectorPlane.jsx
│   │   ├── Technologies.jsx
│   │   └── shaders
│   │       ├── fragmentShader.js
│   │       └── vertexShader.js
│   ├── constants
│   │   └── index.js
│   ├── index.css
│   ├── main.jsx
└── tailwind.config.js
```

### Notes:

-  Removed `eslint.config.js`, `postcss.config.js`, `vite.config.js`, and `package-lock.json` as they are not critical for understanding the project structure.
-  Simplified the `assets` folder to focus on relevant files.
-  Omitted `models/MyModel.jsx` as it is not explicitly mentioned in the main README content.
-  Kept only essential files and directories to maintain clarity.
-  Focused on files directly related to the app's functionality and presentation.

## 🧩 Future Improvements

-  **Dark Mode Support**: Add a toggle for light/dark themes using TailwindCSS's dark mode utilities.
-  **Accessibility Enhancements**: Improve ARIA roles and keyboard navigation for better accessibility.
-  **Unit Testing**: Introduce testing with Jest and React Testing Library for critical components.
-  **Performance Optimization**: Optimize shader performance and reduce asset sizes for faster load times.
-  **Deployment**: Automate deployment to platforms like Vercel or Netlify with CI/CD pipelines.
-  **Blog Section**: Add a blog feature to showcase articles or tutorials.
-  **Multilingual Support**: Implement i18n for supporting multiple languages.

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute it as per the license terms.

## 🙌 Acknowledgements

-  **Three.js Community**: For their extensive documentation and examples.
-  **The Book of Shaders**: For inspiration and learning GLSL.
-  **React Three Fiber Team**: For simplifying 3D rendering in React.
-  **Framer Motion**: For providing smooth animations and transitions.
-  **TailwindCSS**: For making responsive design effortless.

## 📫 Contact

If you have any questions or feedback, feel free to reach out:

-  **Email**: [ayumu.miyamoto9501@gmail.com](mailto:ayumu.miyamoto9501@gmail.com)
-  **GitHub**: [Ayumu1995](https://github.com/Ayumu1995)
-  **LinkedIn**: [Ayumu's Profile](http://linkedin.com/in/ayumu-miyamoto-937850336)

---
