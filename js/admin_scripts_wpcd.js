function handle_widget_loading(){
    // your code to run
    jQuery(".wpcd_widget_dropdown_loader").css("display", "none");
    jQuery(".wpcd_select_category").change(function(){
        //alert("hello");
        var selected_cat = jQuery(this).val();
        var exclude_cat_field_id = jQuery(".wpcd_exclude_cat_field_id").text();
        var exclude_cat_field_name = jQuery(".wpcd_exclude_cat_field_name").text();
        var url = "<?php echo admin_url('admin-ajax.php'); ?>";
        //alert("Selected category: " + selected_cat);
        //alert("Field ID: " + exclude_cat_field_id);
        //alert("Field Name: " + exclude_cat_field_name);
        
        jQuery.ajax({
            url:ajaxurl,
            type:'POST',
            dataType: 'html',
            data:{
                'action': 'wpcd_widget_exclude_categories',
                'selected_cat': selected_cat,
                'exclude_cat_field_id': exclude_cat_field_id,
                'exclude_cat_field_name': exclude_cat_field_name
            },
            beforeSend: function() {
              //jQuery(".wpcd_widget_dropdown_loader").show();
            },
            complete: function(){
               jQuery(".wpcd_widget_dropdown_loader").hide();
            },
            success: function(response){
                //jQuery(".selected_cat_sub").css("display", "none");
                jQuery(".selected_cat_sub").html(response);
                //jQuery(".selected_cat_sub").replaceWith(response);
            },
        });
    });
 }

jQuery(document).ready(function($){
    handle_widget_loading();
    //$(".wpcd_widget_dropdown_loader, .wpcd_exclude_cat_field_id,.wpcd_exclude_cat_field_name").css("display", "none");
    /*$(".wpcd_widget_dropdown_loader").css("display", "none");
    $(".wpcd_select_category").change(function(){
        alert("hello");
        var selected_cat = $(this).val();
        var exclude_cat_field_id = $(".wpcd_exclude_cat_field_id").text();
        var exclude_cat_field_name = $(".wpcd_exclude_cat_field_name").text();
        var url = "<?php echo admin_url('admin-ajax.php'); ?>";
        alert("Selected category: " + selected_cat);
        //alert("Field ID: " + exclude_cat_field_id);
        //alert("Field Name: " + exclude_cat_field_name);
        
        $.ajax({
            url:ajaxurl,
            type:'POST',
            dataType: 'html',
            data:{
                'action': 'wpcd_widget_exclude_categories',
                'selected_cat': selected_cat,
                'exclude_cat_field_id': exclude_cat_field_id,
                'exclude_cat_field_name': exclude_cat_field_name
            },
            beforeSend: function() {
              //$(".wpcd_widget_dropdown_loader").show();
            },
            complete: function(){
               $(".wpcd_widget_dropdown_loader").hide();
            },
            success: function(response){
                //$(".selected_cat_sub").css("display", "none");
                $(".selected_cat_sub").html(response);
                //$(".selected_cat_sub").replaceWith(response);
            },
        });
    });*/
});
jQuery(document).on('widget-updated widget-added', handle_widget_loading );
