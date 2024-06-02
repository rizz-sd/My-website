import React, { Component } from "react";

export default function Intro() {
    const basic = {
        background: "url('/my-website/assets/wall_p.jpg')",
        backgroundRepeat: "no-repeat",
        height: "900px",
        marginTop: "-11%"
    }
    const backG = {
        background: "url('/my-website/assets/my_intro.png')",
        height: "200px",
        backgroundRepeat: "no-repeat",
        width: "200px",
        backgroundSize: "200px 200px",
        position: "absolute",
        bottom: "0",
        right: "0"

    };

    const textStyle = {
        marginTop: "20%",
        marginBottom: "20%",
        position: "relative",
        fontSize: "4.5em",
        fontWeight: "600",
        lineHeight: "1.4em",
        color: "#FFFFFF",
        marginLeft: "70px",
        fontFamily: "Calibri",
        background: "-webkit-linear-gradient(to bottom right, #000066, #00CCFF)",
        webkitBackgroundClip: "text",
        position: "absolute",
        top: "0",
        right: "30%"

    };

    const subtext = {
        fontSize: "0.7em",
        marginTop: "-15%",
        marginLeft: "10%"
    };

    const ul = {
        background: "linear-gradient(to bottom right, #000066, #00CCFF)",
        webkitBackgroundClip: "text",
        position: "absolute",
        top: "0",
        right: "5%",
        fontSize: "1.5em",
    };

    return (
        <>
        <div style={basic}>
            <div style={backG}></div>
            <header1 style={textStyle}><p>Hi! I am Ritika Agrawal</p><p style={subtext}>A Software Developer</p></header1>
            <ul style={ul}>
              <p>Join me here</p>
              <li><a href="https://www.linkedin.com/in/ms-ritika-agrawal/" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com/rizz-sd" target="_blank">Github</a></li>
            </ul>
        </div>
        </>
    );
}