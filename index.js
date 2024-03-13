import React from 'react';
import Doctor from './Doctor';
import ContactTracker from './ContactTracker';
import Surgeon from './Surgeon';
import DateComponent from './DateComponent';
import HealthCurve from './HealthCurve';
import MyData from './MyData';

const MainDashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <ContentArea>
        <Doctor />
        <ContactTracker />
        <Surgeon />
        <DateComponent />
        <HealthCurve />
        <MyData />
      </ContentArea>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <button>See Details</button>
    </header>
  );
};

const ContentArea = ({ children }) => {
  return <div className="content-area">{children}</div>;
};

export default MainDashboard;
