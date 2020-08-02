import React, { useState, useRef, useEffect } from "react";
export default function Road() {
  const [stats, setStats] = useState({ attack: 1, agility: 0, expertiese: 1 });
  const { attack, agility, expertiese } = stats;
  const [experience, setExperience] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const time = setTimeout(() => {
      setExperience(experience + agility + (agility * expertiese) / 10);
    }, 1000);
    return () => clearTimeout(time);
  }, [experience]);

  const equip = () => {};

  const click = () => {
    setExperience(experience + attack);

    setItems([...items, { name: "item 1" }]);
  };

  return (
    <div className="w-full h-full">
      <div className="border border-black  h-64  w-full  inline-flex">
        <div className="border border-black flex flex-row h-64 w-1/2 ">
          <img className="border border-black w-1/2" src="hero.png"></img>
          <img
            className="border border-black w-1/2"
            onClick={click}
            src="hero.png"
          ></img>
        </div>
        <div className="border border-black  h-64  w-1/2">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-500 mt-2 ml-2">
            Area 1
          </div>
        </div>
        <div className="border border-black  h-64  w-1/2 flex flex-row">
          <div>
            <p>
              Attack: {attack}
              <br />
              Agility: {agility}
              <br />
              Expertiese: {expertiese}
            </p>
          </div>
          <div className="flex flex-col ml-2">
            <button
              onClick={() => {
                if (experience >= attack ** 3) {
                  setStats({ ...stats, attack: attack + 1 });
                  setExperience(experience - attack ** 3);
                }
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                if (experience >= agility ** 2) {
                  setStats({ ...stats, agility: agility + 1 });
                  setExperience(experience - agility ** 2);
                }
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                if (experience >= expertiese ** 2) {
                  setStats({ ...stats, expertiese: expertiese + 1 });
                  setExperience(experience - expertiese ** 2);
                }
              }}
            >
              Add
            </button>
          </div>
          <div className="flex flex-col ml-4">
            <label>Required Experience: {attack ** 3}</label>
            <label>Required Experience: {agility ** 2}</label>
            <label>Required Experience: {expertiese ** 2}</label>
          </div>
        </div>
      </div>
      <div className="inline-flex w-full">
        <div className="border border-black  h-120  ml-2 w-1/2">
          {items.map((items) => (
            <img
              className="border border-black w-10"
              key={Math.random() * 999}
              onClick={equip}
              src="sword.png"
            ></img>
          ))}
        </div>
        <div className="border border-black  h-120  ml-2 w-1/2">
          <label className="ml-2">Experience: {Math.floor(experience)}</label>
        </div>
        ;
      </div>
    </div>
  );
}
