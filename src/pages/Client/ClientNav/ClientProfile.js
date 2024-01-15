import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Cookies from "js-cookie";
import { getClientProfile } from "../../../services/getClientProfile";

function ClientProfile({ cookies }) {
  const clientId = cookies.username;
  const [userInfo, setUserInfo] = useState([]);
  const [isEditablePersonal, setIsEditablePersonal] = useState(false);
  const [editedValuesPersonality, setEditedValuesPersonality] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await getClientProfile(clientId);
      console.log(result.ClientProfile);

      const { client_name, client_address, client_contact, client_email } =
        result.ClientProfile;

      const formattedClientProfile = {
        Name: client_name,
        Address: client_address,
        Contact: client_contact,
        Email: client_email,
      };

      setUserInfo([formattedClientProfile]);
    };
    fetchProfile();
  }, []);

  const handleEditInfo = () => {
    setIsEditablePersonal(!isEditablePersonal);
  };

  useEffect(() => {
    setEditedValuesPersonality(Object.assign({}, ...userInfo));
  }, [userInfo]);

  const handleInputChangePersonality = (key, event) => {
    const newValue = event.target.value;
    setEditedValuesPersonality((prevValues) => ({
      ...prevValues,
      [key]: newValue,
    }));
  };

  const handleSavePersonality = async () => {
    const originalPersonality = Object.assign({}, ...userInfo);

    // Find and create an object with the keys and their different values
    const differentKeysObject = {};
    Object.keys(originalPersonality).forEach((key) => {
      if (originalPersonality[key] !== editedValuesPersonality[key]) {
        differentKeysObject[key] = editedValuesPersonality[key];
      }
    });

    //This logs the changed information about the profile.
    console.log("Updated Personality: ", differentKeysObject);

    // if (Object.keys(differentKeysObject).length > 0) {
    //   const result = await updateUserInformation(
    //     token,
    //     differentKeysObject,
    //     UID
    //   );
    //   console.log(result);
    //   // Reload the component after saving
    //   toast.success("Sucessfully Updated!");
    //   setIsUpdated(!isUpdated);
    // }
  };

  return (
    <div className=" h-full py-10">
      <div className=" h-full bg-white rounded-lg flex flex-col gap-5 p-10">
        <div className="flex justify-between">
          <p className="text-3xl text-secondary500 font-bold font-['Poppins'] capitalize">
            my profile
          </p>
          <div>
            <Button
              component="label"
              variant={isEditablePersonal ? "contained" : "outlined"}
              startIcon={<EditIcon />}
              onClick={() => {
                if (isEditablePersonal) {
                  handleSavePersonality();
                }
                handleEditInfo();
              }}
            >
              {isEditablePersonal ? "Save" : "Edit"}
            </Button>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="w-full flex justify-between ">
            <div className="w-[80%] flex flex-col gap-2 ">
              {userInfo.map((data, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    {Object.entries(data).map(([key, value]) => {
                      const formattedKey = key.replace(/_/g, " ");
                      return (
                        <div
                          key={key}
                          className="flex justify-between items-center my-1"
                        >
                          <p className="text-lg font-semibold capitalize font-['Poppins']">
                            {formattedKey}:
                          </p>
                          <div className="text-base w-[80%]">
                            <input
                              type="text"
                              value={
                                isEditablePersonal
                                  ? editedValuesPersonality[key] || ""
                                  : value || "No Data"
                              }
                              disabled={!isEditablePersonal}
                              onChange={(event) =>
                                handleInputChangePersonality(key, event)
                              }
                              className={`w-full px-1 font-['Poppins'] ${
                                isEditablePersonal
                                  ? "p-2 rounded-lg border-2"
                                  : "bg-transparent"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;
