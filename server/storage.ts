const storage = {
  async getUsers() {
    return [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ];
  },
};

export default storage; // Ensure the default export exists
