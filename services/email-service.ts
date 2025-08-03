import { apiClient } from "./api-client"

export const emailService = {
  /**
   * Sends an email using the EmailJS service.
   * @param {string} serviceId - The ID of the EmailJS service.
   * @param {string} templateId - The ID of the EmailJS template.
   * @param {object} formData - The data to be sent in the email.
   * @param {string} userId - The user ID for EmailJS authentication.
   * @returns {Promise<void>} A promise that resolves when the email is sent.
   */
  async sendEmail(serviceId: string, templateId: string, formData: object, userId: string, accessToken: string): Promise<void> {
    try {
      const response = await apiClient.post("/send", {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: formData,
        accessToken: accessToken,
      });

      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // Re-throw the error for further handling if needed
    }
  }

}
