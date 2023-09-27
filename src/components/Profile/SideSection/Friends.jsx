import { useSelector } from "react-redux";
import SingleFriend from "./SingleFriend";

const Friends = () => {
  const profiles = useSelector((state) => state.profiles.all);
  const numFriends = 5;
  const randomArr = [];
  while (randomArr.length < numFriends) {
    let numeroCasuale = Math.floor(Math.random() * 677); // Genera un numero casuale tra 0 e 676
    if (randomArr.indexOf(numeroCasuale) === -1) {
      randomArr.push(numeroCasuale);
    }
  }

  return (
    <div className="friends">
      <div className="d-flex flex-column">
        <h4 style={{ fontSize: "16px" }}>Persone che potresti conoscere</h4>
        <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>
          Dalla tua azienda
        </p>
      </div>
      <div className="d-flex flex-column">
        {randomArr.map((elem) => (
          <SingleFriend key={`profile-${elem}`} profile={profiles[elem]} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
