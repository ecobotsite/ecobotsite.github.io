export default function setDateTimePickerValue(
  picker: any,
  dateTimeOffset: number
): void {
  console.log(picker);
  const end = new Date();
  const start = new Date();
  start.setTime(start.getTime() - dateTimeOffset);
  picker.$emit("pick", [start, end]);
}
