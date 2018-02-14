$(document).ready(()=>{

  $('#json-form').on('submit', (e)=>{
    e.preventDefault();

    let jsonText =  $('#json-text').val().trim();
    try {
      JSON.parse(jsonText);

      $.post('/',
      {text: jsonText},
      (data) => {
        $('#csv-result').html(JSON.parse(data));
      });

    } catch (error) {
      console.error(error);
    }
  });
});