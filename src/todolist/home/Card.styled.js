import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoxCard = styled.div`
  width: 300px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 230px;
  max-width: 230px;
  display: flex;
  align-items: self-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const Cardbutton = styled.button`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  margin: 0px 10px 0px 12px;
`;

export const Addbutton = styled(Link)`
background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 12px;
  line-height: 21px;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  margin: 0px 10px 0px 12px;

`;
export const Cardwrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  width: 100%;
  list-style: none;
  gap: 10px;
`;
