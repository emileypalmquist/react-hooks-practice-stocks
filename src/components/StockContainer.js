import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ addStockToPortfolio }) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((resp) => resp.json())
      .then((data) => setStocks(data));
  }, []);

  const renderStocks = stocks.map((stock) => (
    <Stock
      key={stock.id}
      stock={stock}
      handleStockClick={addStockToPortfolio}
    />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
