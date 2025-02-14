// Example of an asynchronous function
export const asyncAuthFunction = async () => {
  try {
    const response = await fetch("/api/auth");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during authentication:", error);
    throw error;
  }
};
