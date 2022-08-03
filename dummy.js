console.log("dummy");

let d = document.getElementById("display");

let fetching = async () => {
  let response = await fetch(
    "https://627f71ccbe1ccb0a465fd36c.mockapi.io/movieAPI",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Rayappan", movie: "Bigil" }),
    }
  );
  let data = await response.json();

  d.innerText = data[1].name;

  console.log("fetched data=", data);
};
fetching();
