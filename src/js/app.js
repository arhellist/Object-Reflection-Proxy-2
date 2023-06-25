export default function desrtuct(characters) {
  const arRes = [];
  for (const item of characters) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    arRes.push({
      id, name, icon, description,
    });
  }
  return arRes;
}
