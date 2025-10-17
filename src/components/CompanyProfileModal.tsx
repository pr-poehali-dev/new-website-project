import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface CompanyProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: (profile: any) => void;
  userId: number;
  token: string;
  initialData?: {
    company_name?: string;
    company_inn?: string;
  };
}

const CompanyProfileModal = ({ open, onOpenChange, onSuccess, userId, token, initialData }: CompanyProfileModalProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    company_name: initialData?.company_name || '',
    company_inn: initialData?.company_inn || '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        company_name: initialData.company_name || '',
        company_inn: initialData.company_inn || '',
      });
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('https://functions.poehali.dev/4499e0f7-3ae1-4ac9-8cb7-e18c0f96692e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Token': token,
        },
        body: JSON.stringify({
          action: 'update_profile',
          user_id: userId,
          company_name: formData.company_name.trim(),
          company_inn: formData.company_inn.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Произошла ошибка');
      }

      const updatedUser = JSON.parse(localStorage.getItem('user') || '{}');
      updatedUser.company_name = formData.company_name.trim();
      updatedUser.company_inn = formData.company_inn.trim();
      updatedUser.profile_completed = true;
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      onSuccess(data);
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message || 'Произошла ошибка');
    } finally {
      setLoading(false);
    }
  };

  const validateINN = (inn: string) => {
    const cleaned = inn.replace(/\D/g, '');
    return cleaned.length === 10 || cleaned.length === 12;
  };

  const isFormValid = formData.company_name.trim().length > 0 && 
                      formData.company_inn.trim().length > 0 &&
                      validateINN(formData.company_inn);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Профиль компании
          </DialogTitle>
          <DialogDescription>
            Заполните данные компании, чтобы снять ограничение в 3 макета
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="company_name">Название компании *</Label>
            <Input
              id="company_name"
              type="text"
              placeholder="ООО &quot;Название&quot;"
              value={formData.company_name}
              onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company_inn">ИНН *</Label>
            <Input
              id="company_inn"
              type="text"
              placeholder="1234567890"
              value={formData.company_inn}
              onChange={(e) => {
                const cleaned = e.target.value.replace(/\D/g, '');
                setFormData({ ...formData, company_inn: cleaned });
              }}
              maxLength={12}
              required
            />
            <p className="text-xs text-muted-foreground">
              10 или 12 цифр
            </p>
          </div>

          {error && (
            <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg text-sm flex items-start gap-2">
              <Icon name="AlertCircle" size={18} className="mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="bg-muted/50 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
            <Icon name="Info" size={18} className="mt-0.5 flex-shrink-0 text-primary" />
            <div>
              <p className="font-medium mb-1">Зачем это нужно?</p>
              <p className="text-muted-foreground">
                После заполнения профиля вы сможете создавать неограниченное количество макетов
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading || !isFormValid}>
            {loading ? (
              <>
                <Icon name="Loader2" size={18} className="mr-2 animate-spin" />
                Сохранение...
              </>
            ) : (
              <>
                <Icon name="Save" size={18} className="mr-2" />
                Сохранить профиль
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CompanyProfileModal;
