export default function getFormDataById(form_id) {
  let formData = new FormData(document.getElementById(form_id));

  let data = {};
  formData.forEach(function(value, key) {
    data[key] = value;
  });
  return data;
}
