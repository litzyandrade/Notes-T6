var a=function(a){return"string"==typeof a?a.length>0:"number"==typeof a},r=function(a,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*a)/t+0},t=function(a,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),a>t?t:a>r?a:r},n=function(a){var r=a/255;return r<.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},u=function(a){return 255*(a>.0031308?1.055*Math.pow(a,1/2.4)-.055:12.92*a)},o=96.422,e=100,b=82.521,l=function(a){var r,n,o={x:.9555766*(r=a).x+-.0230393*r.y+.0631636*r.z,y:-.0282895*r.x+1.0099416*r.y+.0210077*r.z,z:.0122982*r.x+-.020483*r.y+1.3299098*r.z};return n={r:u(.032404542*o.x-.015371385*o.y-.004985314*o.z),g:u(-.00969266*o.x+.018760108*o.y+41556e-8*o.z),b:u(556434e-9*o.x-.002040259*o.y+.010572252*o.z),a:a.a},{r:t(n.r,0,255),g:t(n.g,0,255),b:t(n.b,0,255),a:t(n.a)}},h=function(a){var r=n(a.r),u=n(a.g),l=n(a.b);return function(a){return{x:t(a.x,0,o),y:t(a.y,0,e),z:t(a.z,0,b),a:t(a.a)}}(function(a){return{x:1.0478112*a.x+.0228866*a.y+-.050127*a.z,y:.0295424*a.x+.9904844*a.y+-.0170491*a.z,z:-.0092345*a.x+.0150436*a.y+.7521316*a.z,a:a.a}}({x:100*(.4124564*r+.3575761*u+.1804375*l),y:100*(.2126729*r+.7151522*u+.072175*l),z:100*(.0193339*r+.119192*u+.9503041*l),a:a.a}))},i=216/24389,p=24389/27,y=function(r){var n=r.l,u=r.a,o=r.b,e=r.alpha,b=void 0===e?1:e;if(!a(n)||!a(u)||!a(o))return null;var l=function(a){return{l:t(a.l,0,400),a:a.a,b:a.b,alpha:t(a.alpha)}}({l:Number(n),a:Number(u),b:Number(o),alpha:Number(b)});return c(l)},c=function(a){var r=(a.l+16)/116,t=a.a/500+r,n=r-a.b/200;return l({x:(Math.pow(t,3)>i?Math.pow(t,3):(116*t-16)/p)*o,y:(a.l>8?Math.pow((a.l+16)/116,3):a.l/p)*e,z:(Math.pow(n,3)>i?Math.pow(n,3):(116*n-16)/p)*b,a:a.alpha})};module.exports=function(a,t){a.prototype.toLab=function(){return t=h(this.rgba),u=t.y/e,l=t.z/b,n=(n=t.x/o)>i?Math.cbrt(n):(p*n+16)/116,a={l:116*(u=u>i?Math.cbrt(u):(p*u+16)/116)-16,a:500*(n-u),b:200*(u-(l=l>i?Math.cbrt(l):(p*l+16)/116)),alpha:t.a},{l:r(a.l,2),a:r(a.a,2),b:r(a.b,2),alpha:r(a.alpha,3)};var a,t,n,u,l},t.object.push([y,"lab"])};
