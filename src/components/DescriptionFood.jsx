import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { showFood } from "../services/food-service";
import { Section } from "../styles/components/section";
import "../styles/utils.css";

import {
  Image,
  PriceFood,
} from "../styles/components/DescriptionPage/description-page";
import { Container } from "../styles/components/container";
import { H3 } from "../styles/components/h3";
import { H1 } from "../styles/components/h1";
import { Button, ButtonContainer } from "../styles/components/button";
import { Loader } from "../styles/components/loader";
import { Ring } from "@uiball/loaders";

const DescriptionFood = () => {
  const { foodId } = useParams();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState("loading");
  const navigate = useNavigate();

  useEffect(() => {
    showFood(foodId)
      .then((data) => {
        setFood(data);
        setLoading(null);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {loading && (
        <Loader>
          <Ring />
        </Loader>
      )}
      {food && (
        <Section>
          <Container>
            <div className="mb-5rem">
              <div className="mb-1rem">
                <Image src={food?.picture_url} alt={food?.name} />
              </div>
              <H1 className="center capitalize mb-4">{food?.name}</H1>
              <PriceFood className="mb-1rem">
                $ {(food?.price / 100).toFixed(2)}
              </PriceFood>
              <strong style={{ fontSize: "18px" }}>Description</strong>
              <p>{food?.description}</p>
            </div>
          </Container>
          <ButtonContainer>
            <Button onClick={() => navigate("/")}>Go Back</Button>
          </ButtonContainer>
        </Section>
      )}
    </>
  );
};

export default DescriptionFood;
