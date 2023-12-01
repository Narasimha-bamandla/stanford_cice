<div id="header" class="header-section row justify-content-center">
     <div align="left" class="col-3">
          <div class="logo-area"> <a class="${logo_css_class}" href="${site_default_url}"
                    title="<@liferay.language_format arguments=" ${site_name}" key="go-to-x" />">
               <img alt="Go to Home" src="${site_logo}" />
               </a>

               <#if showHeaderTitle>
                    <div class="vline"></div>
                    <div class="header-title">${headerTitle}</div>
               </#if>

          </div>
     </div>
     <div align="right" class="col-5">
          <#if showSearch>
               <#include "${full_templates_path}/search.ftl" />
          </#if>
     </div>
     <div align="right" class="col-4">
          <div class="header-right">
               <div class="grp-btns">   
                    <#if showDegreePprogress> 
                              <button title="Degree Progress" class="icon-btn btn lfr-portal-tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom"  data-title="Degree Progress" ><img
                                        src="${images_folder}/icons/edu_icon.svg">
                              </button> 
                              
                    </#if>
                    <#if showMyNotes>  
                              <button class="icon-btn btn lfr-portal-tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom"    data-title="My Notes"><img
                                        src="${images_folder}/icons/note_fill_icon.svg">
                              </button> 
                                
                    </#if>
                    <#if showWishlist> 
                              <button class="icon-btn btn lfr-portal-tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom"  data-title="Wishlist" ><img
                                        src="${images_folder}/icons/fav_fill_icon.svg">
                              </button> 
 
                    </#if>
               </div>  
                <button class="sdfd-btn sm-btn secondary-btn lfr-portal-tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom"    data-title="Learn more about the *current page name* and its function on How to" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                         <g clip-path="url(#clip0_7878_107842)">
                              <path d="M10.0003 13.3332V9.99984M10.0003 6.6665H10.0087M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z"
                                   stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                   stroke-linejoin="round"></path>
                         </g>
                         <defs>
                              <clipPath id="clip0_7878_107842">
                                   <rect width="20" height="20" fill="white"></rect>
                              </clipPath>
                         </defs>
                    </svg>
                    How To </button>  
                   
               <div class="DropdownList NavDropdownMenu  dropdown   dropdown-btn"> <button class="dropdown-toggle btn"
                         type="button" aria-controls="menulist-dropdown-menu" aria-expanded="false" aria-haspopup="true"
                         active="0">John Doe <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.19995 6.40039L7.99995 11.2004L12.8 6.40039" stroke="currentColor"
                                   stroke-width="1.5" stroke-linecap="square" stroke-linejoin="bevel"></path>
                         </svg></button>
                    <div id="profile-dropdown-menu" class="dropdown-menu" role="presentation">
                         <div class="Menulinks">
                              <div class="menu-link"><a href="#"> <svg width="13" height="14" viewBox="0 0 13 14"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M10.5 7.66667V11.6667C10.5 12.0203 10.3595 12.3594 10.1095 12.6095C9.85943 12.8595 9.52029 13 9.16667 13H1.83333C1.47971 13 1.14057 12.8595 0.890524 12.6095C0.640476 12.3594 0.5 12.0203 0.5 11.6667V4.33333C0.5 3.97971 0.640476 3.64057 0.890524 3.39052C1.14057 3.14048 1.47971 3 1.83333 3H5.83333"
                                                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                             </path>
                                             <path d="M8.5 1H12.5V5" stroke="currentColor" stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                             <path d="M5.16797 8.33333L12.5013 1" stroke="currentColor"
                                                  stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg> Overall Journey</a></div>
                              <div class="menu-link"><a href="#"> <svg width="13" height="14" viewBox="0 0 13 14"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M10.5 7.66667V11.6667C10.5 12.0203 10.3595 12.3594 10.1095 12.6095C9.85943 12.8595 9.52029 13 9.16667 13H1.83333C1.47971 13 1.14057 12.8595 0.890524 12.6095C0.640476 12.3594 0.5 12.0203 0.5 11.6667V4.33333C0.5 3.97971 0.640476 3.64057 0.890524 3.39052C1.14057 3.14048 1.47971 3 1.83333 3H5.83333"
                                                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                             </path>
                                             <path d="M8.5 1H12.5V5" stroke="currentColor" stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                             <path d="M5.16797 8.33333L12.5013 1" stroke="currentColor"
                                                  stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>GSB Course Research</a></div>
                              <div class="menu-link"><a href="#"> <svg width="13" height="14" viewBox="0 0 13 14"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M10.5 7.66667V11.6667C10.5 12.0203 10.3595 12.3594 10.1095 12.6095C9.85943 12.8595 9.52029 13 9.16667 13H1.83333C1.47971 13 1.14057 12.8595 0.890524 12.6095C0.640476 12.3594 0.5 12.0203 0.5 11.6667V4.33333C0.5 3.97971 0.640476 3.64057 0.890524 3.39052C1.14057 3.14048 1.47971 3 1.83333 3H5.83333"
                                                  stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                             </path>
                                             <path d="M8.5 1H12.5V5" stroke="currentColor" stroke-linecap="round"
                                                  stroke-linejoin="round"></path>
                                             <path d="M5.16797 8.33333L12.5013 1" stroke="currentColor"
                                                  stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>GSB Registration</a></div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</div>
 
<script>

     jQuery(document).ready(function () {
     
 
        
          window.onscroll = function () { stickyHeader() };

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
                    } else if (controlMenu) {
                         header.classList.add("sticky");
                         content.style.marginTop = header.offsetHeight + "px";
                    } else {
                         header.classList.add("sticky");
                         header.classList.add("sticky-no-control__menu");
                    }

               } else if (y == 0) {
                    header.classList.remove("sticky");
                    header.classList.remove("sticky-toolbar");
                    header.classList.remove("sticky-no-control__menu");
                    content.style.marginTop = "0px";
               }
          }
     });
</script>