import Card from "./Card.jsx";
import profilePic1 from "./assets/img1.jpg"
import profilePic2 from "./assets/img2.jpg"
import profilePic3 from "./assets/img3.jpg"
import profilePic4 from "./assets/img4.jpg"
import profilePic5 from "./assets/img5.jpg"

function CardList() {
  const cardData = [
    {profilePic: profilePic1,  name: 'John Doe', email: 'john@doe.com' },
    {profilePic: profilePic2,  name: 'John Doe', email: 'john@doe.com' },
    {profilePic: profilePic3,  name: 'kate Doe', email: 'john@doe.com' },
    {profilePic: profilePic4,  name: 'hehe Doe', email: 'john@doe.com' },
    {profilePic: profilePic5,  name: 'John Doe', email: 'john@doe.com' },
  ];

  return (
    <div className="card-list">
      {cardData.map((card, index) => (
        <Card
          key={index}
          profilePic={card.profilePic}  // Use 'pic' instead of 'profilePic'
          name={card.name}
          email={card.email}
        />
      ))}
    </div>
  );
}

export default CardList
