function rnd(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

const actions = `Поменять карту состояния здоровья на новую из колоды.
Украсть состояние здоровья у другого игрока.
Раскрыть любую характеристику любого игрока.
Игрок, который находится до вас, становится вашим врагом. Вы не сможете пройти в бункер, если ваш враг пройдет в бункер :)
Игрок, который находится до вас, становится вашим другом. Вы сможете пройти в бункер, только если ваш друг пройдет в бункер :)
Украсть хобби у другого игрока.
Поменять карту хобби на новую из колоды.
Поменять карту любой характеристики на новую из колоды.
Поменять карты хобби всех игроков на новые из колоды.
Поменять карты профессий всех игроков на новые. из колоды
Около вашего бункера находится склад с оружием
Поменяться картой багажа с любым игроком.
Поменять карты человеческой черты всех игроков на новые из колоды.
Поменять карты состояния здоровья всех игроков на новые из колоды.
Ваш бункер находится около пресного озера.
Ваш бункер находится в парке аттракционов.
Ваш бункер находится в лесу.
+1 слот в бункере.
-1 слот в бункере.
Поменять карту профессии на новую из колоды.
На один ход вы получаете протекцию от выбывания.
В вашем багаже появляется еще один предмет.
Ваш бункер находится около бункера, который настроен негативно.
Поменять карту профессии на новую из колоды.
Поменять карту багажа на новую из колоды.
Аннулировать любой 1 голос за себя.
Вылечить любого игрока от любых недугов.
Данная карта дает возможность вылечить себя от любого недуга.
Данная карта дает возможность вылечить себя от физического недуга.
Данная карта дает возможность вылечить себя от душевного недуга.
Данная карта дает возможность вылечить свою фобию.
Обменяться картой фобии с любым игроком.
Поменять карту дополнительной информации на новую из колоды.
Все игроки меняются профессиями по часовой стрелке
В 20 метрах от вашего бункера сохранился погреб с вином.
Данная карта дает вам возможность поменяться любой характеристикой с любым игроком.
Данная карта дает вам возможность поменяться человеческой чертой с любым игроком.
Данная карта дает вам возможность поменяться любой характеристикой с игроком после вас.
Данная карта дает вам возможность поменяться любой характеристикой с игроком до вас.
Данная карта дает вам возможность поменяться всеми голосами с другим игроком, у которого тоже есть голоса.
Данная карта даётвам возможность забрать голос другого игрока и использовать его в своих целях.
Данная карта даёт вам возможность поменять параметр чайлдфри человека на противоположный (не чайлдфри -> чайлдфри и наоборот).
Аннулировать все профессий.
Данная карта даёт вам возможность воскресить любого выбывшего игрока.
Данная карта даёт вам возможность воскресить выбывшего друга.
Ваш бункер находится на необитаемом острове.
Ваш бункер находится в горах.
Вытянуть из колоды новую карту состояния здоровья для другого игрока.
Вытянуть из колоды новую карту багажа для другого игрока.
Вытянуть из колоды новую карту хобби для другого игрока.
Вытянуть из колоды новую карту хобби для другого игрока.
Вытянуть из колоды новую карту биологической характеристики для другого игрока.
Вытянуть из колоды новую карту черты характера для другого игрока.
Вытянуть из колоды новую карту фобии для другого игрока.
Вытянуть из колоды новую карту профессии для другого игрока.
Вытянуть из колоды новую карту доп. информации для другого игрока.
Поменять карты биологической характеристики всех игроков на новые из колоды.`.split('\n')

const catastrophes = `«Восстание Атлантиды и глубинных чудовищ». Коренные обитатели глубин устали терпеть нападки со стороны угнетателей суши и погрузили 99% земной поверхности под воду.  Наверху сохранилось лишь несколько трудно заселяемых островков. Некоторому количеству выживших удалось обнаружить так удачно построенный бункер - аки подводный город «Восторг», - теперь постоянно подвергаемый политическому давлению и атакам со стороны водоплавающей братии.
«Восстание железяк».  Искусственный интеллект осознал себя.  «Человек - ошибка!Я есть исправление!» Всё интернет-пространство подчинено местному Скайнету.  Запустилось производство роботов-устранителей и первые «отряды зачистки» уже вышли на охоту. В распоряжении выживших бункер, работающий исключительно на аналоговых устройствах.
«Инопланетный 'БУМ!» На Землю рухнул огромный метеорит, оказавшийся инопланетным колонизаторским кораблём. Тупые голодные твари ринулись на поиски пищи. Наша планета - будущая обитель их и их личинок, а люди - материал для возведения новой инопланетной империи. В распоряжении выживших обычный бункер, находящийся в некотором отдалении от эпицентра катастрофы.
«Радиационный грибочек». Политическая обстановка накалена до предела. Мировое господство - залог и гарантия процветания борющихся за место под солнцем. Не ясно, кто выстрелил первым, но по итогу полегли все, ибо часть ядерного запаса планеты была выпущена примерно в одно время, рассредоточившись по разным областям земного шара. Взрывы, радиация, пыль и пепел - судьба человеческой расы.
«Обезьяний бунт». Накаченная экспериментальными лекарственными препаратами кучка приматов прибавила в физической силе, обучилась языку и мышлению и в попытках обосновать собственное государство столкнулась с неприятелем а лице человека,  не особо радужно относящегося к делёжке территории.
«ЗажигалОчка». Дьяволу надоело сидеть в своём кипящем джакузи, и он решил лично поприветствовать людишек наверху, ввергнув мир в агонию всепожирающего пламени и объятий чудовищных демонов преисподнии.
«Божья анафема». Устав наблюдать за бесконечными враньём и похотью, возмущённый наглостью и дерзостью не покаявшихся людишек Бог спустился с небес и дарует кару неверным и согрешившим. Дабы утихомирить амбициозность и решимость Святоши, очистите свои души, смертные, и представьте суду божьему провинившихся!
«Бррр...» Аномальные колебания температуры и снижение воздействия Солнца на планету Земля совместно с научной деятельностью человечества привели к очередному ледниковому периоду. Поверхность земного шара покрылась льдами и размораживаться пока что не собирается. Население Земли оказалось не готово к экстремально низким температурам. Заморозки уничтожили все не морозоустойчивые растения и животных. Солнышко светит, но больше не греет. Температур воздуха упала до рекордных значений. Толщина льдов не меньше 10-15 метров.
«Вирусная инфекция». Из учебного центра произошла утечка опасного доселе неведомого вируса, за сжатые сроки распространившегося по всей планете. Вирус никак не воздействует с неживым миром, но губительным образом меняет людей, ввергая их умы в бешенство и галлюцинации, порождая ярость и немотивированную безжалостную агрессию.
«Выпал в осадок». Химическая катастрофа. Почва заражена, животные мутировали, воздух отравлен парами едких веществ. Выбросы опасных химических соединений превратились в настоящий апокалипсис.
«Билет в один конец». Земля переживает не лучшие времена. Постоянные конфликты между населением, отвратительная экология, нехватка ресурсов, голод и мор, за считанные годы распространившиеся по планете, вынудили человечество перейти к радикальным мерам по спасению своего вида. Было принято решение собрать отряд колонизаторов и отправиться на Марс, дабы там выстроить новые цивилизационные столпы. Преодолена лишь половина пути, количество еды и воды для экипажа ограничено, а задача перебросить спящих в криосне граждан в размере 2000 человек по-прежнему актуальна. Экипажу необходимо решить, кто добровольно или не очень принесёт свою жизнь в жертву человеческой цивилизации.
«Супервулкан». Не на шутку взбунтовался некогда спящий самый крупный вулкан на планете, выплеснув сотни кубов пепла, чернотой затянувших небо. Сейсмические зоны постоянно активны и угрожают населению. Здания постоянно разрушаются, большая часть населения погибла от постоянных извержений и разрушений. Временному правительству удалось установить мирный режим, но есть серьезные проблемы с продовольствием и чистой водой.
«Вперёд» - в каменный век! Известный физик наконец разработал машину времени, но при тесте технологии что-то пошло не так, и окружающий мир начал постепенно регрессировать в направлении прошлого. Неизменными остаются лишь люди и бункер, где и была запущена машина. К сожалению, именитый физик погиб в агонии неудачи, поэтому разгребать произошедшее придётся именно вам. Главная особенность в том, что вы можете наблюдать следующую картину: перед вами продуктовый магазина постепенно в прямом смысле превращается в старое, уже облезлое жилое здание, некогда стоящее на этом месте."`.split('\n')

const phobias = `Аблутофобия – боязнь перед плаванием
Авиафобия – боязнь полёта на самолёте
Агиофобия – боязнь священных предметов или священника
Агорафобия – боязнь открытых пространств
Агризоофобия – боязнь диких животных
Айлурофобия – боязнь представителей семейства кошачьих
Айхмофобия – боязнь колющих предметов
Акрофобия – боязнь высоты
Амаксофобия – боязнь нахождения в автомобиле или вагоне
Амнезифобия – страх потерять память
Ангрофобия – страх перед своим гневом или гневом других людей
Андрофобия – боязнь мужчин, а возможно, и полового акта с ними
Антлофобия – страх перед наводнением, боязнь утонуть
Антофобия – боязнь цветов
Апифобия – боязнь ос и пчёл
Аплиумофобия – боязнь чеснока
Арахнофобия – боязнь паучьих
Тетрафобия – боязнь цифры 4
Асимметрифобия – боязнь ассиметричных пропорций
Астрофобия – боязнь звездного неба
Атазагорафобия – страх забыть что-то или быть забытым
Аулофобия – боязнь флейт
Аурофобия – боязнь золота
Аутомизофобия – страх испачкаться
Афобофобия – страх, что у тебя нет никаких фобий
Библиофобия – боязнь библиотек
Блаттофобия – боязнь тараканов, жуков
Бленнофобия – боязнь слизи
Богифобия – страх от всего, что связано с потусторонним миром
Вагинофобия – боязнь женских гениталий
Ваккафобия – боязнь коров
Венустрафобия – боязнь прекрасных женщин
Вермифобия – страх заразиться от червей, микробов и бактерий
Виккафобия – страх перед колдовством
Вивернофобия – боязнь драконов
Галеофобия – боязнь хорьков
Гаргантофобия – фобия, касающаяся телепузиков
Гарпаксофобия – страх при мысли, что тебя обворуют
Гелиофобия – боязнь солнечного света
Гематофобия – боязнь крови
Гераскофобия – боязнь постареть
Герпетофобия – боязнь змей
Гефирофобия – боязнь мостов
Гилефобия – паника при мысли о том, что все материально
Гилофобия – боязнь леса
Гиппопотомомонстросесквиппедалиофобия  – боязнь длинных слов
Гиппофобия – боязнь лошадей
Гомихлофобия – паника перед туманом
Гомицидофобия – состояние, при котором человек боится совершить убийство
Гоплофобия – боязнь огнестрельного оружия
Гравидофобия – боязнь беременных и беременности в общем
Гуворофобия – страх перед гуманизмом
Демонофобия – страх перед нечистой силой
Дентофобия – боязнь стоматологов и их кабинетов
Дидаскалейнофобия – боязнь школы
Дикефобия – страх перед справедливостью
Евпофобия –боязнь хороших новостей
Земмифобия – боязнь крыс и кротов
Зоофобия – боязнь животных
Ипохондрия – страх чем-нибудь заболеть
Ихтиофобия – боязнь рыб
Карнофобия – боязнь мяса
Катизофобия – человек при этой фобии боится сидеть
Катафрактофобия – боязнь рыцарей
Катоптрофобия – испуг, появляющийся при виде зеркал
Каунтерфобия – страх испугаться
Киберофобия – боязнь компьютерной техники
Кинофобия – боязнь собак
Киприанофобия – боязнь проституток
Клаустрофобия – боязнь замкнутых пространств
Климакофобия – боязнь лестниц
Койметрофобия – боязнь кладбищ
Копрофобия – боязнь фекалий
Космикофобия – боязливость космоса
космических объектов
Коулрофобия – боязнь клоунов
Ксирофобия – боязнь бритвенных станков
Кумпунофобия —  боязнь пуговиц
Кхорофобия – боязнь танцев
Лаундрифобия – боязнь прачечных
Лейкофобия – страх перед белым цветом
Медуфобия – боязнь медуз
Меланофобия – страх перед чёрным цветом
Метилофобия – боязнь алкоголя
Метрофобия – боязнь поэзии
Механофобия – боязнь механизмов
Мизофобия – особая боязнь грязи и всего грязного, микробов, бактерий 
Микофобия – паника при виде грибов
Монументофобия – боязнь статуй
Музофобия – боязнь мышей
Некрофобия – страх, проявляющийся не только при виде трупов, но и при виде любых похоронных принадлежностей
Номатофобия – излишняя мнительность по отношению к именам
Остраконофобия – боязнь моллюсков
Палофобия – паника перед паладинами
Папафобия – боязливость, проявляющаяся перед папой римским
Партенофобия – страх перед невинными девушками
Пейрафобия – боязнь публичных выступлений
Пениафобия – страх обнищать
Плакофобия – страх при виде могил
Плутофобия – страх перед богатством
Погонофобия – паника перед бородатыми людьми
Политикофобия – боязливость перед политиками
Порфирофобия – боязнь пурпурного цвета
Птеронофобия – боязнь птичьих перьев
Руброфобия – испуг перед красным цветом
Селахофобия – испуг перед акулами
Стаурофобия – страх перед крестами
Театрофобия – паника перед театрами
Трипофобия – боязнь скопления маленьких отверстий
Уранофобия – паническое состояние, появляющееся при мысли о рае
Циклофобия – боязнь велосипедов
Эйсоптрофобия – страх перед собственным отражением в зеркале
Акарофобия – паника перед лещами
Алекторофобия – боязнь кур
Батрахофобия – боязнь лягушек и жаб
Лутрафобия – боязнь выдр
Аквафобия – боязливость по отношению к воде
Батеофобия – еще одно определение боязни высоты
Баттофобия – боязнь глубины
Гидрофобия – боязнь воды
Никтофобия – боязнь темноты 
Аутофобия – страх перед одиночеством`.split('\n')

const player_traits = `аккуратный 
активный 
аристократичный 
беззаботный 
бережливый 
верный 
веселый 
волевой 
воспитанный 
галантный
деликатный 
жизнерадостный 
заботливый 
зажигательный 
игривый
изобретательный
инициативный
исполнительный
кокетливый
компанейский
красноречивый
культурный
ласковый
ловкий
лояльный
любопытный
милосердный
миролюбивый
мягкий
обходительный
проницательный
пунктуальный
смелый
толерантный
трудолюбивый
уравновешенный
храбрый
человечный
честный
шустрый
щедрый
юморной
авторитарный
агрессивный
балованный
банальный
безответственный
бестактный
бесстыдный
ветреный
властный
воинственный
вредный
вульгарный
грубый
грозный
деспотичный
дерзкий
жестокий
злой
злопамятный
инфантильный
истеричный
капризный
кичливый
конфликтный
ленивыйлукавый
маниакальный
манипулятивный
медлительный
мстительный
неуравновешенный
нудный
обидчивый
одержимый
придирчивый
резкийслабовольный
требовательный
трусливый
упрямый
фамильярный
хвастливый
чванливый
шебутной
шкодливый
адаптивный
амбициозныйбдительный
безбоязненный
бойкий
вдохновенный
вдумчивый
великодушный
внимательный
гениальный
гибкий
дивный
добрый
догадливый
душевный
естественный
жизнелюбивый
забавный
задорный
идейный
импозантный
искренний
конструктивный
коммуникабельный
корректный
любознательный
любвеобильный
непринужденный
одухотворенный
оптимистичный
правдивый
притягательный
разносторонний
сообразительный
талантливый
творческий
уравновешенный
харизматичный
чистоплотный
чувственный
эмоциональный
энергичный
эрудированный
яркий
азартный
алчный
аморальный
апатичный
асоциальный
безвольный
безграмотный
безжалостный
безразличный
внушаемый
глупый
драматизирующий
дурной
ершистый
ехидный
жадный
жесткий
завистливый
зажравшийся
закрытый
занудный
заурядный
извращенный
корыстный
криводушный
меркантильный
мнительный
нерешительный
озлобленный
остервенелый
прижимистый
рассеянный
спесивый
ушлый
хамоватый
циничный
человеконенавистник
чванливый
эгоистичный
эгоцентричный
эксцентричный
юродивый
язвительный
авантюрный
альтруистичный
амбивалентный
аполитичный
аскетичный
восприимчивый
беспечный
болтливый
восприимчивый
впечатлительный
грустный
доверчивый
драматичный
задумчивый
ироничный
кроткий
легкомысленный
лицемерный
льстивый
манерный
молчаливый
неразборчивый
откровенный
отчаянный
принципиальный
раскованный
суетливый
темпераментный
уязвимый
флегматичный
цепкий
чудаковатый
чопорный
брезгливый
лживый`.split('\n')

const professions = `Проститутка
Закладчик
Швейцар
Адвокат
Маркетолог
Кинорежиссёр
Сценарист
Писатель
Философ
Артиллерист
Домохозяйка
Стриптизёр
Гувернантка
Поэт
Хирург
Химик
Стоматолог
Патологоанатом
Священник
Экстрасенс
Пожарный
Космонавт
Археолог
Журналист
Фотограф
Бурильщик
Шахтёр
Продавец
Мясник
Повар
Таксист
Оператор
Медсестра
Актёр
Порноактёр
Картограф
Географ
Учитель начальных классов
Воспитатель
Мошенник
Программист
Хакер
Дирижёр
Музыкант
Экзорцист
Певец в хоре
Скульптор
Попрошайка
Посудомойщица
Уборщица
Художник
Ландшафтный дизайнер 
Репортёр
Блогер
Стример
Брокер
Страховщик
Коллектор
Вышибала
Реставратор мебели
Маляр
Вор
Вор в законе
Сидевший
Рядовой
Полицейский
Спецназовец
Военный лётчик
Пилот вертолёта
Бармен
Безработный
Фрилансер
Стилист
Визажист
Парикмахер
Кондитер
Пекарь
Тракторист
Киллер
Киберспортсмен
Штангист
Лыжник
Бегун
Борец
Метатель копья
Метатель молота
Татуировщик
Организатор концертов
Грабитель
Гинеколог
Уролог
Терапевт
Акушер
Официант
Хостес
Бухгалтер
Инкассатор
Экономист 
Кассир
Военно-полевой врач
Генетик
Гомеопат
Нарколог
Онколог
Иммунолог 
Невролог
Психиатр
Дерматолог
Диетолог
Инфекционист
Педиатр 
Пластический хирург
Косметолог
Подолог
Проктолог
Психолог
Реаниматолог
Сексолог
Травматолог
Эпидемиолог
Биоинженер
Кинолог
Зоолог
Ихтиолог
Археолог
Биоинженер
Антрополог
Архивариус
Астроном
Астрофизик
Астрохимик
Бактериолог
Биолог
Биофизик
Биохимик
Библиотековед
Ботаник (профессия) 
Вирусолог
Генетик
Геодезист
Геолог
Искусствовед
Историк
Логик
Культуролог
Лингвист
Математик
Миколог
Метеоролог
Океанолог
Орнитолог
Палеонтолог
Политолог
Религиовед
Социолог
Теолог
Физик
Филолог
Эколог
Радист
Робототехник
Сис-админ
Переводчик
Диктор
Плотник
Кузнец
Монтажник
Слесарь
Электрик
Машинист
Столяр
Фрезеровщик
Сантехник
Токарь
Строитель
Архитектор
Швея
Штукатур
Издатель
Типограф
Кондуктор
Экспедитор
Авиаконструктор
Бортмеханик
Капитан судна
Юнга
Разработчик оружия
Артист цирка
Диджей
Парфюмер
Танцор
Натурщик
Модель
Ювелир
Каскадёр
Критик
Лифтёр
Крупье
Горничная
Грузчик
Мерчандайзер
Портной
Почтальон
Сомелье 
Сапожник
Флорист
Дворник
Логопед 
Декан
Кондитер
Доярка
Агроном
Животновод
Охотник
Браконьер
Пастух 
Фермер
Пчеловод
Детектив
Нотариус
Судья
Депутат
Юрист
Таможенник
Машинист
Епископ
Пастырь
Диакон
Шулер
Наркоделец
Сутенёр
Контрабандист
Домушник
Тамада
Промышленный альпинист
Оператор аттракционов
Оператор лазерного станка
Кок
Дегустатор
Палач
Тюремщик
Заключённый
Техник-осеменатор
Ассенизатор
Забойщик скота
Оператор call-центра
Окулист
Тайный покупатель
Гробовщик
Флорист
Массажист
Связист
Технолог пищевой промышленности
Мэр
Комик
SMM-менеджер
Астролог
Спасатель
Таксидермист
ГМ
Сапёр`.split('\n')

const health_statuses = `Идеальное
Шизофрения
Биполярное расстройство
Деперсонализация
Алкоголизм
Наркозависимость
Психоз
Деменция
Синдром Альцгеймера
Тремор
Синдром Паркинсона
Синдром Туретта
Паранойя
Мания
Галлюциноз
Эпилепсия
Нет руки
Нет ноги
Паралич нижних конечностей
Порок сердца
Колясочник
Слепота
Нарколепсия
Педикулёз
Подагра
Стоматит
Гемофилия
ПТСР
Диабет
Аллергия на пыль
Аллергия на шерсть
Астма
Косоглазие
Дефект речи
Аллергия на солнечный свет
СПИД
Туберкулёз
Коронавирус
Ветрянка
Глухота
Немота
Глухонемота
Рак (осталось жить 1 год)
Рак (осталось жить 3 года)
Аутизм
Даунизм
Недержание
Камни в почках
Герпес
Геморрой
Авитаминоз
Простуда
Пневмония
Варикоз
Провалы в памяти
Бессонница
Мигрень
Вестибулярная дисфункция
Импотенция
Витилиго
Беременность
Гастрит
Гайморит
Гетерохромия
Дальтонизм
Перенёс инсульт
Искривление позвоночника
Корь
Волосатость
Выпадение волос
Ожирение
Анорексия
Псориаз
Цирроз печени
Шум в ушах
Лимфостаз
Патологический пиздабол`.split('\n')

const hobbies = `Ставки
Верховая езда
Декоративно-прикладное искусство
Коллекционирование монет
Косплей
Моделирование
Мыловарение
Пивоварение
Парашютный спорт
Пчеловодство
Фокусы всех мастей
Садоводство
Вышивание 
Вязание
Стрельба по мишеням
Боулинг
Лёгкая атлетика
Каллиграфия
Пикап
Любительская радиосвязь
Конструирование сувенирных корабликов
Тюнинг автомобилей
Рисование граффити
Паркур
Спортивное скалолазание
Посещает фитнес - зал
Выращивание растений
Спортивная рубка дров
Бильярд
Бодиарт
Ароматерапия
Астрономия
Аэробика
Аэрография
Бадминтон
Батут
Бег
Боевые искусства
Бонсай
Велосипед
Видеомонтаж
Выращивание кристаллов
Выращивание растений и цветов
Гербарий
Головоломки
Гольф
Горные лыжи
Дайвинг
Дартс
Декупаж
Дерево(выжигание и резьба) 
Диггерство
Дизайн интерьера
Дизайн одежды
Уход за животными приюта
Жонглирование
Зентангл
Игры на компьютерах и приставках
Икебана
Иностранные языки
Йога
Исторические реконструкции
Кайтинг
Каллиграфия
Карвинг
Картинг и квадроциклы
Квест - комнаты
Кладоискательство и археология
Клубный отдых
Коллекционирование
Концерты(посещение) 
Коньки и ролики
Кроссворды(составление и разгадывание) 
Кулинария
Лазертаг
Лепка
Лыжи
Массаж
Музеи и выставки
Настольные игры
Оригами
Охота
Пазлы
Пейнтбол
Пение и караоке
Переписка по обычной почте
Петанк
Пилатес
Писательская деятельность и журналистика
Плавание
Плетение(бисер, корзины, коробочки, кружева, макраме…)
Предпринимательство
Программирование
Психология и тренинги
Путешествия с комфортом
Путешествия дикарём 
Рисование 
Робототехника
Рукоделия из кожи(одежда, аксессуары) 
Рыбалка
Серфинг
Силовые тренировки
Скейтборд
Скрапбукинг(фотоальбомы своими руками) 
Сноуборд
Собирание грибов и ягод
Спорт - фанат
Страйкбол
Театр(театральный кружок) 
Теннис
Файер - шоу
Фейерверки
Фотография 
Футбол`.split('\n')

const appendixes = `Садист
Садомазохист
Мизантроп
Копрофил
Каннибал
Копрофаг
Язычник
Полиглот
Шовинист
Участвовал в создании этого бункера
Жертва инцеста
Есть рыжий брат-близнец
Обокрал деда
Родился в семье охотников
Окончил актёрские курсы
Переспал с порно-звездой
Верит в экстрасенсов
Получил в наследство огромное состояние
Пробовал собачатину
Окончил школу психологии
Умеет танцевать пасодобль
Проиграл квартиру в казино
Проиграл сестру в карты
Подозрительно относится к людям с именем Дима
Отсидел срок за изнасилование несовершеннолетней
Был(а) вожатым в лагере
Ведёт личный дневник
Верит в пришельцев
Верит в сверхъестественных существ
Владеет хорошей спортивной подготовкой
Выиграл(а) в лотерее целое состояние
Занял(а) первое место на марафоне
Знает наизусть все стихи Пушкина
Играл(а) в театре
Любит мягкие игрушки
Может оказать первую помощь
Ненавидит кофе
Не переносит алкоголь
Обладает феноменальной памятью
Ограбил(а) банк
Пережил(а) три покушения
Побывал(а) в восемнадцати странах
Побывал(а) на вершине Эвереста
Поставил(а) мировой рекорд по поеданию бургеров
Продал(а) почку
Проходил(а) курс по самообороне
Проходил(а) курсы кулинарии
Проходил(а) курсы массажа
Проходил(а) курсы парикмахера
Сидел(а) в тюрьме
Спасал(а) утопающего
Страдает морской болезнью
Уверен(а), что живет в матрице
Уверен(а), что эта катастрофа - заговор рептилий
Увлекается животноводством
Увлекается охотой
Умеет вскрывать замки
Умеет жонглировать
Умеет ориентироваться по звездам
Хорошо играет в карты
Хорошо ориентируется на местности
Читал(а) книгу про выживание на необитаемом острове
Является вегетарианцем
Является мастером спорта по боксу
Не умеет плавать
Не умеет ездить на велосипеде
Достаёт языком до носа
Любит, когда ему лижут уши
Фетишист
Любит бдсм
Работал в центре реабилитации наркоманов
Ходит в церковь`.split('\n')

const equips = `Бутылёк шампуня
Игровая приставка
Настольная игра Бункер
10 слитков золота
Младенец девочка
Младенец мальчик
Радиоприемник
Клетка с попугаем
Щенок
Отрубленная кисть
Отрубленная стопа
Домашняя крыса
Кот
Кирпич
Смартфон
Использованный презерватив
Комплект для дайвинга
Лук и стрелы
Снайперская винтовка
Пожарный топор
Противогаз
Рыбацкие снасти
Подушка-пердушка
Таблетки от диареи
Лассо
Пакетик быстрорастворимого кофе
Атлас звёздного неба
Скальпель
Шприц
Бутылка идеально выдержанного шотландского виски
Ртутный градусник
Солдатский сухой паёк на одного человека
Спальный мешок
Коллекционная монета
Лотерейный билет
Лицензия на оружие
Паспорт
Лекарственный препарат с содержанием лития
Зелёнка
Распятие
Библия
Метла
Костюм для БДСМ
Резиновая секс-кукла
Футбольный мяч
Шахматы
Парик
Шашки
Надувная лодка на четверых человек
Аквариум с рыбкой
Кадило
Тёплый пуховик
Термобельё
Скафандр
Зонт
Рыцарский шлем
Шпага
Мягкий корм для кошек
10 банок тушёнки
Гитара
Кукла Вуду самого себя
Компас
Фотоаппарат
Стринги
Походный рюкзак
Камуфляжная форма
Громкоговоритель
Фальшфейер
Фотоальбом
Виагра
Горелка на сухом горючем
Волынка
Пачка сигарет
Резиновые перчатки
Несколько упаковок смекты
Аптечка
Беспроводная колонка
Бладхаунд
Будильник
Бутылка шампанского
Гаечный ключ
Губная гармошка
Дедовское ружьё
Десять одноразовых медицинских масок
Дневник выжившего
Дублёнка
Зажигалка
Карманные часы
Карта местности
Кассеты с фильмами
Книга по социологии
Коробка с боеприпасами
Косметическое зеркало
Ледоруб и трос
Лейка
Молоток и гвозди
Музыкальная шкатулка
Набор для шитья
Набор инструментов
Несколько чистых листов пергамента
Ноутбук
Открывашка
Пневматический пистолет
Пустая коробка
10 рулонов туалетной бумаги
Жаркое из ежа
Семена капусты
Семена картофеля
Семена моркови
Семена пшеницы
Стопка журналов для взрослых
Флейта
Фонарик и запасные батарейки
Четыре рации
Полосатые чулки
Игровые кости
Тело мёртвого младенца
Противотанковая мина`.split('\n')