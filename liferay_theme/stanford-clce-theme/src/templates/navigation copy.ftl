<div id="navigation-header" class="navbar">
	<div class="container">	
		<nav class="${nav_css_class} nav_item_menu_break-${nav_item_counter}" id="navigation" role="navigation">
			<ul class="main-navigation navbar-blank navbar-nav navbar-site" aria-label="<@liferay.language key="site-pages" />" role="menubar">
				<#list nav_items as nav_item>
					<#assign
						nav_item_attr_has_popup = ""
						nav_item_css_class = "first-nav-item"
						nav_item_layout = nav_item.getLayout()
					/>

					<#if nav_item.isSelected()>
						<#assign
							nav_item_attr_has_popup = "aria-haspopup='true'"
							nav_item_css_class = "selected"
						/>
					</#if>

					<li class="${nav_item_css_class}" id="layout_${nav_item.getLayoutId()}" role="presentation">
						
						<#if nav_item.hasChildren()>
							<span><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</span>
						<#else>
							<a aria-labelledby="layout_${nav_item.getLayoutId()}" ${nav_item_attr_has_popup} href="${nav_item.getURL()}" ${nav_item.getTarget()} role="menuitem"><span><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</span></a>
						</#if>
					</li>
					
				</#list>
			</ul>
			<div class="main-navigation__container ">
				<#list nav_items as nav_item>
					<#if nav_item.hasChildren()>
						<div class="main-navigation__block layout_${nav_item.getLayoutId()}">
							<div class="main-navigation__group level-1">
								<div>
									<#list nav_item.getChildren() as nav_child>
										<#assign
											nav_child_css_class = ""
										/>

										<#if nav_child.isSelected()>
											<#assign
												nav_child_css_class = "selected"
											/>
										</#if>
										<#if nav_child.hasChildren()>
											<div class="${nav_child_css_class} main-navigation__item has-children" id="layout_${nav_child.getLayoutId()}" role="presentation">
												<a role="menuitem">${nav_child.getName()}</a>
											</div>
											<div class="main-navigation__group level-2">
												<ul>
													<#list nav_child.getChildren() as nav_grandchild>
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
										<#else>
											<div class="${nav_child_css_class} main-navigation__item" id="layout_${nav_child.getLayoutId()}" role="presentation">
												<a aria-labelledby="layout_${nav_child.getLayoutId()}" href="${nav_child.getURL()}" ${nav_child.getTarget()} role="menuitem">${nav_child.getName()}</a>
											</div>

										</#if>
									</#list>
									<div class="main-navigation__group level-3">
										<ul>
											<li class="main-navigation__item"><a>Forms</a></li>
											<li class="main-navigation__item"><a>Contact Us</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</#if>
				</#list>
			</div>
		</nav>
	</div>
</div>


<div id="navigation-mobile" class="navigation-mobile-off">
	<div class="main-navigation">
		<div class="first-navigation navigation-mobile">
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
				<div class="${nav_item_css_class} main-item" id="layout_${nav_item.getLayoutId()}">
					<#if nav_item.hasChildren()>
						<span>${nav_item.getName()}</span>
					<#else>
						<a aria-labelledby="layout_${nav_item.getLayoutId()}" ${nav_item_attr_has_popup} href="${nav_item.getURL()}" ${nav_item.getTarget()} role="menuitem"><span><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_item.getName()}</span></a>
					</#if>
				</div>
			</#list>
		</div>
		
		<#list nav_items as nav_item>
			<#if nav_item.hasChildren()>
				<div class="child-navigation navigation-mobile layout_${nav_item.getLayoutId()}" style="display: none;">
					<div class="back-item">
						<a>
							<span>Back to the top</span>
						</a>
					</div>
					<#list nav_item.getChildren() as nav_child>
						<div class="${nav_item_css_class} nav-item" id="layout_${nav_child.getLayoutId()}">
							<#if nav_item.hasChildren()>
								<span>${nav_child.getName()}</span>
							<#else>
								<a aria-labelledby="layout_${nav_child.getLayoutId()}" href="${nav_child.getURL()}"><span><@liferay_theme["layout-icon"] layout=nav_item_layout /> ${nav_child.getName()}</span></a>
							</#if>
						</div>						
					</#list>
					</div>
				</div>
			</#if>
		</#list>
		<#list nav_items as nav_item>
			<#if nav_item.hasChildren()>
				<#list nav_item.getChildren() as nav_child>
					<#if nav_child.hasChildren()>
						<div class="child-navigation navigation-mobile layout_${nav_child.getLayoutId()}" style="display: none;">
							<div class="back-item">
							<a><span>Back to the top</span></a>
						</div>
						<#list nav_child.getChildren() as nav_granChild>
							<div class="nav-item" id="layout_${nav_granChild.getLayoutId()}">
								<a aria-labelledby="layout_${nav_granChild.getLayoutId()}" href="${nav_granChild.getURL()}"><span>${nav_granChild.getName()}</span></a>
							</div>
						</#list>
					</#if>
				</#list>
			</#if>
		</#list>
	</div>
</div>