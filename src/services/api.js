// Example of an asynchronous listener
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "ASYNC_REQUEST") {
    // Indicate that the response will be sent asynchronously
    return new Promise((resolve) => {
      // Simulate an asynchronous operation
      setTimeout(() => {
        sendResponse({ data: "Async response data" });
        resolve(true);
      }, 1000);
    });
  }
  // Return false to indicate no asynchronous response
  return false;
});
