import { ProjectInput } from "./components/project-Input";
import { ProjectList } from "./components/project-List";

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
