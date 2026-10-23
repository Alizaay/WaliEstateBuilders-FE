import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../config/site';

const WhatsAppButton = ({
  label = 'WhatsApp',
  message,
  className = '',
  variant = 'default',
}) => {
  const href = message
    ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_URL;

  const base =
    variant === 'floating'
      ? 'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe57]'
      : variant === 'outline'
        ? 'inline-flex items-center gap-2 border border-[#25D366] px-4 py-2.5 text-sm font-medium text-[#128C7E] transition hover:bg-[#25D366]/hover:text-white'
        : 'inline-flex items-center gap-2 bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className={variant === 'floating' ? 'h-6 w-6' : 'h-4 w-4'} />
      {variant !== 'floating' && <span>{label}</span>}
    </a>
  );
};

export default WhatsAppButton;
