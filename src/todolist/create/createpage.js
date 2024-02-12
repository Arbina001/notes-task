import {
  Carddiscription,
  Cardtitle,
  Createcard,
  Createcontainer,
  Createinnerwrapper,
  Createsection,
  Createwrapper,
} from "./create.styled";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Cardbutton } from "../home/Card.styled";
import { DefaultButton } from "../buttons/buttons.styled";

export function Createpage() {
  const [value, setValue] = useState({
    Title: "",
    Discription: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:2000/users", value);
      console.log("Data submitted successfully:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error submitting data:", error.message);
    }
  };

  return (
    <>
      <Createsection>
        <Createcontainer>
          <Createwrapper>
            <Createinnerwrapper>
              <Createcard>
                <Cardtitle
               
                  type="text"
                  value={value.Title}
                  onChange={(e) =>
                    setValue({ ...value, Title: e.target.value })
                  }
                ></Cardtitle>

                <Carddiscription
                
                  type="text"
                  value={value.Discription}
                  onChange={(e) =>
                    setValue({ ...value, Discription: e.target.value })
                  }
                ></Carddiscription>
                <DefaultButton onClick={handleSubmit}>submit</DefaultButton>
              </Createcard>
            </Createinnerwrapper>
          </Createwrapper>
        </Createcontainer>
      </Createsection>
    </>
  );
}
