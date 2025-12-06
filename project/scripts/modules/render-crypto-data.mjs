export const RenderModule = (() => {
  let container = null;

  const formatPrice = (price) => {
    if (price >= 1) return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return `$${price.toFixed(6)}`;
  };

  const formatMarketCap = (cap) => {
    if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`;
    if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`;
    if (cap >= 1e6) return `$${(cap / 1e6).toFixed(2)}M`;
    if (cap >= 1e3)  return `$${(cap / 1e3).toFixed(2)}K`;
    return `$${cap.toLocaleString()}`;
  };

  const render = (dataArray) => {
    if (!container) return;
    container.innerHTML = ''; 

    dataArray.forEach((coin) => {
    const card = document.createElement('div');
    card.style.cursor = 'pointer';
    card.setAttribute('data-coin-id', coin.id);
    card.classList.add('coin-card','card', 'flex-layout', 'flex-column', 'medium-gap', 'shadow', 'text-background-white', 'neutral-border');

    // Determine arrow SVG and color
    const arrowSVG = coin.price_change_percentage_24h >= 0
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up w-4 h-4"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-down w-4 h-4"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>`;

    const colorClass = coin.price_change_percentage_24h >= 0 ? 'color-green' : 'color-red';

    card.innerHTML = `
      <div class="flex-layout small-gap">
          <img class="square" src="${coin.image}" alt="${coin.name}"/>
          <div>
              <h3 class="coin-name">${coin.name}</h3>
              <p class="text-neutral-dark">${coin.symbol.toUpperCase()}</p>
          </div>
      </div>
      <p class="font-size-medium h2-font-weight">${formatPrice(coin.current_price)}</p>
      <div class="flex-layout medium-gap font-size-normal">
          <p class="flex-layout small-gap ${colorClass}">
              ${arrowSVG}
              ${Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
          </p>
          <p class="text-neutral-dark">MCap: ${formatMarketCap(coin.market_cap)}</p>
      </div>
    `;

    container.appendChild(card);
    });
  };


  return {
    init: (containerSelector) => {
      container = document.querySelector(containerSelector);
    },
    render,
    formatPrice,
    formatMarketCap
  };
})();
