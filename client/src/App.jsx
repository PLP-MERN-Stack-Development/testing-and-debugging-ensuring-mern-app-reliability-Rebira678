import React from "react";
import BugForm from "./components/BugForm";
import BugList from "./components/BugList";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bug Tracker</h1>
      <BugForm />
      <BugList />
    </div>
  );
}
