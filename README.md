# Distillerie Combier


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm install`

To get all the dependencies needed tu run this project.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



## MAP (Video play on Scrolling with Text Sticky on it with animation appearance)

### SetPageHeight

The First things you need to know is the height of the componant.
To do this you will need two parameters which are the video duration and the value of the playBackConst.

The playBackConst is a value that will determine how fast the video will go depend on the scroll.
Bigger the number and more scroll you will need to go to the end of the video.
example of value for the playBackConst : 500 or 1000. 1000 is a good ratio speed/scrolling.

the SetPageHeight is determined like this :

    setHeight.style.height = Math.floor(vid.duration) * playbackConst

You can console.log it to know you're value. For example 5000px.


### Select Video Html

Then you need to select the HTML Element video use QuerySelector or GetElementById.

The most important is you need to do it after the component was mounted at the first render. Otherwise IT WILL NOT BE FIND and you will have a an error issue !!
To do so you will to use the Hook UseEffect with an empty array at the end. like this :

    React.useEffect(() => {
        }, []);


### ScrollToPlay

It's thanks to this function that the video is playing based on the scroll.

The function scrollToPlay is called everytime the screen view is refreshed. It depends on your screen monitor, it could be 60hz so 60times per seconds or 120hz...

We get the distance in pxl between the top of the document and the component with map.offsetTop
We get the distance where we are in the document from the top with window.pageYOffset
We get the speed of play of the video with playbackConst

    let frameNumber  = (window.pageYOffset - map.offsetTop)/playbackConst;


### Sticky Text

The text you want to stcik must have the postion: sticky on the css page.
ALL YOUR ELEMENTS COMBINE MUST BE EQUAL TO setHeight.style.height
if you want them to be stop a the end of the video.
For exemple: if SetHeight = 5000px; 5 texts sticky they could be 1000px each


For the animation: 
We are using the native function IntersectionObserver(), and we add a class when the element is visible on user viewport.