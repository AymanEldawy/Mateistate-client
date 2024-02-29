const account = {
  final_id: null,
  name: undefined,
  note: undefined,
  number: undefined,
  parent_id: null,
  type: 1,
};
const RESET_FIELDS = {
  account
};

export function getResetFields(name) {
  console.log("🚀 ~ getResetFields ~ name:", name)
  return RESET_FIELDS[name] || {};
}
