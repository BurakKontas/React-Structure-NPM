# React Structure Generator

This npm package is used to facilitate the creation of configurations for React applications. It utilizes ready-made templates to create pages, components, Redux stores, and other structures, organizing them according to the specified names.

## Installation

You can install this package using npm or yarn:

```sh
npm install -g react-structure-generator
```
or
```sh
yarn global add react-structure-generator
```

## Usage

Once integrated into your project, you can create different structures using the following commands:

### Create New Project

```bash
npx react-structure-generator create my-app 
```

### Creating a Page

```bash
npx react-structure-generator page test 
```

### Creating a Component

```bash
npx react-structure-generator component test 
```

### Creating a Redux Store

```bash
npx react-structure-generator redux test 
```
or
```bash
npx react-structure-generator store test 
```

## Shortcut
You can use shortcut to use react-structure-generator
```bash
npx rsg <command>
```

## File Structure
```plaintext
 📂 component (https://github.com/BurakKontas/React-Structure-Component)
 ┣ 📜 custombutton.module.scss
 ┣ 📜 custombutton.tsx
 ┣ 📜 custombutton.types.ts
 ┗ 📜 index.ts
 📂 hook (https://github.com/BurakKontas/React-Structure-Hook)
 ┣ 📜 index.ts
 ┣ 📜 useCounter.tsx
 ┗ 📜 useCounter.types.ts
 📂 page (https://github.com/BurakKontas/React-Structure-Page)
 ┣ 📜 Homepage.module.scss
 ┣ 📜 Homepage.tsx
 ┗ 📜 index.ts
 📂 redux (https://github.com/BurakKontas/React-Structure-Redux)
 ┣ 📜 counter.async_thunks.ts
 ┣ 📜 counter.extra_reducers.ts
 ┣ 📜 counter.reducers.ts
 ┣ 📜 counter.selectors.ts
 ┣ 📜 counter.slice.ts
 ┣ 📜 counter.types.ts
 ┗ 📜 index.ts
 📂 service (https://github.com/BurakKontas/React-Structure-Service)
 ┣ 📜 counterService.ts
 ┣ 📜 counterService.types.ts
 ┗ 📜 index.ts
```
## License

This project is licensed under the MIT License.
