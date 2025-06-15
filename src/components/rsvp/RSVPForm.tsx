import React, { useState } from 'react';
import { submitRSVP, SubmissionStatus } from '../../utils/forms';
import { Loader2 } from 'lucide-react';

interface RSVPFormProps {
  onSubmit?: () => void;
}

export function RSVPForm({ onSubmit }: RSVPFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    attendance: null as 'yes' | 'no' | null,
    guestCount: 1,
    details: '',
  });
  const [status, setStatus] = useState<SubmissionStatus>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.attendance) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await submitRSVP({
        name: formData.name,
        attendance: formData.attendance,
        guestCount: formData.attendance === 'yes' ? formData.guestCount : undefined,
        details: formData.details || undefined,
      });

      setStatus({
        type: 'success',
        message: '¡Gracias por confirmar tu asistencia!',
      });
      
      setTimeout(() => {
        onSubmit?.();
      }, 1500);
    } catch (error) {
      console.error('RSVP submission error:', error);
      setStatus({
        type: 'error',
        message: 'Hubo un error. Por favor intenta nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#4A5D4B] mb-2">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-[#4A5D4B]">Confirmación de asistencia</p>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, attendance: 'yes' })}
            disabled={isSubmitting}
            className={`flex-1 py-2 rounded-md border transition-colors ${
              formData.attendance === 'yes'
                ? 'bg-[#4A5D4B] text-white border-[#4A5D4B]'
                : 'border-[#8FA98F] text-[#4A5D4B] hover:bg-[#8FA98F]/10'
            }`}
          >
            ¡Sí, confirmo!
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, attendance: 'no' })}
            disabled={isSubmitting}
            className={`flex-1 py-2 rounded-md border transition-colors ${
              formData.attendance === 'no'
                ? 'bg-[#4A5D4B] text-white border-[#4A5D4B]'
                : 'border-[#8FA98F] text-[#4A5D4B] hover:bg-[#8FA98F]/10'
            }`}
          >
            No puedo 😢
          </button>
        </div>
      </div>

      {formData.attendance === 'yes' && (
        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-[#4A5D4B] mb-2">
            Número total de asistentes (incluyéndote)
          </label>
          <input
            type="number"
            id="guestCount"
            min="1"
            max="10"
            value={formData.guestCount}
            onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value, 10) })}
            className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
            required
            disabled={isSubmitting}
          />
          <p className="mt-1 text-xs text-gray-500">
            Por favor, indica el número total de personas que asistirán
          </p>
        </div>
      )}

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-[#4A5D4B] mb-2">
          Detalles adicionales (ej: Soy vegetariano)
        </label>
        <textarea
          id="details"
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
          rows={3}
          disabled={isSubmitting}
        />
      </div>

      {status.message && (
        <div
          className={`p-3 rounded-md text-center ${
            status.type === 'success'
              ? 'bg-green-50 text-green-700'
              : 'bg-red-50 text-red-700'
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !formData.attendance}
        className="w-full py-3 bg-[#4A5D4B] text-white rounded-md hover:bg-[#3A4D3B] hover:-translate-y-0.5 transition-all font-semibold tracking-wide text-sm disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>ENVIANDO...</span>
          </>
        ) : (
          'ENVIAR'
        )}
      </button>
    </form>
  );
}