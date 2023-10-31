import { Section } from "../styles/components/section";
import { Container } from "../styles/components/container";
import { H1 } from "../styles/components/h1";
import {
  FoodImage,
  FootItem,
  Grid,
  Item,
  OptionsFood,
  Price,
} from "../styles/FoodPage/food_pages";
import { H3 } from "../styles/components/h3";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { Button, ButtonContainer } from "../styles/components/button";
import "../styles/utils.css";
import { Ring } from "@uiball/loaders";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../styles/components/loader";
import { useState } from "react";
import ModalDelete from "./ModalDelete";

const FoodPages = ({ foods, success, error, loading, onDelete }) => {
  //modal
  const [dataModal, setDataModal] = useState({ active: false, food_id: "" });

  const navigate = useNavigate();
  return (
    <>
      {loading && (
        <Loader>
          <Ring />
        </Loader>
      )}
      {success && (
        <>
          <Section>
            <Container>
              <H1 className="mb-5rem center">Products Dashboard</H1>
              <Grid className="mb-7rem">
                {foods.map((food) => (
                  <Item key={food.id}>
                    <FootItem>
                      <FoodImage
                        className="mb-4"
                        src={food?.picture_url}
                        alt={food?.name}
                      />
                      <Link
                        to={`/description_food/${food.id}`}
                        className="link"
                      >
                        <H3>{food?.name}</H3>
                      </Link>
                      <Price className="mb-4">
                        $ {(food?.price / 100).toFixed(2)}
                      </Price>
                      <OptionsFood>
                        <Link to={`/update_food/${food.id}`}>
                          <BsPencilSquare className="pointer" />{" "}
                        </Link>

                        <div
                          onClick={() =>
                            setDataModal({
                              active: true,
                              food_id: food.id,
                            })
                          }
                        >
                          <BsFillTrashFill className="pointer" />
                        </div>
                      </OptionsFood>
                    </FootItem>
                  </Item>
                ))}
              </Grid>
            </Container>
          </Section>
          <ButtonContainer>
            <Button onClick={() => navigate("/create_food")}>
              Create Product
            </Button>
          </ButtonContainer>

          <ModalDelete
            // foodId={food.id}
            onDelete={onDelete}
            dataModal={dataModal}
            onClose={() => setDataModal({ active: false, food_id: "" })}
          />
        </>
      )}
      {error && <p>ocurrio un error</p>}
    </>
  );
};

export default FoodPages;
