// Handle template selection
function selectTemplate(templateId) {
    const editor = document.getElementById('editor');
    const cardPreview = document.getElementById('card-preview');
  
    editor.classList.remove('hidden');
  
   
  }
  
  // Handle live text updates
  function updatePreview() {
    const eventName = document.getElementById('event-name-input').value;
    const eventDate = document.getElementById('event-date-input').value;
    const eventLocation = document.getElementById('event-location-input').value;
  
    document.getElementById('event-name').innerText = eventName || "Event Name";
    document.getElementById('event-date').innerText = eventDate || "Event Date";
    document.getElementById('event-location').innerText = eventLocation || "Event Location";
  }
  
  // Handle image upload
  document.getElementById('image-upload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const uploadedImage = document.getElementById('uploaded-image');
        uploadedImage.src = e.target.result;
        // uploadedImage.classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Download the final card
  function downloadCard() {
    const card = document.getElementById('card-preview');
    html2canvas(card).then(canvas => {
      const link = document.createElement('a');
      link.download = 'invitation-card.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  }
  
  // Attach input listeners for live updates
  document.querySelectorAll('#editor-form input[type="text"]').forEach(input => {
    input.addEventListener('input', updatePreview);
  });
  