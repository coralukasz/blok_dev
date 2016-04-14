function initSearchButton() {
    $j(".search_button").length && $j(".search_button").click(function(e) {
        if (e.preventDefault(), $j("html").hasClass("touch")) "0" == $j(".qode_search_form").height() ? ($j('.qode_search_form input[type="text"]').onfocus = function() {
            window.scrollTo(0, 0), document.body.scrollTop = 0
        }, $j('.qode_search_form input[type="text"]').onclick = function() {
            window.scrollTo(0, 0), document.body.scrollTop = 0
        }, $j(".header_top_bottom_holder").css("top", "50px"), $j(".qode_search_form").css("height", "50px"), $j(".content_inner").css("margin-top", "50px"), 34 > $scroll && $j("header.page_header").css("top", "0")) : ($j(".qode_search_form").css("height", "0"), $j(".header_top_bottom_holder").css("top", "0"), $j(".content_inner").css("margin-top", "0"), 34 > $scroll && $j("header.page_header").css("top", -$scroll)), $j(window).scroll(function() {
            "0" != $j(".qode_search_form").height() && $scroll > 50 && ($j(".qode_search_form").css("height", "0"), $j(".header_top_bottom_holder").css("top", "0"), $j(".content_inner").css("margin-top", "0"))
        }), $j(".qode_search_close").click(function(e) {
            e.preventDefault(), $j(".qode_search_form").css("height", "0"), $j(".header_top_bottom_holder").css("top", "0"), $j(".content_inner").css("margin-top", "0"), 34 > $scroll && $j("header.page_header").css("top", -$scroll)
        });
        else {
            if ($j(".title").hasClass("has_fixed_background")) var t = parseInt($j(".title.has_fixed_background").css("backgroundPosition").split(" ")[1]);
            else var t = 0;
            "0" == $j(".qode_search_form").height() ? ($j('.qode_search_form input[type="text"]').focus(), $j(".header_top_bottom_holder").stop().animate({
                top: "50px"
            }, 150), $j(".qode_search_form").stop().animate({
                height: "50px"
            }, 150), $j(".content_inner").stop().animate({
                marginTop: "50px"
            }, 150), 34 > $scroll && $j("header.page_header").stop().animate({
                top: 0
            }, 150), $j(".title.has_fixed_background").animate({
                "background-position-y": t + 50 + "px"
            }, 150)) : ($j(".qode_search_form").stop().animate({
                height: "0"
            }, 150), $j(".header_top_bottom_holder").stop().animate({
                top: "0px"
            }, 150), $j(".content_inner").stop().animate({
                marginTop: "0"
            }, 150), 34 > $scroll && $j("header.page_header").stop().animate({
                top: -$scroll
            }, 150), $j(".title.has_fixed_background").animate({
                "background-position-y": t - 50 + "px"
            }, 150)), $j(window).scroll(function() {
                "0" != $j(".qode_search_form").height() && $scroll > 50 && ($j(".qode_search_form").stop().animate({
                    height: "0"
                }, 150), $j(".header_top_bottom_holder").stop().animate({
                    top: "0px"
                }, 150), $j(".content_inner").stop().animate({
                    marginTop: "0"
                }, 150), $j(".title.has_fixed_background").css("backgroundPosition", "center " + t + "px"))
            }), $j(".qode_search_close").click(function(e) {
                e.preventDefault(), $j(".qode_search_form").stop().animate({
                    height: "0"
                }, 150), $j(".content_inner").stop().animate({
                    marginTop: "0"
                }, 150), $j(".header_top_bottom_holder").stop().animate({
                    top: "0px"
                }, 150), 34 > $scroll && $j("header.page_header").stop().animate({
                    top: -$scroll
                }, 150), $j(".title.has_fixed_background").animate({
                    "background-position-y": t + "px"
                }, 150)
            })
        }
    })
}

