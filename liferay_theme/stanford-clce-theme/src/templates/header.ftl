    <div class="header-section row justify-content-center">
     <div align="left" class="col-3">
          <div class="logo-area"> <a class="${logo_css_class}" href="${site_default_url}"
                    title="<@liferay.language_format arguments=" ${site_name}" key="go-to-x" />">
               <img alt="Go to Home" src="${site_logo}" />
               </a>
               <div class="vline"></div>
               <div class="header-title">Course Research</div>
          </div>
     </div>
     <div align="right" class="col-5">
          <div class="search-box">
               <div class="dropdown search-dropdown-btn"><button class="dropdown-toggle btn" type="button"
                         aria-controls="search-dropdown-menu" aria-expanded="false" aria-haspopup="true">All <img
                              src="${images_folder}/icons/angle_down_icon.svg"></button>
                    <div id="search-dropdown-menu" class="dropdown-menu " role="presentation">
                         <ul class="list-unstyled" role="menu">
                              <li role="presentation">
                                   <button class="dropdown-item" role="menuitem" tabindex="-1">All</button>
                              </li>
                              <li role="presentation"><button class="dropdown-item" role="menuitem"
                                        tabindex="-1">Core</button></li>
                              <li role="presentation"><button class="dropdown-item" role="menuitem"
                                        tabindex="-1">Electives</button></li>
                         </ul>
                    </div>
               </div>
               <div class="search-input">  
                     <input type="text" placeholder="Search for Course ID, Area, Title, or Instructor" />
               <button class="btn" role="menuitem" tabindex="-1"><img src="${images_folder}/icons/search_icon.svg"></button> 
                 </div>
          </div>
     </div>
     <div align="right" class="col-4">
          <div class="header-right"   >
          <div class="grp-btns">      <button class="icon-btn btn" role="menuitem"><img src="${images_folder}/icons/edu_icon.svg"> </button>
               <button class="icon-btn btn" role="menuitem"><img src="${images_folder}/icons/note_fill_icon.svg"> </button>
               <button class="icon-btn btn" role="menuitem"><img src="${images_folder}/icons/fav_fill_icon.svg"> </button> </div>
               <button class="howto-btn btn btn-primary" type="button"> <img src="${images_folder}/icons/info_icon.svg">
                    How To </button>
               <div class="dropdown profile-btn"><button class="dropdown-toggle btn" type="button"
                         aria-controls="profile-dropdown-menu" aria-expanded="false" aria-haspopup="true">John Doe<img
                              src="${images_folder}/icons/angle_down_icon.svg"></button>
                    <div id="profile-dropdown-menu" class="dropdown-menu " role="presentation">
                         <ul class="list-unstyled" role="menu">
                              <li role="presentation"><button class="dropdown-item" role="menuitem" tabindex="-1"><img
                                             src="${images_folder}/icons/outside_link_icon.svg"> Overall
                                        Journey</button>
                              </li>
                              <li role="presentation"><button class="dropdown-item" role="menuitem" tabindex="-1"><img
                                             src="${images_folder}/icons/outside_link_icon.svg"> GSB Course
                                        Research</button>
                              </li>
                              <li role="presentation"><button class="dropdown-item" role="menuitem" tabindex="-1"><img
                                             src="${images_folder}/icons/outside_link_icon.svg"> GSB
                                        Registration</button>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     </div>
</div> 
<script>
 $(document).ready(function() {
	jQuery('.search-dropdown-btn .dropdown-toggle').click(function(){ 
	  jQuery('#'+jQuery(this).attr('aria-controls')).toggleClass('show')  
	})
		jQuery('.profile-btn .dropdown-toggle').click(function(){ 
	  jQuery('#'+jQuery(this).attr('aria-controls')).toggleClass('show')  
	})
 });
	window.onscroll = function() {stickyHeader()};
	
	function stickyHeader() {
		const htmlElement = document.querySelector(':root')
		let header = document.getElementById("header");
		let content = document.getElementById("content");
        let toolbar = document.getElementsByClassName("fragments-editor-toolbar")[0];
        let controlMenu = document.getElementById('ControlMenu');
		let y = htmlElement.scrollTop;
	

		if ((window.scrollY > header.offsetTop)) {
			
			if (toolbar) {
				header.classList.add("sticky");
				header.classList.add("sticky-toolbar");
				content.style.marginTop = header.offsetHeight + "px";
			} else if (controlMenu){
				header.classList.add("sticky");
				content.style.marginTop = header.offsetHeight + "px";
			} else {
				header.classList.add("sticky");
				header.classList.add("sticky-no-control__menu");
			}

		} else if(y == 0){
			header.classList.remove("sticky");
			header.classList.remove("sticky-toolbar");
			header.classList.remove("sticky-no-control__menu");
			content.style.marginTop = "0px";
	}
	}
</script>