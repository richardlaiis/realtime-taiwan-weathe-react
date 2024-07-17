import React from 'react';
// import './App.css';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherCard = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 30px 15px
`;

const Location = styled.div`
  font-size: 28px;
  color: #212121;
  margin-bottom: 20px;
`;

function App() {
  return (
    <Container>
      <WeatherCard>
        <Location>臺北市</Location>
      </WeatherCard>
    </Container>
  );
}

export default App;
