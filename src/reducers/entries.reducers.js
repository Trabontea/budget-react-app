const entriesReducer = (state = initialEntries, action) => {
  console.log("action", action);
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    default:
      return state;
  }
};

const initialEntries = [
  {
    id: 1,
    description: "work income",
    value: 1000,
    isExpense: false,
  },
  {
    id: 2,
    description: "water bill",
    value: 20,
    isExpense: true,
  },
  {
    id: 3,
    description: "power bill",
    value: 40,
    isExpense: false,
  },
];

export default entriesReducer;
