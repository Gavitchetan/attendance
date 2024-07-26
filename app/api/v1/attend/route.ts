import { NextApiRequest, NextApiResponse } from "next";

const attendanceHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name } = req.body;
    const currentTime = new Date();

    if (currentTime.getHours() >= 12) {
      return res
        .status(400)
        .json({ message: "Cannot mark attendance after 12:00 PM" });
    }

    return res.status(200).json({ message: "Attendance marked successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default attendanceHandler;
