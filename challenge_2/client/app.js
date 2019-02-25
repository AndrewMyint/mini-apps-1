$(document).ready(function(){
  $('.submit').on('click', (e) => {
    e.preventDefault();
    var json = $('#textarea').val();
    $.ajax({
      url: 'http://localhost:4000/upload_json',
      method: 'POST',
      data: json,
      dataType: 'html',
      contentType: 'text/plain',
      success : function(html) {
         console.log(html)
        $('body').html(html);
        // chaning the url
        window.history.pushState("object or string", "Title", "/upload_json")
      }
    })
  })
})