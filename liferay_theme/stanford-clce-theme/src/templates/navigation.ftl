<div id="navigation-header" class="navbar">
	<div class="container">	
		<nav class="${nav_css_class} nav_item_menu_break-${nav_item_counter}" id="navigation" role="navigation">
			<ul class="main-navigation navbar-blank navbar-nav navbar-site" aria-label="<@liferay.language key="site-pages" />" role="menubar">
				<#--PR #37 Navigation Issue for duplication pages display -->
				<#list nav_items as nav_item>
					<#-- DSLIFE-3402 Try/Catch -->
					<#attempt>
						<#assign scopeIndividual = 4>
						<#--assign hasLayoutPermission = resourcePermissionLocalService.hasResourcePermission(company_id, "com.liferay.portal.kernel.model.Layout", scopeIndividual, nav_item.getLayout().getPlid()?c, curUserRoleID, "VIEW")>
						<#--if !hasLayoutPermission>
							<#continue>
						</#if-->
						<#assign
							nav_item_attr_has_popup = ""
							nav_item_css_class = ""
							nav_item_layout = nav_item.getLayout()
						/>

						<#if nav_item.isSelected()>
							<#assign
								nav_item_attr_has_popup = "aria-haspopup='true'"
								nav_item_css_class = "selected"
							/>
						</#if>
						<#assign nav_item_has_child = "" />
						<#if nav_item.hasChildren()>
							<#assign
								nav_item_has_child = "has-Children" 
							/>
						</#if>
						<li class="first-nav-item ${nav_item_css_class} ${nav_item_has_child}" id="layout_${nav_item.getLayoutId()}" role="presentation">
							<a aria-labelledby="layout_${nav_item.getLayoutId()}" ${nav_item_attr_has_popup} href="${nav_item.getURL()}" ${nav_item.getTarget()} role="menuitem"><span><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</span></a>

							<#if nav_item.hasChildren()>
								<div class="main-navigation__block layout_${nav_item.getLayoutId()}"   >
									<#assign children = nav_item.getChildren()>
									<#assign submenuClass = (children?size < 10) />
																<#if submenuClass >
																<#assign submenuClassName = "col1" />
																	<#else>
																	<#assign submenuClassName = "col2" />
																</#if>
									<#list children?chunk(10) as row>
										
										<div class="main-navigation__group level-1  ${submenuClassName}">
											<div>
												<#list row as nav_child>
													<#assign
													nav_child_css_class = ""
													/>

													<#if nav_child.isSelected()>
														<#assign
														nav_child_css_class = "selected"
														/>
													</#if>
													<#assign nav_child_has_child = "" />
													<#if nav_child.hasChildren()>
														<#assign
														nav_child_has_child = "has-Children"
														/>
														<#assign nav_child_has_childClass = (nav_child.getChildren()?size < 10) />
																<#if nav_child_has_childClass >
																<#assign nav_child_has_childName = "col1" />
																	<#else>
																	<#assign nav_child_has_childName = "col2" />
																</#if>
													</#if>
													 <#assign childrenMap = {}>
													<#if nav_child.hasChildren()>
														<#assign childrenMap = childrenMap + {"layout_"+nav_child.getLayoutId() : nav_child.getChildren()}>
														<div class="main-navigation__item ${nav_child_has_child} ${nav_child_css_class} ${nav_child_has_childName}" id="layout_${nav_child.getLayoutId()}" role="presentation"  >
															<a aria-labelledby="layout_${nav_child.getLayoutId()}" href="${nav_child.getURL()}" ${nav_child.getTarget()} role="menuitem">${nav_child.getName()}</a>
															<div class="square-pointer"></div>
																<#list childrenMap as key, value>
																	<#assign childmenuClass = (value?size < 10) />
																<#if childmenuClass >
																<#assign childmenuClassName = "col1" />
																	<#else>
																	<#assign childmenuClassName = "col2" />
																</#if>
																<#list value?chunk(10) as row>
															 <div class="main-navigation__group level-2 ${key} ${childmenuClassName} "  >
																
																		<ul>
																			<#list row as nav_grandchild>
																				<#assign
																				nav_child_css_class = ""
																				/>
					
																				<#if nav_grandchild.isSelected()>
																					<#assign
																					nav_child_css_class = "selected"
																					/>
																				</#if>
																				<li class="${nav_child_css_class} main-navigation__item" id="layout_${nav_grandchild.getLayoutId()}" role="presentation">
																					<a aria-labelledby="layout_${nav_grandchild.getLayoutId()}" href="${nav_grandchild.getURL()}" ${nav_grandchild.getTarget()} role="menuitem">${nav_grandchild.getName()}</a>
																				</li>
																			</#list>
																		</ul>
																	</div>
																</#list>
															</#list>
														</div>
													<#else>
														<div class="main-navigation__item ${nav_child_has_child} ${nav_child_css_class}" id="layout_${nav_child.getLayoutId()}" role="presentation"  >
															<a aria-labelledby="layout_${nav_child.getLayoutId()}" href="${nav_child.getURL()}" ${nav_child.getTarget()} role="menuitem">${nav_child.getName()}</a>
														</div>
													</#if>
												</#list>
											</div>
										</div>
									
									</#list>
								</div>
							</#if>
						</li>
					<#recover>
						<#-- Do nothing -->
					</#attempt>
				</#list>
			</ul>
			<div class="main-navigation__container" style="display: none;">
				<#list nav_items as nav_item>
					<#if nav_item.hasChildren()>
						<div class="main-navigation__block layout_${nav_item.getLayoutId()}">
							<#assign children = nav_item.getChildren()>
							<#list children?chunk(10) as row>
								<#assign childrenMap = {}>
								<div class="main-navigation__group level-1">
									<div>
										<#list row as nav_child>
											<#assign
											nav_child_css_class = ""
											/>

											<#if nav_child.isSelected()>
												<#assign
												nav_child_css_class = "selected"
												/>
											</#if>
											<#if nav_child.hasChildren()>
												<#assign childrenMap = childrenMap + {"layout_"+nav_child.getLayoutId() : nav_child.getChildren()}>
												<div class="${nav_child_css_class} main-navigation__item has-children" id="layout_container_${nav_child.getLayoutId()}" role="presentation" onmouseover="showSubMenus('layout_${nav_child.getLayoutId()}')">
													<a role="menuitem">${nav_child.getName()}</a>
												</div>
												<div class="square-pointer"></div>
											<#else>
												<div class="${nav_child_css_class} main-navigation__item" id="layout_container_${nav_child.getLayoutId()}" role="presentation">
													<a aria-labelledby="layout_container_${nav_child.getLayoutId()}" href="${nav_child.getURL()}" ${nav_child.getTarget()} role="menuitem">${nav_child.getName()}</a>
												</div>

											</#if>
										</#list>
									</div>
								</div>
								<#list childrenMap as key, value>
									<#list value?chunk(10) as row>
										<div class="main-navigation__group level-2 ${key}" onmouseout="hideSubMenus(${key})">
											<ul>
												<#list row as nav_grandchild>
													<#assign
													nav_child_css_class = ""
													/>

													<#if nav_grandchild.isSelected()>
														<#assign
														nav_child_css_class = "selected"
														/>
													</#if>
													<li class="${nav_child_css_class} main-navigation__item" id="layout_container_${nav_grandchild.getLayoutId()}" role="presentation">
														<a aria-labelledby="layout_container_${nav_grandchild.getLayoutId()}" href="${nav_grandchild.getURL()}" ${nav_grandchild.getTarget()} role="menuitem">${nav_grandchild.getName()}</a>
													</li>
												</#list>
											</ul>
										</div>
									</#list>
								</#list>
							</#list>
						</div>
					</#if>
				</#list>
			</div>
		</nav>
	</div>
