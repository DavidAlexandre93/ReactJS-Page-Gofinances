import formatValue from "../../utils/formatValue";
import { CardContainer, Card } from "./styles";

export interface Balance {
  income: number;
  outcome: number;
  total: number;
}

type CardsProps = {
  balance: Balance;
};

function Cards({ balance }: CardsProps) {
  return (
    <CardContainer>
      <Card>
        <header>
          <p>Entradas</p>
        </header>
        <h1>{formatValue(balance.income)}</h1>
      </Card>
      <Card>
        <header>
          <p>Saídas</p>
        </header>
        <h1>{formatValue(balance.outcome)}</h1>
      </Card>
      <Card total>
        <header>
          <p>Total</p>
        </header>
        <h1>{formatValue(balance.total)}</h1>
      </Card>
    </CardContainer>
  );
}

export default Cards;