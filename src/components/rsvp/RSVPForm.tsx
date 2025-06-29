import { Loader2, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { SubmissionStatus, submitRSVP } from "../../utils/forms";

interface Attendee {
  name: string;
  dietaryRestrictions?: string;
  age?: number;
}

interface RSVPFormProps {
  onSubmit?: () => void;
}

export function RSVPForm({ onSubmit }: RSVPFormProps) {
  const [attendance, setAttendance] = useState<"yes" | "no" | null>(null);
  const [attendees, setAttendees] = useState<Attendee[]>([{ name: "" }]);
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<SubmissionStatus>({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addAttendee = () => {
    setAttendees([...attendees, { name: "" }]);
  };

  const removeAttendee = (index: number) => {
    setAttendees(attendees.filter((_, i) => i !== index));
  };

  const updateAttendee = (
    index: number,
    field: keyof Attendee,
    value: string | number
  ) => {
    const newAttendees = [...attendees];
    newAttendees[index] = { ...newAttendees[index], [field]: value };
    setAttendees(newAttendees);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendance) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await submitRSVP({
        attendance,
        attendees,
        details,
      });

      setStatus({
        type: "success",
        message: "¡Gracias por confirmar tu asistencia!",
      });

      setTimeout(() => {
        onSubmit?.();
      }, 1500);
    } catch (error) {
      console.error("RSVP submission error:", error);
      setStatus({
        type: "error",
        message: "Hubo un error. Por favor intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-3 font-belista italic">
        <p className="text-sm font-medium text-[#4A5D4B] font-belista italic">
          Confirmación de asistencia
        </p>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setAttendance("yes")}
            disabled={isSubmitting}
            className={`flex-1 py-2 rounded-md border transition-colors ${
              attendance === "yes"
                ? "bg-[#4A5D4B] text-white border-[#4A5D4B]"
                : "border-[#8FA98F] text-[#4A5D4B] hover:bg-[#8FA98F]/10"
            }`}
          >
            ¡Sí, confirmo!
          </button>
          <button
            type="button"
            onClick={() => setAttendance("no")}
            disabled={isSubmitting}
            className={`flex-1 py-2 rounded-md border transition-colors ${
              attendance === "no"
                ? "bg-[#4A5D4B] text-white border-[#4A5D4B]"
                : "border-[#8FA98F] text-[#4A5D4B] hover:bg-[#8FA98F]/10"
            }`}
          >
            No puedo 😢
          </button>
        </div>
      </div>

      {attendance === "yes" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-[#4A5D4B]">Asistentes</h3>
            <button
              type="button"
              onClick={addAttendee}
              className="text-[#4A5D4B] hover:text-[#8FA98F] transition-colors flex items-center gap-1 text-sm"
            >
              <Plus className="w-4 h-4" />
              Agregar asistente
            </button>
          </div>

          <div className="space-y-4">
            {attendees.map((attendee, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-[#8FA98F]/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium text-[#4A5D4B]">
                    Asistente {index + 1}
                  </span>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeAttendee(index)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#4A5D4B] mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      value={attendee.name}
                      onChange={(e) =>
                        updateAttendee(index, "name", e.target.value)
                      }
                      className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A5D4B] mb-2">
                      Restricciones alimentarias
                    </label>
                    <input
                      type="text"
                      value={attendee.dietaryRestrictions || ""}
                      onChange={(e) =>
                        updateAttendee(
                          index,
                          "dietaryRestrictions",
                          e.target.value
                        )
                      }
                      placeholder="Vegetariano, vegano, alergias, etc."
                      className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A5D4B] mb-2">
                      Edad
                    </label>
                    <input
                      type="number"
                      min="0"
                      max="120"
                      value={attendee.age || ""}
                      onChange={(e) =>
                        updateAttendee(
                          index,
                          "age",
                          parseInt(e.target.value, 10)
                        )
                      }
                      className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="details"
          className="block text-sm font-medium text-[#4A5D4B] mb-2"
        >
          Detalles adicionales
        </label>
        <textarea
          id="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-[#8FA98F] focus:outline-none focus:ring-2 focus:ring-[#4A5D4B]"
          rows={3}
          disabled={isSubmitting}
          placeholder="¿Algo más que debamos saber?"
        />
      </div>

      {status.message && (
        <div
          className={`p-3 rounded-md text-center ${
            status.type === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !attendance}
        className="w-full py-3 bg-[#4A5D4B] text-white rounded-md hover:bg-[#3A4D3B] hover:-translate-y-0.5 transition-all font-semibold tracking-wide text-sm disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>ENVIANDO...</span>
          </>
        ) : (
          "ENVIAR"
        )}
      </button>
    </form>
  );
}
