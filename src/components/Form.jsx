import { Box, Button, InputBase, styled } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const API_KEY = "598bbe713d2c1cb77c8bb9276ac19596";
const API_URL = "http://api.openweathermap.org/data/2.5/weather";

const Container = styled(Box)({
  background: "#445A6F",
  padding: 10,
});

const Input = styled(InputBase)({
  color: "#fff",
  marginRight: 20,
  fontSize: 18,
});

const GetButton = styled(Button)({
  background: "#e67e22",
  width: 150,
});

const Form = ({ setResult }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const getWeatherInfo = async () => {
    try {
      const response = await axios.get(
        `${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(`Error while calling weather api`, error.message);
    }
  };

  return (
    <Container>
      <Input
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
        name="city"
      />
      <Input
        placeholder="Country"
        onChange={(e) => setCountry(e.target.value)}
        name="country"
      />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
