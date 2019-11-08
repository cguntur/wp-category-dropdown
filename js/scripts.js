jQuery(document).ready(function($){
  $('#wpcd_child_cat_loader, #child_cat_default_text, #taxonomy').css("display", "none");
  $("#wpcd_parent").change(function(){
    var parent_cat = $(this).val();
    var child_cat_default_text = $("#child_cat_default_text").text();
    var taxonomy = $("#taxonomy").text();
    alert(parent_cat);
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
        $("#child_cat_dropdown").html(response);
        $("#child_cat_dropdown").find("script").each(function(i) {
            eval($(this).text());
        });
      },
    });
  });
});
