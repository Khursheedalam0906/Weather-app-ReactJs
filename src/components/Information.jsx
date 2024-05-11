import React from "react";
import { Box, Typography, styled } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import OpacityIcon from "@mui/icons-material/Opacity";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloudIcon from "@mui/icons-material/Cloud";

const Row = styled(Typography)({
  padding: 10,
  fontSize: 20,
  letterSpacing: 1,
  "& > svg": {
    marginRight: 10,
  },
});

const Information = ({ result }) => {
  return result && Object.keys(result).length > 0 ? (
    <Box style={{ margin: "30px 60px" }}>
      <Row>
        <LocationOnIcon />
        Location :{result.name}, {result.sys.country}
      </Row>
      <Row>
        <SettingsBrightnessIcon />
        Temperature : {result.main.temp}
      </Row>
      <Row>
        <OpacityIcon />
        Humidity : {result.main.humidity}
      </Row>
      <Row>
        <Brightness5Icon />
        Sun Rise : {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <Brightness6Icon />
        Sun Set : {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
      </Row>
      <Row>
        <DehazeIcon />
        humidity : {result.weather[0].main}
      </Row>
      <Row>
        <CloudIcon /> Clouds : {result.clouds.all}
      </Row>
    </Box>
  ) : (
    <Typography
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60%",
      }}
    >
      Please enter the city
    </Typography>
  );
};

export default Information;
