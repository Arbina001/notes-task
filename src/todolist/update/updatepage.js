import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Carddiscription,
  Cardtitle,
  Createcard,
  Createcontainer,
  Createinnerwrapper,
  Createsection,
  Createwrapper,
} from "../create/create.styled";
import { DefaultButton, Globalbutton } from "../buttons/buttons.styled";

export function Updatepage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    Title: "",
    Discription: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:2000/users/${id}`)
      .then((res) => setValue(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:2000/users/${id}`, value)
      .then((res) => {
        console.log("Update successful:", res.data);
        // Navigate to the home page after successful update
        navigate("/");
      })
      .catch((err) => console.log("Update failed:", err));
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
                <Globalbutton to={"/"}>back</Globalbutton>
              </Createcard>
            </Createinnerwrapper>
          </Createwrapper>
        </Createcontainer>
      </Createsection>
    </>
  );
}
