$(document).ready(function()  {
  $("#cSharp,#ruby,#java,#php,#diverseIntrest").hide();
  $("button").click(function()  {
    $("button").animate({letterSpacing: "+=5px"});
  });
  $("#quizStart").click(function()  {
     var start = $("input:radio[name=computer]:checked").val();
    if (start) {
      $("#quizLogic").removeClass();
      $("#companySize").addClass("hidden");
      $("form:first-child").addClass("hidden");
      $("#server").addClass("hidden");
      $("#mobileApps").addClass("hidden");
      $("#forWho").addClass("hidden");
    }else {
      alert("Please select an answer");
    };
  });
  $("#quizLogic").submit(function(event) {
    event.preventDefault();
    var companySize = $("input:radio[name=companySize]:checked").val();
    var agency = $("input:radio[name=agency]:checked").val();
    var server = $("input:radio[name=servers]:checked").val();
    var mobileApps = $("input:radio[name=mobile]:checked").val();
    var forWho = $("input:radio[name=forWho]:checked").val();

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
      $("#forWho").removeClass();
    }else if (companySize && mobileApps) {
      $("#agency").removeClass();
      $("#mobileApps").hide();
    }else{
      alert("Please select an answer");
    };
    if (companySize && agency && server && mobileApps && forWho) {
      if (companySize === "largeCompany" && forWho === "team" && agency === "no") {
        $("#cSharp").fadeIn();
      }else if (companySize === "startUp" && server === "ui") {
        $("#ruby").fadeIn();
      }else if (companySize === "largeCompany" && mobileApps === "proMobile" && forWho === "public") {
        $("#java").fadeIn();
      }else if (forWho === "team" && server === "serverside") {
        $("#php").fadeIn();
      }else{
        $("#diverseIntrest").fadeIn();
      }
    }
  });
});
