$(document).ready(function(){
    function loadPageVar (sVar) {
        return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }


        if (loadPageVar("route") == "assignKPI") {

            $(document).ready(function(e) {
            
                $('#inner').load('assignKPI.html',function(){});
            });
        }else if (loadPageVar("route")== "reviewKPI"){

            $(document).ready(function(e){
                $('#inner').load('reviewKPI.html',function(){});
            });
        }else if (loadPageVar("route")== "myKPI"){

            $(document).ready(function(e){
                $('#inner').load('myKPI.html',function(){});
            });
        }else if (loadPageVar("route")== "generateReport"){

            $(document).ready(function(e){
                $('#inner').load('generateReport.html',function(){});
            });
        }else if (loadPageVar("route")== "reportIncident"){

            $(document).ready(function(e){
                $('#inner').load('reportIncident.html',function(){});
            });
        } else {
            $(document).ready(function()
            {
                //$('#header-menu').load('nav-bar.html', function(){});
                $('#inner').load('dashboard.html', function(){}); }
    )};
})