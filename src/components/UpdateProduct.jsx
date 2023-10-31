import { useEffect, useState } from "react";
import "../styles/utils.css";
import { Link, useParams } from "react-router-dom";
import { showFood } from "../services/food-service";
import { Section } from "../styles/components/section";
import { Container } from "../styles/components/container";
import { H1 } from "../styles/components/h1";
import { Form, Formik } from "formik";
import {
  Input,
  Label,
} from "../styles/CreateUpdateProduct/create-update-product";
import { LinkContainer } from "../styles/components/link-containe";
import { Button, ButtonContainer } from "../styles/components/button";
import { Loader } from "../styles/components/loader";
import { Ring } from "@uiball/loaders";
import { validate } from "../Formik/formik_validations";

const UpdateProduct = ({ onUpdate }) => {
  const { foodId } = useParams();
  const [food, setFood] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchShow() {
      try {
        const data = await showFood(foodId);
        setFood(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchShow();
  }, [foodId]); // Agrega foodId como dependencia para que se actualice cuando cambia

  const initialValues = {
    name: food.name,
    price: food.price,
    category: food.category,
    description: food.description,
    picture_url: food.picture_url,
  };

  function onSubmit(values) {
    onUpdate(values, foodId)
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error); // Manejar errores aquí
      });
  }

  return (
    <>
      <Section>
        <Container>
          <H1 className="center mb-1rem">Update Product</H1>
          {food.id ? ( // Verifica si food.name tiene un valor
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validate={validate}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isValid,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <p className="error-msg">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="price">Price (Amount in pesos)</Label>
                    <Input
                      type="number"
                      name="price"
                      id="price"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.price && touched.price && (
                      <p className="error-msg">{errors.price}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input
                      type="text"
                      name="description"
                      id="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.description && touched.description && (
                      <p className="error-msg">{errors.description}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      type="text"
                      name="category"
                      id="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.category && touched.category && (
                      <p className="error-msg">{errors.category}</p>
                    )}
                  </div>
                  <div className="mb-2rem">
                    <Label htmlFor="picture_url">
                      Image{" "}
                      <p style={{ textTransform: "none" }}>
                        (example:
                        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJy_dkspby8xo8JOC4m7WAmgprCePraFdCA&usqp=CAU)
                      </p>
                    </Label>
                    <Input
                      type="url"
                      name="picture_url"
                      id="picture_url"
                      value={values.picture_url}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.picture_url && touched.picture_url && (
                      <p className="error-msg">{errors.picture_url}</p>
                    )}
                  </div>
                  {message === "success" && (
                    <p className="success">
                      registered correctly click back to return to the beginning
                    </p>
                  )}
                  {message === "failure" && (
                    <p className="failure">
                      An error has occurred check if the name is duplicate
                    </p>
                  )}
                  <LinkContainer className="center mt-2rem">
                    <Link to={`/`} className="link">
                      &lt; TO BACK
                    </Link>
                  </LinkContainer>
                  <ButtonContainer>
                    <Button type="submit">Update</Button>
                  </ButtonContainer>
                </Form>
              )}
            </Formik>
          ) : (
            // Muestra un mensaje mientras se cargan los datos
            <Loader>
              <Ring />
            </Loader>
          )}
        </Container>
      </Section>
    </>
  );
};

export default UpdateProduct;
