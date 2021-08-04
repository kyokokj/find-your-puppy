const DEFAULT_API_LOCALHOST = "http://localhost:3000/api/v1";

export const breedersIndex = `${DEFAULT_API_LOCALHOST}/breeders`;
export const dogsIndex = (breederId) =>
  `${DEFAULT_API_LOCALHOST}/breeders/${breederId}/dogs`;
