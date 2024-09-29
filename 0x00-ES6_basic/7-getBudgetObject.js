export default function getSanFranciscoDescription(income, gdp, capita) {
    const year = 2017;
    const budget = {
      income,
      gdp,
      capita,
    };
  
    return `As of ${year}, it was the seventh-highest income county in the United States, 
              with a per capita personal income of ${income}. As of 2015, San Francisco 
              proper had a GDP of ${gdp}, and a GDP per capita of ${capita}.`;
  }
  