import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = async () => {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    setConvertedAmount(convertedAmount);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  return (
    <div className="myContainer">
    <div className="cashContainer">
      <h1>Currency Converter</h1>
      <h2>Reads the (free) Exchange Rate API</h2>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>From:</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">YEN</option>
          <option value="CAD">CAD</option>
          <option value="CNY">CNY</option>
          <option value="HUF">HUF</option>
        </select>
      </div>
      <div>
        <label>To:</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">YEN</option>
          <option value="CAD">CAD</option>
          <option value="CNY">CNY</option>
          <option value="HUF">HUF</option>
        </select>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {convertedAmount && (
        <p>
          Converted Amount: {amount} {fromCurrency} = {convertedAmount}{' '}
          {toCurrency}
        </p>
      )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
