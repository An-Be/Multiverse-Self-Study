import utils from "../utils";

const Stars = props => {
    return(
        <>
            {utils.range(1, props.stars).map(starId =>
            <div key={starId} className="star" />)}
        </>
    );
}
export default Stars;