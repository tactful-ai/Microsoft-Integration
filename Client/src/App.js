import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [messages, setMessages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJub25jZSI6IklQYjVyQ0NVQXVkbHllQXcybnhqdEZNRzBESXQwaEdrM2pRei1jcU0wdlkiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lYWY2MjRjOC1hMGM0LTQxOTUtODdkMi00NDNlNWQ3NTE2Y2QvIiwiaWF0IjoxNjkyMDk4NDQxLCJuYmYiOjE2OTIwOTg0NDEsImV4cCI6MTY5MjE4NTE0MSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhVQUFBQVlFWGRXNHdIQ3lnVDNXbWFRR1VkS3NnRHpjQkhJcDc0eERDamN2eG9idHZ5YzJYcFZtNU4rUkl4aHJWcHE0cUkiLCJhbXIiOlsicHdkIl0sImFwcF9kaXNwbGF5bmFtZSI6IkdyYXBoIEV4cGxvcmVyIiwiYXBwaWQiOiJkZThiYzhiNS1kOWY5LTQ4YjEtYThhZC1iNzQ4ZGE3MjUwNjQiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IkFsZXgiLCJnaXZlbl9uYW1lIjoiU2NpIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTU2LjE5Mi4xMzYuMjQ4IiwibmFtZSI6Ik9tYXIgQW5hbiBBYmVkIEF3YWQgTW9oYW1tZWQgQWJ1IFJvbWlhaCIsIm9pZCI6IjA1YjZjMjllLTY0ZGYtNGMwNS04MjMzLTBlNDQ4ZGQ3NjkzMiIsInBsYXRmIjoiMyIsInB1aWQiOiIxMDAzMjAwMDdENzc3Rjc2IiwicmgiOiIwLkFUb0F5Q1QyNnNTZ2xVR0gwa1EtWFhVV3pRTUFBQUFBQUFBQXdBQUFBQUFBQUFBNkFCUS4iLCJzY3AiOiJBY3JvbnltLlJlYWQuQWxsIEJvb2ttYXJrLlJlYWQuQWxsIENhbGVuZGFycy5SZWFkIENoYW5uZWxNZXNzYWdlLkVkaXQgQ2hhbm5lbE1lc3NhZ2UuU2VuZCBDaGF0LkNyZWF0ZSBDaGF0LlJlYWQgQ2hhdC5SZWFkQmFzaWMgQ2hhdC5SZWFkV3JpdGUgQ2hhdE1lc3NhZ2UuUmVhZCBDaGF0TWVzc2FnZS5TZW5kIEZpbGVzLlJlYWQuQWxsIE1haWwuUmVhZCBNYWlsLlNlbmQgb3BlbmlkIHByb2ZpbGUgUW5BLlJlYWQuQWxsIFNpdGVzLlJlYWQuQWxsIFRlYW0uQ3JlYXRlIFVzZXIuUmVhZCBVc2VyLlJlYWRCYXNpYy5BbGwgVXNlci5SZWFkV3JpdGUgZW1haWwiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJSd3gtNWM1V3BaMVBwWFd3X1FBSWRNQTJ0ajU5ZjkzdENDM3RRY0NCZG80IiwidGVuYW50X3JlZ2lvbl9zY29wZSI6IkFGIiwidGlkIjoiZWFmNjI0YzgtYTBjNC00MTk1LTg3ZDItNDQzZTVkNzUxNmNkIiwidW5pcXVlX25hbWUiOiJzaW0ub21hcmFuYW4zMDgxQGFsZXh1LmVkdS5lZyIsInVwbiI6InNpbS5vbWFyYW5hbjMwODFAYWxleHUuZWR1LmVnIiwidXRpIjoiTUNVLWY5ejYzMHlMZjZVRDVncHBBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19jYyI6WyJDUDEiXSwieG1zX3NzbSI6IjEiLCJ4bXNfc3QiOnsic3ViIjoicEFTYWd1SFlJbVg2d0pOc29KMXM3aWhKSUtwNHBLNGQxemUtbUEybE9kQSJ9LCJ4bXNfdGNkdCI6MTM2MTcxMDA5OH0.TVsEJ09_s-OwaoOIl3dwWF9R2MNQLTwWjJZcMbq5IJ4U9UYVKofw4Wsi95lWBxFNwxddRQS_a3qOHA7bmPNv0669-2S62NqE9wEQEufAskhGfKAfxzl3pwCyj_k-DgV7i_iXHZr3qWaK37q1hG3CxZgZCYFt2pXQFreirk7iSNqeeoqD1sCXF10li7_TsGSsAvmfmJ7XIF_04T3lNm3oEKkiluHRmPk-1K639E6ocKeFze37Tehm6sZ8PvGmb1PX2nnee-f2Ovl32TKAx9pz3el93q_DZ-qWIryEOirGxXgIN0ojSLRkA_hQlvi1Zl03P5rKfy-wX1nBEss0jiNr5w"; // Replace with your access token

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSendMessage = async () => {
    const endpoint =
      "https://graph.microsoft.com/v1.0/teams/a2f52a98-83f9-427a-b92e-1567625389a2/channels/19%3a20ea48b5258c47f98a2b0ea1578ab5a8%40thread.tacv2/messages";

    const headers = new Headers({
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    });

    const body = JSON.stringify({
      body: {
        content: message,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: body,
    };

    try {
      const response = await fetch(endpoint, requestOptions);
      if (response.ok) {
        alert("Message sent successfully.");
        console.log("Message sent successfully.");
      } else {
        console.error("Error sending message:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleSendMessageChat = async () => {
    //const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your access token
    const endpoint =
      "https://graph.microsoft.com/beta/chats/19:uni01_tcy3xfktmzpebrha5hqua34tpfnuuey3je6q26zkbbtzi5k4dasq@thread.v2/messages";

    const headers = new Headers({
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    });

    const messageContent = "Hello World From Anan From OUTSIDE THE WORLD 2";

    const body = JSON.stringify({
      body: {
        content: messageContent,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: body,
    };

    try {
      const response = await fetch(endpoint, requestOptions);
      if (response.ok) {
        alert("Message sent successfully.");
        console.log("Message sent successfully.");
      } else {
        console.error("Error sending message:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const handleMessageChangeChat = (e) => {
    setMessage2(e.target.value);
  };
  const fetchAllMessages = async () => {
    const chatEndpoint =
      "https://graph.microsoft.com/beta/chats/19:uni01_tcy3xfktmzpebrha5hqua34tpfnuuey3je6q26zkbbtzi5k4dasq@thread.v2/messages";

    const allMessages = [];

    let nextPageUrl = chatEndpoint;

    while (nextPageUrl) {
      try {
        const response = await fetch(nextPageUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          allMessages.push(...data.value);
          nextPageUrl = data["@odata.nextLink"];
        } else {
          console.error("Error fetching messages:", response.statusText);
          break;
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
        break;
      }
    }

    setMessages(allMessages);
  };

  useEffect(() => {
    fetchAllMessages();
  }, []); // Fetch messages once when component mounts
  const saveMessagesToFile = () => {
    const messagesToSave = messages.map((message) => ({
      id: message.id,
      sender:
        message.from && message.from.user
          ? message.from.user.displayName
          : "System",
      content: message.body.content,
    }));

    const jsonData = JSON.stringify(messagesToSave, null, 2);

    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "messages.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <h1>Welcome To ANAN's Integration</h1>
      <h2>POST MESSAGE TO THE CHANNEL</h2>
      <div className="message-input">
        <textarea
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div className="message-input">
        <h2>POST MESSAGE TO THE CHAT</h2>
        <textarea
          placeholder="Type your message..."
          value={message2}
          onChange={handleMessageChangeChat}
        />
        <button onClick={handleSendMessageChat}>Send</button>
      </div>
      <div className="message-list-container">
        <div className="message-list">
          <h2>GET ALL THE MESSAGES FROM CHAT</h2>
          {messages
            .filter((message) => message.body.content.trim() !== "")
            .map((message) => (
              <div key={message.id} className="message">
                <strong>
                  {message.from && message.from.user
                    ? message.from.user.displayName
                    : "System"}{" "}
                </strong>
                : {message.body.content}
              </div>
            ))}
        </div>
      </div>

      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button onClick={saveMessagesToFile}>Save Messages to JSON</button>
    </div>
  );
}

export default App;
