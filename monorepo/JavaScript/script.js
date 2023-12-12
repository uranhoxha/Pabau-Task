document.addEventListener('DOMContentLoaded', () => {
    const shuffleBtn = document.getElementById('shuffleBtn');
    const changeBtn = document.getElementById('changeBtn');
    const showBtn = document.getElementById('showBtn');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    shuffleBtn.addEventListener('click', () => {
        const checkboxesContainer = document.querySelector('body');
        const checkboxesArray = Array.from(document.querySelectorAll('input[type="checkbox"]'));
      
        checkboxesArray.sort(() => Math.random() - 0.5);
      
        checkboxesContainer.innerHTML = '';
      
        checkboxesArray.forEach(checkbox => {
          const label = document.createElement('label');
          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(checkbox.value));
          checkboxesContainer.appendChild(label);
          checkboxesContainer.appendChild(document.createElement('br'));
        });
      
        checkboxesContainer.appendChild(shuffleBtn);
        checkboxesContainer.appendChild(changeBtn); 
        checkboxesContainer.appendChild(showBtn); 
      });
      
  
    changeBtn.addEventListener('click', () => {
        const newValues = ['New Internship', 'New Pabau', 'New Employment', 'New Career'];
      
        checkboxes.forEach((checkbox, index) => {
          checkbox.value = newValues[index];
      
          
          const label = checkbox.parentElement;
          if (label) {
            label.textContent = '';
            label.appendChild(checkbox); 
            label.appendChild(document.createTextNode(newValues[index]));
          }
        });
      });
      
  
    showBtn.addEventListener('click', () => {
      const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      const selectedValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
  
      const displayArea = document.createElement('div');
      displayArea.textContent = `Selected values: ${selectedValues.join(', ')}`;
      document.body.appendChild(displayArea);
    });
  });
  