<!--#include file="conn.asp" -->
<%

field1 = request.form("field1")
field2 = Replace(request.form("field2"), "'", "")
field3 = request.form("field3")
field4 = request.form("field4")
field5 = request.form("field5")
field6 = request.form("field6")
field7 = request.form("field7")
field8 = request.form("field8")
field9 = request.form("field9")
field10 = request.form("field10")
field11 = request.form("field11")
zDate =  now()

exec="insert into online (field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11, ol_date) values('"&field1&"','"&field2&"','"&field3&"','"&field4&"','"&field5&"','"&field6&"','"&field7&"','"&field8&"','"&field9&"','"&field10&"','"&field11&"','"&zDate&"')"
conn.execute exec
conn.close
set conn=nothing
response.write("<script language=javascript>alert('感谢你的在线咨询，我们会尽快给你答复!');window.location.href='index.asp';</script>")
%>