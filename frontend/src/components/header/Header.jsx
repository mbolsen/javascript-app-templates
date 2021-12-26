import React, { useState, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function Header() {
  // ---STATE VARIABLES---

  // ---COMPONENT FUNCTIONS---

  // ---USE EFFECT---

  // ---RENDER COMPONENT---
  return (
    <div>
      Navigation Bar Typically Goes Here
      {/* Outlet will render the next applicable thing in the Routes defined in App */}
      <Outlet />
    </div>
  );
}