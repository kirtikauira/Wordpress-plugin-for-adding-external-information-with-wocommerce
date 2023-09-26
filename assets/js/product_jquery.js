jQuery(document).ready(function($){
	jQuery.ajax({
		url : ajax_url,
		type : "POST",
		data : {
			action : 'get_all_the_products'
		},
		success : function( response ){
			res = JSON.parse(response);
			jQuery.each(res, function(i, item){
				jQuery(".products").children("li").each(function(){
					current_product_shop = jQuery(this).find(".add_to_cart_button").data("product_id");
					if(item == current_product_shop){
						jQuery(this).find(".add_to_cart_button").hide();
					}
				});
			});
		}
	});
	jQuery("#usage_multifocal").click(function(){
		jQuery(".content").animate({ scrollTop: $(".content").height() }, "slow"); 
	});
	jQuery("#lens_type_light_adjusting").click(function(){
		jQuery(".content").animate({ scrollTop: $(".content").height() }, "slow"); 
	});
	jQuery("#sun_lens_polarized_colour").click(function(){
		jQuery(".content").animate({ scrollTop: $(".content").height() }, "slow"); 
	});
	jQuery("#sun_lens_mirrored_colour").click(function(){
		jQuery(".content").animate({ scrollTop: $(".content").height() }, "slow"); 
	});
});


