/*
 * date_to_string v1.0.0
 *
 * Copyright (c) 2013 Andrew G. Johnson <andrew@andrewgjohnson.com>
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @author Andrew G. Johnson <andrew@andrewgjohnson.com>
 * @copyright Copyright (c) 2013 Andrew G. Johnson <andrew@andrewgjohnson.com>
 * @link http://github.com/andrewgjohnson/date_to_string
 * @license http://www.opensource.org/licenses/mit-license.php The MIT License
 * @version 1.0.0
 * @package date_to_string
 *
 */

if(typeof date_to_string=="undefined"){var date_to_string=function(f,d){f=String(f);d=typeof d!="undefined"&&d instanceof Date?d:new Date();var b={a:function(g){return g.getHours()<12?"am":"pm"},A:function(g){return g.getHours()<12?"AM":"PM"},B:function(g){return("000"+Math.floor((g.getHours()*60*60+(g.getMinutes()+60+g.getTimezoneOffset())*60+g.getSeconds())/86.4)%1000).slice(-3)},c:function(g){return date_to_string("Y-m-d\\TH:i:s",g)},d:function(g){return(g.getDate()<10?"0":"")+g.getDate()},D:function(g){switch(g.getDay()){case 0:return"Sun";case 1:return"Mon";case 2:return"Tue";case 3:return"Wed";case 4:return"Thu";case 5:return"Fri";case 6:return"Sat"}},e:function(h){var i=parseInt(Math.abs(h.getTimezoneOffset()/60),10),g=Math.abs(h.getTimezoneOffset()%60);return(new Date().getTimezoneOffset()<0?"+":"-")+(i<10?"0":"")+i+(g<10?"0":"")+g},F:function(g){switch(g.getMonth()){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}},g:function(g){return g.getHours()>12?g.getHours()-12:g.getHours()},G:function(g){return g.getHours()},h:function(h){var g=h.getHours()>12?h.getHours()-12:h.getHours();return(g<10?"0":"")+g},H:function(g){return(g.getHours()<10?"0":"")+g.getHours()},i:function(g){return(g.getMinutes()<10?"0":"")+g.getMinutes()},I:function(g){return g.getTimezoneOffset()<Math.max(new Date(g.getFullYear(),0,1).getTimezoneOffset(),new Date(g.getFullYear(),6,1).getTimezoneOffset())?1:0},j:function(g){return g.getDate()},l:function(g){switch(g.getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday"}},L:function(g){return new Date(g.getFullYear(),1,29).getMonth()==1?1:0},m:function(g){return(g.getMonth()+1<10?"0":"")+(g.getMonth()+1)},M:function(g){switch(g.getMonth()){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec"}},n:function(g){return g.getMonth()+1},N:function(g){return g.getDay()==0?7:g.getDay()},o:function(g){return g.getWeekYear()},O:function(h){var i=parseInt(Math.abs(h.getTimezoneOffset()/60),10),g=Math.abs(h.getTimezoneOffset()%60);return(new Date().getTimezoneOffset()<0?"+":"-")+(i<10?"0":"")+i+(g<10?"0":"")+g},P:function(h){var i=parseInt(Math.abs(h.getTimezoneOffset()/60),10),g=Math.abs(h.getTimezoneOffset()%60);return(new Date().getTimezoneOffset()<0?"+":"-")+(i<10?"0":"")+i+":"+(g<10?"0":"")+g},r:function(g){return date_to_string("D, d M Y H:i:s O",g)},s:function(g){return(g.getSeconds()<10?"0":"")+g.getSeconds()},S:function(g){switch(g.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},t:function(g){return new Date(g.getFullYear(),g.getMonth()+1,0).getDate()},T:function(g){var h=String(g).match(/\(([^\)]+)\)$/)||String(g).match(/([A-Z]+) [\d]{4}$/);if(h){h=h[1].match(/[A-Z]/g).join("")}return h},u:function(g){return g.getMilliseconds()*1000},U:function(g){return Math.round(g.getTime()/1000)},w:function(g){return g.getDay()},W:function(g){return g.getWeek()},y:function(g){return String(g.getFullYear()).substring(2,4)},Y:function(g){return g.getFullYear()},z:function(g){return Math.floor((g.getTime()-new Date(g.getFullYear(),0,1).getTime())/(1000*60*60*24))},Z:function(g){return(g.getTimezoneOffset()<0?"+":"-")+(g.getTimezoneOffset()*24)}};var c="",e=false;for(var a=0;a<f.length;a++){if(!e&&f.substring(a,a+1)=="\\"){e=true}else{if(e||typeof b[f.substring(a,a+1)]=="undefined"){c+=String(f.substring(a,a+1));e=false}else{c+=String(b[f.substring(a,a+1)](d))}}}return c}}Date.prototype.getWeek=function(){var a=new Date(this.valueOf());var b=(this.getDay()+6)%7;a.setDate(a.getDate()-b+3);var c=a.valueOf();a.setMonth(0,1);if(a.getDay()!=4){a.setMonth(0,1+((4-a.getDay())+7)%7)}return 1+Math.ceil((c-a)/(1000*60*60*24*7))};Date.prototype.getWeekYear=function(){var a=new Date(this.valueOf());a.setDate(a.getDate()-((this.getDay()+6)%7)+3);return a.getFullYear()};