export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Beige",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 To ₹399" },
      { value: "399-999", label: "₹399 To ₹999" },
      { value: "999-1999", label: "₹999 To ₹1999" },
      { value: "1999-2999", label: "₹1999 To ₹2999" },
      { value: "3999-4999", label: "₹3999 To ₹4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      {
        value: "10",
        label: "10% AND Above",
      },
      {
        value: "20",
        label: "20% AND Above",
      },
      {
        value: "30",
        label: "30% AND Above",
      },
      {
        value: "40",
        label: "40% AND Above",
      },
      {
        value: "50",
        label: "50% AND Above",
      },
      {
        value: "60",
        label: "60% AND Above",
      },
      {
        value: "70",
        label: "70% AND Above",
      },
      {
        value: "80",
        label: "80% AND Above",
      },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in-stock", label: "In Stock" },
      { value: "out-of-stock", label: "Out Of Stock" },
    ],
  },
];

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
