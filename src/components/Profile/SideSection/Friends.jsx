import { useSelector } from "react-redux";
import SingleFriend from "./SingleFriend";
import { useEffect, useState } from "react";

const Friends = () => {
  const profiles = useSelector((state) => state.profiles.all);
  const numFriends = 5;
  const [randomArr, setRandomArr] = useState([]);
  const currentProfile = useSelector((state) => state.profiles.currentProfile);

  useEffect(() => {
    setRandomArr([]);
    for (let i = 0; i < numFriends; i++) {
      let numeroCasuale = Math.floor(Math.random() * 677); // Genera un numero casuale tra 0 e 676
      if (randomArr.indexOf(numeroCasuale) === -1) {
        setRandomArr((prev) => {
          prev.push(numeroCasuale);
          return prev;
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProfile._id]);

  return (
    <div className="friends">
      <div className="d-flex flex-column">
        <h4 style={{ fontSize: "16px" }}>Persone che potresti conoscere</h4>
        <p style={{ fontSize: "14px", color: "var(--p-grey)" }}>Dalla tua azienda</p>
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
