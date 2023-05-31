import CardContainer from "./card.styles.tsx";
import { Monster } from "../../App.tsx";

export type monsterTypes = {
  monster: Monster;
};
const Card = ({ monster }: monsterTypes) => {
  const { id, name, email } = monster;
  return (
    <CardContainer key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{email} </p>
    </CardContainer>
  );
};

export default Card;
