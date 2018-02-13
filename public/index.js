$(document).ready(()=>{

  $('#json-form').on('submit', (e)=>{
    e.preventDefault();

    let jsonText =  $('#json-text').val().trim();
    console.log(jsonText);

    try {
      JSON.parse(jsonText);

      console.log('Sending POST : ',
      { text: jsonText});

      $.post('/',
      {text: jsonText},
      (data) => {
        console.log(data);
        $('#csv-result').html(data);
      })

    } catch (error) {
      console.error(error);
    }


  });

});