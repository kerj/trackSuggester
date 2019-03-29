$(document).ready(function()  {
  $("#quizStart").click(function()  {
     var start = $("input:radio[name=forWho]:checked").val();
    if(start === "team"){
      $("#quizLogic").removeClass();
      $("#companySize").addClass("hidden");
      $("form:first-child").addClass("hidden");
      $("#server").addClass("hidden");
      $("#mobileApps").addClass("hidden");
    }else{
      $("#quizLogic").removeClass();
      $("#agency").addClass("hidden")
      $("form:first-child").addClass("hidden");
      $("#server").addClass("hidden");
      $("#mobileApps").addClass("hidden");
    }
  });
  $("#quizLogic").submit(function(event) {
    event.preventDefault();
  

  });
});
