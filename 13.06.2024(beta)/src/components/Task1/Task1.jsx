import axios from "axios";
import style from "./Task1.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Form1 from "./form1/Form1.jsx";

export default function Task1() {
  const [state, setState] = useState({
    weather: null,
    error: null,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const apiKey = "5caac4f47cdc971f168d07e78c3f8c54";

  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setState((prevState) => ({
        ...prevState,
        weather: response.data,
        error: null,
      }));
    } catch (e) {
      setState((prevState) => ({
        ...prevState,
        weather: null,
        error: (
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Город не найдён
          </p>
        ),
      }));
    }
  };

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      city: e.target.value,
    }));
  };

  const onSubmit = (data) => {
    getWeather(data.city);
  };

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Погода
      </h1>

      <Form1
        onSubmit={onSubmit}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        style={style}
        register={register}
        errors={errors}
      />
      {state.weather && (
        <div className={style.result}>
          <h2>{state.weather.name}</h2>
          <p>Температура: {state.weather.main.temp}°C</p>
          <p>Ощущается как: {state.weather.main.feels_like}°C</p>
        </div>
      )}
      {state.error && <p>{state.error}</p>}
    </div>
  );
}
