import react from "react";
import Masonry from "react-masonry-css";

import ElixirTrain from "../../../../assets/affiche_joueur_carte_1887_6_2fi34.jpg"
import ElixirRaspail from "../../../../assets/portrait_raspail.jpg"
import ElixirHD from "../../../../assets/Exilir2485_HD.jpg"
import Elixir2482HD from "../../../../assets/Exilir2482_HD.jpg"
import ElixirCartonBleu from "../../../../assets/carton_bleu_elixir_4_2fi90.jpg"
import ElixirColette from "../../../../assets/extrait_colette.jpg"
import ElixirAffiche from "../../../../assets/affiche_elixir.jpg"
import ElixirAffiche01 from "../../../../assets/affiche01_elixir.jpg"
import ElixirAffiche02 from "../../../../assets/affiche02_elixir.jpg"
import ElixirTestament from "../../../../assets/archive_petit_courrier_elixir_01-1912.jpg"
import ElixirGigi from "../../../../assets/gigi-italian-movie-poster.jpeg"

import "./ElixirGallery.css"

const ElixirGallery = () => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

    var items = [
    {id: 1, name: 'My First Item', img: ElixirRaspail},
    {id: 2, name: 'Another item', img: ElixirColette},
    {id: 3, name: 'Third Item', img: ElixirCartonBleu},
    {id: 4, name: 'Here is the Fourth', img: ElixirAffiche},
    {id: 5, name: 'High Five', img: ElixirHD},
    {id: 6, name: 'High Five', img: ElixirHD}
    ];
    
    // Convert array to JSX items
    items = items.map(function(item) {
        return <div key={item.id}>
                    <img className="gallery_img" src={item.img} alt="" />
                    <p>{item.name}</p>
                </div>
    });

    return(
        <div id="ElixirGallery">
           <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {items}
            </Masonry>
        </div>
    )
}

export default ElixirGallery