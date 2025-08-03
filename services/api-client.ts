import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios"

class ApiClient {
  private static instance: ApiClient
  private axiosInstance: AxiosInstance


  private constructor() {

    // Create axios instance with default config
    this.axiosInstance = axios.create({
      baseURL: "https://api.emailjs.com/api/v1.0/email",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      //timeout: 30000, // 30 seconds //TODO:: have to be define in env
    })


    // Response interceptor for handling common errors
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Handle specific error codes
        if (error.response) {

            console.error("Access denied: You do not have permission to access this resource");
            
        } else if (error.request) {
          // Network error
          console.error("Network error: Please check your connection", error)
        }

        return Promise.reject(error)
      },
    )
  }

  // Singleton pattern to get the API client instance
  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }

  // Generic POST request
  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config);
    console.log(`POST ${url}`, response);
    return response.data;
  }

}

// Export a singleton instance
export const apiClient = ApiClient.getInstance();


