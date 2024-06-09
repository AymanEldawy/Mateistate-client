/**
 * @typedef {Object} ErrorResponse
 * @property {boolean} success - Indicates whether the operation was successful.
 * @property {string} message - A message describing the error.
 */

/**
 * @typedef {Object} Condition
 * @property {string} type - The type of condition, either 'or' or 'and'.
 * @property {Array<Array<string|number>>} conditions - An array of conditions, where each condition is represented by an array of values.
 */

/**
 * @typedef {Object} JoinCondition
 * @property {string} type - The type of join, e.g., 'join', 'innerJoin', 'leftJoin', etc.
 * @property {string} table - The name of the table to join.
 * @property {Object} conditions - Join conditions represented as an object, e.g., {'target_table.column':'another_table.column'}.
 */

/**
 * @typedef {Object} SortCriteria
 * @property {string} column - The name of the column to sort by.
 * @property {string} order - The sorting order, either 'ASC' for ascending or 'DESC' for descending.
 * @property {string} nulls - The position of null values in the sorting order, either 'first' or 'last'.
 */

/**
 * @typedef {Object} UnionCondition
 * @property {Array<string>} columns - An array of column names to include in the union.
 * @property {string} table - The name of the table to union with.
 * @property {Array<Array<string|number>>} conditions - An array of conditions for the union, where each condition is represented by an array of values.
 */

/**
 * @typedef {Object} CreateRecordRequestBody
 * @property {Object} data - The data to be inserted into the table.
 */

/**
 * @typedef {Object} CreateRecordResponse
 * @property {boolean} success - Indicates whether the operation was successful.
 * @property {string} message - A message describing the result of the operation.
 * @property {Object} record - The created record.
 */

/**
 * @typedef {Object} ReadRecordRequestBody
 * @property {number} offset - The number of records to skip.
 * @property {number} limit - The maximum number of records to retrieve.
 * @property {Array<Condition>} conditions - An array of conditions for filtering records.
 * @property {Array<JoinCondition>} joins - An array of join conditions for fetching related records.
 * @property {Array<SortCriteria>} sorts - An array of sorting criteria for the result.
 * @property {Array<string>} columns - An array of column names to retrieve.
 * @property {Array<UnionCondition>} unions - An array of union conditions for combining results.
 */

/**
 * @typedef {Object} ReadRecordResponse
 * @property {boolean} success - Indicates whether the operation was successful.
 * @property {string} message - A message describing the result of the operation.
 * @property {Array<Object>} result - An array of records retrieved from the table.
 */

/**
 * @typedef {Object} UpdateRecordRequestBody
 * @property {Array<Condition>} conditions - An array of conditions for updating records.
 * @property {Object} updates - The updates to be applied to matching records.
 */

/**
 * @typedef {Object} UpdateRecordResponse
 * @property {boolean} success - Indicates whether the operation was successful.
 * @property {string} message - A message describing the result of the operation.
 * @property {number} updatedRecordsCount - The number of records updated.
 */

/**
 * @typedef {Object} DeleteRecordRequestBody
 * @property {Array<Condition>} conditions - An array of conditions for deleting records.
 */

/**
 * @typedef {Object} DeleteRecordResponse
 * @property {boolean} success - Indicates whether the operation was successful.
 * @property {string} message - A message describing the result of the operation.
 * @property {number} deletedRecordsCount - The number of records deleted.
 */

/**
 * MatieStateClient class for interacting with a MatieState API.
 *
 * @class
 */
class MatieStateClient {
  /**
   * Creates an instance of MatieStateClient.
   *
   * @constructor
   * @param {string} baseURL - The base URL of the Fastify API.
   * @param {string} token - The Token for authentication.
   */
  constructor(baseURL, token) {
    /** @private @type {string} */
    this.m_baseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
    /** @private @type {string} */
    this.m_token = token;
  }
	
  async getReport(reportName, data) {
    try {
      const response = await fetch(`${this.m_baseURL}/report/${reportName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": this.m_token,
        },
        body: JSON.stringify(data),
      });

			if (!response.ok) {
        throw await response.json();
      }

      return response.json();
    } catch (error) {
      throw {
        success: false,
        message: "Error Failed to retrieve report",
        error,
      };
    }
  }

  /**
   * Creates a record in the specified table.
   *
   * @async
   * @param {string} tableName - The name of the target table.
   * @param {CreateRecordRequestBody} data - The data to be inserted into the table.
   * @returns {Promise<CreateRecordResponse>} - A Promise that resolves to the API response.
   * @throws {ErrorResponse} - An object representing an error response in case of failure.
   */
  async createRecord(tableName, data) {
    try {
      const response = await fetch(`${this.m_baseURL}/create/${tableName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": this.m_token,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw await response.json();
      }

      return response.json();
    } catch (error) {
      throw { success: false, message: "Error creating record", error };
    }
  }

  /**
   * Reads records from the specified table based on the provided criteria.
   *
   * @async
   * @param {string} tableName - The name of the target table.
   * @param {ReadRecordRequestBody} data - The criteria for reading records.
   * @returns {Promise<ReadRecordResponse>} - A Promise that resolves to the API response.
   * @throws {ErrorResponse} - An object representing an error response in case of failure.
   */
  async readRecords(tableName, data) {
    try {
      const response = await fetch(`${this.m_baseURL}/read/${tableName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": this.m_token,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw await response.json();
      }

      return response.json();
    } catch (error) {
      throw { success: false, message: "Error reading records", error };
    }
  }

  /**
   * Updates records in the specified table based on the provided criteria.
   *
   * @async
   * @param {string} tableName - The name of the target table.
   * @param {UpdateRecordRequestBody} data - The criteria and updates for updating records.
   * @returns {Promise<UpdateRecordResponse>} - A Promise that resolves to the API response.
   * @throws {ErrorResponse} - An object representing an error response in case of failure.
   */
  async updateRecords(tableName, data) {
    try {
      const response = await fetch(`${this.m_baseURL}/update/${tableName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": this.m_token,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw await response.json();
      }

      return response.json();
    } catch (error) {
      throw { success: false, message: "Error updating records", error };
    }
  }

  /**
   * Deletes records from the specified table based on the provided criteria.
   *
   * @async
   * @param {string} tableName - The name of the target table.
   * @param {DeleteRecordRequestBody} data - The criteria for deleting records.
   * @returns {Promise<DeleteRecordResponse>} - A Promise that resolves to the API response.
   * @throws {ErrorResponse} - An object representing an error response in case of failure.
   */
  async deleteRecords(tableName, data) {
    try {
      const response = await fetch(`${this.m_baseURL}/delete/${tableName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-token": this.m_token,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw await response.json();
      }

      return response.json();
    } catch (error) {
      throw { success: false, message: "Error deleting records", error };
    }
  }
}

export default MatieStateClient;
