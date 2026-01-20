export default function UserInput({ onHandleChange, OnUserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={OnUserInput.initialInvestment}
            onChange={(event) =>
              onHandleChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={OnUserInput.annualInvestment}
            onChange={(event) =>
              onHandleChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={OnUserInput.expectedReturn}
            onChange={(event) =>
              onHandleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={OnUserInput.duration}
            onChange={(event) => onHandleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
