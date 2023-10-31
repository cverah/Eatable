import React, { useState } from "react";
import { H1 } from "../styles/components/h1";
import "../styles/utils.css";
import {
  Form,
  Input,
  Label,
} from "../styles/CreateUpdateProduct/create-update-product";
import { Section } from "../styles/components/section";
import { Container } from "../styles/components/container";
import { Button, ButtonContainer } from "../styles/components/button";
import { Formik } from "formik";
import { createFood } from "../services/food-service";
import { Link } from "react-router-dom";
import { LinkContainer } from "../styles/components/link-containe";
import { validate } from "../Formik/formik_validations";

const CreateProduct = ({ onCreate }) => {
  const [message, setMessage] = useState("");

  const initialValues = {
    name: "",
    price: "",
    category: "",
    description: "",
    picture_url: "",
  };

  function onSubmit(values) {
    onCreate(values)
      .then((data) => {
        setMessage(data); // Actualiza el mensaje en el estado si es necesario
      })
      .catch((error) => {
        console.log(error);
        setMessage(error); // Manejar errores aquí
      });
  }
  // console.log(message);
  return (
    <>
      <Section>
        <Container>
          <H1 className="center mb-1rem">Create Product</H1>
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
                <div>
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
                <LinkContainer className="center">
                  <Link to={`/`} className="link">
                    &lt; TO BACK
                  </Link>
                </LinkContainer>
                <ButtonContainer>
                  <Button type="submit">Create</Button>
                </ButtonContainer>
                {/* <code>
                  <pre>
                    {JSON.stringify({ values, errors, touched }, null, 2)}
                  </pre>
                </code> */}
              </Form>
            )}
          </Formik>
        </Container>
      </Section>
    </>
  );
};

export default CreateProduct;
