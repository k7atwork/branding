#branding

<script type="text/javascript">
if(document.getElementById('TTLE_GUEST_BRANDING')==null)
{
var body = document.body;

<!-- HDR Logo -->
var BrandTD1 = document.createElement('td');
BrandTD1.setAttribute("width","25%");
BrandTD1.setAttribute("align","center");
BrandTD1.setAttribute("valign","bottom");

var BrandHDRIMG = document.createElement('img');
BrandHDRIMG.setAttribute("src", "http://global.adelaide.edu.au/v/redesign1/images/bg-header-logo-ds.png");
BrandHDRIMG.setAttribute("ID", "TTLE_GUEST_BRANDING");
BrandHDRIMG.setAttribute("height", "78");
BrandHDRIMG.setAttribute("width", "247");
BrandHDRIMG.setAttribute("alt", "UofA");
BrandHDRIMG.setAttribute("border", "0");

BrandTD1.appendChild(BrandHDRIMG);

<!-- HDR Text -->
var BrandTD2 = document.createElement('td');
BrandTD2.setAttribute("width","75%");

var BrandHDR = document.createElement('p');
BrandHDR.setAttribute("align","center");

var BrandTXT=document.createElement('font');
BrandTXT.setAttribute("style","color: #FFF;font-family: Georgia,Arial,Helvetica,sans-serif; font-weight: normal;font-size:29.5px;text-shadow:1px 1px 1px #255e8b;");
BrandTXT.innerHTML="Application for an Honorary Role";

BrandHDR.appendChild(BrandTXT);

BrandTD2.appendChild(BrandHDR);

<!-- HDR Row -->
var BrandTR1 = document.createElement('tr');
BrandTR1.setAttribute("style","background:linear-gradient(#005a9c,#005a9c 19%,#4491ca 19%,#013f73)");
BrandTR1.setAttribute("height","120");

BrandTR1.appendChild(BrandTD2);
BrandTR1.appendChild(BrandTD1);

<!-- HDR Table -->
var BrandHDRTBL = document.createElement('table');
BrandHDRTBL.setAttribute("width","100%");
BrandHDRTBL.setAttribute("border", "0");
BrandHDRTBL.setAttribute("cellpadding", "6");
BrandHDRTBL.setAttribute("cellspacing", "0");

BrandHDRTBL.appendChild(BrandTR1);

<!--## Inject at top of Page ##-->
body.insertBefore(BrandHDRTBL, body.firstChild);

<!-- FTR Logo -->
var BrandTD3 = document.createElement('td');
BrandTD3.setAttribute("width","100%");
BrandTD3.setAttribute("align","left");
BrandTD3.setAttribute("valign","middle");

var BrandFTRIMG = document.createElement('img');
BrandFTRIMG.setAttribute("src", "http://www.adelaide.edu.au/global/v/response1/img/ui-tagline-seek-light.png");
BrandFTRIMG.setAttribute("ID", "TTLE_GUEST_BRANDING");
BrandFTRIMG.setAttribute("height", "30");
BrandFTRIMG.setAttribute("width", "299");
BrandFTRIMG.setAttribute("alt", "seekLIGHT");
BrandFTRIMG.setAttribute("border", "0");

BrandTD3.appendChild(BrandFTRIMG);

<!-- FTR Row 1 -->
var BrandTR2 = document.createElement('tr');
BrandTR2.setAttribute("bgcolor","black");
BrandTR2.setAttribute("height","30");

BrandTR2.appendChild(BrandTD3);

<!-- FTR Copyright Style -->
var BrandFTRStyl = document.createElement('style');
BrandFTRStyl.innerHTML="a.TTLE_Ftr {text-decoration:none;color:#fff;font-family:Arial,Helvetica,sans-serif; font-weight: normal;font-size:12px;} ul.TTLE_Ftr {list-style-type: none;margin:0;padding:6px;color:#fff;font-family:Arial,Helvetica,sans-serif; font-weight: normal;font-size:10px;}";

body.appendChild(BrandFTRStyl);

<!-- FTR Copyright -->
var BrandTD4 = document.createElement('td');
BrandTD4.setAttribute("width","100%");
BrandTD4.setAttribute("align","left");
BrandTD4.setAttribute("valign","middle");
BrandTD4.setAttribute("cellpadding","4");

BrandTD4.innerHTML="<ul class='TTLE_Ftr'><li><a class='TTLE_Ftr' href='//www.adelaide.edu.au/legals/copyright.html' title='Copyright Information'>Copyright</a><span> &amp; <a class='TTLE_Ftr' href='//www.adelaide.edu.au/legals/disclaim.html' title='Website Disclaimer'>Disclaimer</a></span></li><li><a class='TTLE_Ftr' href='//www.adelaide.edu.au/legals/privacy.html' title='Privacy Policy'>Privacy Policy</a></li><li><a class='TTLE_Ftr' href='//www.adelaide.edu.au/legals/disclaim.html' title='Website Disclaimer'>Disclaimer</a></li><li><a class='TTLE_Ftr' href='//www.adelaide.edu.au/feedback/' title='Website Feedback'>Feedback</a></li></ul>"

<!-- FTR Row 2 -->
var BrandTR3 = document.createElement('tr');
BrandTR3.setAttribute("style","background:linear-gradient(#004f8c,#1a6fae 59%)");
BrandTR3.setAttribute("height","40");

BrandTR3.appendChild(BrandTD4);

<!-- FTR Table -->
var BrandFTRTBL = document.createElement('table');
BrandFTRTBL.setAttribute("width","100%");
BrandFTRTBL.setAttribute("border", "0");
BrandFTRTBL.setAttribute("cellpadding", "0");
BrandFTRTBL.setAttribute("cellspacing", "0");

BrandFTRTBL.appendChild(BrandTR2);
BrandFTRTBL.appendChild(BrandTR3);

<!--## Add to bottom of Page ##-->
var spacing = document.createElement('br');
body.appendChild(spacing);
body.appendChild(BrandFTRTBL);

<!-- FTR Call Us -->
var ss = document.createElement('link');
ss.rel = "stylesheet";
ss.href = "%bind(:1)";
ss.type = "text/css";
<!--document.getElementsByTagName('head')[0].appendChild(ss);-->

body.appendChild(ss);

var BrandTD5 = document.createElement('td');
BrandTD5.setAttribute("width","100%");
BrandTD5.setAttribute("align","left");
BrandTD5.setAttribute("valign","middle");
BrandTD5.setAttribute("cellpadding","4");

var h3 = document.createElement('h3');
h3.setAttribute("style","color:#b38808;font-family:Georgia,Times,serif;font-weight:400;font-size:20px;");
h3.innerHTML="Contact HR Service Centre";

var p=document.createElement('p');
p.setAttribute("style","color:#666;font-family: Arial,Helvetica,sans-serif;font-size:13px");
p.setAttribute("margin-bottom","10px");
p.innerHTML="For all enquiries please contact the Human Resources Service Centre.";

var div=document.createElement('div');
div.setAttribute("class","call-us");
div.setAttribute("style","padding-left:0;vertical-align: middle; top:-10px;");

div.innerHTML="<a href='/hr/about/service-centre/enquiry/' class='button button-blue'>Online Enquiries</a><a href='/hr/about/service-centre/feedback/' class='button button-blue'>Feedback</a><span class='icon' style='display: inline-block;position:relative;top:-5px;left:0px;margin-right:10px;margin-left:10px;vertical-align: bottom;'>&nbsp;</span>Call us<strong> +61 8 831 31111</strong>";

BrandTD5.appendChild(h3);
BrandTD5.appendChild(p);
BrandTD5.appendChild(div);

<!-- FTR Row 3 -->
var BrandTR4 = document.createElement('tr');
BrandTR4.setAttribute("style","background-color: #f4edda;");

BrandTR4.appendChild(BrandTD5);

<!-- FTR Table -->
var BrandFTRTBL2 = document.createElement('table');
BrandFTRTBL2.setAttribute("width","100%");
BrandFTRTBL2.setAttribute("style", "border:1px;border-style:solid; border-color: #e1cfa0;");
BrandFTRTBL2.setAttribute("cellpadding", "10");
BrandFTRTBL2.setAttribute("cellspacing", "0");
}
BrandFTRTBL2.appendChild(BrandTR4);

body.appendChild(BrandFTRTBL2);
</script>
