import styled from "@emotion/styled";
import { colors } from "../colors";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-row-gap: 80px;
  grid-column-gap: 10px;
`;

const Item = styled.div`
  border: 1px solid #ccc;
  background-color: ${colors.white};
  border-radius: 40px;
  text-align: center;
  height: 310px;
  position: relative;
`;
const FootItem = styled.div`
  position: absolute;
  top: -25%;
  left: 0;
  right: 0;
  padding: 16px;
`;
const FoodImage = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 50%;
`;

const Price = styled.p`
  font-size: 22px;
  color: #fa4a0c;
  font-weight: 600;
  line-height: 27.65px;
  text-align: center;
`;

const OptionsFood = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fa4a0c;
  font-size: 25px;
`;

// const Link = styled.a`
//   display: block;
//   text-decoration: none;
//   cursor: pointer;
//   color: black;
//   text-transform: capitalize;
//   &:hover {
//     text-decoration: none;
//     color: orange;
//   }
// `;

export { Grid, Item, FootItem, Price, FoodImage, OptionsFood };
