import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const streamers = [
    {
      id: 1,
      name: "CasinoKing_TTV",
      platform: "Twitch",
      followers: "124K",
      engagement: 8.4,
      revenue: "$15,200",
      games: ["Poker", "Blackjack", "Slots"],
      status: "live"
    },
    {
      id: 2,
      name: "SlotMaster_Kick",
      platform: "Kick",
      followers: "89K",
      engagement: 7.2,
      revenue: "$11,800",
      games: ["Slots", "Roulette", "Baccarat"],
      status: "offline"
    },
    {
      id: 3,
      name: "PokerPro_Live",
      platform: "Twitch",
      followers: "156K",
      engagement: 9.1,
      revenue: "$18,600",
      games: ["Poker", "Texas Hold'em"],
      status: "live"
    }
  ];

  const services = [
    {
      title: "Управление Стримерами",
      description: "Полное сопровождение инфлюенсеров на Twitch и Kick",
      price: "от 5,000₽",
      features: ["Контент-план", "Технической поддержка", "Аналитика стримов", "Мерч и брендинг"]
    },
    {
      title: "Казино Партнерство",
      description: "Подключение к топовым казино-платформам",
      price: "от 15,000₽",
      features: ["Эксклюзивные партнерства", "Высокие комиссии", "Бонусные программы", "VIP поддержка"]
    },
    {
      title: "Аналитика и Рост",
      description: "Система мониторинга эффективности",
      price: "от 8,000₽",
      features: ["Real-time метрики", "ROI отчеты", "A/B тестирование", "Прогнозы доходности"]
    }
  ];

  const cases = [
    {
      streamer: "CasinoMaster",
      before: "45K подписчиков",
      after: "180K подписчиков",
      revenue: "+420% дохода",
      period: "6 месяцев"
    },
    {
      streamer: "SlotQueen",
      before: "12K подписчиков", 
      after: "95K подписчиков",
      revenue: "+650% дохода",
      period: "8 месяцев"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-gaming-purple/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-gaming text-2xl font-bold text-gaming-purple">
              GAMING<span className="text-gaming-orange">INFLUENCE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Главная", "Наши стримеры", "Услуги", "Кейсы", "Тарифы", "Контакты"].map((item) => (
                <a key={item} href="#" className="hover:text-gaming-orange transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-gaming-purple to-gaming-orange hover:from-gaming-orange hover:to-gaming-purple">
              Стать партнером
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gaming-dark/50 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple/10 to-gaming-orange/10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-gaming text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gaming-purple to-gaming-orange bg-clip-text text-transparent">
                ДОМИНИРУЙ В ГЕЙМИНГЕ
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Агентство №1 по работе с инфлюенсерами казино-стриминга на Twitch и Kick. 
                Превращаем стримеров в миллионные бренды.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gaming-orange hover:bg-gaming-orange/90 text-white font-bold">
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать стримить
                </Button>
                <Button size="lg" variant="outline" className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white">
                  <Icon name="BarChart3" className="mr-2" size={20} />
                  Смотреть аналитику
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-gaming text-3xl font-bold text-gaming-orange">150+</div>
                  <div className="text-sm text-gray-400">Активных стримеров</div>
                </div>
                <div className="text-center">
                  <div className="font-gaming text-3xl font-bold text-gaming-purple">$2M+</div>
                  <div className="text-sm text-gray-400">Месячный оборот</div>
                </div>
                <div className="text-center">
                  <div className="font-gaming text-3xl font-bold text-gaming-orange">98%</div>
                  <div className="text-sm text-gray-400">Рост доходов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/faaf1feb-57be-4773-881b-dea8d3ed5cab.jpg" 
                alt="Gaming Setup" 
                className="rounded-lg shadow-2xl border border-gaming-purple/30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Streamers Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gaming-dark/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-gaming text-4xl font-bold mb-4 text-white">
              НАШИ <span className="text-gaming-orange">ТОП</span> СТРИМЕРЫ
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Познакомьтесь с лучшими казино-стримерами, которые зарабатывают миллионы в партнерстве с нами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {streamers.map((streamer) => (
              <Card key={streamer.id} className="bg-gaming-dark/40 border-gaming-purple/30 hover:border-gaming-orange/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-gaming text-gaming-purple">{streamer.name}</CardTitle>
                    <Badge variant={streamer.status === 'live' ? "default" : "secondary"} 
                           className={streamer.status === 'live' ? "bg-red-500 animate-pulse" : "bg-gray-600"}>
                      <Icon name="Circle" size={8} className="mr-1 fill-current" />
                      {streamer.status === 'live' ? 'LIVE' : 'OFFLINE'}
                    </Badge>
                  </div>
                  <CardDescription className="text-gaming-orange font-semibold">
                    {streamer.platform} • {streamer.followers} фолловеров
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Engagement Rate</span>
                        <span className="text-gaming-orange">{streamer.engagement}%</span>
                      </div>
                      <Progress value={streamer.engagement * 10} className="h-2" />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Месячный доход:</span>
                      <span className="font-gaming text-gaming-orange font-bold">{streamer.revenue}</span>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Игры:</div>
                      <div className="flex flex-wrap gap-1">
                        {streamer.games.map((game) => (
                          <Badge key={game} variant="outline" className="border-gaming-purple/50 text-gaming-purple text-xs">
                            {game}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gaming-dark/20 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-gaming text-4xl font-bold mb-4 text-white">
              НАШИ <span className="text-gaming-purple">УСЛУГИ</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Полный спектр услуг для максимизации доходов от казино-стриминга
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-b from-gaming-dark/60 to-black/60 border-gaming-orange/30 hover:border-gaming-purple/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-gaming text-gaming-orange text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                  <div className="font-gaming text-2xl font-bold text-gaming-purple">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Icon name="Check" size={16} className="text-gaming-orange mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-gaming-purple to-gaming-orange hover:from-gaming-orange hover:to-gaming-purple">
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-gaming-dark/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-gaming text-4xl font-bold mb-4 text-white">
              УСПЕШНЫЕ <span className="text-gaming-orange">КЕЙСЫ</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Реальные результаты наших партнеров за последний год
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cases.map((case_, index) => (
              <Card key={index} className="bg-gradient-to-br from-gaming-purple/20 to-gaming-orange/20 border-gaming-purple/50">
                <CardHeader>
                  <CardTitle className="font-gaming text-gaming-orange text-2xl">{case_.streamer}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">До:</div>
                      <div className="font-bold text-white">{case_.before}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">После:</div>
                      <div className="font-bold text-gaming-purple">{case_.after}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Рост дохода:</div>
                      <div className="font-gaming font-bold text-gaming-orange">{case_.revenue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Период:</div>
                      <div className="font-bold text-white">{case_.period}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section className="py-20 bg-gradient-to-b from-gaming-dark/30 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-gaming text-4xl font-bold mb-4 text-white">
              АНАЛИТИКА <span className="text-gaming-purple">В РЕАЛЬНОМ ВРЕМЕНИ</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Полная система мониторинга эффективности ваших стримов
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gaming-dark/60">
                <TabsTrigger value="overview" className="data-[state=active]:bg-gaming-purple">Обзор</TabsTrigger>
                <TabsTrigger value="revenue" className="data-[state=active]:bg-gaming-purple">Доходы</TabsTrigger>
                <TabsTrigger value="audience" className="data-[state=active]:bg-gaming-purple">Аудитория</TabsTrigger>
                <TabsTrigger value="games" className="data-[state=active]:bg-gaming-purple">Игры</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="bg-gradient-to-br from-gaming-purple/20 to-black border-gaming-purple/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-gray-400">Активные зрители</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-gaming text-3xl font-bold text-gaming-orange">8,547</div>
                      <div className="text-sm text-green-400">+12.5% за час</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-gaming-orange/20 to-black border-gaming-orange/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-gray-400">Доход/час</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-gaming text-3xl font-bold text-gaming-purple">$2,156</div>
                      <div className="text-sm text-green-400">+8.2% за день</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-gaming-purple/20 to-black border-gaming-purple/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-gray-400">Конверсия</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-gaming text-3xl font-bold text-gaming-orange">24.8%</div>
                      <div className="text-sm text-green-400">+3.1% за неделю</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-gaming-orange/20 to-black border-gaming-orange/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-gray-400">Время просмотра</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-gaming text-3xl font-bold text-gaming-purple">156м</div>
                      <div className="text-sm text-green-400">+5.7% за день</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gaming-purple/20 to-gaming-orange/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-gaming text-5xl font-bold mb-6 text-white">
            ГОТОВ НАЧАТЬ <span className="text-gaming-orange">ЗАРАБАТЫВАТЬ?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйся к топ-стримерам казино и начни получать максимальный доход уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gaming-orange hover:bg-gaming-orange/90 text-white font-bold px-8 py-4 text-lg">
              <Icon name="Rocket" className="mr-2" size={24} />
              Стать партнером
            </Button>
            <Button size="lg" variant="outline" className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple hover:text-white px-8 py-4 text-lg">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gaming-purple/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-gaming text-2xl font-bold text-gaming-purple mb-4">
                GAMING<span className="text-gaming-orange">INFLUENCE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Агентство №1 по работе с инфлюенсерами казино-стриминга
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Платформы</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Twitch</li>
                <li>Kick</li>
                <li>YouTube Gaming</li>
                <li>Discord</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Управление стримерами</li>
                <li>Казино партнерство</li>
                <li>Аналитика</li>
                <li>Техподдержка 24/7</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  hello@gaminginfluence.pro
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Россия
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gaming-purple/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 GamingInfluence. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;