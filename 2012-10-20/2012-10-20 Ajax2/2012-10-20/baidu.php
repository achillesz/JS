<?php
/*
**********************************************
	Author:	blue@zhinengshe.com
	Date:	2012-4-5

	usage:	baidu.php?w=aaa&callback=succ
	
	return:	succ({q:"aaa",s:["爱啊哎呀我愿意","aaaa","aaa片","aaaa4444.com","爱啊哎呀我愿意全集","aaaa级","aaaa.me","aaalogo","aaa电池","aaayy"]});
**********************************************
*/

//header('Content-type:zns/json');

$w=$_GET['w'];
$callback=$_GET['callback'];

// 1. 初始化
$ch = curl_init();
// 2. 设置选项，包括URL
curl_setopt($ch, CURLOPT_URL, "http://suggestion.baidu.com/su?wd={$w}&p=3&cb={$callback}&t=".time());
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
// 3. 执行并获取HTML文档内容
$output = curl_exec($ch);
// 4. 释放curl句柄
curl_close($ch);

echo iconv('GB2312', 'UTF-8', $output);
?>