import React from "react";
import {
  Homecontainer,
  Homeheading,
  Homeinnerwrapper,
  Homesection,
  Homewrapper,
  Imagebox,
  Textstyled,
  Leftbox,
  Rightbox,
  Cardproperties,
} from "./homedesign.styled";
import { Addbutton, BoxCard, Cardbutton, Cardimage, Cardwrapper } from "./Card.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { DefaultButton, Globalbutton } from "../buttons/buttons.styled";
export default function Homepage() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios

      .get("http://localhost:2000/users")

      .then((opt) => setdata(opt.data))

      .catch((error) => console.log(error));
  }, []);

  const deletedata = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:2000/users/${id}`)
        .then((ans) => {
          console.log("Delete successful:", ans.data);
          setdata((prevData) => prevData.filter((item) => item.id !== id));
        })
        .catch((error) => console.log("Delete failed:", error));
    }
  };

  const serverdata = data.map((datastore, i) => (
    <BoxCard key={i}>
      <Textstyled>
        <h3>{datastore.Title}</h3>
        <p>{datastore.Discription}</p>
      </Textstyled>
      <Cardproperties>
        <DefaultButton onClick={() => deletedata(datastore.id)}>Delete</DefaultButton>
        <Globalbutton to={`/update/${datastore.id}`}>Update</Globalbutton>
      </Cardproperties>
    </BoxCard>
  ));

  return (
    <>
      <Homesection>
        <Homecontainer>
          <Homewrapper>
            <Homeinnerwrapper>
              {/* <Leftbox>
                <Homeheading>Notes Data</Homeheading>
              </Leftbox> */}
              <Rightbox>
                <Globalbutton to={"create"}>Add more +</Globalbutton>
               
                <Cardwrapper> {serverdata}</Cardwrapper>
              </Rightbox>
            </Homeinnerwrapper>
          </Homewrapper>
        </Homecontainer>
      </Homesection>
    </>
  );
}
