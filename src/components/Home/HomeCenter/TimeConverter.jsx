import React, { useEffect, useState } from "react";

const TimeConverter = ({ createdAt }) => {
  const [timeDifference, setTimeDifference] = useState("");

  useEffect(() => {
    function calcDifference() {
      const dateOfCreation = new Date(createdAt);
      const currentDate = new Date();

      const difference = currentDate - dateOfCreation;

      const totalSeconds = Math.floor(difference / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        setTimeDifference(`${days} giorni fa`);
      } else if (hours > 0) {
        setTimeDifference(`${hours} ore fa`);
      } else if (minutes > 0) {
        setTimeDifference(`${minutes} minuti fa`);
      } else {
        setTimeDifference("Pochi secondi fa");
      }
    }

    calcDifference();

    const interval = setInterval(calcDifference, 60000);

    return () => clearInterval(interval);
  }, [createdAt]);

  return <div>{timeDifference}</div>;
};

export default TimeConverter;
