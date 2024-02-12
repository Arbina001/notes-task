import styled from "styled-components";

export const Createsection = styled.div``;

export const Createcontainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;

export const Createwrapper = styled.div``;

export const Createinnerwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://i.pinimg.com/564x/e6/30/b1/e630b1b50f67908c2f13e9206910c359.jpg);
max-width: 1300px;
 /* background-repeat: no-repeat; */
 height: 600px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-y: hidden;
`;

export const Createcard = styled.div`
  width: 100%;
  max-width: 500px;
  height: 400px;
  /* background-color: pink; */
  background: linear-gradient(45deg, #fff, #f0e4d7c7, #d3b38c, #a66b37, #3e1f0f80);
  border-radius: 15px;
  margin: 20px;
  padding: 20px;
`;

export const Carddiscription = styled.textarea`
  color: #000;
  margin: 20px;
  width: 100%;
  max-width: 435px;
  height: 250px;
  padding: 10px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;

  @media (max-width:991px) {
    margin: 0 0 0 -10px;
  }
`;

export const Cardtitle = styled.input`
  color: #000;
  /* margin: 20px; */
  /* margin: 14px 0px 21px 18px; */
  width: 100%;
  max-width: 435px;
  padding: 10px;
  resize: none;
  border: 1px solid #ccc;
  margin: 15px;
  border-radius: 5px;
  font-size: 14px;

  @media (max-width:991px) {
    margin: 0 0 14px -10px;
  }
`;
