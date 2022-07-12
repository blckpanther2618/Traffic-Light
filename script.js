function traffic()
{            
    function delay()
    {
        var r=10,o=1,g=10,x=0;
        function main()
        {
                if(r!=0)
                {
                    document.getElementById('d1').style.backgroundColor="red";
                    document.getElementById('d2').style.backgroundColor="grey";                    
                    document.getElementById('div2').innerHTML=r;
                    document.getElementById('stop').innerText='STOP';
                    document.getElementById('steady').innerText='';
                    document.getElementById('go').innerText='';
                    r--;
                    if(r==0)x++;
                    if(x==2) delay();
                }
                else if(r==0 && o!=0)
                {
                    document.getElementById('d1').style.backgroundColor="grey";
                    document.getElementById('d2').style.backgroundColor="orange";
                    document.getElementById('d3').style.backgroundColor="grey";
                    document.getElementById('div2').innerHTML="";
                    document.getElementById('stop').innerText='';
                    document.getElementById('steady').innerText='STEADY';
                    document.getElementById('go').innerText='';
                    o--;
                    if(o==0 && g==0) r=1;
                }
                else if(o==0 && g!=0)
                {                    
                    document.getElementById('d2').style.backgroundColor="grey";
                    document.getElementById('d3').style.backgroundColor="green";
                    document.getElementById('div2').innerHTML=g;
                    document.getElementById('stop').innerText='';
                    document.getElementById('steady').innerText='';
                    document.getElementById('go').innerText='GO';
                    g--;
                    if(g==0) o=1;
                }
        }
        setInterval(main,1000);
    }    
    delay()
}