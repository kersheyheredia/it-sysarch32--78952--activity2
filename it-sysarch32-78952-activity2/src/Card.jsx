
import profilePic from "./assets/img1.jpg" 


function Card({profilePic, name, email}){
    return(
        <div className="card">
            <img src={profilePic}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default Card