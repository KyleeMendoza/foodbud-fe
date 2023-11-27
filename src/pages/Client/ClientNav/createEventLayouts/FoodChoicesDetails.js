import React, { useState, useEffect } from "react";
import SelectorInput from "../../../../components/SelectorInput";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

function FoodChoicesDetails() {
  const [porkChickenAdditional, setPorkChickenAdditional] = useState(0);
  const [fishAdditional, setFishAdditional] = useState(0);
  const [pastaAdditional, setPastaAdditional] = useState(0);
  const [dessertAdditional, setDessertAdditional] = useState(0);

  const [set, setSet] = React.useState("");
  const [porkChicken, setPorkChicken] = React.useState("");
  const [fish, setFish] = React.useState("");
  const [pasta, setPasta] = React.useState("");
  const [dessert, setDessert] = React.useState("");

  const setData = ["A", "B", "C", "D", "E", "F"];
  const porkChickenData = [
    "Pork Cutlets w/ Creamy Sauce",
    "Pork Caldereta",
    "Chicken w/ Mushroom Sauce",
    "Chicken Teriyaki",
    "Pork Teriyaki",
  ];
  const fishData = [
    "Fish Fillet Sweet & Sour",
    "Fish Fillet w/ Tartar Sauce",
    "Fish Fillet Sweet Corn Salsa",
    "Fish Fillet w/ Tausi",
    "Fish Fillet w/ Creamy Sauce",
  ];
  const pastaData = [
    "Carbonara",
    "Creamy Penne Pasta",
    "Spaghetti w/ Bolognese Sauce",
    "Macaroni Marvel",
  ];
  const dessertData = [
    "Buko Pandan Salad",
    "Coffee Jelly",
    "Buko Mango Salad",
    "Buko Pandan Salad",
  ];

  useEffect(() => {
    if (set === "A") {
      setPorkChicken(porkChickenData[0]);
      setFish(fishData[0]);
      setPasta(pastaData[0]);
      setDessert(dessertData[0]);
    } else if (set === "B") {
      setPorkChicken(porkChickenData[1]);
      setFish(fishData[1]);
      setPasta(pastaData[1]);
      setDessert(dessertData[1]);
    } else if (set === "C") {
      setPorkChicken(porkChickenData[2]);
      setFish(fishData[2]);
      setPasta(pastaData[2]);
      setDessert(dessertData[2]);
    } else if (set === "D") {
      setPorkChicken(porkChickenData[3]);
      setFish(fishData[3]);
      setPasta(pastaData[1]);
      setDessert(dessertData[3]);
    } else if (set === "E") {
      setPorkChicken(porkChickenData[4]);
      setFish(fishData[4]);
      setPasta(pastaData[3]);
      setDessert(dessertData[2]);
    } else if (set === "F") {
      setPorkChicken(porkChickenData[2]);
      setFish(fishData[0]);
      setPasta(pastaData[0]);
      setDessert(dessertData[3]);
    } else {
      setPorkChicken("");
      setFish("");
      setPasta("");
      setDessert("");
    }
  }, [set]);

  const handleAddPorkChicken = () => {
    setPorkChickenAdditional((prevCount) => prevCount + 1);
  };
  const handleAddFish = () => {
    setFishAdditional((prevCount) => prevCount + 1);
  };
  const handleAddPasta = () => {
    setPastaAdditional((prevCount) => prevCount + 1);
  };
  const handleAddDessert = () => {
    setDessertAdditional((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <p className="text-primary-400 font-bold text-2xl">Food Choices</p>
      </div>
      <div className="flex flex-col w-[50%] gap-4">
        <label className="flex items-center justify-between">
          <p className="font-semibold">Set:</p>
          <div className=" w-[50%] flex flex-start">
            <SelectorInput
              data={setData}
              state={set}
              setter={setSet}
              title={"Set"}
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Pork or Chicken:</p>
          <div className=" w-[50%] flex flex-start items-center gap-4">
            <SelectorInput
              data={porkChickenData}
              state={porkChicken}
              setter={setPorkChicken}
              title={"Pork or Chicken"}
            />
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ height: "80%" }}
              onClick={handleAddPorkChicken}
            >
              Add
            </Button>
          </div>
        </label>
        {Array.from({ length: porkChickenAdditional }).map((_, index) => (
          <label className="flex items-center justify-between">
            <p className="font-semibold"></p>
            <div className=" w-[50%] flex flex-start items-center gap-4">
              <SelectorInput
                key={index}
                data={porkChickenData}
                state={porkChicken}
                setter={setPorkChicken}
                title={"Pork or Chicken"}
              />
            </div>
          </label>
        ))}
        <label className="flex items-center justify-between">
          <p className="font-semibold">Fish:</p>
          <div className=" w-[50%] flex flex-start items-center gap-4">
            <SelectorInput
              data={fishData}
              state={fish}
              setter={setFish}
              title={"Fish"}
            />
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ height: "80%" }}
              onClick={handleAddFish}
            >
              Add
            </Button>
          </div>
        </label>
        {Array.from({ length: fishAdditional }).map((_, index) => (
          <label className="flex items-center justify-between">
            <p className="font-semibold"></p>
            <div className=" w-[50%] flex flex-start items-center gap-4">
              <SelectorInput
                key={index}
                data={fishData}
                state={fish}
                setter={setFish}
                title={"Fish"}
              />
            </div>
          </label>
        ))}
        <label className="flex items-center justify-between">
          <p className="font-semibold">Pasta:</p>
          <div className=" w-[50%] flex flex-start items-center gap-4">
            <SelectorInput
              data={pastaData}
              state={pasta}
              setter={setPasta}
              title={"Pasta"}
            />
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ height: "80%" }}
              onClick={handleAddPasta}
            >
              Add
            </Button>
          </div>
        </label>
        {Array.from({ length: pastaAdditional }).map((_, index) => (
          <label className="flex items-center justify-between">
            <p className="font-semibold"></p>
            <div className=" w-[50%] flex flex-start items-center gap-4">
              <SelectorInput
                key={index}
                data={pastaData}
                state={pasta}
                setter={setPasta}
                title={"Pasta"}
              />
            </div>
          </label>
        ))}
        <label className="flex items-center justify-between">
          <p className="font-semibold">Dessert:</p>
          <div className=" w-[50%] flex flex-start items-center gap-4">
            <SelectorInput
              data={dessertData}
              state={dessert}
              setter={setDessert}
              title={"Dessert"}
            />
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ height: "80%" }}
              onClick={handleAddDessert}
            >
              Add
            </Button>
          </div>
        </label>
        {Array.from({ length: dessertAdditional }).map((_, index) => (
          <label className="flex items-center justify-between">
            <p className="font-semibold"></p>
            <div className=" w-[50%] flex flex-start items-center gap-4">
              <SelectorInput
                key={index}
                data={dessertData}
                state={dessert}
                setter={setDessert}
                title={"Dessert"}
              />
            </div>
          </label>
        ))}
        <label className="flex items-center justify-between">
          <p className="font-semibold"></p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-full"
              type="string"
              placeholder="Plain White Rice"
              readOnly="true"
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold"></p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-full"
              type="string"
              placeholder="Red Iced Tea"
              readOnly="true"
            />
          </div>
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold"></p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-full"
              type="string"
              placeholder="Bottled Water"
              readOnly="true"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default FoodChoicesDetails;
