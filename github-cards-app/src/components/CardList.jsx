import Card from "./Card";

const CardList = (props) => {
    return(
        <div className="container">
            {props.profiles.map((profile, index) => <Card key={profile.id} {...profile} />)}
        </div>
    );
}
export default CardList;