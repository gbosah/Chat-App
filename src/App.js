import React, {useState, useEffect} from 'react';
import Coins from './component/Coins';
import Navbar from './component/Navbar';

function App() {
  
  const [crypto, setCrypto] = useState({coins:[]});
  const [searchCrypto, setSearchCrypto] = useState('');

  const filteredCoins = crypto.coins.filter(coin => {
    return coin.name.toLowerCase().includes(searchCrypto.toLowerCase());
  })

  function handleChange(event) {
    setSearchCrypto(event.target.value)
  }

  //fetch the api data using fetch
  useEffect(() => {
   fetch('https://api.coinstats.app/public/v1/coins?skip=0&')
        .then(res => res.json())
        .then(data => setCrypto(data))
  }, []);
  
  const coinList = filteredCoins.map(lists => {
    return <Coins name={lists.name}
                  symbol={lists.symbol}
                  num={lists.rank}
                  price={lists.price.toLocaleString("en-US")}
                  icon={lists.icon}
                  hourChange={lists.priceChange1d}
                  marketCap={lists.marketCap.toLocaleString("en-US")}
                  availableSupply={lists.availableSupply.toLocaleString("en-US")}
    />

  })
  return (
    <div className='flex-grow'>
      <Navbar handleChange={handleChange}/>
      {coinList}
    </div>
  );
}

export default App;