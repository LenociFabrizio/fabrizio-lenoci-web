/**
 * Sfondo ambientale: due macchie di luce statiche e tenui.
 * Servono a dare materia al vetro (il backdrop-filter ha qualcosa da
 * sfocare) senza animazioni continue né costi di compositing a ogni frame.
 */
export default function GlowBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute -right-[30vw] -top-[20vh] h-[80vh] w-[90vw] rounded-full opacity-[0.22] blur-[80px]"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent 62%)",
        }}
      />
      <div
        className="absolute -bottom-[30vh] -left-[30vw] h-[70vh] w-[80vw] rounded-full opacity-[0.10] blur-[80px]"
        style={{
          background: "radial-gradient(circle, #f4f3f1, transparent 60%)",
        }}
      />
    </div>
  );
}
