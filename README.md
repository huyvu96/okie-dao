# Getting Started with Okie Dao Project

## Design

https://www.figma.com/file/1Zc3eWrJ9WURWHASQ0lVdR/OkieDao

## API

1. Define COMMAND in `src\commands\index.jsx`

2. Define Api in `src\apis`

```
const getUsers = {
  exec: async (params) => {
    return await api("", "GET", params);
  },
  name: COMMANDS.getUsers,
  mock: [],
};
```

2. Run `fetchCommand`

```
  fetchCommand({ api, params }) // This action will return a `Promise`
```

3. Get result

```
 const { data, loading } = useSelector(
    (state) => state.fetch[<api has been defined>.name],
  );
```

## Bussiness

## Available Scripts

In the project directory, you can run:

### `npm install`

Install node module for project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Use Modal

See [use-modal](https://github.com/huynhhuyhiep/doopage-use-modal#readme) doc

## Style With Tailwind

- Go https://tailwindcss.com/docs to Search class name and read more info
- Config theme, read [here](https://tailwindcss.com/docs/theme)

## UI Component with Antd

- Go https://ant.design/components/overview/ to see all available components
- To custom theme, read [here](https://ant.design/docs/react/customize-theme#header)
- Go https://antdtheme.com/default to find and generate theme variable

## Deploy 
At first time
- Install CLI `npm install -g firebase-tools`
- Login `firebase login`

- Run `npm run deploy`
- URL: https://okie-dao-web.web.app

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
