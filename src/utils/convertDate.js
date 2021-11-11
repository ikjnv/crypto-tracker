export default function convertToIsoDate(longDate) {
  return new Date(longDate).toISOString().split('T', 1)[0];
}
