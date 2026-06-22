/**
 * Utility for generating high-conversion WhatsApp wa.me links
 * for City View Guest House.
 */

export interface BookingDetails {
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  customMessage?: string;
  pageContext?: string;
}

// Default phone number for City View Guest House in Harare, Zimbabwe (e.g. +263)
// Let's use a standard Zimbabwean business number format or an easily configurable one.
export const WHATSAPP_PHONE_NUMBER = "+263772123456"; // Harare, Zimbabwe

/**
 * Generates an elegant WhatsApp dynamic chat link with a personalized pre-filled message
 * @param details BookingDetails configuration
 * @returns Fully formatted wa.me URL
 */
export function generateWhatsAppLink(details: BookingDetails = {}): string {
  const basePhone = WHATSAPP_PHONE_NUMBER.replace(/[^0-9]/g, "");
  
  let text = "Hello City View Guest House, ";

  if (details.customMessage) {
    text += details.customMessage;
  } else if (details.roomName) {
    text += `I am interested in booking the *${details.roomName}*. Could you please check availability?`;
  } else {
    text += "I would like to inquire about accommodation availability at your beautiful guest house in Braeside.";
  }

  // Append structured particulars if check-in or check-out is set
  if (details.checkIn || details.checkOut || details.guests) {
    text += "\n\n📋 *My Booking Draft:*";
    if (details.roomName) text += `\n• *Room:* ${details.roomName}`;
    if (details.checkIn) text += `\n• *Check-in Date:* ${details.checkIn}`;
    if (details.checkOut) text += `\n• *Check-out Date:* ${details.checkOut}`;
    if (details.guests) text += `\n• *Guests:* ${details.guests}`;
    text += "\n\nKindly let me know the rates and if these dates are open.";
  }

  if (details.pageContext) {
    text += `\n\n_(Inquiry from: ${details.pageContext})_`;
  }

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${basePhone}?text=${encodedText}`;
}
