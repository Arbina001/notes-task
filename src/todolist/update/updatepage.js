import { Carddiscription, Cardtitle, Createcard, Createcontainer, Createinnerwrapper, Createsection, Createwrapper} from "../create/create.styled"
import { Addbutton, Cardbutton } from "../home/Card.styled";
import React, { useState,useEffect } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import axios from "axios";

export function Updatepage () {

    const { id } = useParams();


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
                  <Cardtitle   type="text"
                
                  value={value.Title}
                  onChange={(e) => setValue({ ...value, Title: e.target.value })} ></Cardtitle>

                    <Carddiscription  
                    type="text"
                
                  value={value.Discription}
                  onChange={(e) => setValue({ ...value, Discription: e.target.value })}
                    > 
                
                    </Carddiscription>
                    <Cardbutton onClick={handleSubmit}>submit</Cardbutton>
                    <Addbutton to={"/"}>back</Addbutton>
                  </Createcard>  
                </Createinnerwrapper>
               </Createwrapper> 
            </Createcontainer>
           </Createsection>
        </>
    )
}