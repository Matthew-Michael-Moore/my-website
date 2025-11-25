"use client";

import { useState } from "react";
import { auth, googleProvider } from "../../firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Restrict to @pewaukeeschools.org
  const isValidDomain = (email: string) => {
    return email.toLowerCase().endsWith("@pewaukeeschools.org");
  };

  const handleEmailLogin = async () => {
    if (!isValidDomain(email)) {
      setError("Email must end in @pewaukeeschools.org");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (!isValidDomain(result.user.email || "")) {
        setError("Google account must end in @pewaukeeschools.org");
        return;
      }
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ff7f50",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 12,
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ marginBottom: 20 }}>Login</h1>

        {error && (
          <p style={{ color: "red", marginBottom: 10 }}>{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: 10, marginBottom: 20 }}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleEmailLogin}
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: "#ff7f50",
            border: "none",
            color: "white",
            borderRadius: 8,
            marginBottom: 10,
          }}
        >
          Login with Email
        </button>

        <button
          onClick={handleGoogleLogin}
          style={{
            width: "100%",
            padding: 12,
            backgroundColor: "#50d0ff",
            border: "none",
            color: "black",
            borderRadius: 8,
          }}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
