import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

interface CatalogItem {
  название: string;
  описание: string;
  цена: string;
  категория: string;
  изображение_url: string;
}

const CatalogImport = () => {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseCSV = (text: string): CatalogItem[] => {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    
    return lines.slice(1).map(line => {
      const values = line.split(',').map(v => v.trim());
      const item: any = {};
      
      headers.forEach((header, index) => {
        item[header] = values[index];
      });
      
      return item as CatalogItem;
    });
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    try {
      const text = await file.text();
      const parsedItems = parseCSV(text);
      setItems(parsedItems);
    } catch (err) {
      setError('Ошибка при чтении файла. Проверьте формат CSV.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImport = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://functions.poehali.dev/1df99542-a754-4d23-8930-05b014c081d6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (data.success) {
        alert(`Готово! Импортировано ${data.imported_count} товаров в базу данных.`);
        setItems([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setError(data.error || 'Ошибка при импорте');
      }
    } catch (err) {
      setError('Ошибка при сохранении данных. Проверьте подключение к интернету.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const downloadTemplate = () => {
    const template = `название,описание,цена,категория,изображение_url
Награда Триумф,Эксклюзивная награда из стекла для корпоративных мероприятий,15000,steklyannye-nagrady,https://example.com/image1.jpg
Кубок Победы,Стеклянный кубок для спортивных церемоний,12000,steklyannye-nagrady,https://example.com/image2.jpg
Диплом Премиум,Премиальный диплом с гравировкой,8000,diplomy-i-plaketki,https://example.com/image3.jpg`;

    const blob = new Blob([template], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'catalog_template.csv';
    link.click();
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Импорт каталога</h2>
              <p className="text-muted-foreground">
                Загрузите CSV файл с товарами для массового добавления в каталог
              </p>
            </div>
            <Button variant="outline" onClick={downloadTemplate}>
              <Icon name="Download" size={18} className="mr-2" />
              Скачать шаблон
            </Button>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-dashed border-muted rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
              />
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Upload" size={32} className="text-primary" />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-1">Загрузите CSV файл</h3>
                  <p className="text-sm text-muted-foreground">
                    Нажмите на кнопку ниже или перетащите файл сюда
                  </p>
                </div>
                
                <Button onClick={() => fileInputRef.current?.click()}>
                  <Icon name="FileUp" size={18} className="mr-2" />
                  Выбрать файл
                </Button>
              </div>
            </div>

            {error && (
              <div className="bg-destructive/10 text-destructive rounded-lg p-4 flex items-start gap-3">
                <Icon name="AlertCircle" size={20} className="flex-shrink-0 mt-0.5" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {loading && (
              <div className="flex items-center justify-center gap-3 py-4">
                <Icon name="Loader2" size={24} className="animate-spin text-primary" />
                <span className="text-muted-foreground">Обработка файла...</span>
              </div>
            )}

            {items.length > 0 && (
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Найдено товаров: {items.length}</h3>
                    <Button onClick={handleImport}>
                      <Icon name="Check" size={18} className="mr-2" />
                      Импортировать
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Проверьте данные перед импортом
                  </p>
                </div>

                <div className="max-h-96 overflow-y-auto space-y-2">
                  {items.slice(0, 10).map((item, index) => (
                    <div key={index} className="bg-muted/30 rounded-lg p-4 flex items-start gap-4">
                      <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                        <img
                          src={item.изображение_url}
                          alt={item.название}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate">{item.название}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {item.описание}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm font-medium">{item.цена} ₽</span>
                          <span className="text-xs text-muted-foreground">{item.категория}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {items.length > 10 && (
                    <p className="text-center text-sm text-muted-foreground py-2">
                      И ещё {items.length - 10} товаров...
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-3">Формат CSV файла:</h3>
          <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
            <div className="text-primary">название,описание,цена,категория,изображение_url</div>
            <div className="text-muted-foreground">
              Награда Триумф,Эксклюзивная награда...,15000,steklyannye-nagrady,https://...
            </div>
            <div className="text-muted-foreground">
              Кубок Победы,Стеклянный кубок...,12000,steklyannye-nagrady,https://...
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <p className="text-sm"><strong>название</strong> — название товара</p>
            <p className="text-sm"><strong>описание</strong> — краткое описание</p>
            <p className="text-sm"><strong>цена</strong> — цена в рублях (без знака ₽)</p>
            <p className="text-sm"><strong>категория</strong> — ID категории (steklyannye-nagrady, diplomy-i-plaketki и т.д.)</p>
            <p className="text-sm"><strong>изображение_url</strong> — ссылка на изображение товара</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CatalogImport;