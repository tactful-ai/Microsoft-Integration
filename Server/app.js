const axios = require("axios"); // Import the 'axios' library
//!Login Token
//!Authonticate Token
//!Get Access Token
//!Refresh Token

const accessToken =
  "eyJ0eXAiOiJKV1QiLCJub25jZSI6IklQYjVyQ0NVQXVkbHllQXcybnhqdEZNRzBESXQwaEdrM2pRei1jcU0wdlkiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lYWY2MjRjOC1hMGM0LTQxOTUtODdkMi00NDNlNWQ3NTE2Y2QvIiwiaWF0IjoxNjkyMDk4NDQxLCJuYmYiOjE2OTIwOTg0NDEsImV4cCI6MTY5MjE4NTE0MSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQVlFWGRXNHdIQ3lnVDNXbWFRR1VkS3NnRHpjQkhJcDc0eERDamN2eG9idHZ5YzJYcFZtNU4rUkl4aHJWcHE0cUkiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkFsZXgiLCJnaXZlbl9uYW1lIjoiU2NpIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTU2LjE5Mi4xMzYuMjQ4IiwibmFtZSI6Ik9tYXIgQW5hbiBBYmVkIEF3YWQgTW9oYW1tZWQgQWJ1IFJvbWlhaCIsIm9pZCI6IjA1YjZjMjllLTY0ZGYtNGMwNS04MjMzLTBlNDQ4ZGQ3NjkzMiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMDdENzc3Rjc2IiwicmgiOiIwLkFUb0F5Q1QyNnNTZ2xVR0gwa1EtWFhVV3pRTUFBQUFBQUFBQXdBQUFBQUFBQUFBNkFCUS4iLCJzY3AiOiJBY3JvbnltLlJlYWQuQWxsIEJvb2ttYXJrLlJlYWQuQWxsIENhbGVuZGFycy5SZWFkIENoYW5uZWxNZXNzYWdlLkVkaXQgQ2hhbm5lbE1lc3NhZ2UuU2VuZCBDaGF0LkNyZWF0ZSBDaGF0LlJlYWQgQ2hhdC5SZWFkQmFzaWMgQ2hhdC5SZWFkV3JpdGUgQ2hhdE1lc3NhZ2UuUmVhZCBDaGF0TWVzc2FnZS5TZW5kIEZpbGVzLlJlYWQuQWxsIE1haWwuUmVhZCBNYWlsLlNlbmQgb3BlbmlkIHByb2ZpbGUgUW5BLlJlYWQuQWxsIFNpdGVzLlJlYWQuQWxsIFRlYW0uQ3JlYXRlIFVzZXIuUmVhZCBVc2VyLlJlYWRCYXNpYy5BbGwgVXNlci5SZWFkV3JpdGUgZW1haWwiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJSd3gtNWM1V3BaMVBwWFd3X1FBSWRNQTJ0ajU5ZjkzdENDM3RRY0NCZG80IiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFGIiwidGlkIjoiZWFmNjI0YzgtYTBjNC00MTk1LTg3ZDItNDQzZTVkNzUxNmNkIiwidW5pcXVlX25hbWUiOiJzaW0ub21hcmFuYW4zMDgxQGFsZXh1LmVkdS5lZyIsInVwbiI6InNpbS5vbWFyYW5hbjMwODFAYWxleHUuZWR1LmVnIiwidXRpIjoiTUNVLWY5ejYzMHlMZjZVRDVncHBBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3NzbSI6IjEiLCJ4bXNfc3QiOnsic3ViIjoicEFTYWd1SFlJbVg2d0pOc29KMXM3aWhKSUtwNHBLNGQxemUtbUEybE9kQSJ9LCJ4bXNfdGNkdCI6MTM2MTcxMDA5OH0.TVsEJ09_s-OwaoOIl3dwWF9R2MNQLTwWjJZcMbq5IJ4U9UYVKofw4Wsi95lWBxFNwxddRQS_a3qOHA7bmPNv0669-2S62NqE9wEQEufAskhGfKAfxzl3pwCyj_k-DgV7i_iXHZr3qWaK37q1hG3CxZgZCYFt2pXQFreirk7iSNqeeoqD1sCXF10li7_TsGSsAvmfmJ7XIF_04T3lNm3oEKkiluHRmPk-1K639E6ocKeFze37Tehm6sZ8PvGmb1PX2nnee-f2Ovl32TKAx9pz3el93q_DZ-qWIryEOirGxXgIN0ojSLRkA_hQlvi1Zl03P5rKfy-wX1nBEss0jiNr5w"; // Replace with your access token

// const searchRequestBody = {
//   requests: [
//     {
//       entityTypes: ["chatMessage"],
//       query: {
//         queryString: "helllo",
//       },
//     },
//   ],
// };

// const searchChatMessages = async () => {
//   try {
//     const response = await axios.post(
//       "https://graph.microsoft.com/beta/search/microsoft.graph.query",
//       searchRequestBody,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.status === 200) {
//       const responseData = response.data;
//       const chatMessages = responseData.value;
//       return chatMessages;
//     } else {
//       console.error("Error searching chat messages:", response.statusText);
//       return [];
//     }
//   } catch (error) {
//     console.error("Error searching chat messages:", error);
//     return [];
//   }
// };

// const searchQuery = "Hello";
const fetchAllMessages = async () => {
  const chatEndpoint =
    "https://graph.microsoft.com/beta/chats/19:uni01_tcy3xfktmzpebrha5hqua34tpfnuuey3je6q26zkbbtzi5k4dasq@thread.v2/messages";

  let allMessages = [];

  let pageUrl = chatEndpoint;
  while (pageUrl) {
    try {
      const response = await axios.get(pageUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const responseData = response.data;
        const messages = responseData.value.filter(
          (message) => message.body.content.trim() !== "" // Filter out empty messages
        );
        allMessages = allMessages.concat(messages);

        // Check if there are more pages
        pageUrl = responseData["@odata.nextLink"];
      } else {
        console.error("Error fetching messages:", response.statusText);
        break;
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      break;
    }
  }

  return allMessages;
};

(async () => {
  const messages = await fetchAllMessages();

  console.log("Fetched Messages:");
  messages.forEach((message) => {
    const sender =
      message.from && message.from.user
        ? message.from.user.displayName
        : "System";
    console.log(`${sender}: ${message.body.content}`);
  });
})();

// (async () => {
//   const chatMessages = await searchChatMessages();

//   console.log("Searched Chat Messages:");
//   chatMessages.forEach((chatMessage) => {
//     const sender = chatMessage.from.user.displayName || "System";
//     console.log(`${sender}: ${chatMessage.body.content}`);
//   });
// })();
