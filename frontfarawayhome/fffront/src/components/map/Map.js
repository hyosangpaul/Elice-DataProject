import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";


import seoulMap from "../../data/map/seoul.json";
import axios from "axios";
import { useState } from "react";
import MapStyle from "./MapStyle.js";
import Sidebar from "../sidebar/Sidebar"


// Map Style ( NO Styled-Components )
const defaultStyle = {
  default: {
    fill: "#D6D6DA",
    outline: "none",
  },
  hover: {
    fill: "#2c41fb",
    opacity: "65%",
    outline: "none",
  },
  pressed: {
    fill: "#2c41fb",
    outline: "none",
  },
};

// Define a function to handle hover events -> 호버 이벤트를 정의하는 함수
/*
const handleHover = (geo) => {
    Do something with the hovered area
    console.log(geo.properties.name);
}; */

// 지역 좌표를 사용해서 서율 지역을 대한민국 지도에 매핑하는 함수를 만듬 
const seoulRegions = [
  { name: '강남구', coordinates: [127.049, 37.489]},
  { name: '강동구' , coordinates: [127.14, 37.55]},
  { name: '강북구',  coordinates:[ 127.001,37.63]},
  { name: '강서구',  coordinates:[ 126.81,37.556]},
  { name: '관악구',  coordinates:[ 126.94, 37.46]},
  { name: '광진구',  coordinates:[ 127.079, 37.54]},
  { name: '구로구',  coordinates:[ 126.841, 37.491]},
  { name: '금천구',  coordinates:[ 126.898 , 37.449 ]},
  { name: '노원구',  coordinates:[ 127.065 , 37.63 ]},
  { name: '도봉구',  coordinates:[ 127.025 , 37.656 ]},
  { name: '동대문구',  coordinates:[ 127.040 , 37.575 ]},
  { name: '동작구',  coordinates:[ 126.942 , 37.497 ]},
  { name: '마포구',  coordinates:[ 126.902 , 37.550 ]},
  { name: '서대문구',  coordinates:[ 126.925 , 37.570 ]},
  { name: '서초구',  coordinates:[ 127.005 , 37.475 ]},
  { name: '성동구',  coordinates:[ 127.028 , 37.546 ]},
  { name: '성북구',  coordinates:[ 127.006 , 37.595 ]},
  { name: '송파구',  coordinates:[ 127.096 , 37.503 ]},
  { name: '양천구',  coordinates:[ 126.844 , 37.514 ]},
  { name: '영등포구',  coordinates:[ 126.899 , 37.520 ]},
  { name: '용산구',  coordinates:[ 126.971 , 37.527 ]},
  { name: '은평구',  coordinates:[ 126.919 , 37.609 ]},
  { name: '종로구',  coordinates:[ 126.972 , 37.575 ]},
  { name: '중구',  coordinates:[ 126.990 , 37.554 ]},
  { name: '중랑구',  coordinates:[ 127.079 , 37.592 ]},
  // 확인후 다른 지역구도 추가할수 있으면 추가 
];

// 좌표를 소환해 지도에 이름을 찍어주는 함수 
const mapRegions = () => {
  return seoulRegions.map((region) => (
    <Marker key={region.name} coordinates={region.coordinates}>
      <text style={{fontSize:"10px"}}>{region.name}</text>
    </Marker>
  ))
}

const Map = () => {
  const [guName, setGuName] = useState('')
  // console.log(guName)
  // 클릭시 줄 이벤트 
  // 함수 표현식에서 async를 적용하고 싶을 때 () 매개변수를 받는 곳 안에서 선언을 해줘야함 
  const handleClick = async (e, name) => {
    // try블록에서 axios로 백엔드 데이터에서 데이터 읽기
    try {
      // console.log("e : ", e);
      // console.log("name : ", name );
      // 응답 객체를 받아오기 
      const response = await axios.get('http://localhost:3001/graph');

      // loop를 돌려서 name과 같은 객체를 찾는다
      const obj = response.data[0];
      // console.log("obj : ", obj);

      // name을 찾기위한 loop
      for(const key in obj ) {
        if( key === name ) {
          const found = obj[key];
          setGuName(found);
          return;
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div style = {{
      width : '100%',
      display : 'flex'
    }}>
    <Sidebar Gu = {guName} />
    <MapStyle>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 70000,
          center: [126.979, 37.5665], // Seoul coordinates
        }}
      >
        {/* 서울의 지도를 가져옴  */}
        <Geographies geography={seoulMap}>
        {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={defaultStyle}
                fill="#EAEAEC"
                stroke="#FFFFFF"
                onClick={(e) => handleClick(e , geo.properties.name)}
              />
            ))}
        </Geographies>
        {mapRegions()}
      </ComposableMap>
    </MapStyle>
    </div>
  );
};

export default Map;
