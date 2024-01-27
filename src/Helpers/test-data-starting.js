const { ApiActions } = require("./Lib/api");

export async function generateDataStarting() {
  const currencyIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("currency", {
      data: {
        name: "currency" + i,
        code: `CR${i}`,
        rate: i * 2,
      },
    });
    if (response?.success) {
      currencyIds.push(response?.record.id);
    }
  }
  const cost_centerIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("cost_center", {
      data: {
        number: i * 2,
        name: "cost center" + i,
      },
    });
    if (response?.success) {
      cost_centerIds.push(response?.record.id);
    }
  }
  const accountIds = [];
  for (let i = 0; i < 5; i++) {
    const response = await ApiActions.insert("account", {
      data: {
        number: i + 1,
        name: "account" + (i + 1),
        type: Math.ceil(i % 3),
        currency_id: currencyIds[i % 4],
      },
    });
    if (response?.success) {
      accountIds.push(response?.record.id);
    }
  }
  const ownerIds = [];
  for (let i = 0; i < 5; i++) {
    const response = await ApiActions.insert("owner", {
      data: {
        full_name: "owner" + (i + 1),
      },
    });
    if (response?.success) {
      ownerIds.push(response?.record.id);
    }
  }
  const lessorIds = [];
  for (let i = 0; i < 5; i++) {
    const response = await ApiActions.insert("lessor", {
      data: {
        number: i + 1,
        full_name: "lessor" + (i + 1),
      },
    });
    if (response?.success) {
      lessorIds.push(response?.record.id);
    }
  }
  const sellerIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("seller", {
      data: {
        full_name: "seller" + (i + 1),
        minimum_commission: i * 20,
        maximum_discount: i * 20,
      },
    });
    if (response?.success) {
      sellerIds.push(response?.record.id);
    }
  }

  const bankIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("bank", {
      data: {
        name: "bank" + (i + 1),
      },
    });
    if (response?.success) {
      bankIds.push(response?.record.id);
    }
  }

  const userIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("user", {
      data: {
        number: i,
        card_type: Math.ceil(i % 1),
        user_type: Math.ceil(i % 1),
        account_id: accountIds?.[i % 4],
        date_of_birth: new Date(),
      },
    });
    if (response?.success) {
      userIds.push(response?.record.id);
    }
  }
  const assets_groupIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("assets_group", {
      data: {
        number: i,
        name: "assets group" + i,
      },
    });
    if (response?.success) {
      assets_groupIds.push(response?.record.id);
    }
  }

  const assetsIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("assets", {
      data: {
        number: i,
        name: "assets" + i,
        assets_group_id: assets_groupIds[i],
      },
    });
    if (response?.success) {
      assetsIds.push(response?.record.id);
    }
  }

  const material_groupIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("material_group", {
      data: {
        number: i,
        name: "material group" + i,
      },
    });
    if (response?.success) {
      material_groupIds.push(response?.record.id);
    }
  }

  const materialsIds = [];
  for (let i = 1; i < 5; i++) {
    const response = await ApiActions.insert("materials", {
      data: {
        number: i,
        name: "materials" + i,
        materials_group_id: material_groupIds[i],
      },
    });
    if (response?.success) {
      materialsIds.push(response?.record.id);
    }
  }
}

const contractPatterns = [
  {
    name: "apartment",
    type: 2,
    list: "Contract Rent",
    assets_type: 1,
  },
  {
    name: "shop",
    type: 2,
    list: "Contract Rent",
    assets_type: 3,
  },
  {
    name: "parking",
    type: 2,
    list: "Contract Rent",
    assets_type: 2,
  },
  {
    name: "apartment",
    type: 1,
    list: "Contract Rent",
    assets_type: 1,
  },
  {
    name: "shop",
    type: 1,
    list: "Contract Sale",
    assets_type: 3,
  },
  {
    name: "parking",
    type: 1,
    list: "Contract Sale",
    assets_type: 2,
  },
  {
    name: "land",
    type: 1,
    list: "Contract Sale",
    assets_type: 4,
  },
];

export async function generateContractPatterns() {
  for (const contract of contractPatterns) {
    const response = await ApiActions.insert("contract_pattern", {
      data: {
        contract_type: contract.type,
        name: contract.name,
        list_name: contract.list,
        assets_type: contract.assets_type,
        auto_gen_entries: true,
        auto_transfer_entry: true,
        gen_entries: true,
        insurance_required: true,
        record_date_created: 1,
      },
    });
  }
}
// generateContractPatterns()

let vouchers = [
  {
    auto_gen_entries: true,
    auto_transfer_entry: true,
    code: 1,
    gen_entries: true,
    generate_records: true,
    list_name: "vouchers",
    name: "payment",
    required_cost_center: true,
    required_statement: true,
    show_contract_cost_center: true,
    show_contract_field: true,
    show_cost_center: true,
    show_credit_field: true,
    show_currency: true,
    show_note: true,
  },
  {
    auto_gen_entries: true,
    auto_transfer_entry: true,
    code: 2,
    gen_entries: true,
    generate_records: true,
    list_name: "vouchers",
    name: "receipts",
    required_cost_center: true,
    required_statement: true,
    show_contract_cost_center: true,
    show_contract_field: true,
    show_cost_center: true,
    show_debit_field: true,
    show_credit_field: false,
    show_currency: true,
    show_note: true,
  },
];

async function generateVouchersPattern() {
  for (const voucher of vouchers) {
    await ApiActions.insert("voucher_pattern", {
      data: voucher,
    });
  }
}
// generateVouchersPattern()
