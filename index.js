function func()
{
$(document).ready(function(){
    $(".div2").animate({position : 'absolute', margin : '150px 0 0 0'});
});
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    $(document).ready(function(){
      $("#dragTree").css({"width": "350px" , "height":"350px"});
  });
}
