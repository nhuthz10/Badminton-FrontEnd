import HashLoader from "react-spinners/HashLoader";
import "./Loading.scss";
import { useEffect } from "react";

const Loading = ({ children, loading, style, type }) => {
  useEffect(() => {
    if (loading) {
      window.scrollTo({
        top:
          type === "admin"
            ? document.documentElement.scrollHeight / 2 - window.innerHeight / 2
            : 0,
        behavior: "smooth",
      });
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [loading, type]);
  return (
    <div
      className="loading-container"
      style={{
        position: "relative",
        height: type === "product" ? "100vh" : "",
        ...style,
      }}
    >
      {loading && (
        <div
          className="loading-overlay"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: "9999",
            background: "rgba(255, 255, 255, 0.4)",
          }}
        >
          <HashLoader
            color="#FF8080"
            size="100px"
            speedMultiplier={1.5}
            loading={true}
            cssOverride={{
              position: "absolute",
              top: "50%",
              right: "50%",
              transform: "translate(50%, -50%)",
            }}
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default Loading;
