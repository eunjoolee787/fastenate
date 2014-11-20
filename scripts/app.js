$(function(){
  function viewBlogPosts(){

  }
  function viewStudents(){

  }
  $(".blogs").on("click", function(){
    $.ajax({
      type: "GET",
      url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/blog_posts",
      contentType: "application/json",
      data: {
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(response){
        console.log(response);
        for(var i = 0; i < response.length; i++){
          console.log(response[i]);
         var blogContainer = $("<div>");
         // EJL-finish tomorrow
        }
      },
      error: function(request, errorType, errorMessage){
        console.log("ERROR: " + errorMessage);
      }
    });//end ajax
  });

  $(".students").on("click", function(){
    $.ajax({
      type: "GET",
      url:  "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/students",
      contentType: "application/json",
      data: {
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(response){
        console.log(response);
      },
      error: function(request, errorType, errorMessage){
        console.log("ERROR: " + errorMessage);
      }
    });//end ajax
  });

});//document ready

