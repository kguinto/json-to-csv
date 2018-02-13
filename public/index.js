$(document).ready(()=>{

  $('#json-form').on('submit', (e)=>{
    e.preventDefault();

    let jsonText =  $('#json-text').val();
    console.log(jsonText);

    try {
      JSON.parse(jsonText);

      console.log('Sending POST : ', {text: jsonText});
      $.post('/',
      jsonText,
      (data) => {
        console.log(data);
      })

    } catch (error) {
      console.error(error);
    }


  });

});