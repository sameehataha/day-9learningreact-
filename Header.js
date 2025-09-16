import React from "react"
import meme from "./meme.png"
import style from "./style.css"
export default function Header(){
return (
    <header className="header">
    <img src={meme} className="logo">
    </img><h2 className="heading-title">Meme Generator</h2>
    </header>
)
}