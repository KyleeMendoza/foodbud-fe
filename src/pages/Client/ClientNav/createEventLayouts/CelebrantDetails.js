import React from "react";

function CelebrantDetails({ formData, handleModify }) {
  return (
    <div className="flex flex-col gap-4 ">
      <div>
        <p className="text-primary-400 font-bold text-2xl">Celebrant</p>
      </div>
      <div className="flex flex-col w-[50%] gap-4">
        <label className="flex items-center justify-between">
          <p className="font-semibold">Celebrant Name:</p>
          <input
            className="font-normal border-2 p-2 rounded-md w-[50%]"
            type="string"
            // placeholder="Rocel"
            value={formData.celebrant_name}
            readOnly
          />
        </label>
        <label className="flex items-center justify-between">
          <p className="font-semibold">Age:</p>
          <div className=" w-[50%] flex flex-start">
            <input
              className="font-normal border-2 p-2 rounded-md w-[50%]"
              type="string"
              placeholder="Age"
              name="celebrant_age"
              value={formData.celebrant_age || ""}
              onChange={handleModify}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default CelebrantDetails;
