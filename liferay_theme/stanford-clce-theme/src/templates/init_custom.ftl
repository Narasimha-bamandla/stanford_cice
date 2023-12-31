<#--
This file allows you to override and define new FreeMarker variables.
-->
   
  

 <#assign gaAnalytics = getterUtil.getString(theme_settings["ga-script"])>
 <#assign showHeaderTitle = getterUtil.getBoolean(theme_settings["show-header-title"])>
  <#assign headerTitle = getterUtil.getString(theme_settings["header-title"])>
   <#assign showSearch = getterUtil.getBoolean(theme_settings["show-search"])>
   <#assign showDegreePprogress = getterUtil.getBoolean(theme_settings["show-degree-progress"])>
   <#assign showMyNotes = getterUtil.getBoolean(theme_settings["show-my-notes"])>
   <#assign showWishlist = getterUtil.getBoolean(theme_settings["show-wishlist"])>
 
<#assign ddmTemplateLocalService = serviceLocator.findService("com.liferay.dynamic.data.mapping.service.DDMTemplateLocalService")>
<#assign resourcePermissionLocalService = serviceLocator.findService("com.liferay.portal.kernel.service.ResourcePermissionLocalService")>

 <#assign siteNavigationMenuLocalService = serviceLocator.findService("com.liferay.site.navigation.service.SiteNavigationMenuLocalService")>
 

<#assign program = "">
<#assign audienceType = "">
<#if is_signed_in>
    <#assign userRoles = user.getRoles() >
    <#list userRoles as cur_userRole>
        <#if stringUtil.matches(cur_userRole.getName(), "MyGSB_") || stringUtil.matches(cur_userRole.getName(), "GSB_") >
            <#assign curUserRoleID = cur_userRole.getRoleId()>
            <#assign audienceType = cur_userRole.getName()>
            <#assign program = cur_userRole.getExpandoBridge().getAttribute("Program")>
            <#break>
        </#if>
    </#list>
</#if>