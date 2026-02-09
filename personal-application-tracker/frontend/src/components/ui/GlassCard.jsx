const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/40 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
