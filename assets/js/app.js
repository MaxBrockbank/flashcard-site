$(document).ready(function(){
  $("#FC1 .term").click(function(){
    $("#FC1 .term").fadeToggle();
    $("#FC1 .def").delay(500).fadeToggle();
  })
  $("#FC1 .def").click(function(){
    $("#FC1 .def").fadeToggle();
    $("#FC1 .term").delay(500).fadeToggle();
  })
  $("#FC1 .der").click(function(){
    $("#FC1 .def").fadeToggle();
    $("#FC1 .term").delay(500).fadeToggle();
  })
  $("#FC2 .term").click(function(){
    $("#FC2 .term").fadeToggle();
    $("#FC2 .def").delay(500).fadeToggle();
  })
  $("#FC2 .def").click(function(){
    $("#FC2 .def").fadeToggle();
    $("#FC2 .term").delay(500).fadeToggle();
  })
  $("#FC3 .term").click(function(){
    $("#FC3 .term").fadeToggle();
    $("#FC3 .def").delay(500).fadeToggle();
  })
  $("#FC3 .def").click(function(){
    $("#FC3 .def").fadeToggle();
    $("#FC3 .term").delay(500).fadeToggle();
  })
})