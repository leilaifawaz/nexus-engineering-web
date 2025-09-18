import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  serviceType: string;
  projectDetails: string;
}

export interface EmailParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  company: string;
  service_type: string;
  message: string;
  to_name: string;
}

// Initialize EmailJS
export const initEmailJS = () => {
  if (!EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS public key is not configured');
  }
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Send contact form email
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  // Validate environment variables
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error('EmailJS configuration is incomplete. Please check environment variables.');
  }

  // Initialize EmailJS if not already done
  initEmailJS();

  const templateParams: EmailParams = {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    company: formData.company || 'Not specified',
    service_type: formData.serviceType,
    message: formData.projectDetails,
    to_name: 'eMobility Nexus Engineering Team',
  };

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error(`EmailJS failed with status: ${response.status}`);
    }

    // Return void as specified by the function signature
    return;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

// Alternative: Simple mailto fallback
export const openMailtoFallback = (formData: ContactFormData): void => {
  const subject = encodeURIComponent(`Contact Form Submission - ${formData.serviceType}`);
  const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Service Type: ${formData.serviceType}

Project Details:
${formData.projectDetails}
  `);

  const mailtoLink = `mailto:ramez-haidar@emobilitynexus.com?subject=${subject}&body=${body}`;
  window.open(mailtoLink, '_blank');
};
