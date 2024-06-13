import { SELECT_LISTS } from "./constants"

const contracts = [
  {
    label: "status",
    name: "status",
    key: "select",
    intValue: true,
    selectFirstAsDefault: true,
    list: SELECT_LISTS("contract_status"),
    required: false,
  },
  {
    label: "building_id",
    name: "building_id",
    type: "uuid",
    required: true,
    is_ref: true,
    ref_table: "building",
    hideAdd: true,
  },

]

const FILTERS = {
contracts,
} 

export const getFilters = (name) => FILTERS?.[name]