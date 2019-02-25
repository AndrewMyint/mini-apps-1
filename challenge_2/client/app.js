$(document).ready(() => {


  $('form').submit((event) => {
    event.preventDefault();
    var getFile =  document.getElementById('csv-form')
    console.log('******', getFile);
    var fileData = new FormData(getFile)
    console.log('$$$$$$', fileData)

    $.post({
      type: "POST",
      url: '/upload_json',
      data: fileData,
      processData: false,
      contentType: false,
      success: function(data) {
        $('body').html(data);
      }
    });
  });

  $('.download').on('click', function() {
    window.open('/upload_json');
  })

})
