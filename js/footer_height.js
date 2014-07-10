
function update_footer () {

    var body_height     = document.body.offsetHeight;

    var offset_height   = window.screen.availHeight - 50;

    var _footer = getobj ('footer');
    //var MAIN_CONTENT = getobj ('MAIN_CONTENT');
    //MAIN_CONTENT.style.height = (offset_height + 100)'px';

    if (body_height < offset_height) {

        //var MAIN_CONTENT = getobj ('MAIN_CONTENT');
        //MAIN_CONTENT.style.height = offset_height + 'px';
        _footer.style.position  = 'fixed';
        _footer.style.bottom    = '0px';
        //position:fixed; bottom:0px;
    } else {
        _footer.style.position  = '';
    }

}

update_footer ();