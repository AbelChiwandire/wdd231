import { DataModule } from './modules/crypto-data.mjs';
import { RenderModule } from './modules/render-crypto-data.mjs';
import { simpleSearch } from './modules/search.mjs';
import { CryptoModal } from './modules/modal.mjs';

// attach card listeners helper
const attachCardListeners = () => {
  document.querySelectorAll('.coin-card').forEach(card => {
    card.addEventListener('click', () => {
      const coinId = card.dataset.coinId;
      CryptoModal.open(coinId);
    });
  });
};

// Initialize the render module
RenderModule.init('#crypto-container');

// Wire up the search input
const cryptoSearchInput = document.querySelector('#crypto-search');
simpleSearch(
  cryptoSearchInput,
  () => DataModule.getData(),              
  results => {
    RenderModule.render(results);
    attachCardListeners();
  }
);

// Listen for data updates
DataModule.onUpdate((data) => {
  RenderModule.render(data);
  attachCardListeners(); 
});

// Start initial fetch and auto-refresh 
DataModule.init();

// Refresh button
const refreshBtn = document.getElementById('refresh');

refreshBtn.addEventListener('click', () => {
  DataModule.fetchData(); 
});