function updateShoppingCart() {
    "use strict";

    function e(e, t) {
        var i = $j(".shopping_cart_header");
        if (t["div.widget_shopping_cart_content"]) {
            var o = jQuery(t["div.widget_shopping_cart_content"]),
                n = o.find(".cart_list"),
                a = o.find(".total").contents(":not(strong)").text();
            i.find(".shopping_cart_dropdown_inner").html("").append(n), i.find(".total span").html("").append(a)
        }
    }
    $j("body").bind("added_to_cart", e)
}

function setContentBottomMargin() {
    $j(".uncover").length && $j(".content").css("margin-bottom", $j("footer").height())
}

function footerWidth() {
    "use strict";
    $j(".uncover").length && $j("body").hasClass("vertical_menu_enabled") && $window_width > 1e3 ? $j(".uncover").width($window_width - $j(".vertical_menu_area").width()) : $j(".uncover").css("width", "100%")
}

function initCoverBoxes() {
    $j(".cover_boxes").length && $j(".cover_boxes").each(function() {
        var e = 0,
            t = 1;
        "undefined" != typeof $j(this).data("active-element") && $j(this).data("active-element") !== !1 && (t = parseFloat($j(this).data("active-element")), e = t - 1);
        var i = 3;
        e = t > i ? 0 : e, $j(this).find("li").eq(e).addClass("act");
        var o = $j(this);
        $j(this).find("li").each(function() {
            $j(this).hover(function() {
                $j(o).find("li").removeClass("act"), $j(this).addClass("act")
            })
        })
    })
}

function createContentMenu() {
    "use strict";
    var e = $j(".content_menu");
    e.each(function() {
        if (0 === $j(this).find("ul").length) {
            if ("" !== $j(this).css("background-color")) var e = $j(this).css("background-color");
            var t = $j("<ul class='menu'></ul>");
            t.appendTo($j(this));
            var i = $j(this).siblings(".in_content_menu");
            i.length && i.each(function() {
                var i, o = $j(this).data("q_id"),
                    n = $j(this).data("q_title"),
                    a = $j(this).data("q_icon"),
                    s = $j("<li />"),
                    r = $j("<i />", {
                        "class": "fa " + a
                    }),
                    l = $j("<a />", {
                        href: o,
                        html: "<span>" + n + "</span>"
                    });
                i = "" !== e ? $j("<div />", {
                    "class": "arrow",
                    style: "border-color: " + e + " transparent transparent transparent"
                }) : $j("<div />", {
                    "class": "arrow"
                }), r.prependTo(l), l.appendTo(s), i.appendTo(s), s.appendTo(t)
            })
        }
    })
}

function createSelectContentMenu() {
    "use strict";
    var e = $j(".content_menu");
    e.each(function() {
        var e = $j(this),
            t = $j("<ul></ul>");
        t.appendTo($j(this).find(".nav_select_menu")), $j(this).find("ul.menu li a").each(function() {
            var e = $j(this).attr("href"),
                i = $j(this).text(),
                o = $j(this).find("i").clone();
            2 === $j(this).parents("li").length && (i = "&nbsp;&nbsp;&nbsp;" + i), 3 === $j(this).parents("li").length && (i = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i), $j(this).parents("li").length > 3 && (i = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + i);
            var n = $j("<li />"),
                a = $j("<a />", {
                    href: e,
                    html: i
                });
            o.prependTo(a), a.appendTo(n), n.appendTo(t)
        }), e.find(".nav_select_button").on("click", function() {
            return e.find(".nav_select_menu ul").is(":visible") ? e.find(".nav_select_menu ul").slideUp() : e.find(".nav_select_menu ul").slideDown(), !1
        }), e.find(".nav_select_menu ul li a").on("click", function() {
            e.find(".nav_select_menu ul").slideUp();
            var t = $j(this),
                i = t.attr("href"),
                o = $j("div.wpb_row[data-q_id='" + i + "'],section.parallax_section_holder[data-q_id='" + i + "']").offset().top;
            return $j("html,body").stop().animate({
                scrollTop: o
            }, 500, "swing", function() {
                $j("nav.content_menu ul li").removeClass("active"), t.parent().addClass("active")
            }), !1
        })
    })
}

