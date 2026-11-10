// Visual-only parallax follows the game's existing CSS camera. No input interception.
(() => {
  const stage = document.querySelector('#stage');
  const room = document.querySelector('#room');
  if (!stage || !room) return;
  function update() {
    const z = parseFloat(stage.style.getPropertyValue('--rz')) || 0;
    const x = parseFloat(stage.style.getPropertyValue('--rx')) || 52;
    room.style.setProperty('--office-x', (z * -.32).toFixed(1) + 'px');
    room.style.setProperty('--office-y', ((x - 52) * .18).toFixed(1) + 'px');
  }
  new MutationObserver(update).observe(stage, { attributes: true, attributeFilter: ['style'] });
  update();
})();
