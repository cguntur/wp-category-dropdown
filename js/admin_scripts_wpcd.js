jQuery(document).ready(function($){
    //$(".wpcd_widget_dropdown_loader, .wpcd_exclude_cat_field_id,.wpcd_exclude_cat_field_name").css("display", "none");
    $(".wpcd_select_category").change(function(){
        alert("hello");
        var selected_cat = $(this).val();
        var exclude_cat_field_id = $(".wpcd_exclude_cat_field_id").text();
        var exclude_cat_field_name = $(".wpcd_exclude_cat_field_name").text();
        var url = "<?php echo admin_url('admin-ajax.php'); ?>";
        alert("Submitting to URL: " + ajaxurl);
        $(".selected_category").text(selected_cat);
        $.ajax({
            url:ajaxurl,
            type:'GET',
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
               //$(".wpcd_widget_dropdown_loader").hide();
            },
            success: function(response){
                //$(".selected_cat_sub").css("display", "none");
                $(".selected_cat_sub").html(response);
                //$(".selected_cat_sub").replaceWith(response);
            },
        });
    });
});
