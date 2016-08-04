// $(function() {
//   var files
//   // We can attach the `fileselect` event to all file inputs on the page
//   $(document).on('change', ':file', function(event) {
//     var input = $(this),
//         numFiles = input.get(0).files ? input.get(0).files.length : 1,
//         label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
//     input.trigger('fileselect', [numFiles, label]);
//     files = event.target.files;
//     alert('test'+event.target.files)
//   });

//   // We can watch for our custom `fileselect` event like this
//   $(document).ready( function() {
//     alert('test1')
//       $(':file').on('fileselect', function(event, numFiles, label) {
   
//           var input = $(this).parents('.input-group').find(':text'),
//               log = numFiles > 1 ? numFiles + ' files selected' : label;

//           if( input.length ) {
//               input.val(log);
//           } else {
//               if( log ) alert(log);
//           }

//       });
      
//       $('input').on('change', function(event) {
//         event.stopPropagation();
//         event.preventDefault();
//         alert("submit")
//         var data = new FormData();
//         $.each(files, function (key, value) {
//           data.append('choose-file', value);
//         });

//         $.ajax({
//           url: window.location.origin + '/api/fileanalyse/',
//           type: 'POST',
//           data: data,
//           cache: false,
//           processData: false,
//           contentType: false,
//           error: function (jqXHR, textStatus, errorThrown) {
//             alert('ERRORS: ' + textStatus);
//           },
//           success: function (data) {
//             console.log(data);
//             alert('FILE SIZE: ' + data.fileSize);
//           }
//         });
//       })
//   });
// });



$(document).ready(function() {
  
  
    //alert('test1')
    
    
      var files;

      $('input[type=file]').on('change', function(event) {
        files = event.target.files;
        
        
        $("#name").html($(this).val());
        
      });


      $('#submit').on('click', function(event) {
        
        
        event.stopPropagation();
        event.preventDefault();

        var data = new FormData();
        $.each(files, function (id, value) {
          data.append('choose-file', value);
        });

        $.ajax({
          url: window.location.origin + '/api/upload/',
          type: 'POST',
          data: data,
          cache: false,
          processData: false,
          contentType: false,
          error: function (jqXHR, textStatus, errorThrown) {
            alert('ERRORS: ' + textStatus);
          },
          success: function (data) {
            console.log(data);
            alert('FILE SIZE: ' + data.fileSize);
          }
        });
      })
    });