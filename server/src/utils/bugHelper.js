// Simple validation helper used by unit tests
function validateBug(bug) {
  if (!bug) return false;
  const { title, description, status } = bug;
  if (!title || !description) return false;
  const validStatus = ["open", "in-progress", "resolved"];
  if (status && !validStatus.includes(status)) return false;
  return true;
}

module.exports = { validateBug };
