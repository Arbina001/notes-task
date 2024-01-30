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
import { Addbutton, BoxCard, Cardbutton, Cardwrapper } from "./Card.styled";
import axios from "axios";
import { useEffect,useState } from "react";
export default function Homepage() {


const [data,setdata] = useState([]);

useEffect(() => {

    axios

      .get("http://localhost:2000/users")

      .then((res) => setdata(res.data))

      .catch((err) => console.log(err));

  }, []);

  const handleDel = (id) => {
    const confirmDelete = window.confirm("Would you like to delete?");
    if (confirmDelete) {
      axios
        .delete(`http://localhost:2000/users/${id}`)
        .then((res) => {
          console.log("Delete successful:", res.data);
          setdata((prevData) => prevData.filter((item) => item.id !== id));
        })
        .catch((err) => console.log("Delete failed:", err));
    }
  };

const serverdata = data.map((datastore,i)=>(
<BoxCard key = {i}> 
                    <Textstyled>
                      <h3>{datastore.Title}</h3>
                      <p>{datastore.Discription}</p>
                    </Textstyled>
                    <Cardproperties>
                      <Cardbutton onClick={()=>handleDel(datastore.id)}>Delete</Cardbutton>
                      <Addbutton to={`/update/${datastore.id}`}>Update</Addbutton>
                    </Cardproperties>
                  </BoxCard>

))

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
            <Addbutton to={"create"}>
                add mme
            </Addbutton>  
                <Cardwrapper>
                {serverdata}  
                </Cardwrapper>
              </Rightbox>
            </Homeinnerwrapper>
          </Homewrapper>
        </Homecontainer>
      </Homesection>
    </>
  );
}
