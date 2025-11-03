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
import { getFlatRecords } from "./helpers/objectUtils";

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
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  const flatQuestion = getFlatRecords(questions);

  return (
    <div className="bg-gray-950">
      <DataVisualizer
        data={flatQuestion}
        distributionBy={["category", "region", "year"]}
        filterBy="region"
      />
    </div>
  );
}

export default App;
