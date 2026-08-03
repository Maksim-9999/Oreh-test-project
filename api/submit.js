module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, tel, email, select, message, radio } = req.body || {};

  if (![name, tel, email, select, message, radio].every(Boolean)) {
    return res.status(400).json({ message: "Заповніть усі обов'язкові поля." });
  }

  return res.status(201).json({ message: "Заявку успішно отримано." });
};
