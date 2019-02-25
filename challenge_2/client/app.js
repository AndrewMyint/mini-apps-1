$(document).ready(function () {
  var file;
$('#file').on('change', function(e) {
  file = e.target.files[0];
  console.log(file);
})
  // console.log('******',file);
  $('.submit').on('click', (e) => {
    e.preventDefault();
    // var formData = new FormData('#csv-Form');
    // $.each($('#file')[0].files, (i, file)=> {
    //   formData.append('file-' + i, file);
    // })
    var temp = JSON.stringify(file)
    console.log(temp);
    console.log(file)

    $.ajax({
      url: 'http://localhost:5000/upload_json',
      method: 'POST',
      data: JSON.stringify(file),
      dataType: 'html',
      contentType: 'text/plain',
      processData: false,
      success: function (html) {
        console.log(html)
        // $('body').html(html);
        // chaning the url
        // window.history.pushState("object or string", "Title", "/upload_json")
      }
    })
  })
})