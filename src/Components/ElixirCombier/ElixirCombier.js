import React from 'react'

import "./ElixirCombier.css"
 
const ElixirCombier = () => {

    React.useEffect(() => {
        
        // si on est rendu en bas de la page alors .ElixierCombier.style.overflowX: hidden; */
        // else overlowX: initial
        //Sinon le scroll passe en horizontal alors qu'on est pas rendu en bas de la page

        window.addEventListener('scroll', () => {
            const {scrollTop, scrollHeight, clientHeight} = document.documentElement

            console.log(scrollTop, clientHeight, scrollHeight)

            if( scrollTop + clientHeight == scrollHeight){
                console.log("je passe en scroll horizontal")
                document.querySelector('.ElixirCombier').style.overflowX = "hidden";
            } else {
                document.querySelector('.ElixirCombier').style.overflowX = "initial";
            }
        })
    },[])


    return (
        <div className="ElixirCombier">
            <div className="ElixirCombier__HorizontalBlock">
                <div className="ElixirCombier__HorizontalBlock__slide one">Slide 1</div>
                <div className="ElixirCombier__HorizontalBlock__slide two">Slide 2</div>
                <div className="ElixirCombier__HorizontalBlock__slide three">Slide 3</div>
                <div className="ElixirCombier__HorizontalBlock__slide four">Slide 4</div>
            </div>
        </div>
    )
}

export default ElixirCombier;