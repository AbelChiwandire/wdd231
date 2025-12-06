import { DataModule } from './crypto-data.mjs';
import { RenderModule } from './render-crypto-data.mjs';

export const CryptoModal = (() => {
    const dialog = document.querySelector('dialog');
    const content = document.querySelector('#crypto-dialog-content');
    
    function formatTotalVolume(value) {
        const num = Number(value);

        if (!num || isNaN(num)) return "N/A"; // handle missing numbers

        if (num >= 1e12) return (num / 1e12).toFixed(2) + "T";
        if (num >= 1e9)  return (num / 1e9).toFixed(2)  + "B";
        if (num >= 1e6)  return (num / 1e6).toFixed(2)  + "M";
        if (num >= 1e3)  return (num / 1e3).toFixed(2)  + "K";

        return String(num);
    }

  // Opens the modal for a given coinId
  const open = (coinId) => {

    const data = DataModule.getData();
    const coin = data.find(c => c.id === coinId);

    if (!coin) {
      console.error(`Coin with id "${coinId}" not found.`);
      return;
    }

    const colorClass24 = coin.price_change_percentage_24h >= 0 ? 'color-green' : 'color-red';
    const colorClass7d = coin.price_change_percentage_7d_in_currency >= 0 ? 'color-green' : 'color-red';

    content.innerHTML = '';
    content.innerHTML = `
        <button type="button" id="close-modal" class="flex-layout flex-center">
            ${`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`}
        </button>
        <div class="flex-layout small-gap">
            <img class="square" src="${coin.image}" alt="${coin.name}"/>
            <div>
                <h3>${coin.name}</h3>
                <p class="text-neutral-dark">${coin.symbol.toUpperCase()}</p>
            </div>
        </div>

        <div>
            <h4 class="font-size-normal text-neutral-dark font-light-weight">Current Price</h4>
            <p class="font-size-medium h2-font-weight">${RenderModule.formatPrice(coin.current_price)}</p>
        </div>

        <div class="flex-layout large-gap font-size-normal">
            <div>
                <h4 class="font-size-normal text-neutral-dark font-light-weight">24h Change</h4>
                <p class="${colorClass24}">${coin.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div>
                <h4 class="font-size-normal text-neutral-dark font-light-weight">7d Change</h4>
                <p class="${colorClass7d}">${coin.price_change_percentage_7d_in_currency.toFixed(2)}%</p>
            </div>
        </div>

        <div>
            <h4 class="font-size-normal text-neutral-dark font-light-weight">Market Cap</h4>
            <p class="text-neutral-dark">${RenderModule.formatMarketCap(coin.market_cap)}</p>
        </div>

        <div>
            <h4 class="font-size-normal text-neutral-dark font-light-weight">24h Trading Volume</h4>
            <p>$${formatTotalVolume(coin.total_volume)}</p>
        </div>

        <div class="flex-layout large-gap">
            <div>
                <h4 class="font-size-normal text-neutral-dark font-light-weight">24h high</h4>
                <p class="color-green">${RenderModule.formatPrice(coin.high_24h)}</p>
            </div>

            <div>
                <h4 class="font-size-normal text-neutral-dark font-light-weight">24h low</h4>
                <p class="color-red">${RenderModule.formatPrice(coin.low_24h)}</p>
            </div>
        </div>
    `;

    // Show the dialog
    dialog.showModal();
/*
    dialog.classList.add('');

    dialog.addEventListener('animationend', () => {
        dialog.classList.remove('');
    }, { once: true });
 */   
    // Close button listener
    content.querySelector('#close-modal').addEventListener('click', close);
  };

  const close = () => {
    dialog.close(); 
  };

  return { open, close };
})();
