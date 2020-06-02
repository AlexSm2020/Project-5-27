$(document).ready(function () {

  //Variables established for corresponding search fields
  var inputCountry = "";
  var searchSel = "";


  //function corresponding with that search 

  $("button#Canada").on("click", function (event) {
    event.preventDefault();
    seachSel = "Canada";
    countrySel = "Canada";
    console.log("Canada selected");

  })

  $("button#UnitedStates").on("click", function (event) {
    event.preventDefault();
    searchSel = "United States";
    countrySel = "United States";
    console.log("United States selected");

  })

  $("#submitBtn").on("click", function (event) {
    event.preventDefault();
    console.log("Submit button clicked");
    searchVal();

  })

  function searchVal() {
    if (searchSel == "United States" || searchSel == "Canada") {
      searchFunc();
    }
    return;
  }

  // function modSearch(){
  //   if(searchSel =="United States")
  //   //search by state
  // }

  const endpoints = {
    search: "",
    country: "country",
  };

  //lookup how to filter search
  function searchFunc() {
    $.ajax({
      url: "http://universities.hipolabs.com/search?" + countrySel,
      method: "GET"
    }).then(function (response) {
       console.log("length",response.length);
      console.log(response);
      // let state = response[]
      // if(response)

      // var jsonTest = JSON.stringify(response[0]);
      // console.log(jsonTest);
      ///.log("test", temp);
      // temp = temp["state-province"];
      // console.log("test", temp);
      //console.log("test", typeof(temp));
      //console.log("test", typeof(temp));
      // console.log(Object.getOwnPropertyNames(temp));

      $("<h3>").text("Interested in learning more about " + countrySel + "?").appendTo("#university-info");


      for (var i = 0; i < response.length; i++) {
        var temp = response[i];
        

        if (typeof(temp) !== 'undefined' && temp["state-province"] !== null){
          console.log("test2",temp);
          console.log(i);
  

          // var card = $("<div>").addClass("card col-lg-2 col-sm-4 col-xs-6");
          // var cardBody = $("<div>").addClass("card-body d-flex flex-column justify-content-start align-items-stretch");
          // var thumbnail = $("<img>").addClass("card-img-top");
          // // .attr("src", response.items[i].volumeInfo.imageLinks.thumbnail);
          // var universityName = $("<h5>").addClass("card-title").text(response.items[i].volumeInfo.title);
          // var preview = $("<a>").addClass("card-text").text("Preview");
          // $(preview).attr({ "href": response.items[i].volumeInfo.previewLink, "target": "_blank" });
  
          // $(cardBody).append(universityName, preview);
          // $(card).append(thumbnail, cardBody);
          // $(".schools").append(card);
        }
        if (i == response.length -1 ){console.log(i)};
      }
       

    })


  }
});