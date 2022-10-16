const surveyForm = document.getElementById('survey-form');

surveyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {};

  Array.from(e.target.elements).forEach((element) => {
    if (element.nodeName === 'INPUT') {
      if (element.type === 'radio') {
        if (element.checked)
          formData[element.name] = element.value;
      } else {
        formData[element.name] = element.value;
      }
    }
  });
  console.log(formData);
});