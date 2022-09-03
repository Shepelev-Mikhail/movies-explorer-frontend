import React, { useRef } from "react";
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import Student from './Student/Student';
import Portfolio from './Portfolio/Portfolio';

function Main() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const dataNav = [
    {
      id: 'about',
      name: 'О проекте',
      ref: ref1
    },
    {
      id: 'tech',
      name: 'Технологии',
      ref: ref2
    },
    {
      id: 'student',
      name: 'Студент',
      ref: ref3
    }
  ]

  const buttonHandler = (ref) => {
    ref?.current?.scrollIntoView();
  };

  return (
    <div className="main__page">
      <Promo />
      <NavTab data={dataNav} onClick={buttonHandler} />
      <AboutProject componentRef={ref1} />
      <Techs componentRef={ref2} />
      <Student componentRef={ref3} />
      <Portfolio />
    </div>
  )
}

export default Main;
