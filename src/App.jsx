import { useEffect, useState } from "react";
import "../src/styles/utils.css";
import FoodPages from "./components/FoodPages";
import {
  createFood,
  deleteFood,
  getFoods,
  updateFood,
} from "./services/food-service";
import { Navigate, Route, Routes } from "react-router";
import DescriptionFood from "./components/DescriptionFood";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  const [state, setState] = useState({ success: "", data: [], error: "" });
  const [loading, setLoading] = useState("loading");

  useEffect(() => {
    getFoods()
      .then((foods) => {
        setState({ success: "success", data: foods, error: "" });
        setLoading(null);
      })
      .catch((error) => {
        console.log(error);
        setState({ success: "", data: "", error: "Ha ocurrido un error" });
        setLoading(null);
      });
  }, [setState]);

  async function handleCreateProduct(dataFood) {
    let estado = "";
    try {
      const newFood = await createFood(dataFood);
      setState({ ...state, data: [...data, newFood] });
      estado = "success";
    } catch (error) {
      setState({ ...state, error });
      estado = "failure";
    }
    return estado;

    // OTRA FORMA DE HACERLO CON THEN
    // return new Promise((resolve, reject) => {
    //   createFood(dataFood)
    //     .then((newFood) => {
    //       console.log(newFood);
    //       setState({ ...state, data: [...data, newFood] });
    //       resolve("exito"); // Resuelve la promesa con "exito"
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       setState({ ...state, error });
    //       reject("fracaso"); // Rechaza la promesa con "fracaso"
    //     });
    // });
  }

  //update
  async function handleUpdateProduct(dataFood, id) {
    let estado = "";
    try {
      const foodData = await updateFood(dataFood, id);

      const dataUpdate = data.map((food) => {
        if (food.id === foodData.id) return { ...food, ...foodData };
        return { ...food };
      });

      setState({ ...state, data: dataUpdate });
      estado = "success";
    } catch (error) {
      setState({ ...state, error });
      estado = "failure";
    }
    return estado;
  }

  //eliminar
  async function handleDeleteProduct(id) {
    try {
      await deleteFood(id);
      const dataFoods = data.filter((food) => food.id != id);

      setState({ ...state, data: dataFoods, error: "" });
    } catch (error) {
      console.log(error);
      setState({ ...state, error });
    }
  }

  const { success, data, error } = state;
  // console.log(data);
  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <FoodPages
            foods={data}
            success={success}
            error={error}
            loading={loading}
            onDelete={handleDeleteProduct}
          />
        }
      />
      <Route path="/description_food/:foodId" element={<DescriptionFood />} />
      <Route
        path="/create_food"
        element={<CreateProduct onCreate={handleCreateProduct} />}
      />
      <Route
        path="/update_food/:foodId"
        element={<UpdateProduct onUpdate={handleUpdateProduct} />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
