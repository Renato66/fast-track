/**
 * Generates a unique identifier, usefull for creating unique form fields `id`.
 *
 * @param id If an specific `id` is manually provided, generation is just skipped.
 * @returns string
 */
const uidGenerator = (id?: string | number | null): string => {
  if (!!id || id === 0) return id.toString();

  const block = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return `${block()}${block()}-${block()}-${block()}-${block()}-${block()}${block()}${block()}`;
};

export default uidGenerator;
