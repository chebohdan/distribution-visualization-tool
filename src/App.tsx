// React
import { useEffect, useState } from "react";

// Styles
import "./App.css";

// Components
import { DataVisualizer } from "./components/DataVisualizer";

//types
import type { Question } from "./types";

// Api
import { getQuestions } from "./api/questionService";
import Loading from "./components/Loading/Loading";

function App() {
  // -------------------------------
  // Component State
  // -------------------------------
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);

  // -------------------------------
  // UseEffect
  // -------------------------------

  useEffect(() => {
    setLoading(true);
    getQuestions(50)
      .then((data: Question[]) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-950">
      <DataVisualizer
        data={questions}
        distributionBy={["category", "difficulty"]}
        filterBy={"category"}
      />
    </div>
  );
}

export default App;
