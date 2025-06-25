import React, { useState } from "react";

function SurveyForm() {
  const questions = [
    {
      id: 1,
      key: "reading",
      text: "1. 하루에 얼마나 자주 독서를 하나요?",
      options: ["전혀 안 함", "가끔", "보통", "자주", "매우 자주"],
    },
    {
      id: 2,
      key: "sns",
      text: "2. SNS를 얼마나 자주 사용하나요?",
      options: ["전혀 안 함", "가끔", "보통", "자주", "매우 자주"],
    },
    {
      id: 3,
      key: "exercise",
      text: "3. 운동을 얼마나 자주 하나요?",
      options: ["전혀 안 함", "가끔", "보통", "자주", "매우 자주"],
    },
  ];

  const [answers, setAnswers] = useState({});

  const handleChange = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jsonPayload = JSON.stringify(answers);
    console.log("전송할 JSON:", jsonPayload);

    try {
      const response = await fetch("http://54.180.175.139:9131/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonPayload,
      });

      if (response.ok) {
        alert("설문이 성공적으로 전송되었습니다!");
      } else {
        alert("서버 오류 발생");
      }
    } catch (err) {
      alert("네트워크 오류: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.options.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={q.key}
                value={option}
                checked={answers[q.key] === option}
                onChange={() => handleChange(q.key, option)}
                required
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button type="submit">제출</button>
    </form>
  );
}

export default SurveyForm;
