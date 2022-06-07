import react from "react";

import "./ElixirHistory.css"

const ElixirHistory = (props) => {
    console.log("Elixir History")
    return(
            <div className="ElixirCombier__HorizontalBlock__slide four">
                {props.langSelected == 'FR' ?
                    <div className="ElixirCombier__History">
                        <h3 className="ElixirCombier__History__title">Un peu d'histoire</h3>
                        <p className="ElixirCombier__History__description">
                        C’est en 1852 que Jean-Baptiste Combier met au point la recette de cet élixir inspiré des travaux du célèbre Docteur Raspail. Parmi ses nombreuses recettes médicinales, celle d’une « Liqueur hygiénique de dessert » - censé procurer longue vie et favoriser la digestion. Jean-Baptiste Combier cherche à conserver les vertus de ce breuvage tout en le rendant délicieux. Après de nombreux essais de distillation, l’alchimie fonctionne. Le distillateur décide d’envoyer son élixir amélioré à Raspail, qui la déclare fameuse. Sa lettre de louanges est conservée dans les archives de la distillerie.
                        </p>
                    </div>
                :
                    <div className = "ElixirCombier__History">
                        <h3 className = "ElixirCombier__History__title"> A little history </h3>
                        <p className = "ElixirCombier__History__description">
                        Jean-Baptiste Combier perfected the recipe for his elixir in 1852, inspired by the work of the famous Doctor Raspail. A "Hygienic Dessert Liqueur" to encourage long life and promote digestion figured among Raspail's many therapeutic recipes. Jean-Baptiste Combier sought to preserve the virtues of this beverage while making it taste less medicinal. After many trials, the distiller achieved the alchemy and immediately sent a bottle of the improved elixir to Raspail, who declared it delicious. His letter of praise is kept in the archives of the distillery.
                        </p>
                    </div>
                }
            </div>
    )
}

export default ElixirHistory;