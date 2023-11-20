<#assign journalArticlePreferencesMap = {
                "groupId": "${group_id}",
                "articleId": "${alertWebContentId}"
            } />
            
        <#assign journalArticlePreferences = freeMarkerPortletPreferences.getPreferences(journalArticlePreferencesMap) />
            
        <@liferay_portlet["runtime"]
            defaultPreferences="${journalArticlePreferences}"
            portletProviderAction=portletProviderAction.VIEW
            portletName="com_liferay_journal_content_web_portlet_JournalContentPortlet"
            instanceId="AlertContent"
        />