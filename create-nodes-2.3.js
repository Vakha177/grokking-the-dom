const string = [
    {
      name: "Google",
      url: "https://google.com",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
    },
    {
      name: "intocode",
      url: "https://intocode.ru",
    },
  ];
  function render(string) {
    const ul = document.createElement("ul");
    document.body.append(ul);
    for (let i = 0; i < string.length; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = string[i].url;
      a.textContent = string[i].name;
      li.append(a);
      ul.append(li);
    }
  }
  render(string);