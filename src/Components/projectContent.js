import friends from './images/friends.jpg'
import ventilation from './images/ventilation.jpg'
import marvel from './images/marvel.jpg'
import todo from './images/todo.jpg'
import portfolio from './images/portfolio.jpg'

const slide1 = {

      
    id:0,
    name: "FRIENDS",
    content: `User authentication application built in React and Django 
    allows you to create an account and login with user verification.`,
    link:"https://martinstojmenovski.github.io/Friends/",
    picture: friends,
    pictureDescriptions:"People with phones in hands."

}
    
  
  const slide2 = 
    {
        id:1,
        name: "VENTILATION",
        content: `The intent of this website is to be a social
        media page that allows users to post their grievances. 
        It is team project built in React and Express.js.`,
        link:"https://the-javawockeez.github.io/Ventilation/",
        picture: ventilation,
        pictureDescriptions:"Coffee and mobile phone."
       
    }
  
    const slide3 = 
    {
        id:2,
        name: "MARVEL",
        content: `Interactive application allows you to read the description
        of the given character by selecting it. Built into React using third-party APIs.`,
        link:"https://martinstojmenovski.github.io/React-Marvel-api/",
        picture: marvel,
        pictureDescriptions:"Marvel book."
    }
    const slide4 = 
    {   
        id:3,
        name: "PORTFOLIO",
        content: `The portfolio website is my first project created
        to represent myself online. Technologies used for this website: HTML, CSS and jQuery.`,
        link:"https://martinstojmenovski.github.io/portfolio-site/",
        picture: portfolio,
        pictureDescriptions:"Pile of technologies."
    }
  
    const slide5 = 
    {   
        id:4,
        name: "TODO",
        content: `Todo app created in React with Chakra library allows you to add your daily to do tasks,
        the list items are saved on your local storage in the browser.`,
        link:"https://martinstojmenovski.github.io/todo-app-chakra/",
        picture: todo,
        pictureDescriptions:"Open notebook."
    }

  
  const slides = [slide1, slide2, slide3, slide4, slide5]
  export default slides
  