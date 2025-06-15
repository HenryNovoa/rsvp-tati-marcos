import React, { useState } from 'react';
import { submitToGoogleForms, SubmissionStatus } from '../../utils/forms';
import { Loader2 } from 'lucide-react';

interface MusicSuggestionFormProps {
  onSubmit: () => void;
}

export function MusicSuggestionForm({ onSubmit }: MusicSuggestionFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    song: '',
    artist: '',
    link: '',
  });
  const [status, setStatus] = useState<SubmissionStatus>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await submitToGoogleForms(formData);
      setStatus({
        type: 'success',
        message: '¡Gracias por tu sugerencia!',
      });
      setFormData({ name: '', song: '', artist: '', link: '' });
      setTimeout(onSubmit, 1500);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        type: 'error',
        message: 'Hubo un error. Por favor intenta nuevamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#4A5D4B] mb-2">
          Tu nombre
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

      <div>
        <label htmlFor="song" className="block text-sm font-medium text-[#4A5D4B] mb-2">
          Nombre de la canción
        </label>
        <input
          type="text"
          id="song"
          value={formData.song}
          onChange={(e) => setFormData({ ...formData, song: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="artist" className="block text-sm font-medium text-[#4A5D4B] mb-2">
          Artista
        </label>
        <input
          type="text"
          id="artist"
          value={formData.artist}
          onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
          className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="link" className="block text-sm font-medium text-[#4A5D4B] mb-2">
          Link (opcional)
        </label>
        <input
          type="url"
          id="link"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          placeholder="Spotify o YouTube"
          className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
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
        disabled={isSubmitting}
        className="w-full py-3 bg-[#4A5D4B] text-white rounded-md hover:bg-[#3A4D3B] hover:-translate-y-0.5 transition-all font-semibold tracking-wide text-sm disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>ENVIANDO...</span>
          </>
        ) : (
          'ENVIAR SUGERENCIA'
        )}
      </button>
    </form>
  );
}