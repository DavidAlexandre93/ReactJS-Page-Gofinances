import formatValue from "../../utils/formatValue";

import { TableContainer } from "./styles";

export interface Transaction {
  id: string;
  title: string;
  value: number;
  type: "income" | "outcome";
  category: { title: string };
  created_at: string;
}

type TransactionListProps = {
  transactions: Transaction[];
};

function TransactionList({ transactions }: TransactionListProps) {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="title">{transaction.title}</td>
                <td className={transaction.type}>
                  {formatValue(transaction.value)}
                </td>
                <td>{transaction.category?.title}</td>
                <td>
                  {new Date(transaction.created_at).toLocaleDateString("pt-br")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default TransactionList;