function contentMenuPosition() {
    "use strict";
    if ($j("nav.content_menu").length) {
        if (content_menu_position > sticky_amount) var e = min_header_height_sticky;
        else var e = 0;
        0 >= content_menu_position - e - content_menu_top_add - $scroll && ($j("header").hasClass("stick") || $j("header").hasClass("stick_with_left_right_menu")) ? (sticky_amount > content_menu_position ? $scroll > sticky_amount ? $j("nav.content_menu").css({
            position: "fixed",
            top: min_header_height_sticky + content_menu_top_add
        }).addClass("fixed") : $j("nav.content_menu").css({
            position: "fixed",
            top: 0,
            transition: "none"
        }).addClass("fixed") : $j("nav.content_menu").css({
            position: "fixed",
            top: min_header_height_sticky + content_menu_top_add
        }).addClass("fixed"), $j("header.sticky").addClass("no_shadow"), $j(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height), $j(".content > .content_inner > .full_width").css("margin-top", content_line_height)) : 0 >= content_menu_position - content_menu_top - content_menu_top_add - $scroll && !$j("header").hasClass("stick") ? ($j("nav.content_menu").css({
            position: "fixed",
            top: content_menu_top + content_menu_top_add
        }).addClass("fixed"), $j(".content > .content_inner > .container > .container_inner").css("margin-top", content_line_height), $j(".content > .content_inner > .full_width").css("margin-top", content_line_height)) : ($j("nav.content_menu").css({
            position: "relative",
            top: "0px"
        }).removeClass("fixed"), $j("header.sticky").removeClass("no_shadow"), $j(".content > .content_inner > .container > .container_inner").css("margin-top", "0px"), $j(".content > .content_inner > .full_width").css("margin-top", "0px")), $j(".content .in_content_menu").waypoint(function() {
            var e = $j(this),
                t = e.data("q_id");
            $j("nav.content_menu.fixed li a").each(function() {
                var e = $j(this).attr("href");
                e === t ? $j(this).parent().addClass("active") : $j(this).parent().removeClass("active")
            })
        }, {
            offset: "150"
        })
    }
}

function contentMenuCheckLastSection() {
    "use strict";
    if ($j("nav.content_menu").length && $j(".content .in_content_menu").length) {
        var e = $j(".content .in_content_menu:last").offset().top + $j(".content .in_content_menu:last").height(),
            t = $j(".content .in_content_menu:first").offset().top - content_menu_top - content_menu_top_add - 100;
        $scroll > e && $j("nav.content_menu.fixed li").removeClass("active"), t > $scroll && $j("nav.content_menu li:first, nav.content_menu ul.menu li:first").removeClass("active")
    }
}

function contentMenuScrollTo() {
    "use strict";
    $j("nav.content_menu").length && $j("nav.content_menu ul.menu li a").on("click", function(e) {
        e.preventDefault();
        var t = $j(this);
        if ($j(this).parent().hasClass("active")) return !1;
        var i = t.attr("href"),
            o = $j("div.wpb_row[data-q_id='" + i + "'],section.parallax_section_holder[data-q_id='" + i + "']").offset().top - content_line_height - content_menu_top - content_menu_top_add;
        return $j("html,body").stop().animate({
            scrollTop: o
        }, 500, "swing", function() {
            $j("nav.content_menu ul li").removeClass("active"), t.parent().addClass("active")
        }), !1
    })
}

function initButtonHover() {
    $j(".qbutton").length && $j(".qbutton").each(function() {
        if ("undefined" != typeof $j(this).data("hover-background-color") && $j(this).data("hover-background-color") !== !1) {
            var e = $j(this).data("hover-background-color"),
                t = $j(this).css("background-color");
            $j(this).hover(function() {
                $j(this).css("background-color", e)
            }, function() {
                $j(this).css("background-color", t)
            })
        }
        if ("undefined" != typeof $j(this).data("hover-border-color") && $j(this).data("hover-border-color") !== !1) {
            var i = $j(this).data("hover-border-color"),
                o = $j(this).css("border-top-color");
            $j(this).hover(function() {
                $j(this).css("border-color", i)
            }, function() {
                $j(this).css("border-color", o)
            })
        }
        if ("undefined" != typeof $j(this).data("hover-color") && $j(this).data("hover-color") !== !1) {
            var n = $j(this).data("hover-color"),
                a = $j(this).css("color");
            $j(this).hover(function() {
                $j(this).css("color", n)
            }, function() {
                $j(this).css("color", a)
            })
        }
    })
}

