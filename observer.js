<!-- //Program to make observation schedule for Hanle and Mount //Abu, but can also be used for any other place by putting name, //Latitude and Longitude of that place. It make rise or set ( //zenith=45 degree) for TACTIC sources plus two more user defined //sources. It gives the dark period of observation with minimum //time of 2 hours observation. //By Dr. Pradeep Chandra pcsati@gmail.com--> 
var _0x161300=_0xbdcf;(function(_0x1b56f3,_0x190ab4){var _0x4836c1=_0xbdcf,_0x340d29=_0x1b56f3();while(!![]){try{var _0x1bf0cf=parseInt(_0x4836c1(0x181))/0x1*(-parseInt(_0x4836c1(0x1a1))/0x2)+-parseInt(_0x4836c1(0x18d))/0x3+parseInt(_0x4836c1(0x19a))/0x4+-parseInt(_0x4836c1(0x1a6))/0x5*(-parseInt(_0x4836c1(0x187))/0x6)+-parseInt(_0x4836c1(0x183))/0x7+parseInt(_0x4836c1(0x17d))/0x8+parseInt(_0x4836c1(0x191))/0x9;if(_0x1bf0cf===_0x190ab4)break;else _0x340d29['push'](_0x340d29['shift']());}catch(_0x16f289){_0x340d29['push'](_0x340d29['shift']());}}}(_0x19c8,0x325ed));function place(_0x17a6aa,_0x5791a7,_0x50c2a9,_0x486065,_0x131dc9,_0x4ca5d8,_0xcde112,_0x408777){var _0x5aae95=_0xbdcf;this[_0x5aae95(0x17a)]=_0x17a6aa,this[_0x5aae95(0x192)]=_0x5791a7,this['ns']=_0x50c2a9,this[_0x5aae95(0x1ab)]=_0x486065,this['we']=_0x131dc9,this[_0x5aae95(0x194)]=_0x4ca5d8,this[_0x5aae95(0x18b)]=_0xcde112,this[_0x5aae95(0x19d)]=_0x408777;};var atlas=new Array(new place(_0x161300(0x1a2),_0x161300(0x1aa),0x0,_0x161300(0x185),0x1,-0x14a,'',''),new place(_0x161300(0x1a3),_0x161300(0x19e),0x0,_0x161300(0x18c),0x1,-0x14a,'',''),new place(_0x161300(0x1a2),_0x161300(0x1aa),0x0,_0x161300(0x185),0x1,-0x14a,'',''),new place(_0x161300(0x199),_0x161300(0x190),0x0,_0x161300(0x189),0x0,-0x0,'',''),new place(_0x161300(0x1a9),_0x161300(0x196),0x0,_0x161300(0x1a5),0x0,0x1a4,'',''),new place(_0x161300(0x1a7),_0x161300(0x18e),0x1,_0x161300(0x186),0x1,-0x3c,'',''),new place(_0x161300(0x17f),_0x161300(0x18f),0x0,'90:31:50',0x1,-0x1e0,'',''));function _0xbdcf(_0x55e188,_0x1b0ac5){var _0x19c85b=_0x19c8();return _0xbdcf=function(_0xbdcfd4,_0x43a4f7){_0xbdcfd4=_0xbdcfd4-0x17a;var _0x1c8e6e=_0x19c85b[_0xbdcfd4];return _0x1c8e6e;},_0xbdcf(_0x55e188,_0x1b0ac5);}function observatory(_0x84c23d,_0x55b4c5){var _0x14bc75=_0x161300;this[_0x14bc75(0x17a)]=_0x84c23d['name'],this[_0x14bc75(0x17c)]=_0x55b4c5[_0x14bc75(0x1a0)](),this[_0x14bc75(0x17b)]=_0x55b4c5['getMonth']()+0x1,this[_0x14bc75(0x1a4)]=_0x55b4c5['getDate'](),this[_0x14bc75(0x188)]=_0x55b4c5[_0x14bc75(0x18a)](),this['minutes']=_0x55b4c5[_0x14bc75(0x195)](),this[_0x14bc75(0x198)]=_0x55b4c5[_0x14bc75(0x19f)](),this['tz']=_0x84c23d[_0x14bc75(0x194)],this[_0x14bc75(0x192)]=parsecol(_0x84c23d[_0x14bc75(0x192)]),_0x84c23d['ns']==0x1&&(this[_0x14bc75(0x192)]=-this[_0x14bc75(0x192)]),this[_0x14bc75(0x1ab)]=parsecol(_0x84c23d[_0x14bc75(0x1ab)]),_0x84c23d['we']==0x1&&(this[_0x14bc75(0x1ab)]=-this[_0x14bc75(0x1ab)]);};var now=new Date(),observer=new observatory(atlas[0x0],now);function sitename(){var _0x347e4a=_0x161300,_0xe20dff=observer[_0x347e4a(0x17a)],_0x1f35a8=Math[_0x347e4a(0x184)](observer[_0x347e4a(0x192)]),_0x25447a=Math[_0x347e4a(0x182)](_0x1f35a8);_0xe20dff+=(_0x25447a<0xa?'\x200':'\x20')+_0x25447a,latm=0x3c*(_0x1f35a8-_0x25447a),latmi=Math[_0x347e4a(0x182)](latm),_0xe20dff+=(latmi<0xa?':0':':')+latmi,lats=0x3c*(latm-latmi),latsi=Math[_0x347e4a(0x182)](lats),_0xe20dff+=(latsi<0xa?':0':':')+latsi,_0xe20dff+=observer['latitude']>=0x0?'N\x20':'S\x20';var _0x2bcc88=Math[_0x347e4a(0x184)](observer[_0x347e4a(0x1ab)]),_0x45aaf3=Math[_0x347e4a(0x182)](_0x2bcc88);return _0xe20dff+=(_0x45aaf3<0xa?'0':'')+_0x45aaf3,longm=0x3c*(_0x2bcc88-_0x45aaf3),longmi=Math[_0x347e4a(0x182)](longm),_0xe20dff+=(longmi<0xa?':0':':')+longmi,longs=0x3c*(longm-longmi),longsi=Math[_0x347e4a(0x182)](longs),_0xe20dff+=(longsi<0xa?':0':':')+longsi,_0xe20dff+=observer[_0x347e4a(0x1ab)]>=0x0?'W':'E',_0xe20dff;};function checkdst(_0x540764){var _0x54f561=_0x161300;with(document[_0x54f561(0x193)]){if(Place[_0x54f561(0x1a8)]<0x0||Place[_0x54f561(0x1a8)]>=atlas[_0x54f561(0x17e)])return 0x0;var _0x446549=atlas[Place['selectedIndex']][_0x54f561(0x18b)],_0x7e8935=atlas[Place['selectedIndex']][_0x54f561(0x19d)],_0x4c9acd=atlas[Place[_0x54f561(0x1a8)]]['ns'];}if(_0x446549[_0x54f561(0x17e)]==0x0)return 0x0;if(_0x7e8935[_0x54f561(0x17e)]==0x0)return 0x0;var _0x4caf5a=_0x446549[_0x54f561(0x1ac)](':'),_0x519c31=_0x446549[_0x54f561(0x197)](':'),_0x369040=_0x446549[_0x54f561(0x17e)],_0x215111=parseInt(_0x446549[_0x54f561(0x19c)](0x0,_0x4caf5a),0xa),_0x26d469=parseInt(_0x446549[_0x54f561(0x19c)](_0x4caf5a+0x1,_0x519c31),0xa),_0x3d171e=parseInt(_0x446549[_0x54f561(0x19c)](_0x519c31+0x1,_0x369040),0xa);_0x4caf5a=_0x7e8935['indexOf'](':'),_0x519c31=_0x7e8935[_0x54f561(0x197)](':'),_0x369040=_0x7e8935[_0x54f561(0x17e)];var _0x38f744=parseInt(_0x7e8935['substring'](0x0,_0x4caf5a),0xa),_0x2c4e35=parseInt(_0x7e8935[_0x54f561(0x19c)](_0x4caf5a+0x1,_0x519c31),0xa),_0x3c012b=parseInt(_0x7e8935[_0x54f561(0x19c)](_0x519c31+0x1,_0x369040),0xa),_0x1b87d1=jd0(_0x540764[_0x54f561(0x17c)],_0x540764['month'],_0x540764[_0x54f561(0x1a4)]),_0x1e2b88=jdtocd(_0x1b87d1),_0x1c8cfb=jdtocd(_0x1b87d1-_0x1e2b88[0x2]+0x1);if(_0x4c9acd==0x0){if(_0x1e2b88[0x1]>_0x215111&&_0x1e2b88[0x1]<_0x38f744)return-0x3c;if(_0x1e2b88[0x1]<_0x215111||_0x1e2b88[0x1]>_0x38f744)return 0x0;}else{if(_0x1e2b88[0x1]>_0x215111||_0x1e2b88[0x1]<_0x38f744)return-0x3c;if(_0x1e2b88[0x1]<_0x215111&&_0x1e2b88[0x1]>_0x38f744)return 0x0;}if(_0x1e2b88[0x1]==_0x215111){var _0x4ca6e8=_0x3d171e-_0x1c8cfb[0x3]+0x1;_0x4ca6e8=_0x4ca6e8+0x7*_0x26d469;while(_0x4ca6e8>month_length[_0x1e2b88[0x1]-0x1])_0x4ca6e8-=0x7;if(_0x1e2b88[0x2]<_0x4ca6e8)return 0x0;return-0x3c;}if(_0x1e2b88[0x1]==_0x38f744){var _0x4ca6e8=_0x3c012b-_0x1c8cfb[0x3]+0x1;_0x4ca6e8=_0x4ca6e8+0x7*_0x2c4e35;while(_0x4ca6e8>month_length[_0x1e2b88[0x1]-0x1])_0x4ca6e8-=0x7;if(_0x1e2b88[0x2]<_0x4ca6e8)return-0x3c;return 0x0;}return 0x0;};function jd(_0x344937){var _0x2e77fd=_0x161300,_0x4f2a64=jd0(_0x344937[_0x2e77fd(0x17c)],_0x344937['month'],_0x344937[_0x2e77fd(0x1a4)]);return _0x4f2a64+=(_0x344937['hours']+(_0x344937['minutes']+_0x344937['tz'])/0x3c+_0x344937[_0x2e77fd(0x198)]/0xe10)/0x18,_0x4f2a64;};function local_sidereal(_0x7f1197){var _0x41ff69=_0x161300,_0x27bc05=g_sidereal(_0x7f1197[_0x41ff69(0x17c)],_0x7f1197['month'],_0x7f1197[_0x41ff69(0x1a4)]);_0x27bc05+=1.00273790935*(_0x7f1197[_0x41ff69(0x188)]+(_0x7f1197[_0x41ff69(0x180)]+_0x7f1197['tz']+_0x7f1197[_0x41ff69(0x198)]/0x3c)/0x3c),_0x27bc05-=_0x7f1197[_0x41ff69(0x1ab)]/0xf;while(_0x27bc05<0x0)_0x27bc05+=0x18;while(_0x27bc05>0x18)_0x27bc05-=0x18;return _0x27bc05;};function _0x19c8(){var _0x4170cd=['day','110:57:07','148195meQhcc','Namibia','selectedIndex','Arizona','24:37:41','longitude','indexOf','name','month','year','1550488jSkXbx','length','Yangbajing','minutes','29ejhvKi','floor','2591085mBnKDG','abs','72:45:11','16:30:0','42mAMVLH','hours','17:53:27','getHours','dss','78:57:51','920064BtmIuZ','23:16:18','30:06:38','28:45:42','7317045UNPztJ','latitude','table1','zone','getMinutes','31:40:30','lastIndexOf','seconds','La\x20Palma','162372ZUiKwE','sqrt','substring','dse','32:46:46','getSeconds','getFullYear','25636gSYaTC','Mount\x20Abu','Hanle'];_0x19c8=function(){return _0x4170cd;};return _0x19c8();}function radtoaa(_0x147c4f,_0x572270,_0x45a5b9){var _0x4b8f71=_0x161300,_0x29d298=local_sidereal(_0x45a5b9),_0x280c97=cosd(0xf*(_0x29d298-_0x147c4f))*cosd(_0x572270),_0x40213f=sind(0xf*(_0x29d298-_0x147c4f))*cosd(_0x572270),_0xe8799d=sind(_0x572270),_0x24f41e=_0x280c97*sind(_0x45a5b9['latitude'])-_0xe8799d*cosd(_0x45a5b9[_0x4b8f71(0x192)]),_0x6b9317=_0x40213f,_0x2a97c4=_0x280c97*cosd(_0x45a5b9[_0x4b8f71(0x192)])+_0xe8799d*sind(_0x45a5b9['latitude']),_0x52366a=rev(atan2d(_0x6b9317,_0x24f41e)+0xb4),_0x305cd6=atan2d(_0x2a97c4,Math[_0x4b8f71(0x19b)](_0x24f41e*_0x24f41e+_0x6b9317*_0x6b9317));return new Array(_0x305cd6,_0x52366a);};function aatorad(_0x46a3b8,_0x2c3074,_0x32f023){var _0x519e1d=_0x161300,_0x20ca20=local_sidereal(_0x32f023),_0x54b73f=_0x32f023[_0x519e1d(0x192)],_0x3835e9=sind(_0x46a3b8)*sind(_0x54b73f)+cosd(_0x46a3b8)*cosd(_0x54b73f)*cosd(_0x2c3074),_0x22787c=asind(_0x3835e9);_0x3835e9=(sind(_0x46a3b8)-sind(_0x54b73f)*sind(_0x22787c))/(cosd(_0x54b73f)*cosd(_0x22787c));var _0x4e969f=acosd(_0x3835e9);_0x3835e9=sind(_0x2c3074);if(_0x3835e9>0x0)_0x4e969f=0x168-_0x4e969f;var _0x158f2d=_0x20ca20-_0x4e969f/0xf;if(_0x158f2d<0x0)_0x158f2d+=0x18;if(_0x158f2d>=0x18)_0x158f2d-=0x18;return new Array(_0x158f2d,_0x22787c);} 
