// TYPES Alias

// type Sushi = {
//   calories: number;
//   salty: boolean;
//   tasty: boolean;
// };

// type Cake = {
//   calories: number;
//   sweet: boolean;
//   tasty: boolean;
// };

// 👆 gets transformed into 👇

type Food = {
  calories: number;
  tasty: boolean;
};

type Sushi = Food & {
  salty: boolean;
};

type Cake = Food & {
  sweet: boolean;
};

// INTERFACES

// interface iSushi {
//   calories: number;
//   salty: boolean;
//   tasty: boolean;
// };

// interface iCake {
//   calories: number;
//   sweet: boolean;
//   tasty: boolean;
// };

// 👆 gets transformed into 👇

interface iFood {
  calories: number;
  tasty: boolean;
}

interface iSushi extends iFood {
  salty: boolean;
}

interface iCake extends iFood {
  sweet: boolean;
}
