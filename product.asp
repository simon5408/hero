<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0027)http://www.jcsepi.com/home/ -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<!--#include file="common/header.asp" -->
<script type="text/javascript">
    function checkform() {
    	var f = document.quoteform;
    	if (f.field1.value == "") {
    		alert("����д���⡣");
    		f.field1.focus();
    		return false;
    	} else if (f.field2.value == "") {
    		alert("����д���ݡ�");
    		f.field2.focus();
    		return false;
    	} else if (f.field3.value == "") {
    		alert("����д������");
    		f.field3.focus();
    		return false;
    	} else if (f.field4.value == "") {
    		alert("����д��˾���ơ�");
    		f.field4.focus();
    		return false;
    	} else if (f.field11.value == "") {
    		alert("����дEmail��");
    		f.field11.focus();
    		return false;
    	}
    }
</script>

</head>

<body>
<div id="CONTAINER">
	<!--#include file="common/menu.asp" -->
	
	<!-- body -->
	<div id="MAIN_CONTENT">
    	<div id="content_left">
			<div class="ltop">������֧��</div>
			<div class="lcon left_h">
				<div class="menua"><a href="product.asp" class="tit jiantou">��Ʒ��ѯ</a></div>
				<div class="menua"><a href="faq.asp" class="tit jiantou">����������</a></div>
			</div>
		</div>        
		<div id="content_right">
			<div id="title" class="rtit">��Ʒ��ѯ</div>
			<div style="color:#717071; margin-top:-10px;">
				<form name="quoteform" method="post" action="productAction.asp" onsubmit="return checkform();">
					<table width="550" border="0">
						<tr>
							<td>
								<table width="100%" border="0">
									<tr>
										<td>����Ҫ��ѯ&nbsp;&nbsp;&nbsp;</td>
										<td>&nbsp;</td>
									</tr>
									<tr>
										<td align="right">����<font style=" color:#FF0000;">*</font></td>
										<td><input type="text" name="field1" id="field1" /></td>
									</tr>
									<tr>
										<td align="right">����<font style=" color:#FF0000;">*</font></td>
										<td><textarea name="field2" id="field2" cols="45" rows="5"></textarea></td>
									</tr>
									<tr>
										<td align="right">����<font style=" color:#FF0000;">*</font></td>
										<td><input type="text" name="field3" id="field3" /></td>
									</tr>
									<tr>
										<td align="right">��˾����<font style=" color:#FF0000;">*</font></td>
										<td><input type="text" name="field4" id="field4" /></td>
									</tr>
									<tr>
										<td align="right">ʡ��</td>
										<td><input type="text" name="field5" id="field5" /></td>
									</tr>
									<tr>
										<td align="right">����</td>
										<td><input type="text" name="field6" id="field6" /></td>
									</tr>
									<tr>
										<td align="right">��ַ</td>
										<td><input type="text" name="field7" id="field7" /></td>
									</tr>
									<tr>
										<td align="right">�ʱ�</td>
										<td><input type="text" name="field8" id="field8" /></td>
									</tr>
									<tr>
										<td align="right">�绰</td>
										<td><input type="text" name="field9" id="field9" /></td>
									</tr>
									<tr>
										<td align="right">����</td>
										<td><input type="text" name="field10" id="field10" /></td>
									</tr>
									<tr>
										<td align="right">Email<font style=" color:#FF0000;">*</font></td>
										<td><input type="text" name="field11" id="field11" /></td>
									</tr>
									<tr>
										<td align="right">&nbsp;</td>
										<td><label><input type="submit" name="button" id="button" value="�ύ" /></label></td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</form>
			</div>
        </div>
        <div style="height:1px; clear:both"> </div>
        <!-- Main Content End -->
    </div>
</div>
	<!-- body -->
    <!--#include file="common/footer.asp" -->

</body></html>