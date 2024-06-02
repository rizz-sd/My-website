import './App.css';
import React, { Component } from "react";
import Sidebar_nav from './components/sidebar';
import Navbar from './components/navbar';
import Intro from './components/intro';


export default function App() {
  return (
    <div>
      <Navbar />
      <Intro />
    </div>
    
  );
}

