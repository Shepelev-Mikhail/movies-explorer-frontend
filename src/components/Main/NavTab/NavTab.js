import './NavTab.css';
import React from "react";

function NavTab({data, onClick}) {
  const linkJsx = data?.map(el => (
    <li key={el?.id} className="nav__link" onClick={() => onClick(el?.ref)}>{el?.name}</li>
  ))

  return(
    <div className="nav">
      <ul className="container nav__list">
        {linkJsx}
      </ul>
    </div>
  )
}

export default NavTab;