</div>


<div id="navigation-mobile" class="navigation-mobile-off">
	<div class="main-navigation">
		<#assign subLayoutList = []>
		<div class="first-navigation navigation-mobile" id="fist-mobile-navigation">
			<#list nav_items as nav_item>
				<#assign
					nav_item_attr_has_popup = ""
					nav_item_css_class = ""
					nav_item_layout = nav_item.getLayout()
				/>

				<#if nav_item.isSelected()>
					<#assign
						nav_item_attr_has_popup = "aria-haspopup='true'"
						nav_item_css_class = "selected"
					/>
				</#if>
				<div class="${nav_item_css_class} main-item" id="layout_mobile_${nav_item.getLayoutId()}">
					<#if nav_item.hasChildren()>
						<span>${nav_item.getName()}</span>
						<#assign subLayoutList = subLayoutList + [nav_item]>
					<#else>
						<a class="no-children" aria-labelledby="layout_mobile_${nav_item.getLayoutId()}" ${nav_item_attr_has_popup} href="${nav_item.getURL()}" ${nav_item.getTarget()} role="menuitem"><span><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</span></a>
					</#if>
				</div>
			</#list>
		</div>
		<#-- DSLIFE-1785 class="no-children" -->
		<#assign grandChildrenList = []>
		<#list subLayoutList as nav_item>
			<div class="child-navigation navigation-mobile layout_${nav_item.getLayoutId()}" style="display: none;" id="layout_mobile_${nav_item.getLayoutId()}_mobile_menu">
				<div class="back-item">
					<a>
						<span>Back to the top</span>
					</a>
				</div>
				<div class="nav-item" id="layout_mobile_${nav_item.getLayoutId()}">
					<a aria-labelledby="layout_mobile_${nav_item.getLayoutId()}" href="${nav_item.getURL()}"><span>Visit ${nav_item.getName()} Landing Page</span></a>
				</div>
				<#list nav_item.getChildren() as nav_child>
					<div class="nav-item" id="layout_mobile_${nav_child.getLayoutId()}">
						<#if nav_child.hasChildren()>
							<span>${nav_child.getName()}</span>
							<#assign grandChildrenList = grandChildrenList + [nav_child]>
						<#else>
							<a class="no-children" aria-labelledby="layout_mobile_${nav_child.getLayoutId()}" href="${nav_child.getURL()}"><span><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_child.getName()}</span></a>
						</#if>
					</div>
				</#list>
			</div>
		</#list>
		<#list grandChildrenList as nav_child>
			<div class="child-navigation navigation-mobile layout_${nav_child.getLayoutId()}" style="display: none;" id="layout_mobile_${nav_child.getLayoutId()}_mobile_menu">
				<div class="back-item">
					<a>
						<span>Back to the top</span>
					</a>
				</div>
				<div class="nav-item" id="layout_mobile_${nav_child.getLayoutId()}">
					<a aria-labelledby="layout_mobile_${nav_child.getLayoutId()}" href="${nav_child.getURL()}"><span>Visit ${nav_child.getName()} Landing Page</span></a>
				</div>
				<#list nav_child.getChildren() as nav_grandChild>
					<div class="nav-item" id="layout_mobile_${nav_grandChild.getLayoutId()}">
						<a aria-labelledby="layout_mobile_${nav_grandChild.getLayoutId()}" href="${nav_grandChild.getURL()}"><span>${nav_grandChild.getName()}</span></a>
					</div>
				</#list>
			</div>
		</#list>
	</div>
