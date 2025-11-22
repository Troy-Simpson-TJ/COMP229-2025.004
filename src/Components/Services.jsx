import ListComponent from "../Components/ListComponent";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";


const services = [
    {
        imagePath:service1,
        title:"Debugging & Redesigning",
        text:"I debug by identifying and fixing errors, and I redesign by improving existing designs for better function and appearance.",
    },
    {
        imagePath:service2,
        title:"UI/UX Design & Web Components",
        text:"I work on UI/UX design by creating user-friendly, visually appealing interfaces, and I build web components that make websites more functional, reusable, and efficient.",
    },
    {
        imagePath:service3,
        title:"Web Design & Game Design",
        text:"I do web design by building attractive, responsive websites, and game design by creating engaging gameplay experiences with thoughtful mechanics and visuals.",
    },
];

function Services(){
    return(
       <div className="page services">
        <h2>My Services</h2>
        <ListComponent items={services}/>
       </div>
    );
}

export default Services;