function initSocialIconHover() {
    $j(".q_social_icon_holder").length && $j(".q_social_icon_holder").each(function() {
        if ("undefined" != typeof $j(this).data("hover-background-color") && $j(this).data("hover-background-color") !== !1) {
            var e = $j(this).data("hover-background-color"),
                t = $j(this).find(".fa-stack").css("background-color");
            $j(this).find(".fa-stack").hover(function() {
                $j(this).css("background-color", e)
            }, function() {
                $j(this).css("background-color", t)
            })
        }
        if ("undefined" != typeof $j(this).data("hover-border-color") && $j(this).data("hover-border-color") !== !1) {
            var i = $j(this).data("hover-border-color"),
                o = $j(this).find(".fa-stack").css("border-top-color");
            $j(this).find(".fa-stack").hover(function() {
                $j(this).css("border-color", i)
            }, function() {
                $j(this).css("border-color", o)
            })
        }
        if ("undefined" != typeof $j(this).data("hover-color") && $j(this).data("hover-color") !== !1) {
            var n, a, s = $j(this).data("hover-color");
            $j(this).find(".fa-stack i").length ? (n = $j(this).find(".fa-stack i").css("color"), a = $j(this).find(".fa-stack i").attr("style")) : $j(this).find(".simple_social").length && (n = $j(this).find(".simple_social").css("color"), a = $j(this).find(".simple_social").attr("style")), $j(this).find(".fa-stack").length ? $j(this).find(".fa-stack").hover(function() {
                $j(this).find("i").attr("style", function() {
                    return a + "color: " + s + "!important;"
                })
            }, function() {
                $j(this).find("i").attr("style", function() {
                    return a + "color: " + n + "!important;"
                })
            }) : $j(this).find(".simple_social").length && $j(this).find(".simple_social").hover(function() {
                $j(this).attr("style", function() {
                    return a + "color: " + s + "!important;"
                })
            }, function() {
                $j(this).attr("style", function() {
                    return a + "color: " + n + "!important;"
                })
            })
        }
    })
}

function initTabsActiveBorder() {
    $j(".q_tabs.vertical, .q_tabs.boxed").length && $j(".q_tabs.vertical, .q_tabs.boxed").each(function() {
        var e = getParentBackgroundColor($j(this)),
            t = $j(this).find("li.active a");
        $j(this).hasClass("boxed") && t.css("border-bottom-color", e), $j(this).hasClass("left") && t.css("border-right-color", e), $j(this).hasClass("right") && t.css("border-left-color", e)
    })
}

function getParentBackgroundColor(e) {
    return e.parents().filter(function() {
        var e = $j(this).css("background-color");
        return "transparent" != e && "rgba(0, 0, 0, 0)" != e
    }).eq(0).css("background-color")
}

function setActiveTabBorder() {
    $j(".q_tabs li.active").length && $j(this).click(function() {
        initTabsActiveBorder()
    })
}

