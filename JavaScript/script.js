document.addEventListener('DOMContentLoaded', () => {
    const shuffleBtn = document.getElementById('shuffleBtn');
    const changeBtn = document.getElementById('changeBtn');
    const showBtn = document.getElementById('showBtn');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
    shuffleBtn.addEventListener('click', () => {
        const checkboxesContainer = document.querySelector('body');
        const checkboxesArray = Array.from(document.querySelectorAll('input[type="checkbox"]'));
      
        checkboxesArray.sort(() => Math.random() - 0.5); // Shuffle the checkboxes
      
        checkboxesContainer.innerHTML = ''; // Clear the container
      
        checkboxesArray.forEach(checkbox => {
          const label = document.createElement('label');
          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(checkbox.value));
          checkboxesContainer.appendChild(label);
          checkboxesContainer.appendChild(document.createElement('br'));
        });
      
        checkboxesContainer.appendChild(shuffleBtn); // Re-append the shuffle button
        checkboxesContainer.appendChild(changeBtn); // Re-append the change button
        checkboxesContainer.appendChild(showBtn); // Re-append the show button
      });
      
  
    changeBtn.addEventListener('click', () => {
        const newValues = ['New Internship', 'New Pabau', 'New Employment', 'New Career'];
      
        checkboxes.forEach((checkbox, index) => {
          checkbox.value = newValues[index]; // Update the checkbox value
      
          // Find the label associated with the checkbox
          const label = checkbox.parentElement;
          if (label) {
            label.textContent = ''; // Clear label content
            label.appendChild(checkbox); // Re-append the checkbox
            label.appendChild(document.createTextNode(newValues[index])); // Add new text node
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
  