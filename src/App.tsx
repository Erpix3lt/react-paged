import { Book } from "./book";
import { Layouter } from "./paged/layouter";

export default function App() {
  return (
    <div>
      <div id="pagedjsdocroot" style={{ display: "none" }}>
        <Book />
      </div>
      <div id="preview"></div>
      <Layouter />
    </div>
  );
}
