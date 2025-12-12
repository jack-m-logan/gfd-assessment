# GFD Assessment

A responsive company landing page showcasing GFD Homes' story, products, and team. Built with Vue 3, TypeScript, and Tailwind CSS.

## Project Setup

VS Code Extensions:

- Vue (Official) - Essential for Vue 3 Composition API support
- ESLint
- Important: Disable the built-in TypeScript and JavaScript extension in workspace settings (search ```@builtin typescript and javascript``` in Extensions) to avoid conflicts with Vue tooling.

Images can be added to the src/assets/images/raw folder (ignored by git) and then optimised as lightweight .webp format by running ```npm run optimize-images``` which will add them to the /optimised folder. 

Install dependencies:

```sh
npm install
```

Then run locally with:

```sh
npm run dev
```

## Future Improvements

- [ ] Implement ImageLabel component for product labels
- [ ] Refactor mobile/desktop components to reduce duplication
- [ ] Enhance grid-based layouts for better maintainability
- [ ] Add unit tests