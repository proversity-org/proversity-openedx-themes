$(document).ready(function(){$(".navbar-toggle").click(function(e){var t=$(".navbar-content").css("width");"350px"===t?$(".navbar-content > div").fadeOut(300,function(){$(".navbar-content").velocity({width:"0px"},200)}):"0px"===t&&$(".navbar-content").velocity({width:"350px"},200,function(){$(".navbar-content > div").delay(500).fadeIn(300)})}),$(".navbar-content-close-btn").click(function(e){$(".navbar-content > div").fadeOut(300,function(){$(".navbar-content").velocity({width:"0px"},200)})}),navbarLevel=0,$(".navbar-content-item").click(function(e){e.preventDefault();var t=$(this).attr("href"),t=t.replace("/","");if("#"!=t){$(this).parents("ul").children("li").hide(),$(this).parents("li").next(".submenu").velocity({left:0},200,"linear"),navbarLevel++;var i=$(this).text();$(".breadcrumbs").html("<li>"+i+"</li>");var t=t.replace("-"," ");$(".navbar-title").html(t)}}),$(".navbar-content-sub-item").click(function(e){e.preventDefault();var t=$(this).attr("href"),t=t.replace("/","");if("#"!=t){$(this).parents("ul").children("li").hide(),$(this).parents("li").next(".submenu").velocity({left:0},200,"linear");var i=$(this).text();$(".breadcrumbs").html($(".breadcrumbs").html()+"<li>"+i+"</li>");var t=t.replace("-"," ");$(".navbar-title").html(t)}}),$(".go-back").click(function(e){e.preventDefault();var t=$(this).attr("href"),t=t.replace("/","");if(1==navbarLevel)$(this).closest("ul").velocity({left:400},100,"linear"),$(this).parents("ul").parents("ul").children("li").fadeIn(),navbarLevel--,$(".breadcrumbs li:last-child").remove(),$(".navbar-title").html(t);else{$(this).parents("ul").parents("ul").children("li").fadeIn(),$(this).parents("ul").parents("ul").parents("ul").children("li").hide(),$(this).closest("ul").velocity({left:400},100,"linear"),$(this).parents("ul").parents("ul").children("li").fadeIn(),navbarLevel--,$(".breadcrumbs li:last-child").remove();var t=t.replace("-"," ");$(".navbar-title").html(t)}}),$("section").click(function(){"350px"===$(".navbar-content").css("width")&&$(".navbar-content > div").fadeOut(300,function(){$(".navbar-content").velocity({width:"0px"},200)})}),$(".waypoint").waypoint(function(){$(".scroll-animation-default").velocity({opacity:"0"},500)},{offset:"1"}),$(".waypoint").waypoint(function(){$(".scroll-animation-default-right").velocity({opacity:"0"},500)},{offset:"1"}),$(".waypoint").waypoint(function(){$(".scroll-animation-default-left").velocity({opacity:"0"},500)},{offset:"1"}),$(".waypoint").waypoint(function(){$(".scroll-animation-large").velocity({opacity:"0"},500)},{offset:"1"}),$(".waypoint").waypoint(function(){$(".scroll-animation-large-right").velocity({opacity:"0"},500)},{offset:"1"}),$(".waypoint").waypoint(function(){$(".scroll-animation-large-left").velocity({opacity:"0"},500)},{offset:"1"})}),$(document).ready(function(){$(".navbar-header > .search > input").focus(function(){switch($(document).width()){case 1920:$(".search").velocity({width:"20%"},500);break;case 1440:$(".search").velocity({width:"20%"},500);break;case 1024:$(".search").velocity({width:"30%"},500);break}}),$(".navbar-header > .search > input").blur(function(){switch($(document).width()){case 1920:$(".search").velocity({width:"10%"},500);break;case 1440:$(".search").velocity({width:"15%"},500);break;case 1024:$(".search").velocity({width:"20%"},500);break}})}),$(document).ready(function(){$("#continueRegistration").click(function(e){e.preventDefault();var t=0;$(".register-step-one > input").each(function(){""==$(this).val()&&t++}),0==t?($(".register-step-one").hide(),$(".register-step-two").fadeIn(500,!1)):$(".register-step-one > input").each(function(){if(""==$(this).val()){var e=$(this).attr("name");switch($(".register-step-one > .message").removeClass("hidden"),e){case"email":$(".register-step-one > .message > .message-copy").html("<li>Please type your email.</li>");break;case"name":$(".register-step-one > .message > .message-copy").html("<li>Please type your name.</li>");break;case"username":$(".register-step-one > .message > .message-copy").html("<li>Please type your username.</li>");break;case"password":$(".register-step-one > .message > .message-copy").html("<li>Please type your password.</li>");break}}})}),$("#back").click(function(e){e.preventDefault(),$(".register-step-one > .message").addClass("hidden"),$(".register-step-two").hide(),$(".register-step-one").fadeIn(500,!1)})}),$(document).ready(function(){$(".panel-heading").click(function(e){$(".panel-heading").removeClass("open"),$(this).addClass("open")})}),$(document).ready(function(){$(".watch-video").click(function(e){e.preventDefault(),$("body").css("overflow-y","hidden");var t=$(window).scrollTop();0==t?($(".video-lightbox").velocity({left:0},{queue:!1},500).velocity({top:0},{queue:!1},500).velocity({opacity:1},{queue:!1},500).velocity({width:"100%"},{queue:!1},500).velocity({height:"100vh"},{queue:!1},500),$(".video-lightbox > iframe").velocity({opacity:"1"},2e3).delay(3e3),$(".scroll-animation").hide()):($(".video-lightbox").velocity({left:0},{queue:!1},500).velocity({top:t},{queue:!1},500).velocity({opacity:1},{queue:!1},500).velocity({width:"100%"},{queue:!1},500).velocity({height:"100vh"},{queue:!1},500),$(".video-lightbox > iframe").velocity({opacity:"1"},2e3).delay(3e3),$(".scroll-animation").hide())}),$(".watch-video-close-btn").click(function(e){switch(e.preventDefault(),$(window).width()){case 2560:$(".video-lightbox > iframe").velocity({opacity:"0"},100),$(".video-lightbox > iframe").attr("src",$(".video-lightbox > iframe").attr("src")),$(".video-lightbox").velocity({left:"97vh"},{queue:!1},1e3).velocity({top:"57vh"},{queue:!1},1e3).velocity({opacity:0},{queue:!1},1e3).velocity({width:"1px"},{queue:!1},1e3).velocity({height:"1px"},{queue:!1},1e3),$(".scroll-animation").show(),$("body").css("overflow-y","visible");break;case 1921:$(".video-lightbox > iframe").velocity({opacity:"0"},100),$(".video-lightbox > iframe").attr("src",$(".video-lightbox > iframe").attr("src")),$(".video-lightbox").velocity({left:"104vh"},{queue:!1},1e3).velocity({top:"42vh"},{queue:!1},1e3).velocity({opacity:0},{queue:!1},1e3).velocity({width:"1px"},{queue:!1},1e3).velocity({height:"1px"},{queue:!1},1e3),$(".scroll-animation").show(),$("body").css("overflow-y","visible");break;case 1920:$(".video-lightbox > iframe").velocity({opacity:"0"},100),$(".video-lightbox > iframe").attr("src",$(".video-lightbox > iframe").attr("src")),$(".video-lightbox").velocity({left:"104vh"},{queue:!1},1e3).velocity({top:"42vh"},{queue:!1},1e3).velocity({opacity:0},{queue:!1},1e3).velocity({width:"1px"},{queue:!1},1e3).velocity({height:"1px"},{queue:!1},1e3),$(".scroll-animation").show(),$("body").css("overflow-y","visible");break;case 1440:$(".video-lightbox > iframe").velocity({opacity:"0"},100),$(".video-lightbox > iframe").attr("src",$(".video-lightbox > iframe").attr("src")),$(".video-lightbox").velocity({left:"77vh"},{queue:!1},1e3).velocity({top:"62vh"},{queue:!1},1e3).velocity({opacity:0},{queue:!1},1e3).velocity({width:"1px"},{queue:!1},1e3).velocity({height:"1px"},{queue:!1},1e3),$(".scroll-animation").show(),$("body").css("overflow-y","visible");break;case 1024:$(".video-lightbox > iframe").velocity({opacity:"0"},100),$(".video-lightbox > iframe").attr("src",$(".video-lightbox > iframe").attr("src")),$(".video-lightbox").velocity({left:"41vh"},{queue:!1},1e3).velocity({top:"66vh"},{queue:!1},1e3).velocity({opacity:0},{queue:!1},1e3).velocity({width:"1px"},{queue:!1},1e3).velocity({height:"1px"},{queue:!1},1e3),$(".scroll-animation").show(),$("body").css("overflow-y","visible");break;case 768:$(".video-lightbox > iframe").velocity({opacity:"0"},100),$(".video-lightbox > iframe").attr("src",$(".video-lightbox > iframe").attr("src")),$(".video-lightbox").velocity({left:"41vh"},{queue:!1},1e3).velocity({top:"66vh"},{queue:!1},1e3).velocity({opacity:0},{queue:!1},1e3).velocity({width:"1px"},{queue:!1},1e3).velocity({height:"1px"},{queue:!1},1e3),$(".scroll-animation").show(),$("body").css("overflow-y","visible");break;case 425:$(".video-lightbox > iframe").velocity({opacity:"0"},100),$(".video-lightbox > iframe").attr("src",$(".video-lightbox > iframe").attr("src")),$(".video-lightbox").velocity({left:"22vh"},{queue:!1},1e3).velocity({top:"74vh"},{queue:!1},1e3).velocity({opacity:0},{queue:!1},1e3).velocity({width:"1px"},{queue:!1},1e3).velocity({height:"1px"},{queue:!1},1e3),$(".scroll-animation").show(),$("body").css("overflow-y","visible");break;default:$(".video-lightbox > iframe").velocity({opacity:"0"},100),$(".video-lightbox > iframe").attr("src",$(".video-lightbox > iframe").attr("src")),$(".video-lightbox").velocity({left:"97vh"},{queue:!1},1e3).velocity({top:"57vh"},{queue:!1},1e3).velocity({opacity:0},{queue:!1},1e3).velocity({width:"1px"},{queue:!1},1e3).velocity({height:"1px"},{queue:!1},1e3),$(".scroll-animation").show(),$("body").css("overflow-y","visible");break}})}),$(document).ready(function(){$("#carousel-desktop > .carousel-inner > .item").each(function(){var e=$(".grid > .items",$(this)).length;1==e?$(this).children(".grid").children(".items").addClass("single-course"):2==e?$(this).children(".grid").children(".items").addClass("single-course"):3==e&&$(this).children(".grid").children(".items").addClass("single-course")})}),$(document).ready(function(){$("section[role='courses'] > .container > .grid").each(function(){$(this).children(".items").addClass("single-course")})}),$(document).ready(function(){$("#action-preview-select").change(function(){"specific student"==$(this).val()?$(".preview-settings-details").show():$(".preview-settings-details").hide()}),$(".wrapper-course-material").removeClass("info"),2==$(".navbar-right > li").length&&$(".navbar-default .navbar-right").css("width","auto"),$("#unenroll_form > .submit > input[name='submit']").click(function(){setTimeout(function(){location.reload()},2e3)});var e=$(".course-caption > .btn").css("width");$(".dropdown-menu").css("width",e),$(document).on("change","#cohort-select",function(){"Select a cohort"==$("#cohort-select option:selected").text()?($(".cohort-management-group").hide(),$(".cohort-management-file-upload").hide(),$(".toggle-cohort-management-secondary").removeClass("hidden")):($(".cohort-management-add-form").hide(),$(".cohort-management-file-upload").hide(),$("#uploadCohortStudentsCSV").removeClass("hidden"),$(".cohort-management-group").show(),$(".cohort-management-group").removeClass("hidden"),$(".cohort-management-group > .row > div > .nav-pills li:first-child a").tab("show"))}),$(document).on("click","#addNewCohort",function(){$(this).blur(),$(".cohort-management-group").hide(),$(".cohort-management-file-upload").hide(),$("#uploadCohortStudentsCSV").removeClass("hidden"),$(".cohort-management-add-form").show(),$("#cohort-select option:first").attr("selected","selected")}),$(document).on("click","#cancelNewCohort",function(){"Select a cohort"!=$("#cohort-select option:first").text()&&($("#cohort-select").prepend("<option value=''>Select a cohort</option>"),$("#cohort-select option:first").attr("selected","selected")),$("#uploadCohortStudentsCSV").show()}),$(document).on("click","#uploadCohortStudentsCSV",function(){$("#cohort-management-file-upload").show(),$("#cohort-management-file-upload > .wrapper-form > #file-upload-form > .form-actions > #file-upload-form-submit").removeClass("submit-file-button action action-submit is-disabled"),$("#cohort-management-file-upload > .wrapper-form > #file-upload-form > .form-actions > #file-upload-form-submit").addClass("btn btn-default")}),$(document).on("click","#cohortDiscussionTopics",function(){$("#instructor-dashboard-content > .nav-pills li:nth-child(4) a").tab("show")})}),$(".cohort-errors > .message").initialize(function(){var e=$(this).find("h3").text();$(this).addClass("user-message user-error"),$(this).html("<p><span class='glyphicon glyphicon-remove'></span> "+e+"</p>")}),$(".division-scheme-container > div > .message-confirmation").initialize(function(){var e=$(this).find(".message-title").text();$(this).html("<p><span class='glyphicon glyphicon-floppy-disk'></span> "+e+"</p>"),$(".division-scheme-container").fadeIn()}),$(document).on("click",".division-scheme-label",function(){$(".division-scheme-container").hide()}),$(document).ready(function(){var e=[];$(".course-caption").each(function(){e.push($(this).height())});var t=Math.max.apply(Math,e);$("section[role='explore'] > .container > .grid > .single-course > .course-caption").css("height",t),$("section[role='courses'] > .container > .grid > .single-course > .course-caption").css("height",t)});
//# sourceMappingURL=./app.js.map