let data = [
  {
    name: "Menu 1",
    link: "http://google.com",
    subitems: [{ name: "Menu 2", link: "http://google.com" }],
  },
  {
    name: "Menu 3",
    link: "http://google.com",
    subitems: [
      {
        name: "Menu 3",
        link: "http://google.com",
        subitems: [
          {
            name: "Menu 4",
            link: "http://google.com",
            subitems: [
              { name: "Menu 5", link: "http://google.com" },
              { name: "Menu 6", link: "http://google.com" },
            ],
          },
        ],
      },
    ],
  },
];

function recursion1(arr) {
  arr.forEach((val) => {
    for (let [key, value] of Object.entries(val)) {
      if (key === "subitems") {
        recursion1(value);
      } else {
        console.log(value);
      }
    }
  });
}

recursion1(data);
