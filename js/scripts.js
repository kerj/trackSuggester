$(document).ready(function()  {
  $("#quizStart").submit(function(event)  {
    event.preventDefault();
     var start = $("input:radio[name=forWho]:checked").val();
    if(start === "team"){
      $("#quizLogic").removeClass();
      $("#companySize").addClass("hidden");
      $("#quizStart").addClass("hidden");
    }else{
      $("#quizLogic").removeClass();
      $("#agency").addClass("hidden")
      $("#quizStart").addClass("hidden");
    }
  });
});
