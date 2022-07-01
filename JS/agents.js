const fetchAgents = async function () {
  try {
    const res = await fetch("https://valorant-api.com/v1/agents");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchAgents();
