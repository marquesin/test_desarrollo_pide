# README - Test Desarrollo Pide - Rocio Marquesin

TECNOLOGÍAS
Para desarrollar esta aplicación utilicé:
- React Js
- npm
- HTML 5
- CSS 3
- Archivo JSON provisto por la empresa

DESCRIPCIÓN DE LA APLICACIÓN
1. Al iniciar la aplicación lee el JSON provisto

2. Del mismo se obtienen la imagen del header, las categorías y los productos
	2.1. Para obtener las categorías primero filtro las que son hijas de la categoría padre (Comida=1). Esto lo hice únicamente porque tenía que desarrollar solo la parte de productos, si estuviese desarrollando la aplicación entera esto se tomaría automáticamente.
	
	2.2. Luego también incluí las categorías nietas y por último solo muestro las categorías que tienen al menos 1 producto con status=true.

3. Los productos se van filtrando a medida que se seleccionan las categorías. Esto se hace utilizando un contexto global a través de useContext.
	3.1. A su vez el precio que se muestra de los productos varía si el mismo está en oferta o no.

4. Cuenta con una versión responsive. Los breakpoints utilizados son:
	- 320px - mobile
	- 768px - tablet
	- 1024px - laptop

5. Para el diseño intenté emular el video provisto.

6. La estructura de carpetas sigue un principio de jerarquía que busca optimizar la escalabilidad de la aplicación.

# INSTALACIÓN


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
