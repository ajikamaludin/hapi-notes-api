const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  created_at, // eslint-disable-line
  updated_at, // eslint-disable-line
}) => ({
  id,
  title,
  body,
  tags,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
