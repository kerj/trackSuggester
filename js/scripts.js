$(document).ready(function()  {
  $("#quizStart").click(function()  {
     var start = $("input:radio[name=forWho]:checked").val();
    if(start === "team"){
      $("#quizLogic").removeClass();
      $("#companySize").addClass("hidden");
      $("form:first-child").addClass("hidden");
    }else{
      $("#quizLogic").removeClass();
      $("#agency").addClass("hidden")
      $("form:first-child").addClass("hidden");
    }
  });
});
