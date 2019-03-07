jQuery(document).ready(function($){
  $('#wpcd_child_cat_loader, #child_cat_default_text, #taxonomy').css("display", "none");
  $("#wpcd_parent").change(function(){
    //alert($(this).val());
    var parent_cat = $(this).val();
    //alert(parent_cat);
    var child_cat_default_text = $("#child_cat_default_text").text();
    //alert(child_cat_default_text);
    var taxonomy = $("#taxonomy").text();
    //alert(taxonomy);
    $.ajax({
      url: wpcdajax.ajaxurl,
      type:'GET',
      data: {
        'action': 'wpcd_show_child_cat_dropdown',
        'parent_cat': parent_cat,
        'child_cat_default_text': child_cat_default_text,
        'taxonomy': taxonomy
      },
      beforeSend: function() {
        $("#wpcd_child_cat_loader").show();
      },
      complete: function(){
         $("#wpcd_child_cat_loader").hide();
      },
      success: function(response){
        //alert(response);
        $("#child_cat_dropdown").html(response);
        //$(this).siblings(".child_cat_dropdown").html("Test");
        $("#child_cat_dropdown").find("script").each(function(i) {
            eval($(this).text());
        });
      },
    });
  });
});
