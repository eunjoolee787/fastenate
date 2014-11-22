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

          var body_content = $("<section>");
          body_content.addClass("clearfix");
          body_content.addClass("body_content");

          var kitten = $("<div>");
          kitten.addClass("kitten");
          kitten.css("background-image", "url('"+json_doc.thumbnail+"')");
          body_content.append(kitten);

          var content = $("<div>");
          content.addClass("content");
          content.html(json_doc.content);
          body_content.append(content);

          var section_head = $("<h2>");
          section_head.addClass("section_head");
          section_head.html(json_doc.content);
          body_content.append(section_head);

          var body_info = $("<p>");
          body_info.addClass("body_info");
          body_info.html(json_doc.info);
          body_content.append(body_info);

          var body_tag = $("<p>");
          body_tag.addClass("body_tag");
          body_tag.html(json_doc.body);
          body_content.append(body_tag);

          // var author_p_element = $("<p>");
          // author_p_element.addClass("author");
          // author_p_element.html(json_doc.author);
          // body_content.append(author_p_element);

          $("#body_container").html(body_content);
        };//end of for loop
      },//end of function response
        error: function(request, errorType, errorMessage){
        console.log("ERROR: " + errorMessage);
        }//end of function error
    });//end ajax
  }//end of main function


  function viewStudents(){
  }
  $("li.blogs").on("click", viewBlogPosts);

  $("li.students").on("click", function(){
    $(".body_content").remove();
    
    $.ajax({
      type: "GET",
      url:  "https://api.mongolab.com/api/1/databases/devleague_jquery/collections/students",
      contentType: "application/json",
      data: {
        "apiKey": "QMnw2qjgl4l0LDx3RbN2NRlMEu_vCipC"
      },
      success: function(response){
        // console.log(response);
        var table_table = $("<table>");
        table_table.addClass("body_content");
        //console.table(response);
          // table_row.append(table_head_element);

        for(var i = 0; i < response.length; i++){
          var json_doc = response[i];
          
          var table_row = $("<tr>");
          
          var table_head_element = $("<thead>");
          table_head_element.addClass("table_head");
          table_head_element.html(json_doc.table_head);
          table_head_element.append(table_row);
          table_table.append(table_head_element);

          
          var major_td_element = $("<td>");
          major_td_element.addClass("major");
          major_td_element.html(json_doc.major);
          table_row.append(major_td_element);

          var year_td_element = $("<td>");
          year_td_element.addClass("year");
          year_td_element.html(json_doc.year);
          table_row.append(year_td_element);

          var last_name_td_element = $("<td>");
          last_name_td_element.addClass("last_name");
          last_name_td_element.html(json_doc.last_name);
          table_row.append(last_name_td_element);

          var first_name_td_element = $("<td>");
          first_name_td_element.addClass("first_name");
          first_name_td_element.html(json_doc.first_name);
          table_row.append(first_name_td_element);  

          $("#body_container").html(table_table);
          table_table.append(table_row);
        };
      },

      error: function(request, errorType, errorMessage){
        console.log("ERROR: " + errorMessage);
      }

    });//end ajax
  });
});//document ready

