<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0027)http://www.jcsepi.com/home/ -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<!--#include file="common/header.asp" -->
</head>

<body>
<div id="CONTAINER">
	<!--#include file="common/menu.asp" -->
	
	<!-- body -->
	<div id="MAIN_CONTENT">
    	<div id="content_right3">
            <div class="pronav">
                <div class="protit">
                    PA19ϵ�����Խ���������&nbsp;&nbsp;<img src="images/back1.gif" style="height:13px; cursor:pointer;" onclick="history.go (-1)" />
                </div>
                <ul id="subli">
                    <li><a href="javascript:void(0);" onmouseover="ViewSub (this, 'description')" class="act">һ��</a></li>
                    <li><a href="javascript:void(0);" onmouseover="ViewSub (this, 'feature')">��������</a></li>
                    <li><a href="javascript:void(0);" onmouseover="ViewSub (this, 'download')">����</a></li>
                </ul>
            </div>
            <div class="clear"></div>
			<script>
				function ViewSub (This, sub_id) {
					var Sub = Array ('description', 'feature', 'download');
					var lis = TagName ('subli', 'a');
					for (var i in Sub) {
						if (sub_id == Sub[i]) {
							This.className = 'act';
							getobj (Sub[i]).style.display = '';
						} else {
							lis[i].className = '';
							getobj (Sub[i]).style.display = 'none';
						}
					}
					update_footer ();
				}
			</script>
            <div class="procon">
                <div id="description" style="display:">
                    <div style="color: rgb(102,102,102); font-size: 12px">
						<table border="0" cellspacing="0" cellpadding="0" style="width: 700px; height: 232px; color: rgb(102,102,102); font-size: 12px">
							<tbody>
								<tr>
									<td class="style5" valign="middle">
									<p class="style3"><img alt="" width="200" height="204" style="margin-left: 20px" src="images/1309090112331379.jpg" /></p>
									</td>
									<td valign="top"><span style="font-size: 14px;line-height: 25px;">�ص�</span><br />
									&bull; &nbsp;֧�ֿ��������롢�̵��������ģ�������<br />
									&bull; &nbsp;֧��Modbus-RTUͨ��Э��<br />
									&bull; &nbsp;��ȿɱ��<br />
									&bull; &nbsp;�߷����ȼ�<br />
									&bull; &nbsp;���¹�������<br />
									&bull; &nbsp;ִ�б�׼ GB/T 18216.12</td>
								</tr>
							</tbody>
						</table>
						<p>&nbsp;</p>
						<div style="color: rgb(102,102,102); font-size: 12px">
							<table border="0" cellspacing="0" cellpadding="0" style="width: 600px; height: 80px; color: rgb(102,102,102); font-size: 12px">
								<tbody>
									<tr>
										<td valign="top"><span style="font-size: 14px;line-height: 25px;">����</span><br />
										&nbsp; &nbsp; &nbsp; &nbsp; PA19ϵ�����Խ������������������ϵͳ�ĵ�����������������������ϵ���Ǳ��ȿɱ�̣�֧�ֿ��������롢�̵��������ģ���������ͨ�Ź��ܣ�Modbus-RTUͨ��Э�飩���ṩ���ֲ�ͬ�İ�װ�ߴ磬��ֱ�����ģ��ָ�������</td>
									</tr>
								</tbody>
							</table>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
						</div>
					</div>                
				</div>
                <div id="feature" style="display:none">
                    <table border="0" cellspacing="0" cellpadding="0" style="width: 700px; height: 232px; color: rgb(102,102,102); font-size: 12px">
						<tbody>
							<tr>
								<td class="style7" valign="top" style="text-align: left; font-family: ����, Arial, Helvetica, sans-serif; color: rgb(102,102,102); font-size: 12px"><span style="font-size: 14px;line-height: 25px;">��������</span><br />
								<img alt="" width="500" height="410" style="margin-left:" src="images/JiShuZhiBiao-x(1).jpg" /></td>
							</tr>
						</tbody>
					</table>
					<p>&nbsp;</p>
					<p>&nbsp;</p>
					<p>&nbsp;</p>
					<p>&nbsp;</p>
					<p>&nbsp;</p>
					<p>&nbsp;</p>
					<p>&nbsp;</p>                
				</div>
                <div id="download"  style="display:none">
					<table class="down_list">
						<tr class="trtit">
						  <th>�ļ���</th>
						  <th class="th_right" >�ļ���С</th>
						</tr>
									<tr>
						  <td class="ntit"><a href="/media/uploadfiles/download/jiejuefangan.rar" target="_blank">���ܵ����û���ϵͳ�������</a></td>
						  <td class="ndate">40.73 MB</td>
						</tr>
                    </table>
                </div>
            </div>
        </div>
        <div style="height:1px; clear:both"> </div>
        <!-- Main Content End -->
    </div>
</div>
	<!-- body -->
    <!--#include file="common/footer.asp" -->
</body></html>