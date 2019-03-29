$(document).ready(function()  {
  $("#cSharp,#ruby,#java,#php").hide();
  $("#quizStart").click(function()  {
     var start = $("input:radio[name=forWho]:checked").val();
    if(start === "team"){
      $("#quizLogic").removeClass();
      $("#companySize").addClass("hidden");
      $("form:first-child").addClass("hidden");
      $("#server").addClass("hidden");
      $("#mobileApps").addClass("hidden");
      $("#computerPref").addClass("hidden");
    }else if (start != "team" && start != "public") {
      alert("Please select an answer")
    }else{
      $("#quizLogic").removeClass();
      $("#agency").addClass("hidden")
      $("form:first-child").addClass("hidden");
      $("#server").addClass("hidden");
      $("#mobileApps").addClass("hidden");
      $("#computerPref").addClass("hidden");
    };
  });
  $("#quizLogic").submit(function(event) {
    event.preventDefault();
    var companySize = $("input:radio[name=companySize]:checked").val();
    var agency = $("input:radio[name=agency]:checked").val();
    var server = $("input:radio[name=servers]:checked").val();
    var mobileApps = $("input:radio[name=mobile]:checked").val();
    var computerPref = $("input:radio[name=computer]:checked").val();

    if (companySize && !mobileApps) {
      $("#companySize").hide();
      $("#mobileApps").removeClass();
    }else if (companySize && server && !mobileApps) {
      $("#companySize").hide();
      $("#mobileApps").removeClass();
    }else if (agency && !mobileApps && !server) {
      $("#agency").hide();
      $("#server").removeClass();
    }else if (server && !companySize) {
      $("#server").hide();
      $("#companySize").removeClass();
    }else if (agency && mobileApps) {
      $("#mobileApps").hide();
      $("#agency").hide();
      $("#computerPref").removeClass();
    }else if (companySize && mobileApps) {
      $("#agency").removeClass();
      $("#mobileApps").hide();
    }else{
      alert("Please select an answer");
    };
    $("#cSharp").show();
  });
});
