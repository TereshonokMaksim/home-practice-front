import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ThePage } from "./TestPage";


const rootElement = document.getElementById("root") as HTMLElement

const root = createRoot(rootElement)

// root.render(<App></App>)
root.render(<ThePage></ThePage>)