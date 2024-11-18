import apiClient from './apiClient';
import API_ENDPOINTS from './apiUrls';


// Fetch active sessions (no parameters required)
export const fetchActiveSessions = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.ActiveSessions);
    return response.data;
  } catch (error) {
    console.error('Error fetching active sessions:', error);
    throw error;
  }
};

// Fetch product claim status with a dynamic `status` parameter
export const fetchProductClaimStatus = async (status) => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.ProductClaimStatus(status));
    return response.data;
  } catch (error) {
    console.error('Error fetching product claim status:', error);
    throw error;
  }
};

// Update product claim status with dynamic `claimId` and `status` parameters
export const updateProductClaimStatus = async (claimId, status, payload) => {
  try {
    const response = await apiClient.put(
      API_ENDPOINTS.ProductClaimUpdate(claimId, status),
      payload
    );
    return response.data;
  } catch (error) {
    console.error('Error updating product claim status:', error);
    throw error;
  }
};
