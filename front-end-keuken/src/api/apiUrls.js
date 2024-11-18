const API_BASE_URL = 'https://localhost:7110/Api/';

export const API_ENDPOINTS = {
  ActiveSessions: `${API_BASE_URL}Session/Active`,
  
  // Function to dynamically generate URL for ProductClaimStatus
  ProductClaimStatus: (status) => `${API_BASE_URL}ProductClaim/Status/${status}`,
  
  // Function to dynamically generate URL for ProductClaimUpdate
  ProductClaimUpdate: (claimId, status) =>
    `${API_BASE_URL}ProductClaim/${claimId}/${status}`,
};

export default API_ENDPOINTS;
