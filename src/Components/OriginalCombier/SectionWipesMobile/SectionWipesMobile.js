import OriginalManufacturing from '../SectionWipesOriginal/OriginalManufacturing/OriginalManufacturing';
import OriginalManufacturing2 from '../SectionWipesOriginal/OriginalManufacturing2/OriginalManufacturing2';
import OriginalHistory from '../SectionWipesOriginal/OriginalHistory/OriginalHistory';
import OriginalCocktail from '../SectionWipesOriginal/OriginalCocktail/OriginalCocktail';

import "./SectionWipesMobile.css"

const SectionWipesMobile = (props) => {
    return (
        <div className="SectionWipesMobile">
            <OriginalManufacturing langSelected={props.langSelected}/>
            <OriginalManufacturing2 langSelected={props.langSelected}/>
            <OriginalHistory langSelected={props.langSelected}/>
            <OriginalCocktail langSelected={props.langSelected}/>
        </div>
    )
}

export default SectionWipesMobile