jQuery(document).ready(function(){
	add_to_cart = "disabled";
	usage="";
	current_page="usage";
	usage_price = 0;
	lightadjusting_price = 0;
	lensoption_price = 0;
	customizelens_price = 0;
	bluelight_price = 0;
	sunlens_price = 0;
	
	jQuery("#go_next").click(function(){
		jQuery(".container_popup").css("display","none");
		jQuery("body").removeClass("lens_body");
	});
	
	jQuery("#close_lenses_popup").click(function(){
		jQuery(".container_popup").css("display","none");
		jQuery("body").removeClass("lens_body");
	});
	
	jQuery("#left_pd_label").hide();
	jQuery("#right_pd_label").hide();
	
	jQuery(".wizard_panel_contentBbox").siblings("div").hide();
	
	jQuery(".wizard_panel_contentBbox").click(function(){
		jQuery(this).siblings(".event_rx__rx_option").toggle(200);
	});

	jQuery.ajax({
		url : ajax_url,
		type : "POST",
		data : {
			action : 'get_product',
			product_id : product_id,
		},
		success : function( response ){
			if(response == 'true'){
				if(product_type == 'Eyeglasses'){
					jQuery("#button_here").html('<button id="show_lenses_popup">Show Lenses</button>');
					jQuery("#show_lenses_popup").click(function(){
						jQuery(".container_popup").css("display","flex");
						jQuery("body").addClass("lens_body");
					});
					var price_cat = 'Usage';
					product_final_price = 0;
				
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_additional_price',
							product_id : product_id,
							price_cat : price_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							jQuery("#usage_multifocal_bifocal").children("span").append(" - "+currency_symbol+" "+res.price_data.bifocal_additional_price);
								bifocal_additional_price = res.price_data.bifocal_additional_price;
							jQuery("#usage_multifocal_progressive").children("span").append(" - "+currency_symbol+" "+res.price_data.progressive_additional_price);
								progressive_additional_price = res.price_data.progressive_additional_price;
							jQuery("#usage_multifocal_premium").children("span").append(" - "+currency_symbol+" "+res.price_data.premium_additional_price);
								premium_additional_price = res.price_data.premium_additional_price;
						},
					});
				
					price_cat = 'LightAdjusting';
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_additional_price',
							product_id : product_id,
							price_cat : price_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							jQuery("#lens_type_photochronic").children("span").append(" - "+currency_symbol+" "+res.price_data.photochromic_additional_price);
								photochronic_additional_price = res.price_data.photochromic_additional_price;
							jQuery("#lens_type_signature").children("span").append(" - "+currency_symbol+" "+res.price_data.trasitions_Signature_additional_price);
								signature_additional_price = res.price_data.trasitions_Signature_additional_price;
							jQuery("#lens_type_xtractive").children("span").append(" - "+currency_symbol+" "+res.price_data.transitions_xtrative_additional_price);
								xtractive_additional_price = res.price_data.transitions_xtrative_additional_price;
						},
					});
				
					price_cat = 'Clear';
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_additional_price',
							product_id : product_id,
							price_cat : price_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							jQuery("#lens_options_basic_lens").children(".option-title").children("span").append(" - "+currency_symbol+" "+res.price_data.basic_lenses_additional_price);
								basic_lenses_additional_price = res.price_data.basic_lenses_additional_price;
							jQuery("#lens_options_most_popular_lenses").children(".option-title").children("span").append(" - "+currency_symbol+" "+res.price_data.most_popular_lenses_additional_price);
								most_popular_lenses_additional_price = res.price_data.most_popular_lenses_additional_price;
							jQuery("#lens_options_advanced_lens").children(".option-title").children("span").append(" - "+currency_symbol+" "+res.price_data.advanced_lenses_additional_price);
								advanced_lenses_additional_price = res.price_data.advanced_lenses_additional_price;
						},
					});
				
					price_cat = 'BlueLight';
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_additional_price',
							product_id : product_id,
							price_cat : price_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							jQuery("#blue_light_blocking_ebdblue15").children("span").append(" - "+currency_symbol+" "+res.price_data.ebdblue_15_additional_price);
								ebdblue_15_additional_price = res.price_data.ebdblue_15_additional_price;
							jQuery("#blue_light_blocking_ebdblue16").children("span").append(" - "+currency_symbol+" "+res.price_data.ebdblue_16_additional_price);
								ebdblue_16_additional_price = res.price_data.ebdblue_16_additional_price;
							jQuery("#blue_light_blocking_ebdblue167").children("span").append(" - "+currency_symbol+" "+res.price_data.ebdblue_167_additional_price);
								ebdblue_167_additional_price = res.price_data.ebdblue_167_additional_price;
							jQuery("#blue_light_blocking_ebdblue174").children("span").append(" - "+currency_symbol+" "+res.price_data.ebdblue_174_additional_price);
								ebdblue_174_additional_price = res.price_data.ebdblue_174_additional_price;
						},
					});
				
					price_cat = 'CustomizeLens';
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_additional_price',
							product_id : product_id,
							price_cat : price_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							jQuery("#customize_lens_15_index_lens").children("span").append(" - "+currency_symbol+" "+res.price_data.customize_index_15_additional_price);
								customize_index_15_additional_price = res.price_data.customize_index_15_additional_price;
							jQuery("#customize_lens_157_index_lens").children("span").append(" - "+currency_symbol+" "+res.price_data.customize_index_157_additional_price);
								customize_index_157_additional_price = res.price_data.customize_index_157_additional_price;
							jQuery("#customize_lens_159_index_lens").children("span").append(" - "+currency_symbol+" "+res.price_data.customize_index_159_additional_price);
								customize_index_159_additional_price = res.price_data.customize_index_159_additional_price;
							jQuery("#customize_lens_16_index_lens").children("span").append(" - "+currency_symbol+" "+res.price_data.customize_index_16_additional_price);
								customize_index_16_additional_price = res.price_data.customize_index_16_additional_price;
							jQuery("#customize_lens_167_index_lens").children("span").append(" - "+currency_symbol+" "+res.price_data.customize_index_167_additional_price);
								customize_index_167_additional_price = res.price_data.customize_index_167_additional_price;
							jQuery("#customize_lens_174_index_lens").children("span").append(" - "+currency_symbol+" "+res.price_data.customize_index_174_additional_price);
								customize_index_174_additional_price = res.price_data.customize_index_174_additional_price;
						},
					});
					
				
					price_cat = 'SunLens';
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_additional_price',
							product_id : product_id,
							price_cat : price_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							jQuery("#sun_lens_basic_colour").children(".option-title").children("span").append(" - "+currency_symbol+" "+res.price_data.basic_tint_additional_price);
								basic_tint_additional_price = res.price_data.basic_tint_additional_price;
							jQuery("#sun_lens_gradient_colour").children(".option-title").children("span").append(" - "+currency_symbol+" "+res.price_data.gradient_tint_lenses_additional_price);
								gradient_tint_lenses_additional_price = res.price_data.gradient_tint_lenses_additional_price;
							jQuery("#sun_lens_mirrored_colour").children(".option-title").children("span").append(" - "+currency_symbol+" "+res.price_data.mirrored_tint_additional_price);
								mirrored_tint_additional_price = res.price_data.mirrored_tint_additional_price;
							jQuery("#polarized_basic_tint_colour").children("span").append(" - "+currency_symbol+" "+res.price_data.polarized_basic_tint_additional_price);
								polarized_basic_tint_additional_price = res.price_data.polarized_basic_tint_additional_price;
							jQuery("#polarized_mirrored_tint_colour").children("span").append(" - "+currency_symbol+" "+res.price_data.polarized_mirrored_tint_additional_price);
								polarized_mirrored_tint_additional_price = res.price_data.polarized_mirrored_tint_additional_price;
						},
					});
					
				
					color_cat = 'SunLensColour';
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_lens_colors',
							product_id : product_id,
							color_cat : color_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							basic_lens_colors = Object.assign({},res.color_data.basic_lens_tint_colours.split("|"));
							basic_colours_selectors = "";
							jQuery.each(basic_lens_colors , function(i,item){
								basic_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery("#tint_strength_basic_lens").children(".option__holder_color_holder").children("#col").html(basic_colours_selectors);
				
				
							gradient_lens_colors = Object.assign({},res.color_data.gradient_lens_tint_colours.split("|"));
							gradient_colours_selectors = "";
							jQuery.each(gradient_lens_colors , function(i,item){
								gradient_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery("#tint_strength_gradient_lens").children(".option__holder_color_holder").children("#col").html(gradient_colours_selectors);
				
				
							mirrored_lens_colors = Object.assign({},res.color_data.mirrored_lens_tint_colours.split("|"));
							mirrored_colours_selectors = "";
							jQuery.each(mirrored_lens_colors , function(i,item){
								mirrored_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery("#tint_strength_mirrored_lens").children(".option__holder_color_holder").children("#col").html(mirrored_colours_selectors);
				
							jQuery(".grid_span_2").children(".option__holder_color_holder").children(".col").children("a").click(function(){
								jQuery(this).addClass("active");
								jQuery(this).siblings("a").removeClass("active");
							});
				
				
							polarized_basic_tint = Object.assign({},res.color_data.polarized_basic_lens_tint_colours.split("|"));
							polarized_basic_colours_selectors = "";
							jQuery.each(polarized_basic_tint , function(i,item){
								polarized_basic_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery(".main_parent_polarized_basic").children(".right").children(".option__holder_color_holder").children(".col").html(polarized_basic_colours_selectors);
				
				
							polarized_mirrored_tint = Object.assign({},res.color_data.polarized_mirrored_lens_tint_colours.split("|"));
							polarized_mirrored_colours_selectors = "";
							jQuery.each(polarized_mirrored_tint , function(i,item){
								polarized_mirrored_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery(".main_parent_polarized_mirrored").children(".right").children(".option__holder_color_holder").children(".col").html(polarized_mirrored_colours_selectors);
				
							jQuery("#sun_lens_polarized_colour").siblings("div").find(".option__holder_color_holder").children(".col").children("a").click(function(){
								jQuery(this).addClass("active");
								jQuery(this).siblings("a").removeClass("active");
							});
						},
					});
					
				
					color_cat = 'LightAdjustingLensColour';
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_lens_colors',
							product_id : product_id,
							color_cat : color_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							photochromic_lens_tint = Object.assign({},res.color_data.photochromic_tint_colours.split("|"));
							photochromic_colours_selectors = "";
							jQuery.each(photochromic_lens_tint , function(i,item){
								photochromic_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery(".main_parent_photochromic").children(".right").children(".option__holder_color_holder").children(".col").html(photochromic_colours_selectors);
				
				
							signature_lens_tint = Object.assign({},res.color_data.transitions_signature_tint_colours.split("|"));
							signature_colours_selectors = "";
							jQuery.each(signature_lens_tint , function(i,item){
								signature_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery(".main_parent_signature").children(".right").children(".option__holder_color_holder").children(".col").html(signature_colours_selectors);
				
				
							xtractive_lens_tint = Object.assign({},res.color_data.transitions_xtractive_tint_colours.split("|"));
							xtractive_colours_selectors = "";
							jQuery.each(xtractive_lens_tint , function(i,item){
								xtractive_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery(".main_parent_xtractive").children(".right").children(".option__holder_color_holder").children(".col").html(xtractive_colours_selectors);
				
							jQuery("#lens_type_light_adjusting").siblings("div").find(".option__holder_color_holder").children(".col").children("a").click(function(){
								jQuery(this).addClass("active");
								jQuery(this).siblings("a").removeClass("active");
							});
						},
					});
					window.setInterval(function(){
						if(usage == 'Distance'){
						jQuery("#right_eye_add").attr("disabled",true);
						jQuery("#left_eye_add").attr("disabled",true);
						}else{
						  jQuery("#right_eye_add").attr("disabled",false);
						  jQuery("#left_eye_add").attr("disabled",false);
						}

						if(add_to_cart == 'disabled'){
						  jQuery(".single_add_to_cart_button").attr("disabled",true);
						}else if(add_to_cart == 'enabled'){
						  jQuery(".single_add_to_cart_button").attr("disabled",false);
						}

						if(current_page == 'usage'){
						  jQuery("#ul_content_list").children("#usage_li_tracker").addClass("active");
						  jQuery("#ul_content_list").children("#prescription_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#lens_type_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#lens_option_li_tracker").removeClass("active");
						}else if(current_page == 'prescription'){
						  jQuery("#ul_content_list").children("#prescription_li_tracker").addClass("active");
						  jQuery("#ul_content_list").children("#usage_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#lens_type_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#lens_option_li_tracker").removeClass("active");
						}else if(current_page == 'upload_prescription'){
						  jQuery("#ul_content_list").children("#prescription_li_tracker").addClass("active");
						  jQuery("#ul_content_list").children("#usage_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#lens_type_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#lens_option_li_tracker").removeClass("active");
						}else if(current_page == 'lens_type' || current_page == 'sun_lens_colour_page'){
						  jQuery("#ul_content_list").children("#lens_type_li_tracker").addClass("active");
						  jQuery("#ul_content_list").children("#prescription_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#usage_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#lens_option_li_tracker").removeClass("active");
						}else if(current_page == 'lens_options' || current_page == "blue_lens_blocking_page"){
						  jQuery("#ul_content_list").children("#lens_option_li_tracker").addClass("active");
						  jQuery("#ul_content_list").children("#lens_type_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#prescription_li_tracker").removeClass("active");
						  jQuery("#ul_content_list").children("#usage_li_tracker").removeClass("active");
						}

						product_final_price = Number(usage_price) + Number(lightadjusting_price) + Number(lensoption_price) + Number(customizelens_price) + Number(bluelight_price) + Number(sunlens_price);

						product_total_price_lens_frame = product_original_price + product_final_price;

						jQuery(".entry-summary .summary-inner").children(".price").html("<span class='woocommerce-Price-amount amount'><span>Frame Price : "+currency_symbol+product_original_price+"</span></br><span>Lens Price : "+currency_symbol+product_final_price+"</span></br><span>Total Price : "+currency_symbol+product_total_price_lens_frame+"</span></span>");
						
						if(usage == "Premium Progressive"){
							jQuery("#lens_type_blue_light_blocking").find(".option-intro").html("Unavailable");
							jQuery("#lens_type_blue_light_blocking").find(".option-name").css("color","#818384");
							jQuery("#lens_type_blue_light_blocking").find(".option-intro").css("color","#818384");
						}else{
							jQuery("#lens_type_blue_light_blocking").find(".option-intro").html("Protect your eyes from the negative side effects of phone, computer, and tablet screens.");
							jQuery("#lens_type_blue_light_blocking").find(".option-name").css("color","black");
							jQuery("#lens_type_blue_light_blocking").find(".option-intro").css("color","black");
						}
				  
					}, 1);
					prod_exists="true";
					jQuery("#usage_distance").click(function(){
						jQuery(".lds-roller-holder").css("display","flex");
						if(usage != "Distance"){
							usage = "Distance";
							jQuery.ajax({
								url : ajax_url,
								type : "POST",
								data : {
									action : 'distance_prescription_data',
									product_id : product_id,
									usage : usage,
								},
								success : function(response){
									var res = JSON.parse(response);
									right_e_add_data = "";
									left_e_add_data = "";

									add_data_to_dropdown(res.pres_data.distance_right_eye_sphere,res.pres_data.distance_right_eye_cylinder,res.pres_data.distance_left_eye_sphere,res.pres_data.distance_left_eye_cylinder,right_e_add_data,left_e_add_data,res.pres_data.distance_single_pd,res.pres_data.distance_right_pd,res.pres_data.distance_left_pd);

									jQuery("#right_eye_axis").attr('disabled',true);
									jQuery("#right_eye_axis").val("");
									jQuery("#left_eye_axis").attr('disabled',true);
									jQuery("#left_eye_axis").val("");
									jQuery("#usage_div_box").hide(200);
									jQuery("#upload_prescription_div_box").show(200);
									current_page='upload_prescription';
									usage_price = 0;
									lightadjusting_price = 0;
									lensoption_price = 0;
									customizelens_price = 0;
									bluelight_price = 0;
									sunlens_price = 0;
									jQuery(".lds-roller-holder").css("display","none");
									jQuery("#uploaded_prescription_file").val('');

								},
							});
						}else{
							jQuery("#usage_div_box").hide(200);
							jQuery("#upload_prescription_div_box").show(200);
							current_page='upload_prescription';
							usage_price = 0;
							lightadjusting_price = 0;
							lensoption_price = 0;
							customizelens_price = 0;
							bluelight_price = 0;
							sunlens_price = 0;
							jQuery(".lds-roller-holder").css("display","none");
							jQuery("#uploaded_prescription_file").val('');
						}
					});
					jQuery("#usage_reading_readers").click(function(){
						jQuery(".lds-roller-holder").css("display","flex");
						if(usage != "Readers"){
							usage = "Readers";
							jQuery.ajax({
								url : ajax_url,
								type : "POST",
								data : {
									action : 'reading_prescription_data',
									product_id : product_id,
									usage : usage,
								},
								success : function(response){
									var res = JSON.parse(response);

									add_data_to_dropdown(res.pres_data.readers_right_eye_sphere,res.pres_data.readers_right_eye_cylinder,res.pres_data.readers_left_eye_sphere,res.pres_data.readers_left_eye_cylinder,res.pres_data.readers_right_add,res.pres_data.readers_left_add,res.pres_data.readers_single_pd,res.pres_data.readers_right_pd,res.pres_data.readers_left_pd);

									jQuery("#right_eye_axis").attr('disabled',true);
									jQuery("#right_eye_axis").val("");
									jQuery("#left_eye_axis").attr('disabled',true);
									jQuery("#left_eye_axis").val("");
									jQuery("#usage_div_box").hide(200);
									jQuery("#upload_prescription_div_box").show(200);
									current_page='upload_prescription';
									usage_price = 0;
									lightadjusting_price = 0;
									lensoption_price = 0;
									customizelens_price = 0;
									bluelight_price = 0;
									sunlens_price = 0;
									jQuery(".lds-roller-holder").css("display","none");
									jQuery("#uploaded_prescription_file").val('');
								},
							});
						}else{
							jQuery("#usage_div_box").hide(200);
							jQuery("#upload_prescription_div_box").show(200);
							current_page='upload_prescription';
							usage_price = 0;
							lightadjusting_price = 0;
							lensoption_price = 0;
							customizelens_price = 0;
							bluelight_price = 0;
							sunlens_price = 0;
							jQuery(".lds-roller-holder").css("display","none");
							jQuery("#uploaded_prescription_file").val('');
						}
					});
					jQuery("#usage_reading_intermediate").click(function(){
						jQuery(".lds-roller-holder").css("display","flex");
						if(usage != "Reading Intermediate"){
							usage = "Reading Intermediate";
							jQuery.ajax({
								url : ajax_url,
								type : "POST",
								data : {
									action : 'reading_prescription_data',
									product_id : product_id,
									usage : "Intermediate",
								},
								success : function(response){
									var res = JSON.parse(response);

									add_data_to_dropdown(res.pres_data.intermediate_right_eye_sphere,res.pres_data.intermediate_right_eye_cylinder,res.pres_data.intermediate_left_eye_sphere,res.pres_data.intermediate_left_eye_cylinder,res.pres_data.intermediate_right_add,res.pres_data.intermediate_left_add,res.pres_data.intermediate_single_pd,res.pres_data.intermediate_right_pd,res.pres_data.intermediate_left_pd);

									jQuery("#right_eye_axis").attr('disabled',true);
									jQuery("#right_eye_axis").val("");
									jQuery("#left_eye_axis").attr('disabled',true);
									jQuery("#left_eye_axis").val("");
									jQuery("#usage_div_box").hide(200);
									jQuery("#upload_prescription_div_box").show(200);
									current_page='upload_prescription';
									usage_price = 0;
									lightadjusting_price = 0;
									lensoption_price = 0;
									customizelens_price = 0;
									bluelight_price = 0;
									sunlens_price = 0;
									jQuery(".lds-roller-holder").css("display","none");
									jQuery("#uploaded_prescription_file").val('');
								},
							});
						}else{
							jQuery("#usage_div_box").hide(200);
							jQuery("#upload_prescription_div_box").show(200);
							current_page='upload_prescription';
							usage_price = 0;
							lightadjusting_price = 0;
							lensoption_price = 0;
							customizelens_price = 0;
							bluelight_price = 0;
							sunlens_price = 0;
							jQuery(".lds-roller-holder").css("display","none");
							jQuery("#uploaded_prescription_file").val('');

						}
					});
					
					jQuery("#usage_multifocal_bifocal").click(function(){
						jQuery(".lds-roller-holder").css("display","flex");
						if(usage != "Bifocal"){
							usage = "Bifocal";
							jQuery.ajax({
								url : ajax_url,
								type : "POST",
								data : {
									action : 'multifocal_prescription_data',
									product_id : product_id,
									usage : usage,
								},
								success : function(response){
									var res = JSON.parse(response);

									add_data_to_dropdown(res.pres_data.bifocal_right_eye_sphere,res.pres_data.bifocal_right_eye_cylinder,res.pres_data.bifocal_left_eye_sphere,res.pres_data.bifocal_left_eye_cylinder,res.pres_data.bifocal_right_add,res.pres_data.bifocal_left_add,res.pres_data.bifocal_single_pd,res.pres_data.bifocal_right_pd,res.pres_data.bifocal_left_pd);

									jQuery("#right_eye_axis").attr('disabled',true);
									jQuery("#right_eye_axis").val("");
									jQuery("#left_eye_axis").attr('disabled',true);
									jQuery("#left_eye_axis").val("");
									usage_price = bifocal_additional_price;
									lightadjusting_price = 0;
									lensoption_price = 0;
									customizelens_price = 0;
									bluelight_price = 0;
									sunlens_price = 0;
									jQuery("#usage_div_box").hide(200);
									jQuery("#upload_prescription_div_box").show(200);
									current_page='upload_prescription';
									jQuery(".lds-roller-holder").css("display","none");
									jQuery("#uploaded_prescription_file").val('');
								},
							});
						}else{
							jQuery("#usage_div_box").hide(200);
							jQuery("#upload_prescription_div_box").show(200);
							current_page='upload_prescription';
							usage_price = bifocal_additional_price;
							lightadjusting_price = 0;
							lensoption_price = 0;
							customizelens_price = 0;
							bluelight_price = 0;
							sunlens_price = 0;
							jQuery(".lds-roller-holder").css("display","none");
							jQuery("#uploaded_prescription_file").val('');
						}
					});
					jQuery("#uploaded_prescription_file").change(function(){
						if(jQuery(this).val() != ''){
							alert("Prescription File Added.");
							prescription_values = document.getElementById("uploaded_prescription_file").files[0];
							current_page='lens_type';
							prescription_uploaded = true;
							jQuery("#upload_prescription_div_box").hide(200);
							jQuery("#lens_type_div_box").show(200);
							
						}else{
							alert("Please Select a Prescription File.");
						}
					});
					jQuery("#usage_multifocal_progressive").click(function(){
						jQuery(".lds-roller-holder").css("display","flex");
						if(usage != "Progressive"){
							usage = "Progressive";
							jQuery.ajax({
								url : ajax_url,
								type : "POST",
								data : {
									action : 'multifocal_prescription_data',
									product_id : product_id,
									usage : usage,
								},
								success : function(response){
									var res = JSON.parse(response);

									add_data_to_dropdown(res.pres_data.progressive_right_eye_sphere,res.pres_data.progressive_right_eye_cylinder,res.pres_data.progressive_left_eye_sphere,res.pres_data.progressive_left_eye_cylinder,res.pres_data.progressive_right_add,res.pres_data.progressive_left_add,res.pres_data.progressive_single_pd,res.pres_data.progressive_right_pd,res.pres_data.progressive_left_pd);

									jQuery("#right_eye_axis").attr('disabled',true);
									jQuery("#right_eye_axis").val("");
									jQuery("#left_eye_axis").attr('disabled',true);
									jQuery("#left_eye_axis").val("");
									usage_price = progressive_additional_price;
									lightadjusting_price = 0;
									lensoption_price = 0;
									customizelens_price = 0;
									bluelight_price = 0;
									sunlens_price = 0;
									jQuery("#usage_div_box").hide(200);
									jQuery("#upload_prescription_div_box").show(200);
									current_page='upload_prescription';
									jQuery(".lds-roller-holder").css("display","none");
									jQuery("#uploaded_prescription_file").val('');
								},
							});
						}else{
							jQuery("#usage_div_box").hide(200);
							jQuery("#upload_prescription_div_box").show(200);
							current_page='upload_prescription';
							usage_price = progressive_additional_price;
							lightadjusting_price = 0;
							lensoption_price = 0;
							customizelens_price = 0;
							bluelight_price = 0;
							sunlens_price = 0;
							jQuery(".lds-roller-holder").css("display","none");
							jQuery("#uploaded_prescription_file").val('');
						}
					});
					
					jQuery("#usage_multifocal_premium").click(function(){
						jQuery(".lds-roller-holder").css("display","flex");
						if(usage != "Premium Progressive"){
							usage = "Premium Progressive";
							jQuery.ajax({
								url : ajax_url,
								type : "POST",
								data : {
									action : 'multifocal_prescription_data',
									product_id : product_id,
									usage : "Premium",
								},
								success : function(response){
									var res = JSON.parse(response);

									add_data_to_dropdown(res.pres_data.premium_right_eye_sphere,res.pres_data.premium_right_eye_cylinder,res.pres_data.premium_left_eye_sphere,res.pres_data.premium_left_eye_cylinder,res.pres_data.premium_right_add,res.pres_data.premium_left_add,res.pres_data.premium_single_pd,res.pres_data.premium_right_pd,res.pres_data.premium_left_pd);

									jQuery("#right_eye_axis").attr('disabled',true);
									jQuery("#right_eye_axis").val("");
									jQuery("#left_eye_axis").attr('disabled',true);
									jQuery("#left_eye_axis").val("");
									usage_price = premium_additional_price;
									lightadjusting_price = 0;
									lensoption_price = 0;
									customizelens_price = 0;
									bluelight_price = 0;
									sunlens_price = 0;
									jQuery("#usage_div_box").hide(200);
									jQuery("#upload_prescription_div_box").show(200);
									current_page='upload_prescription';
									jQuery(".lds-roller-holder").css("display","none");
									jQuery("#uploaded_prescription_file").val('');
								},
							});
						}else{
							jQuery("#usage_div_box").hide(200);
							jQuery("#upload_prescription_div_box").show(200);
							current_page='upload_prescription';
							usage_price = premium_additional_price;
							lightadjusting_price = 0;
							lensoption_price = 0;
							customizelens_price = 0;
							bluelight_price = 0;
							sunlens_price = 0;
							jQuery(".lds-roller-holder").css("display","none");
							jQuery("#uploaded_prescription_file").val('');
						}
					});
					jQuery("#usage_non_prescription").click(function(){
						jQuery(".lds-roller-holder").css("display","flex");
						usage='Non Prescription';
						jQuery("#usage_div_box").hide(200);
						jQuery("#lens_type_div_box").show(200);
						current_page='lens_type';
						usage_price = 0;
						prescription_values = 'No Prescription';
						jQuery(".lds-roller-holder").css("display","none");
						jQuery("#uploaded_prescription_file").val('');
					});
					jQuery("#enter_manual_prescription").click(function(){
						jQuery("#upload_prescription_div_box").hide(200);
						jQuery("#prescription_div_box").show(200);
						current_page='prescription';
						prescription_uploaded = false;
					});
					function add_data_to_dropdown(right_e_sphere_data,right_e_cylinder_data,left_e_sphere_data,left_e_cylinder_data,right_e_add_data,left_e_add_data,single_pd_data,right_e_pd_data,left_e_pd_data){

						right_e_sphere = Object.assign({},right_e_sphere_data.split("|"));
						right_e_cylinder = Object.assign({},right_e_cylinder_data.split("|"));
						left_e_sphere = Object.assign({},left_e_sphere_data.split("|"));
						left_e_cylinder = Object.assign({},left_e_cylinder_data.split("|"));
						right_e_add = Object.assign({},right_e_add_data.split("|"));;
						left_e_add = Object.assign({},left_e_add_data.split("|"));
						single_pd = Object.assign({},single_pd_data.split("|"));
						right_e_pd = Object.assign({},right_e_pd_data.split("|"));
						left_e_pd = Object.assign({},left_e_pd_data.split("|"));

						var r_e_s_drop = "<option value='Select Sphere'> Select Sphere </option>";
						jQuery.each(right_e_sphere , function(i,item){
							r_e_s_drop += '<option value="'+item+'">'+item+'</option>';
						});
						var r_e_c_drop = "<option value='Select Cylinder'> Select Cylinder </option>";
						jQuery.each(right_e_cylinder , function(i,item){
							r_e_c_drop += '<option value="'+item+'">'+item+'</option>';
						});
						var l_e_s_drop = "<option value='Select Sphere'> Select Sphere </option>";
						jQuery.each(left_e_sphere , function(i,item){
							l_e_s_drop += '<option value="'+item+'">'+item+'</option>';
						});
						var l_e_c_drop = "<option value='Select Cylinder'> Select Cylinder </option>";
						jQuery.each(left_e_cylinder , function(i,item){
							l_e_c_drop += '<option value="'+item+'">'+item+'</option>';
						});
						var r_e_a_drop = "<option value='Select ADD'> Select ADD </option>";
						jQuery.each(right_e_add , function(i,item){
							r_e_a_drop += '<option value="'+item+'">'+item+'</option>';
						});
						var l_e_a_drop = "<option value='Select ADD'> Select ADD </option>";
						jQuery.each(left_e_add , function(i,item){
							l_e_a_drop += '<option value="'+item+'">'+item+'</option>';
						});
						var s_pd_drop = "<option value='Select PD'> Select PD </option>";
						jQuery.each(single_pd , function(i,item){
							s_pd_drop += '<option value="'+item+'">'+item+'</option>';
						});
						var r_pd_drop = "<option value='Right PD'> Right PD </option>";
						jQuery.each(right_e_pd , function(i,item){
							r_pd_drop += '<option value="'+item+'">'+item+'</option>';
						});
						var l_pd_drop = "<option value='Left PD'> Left PD </option>";
						jQuery.each(left_e_pd , function(i,item){
							l_pd_drop += '<option value="'+item+'">'+item+'</option>';
						});

						jQuery("#right_eye_sphere").html(r_e_s_drop);
						jQuery("#right_eye_cylinder").html(r_e_c_drop);
						jQuery("#left_eye_sphere").html(l_e_s_drop);
						jQuery("#left_eye_cylinder").html(l_e_c_drop);
						jQuery("#right_eye_add").html(r_e_a_drop);
						jQuery("#left_eye_add").html(l_e_a_drop);
						jQuery("#single_pd").html(s_pd_drop);
						jQuery("#right_pd").html(r_pd_drop);
						jQuery("#left_pd").html(l_pd_drop);
					}
					jQuery("#right_eye_cylinder").change(function(){
						if(Number.isNaN(Number(jQuery(this).val()))){
							jQuery("#right_eye_axis").attr('disabled',true);
							jQuery("#right_eye_axis").val("");
						}else{
							jQuery("#right_eye_axis").attr('disabled',false);
							jQuery("#right_eye_axis").val("");
						}
					});
					jQuery("#left_eye_cylinder").change(function(){
						if(Number.isNaN(Number(jQuery(this).val()))){
							jQuery("#left_eye_axis").attr('disabled',true);
							jQuery("#left_eye_axis").val("");
						}else{
							jQuery("#left_eye_axis").attr('disabled',false);
							jQuery("#left_eye_axis").val("");
						}
					});

					jQuery("#double_pd_checkbox").click(function(){
						if(jQuery("#double_pd_checkbox:checked").val() == 'on'){
							jQuery("#left_pd_label").show();
							jQuery("#right_pd_label").show();
							jQuery("#single_pd_label").hide();
						}else{
							jQuery("#left_pd_label").hide();
							jQuery("#right_pd_label").hide();
							jQuery("#single_pd_label").show();
						}
					});
					jQuery("#confirm_prescription").click(function(){
						right_eye_sphere_conf = jQuery("#right_eye_sphere").val();
						right_eye_cylinder_conf = jQuery("#right_eye_cylinder").val();
						right_eye_axis_conf = jQuery("#right_eye_axis").val();
						left_eye_sphere_conf = jQuery("#left_eye_sphere").val();
						left_eye_cylinder_conf = jQuery("#left_eye_cylinder").val();
						left_eye_axis_conf = jQuery("#left_eye_axis").val();
						single_pd_conf = jQuery("#single_pd").val();
						left_pd_conf = jQuery("#left_pd").val();
						right_pd_conf = jQuery("#right_pd").val();
						right_eye_add_conf = jQuery("#right_eye_add").val();
						left_eye_add_conf = jQuery("#left_eye_add").val();
						if(usage == 'Distance'){
							if(Number.isNaN(Number(right_eye_sphere_conf)) &&  Number.isNaN(Number(right_eye_cylinder_conf)) &&  Number(right_eye_axis_conf) == 0  &&  Number.isNaN(Number(left_eye_sphere_conf))  &&  Number.isNaN(Number(left_eye_cylinder_conf))  &&  Number(left_eye_axis_conf) == 0 ){
								let conf = confirm("Continue without prescription ?");
								if(conf){
									jQuery("#prescription_div_box").hide(200);
									jQuery("#lens_type_div_box").show(200);
									current_page ='lens_type';
									usage = 'Non Prescription';
									usage_price = 0;
									prescription_values = 'No Prescription';
									jQuery(".lds-roller-holder").css("display","none");
								}else{
									jQuery(".lds-roller-holder").css("display","none");
								}
							}else if(Number.isNaN(Number(right_eye_sphere_conf)) ||  Number.isNaN(Number(right_eye_cylinder_conf)) ||  Number(right_eye_axis_conf) == 0  ||  Number.isNaN(Number(left_eye_sphere_conf))  ||  Number.isNaN(Number(left_eye_cylinder_conf))  ||  Number(left_eye_axis_conf) == 0 ){
								if(Number.isNaN(Number(right_eye_sphere_conf))){
									alert("Please Enter Right Eye Sphere.");
								}else if(Number.isNaN(Number(right_eye_cylinder_conf))){
									alert("Please Enter Right Eye Cylinder.");
								}else if(Number(right_eye_axis_conf) == 0){
									alert("Please Enter Right Eye Axis.");
								}else if(Number.isNaN(Number(left_eye_sphere_conf))){
									alert("Please Enter Left Eye Sphere.");
								}else if(Number.isNaN(Number(left_eye_cylinder_conf))){
									alert("Please Enter Left Eye Cylinder.");
								}else if( Number(left_eye_axis_conf) == 0){
									alert("Please Enter Left Eye Axis.");
								}
							}else{
								if(jQuery("#double_pd_checkbox:checked").val() == 'on'){
									if(Number.isNaN(Number(left_pd_conf)) ||  Number.isNaN(Number(right_pd_conf))){
										if(Number.isNaN(Number(left_pd_conf))){
											alert("Please Enter Left Pupillary Distance");
										}else if(Number.isNaN(Number(right_pd_conf))){
											alert("Please Enter Right Pupillary Distance");
										}
									}else{
										prescription_values = {
											right_eye_sphere_value : jQuery("#right_eye_sphere").val(),
											right_eye_cylinder_value : jQuery("#right_eye_cylinder").val(),
											right_eye_axis_value : jQuery("#right_eye_axis").val(),
											left_eye_sphere_value : jQuery("#left_eye_sphere").val(),
											left_eye_cylinder_value : jQuery("#left_eye_cylinder").val(),
											left_eye_axis_value : jQuery("#left_eye_axis").val(),
											right_pd_value : jQuery("#right_pd").val(),
											left_pd_value : jQuery("#left_pd").val()
										}; 
										jQuery("#prescription_div_box").hide(200);
										jQuery("#lens_type_div_box").show(200);
										current_page='lens_type';
										jQuery(".lds-roller-holder").css("display","none");
									}
								}else{
									if(Number.isNaN(Number(single_pd_conf))){
										alert("Please Enter Single Pupillary Distance");
									}else{
										prescription_values =  {
											right_eye_sphere_value : jQuery("#right_eye_sphere").val(),
											right_eye_cylinder_value : jQuery("#right_eye_cylinder").val(),
											right_eye_axis_value : jQuery("#right_eye_axis").val(),
											left_eye_sphere_value : jQuery("#left_eye_sphere").val(),
											left_eye_cylinder_value : jQuery("#left_eye_cylinder").val(),
											left_eye_axis_value : jQuery("#left_eye_axis").val(),
											single_pd_value : jQuery("#single_pd").val()
										};
										jQuery("#prescription_div_box").hide(200);
										jQuery("#lens_type_div_box").show(200);
										current_page='lens_type';
										jQuery(".lds-roller-holder").css("display","none");
									}
								}

							}
						}else{
							if(Number.isNaN(Number(right_eye_sphere_conf)) &&  Number.isNaN(Number(right_eye_cylinder_conf)) &&  Number(right_eye_axis_conf) == 0  &&  Number.isNaN(Number(left_eye_sphere_conf))  &&  Number.isNaN(Number(left_eye_cylinder_conf))  &&  Number(left_eye_axis_conf) == 0  &&  Number.isNaN(Number(right_eye_add_conf))  &&  Number.isNaN(Number(left_eye_add_conf)) ){
								let conf = confirm("Continue without prescription ?");
								if(conf){
									jQuery("#prescription_div_box").hide(200);
									jQuery("#lens_type_div_box").show(200);
									usage ='Non Prescription';
									current_page='lens_type';
									usage_price = 0;
									prescription_values = 'No Prescription';
									jQuery(".lds-roller-holder").css("display","none");
								}else{
									jQuery(".lds-roller-holder").css("display","none");
								}
							}else if(Number.isNaN(Number(right_eye_sphere_conf)) ||  Number.isNaN(Number(right_eye_cylinder_conf)) ||  Number(right_eye_axis_conf) == 0  ||  Number.isNaN(Number(left_eye_sphere_conf))  ||  Number.isNaN(Number(left_eye_cylinder_conf))  ||  Number(left_eye_axis_conf) == 0  ||  Number.isNaN(Number(right_eye_add_conf))  ||  Number.isNaN(Number(left_eye_add_conf)) ){
								if(Number.isNaN(Number(right_eye_sphere_conf))){
									alert("Please Enter Right Eye Sphere.");
								}else if(Number.isNaN(Number(right_eye_cylinder_conf))){
									alert("Please Enter Right Eye Cylinder.");
								}else if(Number(right_eye_axis_conf) == 0){
									alert("Please Enter Right Eye Axis.");
								}else if(Number.isNaN(Number(left_eye_sphere_conf))){
									alert("Please Enter Left Eye Sphere.");
								}else if(Number.isNaN(Number(left_eye_cylinder_conf))){
									alert("Please Enter Left Eye Cylinder.");
								}else if(Number(left_eye_axis_conf) == 0){
									alert("Please Enter Left Eye Axis.");
								}else if(Number.isNaN(Number(right_eye_add_conf))){
									alert("Please Enter Right Eye ADD.");
								}else if(Number.isNaN(Number(left_eye_add_conf))){
									alert("Please Enter Left Eye ADD.");
								}
							}else{
								if(jQuery("#double_pd_checkbox:checked").val() == 'on'){
									if(Number.isNaN(Number(left_pd_conf)) ||  Number.isNaN(Number(right_pd_conf))){
										if(Number.isNaN(Number(left_pd_conf))){
											alert("Please Enter Left Pupillary Distance");
										}else if(Number.isNaN(Number(right_pd_conf))){
											alert("Please Enter Right Pupillary Distance");
										}
									}else{
										prescription_values = {
											right_eye_sphere_value : jQuery("#right_eye_sphere").val(),
											right_eye_cylinder_value : jQuery("#right_eye_cylinder").val(),
											right_eye_axis_value : jQuery("#right_eye_axis").val(),
											right_eye_add_value : jQuery("#right_eye_add").val(),
											left_eye_sphere_value : jQuery("#left_eye_sphere").val(),
											left_eye_cylinder_value : jQuery("#left_eye_cylinder").val(),
											left_eye_axis_value : jQuery("#left_eye_axis").val(),
											left_eye_add_value : jQuery("#left_eye_add").val(),
											right_pd_value : jQuery("#right_pd").val(),
											left_pd_value : jQuery("#left_pd").val()
										}; 
										jQuery("#prescription_div_box").hide(200);
										jQuery("#lens_type_div_box").show(200);
										current_page='lens_type';
										jQuery(".lds-roller-holder").css("display","none");
									}
								}else{
									if(Number.isNaN(Number(single_pd_conf))){
										alert("Please Enter Single Pupillary Distance");
									}else{
										prescription_values = {
											right_eye_sphere_value : jQuery("#right_eye_sphere").val(),
											right_eye_cylinder_value : jQuery("#right_eye_cylinder").val(),
											right_eye_axis_value : jQuery("#right_eye_axis").val(),
											right_eye_add_value : jQuery("#right_eye_add").val(),
											left_eye_sphere_value : jQuery("#left_eye_sphere").val(),
											left_eye_cylinder_value : jQuery("#left_eye_cylinder").val(),
											left_eye_axis_value : jQuery("#left_eye_axis").val(),
											left_eye_add_value : jQuery("#left_eye_add").val(),
											single_pd_value : jQuery("#single_pd").val()
										}; 
										jQuery("#prescription_div_box").hide(200);
										jQuery("#lens_type_div_box").show(200);
										current_page='lens_type';
										jQuery(".lds-roller-holder").css("display","none");
									}
								}
							}
						}
					});
					jQuery("#right_eye_sphere").change(function(){
						if(!Number.isNaN(Number(jQuery("#right_eye_sphere").val())) && !Number.isNaN(Number(jQuery("#left_eye_sphere").val()))){
							if(Number(jQuery("#right_eye_sphere").val()) > 0 && Number(jQuery("#left_eye_sphere").val()) < 0){
								alert("That's unusual! For most people, both eyes have either negative ( - ) or positive ( + ) SPH values");
							}else if(Number(jQuery("#right_eye_sphere").val()) < 0 && Number(jQuery("#left_eye_sphere").val()) > 0){
								alert("That's unusual! For most people, both eyes have either negative ( - ) or positive ( + ) SPH values");
							}
						}		
					});

					jQuery("#left_eye_sphere").change(function(){
						if(!Number.isNaN(Number(jQuery("#right_eye_sphere").val())) && !Number.isNaN(Number(jQuery("#left_eye_sphere").val()))){
							if(Number(jQuery("#right_eye_sphere").val()) > 0 && Number(jQuery("#left_eye_sphere").val()) < 0){
								alert("That's unusual! For most people, both eyes have either negative ( - ) or positive ( + ) SPH values");
							}else if(Number(jQuery("#right_eye_sphere").val()) < 0 && Number(jQuery("#left_eye_sphere").val()) > 0){
								alert("That's unusual! For most people, both eyes have either negative ( - ) or positive ( + ) SPH values");
							}
						}		
					});

					jQuery("#right_eye_cylinder").change(function(){
						if(!Number.isNaN(Number(jQuery("#right_eye_cylinder").val())) && !Number.isNaN(Number(jQuery("#left_eye_cylinder").val()))){
							if(Number(jQuery("#right_eye_cylinder").val()) > 0 && Number(jQuery("#left_eye_cylinder").val()) < 0){
								alert("That's unusual! For most people, Cylinder is either Negative (-) or positive (+)");
							}else if(Number(jQuery("#right_eye_cylinder").val()) < 0 && Number(jQuery("#left_eye_cylinder").val()) > 0){
								alert("That's unusual! For most people, Cylinder is either Negative (-) or positive (+)");
							}
						}		
					});

					jQuery("#left_eye_cylinder").change(function(){
						if(!Number.isNaN(Number(jQuery("#right_eye_cylinder").val())) && !Number.isNaN(Number(jQuery("#left_eye_cylinder").val()))){
							if(Number(jQuery("#right_eye_cylinder").val()) > 0 && Number(jQuery("#left_eye_cylinder").val()) < 0){
								alert("That's unusual! For most people, Cylinder is either Negative (-) or positive (+)");
							}else if(Number(jQuery("#right_eye_cylinder").val()) < 0 && Number(jQuery("#left_eye_cylinder").val()) > 0){
								alert("That's unusual! For most people, Cylinder is either Negative (-) or positive (+)");
							}
						}		
					});
					jQuery("#go_previous").click(function(){
						if(current_page == 'lens_type' && usage == 'Non Prescription'){
							jQuery("#lens_type_div_box").hide(200);
							jQuery("#usage_div_box").show(200);
							current_page="usage";
						}else if(current_page == 'lens_type' && usage != 'Non Prescription' && prescription_uploaded == false){
							jQuery("#lens_type_div_box").hide(200);
							jQuery("#prescription_div_box").show(200);
							current_page='prescription';
						}else if(current_page == 'lens_type' && usage != 'Non Prescription' && prescription_uploaded == true){
							jQuery("#lens_type_div_box").hide(200);
							jQuery("#usage_div_box").show(200);
							current_page='usage';
						}else if(current_page == 'prescription'){
							jQuery("#prescription_div_box").hide(200);
							jQuery("#usage_div_box").show(200);
							current_page='usage';
						}else if(current_page == 'lens_options' && lens_type == "Clear"){
							jQuery("#lens_options_div_box").hide(200);			
							jQuery("#lens_type_div_box").show(200);
							current_page = 'lens_type';
							add_to_cart = 'disabled';
						}else if(current_page == 'customize_lens'){
							jQuery("#customize_lens_div_box").hide(200);			
							jQuery("#lens_options_div_box").show(200);
							current_page = 'lens_options';
							add_to_cart = 'disabled';
						}else if(current_page == 'blue_lens_blocking_page'){
							jQuery("#blue_light_blocking_div_box").hide(200);			
							jQuery("#lens_type_div_box").show(200);
							current_page = 'lens_type';
						}else if(current_page == 'sun_lens_colour_page'){
							jQuery("#sun_lens_colours_div_box").hide(200);			
							jQuery("#lens_type_div_box").show(200);
							current_page = 'lens_type';
						}else if(current_page == 'lens_options' && lens_type == "Sun Basic"){
							jQuery("#lens_options_div_box").hide(200);			
							jQuery("#sun_lens_colours_div_box").show(200);
							current_page = 'sun_lens_colour_page';
							add_to_cart = 'disabled';
						}else if(current_page == 'lens_options' && lens_type == "Sun Gradient"){
							jQuery("#lens_options_div_box").hide(200);			
							jQuery("#sun_lens_colours_div_box").show(200);
							current_page = 'sun_lens_colour_page';
							add_to_cart = 'disabled';
						}else if(current_page == 'lens_options' && lens_type == "Sun Mirrored"){
							jQuery("#lens_options_div_box").hide(200);			
							jQuery("#sun_lens_colours_div_box").show(200);
							current_page = 'sun_lens_colour_page';
							add_to_cart = 'disabled';
						}else if(current_page == 'lens_options' && lens_type == "Polarized - Mirrored Tint"){
							jQuery("#lens_options_div_box").hide(200);			
							jQuery("#sun_lens_colours_div_box").show(200);
							current_page = 'sun_lens_colour_page';
							add_to_cart = 'disabled';
						}else if(current_page == 'lens_options' && lens_type == "Polarized - Basic Tint"){
							jQuery("#lens_options_div_box").hide(200);			
							jQuery("#sun_lens_colours_div_box").show(200);
							current_page = 'sun_lens_colour_page';
							add_to_cart = 'disabled';
						}else if(current_page == 'lens_options' && lens_type == "Light Adjusting - Photochromic"){
							jQuery("#lens_options_div_box").hide(200);			
							jQuery("#lens_type_div_box").show(200);
							current_page = 'sun_lens_colour_page';
							add_to_cart = 'disabled';
						}else if(current_page == 'lens_options' && lens_type == "Light Adjusting - Transitions Signature"){
							jQuery("#lens_options_div_box").hide(200);			
							jQuery("#lens_type_div_box").show(200);
							current_page = 'sun_lens_colour_page';
							add_to_cart = 'disabled';
						}else if(current_page == 'lens_options' && lens_type == "Light Adjusting - Transitions XTRActive"){
							jQuery("#lens_options_div_box").hide(200);			
							jQuery("#lens_type_div_box").show(200);
							current_page = 'sun_lens_colour_page';
							add_to_cart = 'disabled';
						}else if(current_page == 'upload_prescription'){
							jQuery("#upload_prescription_div_box").hide(200);			
							jQuery("#usage_div_box").show(200);
							current_page='usage';
							add_to_cart = 'disabled';
						}
					});
					jQuery("#lens_type_clear").click(function(){
						lens_type = "Clear";
						colour = "Transparent";
						current_page='lens_options';
						add_to_cart = 'disabled';
						lightadjusting_price = 0;
						lensoption_price = 0;
						customizelens_price = 0;
						bluelight_price = 0;
						sunlens_price = 0;
						jQuery("#lens_type_div_box").hide(200);
						jQuery("#lens_options_div_box").show(200);

					});

					jQuery("#lens_options_customize").click(function(){
						current_page = "customize_lens";
						lensoption_price = 0;
						jQuery("#lens_options_div_box").hide(200);
						jQuery("#customize_lens_div_box").show(200);
					});

					jQuery("#lens_type_blue_light_blocking").click(function(){
						if(usage != "Premium Progressive"){
							lens_type = "Blue Light Blocking";
							colour = "Transparent Blue Light Blocking";
							lensoption_price = 0;
							bluelight_price = 0;
							lightadjusting_price = 0;
							customizelens_price = 0;
							sunlens_price = 0;
							current_page = "blue_lens_blocking_page";
							jQuery("#lens_type_div_box").hide(200);
							jQuery("#blue_light_blocking_div_box").show(200);
						}
					});

					jQuery("#lens_type_sun").click(function(){
						lensoption_price = 0;
						bluelight_price = 0;
						lightadjusting_price = 0;
						customizelens_price = 0;
						sunlens_price = 0;
						current_page = "sun_lens_colour_page";
						jQuery("#lens_type_div_box").hide(200);
						jQuery("#sun_lens_colours_div_box").show(200);
					});
					jQuery("#lens_options_basic_lens").click(function(){
						lensoption_price = Number(basic_lenses_additional_price);
						customizelens_price = 0;
						lens_option = "Basic Lens 1.5 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#lens_options_most_popular_lenses").click(function(){
						lensoption_price = Number(most_popular_lenses_additional_price);
						customizelens_price = 0;
						lens_option = "Most Popular Lens 1.6 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#lens_options_advanced_lens").click(function(){
						lensoption_price = Number(advanced_lenses_additional_price);
						customizelens_price = 0;
						lens_option = "Advanced Lens 1.6 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#blue_light_blocking_ebdblue15").click(function(){
						lensoption_price = Number(ebdblue_15_additional_price);
						customizelens_price = 0;
						lens_option = "Blue Light Blocking Lens 1.5 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#blue_light_blocking_ebdblue16").click(function(){
						lensoption_price = Number(ebdblue_16_additional_price);
						lens_option = "Blue Light Blocking Lens 1.6 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#blue_light_blocking_ebdblue167").click(function(){
						lensoption_price = Number(ebdblue_167_additional_price);
						lens_option = "Blue Light Blocking Lens 1.67 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#blue_light_blocking_ebdblue174").click(function(){
						lensoption_price = Number(ebdblue_174_additional_price);
						lens_option = "Blue Light Blocking Lens 1.74 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#customize_lens_15_index_lens").click(function(){
						lensoption_price = Number(customize_index_15_additional_price);
						lens_option = "Custom Lens 1.5 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#customize_lens_157_index_lens").click(function(){
						lensoption_price = Number(customize_index_157_additional_price);
						lens_option = "Custom Lens 1.56 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#customize_lens_159_index_lens").click(function(){
						lensoption_price = Number(customize_index_159_additional_price);
						lens_option = "Custom Lens 1.59 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#customize_lens_16_index_lens").click(function(){
						lensoption_price = Number(customize_index_16_additional_price);
						lens_option = "Custom Lens 1.6 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#customize_lens_167_index_lens").click(function(){
						lensoption_price = Number(customize_index_167_additional_price);
						lens_option = "Custom Lens 1.67 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});

					jQuery("#customize_lens_174_index_lens").click(function(){
						lensoption_price = Number(customize_index_174_additional_price);
						lens_option = "Custom Lens 1.74 Index";
						jQuery(".container_popup").css("display","none");
						jQuery("body").removeClass("lens_body");
						add_to_cart = 'enabled';
					});
					jQuery("#sun_lens_basic_colour").click(function(){
						jQuery("#tint_strength_basic_lens").toggle(250);
						jQuery("#tint_strength_gradient_lens").hide(250);
						jQuery("#tint_strength_mirrored_lens").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").children(".right").hide();
					});

					jQuery("#sun_lens_gradient_colour").click(function(){
						jQuery("#tint_strength_gradient_lens").toggle(250);
						jQuery("#tint_strength_basic_lens").hide(250);
						jQuery("#tint_strength_mirrored_lens").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").children(".right").hide();
					});

					jQuery("#sun_lens_mirrored_colour").click(function(){
						jQuery("#tint_strength_mirrored_lens").toggle(250);
						jQuery("#tint_strength_gradient_lens").hide(250);
						jQuery("#tint_strength_basic_lens").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").children(".right").hide();
					});
					jQuery("#confirm_sun_colour_basic").click(function(){
						if(jQuery(this).parent("div").siblings("#col_tint_perc").children(".active").html() == null || jQuery(this).parent("div").siblings("#col").children(".active").html() == null ){
							if(jQuery(this).parent("div").siblings("#col").children(".active").html() == null){
								alert("Please select Colour.");
							}else if(jQuery(this).parent("div").siblings("#col_tint_perc").children(".active").html() == null ){
								alert("Please select tint percentage.");
							}
						}else{
							let strength_of_tint = jQuery(this).parent("div").siblings("#col_tint_perc").children(".active").html();
							let basic_colour = jQuery(this).parent("div").siblings("#col").children(".active").html();
							colour = basic_colour + strength_of_tint;
							lens_type ="Sun Basic";
							current_page = "lens_options";
							sunlens_price = basic_tint_additional_price;
							jQuery("#sun_lens_colours_div_box").hide(200);
							jQuery("#lens_options_div_box").show(200);
						}
					});

					jQuery("#confirm_sun_colour_gradient").click(function(){
						if(jQuery(this).parent("div").siblings("#col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let gradient_colour = jQuery(this).parent("div").siblings("#col").children(".active").html();
							colour = gradient_colour;
							lens_type ="Sun Gradient";
							current_page = "lens_options";
							sunlens_price = gradient_tint_lenses_additional_price;
							jQuery("#sun_lens_colours_div_box").hide(200);
							jQuery("#lens_options_div_box").show(200);
						}
					});

					jQuery("#confirm_sun_colour_mirrored").click(function(){
						if(jQuery(this).parent("div").siblings("#col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let mirrored_colour = jQuery(this).parent("div").siblings("#col").children(".active").html();
							colour = mirrored_colour ;
							lens_type ="Sun Mirrored";
							current_page = "lens_options";
							sunlens_price = mirrored_tint_additional_price;
							jQuery("#sun_lens_colours_div_box").hide(200);
							jQuery("#lens_options_div_box").show(200);
						}
					});

					jQuery("#confirm_polarized_mirrored").click(function(){
						if(jQuery(this).parent("div").siblings(".col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let polarized_mirror_colour = jQuery(this).parent("div").siblings(".col").children(".active").html();
							colour = polarized_mirror_colour ;
							lens_type ="Polarized - Mirrored Tint";
							current_page = "lens_options";
							sunlens_price = polarized_mirrored_tint_additional_price;
							bluelight_price = 0 ;
							lightadjusting_price = 0;
							jQuery("#sun_lens_colours_div_box").hide(200);
							jQuery("#lens_options_div_box").show(200);
						}
					});

					jQuery("#confirm_polarized_basic").click(function(){
						if(jQuery(this).parent("div").siblings(".col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let polarized_basic_colour = jQuery(this).parent("div").siblings(".col").children(".active").html();
							colour = polarized_basic_colour ;
							lens_type ="Polarized - Basic Tint";
							current_page = "lens_options";
							sunlens_price = polarized_basic_tint_additional_price;
							bluelight_price = 0 ;
							lightadjusting_price = 0;
							jQuery("#sun_lens_colours_div_box").hide(200);
							jQuery("#lens_options_div_box").show(200);
						}
					});

					jQuery("#lens_type_light_adjusting").click(function(){
						jQuery(this).siblings("div").toggle(250);
						jQuery(this).siblings("div").children(".right").hide();
					});

					jQuery("#lens_type_photochronic").click(function(){
						jQuery(this).parent("div").siblings("div").children(".right").hide(250);
						jQuery(this).siblings("div").toggle(250);
					});

					jQuery("#lens_type_signature").click(function(){
						jQuery(this).parent("div").siblings("div").children(".right").hide(250);
						jQuery(this).siblings("div").toggle(250);
					});

					jQuery("#lens_type_xtractive").click(function(){
						jQuery(this).parent("div").siblings("div").children(".right").hide(250);
						jQuery(this).siblings("div").toggle(250);
					});

					jQuery("#sun_lens_polarized_colour").click(function(){
						jQuery(this).siblings("div").toggle(250);
						jQuery(this).siblings("div").children(".right").hide();
						jQuery("#tint_strength_basic_lens").hide(250);
						jQuery("#tint_strength_gradient_lens").hide(250);
						jQuery("#tint_strength_mirrored_lens").hide(250);
					});

					jQuery("#polarized_basic_tint_colour").click(function(){
						jQuery(this).parent("div").siblings("div").children(".right").hide(250);
						jQuery(this).siblings("div").toggle(250);
					});

					jQuery("#polarized_mirrored_tint_colour").click(function(){
						jQuery(this).parent("div").siblings("div").children(".right").hide(250);
						jQuery(this).siblings("div").toggle(250);
					});
					jQuery("#confirm_transitions_photochromic").click(function(){
						if(jQuery(this).parent("div").siblings(".col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let photochromic_colour = jQuery(this).parent("div").siblings(".col").children(".active").html();
							colour = photochromic_colour ;
							lens_type ="Light Adjusting - Photochromic";
							current_page = "lens_options";
							sunlens_price = 0;
							bluelight_price = 0 ;
							lensoption_price = 0;
							customizelens_price = 0;
							lightadjusting_price = photochronic_additional_price;
							jQuery("#lens_type_div_box").hide(200);
							jQuery("#lens_options_div_box").show(200);
						}
					});

					jQuery("#confirm_transitions_signature").click(function(){
						if(jQuery(this).parent("div").siblings(".col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let signature_colour = jQuery(this).parent("div").siblings(".col").children(".active").html();
							colour = signature_colour ;
							lens_type ="Light Adjusting - Transitions Signature";
							current_page = "lens_options";
							sunlens_price = 0;
							bluelight_price = 0 ;
							lensoption_price = 0;
							customizelens_price = 0;
							lightadjusting_price = signature_additional_price;
							jQuery("#lens_type_div_box").hide(200);
							jQuery("#lens_options_div_box").show(200);
						}
					});

					jQuery("#confirm_transitions_xtractive").click(function(){
						if(jQuery(this).parent("div").siblings(".col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let xtractive_colour = jQuery(this).parent("div").siblings(".col").children(".active").html();
							colour = xtractive_colour ;
							lens_type ="Light Adjusting - Transitions XTRActive";
							current_page = "lens_options";
							sunlens_price = 0;
							bluelight_price = 0 ;
							lensoption_price = 0;
							customizelens_price = 0;
							lightadjusting_price = xtractive_additional_price;
							jQuery("#lens_type_div_box").hide(200);
							jQuery("#lens_options_div_box").show(200);
						}
					});
				}else if(product_type == 'Sunglasses'){
					jQuery("#go_previous").hide();
					add_to_cart == 'disabled';
					price_cat = 'SunLens';
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_additional_price',
							product_id : product_id,
							price_cat : price_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							jQuery("#sun_lens_basic_colour").children(".option-title").children(".option-name").append(" - "+currency_symbol+" "+res.price_data.basic_tint_additional_price);
								basic_tint_additional_price = res.price_data.basic_tint_additional_price;
							jQuery("#sun_lens_gradient_colour").children(".option-title").children(".option-name").append(" - "+currency_symbol+" "+res.price_data.gradient_tint_lenses_additional_price);
								gradient_tint_lenses_additional_price = res.price_data.gradient_tint_lenses_additional_price;
							jQuery("#sun_lens_mirrored_colour").children(".option-title").children(".option-name").append(" - "+currency_symbol+" "+res.price_data.mirrored_tint_additional_price);
								mirrored_tint_additional_price = res.price_data.mirrored_tint_additional_price;
							jQuery("#polarized_basic_tint_colour").children("span").append(" - "+currency_symbol+" "+res.price_data.polarized_basic_tint_additional_price);
								polarized_basic_tint_additional_price = res.price_data.polarized_basic_tint_additional_price;
							jQuery("#polarized_mirrored_tint_colour").children("span").append(" - "+currency_symbol+" "+res.price_data.polarized_mirrored_tint_additional_price);
								polarized_mirrored_tint_additional_price = res.price_data.polarized_mirrored_tint_additional_price;
						},
					});
					color_cat = 'SunLensColour';
					jQuery.ajax({
						url : ajax_url,
						type : "POST",
						data : {
							action : 'get_lens_colors',
							product_id : product_id,
							color_cat : color_cat,
						},
						success : function( response ){
							var res = JSON.parse(response);
							basic_lens_colors = Object.assign({},res.color_data.basic_lens_tint_colours.split("|"));
							basic_colours_selectors = "";
							jQuery.each(basic_lens_colors , function(i,item){
								basic_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery("#tint_strength_basic_lens").children(".option__holder_color_holder").children("#col").html(basic_colours_selectors);
				
				
							gradient_lens_colors = Object.assign({},res.color_data.gradient_lens_tint_colours.split("|"));
							gradient_colours_selectors = "";
							jQuery.each(gradient_lens_colors , function(i,item){
								gradient_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery("#tint_strength_gradient_lens").children(".option__holder_color_holder").children("#col").html(gradient_colours_selectors);
				
				
							mirrored_lens_colors = Object.assign({},res.color_data.mirrored_lens_tint_colours.split("|"));
							mirrored_colours_selectors = "";
							jQuery.each(mirrored_lens_colors , function(i,item){
								mirrored_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery("#tint_strength_mirrored_lens").children(".option__holder_color_holder").children("#col").html(mirrored_colours_selectors);
				
							jQuery(".grid_span_2").children(".option__holder_color_holder").children(".col").children("a").click(function(){
								jQuery(this).addClass("active");
								jQuery(this).siblings("a").removeClass("active");
							});
				
				
							polarized_basic_tint = Object.assign({},res.color_data.polarized_basic_lens_tint_colours.split("|"));
							polarized_basic_colours_selectors = "";
							jQuery.each(polarized_basic_tint , function(i,item){
								polarized_basic_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery(".main_parent_polarized_basic").children(".right").children(".option__holder_color_holder").children(".col").html(polarized_basic_colours_selectors);
				
				
							polarized_mirrored_tint = Object.assign({},res.color_data.polarized_mirrored_lens_tint_colours.split("|"));
							polarized_mirrored_colours_selectors = "";
							jQuery.each(polarized_mirrored_tint , function(i,item){
								polarized_mirrored_colours_selectors += '<a href="JavaScript:Void(0);">'+item+'</a>';
							});
							jQuery(".main_parent_polarized_mirrored").children(".right").children(".option__holder_color_holder").children(".col").html(polarized_mirrored_colours_selectors);
				
							jQuery("#sun_lens_polarized_colour").siblings("div").find(".option__holder_color_holder").children(".col").children("a").click(function(){
								jQuery(this).addClass("active");
								jQuery(this).siblings("a").removeClass("active");
							});
						},
					});
					jQuery("#ul_content_list").html("");
					jQuery("#usage_div_box").hide();
					jQuery("#sun_lens_colours_div_box").show();
					jQuery("#button_here").html('<button id="show_lenses_popup">Show Lenses</button>');
					jQuery("#show_lenses_popup").click(function(){
						jQuery(".container_popup").css("display","flex");
						jQuery("body").addClass("lens_body");
					});
				
					jQuery("#sun_lens_polarized_colour").click(function(){
						jQuery(this).siblings("div").toggle(250);
						jQuery(this).siblings("div").children(".right").hide();
						jQuery("#tint_strength_basic_lens").hide(250);
						jQuery("#tint_strength_gradient_lens").hide(250);
						jQuery("#tint_strength_mirrored_lens").hide(250);
					});

					jQuery("#polarized_basic_tint_colour").click(function(){
						jQuery(this).parent("div").siblings("div").children(".right").hide(250);
						jQuery(this).siblings("div").toggle(250);
					});

					jQuery("#polarized_mirrored_tint_colour").click(function(){
						jQuery(this).parent("div").siblings("div").children(".right").hide(250);
						jQuery(this).siblings("div").toggle(250);
					});
					jQuery("#sun_lens_basic_colour").click(function(){
						jQuery("#tint_strength_basic_lens").toggle(250);
						jQuery("#tint_strength_gradient_lens").hide(250);
						jQuery("#tint_strength_mirrored_lens").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").children(".right").hide();
					});

					jQuery("#sun_lens_gradient_colour").click(function(){
						jQuery("#tint_strength_gradient_lens").toggle(250);
						jQuery("#tint_strength_basic_lens").hide(250);
						jQuery("#tint_strength_mirrored_lens").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").children(".right").hide();
					});

					jQuery("#sun_lens_mirrored_colour").click(function(){
						jQuery("#tint_strength_mirrored_lens").toggle(250);
						jQuery("#tint_strength_gradient_lens").hide(250);
						jQuery("#tint_strength_basic_lens").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").hide(250);
						jQuery("#sun_lens_polarized_colour").siblings("div").children(".right").hide();
					});
					jQuery("#confirm_sun_colour_basic").click(function(){
						if(jQuery(this).parent("div").siblings("#col_tint_perc").children(".active").html() == null || jQuery(this).parent("div").siblings("#col").children(".active").html() == null ){
							if(jQuery(this).parent("div").siblings("#col").children(".active").html() == null){
								alert("Please select Colour.");
							}else if(jQuery(this).parent("div").siblings("#col_tint_perc").children(".active").html() == null ){
								alert("Please select tint percentage.");
							}
						}else{
							let strength_of_tint = jQuery(this).parent("div").siblings("#col_tint_perc").children(".active").html();
							let basic_colour = jQuery(this).parent("div").siblings("#col").children(".active").html();
							colour = basic_colour + strength_of_tint;
							lens_type ="Sun Basic";
							current_page = "lens_options";
							prescription_values = 'No Prescription';
							usage = "Sunglasses";
							lens_option = "Sunglasses";
							sunlens_price = basic_tint_additional_price;
							jQuery(".container_popup").css("display","none");
							jQuery("body").removeClass("lens_body");
							add_to_cart = "enabled";
						}
					});

					jQuery("#confirm_sun_colour_gradient").click(function(){
						if(jQuery(this).parent("div").siblings("#col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let gradient_colour = jQuery(this).parent("div").siblings("#col").children(".active").html();
							colour = gradient_colour;
							lens_type ="Sun Gradient";
							current_page = "lens_options";
							prescription_values = 'No Prescription';
							usage = "Sunglasses";
							lens_option = "Sunglasses";
							sunlens_price = gradient_tint_lenses_additional_price;
							jQuery(".container_popup").css("display","none");
							jQuery("body").removeClass("lens_body");
							add_to_cart = "enabled";
						}
					});

					jQuery("#confirm_sun_colour_mirrored").click(function(){
						if(jQuery(this).parent("div").siblings("#col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let mirrored_colour = jQuery(this).parent("div").siblings("#col").children(".active").html();
							colour = mirrored_colour ;
							lens_type ="Sun Mirrored";
							current_page = "lens_options";
							prescription_values = 'No Prescription';
							usage = "Sunglasses";
							lens_option = "Sunglasses";
							sunlens_price = mirrored_tint_additional_price;
							jQuery(".container_popup").css("display","none");
							jQuery("body").removeClass("lens_body");
							add_to_cart = "enabled";
						}
					});

					jQuery("#confirm_polarized_mirrored").click(function(){
						if(jQuery(this).parent("div").siblings(".col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let polarized_mirror_colour = jQuery(this).parent("div").siblings(".col").children(".active").html();
							colour = polarized_mirror_colour ;
							lens_type ="Polarized - Mirrored Tint";
							current_page = "lens_options";
							sunlens_price = polarized_mirrored_tint_additional_price;
							bluelight_price = 0 ;
							lightadjusting_price = 0;
							prescription_values = 'No Prescription';
							usage = "Sunglasses";
							lens_option = "Sunglasses";
							usage = "Sunglasses";
							lens_option = "Sunglasses";
							jQuery(".container_popup").css("display","none");
							jQuery("body").removeClass("lens_body");
							add_to_cart = "enabled";
						}
					});

					jQuery("#confirm_polarized_basic").click(function(){
						if(jQuery(this).parent("div").siblings(".col").children(".active").html() == null){
								alert("Please select Colour.");
						}else{
							let polarized_basic_colour = jQuery(this).parent("div").siblings(".col").children(".active").html();
							colour = polarized_basic_colour ;
							lens_type ="Polarized - Basic Tint";
							current_page = "lens_options";
							sunlens_price = polarized_basic_tint_additional_price;
							bluelight_price = 0 ;
							lightadjusting_price = 0;
							prescription_values = 'No Prescription';
							usage = "Sunglasses";
							lens_option = "Sunglasses";
							jQuery(".container_popup").css("display","none");
							jQuery("body").removeClass("lens_body");
							add_to_cart = "enabled";
						}
					});
					prod_exists="true";
					
					window.setInterval(function(){
						
						if(add_to_cart == 'disabled'){
						  jQuery(".single_add_to_cart_button").attr("disabled",true);
						}else if(add_to_cart == 'enabled'){
						  jQuery(".single_add_to_cart_button").attr("disabled",false);
						}

						product_final_price = Number(usage_price) + Number(lightadjusting_price) + Number(lensoption_price) + Number(customizelens_price) + Number(bluelight_price) + Number(sunlens_price);

						product_total_price_lens_frame = product_original_price + product_final_price;

						jQuery(".entry-summary .summary-inner").children(".price").html("<span class='woocommerce-Price-amount amount'><span>Frame Price : "+currency_symbol+product_original_price+"</span></br><span>Lens Price : "+currency_symbol+product_final_price+"</span></br><span>Total Price : "+currency_symbol+product_total_price_lens_frame+"</span></span>");
					}, 1);
				}
			}else if(response == 'false'){
				jQuery("#show_lenses_popup").hide();
				add_to_cart = "enabled";
				prod_exists="false";
			}
		}
	});
});

/*NITIN KARWAL*/



+function ($) {
	'use strict';

	// CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	// ============================================================

	function transitionEnd() {
		var el = document.createElement('bootstrap')

		var transEndEventNames = {
			WebkitTransition: 'webkitTransitionEnd',
			MozTransition: 'transitionend',
			OTransition: 'oTransitionEnd otransitionend',
			transition: 'transitionend'
		}

		for (var name in transEndEventNames) {
			if (el.style[name] !== undefined) {
				return { end: transEndEventNames[name] }
			}
		}

		return false // explicit for ie8 (  ._.)
	}

	// http://blog.alexmaccaw.com/css-transitions
	$.fn.emulateTransitionEnd = function (duration) {
		var called = false
		var $el = this
		$(this).one('bsTransitionEnd', function () { called = true })
		var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
		setTimeout(callback, duration)
		return this
	}

	$(function () {
		$.support.transition = transitionEnd()

		if (!$.support.transition) return

		$.event.special.bsTransitionEnd = {
			bindType: $.support.transition.end,
			delegateType: $.support.transition.end,
			handle: function (e) {
				if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
			}
		}
	})

}(jQuery);
+function ($) {
	'use strict';

	// CAROUSEL CLASS DEFINITION
	// =========================

	var Carousel = function (element, options) {
		this.$element = $(element)
		this.$indicators = this.$element.find('.carousel-indicators')
		this.options = options
		this.paused = null
		this.sliding = null
		this.interval = null
		this.$active = null
		this.$items = null

		this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

		this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
			.on('mouseenter.bs.carousel', $.proxy(this.pause, this))
			.on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	}

	Carousel.VERSION = '3.4.1'

	Carousel.TRANSITION_DURATION = 600

	Carousel.DEFAULTS = {
		interval: 5000,
		pause: 'hover',
		wrap: true,
		keyboard: true
	}

	Carousel.prototype.keydown = function (e) {
		if (/input|textarea/i.test(e.target.tagName)) return
		switch (e.which) {
			case 37: this.prev(); break
			case 39: this.next(); break
			default: return
		}

		e.preventDefault()
	}

	Carousel.prototype.cycle = function (e) {
		e || (this.paused = false)

		this.interval && clearInterval(this.interval)

		this.options.interval
			&& !this.paused
			&& (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

		return this
	}

	Carousel.prototype.getItemIndex = function (item) {
		this.$items = item.parent().children('.itemCarousel')
		return this.$items.index(item || this.$active)
	}

	Carousel.prototype.getItemForDirection = function (direction, active) {
		var activeIndex = this.getItemIndex(active)
		var willWrap = (direction == 'prev' && activeIndex === 0)
			|| (direction == 'next' && activeIndex == (this.$items.length - 1))
		if (willWrap && !this.options.wrap) return active
		var delta = direction == 'prev' ? -1 : 1
		var itemIndex = (activeIndex + delta) % this.$items.length
		return this.$items.eq(itemIndex)
	}

	Carousel.prototype.to = function (pos) {
		var that = this
		var activeIndex = this.getItemIndex(this.$active = this.$element.find('.itemCarousel.active'))

		if (pos > (this.$items.length - 1) || pos < 0) return

		if (this.sliding) return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
		if (activeIndex == pos) return this.pause().cycle()

		return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
	}

	Carousel.prototype.pause = function (e) {
		e || (this.paused = true)

		if (this.$element.find('.next, .prev').length && $.support.transition) {
			this.$element.trigger($.support.transition.end)
			this.cycle(true)
		}

		this.interval = clearInterval(this.interval)

		return this
	}

	Carousel.prototype.next = function () {
		if (this.sliding) return
		return this.slide('next')
	}

	Carousel.prototype.prev = function () {
		if (this.sliding) return
		return this.slide('prev')
	}

	Carousel.prototype.slide = function (type, next) {
		var $active = this.$element.find('.itemCarousel.active')
		var $next = next || this.getItemForDirection(type, $active)
		var isCycling = this.interval
		var direction = type == 'next' ? 'left' : 'right'
		var that = this

		if ($next.hasClass('active')) return (this.sliding = false)

		var relatedTarget = $next[0]
		var slideEvent = $.Event('slide.bs.carousel', {
			relatedTarget: relatedTarget,
			direction: direction
		})
		this.$element.trigger(slideEvent)
		if (slideEvent.isDefaultPrevented()) return

		this.sliding = true

		isCycling && this.pause()

		if (this.$indicators.length) {
			this.$indicators.find('.active').removeClass('active')
			var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
			$nextIndicator && $nextIndicator.addClass('active')
		}

		var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
		if ($.support.transition && this.$element.hasClass('slide')) {
			$next.addClass(type)
			if (typeof $next === 'object' && $next.length) {
				$next[0].offsetWidth // force reflow
			}
			$active.addClass(direction)
			$next.addClass(direction)
			$active
				.one('bsTransitionEnd', function () {
					$next.removeClass([type, direction].join(' ')).addClass('active')
					$active.removeClass(['active', direction].join(' '))
					that.sliding = false
					setTimeout(function () {
						that.$element.trigger(slidEvent)
					}, 0)
				})
				.emulateTransitionEnd(Carousel.TRANSITION_DURATION)
		} else {
			$active.removeClass('active')
			$next.addClass('active')
			this.sliding = false
			this.$element.trigger(slidEvent)
		}

		isCycling && this.cycle()

		return this
	}


	// CAROUSEL PLUGIN DEFINITION
	// ==========================

	function Plugin(option) {
		return this.each(function () {
			var $this = $(this)
			var data = $this.data('bs.carousel')
			var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
			var action = typeof option == 'string' ? option : options.slide

			if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
			if (typeof option == 'number') data.to(option)
			else if (action) data[action]()
			else if (options.interval) data.pause().cycle()
		})
	}

	var old = $.fn.carousel

	$.fn.carousel = Plugin
	$.fn.carousel.Constructor = Carousel


	// CAROUSEL NO CONFLICT
	// ====================

	$.fn.carousel.noConflict = function () {
		$.fn.carousel = old
		return this
	}


	// CAROUSEL DATA-API
	// =================

	// var clickHandler = function (e) {
	// 	var $this = $(this)
	// 	var href = $this.attr('href')
	// 	if (href) {
	// 		href = href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
	// 	}

	// 	var target = $this.attr('data-target') || href
	// 	var $target = $(document).find(target)

	// 	if (!$target.hasClass('carousel')) return

	// 	var options = $.extend({}, $target.data(), $this.data())
	// 	var slideIndex = $this.attr('data-slide-to')
	// 	if (slideIndex) options.interval = false

	// 	Plugin.call($target, options)

	// 	if (slideIndex) {
	// 		$target.data('bs.carousel').to(slideIndex)
	// 	}

	// 	e.preventDefault()
	// }

	// $(document)
	// 	.on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
	// 	.on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

	$(window).on('load', function () {
		$('[data-ride="carousel"]').each(function () {
			var $carousel = $(this)
			Plugin.call($carousel, $carousel.data())
		})
	})

}(jQuery);
