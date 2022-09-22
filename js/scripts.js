jQuery(document).ready(function($){
  $('#wpcd_child_cat_loader, #child_cat_default_text, #taxonomy, #exclude, #include, #random_id, #hide_empty, #show_count').css("display", "none");
  $("select[name=wpcd_parent]").change(function(){
    var current_dropdown = $(this).closest('.wpcd_dropdown_categories');

    var parent_cat = $(this).val();
    var random_class = current_dropdown.find("#random_id").text();
    var child_cat_default_text = current_dropdown.find("#child_cat_default_text").text();
    var taxonomy = current_dropdown.find("#taxonomy").text();
    var child_cats_exclude = current_dropdown.find("#exclude").text();
    var child_cats_include = current_dropdown.find("#include").text();
    var hide_empty = current_dropdown.find("#hide_empty").text();
    var show_count = current_dropdown.find("#show_count").text();
    var child_cat_dropdown_selector = current_dropdown.find("#child_cat_dropdown"+"."+random_class);
    $.ajax({
      url: wpcdajax.ajaxurl,
      type:'GET',
      data: {
        'action': 'wpcd_show_child_cat_dropdown',
        'parent_cat': parent_cat,
        'child_cat_default_text': child_cat_default_text,
        'taxonomy': taxonomy,
        'child_cats_exclude': child_cats_exclude,
        'child_cats_include': child_cats_include,
        'hide_empty': hide_empty,
        'show_count' : show_count
      },
      beforeSend: function() {
        $("#wpcd_child_cat_loader").show();
      },
      complete: function(){
         $("#wpcd_child_cat_loader").hide();
      },
      success: function(response){
        $(child_cat_dropdown_selector).html(response);
        console.log(response);
        $(child_cat_dropdown_selector).find("script").each(function(i) {
            eval($(this).text());
        });
      },
    });
  });
});
