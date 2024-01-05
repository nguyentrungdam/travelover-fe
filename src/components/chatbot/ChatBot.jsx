import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ChatBot = () => {
  const location = useLocation();
  //id knowledge : NzA4MDQ1MzU2MTEzMzMwMTc2
  useEffect(() => {
    const isHomePage =
      location.pathname === "/" || location.pathname === "/home";

    if (isHomePage) {
      const hasKommunicateScript = localStorage.getItem("hasKommunicateScript");
      console.log(hasKommunicateScript);
      if (!hasKommunicateScript) {
        (function (d, m) {
          var kommunicateSettings = {
            appId: "3fe27b00b54408e2e691f4d3f60141a7f",
            popupWidget: true,
            automaticChatOpenOnNavigation: true,
          };
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
          var h = document.getElementsByTagName("head")[0];
          h.appendChild(s);
          window.kommunicate = m;
          m._globals = kommunicateSettings;

          // Đánh dấu rằng script đã được tải
          localStorage.setItem("hasKommunicateScript", "true");
        })(document, window.kommunicate || {});
      }
    }
    // Xử lý khi trang được tải lại
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location.pathname]);

  const handleBeforeUnload = () => {
    // Xóa trạng thái đã tải script khi trang tải lại
    localStorage.removeItem("hasKommunicateScript");
  };

  return <div></div>;
};

export default ChatBot;
