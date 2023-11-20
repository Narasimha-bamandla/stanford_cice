/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

/* eslint-disable prefer-arrow-callback */
AUI().ready(
	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	function() {}
);

Liferay.Portlet.ready(
	/*
	This function gets loaded after each and every portlet on the page.

	portletId: the current portlet's id
	node: the Alloy Node object of the current portlet
	*/

	function(_portletId, _node) {}
	
	//Liferay.Portlet.close('#p_p_id_com_liferay_portal_search_web_search_bar_portlet_SearchBarPortlet_INSTANCE_templateSearch_');
);

Liferay.on(
	'allPortletsReady',

	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	*/

	function() {}
);

$( document ).ready(function() {
	
	$("#search-header .search-bar .search-bar-keywords-input-wrapper input[type='text']").attr("aria-label", "enter search term");
	$("#search-header .search-bar .btn").attr("aria-label", "search button");
	$("#button-menu-search .search-icon.search-toggler-icon").click(function() {
		$("#search-header").toggleClass("search-on search-off");
		$(this).hide();
	});
	$("#search-header .search-icon.search-close-icon").click(function() {
		$("#search-header").toggleClass("search-off search-on");
		$("#button-menu-search .search-icon.search-toggler-icon").show();
	});
	$("#button-menu-mobile").click(function() {
		$("#heading").toggleClass("active");
		$("body").toggleClass("no-scroll");
		$("#fist-mobile-navigation").show();
		$(".child-navigation.navigation-mobile").hide();
		$("#button-menu-mobile").toggleClass("button-mobile-off button-mobile-on");
		$("#navigation-mobile").toggleClass("navigation-mobile-off navigation-mobile-on");
	});
	$(".main-item").click(function() {
		$(this).parent(".navigation-mobile").hide("fast");
		let id = $(this).attr('id');
		$("#"+id+"_mobile_menu").show("fast");
	});
	$(".nav-item").click(function() {
		$(this).parent(".navigation-mobile").hide("fast");
		let id = $(this).attr('id');
		$("#"+id+"_mobile_menu").show("fast");
	});
	$(".back-item").click(function() {
		$(this).parent(".navigation-mobile").hide("fast");
		$("#fist-mobile-navigation").show("fast");
	});
	
	 
});