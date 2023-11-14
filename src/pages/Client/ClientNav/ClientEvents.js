import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { getClientEvents } from "../../../services/getClientEvents";

function ClientEvents() {
  const clientId = "Sample@gmail.com";

  //GET EVENTS BASED ON CLIENT ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getClientEvents(clientId);
        // const updatedRows = response.map((item) => ({
        //   date: item.createdAt.slice(0, 10),
        //   gameId: item.game_id,
        //   bet: item.bet_data,
        //   betAmount: item.amount,
        //   winLose: item.status,
        //   result: item.status === "Win" ? "+ " + item.amount * 8 : 0,
        // }));
        // setRows(updatedRows);
        // setUserBets(updatedRows); //FOR COLOR INPUTS
        console.log(response);
      } catch (error) {
        console.error("Error:", error.message);
        window.alert(
          "An error occurred while fetching the bet history. Please try again later."
        );
      }
    };
    fetchData();
  }, [clientId]);

  return (
    <div className="border-2 border-black h-full py-10">
      <div className="flex gap-5 border-2 border-green-600">
        <div className="flex flex-col w-72 h-72 rounded-2xl">
          <div className="font-['Poppins'] flex justify-start items-start flex-1 pt-5 px-5 bg-sky-500 rounded-t-2xl">
            <div className="bg-blue-300 px-4 py-3 rounded-3xl">
              <p className="text-xs capitalize text-white font-semibold">
                budget package
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 px-3 flex-1 bg-white rounded-b-2xl">
            <div>
              <p className="text-2xl font-bold capitalize">juan dela cruz</p>
              <p className="text-sm capitalize">1st Birthday & Baptismal</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm capitalize">December 25, 2023</p>
              <Button variant="contained" size="small">
                Read more
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-72 h-72 rounded-2xl">
          <div className="font-['Poppins'] flex justify-start items-start flex-1 pt-5 px-5 bg-pink-600 rounded-t-2xl">
            <div className="bg-pink-300 px-4 py-3 rounded-3xl">
              <p className="text-xs capitalize text-white font-semibold">
                budget package
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 px-3 flex-1 bg-white rounded-b-2xl">
            <div>
              <p className="text-2xl font-bold capitalize">juan dela cruz</p>
              <p className="text-sm capitalize">1st Birthday & Baptismal</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm capitalize">December 25, 2023</p>
              <Button variant="contained" size="small">
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientEvents;
