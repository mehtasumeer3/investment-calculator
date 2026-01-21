export default function UserInput({ onHandleChange, OnUserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            id="user-input-placeholder"
            placeholder="0"
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

            placeholder="0"
            // value={OnUserInput.annualInvestment}
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
            placeholder="0"
            // value={OnUserInput.expectedReturn}
            onChange={(event) =>
              onHandleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration (no. of years)</label>
          <input
            type="number"
            required
            placeholder="0"
            // value={OnUserInput.duration}
            onChange={(event) => onHandleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
