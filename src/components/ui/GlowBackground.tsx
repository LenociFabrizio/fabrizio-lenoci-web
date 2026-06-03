/**
 * Sfondo ambientale: tre orb glow soft-neon statici.
 *
 * Versione "performance-first": niente animazioni continue, niente parallasse.
 * Il blur su elementi grandi è naturalmente costoso, mantenerli statici
 * elimina del tutto il costo di compositing ad ogni frame.
 * L'estetica Gen X Soft Club resta intatta — gli orb sfocati funzionano
 * benissimo anche fermi, perché l'occhio li percepisce come atmosfera.
 */
export default function GlowBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute -left-32 -top-44 h-[500px] w-[500px] rounded-full opacity-50 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--lilac), transparent 65%)",
        }}
      />
      <div
        className="absolute -right-40 top-[18%] h-[460px] w-[460px] rounded-full opacity-35 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, var(--cyan), transparent 64%)",
        }}
      />
      <div
        className="absolute -bottom-52 left-[30%] h-[540px] w-[540px] rounded-full opacity-25 blur-[60px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--peach), transparent 66%)",
        }}
      />
    </div>
  );
}