function initPopupMenu() {
    "use strict";
    $j("a.popup_menu").length && ($j(".popup_menu_holder_outer").height($window_height).niceScroll({
        scrollspeed: 30,
        mousescrollstep: 20,
        cursorwidth: 0,
        cursorborder: 0,
        cursorborderradius: 0,
        cursorcolor: "transparent",
        autohidemode: !1,
        horizrailenabled: !1
    }), $j(window).resize(function() {
        $j(".popup_menu_holder_outer").height($window_height)
    }), $j("a.popup_menu").on("click", function(e) {
        e.preventDefault(), $j(this).hasClass("opened") ? ($j(this).removeClass("opened"), $j("body").removeClass("popup_menu_opened"), setTimeout(function() {
            $j("body").hasClass("page-template-full_screen-php") || $j("body").css("overflow", "visible"), $j("nav.popup_menu ul.sub_menu").slideUp(200, function() {
                $j("nav.popup_menu").getNiceScroll().resize()
            })
        }, 400)) : ($j(this).addClass("opened"), $j("body").addClass("popup_menu_opened"), setTimeout(function() {
            $j("body").hasClass("page-template-full_screen-php") || $j("body").css("overflow", "hidden")
        }, 400))
    }), $j(".popup_menu > ul > li.has_sub > a, .popup_menu > ul > li.has_sub > h6").on("tap click", function(e) {
        return e.preventDefault(), $j(this).closest("li.has_sub").find("> ul.sub_menu").is(":visible") ? ($j(this).closest("li.has_sub").find("> ul.sub_menu").slideUp(200, function() {
            $j(".popup_menu_holder_outer").getNiceScroll().resize()
        }), $j(this).closest("li.has_sub").removeClass("open_sub")) : ($j(this).closest("li.has_sub").addClass("open_sub"), $j(this).closest("li.has_sub").find("> ul.sub_menu").slideDown(200, function() {
            $j(".popup_menu_holder_outer").getNiceScroll().resize()
        })), !1
    }), $j(".popup_menu ul li:not(.has_sub) a").click(function() {
        return "http://#" === $j(this).attr("href") || "#" === $j(this).attr("href") ? !1 : ($j("a.popup_menu").removeClass("opened"), $j("body").removeClass("popup_menu_opened").css("overflow", "visible"), $j("nav.popup_menu ul.sub_menu").slideUp(200, function() {
            $j("nav.popup_menu").getNiceScroll().resize()
        }), void 0)
    }))
}

function initFullScreenTemplate() {
    "use strict";
    if ($j(".full_screen_holder").length && $window_width > 600) {
        $j(".full_screen_preloader").css("height", $window_height), $j("#up_fs_button").on("click", function() {
            return $j.fn.fullpage.moveSectionUp(), !1
        }), $j("#down_fs_button").on("click", function() {
            return $j.fn.fullpage.moveSectionDown(), !1
        });
        var e = $j(".full_screen_inner > .full_screen_section").length;
        $j(".full_screen_inner").fullpage({
            sectionSelector: ".full_screen_section",
            scrollOverflow: !0,
            afterLoad: function(t, i) {
                checkActiveArrowsOnFullScrrenTemplate(e, i)
            },
            afterRender: function() {
                checkActiveArrowsOnFullScrrenTemplate(e, 1), $j(".full_screen_holder").find(".full_screen_navigation_holder").css("visibility", "visible"), $j(".full_screen_holder").find(".full_screen_inner").css("visibility", "visible"), $j(".full_screen_preloader").hide(), $j(".full_screen_holder video.full_screen_sections_video").length && $j(".full_screen_holder video.full_screen_sections_video").each(function() {
                    $j(this).get(0).play()
                })
            }
        })
    }
}

function checkActiveArrowsOnFullScrrenTemplate(e, t) {
    "use strict";
    "1" == t ? $j(".full_screen_navigation_holder.up_arrow").hide() : t == e ? $j(".full_screen_navigation_holder.down_arrow").hide() : ($j(".full_screen_navigation_holder.up_arrow").show(), $j(".full_screen_navigation_holder.down_arrow").show())
}

function initImageGallerySliderNoSpace() {
    $j(".qode_image_gallery_no_space").length && ($j(".qode_image_gallery_no_space").each(function() {
        $j(this).animate({
            opacity: 1
        }, 1e3), $j(this).find(".qode_image_gallery_holder").lemmonSlider({
            infinite: !0
        })
    }), $j(".qode_image_gallery_no_space").on("click", "li:not(.active) a", function() {
        return !1
    }))
}

function initVerticalSplitSlider() {
    "use strict";
    $j("html").hasClass("vertical_split_screen_initalized") && ($j("html").removeClass("vertical_split_screen_initalized"), $j.fn.multiscroll.destroy()), $j(".vertical_split_slider").length ? ($j(".vertical_split_slider").height($window_height).animate({
        opacity: 1
    }, 300), $j(".vertical_split_slider").multiscroll({
        scrollingSpeed: 500,
        navigation: !0,
        afterRender: function() {
            $j("html").addClass("vertical_split_screen_initalized"), $j("div.wpcf7 > form").length && $j("div.wpcf7 > form").wpcf7InitForm()
        }
    })) : $j(".full_screen_holder").length || $j("html,body").css("height", "auto").css("overflow", "auto")
}