</div>

<script>
	function showSubMenus(name){
		hideAllSubMenus();
		let columns = document.getElementsByClassName(name);
		for (let i = 0; i < columns.length; i++) {
		 	columns.item(i).style.display = "block"; 
		}
	}
	function hideSubMenus(name){
		let columns = document.getElementsByClassName(name);
		for (let i = 0; i < columns.length; i++) {
			columns.item(i).style.display = "none";
		}
	}
	function hideAllSubMenus(){
		let columns = document.getElementsByClassName("level-2");
		console.log(columns.length);
		for (let i = 0; i < columns.length; i++) {
		 	columns.item(i).style.display = "none"; 
		}
	}

	function hideAllSubMenusItems(){
		let columns = document.getElementsByClassName("main-navigation__item");
		for (let i = 0; i < columns.length; i++) {
			console.log(columns.item(i));
		 	columns.item(i).style.display = "none";  
		}
	}
jQuery(document).ready(function() {
    jQuery('#navigation-header .first-nav-item.has-Children .main-navigation__item').on('hover mouseover mouseenter focusin', function() {
        if (jQuery(this).hasClass('has-Children')) {
            jQuery(this).closest('.main-navigation__group.level-1').addClass('has-Children')
            if (jQuery(this).hasClass('col2')) {
           		 jQuery(this).closest('.main-navigation__group.level-1').addClass('doubleTab')  
	        } else { 
	            jQuery(this).closest('.main-navigation__group.level-1').removeClass('doubleTab') 
	        }
        } else {
            jQuery(this).closest('.main-navigation__group.level-1').removeClass('has-Children')
        }
    });
    jQuery('#navigation-header .first-nav-item.has-Children .main-navigation__item.has-Children ').on('hover mouseover mouseenter focusin', function() {
        jQuery(this).closest('.main-navigation__block').removeAttr('style');
        const level1 = Math.round(jQuery(this).closest('.main-navigation__group.level-1').height());
        const level2 = Math.round(jQuery(this).closest('.main-navigation__group.level-1').find('.main-navigation__group.level-2.' + jQuery(this).attr('id') + ' ').height());
        const level2hc = jQuery(this).closest('.main-navigation__group.level-1').find('.main-navigation__group.level-2.' + jQuery(this).attr('id') + ' ');
        if (level2 > level1) {
            jQuery(this).closest('.main-navigation__block').height(level2)
            level2hc.removeAttr('style')
        } else {
            level2hc.height(level1)
            jQuery(this).closest('.main-navigation__block').removeAttr('style')
        }
    })
});
</script>