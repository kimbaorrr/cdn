var devtools=function(){};devtools.toString=function(){return window.location.replace("about:blank"),"-"},setInterval(()=>{console.profile(devtools),console.profileEnd(devtools)},1e3)