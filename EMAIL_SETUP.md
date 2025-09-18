# Email Setup Instructions

The contact form is now fully functional and can send actual emails! Here's how to set it up:

## Option 1: EmailJS (Recommended)

EmailJS allows you to send emails directly from the frontend without needing a backend server.

### Setup Steps:

1. **Sign up for EmailJS**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account

2. **Create an Email Service**
   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.) # gmail
   - Follow the setup instructions for your provider # service_30yse5o

3. **Create an Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these variables in your template:
     ```
     From: {{from_name}} ({{from_email}})
     Company: {{company}}
     Service Type: {{service_type}}
     
     Message:
     {{message}}
     ```

4. **Get Your Credentials**
   - Service ID: Found in your Email Services section
   - Template ID: Found in your Email Templates section  
   - Public Key: Found in Account > API Keys

5. **Configure Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

6. **Test the Form**
   - Run `npm run dev`
   - Fill out and submit the contact form
   - Check your email for the message!

## Option 2: Fallback (Always Available)

If EmailJS fails or isn't configured, the form will automatically offer to open the user's default email client with a pre-filled message. This works without any configuration.

## Current Features

✅ **Form Validation**: All fields are validated with helpful error messages  
✅ **Loading States**: Shows loading spinner while sending  
✅ **Success Feedback**: Toast notification on successful submission  
✅ **Error Handling**: Graceful error handling with fallback options  
✅ **Email Integration**: Real email sending via EmailJS  
✅ **Fallback Option**: Opens email client if EmailJS fails  
✅ **Responsive Design**: Works on all device sizes  

## Testing

To test the email functionality:

1. **With EmailJS configured**: Messages will be sent to your configured email
2. **Without EmailJS**: The form will offer to open your email client
3. **Form validation**: Try submitting empty or invalid data to see validation in action

## Troubleshooting

- **Emails not sending**: Check your EmailJS credentials in the `.env` file
- **Template errors**: Ensure your EmailJS template uses the correct variable names
- **CORS errors**: Make sure your domain is allowed in EmailJS settings (for production)

The contact form is now production-ready! 🚀
