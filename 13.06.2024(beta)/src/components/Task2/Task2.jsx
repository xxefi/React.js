import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Form2 from "./form2/Form2.jsx";
import style from "../Task2/Task2.module.css";

export default function Task2() {
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

  const getWeather = async (city, country) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
      );
      setState((prevState) => ({
        ...prevState,
        weather: response.data,
        error: null,
      }));
      console.log(city);
      console.log(country);
    } catch (e) {
      setState((prevState) => ({
        ...prevState,
        weather: null,
        error: (
          <p
            style={{
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Город не найден
          </p>
        ),
      }));
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      city: value,
    }));
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      country: value,
    }));
  };

  const onSubmit = (data) => {
    getWeather(data.city, data.country);
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
      <Form2
        onSubmit={onSubmit}
        handleChange={handleChange}
        handleCountryChange={handleCountryChange}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        style={style}
      />
      {state.weather && (
        <div className={style.result}>
          <h2>
            {state.weather.name}, {state.weather.sys.country}
          </h2>
          <p>Температура: {state.weather.main.temp}°C</p>
          <p>Ощущается как: {state.weather.main.feels_like}°C</p>
        </div>
      )}
      {state.error && <p>{state.error}</p>}
    </div>
  );
}
