export function Footer({ items, isPackedItemsQuantity }) {
  const percents = Math.round((isPackedItemsQuantity / items) * 100);

  return (
    <footer className="footer">
      <p>
        {percents === 100
          ? "You are ready to trip!!!"
          : ` You have ${items} items on your list,and you already packed
        ${isPackedItemsQuantity}(${percents}%)`}
      </p>
    </footer>
  );
}
