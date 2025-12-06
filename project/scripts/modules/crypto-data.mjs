export const DataModule = (() => {
  let data = [];
  const subscribers = [];
  const REFRESH_INTERVAL = 60000; // refresh interval constant

  // Notify all subscribers
  const notify = () => {
    subscribers.forEach(cb => cb(data));
  };

  //  refresh spinner 
  const spinner = (state) => {
    const refreshBtn = document.getElementById('refresh');

    const svg = refreshBtn.querySelector('svg');

    if (state) svg.classList.add('spin');
    else svg.classList.remove('spin');
  };

  // Show error message 
  const showError = (message) => {
    const container = document.querySelector('#crypto-container');
    if (!container) return

    container.innerHTML = '';

    const error = document.createElement('div');
    error.className = 'color-red padding-hero width-full';
    error.textContent = message;

    container.appendChild(error);
  };

  // Fetch data from public coingecko api
  const fetchData = async () => {
    spinner(true); // start spinner

    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h,7d'
      );
      const result = await response.json();
      data = result;
      notify();
    } catch (err) {
      console.error('Error fetching crypto data:', err);
      showError('Failed to fetch crypto data. Please click refresh.');
    } finally {
      spinner(false); // stop spinner
    }
  };

  return {
    init: () => {
      fetchData();
      setInterval(fetchData, REFRESH_INTERVAL);
    },
    getData: () => data,
    fetchData,
    onUpdate: (subscriber) => {
      if (typeof subscriber === 'function') subscribers.push(subscriber);
    },
  };
})();
