const parentEl = document.querySelector(".agents-container");

const fetchAgents = async function () {
  try {
    const res = await fetch("https://valorant-api.com/v1/agents");
    const data = await res.json();

    data.data.forEach((agent) => {
      const cardAgent = `
    <div class="agent">
        <div class="img">
          <img
            src="${
              !agent.fullPortrait
                ? "https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif"
                : agent.fullPortrait
            }"
            alt="agent-potrait"
          />
        </div>
        <div class="description">
          <h1>${agent.displayName}</h1>
          <p>
            ${agent.description}
          </p>

          <a href="#" class="btn">Learn More</a>
        </div>
    </div>
    `;

      parentEl.insertAdjacentHTML("afterbegin", cardAgent);
    });
  } catch (err) {
    throw new Error(err);
  }
};

fetchAgents();
