$(function(){
  function viewBlogPosts(event){

    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/blog_posts",
      contentType: "application/json",
      data: {
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(response){
        //response Array of Mongo Documents(json objects)
        //console.log(response);
        for(var i = 0; i < response.length; i++){
          var json_doc = response[i];
          //console.log(json_doc);

          var body_content = $("<div>");
          body_content.addClass("body_content");

          var body_list = $("<div>");
          body_list.addClass("body_list");
          body_content.append(body_list);

          var author_p_element = $("<p>");
          author_p_element.addClass("author");
          author_p_element.html(json_doc.author);
          body_content.append(author_p_element);

          $("#body_container").append(body_content);
        };
      },
        error: function(request, errorType, errorMessage){
        console.log("ERROR: " + errorMessage);
        }
    });//end ajax
  }


  function viewStudents(){

  }
  $("li.blogs").on("click", viewBlogPosts);

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

