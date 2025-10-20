import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CatalogImport from '@/components/CatalogImport';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [concepts, setConcepts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'concepts' | 'import'>('concepts');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/');
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    loadConcepts(parsedUser.id);
  }, [navigate]);

  const loadConcepts = async (userId: number) => {
    try {
      const response = await fetch(
        `https://functions.poehali.dev/74c0a2b5-7337-4424-9131-1b5e377dfec0?user_id=${userId}`
      );
      const data = await response.json();
      
      if (data.success) {
        setConcepts(data.concepts);
      }
    } catch (error) {
      console.error('Failed to load concepts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Icon name="Loader2" size={48} className="animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Личный кабинет</h1>
              <p className="text-muted-foreground">
                Добро пожаловать, {user?.name}!
              </p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              <Icon name="LogOut" size={18} className="mr-2" />
              Выйти
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Профиль</p>
                    <p className="font-semibold">{user?.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="ImageIcon" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Мои макеты</p>
                    <p className="font-semibold">{concepts.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Calendar" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Регистрация</p>
                    <p className="font-semibold text-sm">
                      {new Date(user?.created_at).toLocaleDateString('ru-RU')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              <Button
                variant={activeTab === 'concepts' ? 'default' : 'outline'}
                onClick={() => setActiveTab('concepts')}
              >
                <Icon name="ImageIcon" size={18} className="mr-2" />
                Мои макеты
              </Button>
              <Button
                variant={activeTab === 'import' ? 'default' : 'outline'}
                onClick={() => setActiveTab('import')}
              >
                <Icon name="Upload" size={18} className="mr-2" />
                Импорт каталога
              </Button>
            </div>
            {activeTab === 'concepts' && (
              <Button onClick={() => navigate('/constructor')}>
                <Icon name="Plus" size={18} className="mr-2" />
                Создать новый
              </Button>
            )}
          </div>

          {activeTab === 'import' ? (
            <CatalogImport />
          ) : concepts.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Icon name="ImageIcon" size={64} className="mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Пока нет макетов</h3>
                <p className="text-muted-foreground mb-6">
                  Создайте свой первый макет награды с помощью AI-конструктора
                </p>
                <Button onClick={() => navigate('/constructor')}>
                  <Icon name="Sparkles" size={18} className="mr-2" />
                  Создать макет
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {concepts.map((concept) => (
                <Card key={concept.id} className="group overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative aspect-square bg-gradient-to-br from-slate-900 to-slate-800">
                    <img
                      src={concept.mockup_url}
                      alt={concept.product_title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => window.open(concept.mockup_url, '_blank')}
                      >
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => navigate(`/constructor?product=${concept.product_id}`)}
                      >
                        <Icon name="Edit" size={16} className="mr-2" />
                        Изменить
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{concept.product_title}</h3>
                    {concept.custom_text && (
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {concept.custom_text}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {new Date(concept.created_at).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;