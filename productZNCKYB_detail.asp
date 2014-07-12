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
                    PA19系列数显交流电流表&nbsp;&nbsp;<img src="images/back1.gif" style="height:13px; cursor:pointer;" onclick="history.go (-1)" />
                </div>
                <ul id="subli">
                    <li><a href="javascript:void(0);" onmouseover="ViewSub (this, 'description')" class="act">一览</a></li>
                    <li><a href="javascript:void(0);" onmouseover="ViewSub (this, 'feature')">技术参数</a></li>
                    <li><a href="javascript:void(0);" onmouseover="ViewSub (this, 'download')">下载</a></li>
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
									<td valign="top"><span style="font-size: 14px;line-height: 25px;">特点</span><br />
									&bull; &nbsp;支持开关量输入、继电器输出、模拟量输出<br />
									&bull; &nbsp;支持Modbus-RTU通信协议<br />
									&bull; &nbsp;变比可编程<br />
									&bull; &nbsp;高防护等级<br />
									&bull; &nbsp;宽温工作环境<br />
									&bull; &nbsp;执行标准 GB/T 18216.12</td>
								</tr>
							</tbody>
						</table>
						<p>&nbsp;</p>
						<div style="color: rgb(102,102,102); font-size: 12px">
							<table border="0" cellspacing="0" cellpadding="0" style="width: 600px; height: 80px; color: rgb(102,102,102); font-size: 12px">
								<tbody>
									<tr>
										<td valign="top"><span style="font-size: 14px;line-height: 25px;">概述</span><br />
										&nbsp; &nbsp; &nbsp; &nbsp; PA19系列数显交流电流表适用于配电系统的单相或三相电流参数测量。该系列仪表变比可编程，支持开关量输入、继电器输出、模拟量输出及通信功能（Modbus-RTU通信协议），提供多种不同的安装尺寸，可直接替代模拟指针电流表。</td>
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
								<td class="style7" valign="top" style="text-align: left; font-family: 宋体, Arial, Helvetica, sans-serif; color: rgb(102,102,102); font-size: 12px"><span style="font-size: 14px;line-height: 25px;">技术参数</span><br />
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
						  <th>文件名</th>
						  <th class="th_right" >文件大小</th>
						</tr>
									<tr>
						  <td class="ntit"><a href="/media/uploadfiles/download/jiejuefangan.rar" target="_blank">智能电网用户端系统解决方案</a></td>
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