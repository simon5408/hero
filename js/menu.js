function hideSubnav (This, theEvent){  //theEvent���������¼���Firefox�ķ�ʽ

    if (theEvent) {

        var browser = navigator.userAgent;   //ȡ�����������

        if (browser.indexOf("Chrome") > 0) {  //�����Firefox
            if (document.getElementById (This.id).contains (theEvent.relatedTarget)) {  //�������Ԫ��
                return;   //������ʽ
            } else{
                close_subnav ();
                close_subnav_2 ();
            }
        }

        if (browser.indexOf("Firefox") > 0) {  //�����Firefox
            if (document.getElementById (This.id).contains (theEvent.relatedTarget)) {  //�������Ԫ��
                return;   //������ʽ
            } else{
                close_subnav ();
                close_subnav_2 ();
            }
        }


        if (browser.indexOf ("MSIE") > 0) {  //�����IE

            if (document.getElementById (This.id).contains (event.toElement)) {  //�������Ԫ��
                return;  //������ʽ
            } else {
                close_subnav ();
                close_subnav_2 ();
            }
        }
    }

}




var self_subnav = '';
var subnav_2 = '';

function open_subnav (This, ID) {

    //�ȹرյ�ǰ�򿪵Ĳ˵�
    close_subnav ();

    self_subnav = ID
    var obj = getobj (ID);

    var pos = Getpos (This);
    obj.style.display   = '';
    obj.style.left      = pos['X'] + 'px';
    obj.style.top       = (pos['Y'] + 34) + 'px';
}

function close_subnav () {

    close_subnav_2 ();

    if (self_subnav) {

        var obj = getobj (self_subnav);

        if (obj) {
            obj.style.display = 'none';
        }
    }
}

function open_subnav_2 (This, ID) {

    close_subnav_2 ();

    subnav_2 = ID

    var obj = getobj (ID);

    var pos = Getpos (This);
//print_r (pos);
    obj.style.display   = '';
    //obj.style.left      = (pos['X'] - pos['W'] - 31) + 'px';
    obj.style.left      = 198 + 'px';
    obj.style.top       = (pos['Y'] - pos['H'] - 72) + 'px';
}

function close_subnav_2 () {

    if (subnav_2) {
        var obj = getobj (subnav_2);
        if (obj) {
            obj.style.display = 'none';
            obj.style.left = 0 + 'px';
        }
    }
}
