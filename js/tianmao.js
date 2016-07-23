$(function(){
	// -----------商品分类 天猫超市 天猫国际----------------
      var da=$(".da");
      var za=$(".za");
      var xa=$(".xa");
      var mt=$(".mt");
      var mt1=$(".mt1");
      var mt2=$(".mt2");
      // ---------------------------
      for(var i=0;i<da.length;i++){
      	 da[i].index=i;
      	 da[i].onmouseover=function(){
      	 	 mt[this.index].style.display="block";
      	 }
      	 da[i].onmouseout=function(){
      	 	 mt[this.index].style.display="none";
      	 }
      }
      for(var i=0;i<za.length;i++){
      	 za[i].index=i;
      	 za[i].onmouseover=function(){
      	 	 mt1[this.index].style.display="block";
      	 }
      	 za[i].onmouseout=function(){
      	 	 mt1[this.index].style.display="none";
      	 }
      }
      for(var i=0;i<xa.length;i++){
      	 xa[i].index=i;
      	 xa[i].onmouseover=function(){
      	 	 mt2[this.index].style.display="block";
      	 }
      	 xa[i].onmouseout=function(){
      	 	 mt2[this.index].style.display="none";
      	 }
      }
      // -----------------------------------------------------
      // ---------------天猫主图轮播--------------------------
      var headin=$(".headin")[0];
      var headinbox=$(".headinbox",headin);
      var lis=$("li",$("ul",headin)[0]);
      var num=0;
      var flag=true;
      // ---------------------------------------
      lis[0].style.background="#f1f1f1";
      headinbox[0].style.zIndex=1;
      // ---------------------------------------
      var t=setInterval(moveR,3000);
      function moveR(){
          num++;
          if(num==headinbox.length){
             	num=0;
          }
          for(var i=0;i<headinbox.length;i++){
          	      animate(headinbox[i],{opacity:0},1000);
          	      lis[i].style.background="#666";
          }
          animate(headinbox[num],{opacity:1},1000);
          lis[num].style.background="#f1f1f1";
      }
      // ---------------------------------------
      headin.onmouseover=function(){
      	  clearTimeout(t);
      }
      headin.onmouseout=function(){
      	  t=setInterval(moveR,3000);
      }
      // ---------------------------------------
      for(var i=0;i<lis.length;i++){
      	   lis[i].index=i;
       	   lis[i].onclick=function(){ 
       	   	    for(var j=0;j<lis.length;j++){
                         animate(headinbox[j],{opacity:0},800,Tween.Linear);
       	   	             lis[j].style.background="#666";	
       	   	    }
                   animate(headinbox[this.index],{opacity:1},800,Tween.Linear);
       	   	       lis[this.index].style.background="#f1f1f1";
       	   	       num=this.index;
            }
      }
      // --------------------------------------
      // -----------------------------------------------------
      // ---------------内容img动画--------------------------
      var imgs=$(".image");
      var imgss=$(".image1");
      var imgsss=$(".image3");
      var imgssss=$(".image2");
      // ----------------------------------------------------
      for (var i = 0; i < imgs.length; i++) {
              aa(imgs[i])
      };
      function aa(obj){
          obj.onmouseover=function(){
            animate(obj,{left:80},Tween.Quad.easeInOut);
           } 
          obj.onmouseout=function(){
             animate(obj,{left:95},Tween.Quad.easeInOut);
          }
      }
      // ----------------------------------------------------
      for (var i = 0; i < imgss.length; i++) {
              bb(imgss[i])
      };
      function bb(obj){
          obj.onmouseover=function(){
            animate(obj,{left:140},Tween.Quad.easeInOut);
           } 
          obj.onmouseout=function(){
             animate(obj,{left:155},Tween.Quad.easeInOut);
          }
      }
      // ----------------------------------------------------
      for (var i = 0; i < imgsss.length; i++) {
              cc(imgsss[i])
      };
      function cc(obj){
          obj.onmouseover=function(){
            animate(obj,{left:75},Tween.Quad.easeInOut);
           } 
          obj.onmouseout=function(){
             animate(obj,{left:90},Tween.Quad.easeInOut);
          }
      }
      // ----------------------------------------------------
      for (var i = 0; i < imgssss.length; i++) {
              dd(imgssss[i])
      };
      function dd(obj){
          obj.onmouseover=function(){
            animate(obj,{left:265},Tween.Quad.easeInOut);
           } 
          obj.onmouseout=function(){
             animate(obj,{left:280},Tween.Quad.easeInOut);
          }
      }
      // --------------------------------------------------------
})
$(function(){
 // --------------------按需加载----------------------------
      var cw=document.documentElement.clientWidth;
      var ch=document.documentElement.clientHeight;
      var floors=$(".floor");
      // console.log(floors);
      var floorArr=[];
      var sflag=true;
      var flag=true;
      var anniu=$(".anniu")[0];
      var dingbu=$(".dingbu")[0];
      // -----------------------------------
      // --------------左边按钮-------------
      var lis=$("li",$(".anniu")[0]);
      for(var i=0;i<lis.length;i++){
         lis[i].index=i;
         lis[i].onclick=function(){
               flag=false;
               for(var j=0;j<lis.length;j++){
                   lis[j].className="";
               }
               lis[this.index].className="red";
               animate(document.body,{scrollTop:floorArr[this.index]});
               animate(document.documentElement,{scrollTop:floorArr[this.index]});
         }
      }
      // -----------------------------------
      for(var i=0;i<floors.length;i++){
          floorArr.push(floors[i].offsetTop);
      }
      //滚轮事件
      window.onscroll=function(){
            //兼容浏览器 obj
            var obj=document.body.scrollTop?document.body:document.documentElement;
            //获取滚轮滑动的距离
            var scrolltop=obj.scrollTop;
            if(!flag) return;
            //遍历下所有的楼层到顶部的距离
            for(var i=0;i<floors.length;i++){
            //判断窗口+滚动距离>=各个楼层到顶部距离
            if(ch+scrolltop>=floorArr[i]){
                //遍历按键
                for(var j=0;j<lis.length;j++){
                    lis[j].className="";
                }
                lis[i].className="red";
            }
        }
      // -----------------------------------
      // --------------左边隐藏-------------
       if(obj.scrollTop>=floorArr[0]){
            if(sflag){
                sflag=false;
                animate(anniu,{left:0});
                animate(dingbu,{top:0});
            }
            
        }else if(obj.scrollTop<floorArr[0]){
            if(!sflag){
                sflag=true;
                animate(anniu,{left:-40});
                animate(dingbu,{top:-80});
            }
            
        }
      }
      // -----------------------------------
      // --------------左边返回-------------
       var obj=document.body.scrollTop?document.body:document.documentElement;
       var fanhui=$(".fanhui")[0];
       // console.log(fanhui)
       fanhui.onclick=function(){
           animate(obj,{scrollTop:0});
       }

       var obj=document.body.scrollTop?document.body:document.documentElement;
       var fanhui2=$(".youdw10")[0];
       fanhui2.onclick=function(){
           animate(obj,{scrollTop:0});
       }

      // --------------------------------------------------------
      // --------------------------------------------------------
})
$(function(){
      var fdt=$(".fdt");
      // console.log(fdt);
      for(var i=0;i<fdt.length;i++){
             ee(fdt[i]);
      }
      function ee(obj){
          obj.onmouseover=function(){
            animate(obj,{width:153,height:153},100,Tween.Quad.easeInOut);
           } 
          obj.onmouseout=function(){
             animate(obj,{width:147,height:147},100,Tween.Quad.easeInOut);
          }
      }
      // -------------------------------
})
$(function(){
      var sy=$(".sy");
      var nr=$(".nr");
      for(var i=0;i<sy.length;i++){
           sy[i].index=i;
           sy[i].onmouseover=function(){
               nr[this.index].style.display="block";
           }
           sy[i].onmouseout=function(){
               nr[this.index].style.display="none";
               }
           }
      var cj=$(".cj");
      var cjs=$(".cjs");
      for(var i=0;i<cjs.length;i++){
           csj[i].index=i;
           csj[i].onmouseover=function(){
               cj[this.index].style.zIndex=10;
           }
           csj[i].onmouseout=function(){
               cj[this.index].style.zIndex=0;
               }
      }
})