/*!
 * @preserve
 * jquery.scrolldepth.js | v0.5
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */

/*
     * Throttle function borrowed from:
     * Underscore.js 1.5.2
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     */

(function(e,t,n,r){var i={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0},s=e(t),o=[],u=0,a,f,l;e.scrollDepth=function(r){function h(e,t,n,i){l?(dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:t,eventValue:1,eventNonInteraction:!0}),r.pixelDepth&&arguments.length>2&&n>u&&(u=n,dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:m(n),eventValue:1,eventNonInteraction:!0})),r.userTiming&&arguments.length>3&&dataLayer.push({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:t,eventTiming:i})):(a&&(ga("send","event","Scroll Depth",e,t,1,{nonInteraction:1}),r.pixelDepth&&arguments.length>2&&n>u&&(u=n,ga("send","event","Scroll Depth","Pixel Depth",m(n),1,{nonInteraction:1})),r.userTiming&&arguments.length>3&&ga("send","timing","Scroll Depth",e,i,t)),f&&(_gaq.push(["_trackEvent","Scroll Depth",e,t,1,!0]),r.pixelDepth&&arguments.length>2&&n>u&&(u=n,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",m(n),1,!0])),r.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,i,t,100])))}function p(e){return{"25%":parseInt(e*.25,10),"50%":parseInt(e*.5,10),"75%":parseInt(e*.75,10),"100%":e-5}}function d(t,n,r){e.each(t,function(t,i){e.inArray(t,o)===-1&&n>=i&&(h("Percentage",t,n,r),o.push(t))})}function v(t,n,r){e.each(t,function(t,i){e.inArray(i,o)===-1&&e(i).length&&n>=e(i).offset().top&&(h("Elements",i,n,r),o.push(i))})}function m(e){return(Math.floor(e/250)*250).toString()}function g(e,t){var n,r,i,s=null,o=0,u=function(){o=new Date,s=null,i=e.apply(n,r)};return function(){var a=new Date;o||(o=a);var f=t-(a-o);return n=this,r=arguments,f<=0?(clearTimeout(s),s=null,o=a,i=e.apply(n,r)):s||(s=setTimeout(u,f)),i}}var c=+(new Date);r=e.extend({},i,r);if(e(n).height()<r.minHeight)return;typeof ga=="function"&&(a=!0),typeof _gaq!="undefined"&&typeof _gaq.push=="function"&&(f=!0),typeof dataLayer!="undefined"&&typeof dataLayer.push=="function"&&(l=!0),h("Percentage","Baseline"),s.on("scroll.scrollDepth",g(function(){var i=e(n).height(),u=t.innerHeight?t.innerHeight:s.height(),a=s.scrollTop()+u,f=p(i),l=+(new Date)-c;if(o.length>=4+r.elements.length){s.off("scroll.scrollDepth");return}r.elements&&v(r.elements,a,l),r.percentage&&d(f,a,l)},500))}})(jQuery,window,document);