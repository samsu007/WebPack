import HelloWorldButton  from './src/components/hello-world-button/hello_world-button';
import Heading  from './src/components/heading/heading';

// import addImages from './add-images.js';

const heading = new Heading();
heading.render();




const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();


const ten = 10;


if(process.env.NODE_ENV === 'production') {
    console.log("Production Mode");
} else if (process.env.NODE_ENV === 'development') {
    console.log('Developement Mode')
}


helloWorldButton.MethodDoesnotExists();