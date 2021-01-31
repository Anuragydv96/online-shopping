var i=0;
function tap()
{
    
    if(!i)
    {
        document.getElementById("more").style.display="inline";
        document.getElementById("dots").style.display="more";
        document.getElementById("click").innerHTML="read more";
        i=1;
    }
    else{
        document.getElementById("more").style.display="none";
        document.getElementById("dots").style.display="inline";
        document.getElementById("click").innerHTML="read less";
        
        i=0;
    }
}

function toggleSidebar(){
    document.getElementById("loginData").classList.toggle('active');
   }