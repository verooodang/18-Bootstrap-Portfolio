$('.carousel').carousel({
    interval: 2000
  })
  
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
