import { X } from "lucide-react";
import { Modal } from "../shared/Modal";

interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TipsModal({ isOpen, onClose }: TipsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative bg-gradient-to-br from-[#E8F4E8] via-[#F0F8F0] to-[#E8F4E8] p-8 rounded-lg overflow-hidden min-h-[600px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-30 bg-white/80 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left botanical elements */}
        <div className="absolute top-0 left-0 w-48 h-full opacity-40 pointer-events-none">
          <img
            src="https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/leaf-large.svg"
            alt=""
            className="absolute top-8 left-0 w-32 h-40 object-cover transform -rotate-12 opacity-60"
            style={{ filter: "hue-rotate(90deg) saturate(0.7)" }}
          />
        </div>

        {/* Right botanical elements */}
        <div className="absolute top-0 right-0 w-48 h-full opacity-40 pointer-events-none">
          <img
            src="https://cdn.jsdelivr.net/gh/HenryNovoa/rsvp-images@main/leaf-4.svg"
            alt=""
            className="absolute top-12 right-0 w-32 h-40 object-cover transform rotate-12 opacity-60 scale-x-[-1]"
            style={{ filter: "hue-rotate(90deg) saturate(0.7)" }}
          />
          <img
            src="https://images.unsplash.com/photo-1565011523534-747a8601f10a?auto=format&fit=crop&w=400&q=80"
            alt=""
            className="absolute bottom-20 right-4 w-28 h-36 object-cover transform -rotate-12 opacity-50 scale-x-[-1]"
            style={{ filter: "hue-rotate(90deg) saturate(0.7)" }}
          />
        </div>

        {/* Header with border frame */}
        <div className="relative z-20 text-center mb-12">
          <div className="relative border-4 border-[#4A5D4B] p-6 mb-6 bg-white/90 backdrop-blur-sm mx-auto max-w-md">
            {/* Inner decorative border */}
            <div className="absolute inset-2 border border-[#4A5D4B]/30"></div>
            <h2 className="font-playfair text-4xl text-[#4A5D4B] italic font-normal tracking-wide">
              Tips
            </h2>
          </div>

          {/* Decorative branch - more detailed */}
          <div className="flex justify-center mb-8">
            <svg
              width="200"
              height="40"
              viewBox="0 0 200 40"
              className="text-[#4A5D4B]"
            >
              <path
                d="M20,20 Q50,15 100,20 Q150,25 180,20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Leaves along the branch */}
              <ellipse
                cx="35"
                cy="16"
                rx="4"
                ry="8"
                fill="currentColor"
                opacity="0.8"
                transform="rotate(-25 35 16)"
              />
              <ellipse
                cx="50"
                cy="24"
                rx="3"
                ry="6"
                fill="currentColor"
                opacity="0.7"
                transform="rotate(30 50 24)"
              />
              <ellipse
                cx="70"
                cy="15"
                rx="4"
                ry="8"
                fill="currentColor"
                opacity="0.8"
                transform="rotate(-15 70 15)"
              />
              <ellipse
                cx="85"
                cy="25"
                rx="3"
                ry="6"
                fill="currentColor"
                opacity="0.7"
                transform="rotate(35 85 25)"
              />
              <ellipse
                cx="115"
                cy="16"
                rx="4"
                ry="8"
                fill="currentColor"
                opacity="0.8"
                transform="rotate(-20 115 16)"
              />
              <ellipse
                cx="130"
                cy="24"
                rx="3"
                ry="6"
                fill="currentColor"
                opacity="0.7"
                transform="rotate(25 130 24)"
              />
              <ellipse
                cx="150"
                cy="17"
                rx="4"
                ry="8"
                fill="currentColor"
                opacity="0.8"
                transform="rotate(-30 150 17)"
              />
              <ellipse
                cx="165"
                cy="23"
                rx="3"
                ry="6"
                fill="currentColor"
                opacity="0.7"
                transform="rotate(20 165 23)"
              />
            </svg>
          </div>
        </div>

        {/* Main content - Tips list */}
        <div className="relative z-20 max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="text-[#8FA98F] mt-2 text-2xl flex-shrink-0">
                ✧
              </span>
              <p className="text-[#4A5D4B] text-lg leading-relaxed">
                Confirma tu asistencia lo antes posible
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#8FA98F] mt-2 text-2xl flex-shrink-0">
                ✧
              </span>
              <p className="text-[#4A5D4B] text-lg leading-relaxed">
                Porfavor, se agradece puntualidad
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#8FA98F] mt-2 text-2xl flex-shrink-0">
                ✧
              </span>
              <p className="text-[#4A5D4B] text-lg leading-relaxed">
                Queremos que disfrutes al máximo de esta fiesta, por eso hemos
                decidido que solo vengan los niños de la familia
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#8FA98F] mt-2 text-2xl flex-shrink-0">
                ✧
              </span>
              <p className="text-[#4A5D4B] text-lg leading-relaxed">
                Olvidaros de todo y ¡¡¡a disfrutar!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
