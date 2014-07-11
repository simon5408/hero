<!--#include file="conn.asp" -->
<%
field1 = request.querystring("field1")
session("field1") = field1

field3 = request.querystring("field3")
session("field3") = field3

field4 = request.querystring("field4")
session("field4") = field4


sql= "select * from online where 1=1 "


if field1 <> "" then
	sql =sql + " and field1 like '%"&field1&"%' "
end if

if field3 <> "" then
	sql =sql + " and field3 like '%"&field3&"%' "
end if

if field4 <> "" then
	sql =sql + " and field4 like '%"&field4&"%' "
end if

sql =sql + " order by ol_date desc "

exec=sql
set rs=server.createobject("adodb.recordset")
rs.open exec,conn,1,1 
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
	<!--#include file="header.asp" -->
	
	<script language="javascript" type="text/javascript">
		// 删除学生信息
		function doDel(id){
			if(confirm("确定要删除该信息？")){
				window.location.href="delOnline.asp?olId="+id;
			}
		}
		
		// 条件查询
		function doSearch(){
			var field1 = $("#field1").val();
			var field3 = $("#field3").val();
			var field4 = $("#field4").val();
						
			document.location.href="listOnlineInfo.asp?field1="+field1+"&field3="+field3+"&field4="+field4;
		}
</script>
</head>

<body>
<% username=session("username") 
	if username<>"" then 
	session("typeName") = "在线报名信息管理"
%>
	<!-- 头部操作菜单栏 -->
	<!--#include file="top.asp" -->

	<!-- 左边操作栏 -->
	<div id="left">
		<!--#include file="left.asp" -->
	</div>
	
	<div id="right">
	<!-- 主体功能区(开始) -->
	<div id="tbleDiv">
	<table class="trgTbl" width="100%" border="0" cellpadding="1" cellspacing="1" style="background:#f5f5f5">
		<tr>
			<td style="font-family:'幼圆', Helvetica, sans-serif;">主题：</td>
			<td><input type="text" name="field1" id="field1" value="<%=session("field1")%>"></td>
			<td style="font-family:'幼圆', Helvetica, sans-serif;">姓名：</td>
			<td>
				<input type="text" name="field3" id="field3" value="<%=session("field3")%>">
			</td>
			<td style="font-family:'幼圆', Helvetica, sans-serif;">公司名称：</td>
			<td>
				<input type="text" name="field4" id="field4" value="<%=session("field4")%>">
			</td>
		</tr>
	</table>
	<div class="searchBtnDiv" style="width:99.5%">
		<a href="javascript:void(0);" onclick="doSearch()" class="easyui-linkbutton" icon="icon-search">查 询</a>
	</div>
	<table width="100%" border="0" cellpadding="1" cellspacing="1" style="background:#f5f5f5">
		<tr>
			<th>主题</th>
			<th>公司名称</th>
			<th>姓名</th>
			<th>省份/城市</th>
			<th>地址/邮编</th>
			<th>Email</th>
			<th>内容</th>
			<th>发布日期</th>
			<th style="width:80px;">操作</th>
		</tr>
		
		<%
			for i= 1 to rs.recordcount
			if rs.eof then
			exit for
			end if
		%>
		<tr>
			<td><%=rs("field1")%></td>
			<td><%=rs("field4")%></td>
			<td><%=rs("field3")%></td>
			<td><%=rs("field5")%><br><%=rs("field6")%></td>
			<td><%=rs("field7")%><br><%=rs("field8")%></td>
			<td><%=rs("field11")%></td>
			<td><%=rs("field2")%></td>
			<td><%=rs("ol_date")%></td>
			<td style="width:80px;">
				<a href='javascript:doDel(<%=rs("ol_id")%>)'class="easyui-linkbutton" plain="true">删除</a>
			</td>
		</tr>
		<% 
			rs.movenext
			next 
		%>
	</table>
	</div>
	<!-- 主体功能区(结束) -->
	</div>
<%
	conn.close
	set conn=nothing
%>
<%
    else
		response.Redirect "../login.asp"
 	end if 
%>
</body>
</html>