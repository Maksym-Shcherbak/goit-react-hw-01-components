export const Transaction = ({
  transactionType,
  transactionAmount,
  transactionCurrency,
}) => {
  return (
    <tr>
      <td>{transactionType}</td>
      <td>{transactionAmount}</td>
      <td>{transactionCurrency}</td>
    </tr>
  );
};
