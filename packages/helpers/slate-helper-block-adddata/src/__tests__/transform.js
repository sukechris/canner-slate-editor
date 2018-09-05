import addDataToCurrent from "../";
import { Range, Point } from "slate";

export default change => {
  const { value } = change;
  const { document } = value;
  const first = document.getFirstText();
  const range = Range.create({
    anchor: Point.create({
      key: first.key,
      offset: 0
    }),
    focus: Point.create({
      key: first.key,
      offset: 5
    })
  });

  return change
    .select(range)
    .call(change => addDataToCurrent(change, { data: { foo: "bar" } }));
};