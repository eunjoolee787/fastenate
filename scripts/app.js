$(function(){
  function viewBlogPosts(){};
  function viewStudents(){};
$(".one").on("click", function(){});
$(".two").on("click", function(){});
  $.ajax({
  type: GET,
  url: https://api.mongolab.com/api/1/databases/devleague_jquery/collections/blog_posts
  contentType: "application/json",
  data: {
    https://api.mongolab.com/api/1/databases/devleague_jquery/collections/students
  },
  success: function(response){
    console.log(response);
  },
  error: function(request, errorType, errorMessage){
    console.log("ERROR: " + errorMessage);
  }
});

