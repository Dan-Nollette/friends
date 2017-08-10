$(document).ready(function(){
  $("#friendsGender").submit(function(event){
    var gender = $("input:radio[name=gender]:checked").val();
    alert(gender);
    if(gender === 'Male'){
      $('#guysForm').show();
    }
      else $('#girlsForm').show();
    (event).preventDefault();
  });
  $("#guysForm").submit(function(event){
    var goodJob = $("#goodJob").val();
    var roommates = $("#roommates").val();
    if (goodJob === 'yes') {
      if (roommates === 'yes') {
        $(".character").hide();
        $("#chan").show();
      } else {
        $(".character").hide();
        $('#rossG').show();
      }
    } else {
      if (roommates === 'yes') {
        $(".character").hide();
        $('#joe').show();
      } else {
        $(".character").hide();
        $('#gun').show();
      }
    }
    (event).preventDefault();
  });
  $("#girlsForm").submit(function(event){
    var chandler = $("#chandler").val();
    var grewUpTogether = $("#grewUpTogether").val();
    if (chandler === 'yes') {
      if (grewUpTogether === 'yes') {
        $(".character").hide();
        $('#mon').show();
      } else {
        $(".character").hide();
        $('#jan').show();
      }
    } else {
      if (grewUpTogether === 'yes') {
        $(".character").hide();
        $('#rach').show();
      } else {
        $(".character").hide();
        $('#phoebes').show();
      }
    }
    (event).preventDefault();
  });
});
