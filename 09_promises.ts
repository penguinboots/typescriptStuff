interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export const fetchLukeSkywalker = async (): Promise<LukeSkywalker> => {
  // type as promise
  const data = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json(); // async functions return promises
  });

  return data;
};

export const fetchLukeSkywalker2 = async () => {
  // type as promise
  const data: LukeSkywalker = await fetch(
    "https://swapi.dev/api/people/1"
  ).then((res) => {
    return res.json();
  });

  return data;
};

export const fetchLukeSkywalker3 = async () => {
  const data = await fetch( // data is any
    "https://swapi.dev/api/people/1"
  ).then((res) => {
    return res.json();
  });

  return data as LukeSkywalker; // cast data to LukeSkywalker
};
