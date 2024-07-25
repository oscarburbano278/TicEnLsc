import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { useLocation } from 'react-router-dom';
import "./App.css";

const EnviarAudio = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'Usuario' };
  const [messages, setMessages] = useState([]);
  const headerStyle = {
    background: "#4BBBFB",
    padding: "20px",
    color: "white",
  };

  useEffect(() => {
    const socket = io("http://127.0.0.1:5000");
    let isSender = true;

    socket.on("message", function (msg) {
      setMessages((prevMessages) => {
        // Verificar si el mensaje ya existe para evitar duplicados
        if (prevMessages.some(message => message.text === msg)) {
          return prevMessages;
        }
        return [...prevMessages, { text: msg, sender: isSender }];
      });
      isSender = !isSender; // Alternar entre emisor y receptor
    });

    let mediaRecorder;
    let audioChunks = [];
    const recordButton = document.getElementById("record");
    const loadingIndicator = document.getElementById("loading");

    const handleMouseDown = () => {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        mediaRecorder.addEventListener("dataavailable", (event) => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks);
          const formData = new FormData();
          formData.append("audio", audioBlob);

          fetch("http://127.0.0.1:5000/transcribe", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data.text);
              socket.send(data.text); // Enviar el texto transcrito al chat
              loadingIndicator.style.display = "none";
              recordButton.disabled = false;
            });

          audioChunks = [];
        });
      });
    };

    const handleMouseUp = () => {
      if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        loadingIndicator.style.display = "block";
        recordButton.disabled = true;
      }
    };

    recordButton.addEventListener("mousedown", handleMouseDown);
    recordButton.addEventListener("mouseup", handleMouseUp);

    return () => {
      recordButton.removeEventListener("mousedown", handleMouseDown);
      recordButton.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const chatContainer = document.getElementById("chat");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div id="chat-container">
      <div className="profile-container">
        <img src="user.png" alt="imguser" className="imagUser" />
        <label className="chat-name-label">{name}</label>
      </div>
      <div id="chat" className="chat">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender ? "sender" : "receiver"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div id="record-container">
        <button id="record">
          <i className="fas fa-microphone"></i>
        </button>
        <div id="loading" style={{ display: "none" }}>
          Loading...
        </div>
      </div>
    </div>
  );
};

export default EnviarAudio;