const _0x2cf3=['scrollState','width','xEnd','.scroll-point','affinityDown','srcElement','querySelectorAll','viewfull','viewout','height','scrollHeight','viewtop','offsetLeft','offsetTop','offsetParent','affinityUp','dispatchEvent','viewbottom','viewin','clientHeight','paddingTop','scrollTop','yEnd','clientWidth'];(function(_0x301a7b,_0x2cf3f6){const _0x1e1141=function(_0x4994dd){while(--_0x4994dd){_0x301a7b['push'](_0x301a7b['shift']());}};_0x1e1141(++_0x2cf3f6);}(_0x2cf3,0x12e));const _0x1e11=function(_0x301a7b,_0x2cf3f6){_0x301a7b=_0x301a7b-0x0;let _0x1e1141=_0x2cf3[_0x301a7b];return _0x1e1141;};function setupScroll(_0x28a0ae){for(let _0x48bf55 of _0x28a0ae[_0x1e11('0x10')](_0x1e11('0xd'))){_0x48bf55[_0x1e11('0xe')]=0x1;_0x48bf55['affinityUp']=0x1;}_0x28a0ae['onscroll']=_0x3a2fff=>{let _0x16ac81=parseFloat(getComputedStyle(_0x28a0ae)[_0x1e11('0x6')]);for(let _0x2c48ac of _0x28a0ae[_0x1e11('0x10')](_0x1e11('0xd'))){let _0x305fc3=_0x1e11('0x7')in _0x3a2fff[_0x1e11('0xf')]?_0x3a2fff[_0x1e11('0xf')]:document['scrollingElement'];let _0xe3d877=_0x305fc3['scrollTop']+_0x3a2fff['srcElement'][_0x1e11('0x17')]+_0x16ac81;let _0xdfa65d=_0x305fc3[_0x1e11('0x7')]+_0x305fc3['clientHeight']+_0x3a2fff[_0x1e11('0xf')][_0x1e11('0x17')]+_0x16ac81;let _0x21aa76=new Rect(_0x2c48ac[_0x1e11('0x16')]+_0x2c48ac[_0x1e11('0x0')][_0x1e11('0x16')],_0x2c48ac['offsetTop']+_0x2c48ac[_0x1e11('0x0')][_0x1e11('0x17')],_0x2c48ac[_0x1e11('0x9')],_0x2c48ac[_0x1e11('0x5')]);if(_0x21aa76['y']>=_0xdfa65d||_0x21aa76['yEnd']<=_0xe3d877){if(_0x2c48ac[_0x1e11('0xa')]){_0x2c48ac[_0x1e11('0xa')]=undefined;_0x2c48ac['dispatchEvent'](new Event(_0x1e11('0x12')));}}else{if(_0x21aa76['y']>_0xe3d877&&_0x21aa76[_0x1e11('0x8')]<_0xdfa65d){if(_0x2c48ac['scrollState']!==_0x1e11('0x11')){_0x2c48ac[_0x1e11('0xa')]=_0x1e11('0x11');_0x2c48ac[_0x1e11('0x2')](new Event(_0x1e11('0x11')));}}else if(!_0x2c48ac['scrollState']){_0x2c48ac[_0x1e11('0xa')]=_0x1e11('0x4');_0x2c48ac[_0x1e11('0x2')](new Event('viewenter'));}else if(cmpFloat(_0x21aa76['y'],_0xe3d877)!==_0x2c48ac[_0x1e11('0x1')]||_0xe3d877===_0x28a0ae[_0x1e11('0x17')]+_0x16ac81&&_0x21aa76['y']===_0xe3d877){_0x2c48ac[_0x1e11('0xa')]='viewtop';_0x2c48ac['affinityUp']=cmpFloat(_0x21aa76['y'],_0xe3d877);_0x2c48ac[_0x1e11('0x2')](new Event(_0x1e11('0x15')));}else if(cmpFloat(_0x21aa76[_0x1e11('0x8')],_0xdfa65d)!==_0x2c48ac['affinityDown']||_0xdfa65d===_0x28a0ae[_0x1e11('0x14')]+_0x28a0ae[_0x1e11('0x17')]&&_0xdfa65d===_0x21aa76[_0x1e11('0x8')]){_0x2c48ac[_0x1e11('0xa')]='viewbottom';_0x2c48ac[_0x1e11('0xe')]=cmpFloat(_0x21aa76[_0x1e11('0x8')],_0xdfa65d);_0x2c48ac[_0x1e11('0x2')](new Event(_0x1e11('0x3')));}}}};}function cmpFloat(_0x30b3e9,_0x2251cf){let _0x1e43dc=_0x30b3e9-_0x2251cf;if(_0x1e43dc<0x0)return-0x1;return 0x1;}function cmp(_0x4c1ba1,_0x2cc3be){return(_0x4c1ba1-_0x2cc3be>>0x3f)-(-(_0x4c1ba1-_0x2cc3be)>>0x3f);}class Rect{constructor(_0x155a26,_0x17b2d8,_0x5c5c27,_0x50cfb0){this['x']=_0x155a26;this['y']=_0x17b2d8;this[_0x1e11('0xb')]=_0x5c5c27;this[_0x1e11('0x13')]=_0x50cfb0;}get[_0x1e11('0xc')](){return this['x']+this[_0x1e11('0xb')];}get[_0x1e11('0x8')](){return this['y']+this[_0x1e11('0x13')];}}