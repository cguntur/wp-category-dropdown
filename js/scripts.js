jQuery(document).ready(function($){
  $('#wpcd_child_cat_loader, #child_cat_default_text, #taxonomy, #exclude, #include, #random_id').css("display", "none");
  $("select[name=wpcd_parent]").change(function(){
    var parent_cat = $(this).val();
    var random_class = $(this).parent().parent().children("#random_id").text();
    var child_cat_default_text = $("#child_cat_default_text").text();
    var taxonomy = $(this).parent().parent().children("#taxonomy").text();
    var child_cats_exclude = $("#exclude").text();
    var child_cats_include = $("#include").text();
    var child_cat_dropdown_selector = "#child_cat_dropdown"+"."+random_class;
    $.ajax({
      url: wpcdajax.ajaxurl,
      type:'GET',
      data: {
        'action': 'wpcd_show_child_cat_dropdown',
        'parent_cat': parent_cat,
        'child_cat_default_text': child_cat_default_text,
        'taxonomy': taxonomy,
        'child_cats_exclude': child_cats_exclude,
        'child_cats_include': child_cats_include
      },
      beforeSend: function() {
        $("#wpcd_child_cat_loader").show();
      },
      complete: function(){
         $("#wpcd_child_cat_loader").hide();
      },
      success: function(response){
        $(child_cat_dropdown_selector).html(response);
        $(child_cat_dropdown_selector).find("script").each(function(i) {
            eval($(this).text());
        });
      },
    });
  });
});
