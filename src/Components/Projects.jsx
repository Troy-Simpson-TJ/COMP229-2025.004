import ListComponent from "./ListComponent";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg";
const projects =[
    {
        imagePath: project1,
        title:"Protect Yuh Yard",
        text:"This is a 2D game that requires you to defend your bas from incoming enemies and was developed using Unity and Visual Studio."
    },
    {
        imagePath: project2,
        title:"Black Jack",
        text:"A Web Card game that was developed using HTML/CSS & JavaScript."
    },
    {
        imagePath: project3,
        title:"General Contractor's Website",
        text:" A website I created for a General Contractor with visually appealing colors and features using my abilities."
    },  
];
function Projects(){
    return(
        <div className="page projects">
            <h2>My Projects</h2>
            <ListComponent items={projects}/>
        </div>
    );
}

export default Projects;