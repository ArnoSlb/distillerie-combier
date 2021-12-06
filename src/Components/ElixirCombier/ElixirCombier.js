import React from 'react'

import "./ElixirCombier.css"

import ElixirHD from "../../assets/Elixir_HD.jpg"
 
const ElixirCombier = () => {

    React.useEffect(() => {

        // si on est rendu en bas de la page alors .ElixierCombier.style.overflowX: hidden; */
        // else overlowX: initial
        //Sinon le scroll passe en horizontal alors qu'on est pas rendu en bas de la page

        const scrollToRight = () => {

            const {scrollTop, scrollHeight, clientHeight} = document.documentElement

            console.log(scrollTop, clientHeight, scrollHeight)

                if( scrollTop + clientHeight == scrollHeight){
                    console.log("je passe en scroll horizontal")
                    document.querySelector('.ElixirCombier').style.overflowX = "hidden";
                } else {
                    document.querySelector('.ElixirCombier').style.overflowX = "initial";
                }
        }

        window.addEventListener('scroll', scrollToRight)
        
        return () => {
            window.removeEventListener('scroll', scrollToRight)
            }
    },[]);

    return (
        <div className="ElixirCombier">
            <div className="ElixirCombier__HorizontalBlock">
                <div className="ElixirCombier__HorizontalBlock__slide one">
                    <p>Slide 1</p>
                    <img src={ElixirHD} alt="" />
                </div>
                <div className="ElixirCombier__HorizontalBlock__slide two">Slide 2</div>
                <div className="ElixirCombier__HorizontalBlock__slide three">Slide 3</div>
                <div className="ElixirCombier__HorizontalBlock__slide four">Slide 4</div>
            </div>
        </div>
    )
}

export default ElixirCombier;