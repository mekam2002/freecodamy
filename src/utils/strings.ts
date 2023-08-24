export function capitalizeFirstLetter(value: string) {
  return value?.trim().charAt(0)?.toUpperCase() + value?.slice(1);
}

export const camelCaseToText = (value: string) => {
  return capitalizeFirstLetter(
    value?.replace(/[A-Z]/g, (letter) => ` ${letter}`),
  );
};

export function getFirstLetters(str: string) {
  const firstLetters = str
    ?.split(" ")
    ?.map((word) => word[0])
    ?.join("");

  return firstLetters;
}

export function stringReduceAddDots(value: string, limit: number) {
  if (String(value).length <= limit) {
    return value;
  } else {
    return `${String(value).slice(0, limit)}...`;
  }
}
export function getName(inputString: string): string {
  const parts = inputString.split("/").filter(part => part !== "");
  return parts[0] || "";
}