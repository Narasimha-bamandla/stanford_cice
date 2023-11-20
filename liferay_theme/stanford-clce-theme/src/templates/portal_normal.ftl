<!DOCTYPE html>

<#include init />

<html class="${root_css_class}" dir="<@liferay.language key="lang.dir" />" lang="${w3c_language_id}">

<head>
	<title>${the_title} - ${company_name}</title>

	<meta content="initial-scale=1.0, width=device-width" name="viewport" />

	<@liferay_util["include"] page=top_head_include />
     <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
     
	 <script type="text/javascript">
	<#if audienceType?has_content>
		 var audienceType = "${audienceType}";
	<#else>
	     var audienceType = "Unknown";	 
	 </#if>
	 </script>

	 <script data-senna-track="permanent" id="googleAnalyticsScript" type="text/javascript">
     ${gaAnalytics}
	 </script>
	<link href="${images_folder}/favicon.ico" rel="icon" />
	
</head>

<body class="${css_class}">

<@liferay_ui["quick-access"] contentId="#main-content" />

<@liferay_util["include"] page=body_top_include />

<@liferay.control_menu />

<div class="container-fluid" id="wrapper">
	 
		<#include "${full_templates_path}/header.ftl" /> 
	
	<section id="content">
		<h2 class="hide-accessible" role="heading" aria-level="1">${the_title}</h2>

		<#if selectable>
			<@liferay_util["include"] page=content_include />
		<#else>
			${portletDisplay.recycle()}

			${portletDisplay.setTitle(the_title)}

			<@liferay_theme["wrap-portlet"] page="portlet.ftl">
				<@liferay_util["include"] page=content_include />
			</@>
		</#if>
	</section>
	  
	 
	
</div>

<@liferay_util["include"] page=body_bottom_include />

<@liferay_util["include"] page=bottom_include />

<!-- inject:js -->

<link rel="stylesheet" href="${javascript_folder}/DataTables/datatables.min.css">
<script src="${javascript_folder}/DataTables/datatables.min.js" type="text/javascript"></script>
<script src="${javascript_folder}/custom.js" type="text/javascript"></script>
<!-- endinject -->

</body>

</html>