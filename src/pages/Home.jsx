import React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button";

const Home = () => {
  const [color, setColor] = useState("red");
  const [loading, setLoading] = useState(false);
  function toggleChanges() {
    alert(`Color is now ${color}`);
  }
  function delayUI() {
    try {
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }

  useEffect(() => {
    delayUI();
    toggleChanges();
  }, [color]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{color}</p>
          <Button text="Change color" action={() => setColor("Yellow")} />
        </div>
      )}
    </>
  );
};

export default Home;
