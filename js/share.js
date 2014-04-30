(function(){
	function shareInfo (){
		var that = this;
		var xlwb = document.getElementById('xlwb'),
		fxrenren = document.getElementById('fxrenren'),
		fxkxr = document.getElementById('fxkxw'),
		fxdbw = document.getElementById('fxdbw'),
		fxqqwb = document.getElementById('fxqqwb'),
		fxshwb = document.getElementById('fxshwb'),
		fxwywb = document.getElementById('fxwywb'),
		fxqqzone = document.getElementById('fxqqzone'),
		fxweixin = document.getElementById('fxweixin'),
		args = that.arguments,
		encodeURI = encodeURIComponent,
		source = args.source,
		sourceUrl = args.sourceUrl,
		fxwbjk = that.fxwbUrl;
		pic = args.pic;
		//新浪微博分享按钮点击分享事件
		if(xlwb){
			xlwb.onclick = function() {
				that.windowOpen(screen,document,encodeURIComponent,fxwbjk.xlwb)
			}
		}
		//人人网分享按钮点击分享事件
		if(fxrenren){
			fxrenren.onclick = function () {
				that.windowOpen(screen,document,encodeURIComponent,fxwbjk.fxrenren)
			}
		}
		//开心人分享按钮点击分享事件
		if(fxkxr){
			fxkxr.onclick = function () {
				that.windowOpen(screen,document,encodeURIComponent,fxwbjk.fxkxw)
			}
		}
		//豆瓣网分享按钮点击分享事件
		if(fxdbw){
			fxdbw.onclick=function () {
				that.windowOpen(screen,document,encodeURIComponent,fxwbjk.fxdbw)
			}
		}
		//网易微博分享按钮点击分享事件
		if(fxwywb){
			fxwywb.onclick=function(){
				that.windowOpen(screen,document,encodeURIComponent,fxwbjk.fxwywb);
			}
		}
		//腾讯微博分享按钮点击分享事件
		if(fxqqwb){
			fxqqwb.onclick=function(){
				that.windowOpen(screen,document,encodeURIComponent,fxwbjk.fxqqwb);
			}
		}
		//搜狐微博分享按钮点击分享事件
		if(fxshwb){
			fxshwb.onclick=function(){
				that.windowOpen(screen,document,encodeURIComponent,fxwbjk.fxshwb);
			}
		}
		//QQ空间分享按钮点击分享事件
		if(fxqqzone){
			fxqqzone.onclick=function(){
				that.windowOpen(screen,document,encodeURIComponent,fxwbjk.fxqqzone);
			}
		}
		//微信分享按钮点击分享事件
		if(fxweixin){
			fxweixin.onclick = function(){
				that.windowOpen(screen,document,encodeURIComponent,fxwbjk.fxweixin);
			}
		}
	}
	shareInfo.prototype = {
		arguments : {
			"fxwb":"fxwb",//分享主题,固定不变
			"appkey":"",//分享接口的appid
			"fx":"fxfx",
			"content":_BFD.BFD_INFO.name,//请根据项目动态获取
			//"content":"111",//请根据项目动态获取
			"title":document.title,//请根据项目动态获取
			"url":self.location.href,//请根据项目动态获取
			"pic":_BFD.BFD_INFO.image_link,//请根据项目动态获取
			//"pic":"",//请根据项目动态获取
			"source":"breccDemo",//请根据项目动态获取
			"sourceUrl":window.location.host//请根据项目动态获取
		},
		fxwbUrl : {
			"xlwb" : "http://service.weibo.com/share/share.php?",//新浪微博分享接口
			"fxrenren" : "http://share.xiaonei.com/share/buttonshare.do?link=",//人人网分享接口
			"fxkxw" : "http://www.kaixin001.com/~repaste/repaste.php?",//开心人分享接口
			"fxdbw" : "http://www.douban.com/recommend/?url=",//豆瓣网分享接口
			"fxwywb" : "http://t.163.com/article/user/checkLogin.do?link=http://news.163.com/&source=",//网易微博分享接口
			"fxqqwb" : "http://v.t.qq.com/share/share.php?title=",//腾讯微博分享接口
			"fxshwb" : "http://t.sohu.com/third/post.jsp?&url=",//搜狐微博分享接口
			"fxqqzone" : "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=",//QQ空间分享接口
			"fxweixin" : "http://chart.apis.google.com/chart?"//微信分享接口
		},
		addEvent : function(elm,type,fn){
			if(elm.addEventListener){
				elm.addEventListener(type,fn);
			}else if(elm.attachEvent){
				elm.attachEvent('on'+type,fn);
			}else{
				elm['on'+type] = fn;
			}
		},
		windowOpen : function(screen,document,encodeURI,fxUrl){
			var args = this.arguments;
			var that = this;
			var sourse = args.sourse,
			sourceUrl = args.sourceUrl,
			pic = args.pic;
			var tiaozhuan = 'http://rest.api.baifendian.com/r?url=';// 百分点跳转记录点击效果的链接雷银提供
			var all = [
				"appkey="+args.appkey,
				"language=zh_tw",
				"url="+tiaozhuan+encodeURI(args.url),
				"title="+encodeURIComponent(args.content),
				"content=utf-8",
				"pic="+pic,
				"searchPic=false"
			];
			switch(fxUrl){
				case that.fxwbUrl.xlwb ://新浪微博分享接口调用
					var u = document.location;
					fxUrl = ''+fxUrl+''+all.join("&");
					fxUrl = tiaozhuan+encodeURI(fxUrl);
					function shareWB(){
					   if(!window.open(fxUrl,'mb',['toolbar=0,status=0,resizable=1,width=440,height=430,left=',(screen.width-440)/2,',top=',(screen.height-430)/2].join('')))
						 u.href = fxUrl;
					};
					if(/Firefox/.test(navigator.userAgent)){
						setTimeout(shareWB,0);
					}else {
						shareWB();
					}
				break;
				case that.fxwbUrl.fxrenren ://人人网分享接口调用
					var u = document.location,
					l = that.returnFxCont(),
					p = [tiaozhuan+encodeURI(args.url),'&title=',encodeURI(l)].join('');
					fxUrl = [''+fxUrl+'',p].join('');
					fxUrl = tiaozhuan+encodeURI(fxUrl);
					function shareWB(){
						if(!window.open(fxUrl,'xnshare',['toolbar=0,status=0,resizable=1,width=450,height=336,left=',(screen.width-626)/2,',top=',(screen.height-436)/2].join(''))){
							u.href = fxUrl;
						};
					};
					if(/Firefox/.test(navigator.userAgent)){
						setTimeout(shareWB,0);
					}else {
						shareWB();
					};
				break;
				case that.fxwbUrl.fxqqzone ://QQ空间分享接口调用
					fxUrl = ''+fxUrl+''+tiaozhuan+encodeURI(args.url)+ '&title='+encodeURI(document.title)+'&pics'+args.pic;
					fxUrl = tiaozhuan+encodeURI(fxUrl);
					window.open(fxUrl,'_blank');
				break;
				case that.fxwbUrl.fxweixin://微信分享接口调用
					args.url = tiaozhuan+args.url;
					var html = '<img src="'+fxUrl+'chs=160x160&cht=qr&chld=L|0&chl='+args.url+'" alt="二维码加载失败..." style="width:160px;height:160px;">';
					if(document.getElementById("modal_body")){
						var jsonp = document.getElementById("modal_body");
						jsonp.innerHTML = html;
						var fx = document.getElementById("fxweixin");
						var op = document.getElementById("weixin_modal");
						var addEvent = this.addEvent;
						op.className = "weixin_modal none";
						addEvent(op,'click',function(){
							op.className = "weixin_modal";
						})
					};
				break;
				case that.fxwbUrl.fxkxw://开心网分享接口调用
					t = document.selection?(document.selection.type!='None'?document.selection.createRange().text:''):(document.getSelection?document.getSelection():'');
					fxUrl = ''+fxUrl+'&rurl='+tiaozhuan+encodeURI(args.url)+'&rtitle='+encodeURI(that.returnFxCont())+'&rcontent='+encodeURI(that.returnFxCont());
					fxUrl = tiaozhuan+encodeURI(fxUrl);
					window.open(fxUrl,'kaixin');
					//void(kaixin = window.open(fxUrl,'kaixin'));
					//kaixin.focus();
				break;
				case that.fxwbUrl.fxdbw://豆瓣网分享接口调用
					var s1 = window.getSelection,
					s2 = document.getSelection,
					s3 = document.selection,
					s = s1?s1():s2?s2():s3?s3.createRange().text:'',
					fxUrl = ''+fxUrl+''+tiaozhuan+encodeURI(args.url)+'&title='+encodeURI(that.returnFxCont())+'&sel='+encodeURI(s)+'&v=1';
					fxUrl = tiaozhuan+encodeURI(fxUrl);
					function shareWB (){
						if(!window.open(fxUrl,'douban','_blank','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href = fxUrl+'&r=1';
					}
					if(/Firefox/.test(navigator.userAgent)){
						setTimeout(shareWB,0)
					}else{
						shareWB();
					}
				break;
				case that.fxwbUrl.fxwywb://网易微博分享接口调用
					var u = document.location;
					fxUrl = ''+fxUrl+'bookmark'+'&info='+encodeURI(that.returnFxCont())+''+tiaozhuan+encodeURI(args.url)+'&togImg=true&images='+args.pic+''
					fxUrl = tiaozhuan+encodeURI(fxUrl);
					function shareWB(){
						window.open(fxUrl,'newwindow',['height=330,width=550,top=' + (screen.height - 280) / 2,'left=' + (screen.width - 550) / 2,'toolbar=no, menubar=no, scrollbars=no,resizable=yes,location=no, status=no'].join(''));
					}
					if(/Firefox/.test(navigator.userAgent)){
						setTimeout(shareWB,0);
					}else {
						shareWB();
					}
				break;
				case that.fxwbUrl.fxqqwb://腾讯微博分享接口调用
					fxUrl = ''+fxUrl+''+encodeURI(that.returnFxCont())+'&url='+tiaozhuan+encodeURI(args.url)+'&site='+encodeURI+'&pic='+args.pic;
					fxUrl = tiaozhuan+encodeURI(fxUrl);
					window.open( fxUrl,'转播到腾讯微博', 'width=610, height=350, top=180, left=320, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no'); 
				break;
				case that.fxwbUrl.fxshwb://搜狐分享接口调用
					var u = document.location;
					args.url = tiaozhuan+encodeURI(args.url);
					p = [args.url,'&title=',encodeURI(args.title),'&content=','utf-8' || 'gb2312','&pic=',encodeURI(args.pic||'')].join('');
					fxUrl = [fxUrl,p].join('');
					fxUrl = tiaozhuan+encodeURI(fxUrl);
					function shareWB(){
						if(!window.open(fxUrl,'mb',['toolbar=0,status=0,resizable=1,width=660,height=470,left=',(screen.width-660)/2,',top=',(screen.height-470)/2].join(''))){
							u.href = fxUrl;
						};
					}
					if(/Firefox/.test(navigator.userAgent)){
						setTimeout(shareWB,0);
					}else {
						shareWB();
					}
				break;
				default:
				break;
			}
			return false;
		},
		//分享内容
		returnFxCont: function() {
			var args = this.arguments;
			return args.content ;
		}
	};
	var shareInfo = new shareInfo();
}());