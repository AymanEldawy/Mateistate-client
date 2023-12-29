const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabaseKey = `6blGY2NV6KIrJLMkVSvy7WxppsdMjRlb2toFjyvDl3kJCBEWoU2K5rGVZcuOdE+3lyJyYYImoYhb6f5Uy315CA==`;

export async function fetchData(tableName) {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.pgrst.object+json",
        Authorization: `Bearer ${supabaseKey}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

export async function updateData(tableName, data) {
  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/${tableName}/${data.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Error updating data");
    }

    console.log("Data updated successfully");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

export async function insertData(tableName, data) {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error inserting data");
    }

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

export async function deleteData(tableName, id) {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${supabaseKey}`,
      },
    });

    if (!response.ok) {
      throw new Error("Error deleting data");
    }

    console.log("Data deleted successfully");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
