// JavaScript Document

    /*** DEV ***/
    function print_obj (obj){
        var str="";
        for (var elem in obj){
            str += elem+" = "+obj[elem]+"<br />";
        }
        document.write (str);
    }


    function print_r(array){
        var str="Array(\r\n";
        for (var k in array){
            str += k+" => "+array[k]+"\r\n";
        }
        str += "\r\n)";
        alert (str);
    }

    /*** ***/

    function getobj (id) {
        return document.getElementById(id);
    }

    function $$ (name) {
        return document.getElementsByName(name);
    }

    function TagName (ID, TagName) {
        return document.getElementById(ID).getElementsByTagName (TagName);
    }

    function CheckMobilePhone (tel){
        var t =  tel.substr(0,3);
        if (tel.length==11){

            if (tel.search(/^(\d)+$/) != -1){

    		        if (t.search(/(130|131|132|133|134|135|136|137|138|139|145|147|150|151|152|153|154|155|156|157|158|159|180|181|182|183|184|185|186|187|188|189)/) != -1){
    		            return true;
    		        }else{
    		            Warning (Array(3,'手机号开头 错误！'));
    		            return false;
    		        }

    	      }else{
    		        Warning (Array(3,'手机号码只能是数字'));
    		        return false;
            }

        }else{
            alert ('请正确手机输入位数！');
            return false;
        }
    }

    function CheckMail (mail) {
        var reg = /^([\w\.]+?)@([\w]+?)\.(cn|com|com.cn|net|net.cn|org|org.cn|gov.cn|mobi|tv|biz|cc|hk|name|info|tel|asia|me)$/i;
        if (reg.test(mail)) {
            return true;
        }else{
            Warning (Array(3,'请正确输入Email格式！'));
            return false;
        }
    }

    function CheckDateTime(str) {
        var reg = /^(\d+)-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        var r = str.match(reg);
        if (r == null) {
            return false;
        }else{
            r[2]=r[2]-1;
            var d = new Date(r[1],r[2],r[3],r[4],r[5],r[6]);
            if (d.getFullYear()!=r[1])   return false;
            if (d.getMonth()!=r[2])      return false;
            if (d.getDate()!=r[3])       return false;
            if (d.getHours()!=r[4])      return false;
            if (d.getMinutes()!=r[5])    return false;
            if (d.getSeconds()!=r[6])    return false;
        }
        return true;
    }


    function GetQuery (id){
        var uri = window.location.search;
        var re = new RegExp(id+'=([^&]*)');
        return re.test(uri) ? uri.match(re)[1] : null;
    }


    function KeyCode(e){
        var _event = e || window.event;
        var code =  _event.keyCode || _event.which;
        return code;
    }


    function CheckBrowser(){
        var browser = Array();
        var obj = window.navigator;

        if (obj.appName=="Microsoft Internet Explorer") {
            var reg = /MSIE (\d)\.(\d); /;
            var v = obj.appVersion.match(reg);
            browser['type'] = "ie";
            browser['version'] = v[1];
        }else{

    		    /*
    		    if (obj.appName=="Netscape"){
        		    var reg = /Firefox\/(.*)/;
        		    var v = obj.userAgent.match(reg);
        		    browser['type'] = "firefox";
        		    browser['version'] = v[1];
    	 	    }
    	 	    */
        		    browser['type'] = "firefox";
        		    browser['version'] = 1.0;
        }
        return browser;
    }


    function Getpos (e) {

        var Y = e.offsetTop;
        var X = e.offsetLeft;
        var H = e.offsetHeight;
        var W = e.offsetWidth;

        while(e=e.offsetParent) {
            Y+=e.offsetTop;
            X+=e.offsetLeft;
      	}

        var array = Array();
        array['X'] = X;
        array['Y'] = Y;
        array['W'] = W;
        array['H'] = H;

        return array;
    }

    function Reload (){
        window.location.reload();
    }

    function SetCookie (Name, Value, Minute){

        var str = Name + "=" + Value;

        if(Minute > 0) {
            var date = new Date();
            var ms = Minute * 60 * 1000;
            date.setTime(date.getTime () + ms);
            str += "; expires=" + date.toGMTString();
        }

        document.cookie = str;
    }



    function GetCookie (Name){//获取指定名称的cookie的值
        var arrStr = document.cookie.split("; ");

        for(var i = 0; i < arrStr.length; i++){
            var temp = arrStr[i].split("=");

            if(temp[0] == Name){
    		        return (temp[1]);
            }
        }
    }


    function RandStr (len){
        var str = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789abcdefghijklmnpqrstuvwxyz';
        var code = '';

        for (var i = 0; i < len; i ++ ) {
            var s = parseInt (Math.random () * str.length + 1)
            code += str.substr (s, 1);
        }

        return code;
    }


    function CheckEmpty (Value, Str){

        if (Value == null || Value == ''){
            var _Text = (Str == '' || Str === undefined) ? '请选择一个！' : Str;
            var a = Array ();
            a['Ajax_Status'] = 3;
            a['Ajax_StatusText'] = _Text;
            Warning (a);
            return false;
        } else {
            return true;
        }

    }


    function CheckBoxAll (This, id){
        var obj = $$(id);
        var len = obj.length;

        for (var i = 0; i < len; i++){
            obj[i].checked = This.checked;
        }
    }


    function GetCheckBox (ID) {
        var OBJ = $$ (ID);
        var Len = OBJ.length;
        var Values = '';

        for (var i = 0; i < Len; i ++ ) {
            if (OBJ[i].checked == true) {
                Values += OBJ[i].value+' ';
            }
        }

        Values = Values.substr(0, Values.length-1);
        return Values;
    }


    function GetRadio (id){
        var obj = $$(id);
        var len = obj.length;
        var value = '';

        for (var i=0; i<len; i++){
            if (obj[i].checked == true){
                value += obj[i].value+',';
            }
        }

        value = value.substr(0, value.length-1);
        return value;
    }

    function GetFormData (ID) {

        var Values = '';

        if (ID === undefined || ID == '')  {
            var INPUT       = document.getElementsByTagName ('input');
            var TEXTAREA    = document.getElementsByTagName ('textarea');
            var SELECT      = document.getElementsByTagName ('select');
        } else {
            var INPUT       = TagName (ID, 'input');
            var TEXTAREA    = TagName (ID, 'textarea');
            var SELECT      = TagName (ID, 'select');
        }

        var s_input = Array ();
        var INPUT_Length = INPUT.length;
        for (var i = 0; i < INPUT_Length; i ++) {
            if (INPUT[i].type == 'radio') {

                if (INPUT[i].checked == true) {
                    Values += INPUT[i].id + "=" + escape (INPUT[i].value) + "&";
                    s_input[INPUT[i].id] = 1;
                } else {

                    if (s_input[INPUT[i].id] == false) {
                        Values += INPUT[i].id + "=&";
                    }
                }

            } else if (INPUT[i].type == 'checkbox') {

                if (INPUT[i].checked == true) {
                    Values += INPUT[i].id + "=" + escape (INPUT[i].value) + "&";
                } else {
                    Values += INPUT[i].id + "=&";
                }


            } else if (INPUT[i].type == 'text' || INPUT[i].type == 'password' || INPUT[i].type == 'hidden') {
                Values += INPUT[i].id + "=" + escape (INPUT[i].value) + "&";
            }

        }

        var TEXTAREA_Length = TEXTAREA.length;
        for (var i = 0; i < TEXTAREA_Length; i ++) {
            Values += TEXTAREA[i].id + "=" + escape (TEXTAREA[i].value) + "&";
        }

        var SELECT_Length = SELECT.length;
        for (var i = 0; i < SELECT_Length; i ++) {
            Values += SELECT[i].id + "=" + escape (SELECT[i].value) + "&";
        }

        return Values;
    }


    function Location(Url){
        if (Url === undefined) {
            window.location.reload();
        } else {
    	    document.location.href = Url;
        }
    }


    function Confirm (Content, _True, _False) {
        var str = '';
        var TButton = '';
        var FButton = '';
        var TrueAction = (_True == '') ? 'Base.Ajax.Close();' : _True;
        var FalseAction = (_False == '' || _False == undefined) ? 'Base.Ajax.Close();' : _False;
        TButton = '<input type="button" value="确定" onclick="'+TrueAction+'" class="buttons" />&nbsp;&nbsp;';
        FButton = '<input type="button" value="取消" onclick="'+FalseAction+'" class="buttons" />';

        str += '<div style="maring:0 auto;">';
        str += '<div class="Ajax_Status_2" style="margin-left:30px; margin-right:10px;float:left;"></div>';
        str += '<div style="height:27px;line-height:27px;text-align:left;">';
        str += Content;
        str += '</div></div>';
        str += '<div style="margin-top:30px;">'+TButton+FButton+'</div>';
        Base.Ajax.Msg (str,300,150);
    }

    function LoadData () {
        $str = '<div style="font-family:微软雅黑;font-size:14px;width:148px;height:51px;line-height:51px;background:url(/template/skin/default/images/system/loaddatabg.png);"><div style="margin-left:10px;"><img src="/template/skin/default/images/system/loading_01.gif" align="middle" />&nbsp;&nbsp;数据加载中...</div></div>';
        Base.Ajax.Msg ($str,150,60);
    }


    function AjaxObject () {

        var xmlhttp;
        var data;
        var funcname;
        var waiting;
        var _event;
        var KeyCode;
        this.cover_div = "CoverDiv";
        this.alert_div = "popupDiv";
        var dragobj;
        var x = 0;
        var y = 0;
        var IE = (navigator.appVersion.indexOf("MSIE") != -1);//IE
        var FF = (navigator.userAgent.indexOf("Firefox") != -1);//Firefox


        this.getXMLHttp = function () {

            if (window.ActiveXObject) {

                return (new ActiveXObject ("Microsoft.XMLHTTP"));

            } else {

                if (window.XMLHttpRequest) {

                    return (new XMLHttpRequest ());

                } else {

                    return null;

                }
            }
        }


        this.Start = function (url, str, post, fun, waite) {
            funcname = fun;
            waiting = this.Waiting (waite);
            xmlhttp = this.getXMLHttp ();
            xmlhttp.open (post, url, true);
            xmlhttp.setRequestHeader ("Content-Type","application/x-www-form-urlencoded");
            // xmlhttp.setRequestHeader ("Content-Type","multipart/form-data");
            xmlhttp.onreadystatechange = this.redata;
            xmlhttp.send (str);
        }


        this.redata = function() {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                var str = xmlhttp.responseText

                var a = Array ();

                var code = (str.length > 8) ? str.substr (0, 17) : str;

                if (code == '<!--Login Page-->') {
                    alert (code);
                    a['Ajax_Status'] = -2;
                    a['Ajax_StatusText'] = '';
                    str = a;
                } else {
                    str = eval ( "("+ str +")");
                }

                funcname (str);

            } else {

                funcname (waiting);

            }

        }


        this.Waiting = function(test) {
            var str = (test) ? test : '数据加载中,请稍候...';
            str = '<img src="'+ImgPath+'/template/skin/default/images/system/waiting_1.gif" align="absmiddle" />&nbsp;<span style="font-size:12px">' + str + '</span>';
            var array = new Array ();
            array['Ajax_Status'] = -1;
            array['Ajax_StatusText'] = str;
            return array;
        }


        this.Close = function (obj) {

            var cdiv = $ ('pop_bottom_div');
            cdiv.parentNode.removeChild (cdiv);
            $ (obj).style.display = 'none';

        }

        this.Reload = function (){
            this.Close();
            window.location.reload();
        }

    } //end AjaxObject

    function Base_Object () {

        this.browser    = CheckBrowser();

        this.Ajax       = new AjaxObject ();

        this.MsgId      = null;

        // 移动窗口
        this.Drag = function (evt){

            //移动调用 onmousedown="Base.Ajax.Drag(event)"
            dragobj = document.getElementById (this.MsgId);

            if (FF){
                x = document.documentElement.scrollLeft + evt.layerX;
                y = document.documentElement.scrollTop + evt.layerY;

                if (document.documentElement.scrollTop > 0){
                    y = evt.layerY - document.documentElement.scrollTop;
                }

                if (document.documentElement.scrollLeft > 0){
                    x = evt.layerX - document.documentElement.scrollLeft;
                }
            }

            if (IE) {
                x = document.documentElement.scrollLeft + evt.offsetX;
                y = document.documentElement.scrollTop + evt.offsetY;

                if (document.documentElement.scrollTop > 0){
                    y = evt.offsetY - document.documentElement.scrollTop;
                }

                if (document.documentElement.scrollLeft > 0){
                    x = evt.offsetX - document.documentElement.scrollLeft;
                }
            }

            document.body.onmousemove = function (evt){

                evt = evt || window.event;
                var X = evt.clientX - x;
                var Y = evt.clientY - y;

                X = (X < 0) ? 0 : X;
                Y = (Y < 0) ? 0 : Y;

                if(dragobj) {
                    dragobj.style.left = X + "px";
                    dragobj.style.top = Y + "px";
                }
            }

            document.body.onmouseup = function (){
                dragobj = null;
            }

        }//drag function


        // 打开背景底层 【完成】
        this.Open_BottomDiv = function () {
            var bottom_1 = document.getElementById ('pop_bottom_1');
            if (bottom_1.style.display == 'none') {
                bottom_1.style.display = '';
            }
        }

        // 关闭背景底层 【完成】
        this.Close_BottomDiv = function () {
            var bottom_1 = document.getElementById ('pop_bottom_1');
            bottom_1.style.display = 'none';
        }

        // 打开背景底层_2 【完成】
        this.Open_BottomDiv_2 = function () {
            var bottom_2 = document.getElementById ('pop_bottom_2');
            if (bottom_2.style.display == 'none') {
                bottom_2.style.display = '';
            }
        }

        // 关闭背景底层_2 【完成】
        this.Close_BottomDiv_2 = function () {
            var bottom_2 = document.getElementById ('pop_bottom_2');
            bottom_2.style.display = 'none';
        }

        //弹出编辑框 【完成】
        this.Msg = function (obj) {

            this.MsgId = obj;

            this.Open_BottomDiv ();

            var d = document.documentElement;
            var dom_height  = d.clientHeight;
            var dom_width   = d.clientWidth;

            var con_div = document.getElementById (obj);

            if (con_div.style.display == 'none') {
                con_div.style.display = '';
            } else {
                con_div.style.display = 'none';
            }


            var Left    = (dom_width - con_div.offsetWidth) / 2;
            var Top     = (dom_height - con_div.offsetHeight) / 2;

            con_div.style.left  = Left + "px";
            con_div.style.top   = Top + "px";

        }

        // 关闭编辑框 【完成】
        this.Close_Msg = function () {
            document.getElementById (this.MsgId).style.display = 'none';
            this.Close_BottomDiv ();
            this.MsgId = null;
        }

        this.popMsg = function (Content) {

            this.Open_BottomDiv ();
            this.Open_BottomDiv_2 ();

            var msg_id = 'popmsg_div';
            var msg_obj = document.getElementById ('popmsg_div');
            msg_obj.style.display = '';

            var str = '<table width="100%" border="0" cellpadding="0" cellspacing="0" class="msg"><tr class="tit"><td width="90%" class="text">&nbsp;&nbsp;提示</td><td width="10%" valign="top" class="titlebg" ><img src="'+ImgPath+'/tpl/skin/default/images/admin/close.png" alt="关闭" width="26" height="17" style="cursor:pointer" title="关闭" onclick="Base.Close_popMsg ();" /></td></tr><tr><td colspan="2"  valign="top" class="con"><div id="temData" name="temData" style="display: none;"></div><div id="retData" name="retData">'+Content+'</div></td></tr></table>';
            var data = '<div style="position:absolute; top:0; left:0; width:100%; height:100%" class="pop">'+str+'</div>';

            msg_obj.innerHTML = data;
        }

        this.Close_popMsg = function () {

            if (this.MsgId == null) {
                this.Close_BottomDiv ();
            }

            this.Close_BottomDiv_2 ();

            var popmsg_obj = document.getElementById ('popmsg_div');
            popmsg_obj.style.display = 'none';
        }

        this.Warning = function (Data){

            var ImgStatus = (Data['Ajax_Status'] > -1) ? '<div class="Ajax_Status_'+Data['Ajax_Status']+'" style="float:left"></div>' : '';

            var Buttons = '';
            var Str = '';

            if (Data['Ajax_Status'] != -1) {

                if (Data['ConfirmEvent'] === undefined) {
                    Data['ConfirmEvent'] = '';
                }
                var ConfirmEvent = 'onclick="Base.Close_popMsg ();'+Data['ConfirmEvent']+'"';

                Buttons = '<div style="margin-top:30px;"><input type="button" value="确定" '+ConfirmEvent+' class="buttons" /></div>';

            }

            Str += '<div style="text-align:center">';
            Str += '<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td style="white-space: nowrap">' + ImgStatus + '<div style="height:27px;line-height:27px; font-size:14px">&nbsp;' +Data['Ajax_StatusText'] + '</div></td></tr></table></div>';

            Str += Buttons;

            this.popMsg (Str);
        }



    } //End Base Object


    function Menu () {

        var name = 'popMenu';
        var input;
        var classname;
        var url;
        var position;
        var _event;
        var KeyCode;
        var j = -1;
        var tag;

        this.Load = function(ID, ClassName, URL){
            input = $ (ID);
            classname = ClassName;
            url = URL;

            position = Getpos(input);
            this.Create();
            tag = tagName (name,"li");
            input.onkeydown = this.KeyDown;
            input.onkeyup   = this.KeyUp;
        }

        this.Create = function () {
            if ($ (name) == null){
                var obj = document.createElement ("div");
                obj.id = name;
                obj.name = name;
                obj.style.position = "absolute";
                obj.style.display = "none";
                obj.style.width = position['W']+"px";
                obj.style.left = position['X']+"px";
                obj.style.top = (position['Y']+position['H']+1)+"px";
                obj.style.overflow = "hidden";

                document.body.appendChild (obj);
                var data = '<div id="MenuContent" name="MenuContent"></div>';
                //if (checkBrowser()=="ie6"){ data += '<iframe frameborder="0" width="'+(positon['W']+2)+'px"></iframe>'; }
                obj.innerHTML = data;
            }
        }

        this.KeyUp = function () {

            if (KeyCode!=38 && KeyCode!=40) {
                Base.Ajax.Start (url,"keywords="+input.value,"post",Ret);
            }

        }

        this.KeyDown = function(e) {
            _event = e || window.event;
            KeyCode =  _event.keyCode || _event.which;

            if (KeyCode==38 || KeyCode==40){

                switch (KeyCode) {
                    case 38:
                        if (j==-1) {
                            j = tag.length-1;
                        }else{
        		                tag[j].className = "";

        		                if (j == 0) {
        		                    j = tag.length-1;
        		                }else{
                                j--;
        		                }
        		            }
        		        break;

        		        case 40:
        		            if (j<0){
                            j++;
                        }else{
                            tag[j].className = "";

                            if (j==tag.length-1){
                                j = 0;
                            }else{
                                j++;
                            }
                        }
        		        break;
                }

                tag[j].className = classname;
                input.value = tag[j].innerHTML;
            }
        }


        var Ret = function (str){
            if (str){
                $ (name).style.display = "";
                $ ("MenuContent").innerHTML = str;
            }
        }

        this.mouseOver = function (_Object){
            if (j>-1){
                tag[j].className = "";
            }

            _Object.className = classname;
        }

        this.mouseOut = function (_Object){
            _Object.className = "";
        }

        this.Select = function (e){
            input.value = e.innerHTML;
        }

    }



    //标签页
    function Select_Tab_Page (SUB_Menu, This, Show_Obj) {

        for (var i = 0; i < SUB_Menu.length; i ++ ) {

            var menu_obj = $ (SUB_Menu[i]);

            if (menu_obj) {
                $ (SUB_Menu[i]).style.display = 'none';
            } else {
                alert ('Tab ID: '+ SUB_Menu[i] +' 不存在.');
            }

        }

        $ (Show_Obj).style.display = '';

        var Tab_Menu    = TagName ('TabMenu', 'a');

        var Length      = Tab_Menu.length;

        for (var i = 0; i < Length; i ++ ) {

            if (This == Tab_Menu[i]) {

                Tab_Menu[i].className = 'Act';

            } else {

                Tab_Menu[i].className = '';

            }

        }
    }


    function SelectTab (This) {
        var Sub    = TagName ('TabMenu', 'a');
        var Length = Sub.length;
        for (var i = 0; i < Length; i++) {
            if (This == Sub[i]) {
                Sub[i].className = 'Act';
            }else{
                Sub[i].className = '';
            }
        }
    }


    /////////////// Table Order ////////////////////////////////

    //类型转换器，将列的字段类型转换为可以排序的类型：String,int,float
    function convert (sValue, sDataType) {

        switch(sDataType) {
            case "int":
                return parseInt(sValue);
            case "float":
                return parseFloat(sValue);
            case "date":
                return new Date(Date.parse(sValue));
            default:
                return sValue.toString();

        }
    }

    //排序函数产生器，iCol表示列索引，sDataType表示该列的数据类型
    function generateCompareTRs (iCol, sDataType) {

        return  function compareTRs(oTR1, oTR2) {
            var vValue1 = convert(oTR1.cells[iCol].firstChild.nodeValue, sDataType);
            var vValue2 = convert(oTR2.cells[iCol].firstChild.nodeValue, sDataType);

            if (vValue1 < vValue2) {
                return -1;
            } else if (vValue1 > vValue2) {
                return 1;
            } else {
                return 0;
            }
        };
    }

    //排序方法
    function TableOrder (sTableID, iCol, sDataType) {
        var oTable = document.getElementById (sTableID);
        var oTBody = oTable.tBodies[0];

        var colDataRows = oTBody.rows;

        var aTRs = new Array;

        //将所有列放入数组
        for (var i=0; i < colDataRows.length; i++) {
            aTRs[i] = colDataRows[i];
        }

        //判断最后一次排序的列是否与现在要进行排序的列相同，是的话，直接使用reverse()逆序
        if (oTable.sortCol == iCol) {
            aTRs.reverse ();
        } else {
            //使用数组的sort方法，传进排序函数
            aTRs.sort (generateCompareTRs(iCol, sDataType));
        }

        var oFragment = document.createDocumentFragment();
        for (var i=0; i < aTRs.length; i++) {
            oFragment.appendChild(aTRs[i]);
        }

        oTBody.appendChild(oFragment);
        //记录最后一次排序的列索引
        oTable.sortCol = iCol;
    }

    ///////////// Table Order End ////////////////////


    var Base = new Base_Object ();

    var ImgPath = '/zhangfu';
