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
    	<div id="content_left">
			<div class="ltop">服务与支持</div>
			<div class="lcon left_h">
				<div class="menua"><a href="product.asp" class="tit jiantou">产品咨询</a></div>
				<div class="menua"><a href="faq.asp" class="tit jiantou">常见问题解答</a></div>
			</div>
		</div>        
		<div id="content_right">
			<div id="title" class="rtit">常见问题解答</div>
			<div class="rcon">
				<div style="line-height: 35px;font-size: 14px;">1、仪表通电后不显示</div>
				<p>可能原因：辅助电源未加到仪表上<br />
				解决方法：使用万用表测量仪表辅助电源端（1、2）上是否有相应的工作电压；           辅助电源端连接是否可靠。</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">2、仪表通电后闪烁</div>
				<p>可能原因：电源电压超出仪表工作范围，导致仪表电源保护 <br />
				解决方法：将辅助电源断开； 测试辅助电源是否超出仪表标注的范围； 测试输入信号是否超出额定值的120%； 测试环境温度是否超出使用环境温度的上限； 将辅助电源重新上电。</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">3、仪表通电后显示乱码</div>
				<p>可能原因：仪表受到较大干扰<br />
				解决方法：将辅助电源断开后重新上电；</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">4、显示不准</div>
				<p>可能原因：互感器变比设置不对，参数不匹配<br />
				解决方法：将仪表设置的变比与PT、CT的变比核对是否一致；          电压、电流的额定值是否一致；</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">5、加信号无反应</div>
				<p>可能原因：信号没有加到仪表上<br />
				解决方法：测试仪表接线端子是否有信号，端子连接是否可靠。</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">6、三相仪表缺相</div>
				<p>可能原因：信号没有加到仪表上，设置不匹配<br />
				解决方法：测试输到仪表接线端子有无信号，端子连接是否可靠；           将正常显示的一相信号线接到缺相对应的接线端子上来验证是否仪表问题还是外围电路问题；           查看仪表设置的接线方式是否与现场接线方式一致。</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">7、电能计量不准</div>
				<p>可能原因：变比不对，电压电流的相序错<br />
				解决方法：将仪表设置的变比与PT、CT的变比核对是否一致；           检查电压、电流的相序是否正确；           在用电的情况下，有功率显示的仪表可以通过仪表的功率显示查看单相功率是否有负号指示，有负号指示的则很可能对应的那相电流的进出线反了。</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">8、模拟量输出不准</div>
				<p>可能原因：模拟量输出量程、项目对应关系不对<br />
				解决方法：确认模拟量输出量程上下限对应关系；           确认模拟量输出对应的电参量是否正确，如对应U、I、P、Q等        确保测试设备正常，若使用PLC，确保PLC模拟量输入接线设置正确。</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">9、通信异常</div>
				<p>1）仪表没有回送数据<br />
				首先确保仪表的通信设置信息如从机地址、波特率、校验方式等与上位机要求一致；如果现场有多块仪表通信都没有数据回送，检测现场通信总线的连接是否准确可靠，RS485转换器是否正常。 如果只有单块或者少数仪表通信异常，也要检查相应的通信线，可以修改交换异常和正常仪表从机的地址来测试，排除或确认上位机软件问题，或者通过交换异常和正常仪表的安装位置来测试，排除或确认仪表故障。 <br />
				2）仪表回送数据不准确<br />
				仪表通信数据有一次电网数据（float型）和二次电网数据（int/long型）。请仔细阅读通信地址表中关于数据存放地址和存放格式的说明，并确保按照相应的数据格式转换。 可使用ModScan32软件测试仪表通信，该软件遵循标准的Modbus-RTU协议，并且数据可以按照整型、浮点型、16进制等格式显示，能够直接与仪表显示数据对比。 <br />
				3）通信指示符状态信息<br />
				在通信测试过程中，当仪表接收到数据时，仪表通信指示符会闪烁提示。</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">10、上电后电动机保护控制器主体运行指示灯常亮，但显示模块工作不正常</div>
				<p>可能原因：连接控制器主体和显示模块的专用DB9连接线接触不良（或由于折弯后断线）<br />
				解决方法：断电后重新插拔后再拧紧DB9连接线或更换一根DB9连接线。</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">11、空载试验控制回路时，接触器动作不正常</div>
				<p>空载调试控制回路时，当控制器接收到来自显示模块按键或DI端子的起动 命令，接触器得电闭合2s后随即释放，无法保持闭合状态；对应的显示模块&ldquo;起动界面&rdquo;进度条显示2s后，返回到&ldquo;起动准备好&rdquo;界面，可能会出现继电器乱动现象。 可能原因：除&ldquo;保护模式&rdquo;外，其他控制方式中，控制器将检测主回路电流来判断起动是否正常；若接收到起动命令，控制接触器回路的主继电器闭合，接触器得电闭合，若2s后，主回路电流没有达到10%额定电流以上，则认为电机未运行，则继电器断开，接触器失电释放。<br />
				解决方法（任选其一）：<br />
				1）空载调试进入参数整定界面，在&ldquo;控制器参数配置&rdquo;-&gt;&ldquo;运行模式&rdquo;项，将&ldquo;运行&rdquo;更改为&ldquo;测试&rdquo;，更改后，控制器将不跟踪主回路电流，所有保护功能不投入，但控制逻辑正常使用，此状态下可调试空载情况下的控制回路是否正确。调试正确后，请将&ldquo;运行模式&rdquo;改回&ldquo;运行&rdquo;。<br />
				2）带负载调试</p>
				<p>&nbsp;</p>
				<div style="line-height: 35px;font-size: 14px;">12、电动机起停正常，但测量参数不对，电动机保护控制器保护可能误动或拒动</div>
				<p>显示模块&ldquo;运行数据&rdquo;界面中出现：三相电流显示都为0% ；某相电流显示为0%，其他两相正常；三相电流显示不为0，但数值与实际电流相差较大；电压、电流正确，但功率及功率因数不正确。<br />
				可能原因：<br />
				1）控制器自带互感器插头没有或未可靠的与控制器主体连接；<br />
				2）电机额定电流、CT变比设置不正确；<br />
				3）控制器电流规格与该电机回路不符；<br />
				4）电压、电流相序接错<br />
				解决方法：查看自带互感器与控制器是否可靠连接； 正确设置电机额定电流、CT变比（使用外置互感器时）； 检查电压电流相序。</p>        
			</div>
		</div>
        <div style="height:1px; clear:both"> </div>
        <!-- Main Content End -->
    </div>
	<!-- body -->
    <!--#include file="common/footer.asp" -->
</div>
</body></html>