function initFixedBottomPaspartuHeight() {
    "use strict";
    if ($j(".paspartu_outer.paspartu_on_bottom_fixed").length) {
        var e = Math.round($window_width * paspartu_width);
        $j(".paspartu_bottom").height(e), $j("footer").css("margin-bottom", e)
    }
}
var $j = jQuery.noConflict(),
    $scroll = 0,
    $window_width = $j(window).width(),
    $window_height = $j(window).height(),
    logo_height, menu_dropdown_height_set = !1,
    sticky_amount = 0,
    content_menu_position, content_menu_top, content_menu_top_add = 0,
    src, next_image, prev_image, $top_header_height, min_w = 1500,
    video_width_original = 1280,
    video_height_original = 720,
    vid_ratio = 1280 / 720,
    skrollr_slider, paspartu_width;
if ("undefined" == typeof paspartu_width_init) var paspartu_width_init = .02;
$j(document).ready(function() {
    "use strict";
    if ($j(".content").css("min-height", $j(window).height() - $j("header.page_header").height() - $j("footer").height()), $j("header").hasClass("regular") && (content_menu_top = 0), $j("header").hasClass("fixed") && (content_menu_top = min_header_height_scroll), ($j("header").hasClass("stick") || $j("header").hasClass("stick_with_left_right_menu")) && (content_menu_top = 0), !$j("header.page_header").hasClass("scroll_top") && $j("header.page_header").hasClass("has_top") && $j("header.page_header").hasClass("fixed") && (content_menu_top_add = 34), $j("body").hasClass("vertical_menu_enabled")) {
        content_menu_top = 0, content_menu_top_add = 0
    }
    paspartu_width = 1024 > $window_width ? .02 : paspartu_width_init, setDropDownMenuPosition(), initDropDownMenu(), initVerticalMenuToggle(), initVerticalMobileMenu(), initQodeSlider(), initSideMenu(), initPopupMenu(), initMessageHeight(), initToCounter(), initCounter(), initProgressBars(), initListAnimation(), initPieChart(), initPieChartWithIcon(), initServiceAnimation(), initParallaxTitle(), initSideAreaScroll(), initVerticalAreaMenuScroll(), loadMore(), prettyPhoto(), initMobileMenu(), initFlexSlider(), fitVideo(), fitAudio(), initAccordion(), initAccordionContentLink(), initMessages(), initProgressBarsIcon(), initMoreFacts(), placeholderReplace(), backButtonShowHide(), backToTop(), initSteps(), initProgressBarsVertical(), initElementsAnimation(), updateShoppingCart(), initHashClick(), initIconWithTextAnimation(), initVideoBackground(), initCheckSafariBrowser(), initSearchButton(), initCoverBoxes(), createContentMenu(), contentMenuScrollTo(), createSelectContentMenu(), initButtonHover(), initSocialIconHover(), $j([theme_root + "img/logo.png"]).preload(), $j(".widget #searchform").mousedown(function() {
        $j(this).addClass("form_focus")
    }).focusout(function() {
        $j(this).removeClass("form_focus")
    }), $scroll = $j(window).scrollTop(), checkTitleToShowOrHide(), checkVerticalMenuTransparency(), $j(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens(), $j(window).width() > 768 && contentMenuPosition(), contentMenuCheckLastSection(), $j("header:not(.stick_with_left_right_menu) .q_logo a").css("visibility", "visible"), initFullScreenTemplate(), showHideVerticalMenu(), initFixedBottomPaspartuHeight()
}), $j(window).load(function() {
    "use strict";
    $j(".touch .main_menu li:has(div.second)").doubleTapToGo(), initSmallImageBlogHeight(), setDropDownMenuPosition(), initDropDownMenu(), initPortfolio(), initPortfolioZIndex(), initPortfolioSingleInfo(), initTestimonials(), initVideoBackgroundSize(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), initPortfolioMasonry(), initPortfolioMasonryFilter(), initTabs(), countClientsPerRow(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initTitleAreaAnimation(), setContentBottomMargin(), footerWidth(), $j("nav.content_menu").length > 0 && (content_menu_position = $j("nav.content_menu").offset().top, contentMenuPosition()), contentMenuCheckLastSection(), initQodeCarousel(), initPortfolioSlider(), initBlogSlider(), initTabsActiveBorder(), setActiveTabBorder(), initImageHover(), $j("header.stick_with_left_right_menu .q_logo a").css("visibility", "visible"), setMargingsForLeftAndRightMenu(), initImageGallerySliderNoSpace(), initVerticalSplitSlider(), initParallax(), setTimeout(function() {
        checkAnchorOnScroll(), checkAnchorOnLoad()
    }, 700)
}), $j(window).scroll(function() {
    "use strict";
    $scroll = $j(window).scrollTop(), $j(window).width() > 1e3 && headerSize($scroll), $j(window).width() > 768 && contentMenuPosition(), contentMenuCheckLastSection(), checkVerticalMenuTransparency(), $j(".touch .drop_down > ul > li").mouseleave(), $j(".touch .drop_down > ul > li").blur()
}), $j(window).resize(function() {
    "use strict";
    $window_width = $j(window).width(), $window_height = $j(window).height(), paspartu_width = 1024 > $window_width ? .02 : paspartu_width_init, $j(window).width() > 1e3 ? headerSize($scroll) : logoSizeOnSmallScreens(), initMessageHeight(), initTestimonials(), fitAudio(), initSmallImageBlogHeight(), initBlog(), initBlogMasonryFullWidth(), initQBlog(), animatedTextIconHeight(), countAnimatedTextIconPerRow(), initVideoBackgroundSize(), countClientsPerRow(), setContentBottomMargin(), footerWidth(), calculateHeights(), $j(".vertical_split_slider").height($window_height), initFixedBottomPaspartuHeight()
});
var sticky_animate, default_header_style, current_scroll;
! function(e) {
    "use strict";
    e.fn.countTo = function(t) {
        t = e.extend({}, e.fn.countTo.defaults, t || {});
        var i = Math.ceil(t.speed / t.refreshInterval),
            o = (t.to - t.from) / i;
        return e(this).each(function() {
            function n() {
                r += o, s++, e(a).html(r.toFixed(t.decimals)), "function" == typeof t.onUpdate && t.onUpdate.call(a, r), s >= i && (clearInterval(l), r = t.to, "function" == typeof t.onComplete && t.onComplete.call(a, r))
            }
            var a = this,
                s = 0,
                r = t.from,
                l = setInterval(n, t.refreshInterval)
        })
    }, e.fn.countTo.defaults = {
        from: 0,
        to: 100,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        onUpdate: null,
        onComplete: null
    }
}(jQuery);
var portfolio_width;
! function(e) {
    var t = e(window),
        i = t.height();
    t.resize(function() {
        i = t.height()
    }), e.fn.parallax = function(o, n, a) {
        function s() {
            var a = t.scrollTop();
            h.each(function() {
                var t = e(this),
                    s = t.offset().top,
                    d = r(t);
                a > s + d || s > a + i || h.css("backgroundPosition", o + " " + Math.round((l - a) * n) + "px")
            })
        }
        var r, l, h = e(this);
        h.each(function() {
            l = h.offset().top
        }), r = a ? function(e) {
            return e.outerHeight(!0)
        } : function(e) {
            return e.height()
        }, (arguments.length < 1 || null === o) && (o = "50%"), (arguments.length < 2 || null === n) && (n = .1), (arguments.length < 3 || null === a) && (a = !0), t.bind("scroll", s).resize(s), s()
    }
}(jQuery);
var $scrollHeight;
$j.fn.preload = function() {
    "use strict";
    this.each(function() {
        $j("<img/>")[0].src = this
    })
};
var timeOuts = [];