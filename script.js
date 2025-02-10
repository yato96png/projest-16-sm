let coins = 0;
let clickValue = 1;
let autodigValue = 0;
let environmentValue = 0;
let upgradeClickCost = 10;
let upgradeAutodigCost = 20;
let upgradeEnvironmentCost = 100;
let autodigInterval;

document.getElementById('mine-button').addEventListener('click', () => {
    coins += clickValue;
    updateUI();
});

document.getElementById('upgrade-button').addEventListener('click', () => {
    document.getElementById('upgrade-modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('upgrade-modal').style.display = 'none';
});

document.getElementById('upgrade-click').addEventListener('click', () => {
    if (coins >= upgradeClickCost) {
        coins -= upgradeClickCost;
        clickValue += 1;
        upgradeClickCost = Math.floor(upgradeClickCost * 1.5);
        updateUI();
    }
});

document.getElementById('upgrade-autodig').addEventListener('click', () => {
    if (coins >= upgradeAutodigCost) {
        coins -= upgradeAutodigCost;
        autodigValue += 2;
        upgradeAutodigCost = Math.floor(upgradeAutodigCost * 1.5);
        if (!autodigInterval) {
            autodigInterval = setInterval(() => {
                coins += autodigValue;
                updateUI();
            }, 1000);
        }
        updateUI();
    }
});

document.getElementById('upgrade-environment').addEventListener('click', () => {
    if (coins >= upgradeEnvironmentCost) {
        coins -= upgradeEnvironmentCost;
        environmentValue += 1;
        upgradeEnvironmentCost = Math.floor(upgradeEnvironmentCost * 1.5);
        updateUI();
        // Добавьте здесь логику для изменения фона или добавления объектов на фон
    }
});

function updateUI() {
    document.getElementById('coin-count').textContent = `Монеты: ${coins}`;
    document.getElementById('autodig').textContent = `Автодобыча: ${autodigValue} (+10 сек)`;
}

updateUI();
