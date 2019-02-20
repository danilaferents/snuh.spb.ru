<?php ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">

	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/menu.css">
	<link rel="stylesheet" type="text/css" href="css/sociallinks.css">
	<link rel="stylesheet" type="text/css" href="css/media.css">
	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

	<title>new site</title>
</head>
<body style="visibility: hidden"
      onload="setTimeout ('document.body.style.visibility = \'visible\'', 0)">
	<div id="support"></div>
	<div id="header">
		<img src="images/logodownload1.png">
		<div id="linksfon">
			<div id="sociallinks">
				<ul>
					<li><a href="https://www.facebook.com" target="_blank"><span>Facebook</span></a></li>
					<li><a href="https://twitter.com/HospitalSeoul"><span>Twitter</span></a></li>
					<li><a href="#"><span>Odnoklassniki</span></a></li>
				</ul>
			</div>
		</div>
		<div id="cssmenu" >
			<ul>
			    <li class="has-sub"><a href="index.php"><span>Главная</span></a>
					<ul>
						<li><a href="main_about_hospital.php"><span>О Госпитале</span></a></li>
						<li><a href="main_our_achivments.php"><span>Наши достижения</span></a></li>
						<li><a href="main_partneship.php"><span>Сотрудничество</span></a></li>
						<li><a href="main_feedback.php"><span>Отзывы</span></a></li>
						<li><a href="main_news.php"><span>Новости</span></a><li>
				    </ul>
			    </li>
			    <li class="has-sub"><a href="#"><span>Лечение</span></a>
				    <ul>
					    <li class="has-sub"><a href="health_something_1.php"><span>Миниинвазивная хирургия в онкологии</span></a>
							<ul>
							   <li><a href="javascript:toHealth_1(); void(0);"><span>Видеоассистированная тораскопическая хиругия лёгких</span></a></li>
							   <li><a href="javascript:toHealth_2(); void(0);"><span>Автоматизированная нефрэктомия</span></a></li>
							   <li><a href="javascript:toHealth_3(); void(0);"><span>Робот ассистированная лапароскопическая хирургия рака предстательной железы</span></a></li>
							   <li><a href="javascript:toHealth_4(); void(0);"><span>Операция рака молочной железы</span></a></li>
							   <li><a href="javascript:toHealth_5(); void(0);"><span>Миниинвазивная операция при раке щитовидной железы (робот Да Винчи)</span></a></li>
							   <li><a href="javascript:toHealth_6(); void(0);"><span>Гамма нож</span></a></li>
							   <li><a href="javascript:toHealth_7(); void(0);"><span>Лапароскопия единого доступа</span></a></li>
							   <li><a href="javascript:toHealth_8(); void(0);"><span>Лапароскопическая хирургия желудка</span></a></li>
							   <li><a href="javascript:toHealth_9(); void(0);"><span>Лапароскопическая хирургия гепатобилиарной системы и поджелудочной железы</span></a></li>
							   <li><a href="javascript:toHealth_10(); void(0);"><span>Лапароскопическая колоректальная хирургия</span></a></li>
							   <li><a href="javascript:toHealth_11(); void(0);"><span>Кардиохирургия</span></a></li>
						 	   <li class="last"><a href="javascript:toHealth_12(); void(0);"><span>Миниинвазивная хирургия в гинекологии</span></a></li>
							</ul>
					 	</li>
					 	<li class="has-sub"><a href="health_something_2.php"><span>Интервенционная нейрохирургия</span></a>
							<ul>
						   		<li class="last"><a href="health_something_2.php"><span>Эмболизация сосудов головного мозга при аневризмах</span></a></li>
							</ul>
				     	</li>
					 	<li><a href="health_something_3.php"><span>Экстракорпоральное оплодотворение</span></a></li>
					 	<li class="has-sub"><a href="health_something_4.php"><span>Ортопедическая хирургия</span></a>
							<ul>
								<li><a href="health_something_4.php"><span>Артропластика коленного сустава</span></a></li>
						   		<li class="last"><a href="health_something_4.php"><span>Артропластика тазобедренного сустава</span></a></li>
							</ul>
				     	</li>
				     	<li class="has-sub"><a href="health_something_5.php"><span>Центр заболеваний позвоночника</span></a>
							<ul>
						   		<li class="last"><a href="health_something_5.php"><span>Лечение сердечно-сосудистых заболеваний</span></a></li>
							</ul>
				     	</li>
				     	<li><a href="health_something_6.php"><span>Экстракорпоральное оплодотворение</span></a></li>
				    </ul>
			    </li>
			    <li class="has-sub"><a href="#"><span>Услуги</span></a>
					<ul>
						<li><a href="service_scanning.php"><span>Обследование</span></a></li>
						<li><a href="service_cosm.php"><span>Косметология</span></a></li>
						<li><a href="service_support.php"><span>Поддержка</span></a></li>
				    </ul>
			    </li>
			    <li class="has-sub"><a href="#"><span>Галерея</span></a>
			   		<ul>
			   			<li><a href="gallery_photo.php"><span>Фото</span></a></li>
						<li><a href="gallery_video.php"><span>Видео</span></a></li></li>
					</ul>
			    <li><a href="contacts.php"><span>Контакты</span></a></li>
			</ul>
		</div>
	</div>
	<div id="content-back">
		<div id="content">
			<p style=""><a href="index.php">Главная</a> / Галерея</p>
			<div style="width: 800px;position: relative;left: 50%;margin-left: -400px;">
				<div id="gal-photo" style="width: 50%;position: relative;top: 50px;
				left: 0;display: block;">
					<div id="gal-p-1" style="background-color: blue;width: 200px;height: 250px;position: absolute;left: 50%;margin-left: -100px;transform: rotate(15deg);border: 1px solid black;transition: all .2s"></div>
					<div id="gal-p-2" style="background-color: green;width: 200px;height: 250px;position: absolute;left: 50%;margin-left: -100px;transform: rotate(-15deg);border: 1px solid black;transition: all .2s"></div>
					<div id="gal-p-3" style="background-color: red;width: 200px;height: 250px;position: absolute;left: 50%;margin-left: -100px;border: 1px solid black;z-index: 99;cursor: pointer;"></div>
					<div id="gal-b-1"><span style="line-height: 35px;font-size: 20px">Фото</span></div>
				</div>
				<div style="width: 50%;position: absolute;top: 50px;
				right: 0;border: 1px solid red;min-height: 30px;">
					
				</div>
			</div>
		</div>
	</div>
	<div id="footer">
		<div id="footerblock">
			<div id="footertext">
				<span style="font-size: 24px; font-weight: bold; color: lightblue;">About</span>
				<p align="justify" style="margin-top: 30px; padding-right: 25px;">Клиника Сеульского Национального Университета использует методику доказательной медицины. Это подразумевает использование проверенных опытом и временем методов. Республика Корея является мировым лидером по количеству лабораторных испытаний – и все это лежит в основе передовых научных разработок. Забота о здоровье этого государства представляет собой удачное сочетание восточных и западных методов лечения, а также уважительный рациональный подход к народной медицине. Специалисты не забывают и про древние методики лечения, анализируя их и пропуская через многоэтапные эксперименты и опыты. Значимые области корейской медицины</p>
			</div>
			<div id="footercontacts">
				<span style="font-size: 24px; font-weight: bold; color: lightblue; padding-bottom: 30px;">Contact us</span>
				<p class="footercontactsp" id="footercontactsp1">Call us</p>
				<strong>+7-911-911-99-99</strong>
				<p class="footercontactsp" id="footercontactsp2">Address</p>
				<strong>Г. СОНГНАМ, БУНДАН-ГУ, ГУМИ-РО 173 БОН ГИЛЬ 82 463-707. КОРЕЯ</strong>
				<p class="footercontactsp" id="footercontactsp3">E-mail</p>
				<strong>info@snuh.ru</strong>
			</div>
			<div id="footerlinks">
				<span style="font-size: 24px; font-weight: bold; color: lightblue;">Social links</span>
				<ul id="footerul">
					<li class="footerli" id="footerli2"><i class="fa fa-facebook"></i></a></li>
					<li class="footerli" id="footerli1"><i class="fa fa-twitter"></i></li>
					<li class="footerli" id="footerli3"><i class="fa fa-sign-in"></i></li>
				</ul>
			</div>
		</div>
	</div>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/spoilers.js"></script>
</body>
</html>