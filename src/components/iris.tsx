import { useEffect } from "react";

export function Iris() {
  useEffect(() => {
    if (!(window as any).watsonAssistantChatOptions) {
      (window as any).watsonAssistantChatOptions = {
        integrationID: "85523669-731e-4fa1-8033-7e8f4c59fbd5",
        region: "au-syd",
        serviceInstanceID: "b827436c-7c7f-4734-be78-7595459ac7ae",
        onLoad: async (instance: any) => {
          await instance.updateLocale("pt-br");
          await instance.render();
        },
      };
    }

    if (!document.getElementById("watson-chat-script")) {
      const script = document.createElement("script");
      script.id = "watson-chat-script";
      script.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        ((window as any).watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
