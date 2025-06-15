const tips = [
  "Confirma tu asistencia lo antes posible",
  "Porfavor, se agradece puntualidad",
  "Queremos que disfrutes al máximo de esta fiesta, por eso hemos decidido que solo vengan los niños de la familia",
  "Olvidaros de todo y ¡¡¡a disfrutar!!!",
];

export function TipsList() {
  return (
    <ul className="space-y-4">
      {tips.map((tip, index) => (
        <li
          key={index}
          className="pb-4 border-b border-[#E5E5E5] last:border-0 animate-fade-in-up flex items-start"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#4A5D4B] mt-[0.6rem] mr-3" />
          <p className="text-[#4A4A4A] leading-relaxed flex-1">{tip}</p>
        </li>
      ))}
    </ul>
  );
}
