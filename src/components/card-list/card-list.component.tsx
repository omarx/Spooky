import CardListDiv from "./card-list.styles.tsx";
import Card from "../card/card.component.tsx";
import { Monster } from "../../App.tsx";

type CardListProps = {
  monster: Monster[];
};

const CardList = ({ monster }: CardListProps) => (
  <CardListDiv>
    {monster.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </CardListDiv>
);

export default CardList;
