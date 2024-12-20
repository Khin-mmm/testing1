const button = document.querySelector('.cta-button');
const treeImage = document.querySelector('.tree-image');

button.addEventListener('mouseover', () => {
  treeImage.style.backgroundImage = "url('./images/glowing_tree1.png')";
});

button.addEventListener('mouseout', () => {
  treeImage.style.backgroundImage = "url('./images/normal_tree1.png')";
});