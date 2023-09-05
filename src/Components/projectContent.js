import friends from './images/friends.jpg'
import ventilation from './images/ventilation.jpg'
import marvel from './images/marvel.jpg'
import todo from './images/todo.jpg'
import portfolio from './images/portfolio.jpg'

const slide1 = {

      
    id:0,
    name: "FRIENDS",
    content: `Development`,
    link:"https://martinstojmenovski.github.io/Friends/",
    picture: friends,
    pictureDescriptions:"People with phones in hands."

}
    
  
  const slide2 = 
    {
        id:1,
        name: "VENTILATION",
        content: `Development`,
        link:"https://the-javawockeez.github.io/Ventilation/",
        picture: ventilation,
        pictureDescriptions:"Coffee and mobile phone."
       
    }
  
    const slide3 = 
    {
        id:2,
        name: "MARVEL",
        content: `Development`,
        link:"https://martinstojmenovski.github.io/React-Marvel-api/",
        picture: marvel,
        pictureDescriptions:"Marvel book."
    }
    const slide4 = 
    {   
        id:3,
        name: "PORTFOLIO",
        content: `UX/UI Design, Development`,
        link:"https://martinstojmenovski.github.io/portfolio-site/",
        picture: portfolio,
        pictureDescriptions:"Pile of technologies."
    }
  
    const slide5 = 
    {   
        id:4,
        name: "TODO",
        content: `Development`,
        link:"https://martinstojmenovski.github.io/todo-app-chakra/",
        picture: todo,
        pictureDescriptions:"Open notebook."
    }

  
  const slides = [slide1, slide2, slide3, slide4, slide5]
  export default slides
  