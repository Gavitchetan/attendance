const Admin = () => {
  // Fetch attendance records logic here

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Admin Management</h2>
      <ul className="list-disc pl-5">
        {/* Replace with fetched attendance records */}
        <li>John Doe - Present</li>
        <li>Jane Smith - Present</li>
        <li>Bob Johnson - Absent</li>
      </ul>
    </div>
  );
};

export default Admin;
